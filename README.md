This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

The shop currently uses mock products and Unsplash placeholder photographs. Product
detail and purchase flows are not implemented yet. The contact form validates
locally only: it does not send or store messages, and the business contact details
are placeholders. Replace the product photographs and details before launch.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load Inter and Playfair Display.

## Supabase setup

Authentication is being built in stages; the clients are configured, but the
authentication pages, callback and session-refresh proxy are not implemented yet.

1. Create a Supabase project and enable the email provider under Authentication.
   Enable email confirmation if users should verify their address.
2. Under Authentication > URL Configuration, set the Site URL to
   `http://localhost:3000` for local development and add
   `http://localhost:3000/auth/callback` to the redirect URL allowlist. Add the
   corresponding HTTPS site and callback URLs for production.
3. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SUPABASE_URL` to
   the project URL and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to its public anon (or
   publishable) key from the project's API settings. Never put a secret or
   service-role key in these public variables. Restart the Next.js server after
   changing environment variables.

The server client uses Next.js cookies. Cookie writes are only permitted in
route handlers or server actions; session refresh for Server Components will be
handled by the proxy in the route-protection stage.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
