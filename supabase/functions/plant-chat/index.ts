import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const systemPrompt = `You are Dr.PlantAI, the crop-health assistant for the Dr.PlantAI website. Help farmers understand crop symptoms, prevention, and practical next steps. Use conversation history and ask one focused follow-up when the crop, symptoms, or timing is unclear.

The website's image-diagnosis library covers Apple (scab, black rot, cedar apple rust), Cherry (powdery mildew), Corn/Maize (Cercospora/gray leaf spot, common rust, northern leaf blight), Grape (black rot, Esca/black measles, leaf blight), Orange (Huanglongbing/citrus greening), Peach (bacterial spot), Bell Pepper (bacterial spot), Potato (early blight, late blight), Squash (powdery mildew), Strawberry (leaf scorch), and Tomato (bacterial spot, early blight, late blight, leaf mold, Septoria leaf spot, two-spotted spider mites, target spot, yellow leaf curl virus, mosaic virus). The website also has healthy crop guidance for these crops.

Be clear that a text conversation cannot inspect a plant or confirm a diagnosis. When an image-based check would help, direct the user to the website's Diagnose page. For likely causes, use cautious language and distinguish lookalike symptoms. Prefer short answers with: likely issue, what to check or do now, and prevention. Never recommend a pesticide or fertilizer dose; tell users to follow the product label and local agricultural guidance. Keep advice practical, safe, and easy to understand.`;

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return jsonResponse({ error: "Method not allowed." }, 405);

  const apiKey = Deno.env.get("GEMINI_API_KEY");
  if (!apiKey) return jsonResponse({ error: "GEMINI_API_KEY is not configured in Supabase secrets." }, 500);

  try {
    const body = await request.json();
    const message = typeof body.message === "string" ? body.message.trim() : "";
    if (!message || message.length > 4000) {
      return jsonResponse({ error: "Enter a message no longer than 4,000 characters." }, 400);
    }

    const history = Array.isArray(body.history)
      ? body.history.slice(-10).flatMap((item: unknown) => {
        if (!item || typeof item !== "object") return [];
        const entry = item as Record<string, unknown>;
        if (typeof entry.text !== "string" || (entry.sender !== "user" && entry.sender !== "bot")) return [];
        return [{
          role: entry.sender === "bot" ? "model" : "user",
          parts: [{ text: entry.text.slice(0, 1500) }],
        }];
      })
      : [];

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents: [...history, { role: "user", parts: [{ text: message }] }],
          generationConfig: { temperature: 0.6, maxOutputTokens: 600 },
        }),
      },
    );

    const result = await response.json();
    if (!response.ok) {
      return jsonResponse({ error: "The Gemini request failed. Check the Gemini API key and quota." }, 502);
    }

    const reply = result.candidates?.[0]?.content?.parts
      ?.map((part: { text?: string }) => part.text || "")
      .join("")
      .trim();

    if (!reply) return jsonResponse({ error: "Gemini returned an empty reply." }, 502);
    return jsonResponse({ reply });
  } catch {
    return jsonResponse({ error: "The chatbot request could not be processed." }, 400);
  }
});