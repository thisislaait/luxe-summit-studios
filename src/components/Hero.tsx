
import { ArrowRight } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';
import ScrollReveal from './ui/ScrollReveal';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-luxe-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-noise"></div>
        <div className="absolute top-1/4 right-1/4 w-60 h-60 rounded-full bg-gold/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-luxe-300/20 blur-3xl"></div>
      </div>
      
      <Container className="relative z-10 py-16 md:py-24">
        <div className="flex flex-col max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="mb-6 md:mb-8">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-gold/10 text-gold rounded-full">
                22nd November, 2023 • London
              </span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium mb-6 text-balance">
              EMBRACING THE 
              <span className="block text-gold">GLOBAL CONSUMER</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={2}>
            <p className="text-lg md:text-xl text-luxe-800 max-w-3xl mb-8 md:mb-12">
              Join industry leaders and visionaries to explore how British luxury brands are evolving to meet the needs of the international luxury consumer.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Register Now
              </Button>
              
              <a href="#about" className="group inline-flex items-center font-medium hover:text-gold transition-colors">
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={4} className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col">
                <span className="text-sm uppercase tracking-wider text-luxe-500">Date</span>
                <span className="font-display text-xl">November 22, 2023</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm uppercase tracking-wider text-luxe-500">Time</span>
                <span className="font-display text-xl">08:00 - 14:00 GMT</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm uppercase tracking-wider text-luxe-500">Location</span>
                <span className="font-display text-xl">The Dorchester, London</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
