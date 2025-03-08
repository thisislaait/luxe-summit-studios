
import { MapPin } from 'lucide-react';
import Container from './ui/Container';
import ScrollReveal from './ui/ScrollReveal';
import Button from './ui/Button';

const Venue = () => {
  return (
    <section id="venue" className="py-20 md:py-32 bg-luxe-950 text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col order-2 md:order-1">
            <ScrollReveal>
              <span className="text-sm uppercase tracking-wider text-gold font-medium mb-2">
                Location
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mb-6">
                The Dorchester
              </h2>
              <div className="divider"></div>
            </ScrollReveal>
            
            <ScrollReveal delay={1}>
              <p className="text-luxe-200 mb-6">
                The Walpole Summit will be held at The Dorchester, one of London's most iconic luxury hotels. Recently renovated, this prestigious venue offers an elegant setting that reflects the sophistication and heritage of British luxury.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={2}>
              <div className="flex items-start mb-6">
                <MapPin className="w-5 h-5 text-gold mr-3 mt-0.5" />
                <p className="text-luxe-200">
                  53 Park Lane, Mayfair<br />
                  London W1K 1QA
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={3}>
              <div className="mt-4">
                <Button variant="primary" href="https://maps.google.com">
                  View on Map
                </Button>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal className="order-1 md:order-2">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200" 
                alt="The Dorchester Hotel" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default Venue;
