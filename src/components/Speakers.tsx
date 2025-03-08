
import Container from './ui/Container';
import ScrollReveal from './ui/ScrollReveal';

const speakers = [
  {
    name: 'Helen Brocklebank',
    role: 'Chief Executive, Walpole',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop',
  },
  {
    name: 'Michael Ward',
    role: 'Managing Director, Harrods',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
  },
  {
    name: 'Julietta Dexter',
    role: 'Founder, The Communications Store',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop',
  },
  {
    name: 'Charles Seton',
    role: 'CEO, Molton Brown',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop',
  },
  {
    name: 'Elizabeth Uviebinené',
    role: 'Author & Strategist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop',
  },
  {
    name: 'Amanda Mackenzie',
    role: 'CEO, Business in the Community',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=500&fit=crop',
  },
];

const Speakers = () => {
  return (
    <section id="speakers" className="py-20 md:py-32 bg-luxe-50">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm uppercase tracking-wider text-gold font-medium mb-2 block">
              Thought Leaders
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
              Distinguished Speakers
            </h2>
            <div className="divider mx-auto"></div>
            <p className="text-luxe-800 mt-6">
              Meet the innovators and experts shaping the future of luxury. Our speakers bring unique perspectives from across the luxury spectrum.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {speakers.map((speaker, index) => (
            <ScrollReveal key={speaker.name} delay={(index % 3) as 1 | 2 | 3}>
              <div className="group">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-display text-xl font-medium">{speaker.name}</h3>
                <p className="text-luxe-600">{speaker.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Speakers;
