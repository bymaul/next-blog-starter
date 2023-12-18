import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';

function PostCard(post: Post) {
    return (
        <div className='flex flex-col gap-2 mb-6'>
            <h2 className='text-xl'>
                <Link
                    href={post.url}
                    className='text-blue-700 hover:text-blue-900 dark:text-blue-400'>
                    {post.title}
                </Link>
            </h2>
            <time dateTime={post.date} className='block text-xs text-gray-600'>
                {format(parseISO(post.date), 'LLL d, yyyy')}
            </time>
            <p>{post.excerpt}</p>
        </div>
    );
}

export default function Home() {
    const posts = allPosts.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );

    return (
        <div className='py-8'>
            <div className='mb-8 text-center'>
                <h1 className='text-2xl font-black'>Next.js Blog Starter</h1>
                <p className='text-sm'>
                    Crafted by{' '}
                    <a
                        href='https://maul-portfolio.vercel.app'
                        className='font-semibold'>
                        Maulana
                    </a>
                </p>
            </div>
            {posts.map((post, idx) => (
                <PostCard key={idx} {...post} />
            ))}
        </div>
    );
}
