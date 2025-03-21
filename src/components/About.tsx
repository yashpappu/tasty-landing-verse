
import { useRef, useState, useEffect } from 'react';

const About = () => {
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

  const features = [
    {
      title: "Locally Sourced",
      description: "We partner with local farms to ensure the freshest ingredients while supporting our community."
    },
    {
      title: "Sustainably Packaged",
      description: "All our packaging is compostable or recyclable, minimizing our environmental impact."
    },
    {
      title: "Nutritionally Balanced",
      description: "Each meal is designed by nutritionists to provide optimal health benefits."
    }
  ];

  return (
    <section id="about" className="section py-24 bg-accent" ref={sectionRef}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 order-2 md:order-1">
          <div className={`inline-block px-4 py-1.5 rounded-full bg-white text-accent-foreground text-xs font-medium tracking-wide mb-2 ${visibleElements.includes(0) ? 'animate-fade-in' : 'opacity-0'}`}>
            OUR PHILOSOPHY
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight ${visibleElements.includes(1) ? 'animate-fade-in' : 'opacity-0'}`}>
            Crafting Food <br />
            <span className="text-primary">With Purpose</span>
          </h2>
          <p className={`text-muted-foreground leading-relaxed ${visibleElements.includes(2) ? 'animate-fade-in' : 'opacity-0'}`}>
            At Nourish, we believe that food should be more than just fuel – it should be an experience that delights the senses while nourishing the body. Every ingredient is chosen with intention, every recipe crafted with care, and every meal prepared with precision.
          </p>
          
          <div className={`grid gap-6 pt-6 ${visibleElements.includes(3) ? 'animate-fade-in' : 'opacity-0'}`}>
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  {index === 0 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wheat"><path d="M2 22 16 8"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M15.47 8.53 17 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L17 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M19.47 12.53 21 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L21 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/></svg>
                  )}
                  {index === 1 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leafy-green"><path d="M2 22c1.25-1.25 2.5-2.5 3.5-4.5 1.5 1 2.25 1 3.5 1 3 0 4-2 8-2 2.5 0 3.5 1 4.5 2 1-1 1.5-2 1.5-4 0-4-2-7.5-2-7.5-.5 5-2.5 6-5.5 6-2 0-3.5-1-5.5-1-1.5 0-5 2-7 6Z"/><path d="M12 6c0-2 2-4 4.5-4"/><path d="M16 18c0-4 2-6 4-6"/></svg>
                  )}
                  {index === 2 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-pulse"><path d="M19 14V6M14 10h10M12 6c-2.4-2.4-5.8-2.9-8.5-1.5a7 7 0 0 0-3.8 5.8c0 2 1 5.5 2.8 7.3L12 22l6-6c2.3-2.4 4-5.5 4-8a7 7 0 0 0-1-3.5"/></svg>
                  )}
                </div>
                <div>
                  <h3 className="text-base font-medium mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`relative order-1 md:order-2 ${visibleElements.includes(4) ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=800&q=80" 
              alt="Chef preparing food in kitchen" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          
          <div className="absolute bottom-6 right-6 glass-card p-6 rounded-xl max-w-[280px] hover-lift">
            <p className="text-base italic font-serif mb-4">
              "We believe in the power of food to transform lives. Every meal is a chance to nourish both body and soul."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
                <span className="font-serif text-lg">N</span>
              </div>
              <div>
                <p className="font-medium text-sm">Alex Sinclair</p>
                <p className="text-xs text-muted-foreground">Head Chef & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
