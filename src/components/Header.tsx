'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { useState } from 'react';

/**
 * Main navigation header component
 * Includes responsive mobile menu and CTA buttons
 */
const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Navigation items
    const navItems = [
        { label: 'Product', href: '#' },
        { label: 'Enterprise', href: '#' },
        { label: 'Resources', href: '#' },
        { label: 'Pricing', href: '#' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-[#f7efe8] border-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/slack-logo.svg"
                                alt="Slack"
                                width={120}
                                height={30}
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-gray-600 hover:text-gray-900 font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                            Sign in
                        </Link>
                        <Button variant="secondary" className="!py-2">
                            TALK TO SALES
                        </Button>
                        <Button className="!py-2">
                            TRY FOR FREE
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="black"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4">
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-gray-600 hover:text-gray-900 font-medium px-2 py-1"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium px-2 py-1">
                                Sign in
                            </Link>
                            <Button variant="secondary" className="w-full">
                                TALK TO SALES
                            </Button>
                            <Button className="w-full">
                                TRY FOR FREE
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header; 