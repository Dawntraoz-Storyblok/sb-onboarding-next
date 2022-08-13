# Storyblok & Next.js tutorial

This is a [Next.js](https://nextjs.org/) and [Storyblok](https://www.storyblok.com/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and following [The Next.js Ultimate Tutorial](https://www.storyblok.com/tp/nextjs-headless-cms-ultimate-tutorial).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Storyblok https config

> To use Storyblok v2, you need to configure the Dev Server with HTTPS Proxy Server. To do this follow one of these guides: [MacOS](https://www.storyblok.com/faq/setup-dev-server-https-proxy) or [Windows](https://www.storyblok.com/faq/setup-dev-server-https-windows).

Then, in another terminal tab, go to the folder where you ran the mkcert commands, and run:

```bash
local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem
```

You can now use [https://localhost:3010](https://localhost:3010) for the preview URL in your Storyblok space.

## Next API routes section

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
