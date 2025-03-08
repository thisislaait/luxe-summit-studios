
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Speakers from '@/components/Speakers';
import Schedule from '@/components/Schedule';
import Venue from '@/components/Venue';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const target = document.querySelector(href);
        if (!target) return;
        
        window.scrollTo({
          top: (target as HTMLElement).offsetTop - 100, // Account for header
          behavior: 'smooth'
        });
      });
    });
    
    // Clean up
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Venue />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
