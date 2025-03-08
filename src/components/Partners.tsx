
import { useRef, useEffect } from 'react';
import Container from './ui/Container';
import ScrollReveal from './ui/ScrollReveal';

const partners = [
  'Burberry',
  'Harrods',
  'Mulberry',
  'Rolls-Royce',
  'Bentley',
  'Jo Malone London',
  'Wedgwood',
  'Selfridges',
  'Jimmy Choo',
  'Boodles',
  'Claridge\'s',
  'The Savoy',
];

const Partners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Duplicate the partners array for continuous scrolling effect
  const scrollPartners = [...partners, ...partners];
  
  return (
    <section id="partners" className="py-20 md:py-32 bg-white">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm uppercase tracking-wider text-gold font-medium mb-2 block">
              Collaborators
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
              Our Partners
            </h2>
            <div className="divider mx-auto"></div>
            <p className="text-luxe-800 mt-6">
              The Walpole Summit is proud to be supported by these prestigious British luxury brands.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="relative overflow-hidden py-4">
            <div 
              ref={scrollRef}
              className="flex items-center justify-around animate-marquee space-x-12"
            >
              {scrollPartners.map((partner, index) => (
                <div 
                  key={`${partner}-${index}`} 
                  className="flex-shrink-0 transition-all duration-300 hover:opacity-70"
                >
                  <div className="bg-luxe-50 h-24 px-8 flex items-center justify-center rounded-lg">
                    <span className="font-display text-xl font-medium text-luxe-800">{partner}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={1}>
          <div className="text-center mt-16">
            <p className="text-luxe-700 max-w-2xl mx-auto mb-6">
              Interested in partnering with Walpole for future events? Contact our partnerships team to explore collaboration opportunities.
            </p>
            <a 
              href="#" 
              className="inline-block text-gold font-medium hover:underline"
            >
              Become a Partner
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default Partners;
