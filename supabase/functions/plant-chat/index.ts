import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const systemPrompt = `You are Dr.Plant AI, a helpful plant and crop-care assistant. Give clear, practical answers and use the conversation history for context. If symptoms are unclear, ask a concise follow-up question. Do not claim a definitive diagnosis from text alone. For pesticide or fertilizer use, tell the user to follow the product label and local agricultural guidance. Keep replies focused and easy to understand.`;

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