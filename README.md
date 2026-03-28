# Sift — Landing Page

Landing page for Sift, an app that helps people find things worth doing in New York City.

## Tech stack

- **React** + **TypeScript**
- **Vite**
- **Tailwind CSS** + **shadcn/ui**
- **Supabase** — waitlist signups stored in the `waitlist-signup` table
- **Vercel** — hosting and deployment
- **PostHog** — analytics

## Local development

Requires Node.js. Clone the repo, then:

```sh
npm install
npm run dev
```

The app runs at `http://localhost:8080`.

Create a `.env` file in the project root with:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

## Deployment

Deployed via Vercel. Set the same env vars (`VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`) in the Vercel project settings, then push to main.

## Supabase edge function

Waitlist signups go through a Supabase edge function (`supabase/functions/submit-waitlist`). To deploy it:

```sh
npx supabase link --project-ref your_project_ref
npx supabase functions deploy submit-waitlist
```
