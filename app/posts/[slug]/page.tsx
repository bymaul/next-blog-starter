import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { MDXComponents } from 'mdx/types';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export const generateStaticParams = async () =>
    allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find(
        (post) => post._raw.flattenedPath === params.slug
    );
    if (!post) notFound();
    return { title: post.title };
};

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
    a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
    Image: ({ className, ...props }) => (
        <Image className={`${className} rounded-lg`} {...props} />
    ),
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find(
        (post) => post._raw.flattenedPath === params.slug
    );

    if (!post) notFound();

    const MDXContent = useMDXComponent(post.body.code);

    return (
        <>
            <div className='mt-8 text-center'>
                <time
                    dateTime={post.date}
                    className='mb-1 text-xs text-gray-600'>
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                </time>
                <h1 className='text-3xl font-bold'>{post.title}</h1>
            </div>
            <article className='py-8 prose max-w-none'>
                <MDXContent components={mdxComponents} />
            </article>
        </>
    );
};

export default PostLayout;
