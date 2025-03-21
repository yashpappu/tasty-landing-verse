
import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Calendar, Percent } from 'lucide-react';

const specialOffers = [
  {
    id: 1,
    title: "Weekday Lunch Special",
    description: "Enjoy 20% off on all lunch combos Monday through Thursday. Each combo includes a main dish, side, and beverage.",
    validUntil: "Ongoing",
    discount: "20% Off",
    imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356c36?auto=format&fit=crop&w=600&q=80",
    timing: "12:00 PM - 3:00 PM"
  },
  {
    id: 2,
    title: "Family Feast Bundle",
    description: "Perfect for 4-6 people. Includes 2 appetizers, 3 main courses, 2 sides, and naan bread.",
    validUntil: "Weekends Only",
    discount: "₹200 Off",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    timing: "All Day"
  },
  {
    id: 3,
    title: "Festival Special Thali",
    description: "Traditional festive thali with 8 items including seasonal specialties, sweets, and a premium dessert.",
    validUntil: "During Festivals",
    discount: "Premium Offering",
    imageUrl: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80",
    timing: "Dinner Hours"
  }
];

const SpecialOffers = () => {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setTimeout(() => {
            setVisibleElements([...Array(specialOffers.length + 2).keys()]);
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
    <section 
      id="special-offers" 
      className="section py-24 relative indian-pattern" 
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className={`inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium tracking-wide mb-4 ${visibleElements.includes(0) ? 'animate-fade-in' : 'opacity-0'}`}>
            LIMITED TIME
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 ${visibleElements.includes(1) ? 'animate-fade-in' : 'opacity-0'}`}>
            Special <span className="text-primary">Offers</span>
          </h2>
          <p className={`text-muted-foreground ${visibleElements.includes(1) ? 'animate-fade-in' : 'opacity-0'}`}>
            Exclusive deals and seasonal specialties to enhance your dining experience with Ekta's authentic flavors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {specialOffers.map((offer, index) => (
            <div 
              key={offer.id}
              className={`relative overflow-hidden rounded-xl border border-food-200 hover-lift ${visibleElements.includes(index + 2) ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={offer.imageUrl} 
                  alt={offer.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {offer.discount}
                </div>
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="text-xl font-serif font-medium mb-2">{offer.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{offer.description}</p>
                
                <div className="flex flex-col space-y-2 mb-4">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 mr-2 text-primary" />
                    <span>Valid: {offer.validUntil}</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 mr-2 text-primary" />
                    <span>Timing: {offer.timing}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary/30 text-primary hover:bg-primary/10 rounded-full"
                >
                  Claim Offer
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="link" className="text-primary hover:text-primary/80">
            View All Offers <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
