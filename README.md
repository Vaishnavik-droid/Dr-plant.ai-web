# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration
If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate these rules and Oxlint's TypeScript related rules in your project.

## Dynamic Plant Chatbot

The chat UI calls the `plant-chat` Supabase Edge Function, which sends questions and recent conversation history to Gemini. The Gemini API key stays in Supabase secrets and is never added to frontend code.

1. Copy `.env.example` to `.env.local` and set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` from your Supabase project.
2. In the Supabase dashboard, add `GEMINI_API_KEY` under Edge Function secrets.
3. Install and sign in to the Supabase CLI, then deploy with `supabase functions deploy plant-chat --project-ref <project-ref>`.
4. Restart the Vite development server.

Do not put the Gemini API key in a `VITE_` variable or commit it to the repository.

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
