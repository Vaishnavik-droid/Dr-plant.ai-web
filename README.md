# Dr-Plant AI

> An AI-assisted plant health and agricultural support platform for crop information, disease awareness, plant-care guidance, and local agricultural shopping.

Dr-Plant AI is a React-based web application that brings crop knowledge, plant diagnosis workflows, an AI plant-care assistant, weather insights, multilingual support, and a local agricultural marketplace into one interface.

## 🌱 About the Project

Dr-Plant AI is designed to help farmers, growers, gardeners, and agricultural shop owners make better-informed plant-care decisions.

The application addresses common challenges such as:

- Recognising common crop diseases and their symptoms
- Finding practical treatment and prevention guidance
- Asking questions about crop stress, watering, nutrients, and disease patterns
- Discovering agricultural products and local shop listings
- Managing seller products, orders, buyer requests, and shop information
- Accessing plant-health information in English, Hindi, or Marathi

The project includes an image-upload diagnosis workflow and a conversational AI assistant. The current image diagnosis flow is implemented as a frontend demonstration that navigates to a sample diagnosis result after an upload. The conversational assistant uses a Supabase Edge Function connected to the Google Gemini API for dynamic text responses.

## ✨ Key Features

- 🌿 **Crop information library** with crop details, growing conditions, soil requirements, water requirements, common diseases, and pests
- 🦠 **Plant disease library** with searchable disease information, symptoms, possible causes, treatment guidance, prevention, and management tips
- 📷 **Plant image diagnosis workflow** with JPG, JPEG, and PNG upload support, image preview, loading state, and diagnosis-result navigation
- 🤖 **AI plant-care assistant** for questions about crop stress, nutrient concerns, disease patterns, and watering advice
- 💬 **Suggested assistant questions** to help users start a plant-health conversation
- 🌦️ **Weather overview** with temperature, humidity, rain probability, wind, condition, and a plant-care insight
- 🛒 **Agricultural marketplace** for seeds, fertilizers, plant nutrition, organic products, crop protection, gardening supplies, farming tools, and other plant-care products
- 📍 **Location-aware marketplace interface** organised around states, districts, and cities/villages
- 🛍️ **Cart and checkout request flow** for submitting buyer requests to local shops
- 📦 **Orders and buyer request tracking** for growers
- 🏪 **Shop-owner workspace** with dashboards for products, orders, buyer requests, profile details, and settings
- 🔐 **Authentication flows** for sign in, registration, password reset, password updates, and sign out through Supabase Auth
- 👤 **Role-based routing** for grower and shop-owner experiences
- 🌐 **Multilingual interface** supporting English, Hindi, and Marathi
- 🌙 **Light and dark mode controls** exposed through the application interface
- 📱 **Responsive web experience** with a download page prepared for a future Android APK
- 💾 **Browser persistence** using `localStorage` for profiles, cart data, marketplace location, shop-owner demo data, products, orders, uploads, and premium claims

## 🧠 How It Works

### Plant diagnosis workflow

1. The user opens the plant diagnosis page.
2. The user selects an image of a plant or affected leaf.
3. The application displays a local image preview.
4. The user starts the analysis workflow.
5. The frontend shows an analysing state for a short simulated processing period.
6. The application navigates to a sample diagnosis result page.
7. Diagnosis examples and recommendations are supplied by the repository's local diagnosis data and page components.

> The current repository does not contain an image-classification model or an image-analysis API call for this workflow. The upload-to-result flow is currently a frontend demonstration.

### AI assistant workflow

1. The user opens the Assistant page or chatbot widget.
2. The user enters a plant-health question or selects a suggested question.
3. The frontend sends the message and recent conversation history to the Supabase `plant-chat` Edge Function.
4. The Edge Function validates the request and forwards it to Google's Gemini `gemini-2.5-flash` model.
5. Gemini generates a text response using the Dr.PlantAI system instructions.
6. The Edge Function returns the response to the frontend.
7. The assistant displays the response in the conversation window.

## 🛠️ Tech Stack

| Area | Technologies used |
| --- | --- |
| Frontend | React 19, React DOM, JavaScript/JSX |
| Build tool | Vite |
| Routing | React Router DOM |
| Styling | CSS, Tailwind CSS, PostCSS, Autoprefixer |
| UI and animation | Framer Motion, Lucide React |
| Authentication | Supabase Auth via `@supabase/supabase-js` |
| Backend service | Supabase Edge Function using Deno runtime |
| AI/ML | Google Gemini API using the `gemini-2.5-flash` model for text-based plant-care chat |
| HTTP client | Axios is included as a project dependency; the inspected AI Edge Function uses the native `fetch` API |
| Data storage | Browser `localStorage` for application/demo state; Supabase is used for authentication and Edge Function access |
| Validation and tooling | Oxlint |
| Deployment artifacts | Vite production output is generated in `dist/` |

## 📂 Project Structure

```text
Dr-plant.ai-web/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── voiceflow-theme.css
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── Assistant and chatbot UI components
│   │   ├── Navigation, footer, buttons, cards, and section components
│   │   ├── UploadBox.jsx
│   │   ├── RoleGuard.jsx
│   │   └── SellerLayout.jsx
│   ├── data/
│   │   ├── crops.js
│   │   ├── diseases.js
│   │   ├── marketplace.js
│   │   ├── mockDiagnoses.js
│   │   └── sellerData.js
│   ├── i18n/
│   │   ├── LanguageContext.jsx
│   │   └── translations.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Crops.jsx and CropDetails.jsx
│   │   ├── Diseases.jsx and DiseaseDetails.jsx
│   │   ├── Diagnose.jsx and DiagnosisResultPage.jsx
│   │   ├── Assistant.jsx
│   │   ├── Dashboard.jsx, Plants.jsx, and Profile.jsx
│   │   ├── Weather.jsx
│   │   ├── Shop.jsx, ProductDetails.jsx, Cart.jsx, and Checkout.jsx
│   │   ├── Orders.jsx
│   │   ├── Login.jsx, Register.jsx, and ForgotPassword.jsx
│   │   ├── Download.jsx and About.jsx
│   │   └── Seller*.jsx pages for shop-owner workflows
│   ├── services/
│   │   ├── aiService.js
│   │   ├── authService.js
│   │   ├── shopOwnerService.js
│   │   ├── supabaseClient.js
│   │   └── weatherService.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── supabase/
│   └── functions/
│       └── plant-chat/
│           └── index.ts
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .env
└── .gitignore
```

### Important files

- `src/App.jsx` defines the application routes, public routes, protected routes, seller routes, and role guards.
- `src/pages/Diagnose.jsx` implements the image selection, preview, upload validation, and demonstration analysis flow.
- `src/pages/Assistant.jsx` implements the conversational plant-care interface.
- `src/services/aiService.js` invokes the Supabase `plant-chat` function and validates assistant responses.
- `src/services/authService.js` manages Supabase authentication and browser-stored profiles.
- `src/services/shopOwnerService.js` manages the shop-owner demo profile, products, orders, uploads, and premium claims in `localStorage`.
- `src/data/crops.js`, `src/data/diseases.js`, and `src/data/mockDiagnoses.js` provide the application's local crop, disease, and sample diagnosis content.
- `src/data/marketplace.js` provides marketplace products, shop listings, categories, locations, and cart helpers.
- `src/i18n/translations.js` contains the English, Hindi, and Marathi translation dictionaries.
- `supabase/functions/plant-chat/index.ts` validates chat requests and calls the Gemini API without exposing the Gemini key to the browser.
- `vite.config.js` configures Vite with the React plugin.

## 🚀 Getting Started

### Prerequisites

Install the following before running the project:

- Node.js with npm
- A Supabase project for authentication and the `plant-chat` Edge Function
- A Google Gemini API key if dynamic assistant responses are required

The frontend can be built without a working Gemini deployment, but the AI assistant requires valid Supabase configuration and a deployed function.

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Vaishnavik-droid/Dr-plant.ai-web.git
cd Dr-plant.ai-web
npm install
```

### Configuration

Create a local `.env` file in the project root. Do not commit real credentials or API keys.

```dotenv
VITE_SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

The frontend reads these variables through Vite's `import.meta.env` API.

The Supabase Edge Function requires the Gemini key as a Supabase secret, not as a frontend environment variable:

```text
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

The repository's `.gitignore` excludes `.env` files. Keep credentials out of source files, commits, screenshots, and client-side code.

### Run Locally

Start the Vite development server:

```bash
npm run dev
```

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

To run the configured linter:

```bash
npm run lint
```

## 📱 Usage

### For growers and general users

1. Open the application home page.
2. Browse the crop and disease libraries to learn about symptoms, growing conditions, and prevention practices.
3. Open the diagnosis page and upload a JPG, JPEG, or PNG plant image.
4. Review the displayed diagnosis result workflow.
5. Open the AI Assistant to ask questions about crop stress, watering, nutrients, or disease patterns.
6. Select a location to browse products and local shop listings.
7. Add marketplace products to the cart.
8. Submit a buyer request through checkout.
9. Review requests and order information from the user dashboard.

### For shop owners

1. Register or sign in with a shop-owner profile.
2. Open the shop-owner dashboard.
3. Review buyer requests and order information.
4. Manage product details, prices, stock, and visibility.
5. Update shop profile and business settings.
6. Track the shop-owner workflow through the seller navigation.

## 🤖 AI Features

The repository contains two different AI-related experiences:

### Gemini-powered text assistant

- The frontend calls `supabase.functions.invoke('plant-chat', ...)`.
- The Edge Function calls Google's Gemini API endpoint for `gemini-2.5-flash`.
- The function sends a system instruction focused on crop symptoms, prevention, and practical next steps.
- Up to the last ten valid history entries are forwarded to the model.
- User messages are limited to 4,000 characters.
- The function returns a JSON response containing `reply`.
- The Gemini API key is read from the Supabase secret `GEMINI_API_KEY`.

### Image diagnosis interface

The diagnosis page supports selecting and previewing an image and presents a sample result workflow. The current repository does not include an image model, image inference library, or image-analysis API integration. The diagnosis data currently used by the application is local/mock data.

## 🗄️ Data Storage

The repository does not define a database schema, SQL migrations, tables, or collections.

It uses the following storage approaches:

- **Supabase Auth** for sign-in, registration, password reset, password updates, and sign-out.
- **Browser `localStorage`** for profiles, cart contents, saved location, shop-owner profiles, products, orders, upload history, and premium claims.
- **Local JavaScript data modules** for crop information, disease information, marketplace listings, and sample diagnoses.

The marketplace and shop-owner services contain demo/mock data and explicitly leave room for future backend integrations.

## 🔌 API / Backend

### Supabase Edge Function: `plant-chat`

The backend function accepts `POST` requests and handles CORS `OPTIONS` requests.

**Request body:**

```json
{
  "message": "Why are my tomato leaves developing dark spots?",
  "history": [
    {
      "sender": "user",
      "text": "My plant looks stressed after rain."
    },
    {
      "sender": "bot",
      "text": "Tell me more about the leaf symptoms."
    }
  ]
}
```

**Successful response:**

```json
{
  "reply": "A few possible causes include..."
}
```

The function returns error responses for invalid methods, missing Gemini configuration, invalid or oversized messages, failed Gemini requests, and empty model responses.

No separate REST API for crops, diseases, marketplace products, weather, or shop-owner data is implemented in the repository. Those areas currently use local data, browser storage, or mock service responses.

## 📸 Screenshots

Screenshots are not currently included in the repository. Add project screenshots here when they are available, for example:

- Home page
- Plant diagnosis page
- Diagnosis result page
- AI assistant
- Marketplace
- Shop-owner dashboard

## 🔐 Security

The project currently implements the following security-related practices:

- Supabase authentication is used for account operations.
- The Gemini API key is expected to be stored as a Supabase secret and accessed server-side by the Edge Function.
- Frontend Supabase configuration is read from environment variables.
- Password and password-confirmation fields are removed from the locally stored profile when detected.
- Chat input length and message-history structure are validated in the Edge Function.
- Role-based route guards restrict shop-owner pages to users with the expected role.

Before production use, review the public CORS policy, strengthen authorization for all server-side operations, replace demo `localStorage` data with a secured backend, and avoid storing sensitive personal or order information only in browser storage.

## 🌍 Future Enhancements

The following are proposed improvements, not current repository functionality:

- Add a real image-classification or vision model for plant disease inference.
- Connect diagnosis results to a production database and user-specific history.
- Replace mock weather data with a verified weather API.
- Replace marketplace and shop-owner demo data with secured backend services.
- Add a production payment gateway and order fulfilment workflow.
- Publish the signed Android application referenced by the download page.
- Add automated tests for routing, authentication, diagnosis, marketplace, and seller workflows.
- Add server-side authorization, rate limiting, audit logging, and stricter CORS configuration.
- Add production deployment documentation and continuous integration checks.

## 📄 License

License information has not been specified yet.

## 🙌 Acknowledgements

- React and the React ecosystem for the application foundation
- Vite for the development and production build tooling
- Supabase for authentication and Edge Functions
- Google Gemini for the conversational AI integration
- Framer Motion and Lucide React for interface animation and icons
