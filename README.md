# Wabsyin WebApp

Premium Web App & Product Design Agency website built with Next.js 14+, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4, clsx, tailwind-merge
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend / DB**: Firebase (Firestore ready)
- **Fonts**: Inter & Outfit (via next/font)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Environment Variables

To enable Firebase features (like dynamic project loading if implemented in future), create a `.env.local` file with your Firebase config keys:

```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

For now, the project uses static data in `lib/data.ts`.

# Wabsyin-WebApp-