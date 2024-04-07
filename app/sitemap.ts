import { siteConfig } from '@/config/site';
import { getAllPosts } from '@/lib/mdx';

export default async function sitemap() {
    const routes = ['', '/about'].map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date(),
    }));

    const posts = getAllPosts().map((post) => ({
        url: `${siteConfig.url}/posts/${post.slug}`,
        lastModified: post.metadata.publishedAt,
    }));

    return [...routes, ...posts];
}
