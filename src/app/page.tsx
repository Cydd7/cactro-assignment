import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogoCloud from '@/components/LogoCloud';
import FutureSection from '@/components/FutureSection';

/**
 * Main landing page component
 * Combines header, hero section, logo cloud, and future section components
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Fixed header */}
      <Header />

      {/* Main content */}
      <div className="pt-16">
        <Hero />
        <LogoCloud />
        <FutureSection />
      </div>
    </main>
  );
}
