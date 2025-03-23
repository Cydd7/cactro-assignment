import Image from 'next/image';

/**
 * Partner logo cloud component
 * Displays a grid of partner company logos with hover effects
 */
const LogoCloud = () => {
    // Partner company logos configuration
    const logos = [
        { name: 'Fox', src: '/images/fox-logo.svg' },
        { name: 'Lonely Planet', src: '/images/lonely-planet-logo.svg' },
        { name: 'Intuit', src: '/images/intuit-logo.svg' },
        { name: 'Carvana', src: '/images/carvana-logo.svg' },
        { name: 'Kiva', src: '/images/kiva-logo.svg' },
        { name: 'Target', src: '/images/target-logo.svg' },
        { name: 'DevaCurl', src: '/images/devacurl-logo.svg' },
    ];

    return (
        <section className="py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Logo grid */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-7">
                    {logos.map((logo) => (
                        <div
                            key={logo.name}
                            className="col-span-1 flex justify-center items-center"
                        >
                            <div className="relative h-12 w-full">
                                <Image
                                    src={logo.src}
                                    alt={`${logo.name} logo`}
                                    fill
                                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoCloud; 