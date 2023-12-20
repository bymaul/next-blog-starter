Next.js blog starter template for your blog or personal site, built with:

-   Next.js 14 (App Router)
-   MDX
-   Contentlayer
-   Tailwind

## Getting Started

First, make sure have [Node.js](https://nodejs.org/en) installed on your machine.

```bash
npx create-next-app -e https://github.com/bymaul/next-blog-starter

cd next-blog-starter

npm run dev
```

You can now access the application via http://localhost:3000

Blog posts can be added to the `posts` directory, in the root folder.

Update the `WEBSITE_HOST_URL` when taking your site live. This lives in `/src/lib/constants.ts`

Make sure to update the `sitemap.ts` file, specifically the `const routes` if you add more pages to the website.

## To do

-   [x] Theme Switcher
-   [x] UI
-   [x] SEO Optimization
