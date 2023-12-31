import { siteConfig } from '@/config/site';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const generateStaticParams = async () =>
    allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find(
        (post) => post._raw.flattenedPath === params.slug
    );
    if (!post) return;

    const { title, description, date, url } = post;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime: date,
            url: `${siteConfig.url}${url}`,
        },
        twitter: {
            title,
            description,
        },
        alternates: {
            canonical: `${siteConfig.url}${url}`,
        },
    };
};

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
    a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
    Image: ({ className, alt, ...props }) => (
        <Image className={`${className} rounded-lg`} alt={alt} {...props} />
    ),
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find(
        (post) => post._raw.flattenedPath === params.slug
    );

    if (!post) notFound();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        datePublished: post.date,
    };

    const MDXContent = useMDXComponent(post.body.code);

    return (
        <main>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className='text-center py-8'>
                <h1 className='text-3xl font-bold'>{post.title}</h1>
                <time dateTime={post.date} className='text-xs'>
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                </time>
            </div>
            <article className='py-8 prose dark:prose-invert max-w-none'>
                <MDXContent components={mdxComponents} />
            </article>
        </main>
    );
};

export default PostLayout;
