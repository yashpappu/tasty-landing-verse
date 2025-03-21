
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setTimeout(() => {
            setVisibleElements([0, 1, 2]);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically send the email to your API
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive updates on our latest offerings and promotions.",
    });
    
    setEmail('');
  };

  return (
    <section 
      id="contact" 
      className="section py-24 bg-gradient-to-r from-sage-50 to-cream-50"
      ref={sectionRef}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className={`inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium tracking-wide mb-4 ${visibleElements.includes(0) ? 'animate-fade-in' : 'opacity-0'}`}>
          STAY CONNECTED
        </div>
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 ${visibleElements.includes(1) ? 'animate-fade-in' : 'opacity-0'}`}>
          Join Our <span className="text-primary">Community</span>
        </h2>
        <p className={`text-muted-foreground mb-10 max-w-xl mx-auto ${visibleElements.includes(2) ? 'animate-fade-in' : 'opacity-0'}`}>
          Subscribe to our newsletter for seasonal menu updates, exclusive offers, and nutrition tips delivered straight to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 max-w-md mx-auto ${visibleElements.includes(2) ? 'animate-fade-in' : 'opacity-0'}`}>
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full px-6 py-6 bg-white/80 border-food-200 focus-visible:ring-primary"
            required
          />
          <Button type="submit" className="rounded-full bg-primary hover:bg-primary/90 text-white px-6 py-6">
            Subscribe
          </Button>
        </form>
        
        <div className={`mt-10 pt-10 border-t border-food-200 text-sm text-muted-foreground ${visibleElements.includes(2) ? 'animate-fade-in' : 'opacity-0'}`}>
          <p>
            By subscribing, you agree to our <a href="#" className="underline hover:text-primary">Privacy Policy</a> and consent to receive updates from Nourish.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
