'use client';

import { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
        if (!hasAcceptedCookies) {
            setIsVisible(true);
        }
    }, []);

    const handleAcceptCookies = () => {
        // Store the acceptance in localStorage
        localStorage.setItem('cookiesAccepted', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 max-w-sm w-full animate-slide-up">
            <div className="bg-white rounded-lg shadow-xl p-6 space-y-4">
                {/* Close button */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    aria-label="Close"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Content */}
                <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                        This website uses cookies to enhance user experience and to analyse performance and
                        traffic on our website. We also share information about your use of our site with our social media,
                        advertising and analytics partners.{' '}
                        <a href="#" className="text-blue-600 hover:underline">More info</a>
                    </p>

                    {/* Accept button */}
                    <button
                        onClick={handleAcceptCookies}
                        className="w-full bg-purple-700 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-purple-800 transition-colors"
                    >
                        ACCEPT ALL COOKIES
                    </button>
                </div>

                {/* Chat preview */}
                <div className="mt-4 flex items-start space-x-2 bg-gray-50 p-3 rounded-lg">
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex-shrink-0" />
                    <div className="flex-1">
                        <p className="text-xs text-gray-600">
                            Hey there 👋 Want to know something cool?
                        </p>
                    </div>
                    <div className="w-6 h-6 bg-purple-700 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <span className="text-sm">👋</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent; 