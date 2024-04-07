import { getAllPosts } from '@/lib/mdx';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function Home() {
    const posts = getAllPosts();

    return (
        <main className='py-8'>
            <div className='pb-10'>
                <h1 className='font-semibold text-3xl'>Homepage</h1>
            </div>
            {posts.map((post) => (
                <div key={post.slug} className='flex flex-col gap-2 mb-6'>
                    <time
                        dateTime={post.metadata.publishedAt}
                        className='block text-xs'>
                        {format(
                            parseISO(post.metadata.publishedAt),
                            'LLLL d, yyyy'
                        )}
                    </time>
                    <h2 className='font-semibold text-xl'>
                        <Link href={`/posts/${post.slug}`}>
                            {post.metadata.title}
                        </Link>
                    </h2>
                    <p>{post.metadata.summary}</p>
                </div>
            ))}
        </main>
    );
}
