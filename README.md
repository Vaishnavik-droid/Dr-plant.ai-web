# Dr-Plant AI

Dr-Plant AI is a React-based plant-care and agricultural support web application. It combines crop and disease reference information, image-upload diagnosis flows, an AI plant-care assistant, weather insights, authentication, and a local agricultural marketplace in one user-facing experience.

> **Implementation note:** The current repository is a Vite web application. The diagnosis upload flow currently routes to demo diagnosis data, while the conversational AI assistant is connected to a Supabase Edge Function that calls Google Gemini when configured.

## 🌱 About the Project

Plant disease identification and crop-care decisions can be difficult when reliable agricultural guidance is not immediately available. Dr-Plant AI provides a single interface where users can explore crop and disease information, upload a plant image for the diagnosis workflow, ask plant-care questions, review weather-related insights, and find agricultural products.

The application supports:

- Farmers and growers looking for crop-care guidance.
- Users researching common crops, diseases, symptoms, causes, and prevention practices.
- Buyers looking for agricultural products from the marketplace.
- Shop owners who need to manage products, buyer requests, orders, and shop settings.

The AI assistant uses a Supabase Edge Function and the Google Gemini `gemini-2.5-flash` model to answer plant-care questions using the current message and recent conversation history. The repository also contains a diagnosis interface and result presentation, but the current image-analysis action uses a short simulated delay and displays data from `src/data/mockDiagnoses.js` rather than sending the uploaded image to a trained vision model.

## ✨ Key Features

- 🌿 Crop reference library with growing conditions, soil requirements, watering guidance, common diseases, pests, and care tips.
- 🦠 Disease library with symptoms, causes, severity, treatment guidance, prevention, and management tips.
- 📷 Plant-image upload interface supporting image previews and JPG, JPEG, and PNG guidance.
- 🩺 Diagnosis workflow with loading state and diagnosis-result presentation.
- 🤖 Plant-care assistant powered by the `plant-chat` Supabase Edge Function and Google Gemini.
- 💬 Chatbot widget available throughout most non-assistant pages.
- 🌦️ Weather insight page with temperature, humidity, wind, condition, rain probability, and a crop-care insight. The current weather service returns mock data for Nagpur.
- 🛒 Agricultural marketplace with product search, category filtering, price filtering, sorting, location selection, product details, cart, checkout, and orders.
- 🏪 Shop-owner workspace with dashboards for products, buyer requests, orders, shop profile, and settings.
- 🔐 Supabase email/password authentication, registration, password reset, password update, and sign-out flows.
- 🛡️ Role-based route protection for shop-owner pages through `RoleGuard`.
- 🌍 Language context with supported-language selection and DOM text/attribute translation using the repository's translation data.
- 🎞️ Animated interface elements using Framer Motion.
- 🎨 Responsive styling built with CSS and Tailwind/PostCSS tooling.

## 🧠 How It Works

### Plant diagnosis flow

1. The user opens the diagnosis interface and selects an image through `UploadBox`.
2. The selected image is displayed locally using `URL.createObjectURL`.
3. The user selects **Analyze Plant**.
4. The current implementation shows an approximately 2.2-second simulated analysis state.
5. The app navigates to `/diagnosis/diag-demo`.
6. `DiagnosisResultPage` selects a record from `src/data/mockDiagnoses.js` and displays the crop, possible disease, confidence value, status, symptoms, treatment guidance, prevention advice, and care tips.

### AI assistant flow

1. The user opens the assistant page or the floating chatbot widget.
2. The user enters a plant or crop-care question, or selects a suggested question.
3. The frontend sends the message and recent chat history to the Supabase `plant-chat` Edge Function.
4. The Edge Function validates the request and limits the message/history content.
5. The function calls Google's Gemini API using the `gemini-2.5-flash` model and a plant-care system prompt.
6. The function returns a JSON response containing `reply`.
7. The frontend displays the response in the assistant or chatbot conversation.

### Marketplace and shop-owner flow

1. A user browses locally defined marketplace products.
2. Products can be searched, filtered, sorted, and viewed in detail.
3. Products can be added to the cart and submitted as a buyer request during checkout.
4. Shop-owner pages read and update seller data, products, requests, and orders through browser storage utilities in `src/data/sellerData.js` and `src/services/shopOwnerService.js`.

## 🛠️ Tech Stack

| Area | Implementation |
|---|---|
| Frontend | React 19 with JSX |
| Build tool | Vite 8 |
| Routing | React Router DOM 7 |
| Styling | CSS, Tailwind CSS 3, PostCSS, and Autoprefixer |
| UI and animation | Lucide React icons and Framer Motion |
| Authentication | Supabase Auth via `@supabase/supabase-js` |
| AI/ML | Google Gemini `gemini-2.5-flash` called from the Supabase Edge Function `plant-chat` |
| Backend | Supabase Edge Function written for the Deno Edge Runtime |
| Database | No application database tables or queries are defined in the inspected repository; marketplace/shop-owner demo state uses `localStorage` |
| External services | Supabase Functions and the Google Generative Language API |
| Validation/tooling | Oxlint |
| Deployment | No deployment configuration is defined in the repository; the app can be built with Vite using `npm run build` |

## 📂 Project Structure

```text
.
├── index.html                 # HTML entry point and application mount element
├── package.json               # Scripts and runtime/development dependencies
├── package-lock.json          # Locked npm dependency versions
├── vite.config.js             # Vite configuration with the React plugin
├── public/
│   ├── favicon.svg            # Application favicon
│   └── icons.svg              # Shared SVG icon resources
├── src/
│   ├── main.jsx               # React root, StrictMode, and LanguageProvider setup
│   ├── App.jsx                # Browser routes, layouts, route guards, and chatbot mounting
│   ├── App.css                # Application-level styles
│   ├── index.css              # Global and page styling
│   ├── assets/                # Source assets imported by the frontend
│   ├── components/            # Shared UI components and seller layout components
│   │   ├── UploadBox.jsx      # Plant image selection and preview UI
│   │   ├── ChatbotWidget.jsx  # Floating AI assistant widget
│   │   ├── RoleGuard.jsx      # Shop-owner route protection
│   │   └── SellerLayout.jsx   # Shop-owner application layout
│   ├── data/                  # Crop, disease, marketplace, diagnosis, and seller data
│   │   ├── crops.js           # Crop reference records
│   │   ├── diseases.js        # Disease reference records
│   │   ├── mockDiagnoses.js   # Demo diagnosis result records
│   │   ├── marketplace.js     # Marketplace products, categories, cart, and locations
│   │   └── sellerData.js      # Seller demo data and seller-side storage helpers
│   ├── i18n/                  # Language context and translation data
│   │   ├── LanguageContext.jsx
│   │   └── translations.js
│   ├── pages/                 # Routed screens for users, buyers, and shop owners
│   │   ├── Diagnose.jsx       # Plant image upload and analysis flow
│   │   ├── DiagnosisResultPage.jsx
│   │   ├── Assistant.jsx      # Full-page AI assistant
│   │   ├── Weather.jsx        # Weather insight view
│   │   ├── Shop.jsx           # Marketplace browsing
│   │   ├── Checkout.jsx       # Buyer request checkout flow
│   │   ├── Login.jsx          # Supabase sign-in
│   │   ├── Register.jsx       # Account and shop-owner registration
│   │   └── Seller*.jsx        # Shop-owner dashboard screens
│   └── services/              # External integrations and application services
│       ├── aiService.js       # Frontend client for the plant-chat function
│       ├── authService.js     # Supabase authentication helpers
│       ├── supabaseClient.js  # Supabase client configuration
│       ├── shopOwnerService.js# Browser-storage shop-owner data helpers
│       └── weatherService.js  # Current mock weather provider
└── supabase/
    └── functions/
        └── plant-chat/
            └── index.ts       # Gemini-backed Supabase Edge Function
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm.
- A Supabase project if you want authentication and the AI assistant to work.
- A deployed `plant-chat` Supabase Edge Function with a Gemini API key stored in Supabase secrets if you want dynamic assistant responses.

### Installation

```bash
git clone https://github.com/Vaishnavik-droid/Dr-plant.ai-web.git
cd Dr-plant.ai-web
npm install
```

### Configuration

Create a local `.env` file in the project root. Do not commit real credentials.

```dotenv
VITE_SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

The frontend reads these variables in `src/services/supabaseClient.js`, `src/services/authService.js`, and `src/services/aiService.js`.

The Supabase Edge Function separately expects the following secret in the Supabase environment:

```text
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

The Gemini key is read server-side by `supabase/functions/plant-chat/index.ts`; it should not be placed in the frontend `.env` file.

If Supabase variables are missing, the frontend can still be built, but authentication and dynamic assistant responses will not be available. The repository's Supabase client falls back to placeholder values for initialization, while the authentication and AI services explicitly require configured variables.

### Run Locally

Start the Vite development server:

```bash
npm run dev
```

Build the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run the repository lint command:

```bash
npm run lint
```

The repository does not include a local backend server command. The `plant-chat` backend is a Supabase Edge Function and must be deployed/configured separately for live AI responses.

## 📱 Usage

### Explore crop and disease information

1. Open the application.
2. Browse **Crops** to view crop-specific growing and care information.
3. Browse **Diseases** to review symptoms, causes, severity, treatment, prevention, and management tips.

### Use the diagnosis interface

1. Open the diagnosis screen.
2. Upload a clear JPG, JPEG, or PNG image of a plant or leaf.
3. Review the local preview.
4. Select **Analyze Plant**.
5. Review the available diagnosis result and treatment/prevention guidance.

The current diagnosis result is demonstration data; the uploaded image is not yet sent to an image-classification model.

### Ask the AI assistant

1. Open **Assistant** or use the floating chatbot button.
2. Enter a question about crop stress, disease signs, watering, nutrients, or plant care.
3. Submit the question.
4. Review the Gemini-generated response.

### Use the marketplace

1. Open **Shop**.
2. Select a location and use search, category, price, or sorting controls.
3. Open a product for details.
4. Add products to the cart.
5. Complete the checkout form to create a buyer request.

### Use shop-owner features

1. Register or sign in through the authentication screens.
2. Shop-owner accounts are routed to the shop-owner dashboard.
3. Review buyer requests, manage products and orders, and update shop profile/settings through the seller navigation.

## 🤖 AI Features

The implemented live AI feature is the plant-care conversational assistant:

- Frontend entry points: `src/pages/Assistant.jsx` and `src/components/ChatbotWidget.jsx`.
- Frontend service: `src/services/aiService.js`.
- Backend function: `supabase/functions/plant-chat/index.ts`.
- Model endpoint: Google Generative Language API using `gemini-2.5-flash`.
- Context: the frontend sends the current question and chat history; the Edge Function keeps up to the last 10 history entries and truncates individual history messages.
- Response format: `{ "reply": "..." }` on success.
- Input limit: messages longer than 4,000 characters are rejected by the Edge Function.

The plant-image diagnosis UI is currently a prototype flow. It uses local image previewing, a simulated analysis delay, and records from `mockDiagnoses.js`; no computer-vision model or image-analysis API is called by `Diagnose.jsx`.

## 🗄️ Data Storage

The repository does not define application database tables, migrations, or direct database queries.

- **Supabase Auth** is used for account authentication and password-management operations.
- **Browser `localStorage`** stores the current profile, language selection, marketplace/cart state, and shop-owner demo data.
- **Static JavaScript modules** provide crop records, disease records, marketplace products, seller data, and mock diagnoses.
- The Supabase Edge Function uses Supabase infrastructure to proxy the AI request, but no application data schema is present in this repository.

## 🔌 API / Backend

### Supabase Edge Function: `plant-chat`

The frontend invokes the function with `supabase.functions.invoke('plant-chat', ...)`.

**Request body:**

```json
{
  "message": "Why are my tomato leaves turning yellow?",
  "history": [
    {
      "sender": "bot",
      "text": "Hi! Ask me about crop stress, disease signs, watering, or nutrients."
    }
  ]
}
```

**Successful response:**

```json
{
  "reply": "A few common causes are..."
}
```

The function accepts `POST` requests and handles `OPTIONS` for CORS. It returns errors for unsupported methods, missing `GEMINI_API_KEY`, invalid/empty messages, Gemini request failures, and empty model responses.

### Authentication services

`src/services/authService.js` uses Supabase Auth for:

- Email/password sign-in.
- Account registration with profile metadata.
- Password reset email requests.
- Password updates.
- Sign-out and local profile cleanup.

### Weather service

`src/services/weatherService.js` currently returns mock weather data after a short delay. It does not call an external weather API.

## 📸 Screenshots

No screenshot files are currently included in the repository. Screenshots can be added later, for example:

```markdown
![Home Screen](screenshots/home.png)
![Diagnosis Screen](screenshots/diagnosis.png)
![Shop Owner Dashboard](screenshots/shop-owner-dashboard.png)
```

## 🔐 Security

- Keep `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in local environment configuration rather than hard-coding them in source files.
- Keep `GEMINI_API_KEY` in Supabase secrets. The Edge Function reads it with `Deno.env.get` and does not expose it to the browser.
- Do not commit `.env` files containing real credentials.
- Supabase Auth manages sign-in, registration, password reset, password update, and session persistence.
- `RoleGuard` restricts shop-owner routes based on the locally stored authenticated profile role.
- Treat the current `localStorage`-based marketplace and seller data as client-side demo state, not as a secure source of truth for production transactions or authorization.
- Review the Edge Function's permissive CORS policy before production deployment if the function should only accept requests from approved application origins.

## 🌍 Future Enhancements

The following are proposed improvements, not current repository functionality:

- Replace the simulated diagnosis flow with a real image-classification or multimodal plant-disease model.
- Persist diagnoses, products, orders, and seller data in a secured Supabase database with row-level security.
- Connect the weather screen to a production weather API and use the selected user location instead of the current mock Nagpur data.
- Add server-side validation and authorization for marketplace checkout, seller actions, and order status changes.
- Add automated tests for routes, authentication, diagnosis flows, marketplace behavior, and the AI assistant.
- Add production deployment configuration and CI checks.
- Add real camera capture support to the current **Use Camera** interface control.
- Add accessible, repository-hosted screenshots and a live demo link.

## 👥 Team

Team/member information is not specified in the repository. Add contributor names, roles, and links here when available.

## 📄 License

License information has not been specified yet.

## 🙌 Acknowledgements

- [React](https://react.dev/) for the user interface framework.
- [Vite](https://vite.dev/) for development and production tooling.
- [Supabase](https://supabase.com/) for authentication and Edge Functions.
- [Google Gemini](https://ai.google.dev/) for the conversational plant-care assistant integration.
- [Lucide](https://lucide.dev/) for interface icons.
- [Framer Motion](https://motion.dev/) for UI animation support.

## 📞 Contact

Contact information is not specified in the repository. Add a maintainer email, project website, or issue-tracker contact here when available.
