import { Post } from '@/.contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function PostCard(post: Post) {
    return (
        <div className='flex flex-col gap-2 mb-6'>
            <time dateTime={post.date} className='block text-xs'>
                {format(parseISO(post.date), 'LLL d, yyyy')}
            </time>
            <h2 className='font-semibold text-xl'>
                <Link href={post.url}>{post.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
        </div>
    );
}
