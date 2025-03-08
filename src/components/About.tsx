
import Container from './ui/Container';
import ScrollReveal from './ui/ScrollReveal';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                alt="Luxury event setting" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 mb-2 text-xs font-medium tracking-wider uppercase bg-gold/80 text-white rounded-full">
                  Hosted by Walpole
                </span>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="flex flex-col">
            <ScrollReveal>
              <span className="text-sm uppercase tracking-wider text-gold font-medium mb-2">
                About the Summit
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
                British Luxury in a Global Context
              </h2>
              <div className="divider"></div>
            </ScrollReveal>
            
            <ScrollReveal delay={1}>
              <p className="text-luxe-800 mb-6">
                The Walpole Summit is the premier event for luxury industry leaders, bringing together CEOs, creative directors, and senior executives from Britain's most prestigious luxury houses.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={2}>
              <p className="text-luxe-800 mb-6">
                At this year's summit, we explore what's changing in the behaviour and expectation of the international luxury consumer. How is the shift in the demographic of ultra-high-net-worth individuals impacting British luxury brands? What leadership, creative and commercial strategies can the UK's luxury sector draw on to successfully navigate this evolution?
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={3}>
              <p className="text-luxe-800">
                We'll examine through data, insights and case studies how luxury brands are adapting to attract and retain customers from markets including the USA, Middle East, China and South Korea.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
