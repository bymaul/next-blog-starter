import { CustomMDX } from '@/components/mdx';
import { siteConfig } from '@/config/site';
import { getAllPosts } from '@/lib/mdx';
import { format, parseISO } from 'date-fns';
import { notFound } from 'next/navigation';

export const generateStaticParams = async () =>
    getAllPosts().map((post) => ({ slug: post.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = getAllPosts().find((post) => post.slug === params.slug);
    if (!post) return;

    const { title, summary, publishedAt } = post.metadata;

    return {
        title,
        description: summary,
        openGraph: {
            title,
            description: summary,
            type: 'article',
            publishedTime: publishedAt,
            url: `${siteConfig.url}/posts/${post.slug}`,
        },
        twitter: {
            title,
            description: summary,
        },
        alternates: {
            canonical: `${siteConfig.url}/posts/${post.slug}`,
        },
    };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = getAllPosts().find((post) => post.slug === params.slug);

    if (!post) notFound();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.metadata.title,
        datePublished: post.metadata.publishedAt,
    };

    return (
        <main>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className='text-center py-8'>
                <h1 className='text-3xl font-bold'>{post.metadata.title}</h1>
                <time dateTime={post.metadata.publishedAt} className='text-xs'>
                    {format(
                        parseISO(post.metadata.publishedAt),
                        'LLLL d, yyyy'
                    )}
                </time>
            </div>
            <article className='py-8 prose dark:prose-invert max-w-none'>
                <CustomMDX source={post.content} />
            </article>
        </main>
    );
};

export default PostLayout;
