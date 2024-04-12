import Navigation from '@/components/navigation';
import ThemeToggle from '@/components/theme-toggle';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';
import { ThemeProvider } from './providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: siteConfig.title,
        template: `%s / ${siteConfig.title}`,
    },
    description: siteConfig.description,
    verification: {
        google: siteConfig.google,
    },
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.title,
        locale: 'en-US',
        type: 'website',
        images: [
            {
                url: siteConfig.image,
            },
        ],
    },
    twitter: {
        title: siteConfig.title,
        description: siteConfig.description,
        images: siteConfig.image,
        card: 'summary_large_image',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: siteConfig.url,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' suppressHydrationWarning>
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
                                href='https://maulana.dev/'
                                target='_blank'
                                className='font-semibold'>
                                Maulana
                            </Link>
                        </p>
                        <Link
                            className='inline-flex justify-center items-center gap-3 py-2 px-3 dark:bg-white dark:hover:bg-gray-100 dark:text-black bg-black hover:bg-gray-900 text-white rounded-lg'
                            href='https://github.com/bymaul/next-blog-starter'>
                            <FaGithub />
                            Source Code
                        </Link>
                    </footer>
                </ThemeProvider>
            </body>
        </html>
    );
}
