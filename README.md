Next.js blog starter template for your blog or personal site, built with:

-   Next.js 14 (App Router)
-   MDX
-   Tailwind

## Getting Started

First, make sure have [Node.js](https://nodejs.org/en) installed on your machine.

```bash
git clone https://github.com/bymaul/next-blog-starter

cd next-blog-starter

bun install

bun run dev
```

You can now access the application via http://localhost:3000

Blog posts can be added to the `posts` directory, in the root folder.

Update the `url` when taking your site live. It's in `/config/site.ts`

Make sure to update the `sitemap.ts` file, specifically the `const routes` if you add more pages to the website.

## To do

-   [x] Theme Switcher
-   [x] UI
-   [x] SEO Optimization
