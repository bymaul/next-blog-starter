'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { FaDesktop, FaMoon, FaSun } from 'react-icons/fa6';

export default function ThemeSwitcher() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleThemeChange = (selectedTheme: string) => {
        setTheme(selectedTheme);
        setIsOpen(false);
    };

    if (!mounted) return null;

    return (
        <div ref={ref} className='relative'>
            <div className='flex justify-end'>
                <button
                    aria-label='Theme Toggle'
                    className='bg-gray-100 dark:bg-gray-800 p-3 rounded-full'
                    onClick={toggleDropdown}>
                    {theme === 'system' ? (
                        <FaDesktop />
                    ) : theme === 'dark' ? (
                        <FaMoon />
                    ) : (
                        <FaSun />
                    )}
                </button>
            </div>
            {isOpen && (
                <div className='absolute -top-1 -right-1 z-10 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden p-1'>
                    <div className='flex items-center gap-x-1'>
                        <button
                            className='rounded-full hover:bg-gray-200 hover:dark:bg-gray-700 p-3 transition-colors duration-300'
                            onClick={() => handleThemeChange('system')}>
                            <FaDesktop />
                        </button>
                        <button
                            className='rounded-full hover:bg-gray-200 hover:dark:bg-gray-700 p-3 transition-colors duration-300'
                            onClick={() => handleThemeChange('dark')}>
                            <FaMoon />
                        </button>
                        <button
                            className='rounded-full hover:bg-gray-200 hover:dark:bg-gray-700 p-3 transition-colors duration-300'
                            onClick={() => handleThemeChange('light')}>
                            <FaSun />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
