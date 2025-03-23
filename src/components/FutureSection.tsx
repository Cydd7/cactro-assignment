import Image from 'next/image';

const FutureSection = () => {
    return (
        <section className="py-20 bg-[#f6efe8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Pegboard image */}
                    <div className="relative aspect-video">
                        <div className="relative w-full h-full rounded-lg overflow-hidden">
                            {/* Pegboard background */}
                            <div className="absolute inset-0 bg-[#f4e5d7] rounded-lg">
                                <div className="grid grid-cols-16 grid-rows-10 gap-4 p-4 h-full">
                                    {/* Dots pattern - rendered using CSS grid */}
                                    {[...Array(160)].map((_, i) => (
                                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#e5d4c4]" />
                                    ))}
                                </div>
                            </div>

                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    className="w-16 h-16 bg-[#36c5f0] rounded-lg flex items-center justify-center hover:bg-[#2fb3dc] transition-colors"
                                    aria-label="Play video"
                                >
                                    <svg
                                        className="w-8 h-8 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Future tag */}
                            <div className="absolute bottom-4 right-4">
                                <div className="bg-[#36c5f0] text-white px-4 py-2 rounded font-medium">
                                    FUTURE
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Text content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                            Now is your moment to build a better tomorrow
                        </h2>
                        <p className="text-xl text-gray-600">
                            We've seen what the future can be. Now it's time to decide what it will be.
                        </p>
                        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-700 hover:bg-purple-800 transition-colors">
                            WATCH VIDEO
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FutureSection; 