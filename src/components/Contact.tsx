
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setTimeout(() => {
            setVisibleElements([0, 1, 2, 3, 4, 5]);
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
    
    // Validate form
    if (!name || !email || !message) {
      toast({
        title: "Incomplete form",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically send the form data to your API
    toast({
      title: "Message received!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section 
      id="contact-us" 
      className="section py-24 relative"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-white/0"></div>
      
      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className={`inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium tracking-wide mb-4 ${visibleElements.includes(0) ? 'animate-fade-in' : 'opacity-0'}`}>
            GET IN TOUCH
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 ${visibleElements.includes(1) ? 'animate-fade-in' : 'opacity-0'}`}>
            Contact <span className="text-primary">Ekta</span>
          </h2>
          <p className={`text-muted-foreground ${visibleElements.includes(2) ? 'animate-fade-in' : 'opacity-0'}`}>
            Have questions or special requests? Reach out to us and we'll be happy to assist you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className={`indian-border ${visibleElements.includes(3) ? 'animate-fade-in' : 'opacity-0'}`}>
            <h3 className="text-2xl font-serif mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-md border-food-200 focus-visible:ring-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-md border-food-200 focus-visible:ring-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[120px] rounded-md border-food-200 focus-visible:ring-primary"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-md"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div className={`space-y-8 ${visibleElements.includes(4) ? 'animate-fade-in' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">123 Spice Avenue, Flavor District, Mumbai 400001, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">info@ektaskitchen.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 11:00 AM - 10:00 PM</p>
                    <p className="text-muted-foreground">Saturday - Sunday: 12:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`mt-8 ${visibleElements.includes(5) ? 'animate-fade-in' : 'opacity-0'}`}>
              <h3 className="text-2xl font-serif mb-6">Find Us On Map</h3>
              <div className="h-[240px] bg-food-100 rounded-xl overflow-hidden relative">
                {/* This would be replaced with an actual map implementation */}
                <div className="absolute inset-0 flex items-center justify-center bg-food-50">
                  <p className="text-muted-foreground text-sm">Interactive map would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
