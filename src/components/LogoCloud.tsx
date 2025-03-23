import Image from 'next/image';

/**
 * Partner logo cloud component
 * Displays a grid of partner company logos with hover effects
 */
const LogoCloud = () => {
    // Partner company logos configuration with specific dimensions
    const logos = [
        {
            name: 'Fox',
            src: '/images/fox-logo.svg',
            width: 100,
            height: 40
        },
        {
            name: 'Lonely Planet',
            src: '/images/lonely-planet-logo.svg',
            width: 120,
            height: 40
        },
        {
            name: 'Intuit',
            src: '/images/intuit-logo.svg',
            width: 100,
            height: 40
        },
        {
            name: 'Carvana',
            src: '/images/carvana-logo.svg',
            width: 110,
            height: 40
        },
        {
            name: 'Kiva',
            src: '/images/kiva-logo.svg',
            width: 90,
            height: 40
        },
        {
            name: 'Target',
            src: '/images/target-logo.svg',
            width: 50,
            height: 40
        },
        {
            name: 'DevaCurl',
            src: '/images/devacurl-logo.png',
            width: 110,
            height: 40
        },
    ];

    return (
        <section className="py-5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Logo grid with consistent spacing */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-6 lg:grid-cols-7">
                    {logos.map((logo) => (
                        <div
                            key={logo.name}
                            className="col-span-1 flex justify-center items-center"
                        >
                            <div className="relative flex justify-center items-center w-full h-[40px]">
                                <Image
                                    src={logo.src}
                                    alt={`${logo.name} logo`}
                                    width={logo.width}
                                    height={logo.height}
                                    className="object-contain filter hover:scale-105 transition-all duration-200"
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