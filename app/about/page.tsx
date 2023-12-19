import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';

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
