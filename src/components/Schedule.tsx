
import { Clock } from 'lucide-react';
import Container from './ui/Container';
import ScrollReveal from './ui/ScrollReveal';

const scheduleItems = [
  {
    time: '08:00 - 08:45',
    title: 'Registration & Networking Breakfast',
    description: 'Welcome coffee and light breakfast with networking opportunities.',
  },
  {
    time: '08:45 - 09:00',
    title: 'Opening Remarks',
    description: 'Welcome address by Helen Brocklebank, Chief Executive of Walpole.',
    speaker: 'Helen Brocklebank',
  },
  {
    time: '09:00 - 09:45',
    title: 'Keynote: The Evolving Global Luxury Landscape',
    description: 'An overview of the current state of global luxury and emerging trends.',
    speaker: 'Michael Ward',
  },
  {
    time: '09:45 - 10:30',
    title: "Panel Discussion: Understanding Today's Global Consumer",
    description: 'Experts discuss the changing demographics and preferences of luxury consumers worldwide.',
  },
  {
    time: '10:30 - 11:00',
    title: 'Networking Break',
    description: 'Refreshments and opportunity to connect with fellow attendees.',
  },
  {
    time: '11:00 - 11:45',
    title: 'Case Study: Successful Global Expansion Strategies',
    description: 'Learn from brands that have successfully expanded into international markets.',
    speaker: 'Charles Seton',
  },
  {
    time: '11:45 - 12:30',
    title: 'Panel Discussion: Digital Innovation in Luxury Retail',
    description: 'How technology is transforming the luxury customer experience globally.',
  },
  {
    time: '12:30 - 13:30',
    title: 'Lunch & Networking',
    description: 'Enjoy a luxury dining experience while connecting with industry peers.',
  },
  {
    time: '13:30 - 14:00',
    title: 'Closing Keynote: The Future of British Luxury',
    description: 'A forward-looking perspective on opportunities for British luxury brands.',
    speaker: 'Elizabeth Uviebinené',
  },
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 md:py-32 bg-white">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm uppercase tracking-wider text-gold font-medium mb-2 block">
              Programme
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
              Event Schedule
            </h2>
            <div className="divider mx-auto"></div>
            <p className="text-luxe-800 mt-6">
              A carefully curated programme of keynotes, panel discussions, and networking opportunities designed to inspire and inform.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
          {scheduleItems.map((item, index) => (
            <ScrollReveal key={index} delay={(index % 4) as 1 | 2 | 3 | 4}>
              <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-12 gap-x-4 lg:gap-x-8">
                {/* Timeline dot and line */}
                <div className="absolute left-0 top-0 md:static md:col-span-3 lg:col-span-2 flex md:justify-end">
                  <div className="md:w-full md:max-w-[150px] relative flex items-start">
                    <div className="hidden md:block w-px h-full bg-luxe-200 absolute right-4 top-8"></div>
                    <div className="w-3 h-3 rounded-full bg-gold absolute -left-8 md:static mt-1.5"></div>
                    <div className="flex items-center md:w-full">
                      <Clock className="w-4 h-4 text-gold mr-2 md:mr-3" />
                      <span className="text-sm font-medium text-luxe-600">{item.time}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:col-span-9 lg:col-span-10 pt-1">
                  <h3 className="text-xl font-display font-medium">{item.title}</h3>
                  {item.speaker && (
                    <p className="text-gold font-medium mt-1">
                      Presented by {item.speaker}
                    </p>
                  )}
                  <p className="text-luxe-700 mt-2">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Schedule;
