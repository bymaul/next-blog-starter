import ThemeToggle from '@/components/ThemeToggle';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import { ThemeProvider } from './providers';
import Navigation from '@/components/Navigation';
import { FaGithub } from 'react-icons/fa6';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Next.js Blog Starter',
    description: 'Next.js blog starter template with Contentlayer',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={`${inter.className} px-4 max-w-screen-md mx-auto`}>
                <ThemeProvider attribute='class'>
                    <header className='flex justify-between gap-4 items-center py-6'>
                        <Navigation />
                        <ThemeToggle />
                    </header>
                    {children}
                    <footer className='text-sm pb-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4'>
                        <p>
                            Crafted by{' '}
                            <Link
                                href='https://maul-portfolio.vercel.app'
                                target='_blank'
                                className='font-semibold'>
                                Maulana
                            </Link>
                        </p>
                        <Link
                            className='inline-flex justify-center items-center gap-3 py-2 px-3 dark:bg-white dark:hover:bg-gray-100 dark:text-black bg-black hover:bg-gray-900 text-white rounded-lg'
                            href='https://github.com/bymaul/next-blog-starter'
                            target='_blank'>
                            <FaGithub />
                            Get the Source Code
                        </Link>
                    </footer>
                </ThemeProvider>
            </body>
        </html>
    );
}
