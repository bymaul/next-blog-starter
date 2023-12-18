import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
                {children}
            </body>
        </html>
    );
}
