export const suggestedQuestions = [
  'My tomato leaves have brown rings. What should I check?',
  'Why are my apple leaves getting dark spots?',
  'How can I manage powdery mildew on squash?',
  'What should I do about yellow mottling on citrus leaves?'
]

export const getAssistantReply = async (message = '', history = []) => {
  if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
    throw new Error('Connect this app to Supabase and deploy the plant-chat function to enable dynamic answers.')
  }

  const { supabase } = await import('./supabaseClient')
  const { data, error } = await supabase.functions.invoke('plant-chat', {
    body: { message, history }
  })

  if (error) {
    throw new Error('The chatbot could not reach its AI service. Check the Supabase function deployment and configuration.')
  }

  if (typeof data?.reply !== 'string' || !data.reply.trim()) {
    throw new Error('The AI service returned an empty response. Please try again.')
  }

  return data.reply.trim()
}
