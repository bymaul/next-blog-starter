import PostCard from '@/components/post-card';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export default function Home() {
    const posts = allPosts.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );

    return (
        <main className='py-8'>
            <div className='pb-10'>
                <h1 className='font-semibold text-3xl'>Homepage</h1>
            </div>
            {posts.map((post, i) => (
                <PostCard key={i} {...post} />
            ))}
        </main>
    );
}
