'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();
    return (
        <nav>
            <ul className='flex items-center justify-center gap-6'>
                <li className={pathname === '/' ? 'underline' : ''}>
                    <Link href='/'>Home</Link>
                </li>
                <li className={pathname === '/about' ? 'underline' : ''}>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
}
