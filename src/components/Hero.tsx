'use client'
import Image from 'next/image';
import Button from './Button';
import { useState } from 'react';
/**
 * Hero section component
 * Features main headline, description, CTA buttons, and chat preview
 */
const Hero = () => {
    const [showBanner, setShowBanner] = useState(true);
    return (
        <div className="relative bg-[#f7efe8] pt-12 pb-16">
            {/* Blue notification banner */}
            {showBanner && (
                <div className="bg-[#1264A3] text-white p-4 relative mb-12 rounded-[50px] mx-4 xl:max-w-7xl xl:mx-auto">
                    <div className=" px-4 sm:px-6 flex items-center justify-between">
                        <p className="text-sm">
                            Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world.{' '}
                            <a href="#" className="underline">Let&apos;s go →</a>
                        </p>
                        <button className="text-white hover:text-gray-200">
                            <span className="sr-only">Close</span>
                            <svg onClick={() => setShowBanner(false)} className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    {/* Left column - Content */}
                    <div className="lg:col-span-6 mb-12 lg:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Slack is where the future works
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                            Transform the way you work with one place for everyone and everything you need to get stuff done.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="w-full sm:w-auto">
                                TRY FOR FREE
                            </Button>
                            <Button
                                variant="secondary"
                                icon="/images/google-logo.svg"
                                iconAlt="Google"
                                className="w-full sm:w-auto"
                            >
                                SIGN UP WITH GOOGLE
                            </Button>
                        </div>
                    </div>

                    {/* Right column - Chat Preview */}
                    <Image className="lg:col-span-5 rounded-lg" src="/images/slack-preview.png" alt="Slack interface preview" width={600} height={400} />
                </div>
            </div>
        </div>
    );
};

export default Hero; 