
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(90deg, hsl(46, 73%, 95%) 0%, hsl(46, 73%, 98%) 100%)'
      }}
    >
      <div className="absolute inset-0 opacity-10 bg-grain-pattern"></div>
      
      <div className="relative z-10 section grid md:grid-cols-2 gap-12 md:gap-6 items-center">
        <div className={`space-y-6 max-w-xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium tracking-wide reveal reveal-delay-100">
            TASTE THE DIFFERENCE
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight text-balance reveal reveal-delay-200">
            Eat Well, <br />
            <span className="text-primary">Live Well</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-md reveal reveal-delay-300">
            Experience the perfect blend of nutrition and culinary delight with our 
            expertly crafted meals designed to nourish both body and soul.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 reveal reveal-delay-400">
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-6">
              Browse Menu
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="rounded-full border-food-300 bg-transparent hover:bg-food-50 px-8 py-6">
              Our Process
            </Button>
          </div>
          
          <div className="flex items-center space-x-6 pt-6 reveal reveal-delay-500">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-food-100 flex items-center justify-center text-xs font-medium">
                  {/* Placeholder for user avatars */}
                </div>
              ))}
            </div>
            <div>
              <div className="text-sm font-medium">300+ Happy Customers</div>
              <div className="text-xs text-muted-foreground">Join them today</div>
            </div>
          </div>
        </div>
        
        <div className={`relative ${isVisible ? 'animate-fade-in-slow' : 'opacity-0'}`}>
          <div className="relative h-[500px] w-full md:w-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80" 
              alt="Beautifully plated healthy meal" 
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-lg max-w-[240px] hover-lift">
            <div className="flex items-center space-x-3">
              <div className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium">Ready in</div>
                <div className="text-xs text-muted-foreground">30 minutes</div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -right-6 glass-card p-4 rounded-lg hover-lift">
            <div className="flex items-center space-x-3">
              <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium">Premium</div>
                <div className="text-xs text-muted-foreground">Ingredients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a 
          href="#menu" 
          className="flex flex-col items-center text-sm text-food-500 animate-soft-pulse"
          aria-label="Scroll to menu section"
        >
          <span className="mb-2">Explore</span>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 14l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
