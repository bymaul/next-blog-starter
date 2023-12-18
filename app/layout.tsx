import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './providers';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import Link from 'next/link';
import { FaHouse } from 'react-icons/fa6';

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
                    <header className='flex justify-between gap-4 items-center pt-6 pb-10'>
                        <Link
                            href='/'
                            className='bg-gray-100 dark:bg-gray-800 p-3 rounded-full'>
                            <FaHouse />
                        </Link>
                        <ThemeSwitcher />
                    </header>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
