import { WEBSITE_HOST_URL } from '@/lib/constants';
import { Metadata } from 'next';

const meta = {
    title: 'About',
    description: 'About next.js blog starter template with Contentlayer',
    url: `${WEBSITE_HOST_URL}/about`,
    image: `${WEBSITE_HOST_URL}/og-image.png`,
};

export const metadata: Metadata = {
    title: meta.title,
    description: meta.description,
    openGraph: {
        title: meta.title,
        description: meta.description,
        url: meta.url,
        images: [
            {
                url: meta.image,
            },
        ],
    },
    twitter: {
        title: meta.title,
        description: meta.description,
        images: meta.image,
        card: 'summary_large_image',
    },
    alternates: {
        canonical: meta.url,
    },
};

export default function About() {
    return (
        <main className='py-8'>
            <div className='pb-10'>
                <h1 className='font-semibold text-3xl'>About</h1>
            </div>
            <p className='py-2'>
                Next.js blog starter template for your blog or personal site,
                built with:
            </p>
            <ul className='list-disc space-y-1 pl-4'>
                <li>Next.js 14</li>
                <li>MDX</li>
                <li>Contentlayer</li>
                <li>Tailwind</li>
            </ul>
        </main>
    );
}
