
import { useRef, useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    content: "The meals from Nourish have completely transformed my lunch breaks. Delicious, nutritious, and so convenient.",
    author: "Sarah Johnson",
    title: "Designer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    content: "As someone with specific dietary needs, finding Nourish has been a game-changer. Their attention to detail is impeccable.",
    author: "Michael Chen",
    title: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    content: "The seasonal menu keeps things exciting, and I love knowing exactly where my food comes from. Truly farm-to-table.",
    author: "Emma Rodriguez",
    title: "Fitness Instructor",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  }
];

const Testimonials = () => {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setTimeout(() => {
            setVisibleElements([0, 1, 2, 3, 4]);
          }, 100);
          
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="section py-24 bg-food-50" ref={sectionRef}>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className={`inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium tracking-wide mb-4 ${visibleElements.includes(0) ? 'animate-fade-in' : 'opacity-0'}`}>
          TESTIMONIALS
        </div>
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 ${visibleElements.includes(1) ? 'animate-fade-in' : 'opacity-0'}`}>
          What Our <span className="text-primary">Customers</span> Say
        </h2>
        <p className={`text-muted-foreground ${visibleElements.includes(2) ? 'animate-fade-in' : 'opacity-0'}`}>
          Don't just take our word for it – hear from the people who have experienced the difference.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id}
            className={`glass-card rounded-xl p-6 hover-lift ${visibleElements.includes(index + 3) ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: `${(index + 3) * 100}ms` }}
          >
            <svg className="w-10 h-10 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10.7 25.4c-1.5 0-2.9-0.4-4.1-1.2-1.2-0.8-2.1-1.9-2.8-3.2-0.7-1.3-1-2.8-1-4.3 0-1.9 0.5-3.7 1.5-5.5 1-1.8 2.4-3.4 4.2-4.8 1.8-1.4 3.8-2.6 6.2-3.4l1.4 2.8c-2.2 0.8-4 1.9-5.5 3.2-1.5 1.3-2.3 2.7-2.5 4.1 0.3-0.1 0.8-0.2 1.2-0.2 1.6 0 3 0.6 4.1 1.7 1.1 1.1 1.7 2.5 1.7 4.1 0 1.7-0.6 3.1-1.8 4.3-1.1 1-2.5 1.6-4.2 1.6zM25.9 25.4c-1.5 0-2.9-0.4-4.1-1.2-1.2-0.8-2.1-1.9-2.8-3.2-0.7-1.3-1-2.8-1-4.3 0-1.9 0.5-3.7 1.5-5.5 1-1.8 2.4-3.4 4.2-4.8 1.8-1.4 3.8-2.6 6.2-3.4l1.4 2.8c-2.2 0.8-4 1.9-5.5 3.2-1.5 1.3-2.3 2.7-2.5 4.1 0.3-0.1 0.8-0.2 1.2-0.2 1.6 0 3 0.6 4.1 1.7 1.1 1.1 1.7 2.5 1.7 4.1 0 1.7-0.6 3.1-1.8 4.3-1.1 1-2.5 1.6-4.2 1.6z"></path>
            </svg>
            <p className="text-foreground mb-6 font-serif text-lg italic">"{testimonial.content}"</p>
            <div className="flex items-center">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.author} 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
