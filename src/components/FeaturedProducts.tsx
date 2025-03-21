
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  tags: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Avocado Bowl",
    description: "Fresh avocado, quinoa, cherry tomatoes, and herbs with our signature dressing.",
    price: "$14.95",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    tags: ["Vegan", "Protein"]
  },
  {
    id: 2,
    name: "Mediterranean Plate",
    description: "Hummus, falafel, tabbouleh, and warm pita bread with olive oil.",
    price: "$16.95",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    tags: ["Vegetarian", "Sharing"]
  },
  {
    id: 3,
    name: "Wild Salmon",
    description: "Grilled salmon fillet with seasonal vegetables and lemon herb sauce.",
    price: "$22.95",
    imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80",
    tags: ["Seafood", "Protein"]
  },
  {
    id: 4,
    name: "Autumn Harvest",
    description: "Roasted seasonal vegetables with ancient grains and herb dressing.",
    price: "$18.95",
    imageUrl: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=600&q=80",
    tags: ["Vegetarian", "Seasonal"]
  }
];

const FeaturedProducts = () => {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate elements with staggered timing
          const timer = setTimeout(() => {
            setVisibleElements([...Array(products.length + 2).keys()]);
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
      id="menu" 
      className="section py-24" 
      ref={sectionRef}
    >
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className={`inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium tracking-wide mb-4 ${visibleElements.includes(0) ? 'animate-fade-in' : 'opacity-0'}`}>
          OUR MENU
        </div>
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 ${visibleElements.includes(1) ? 'animate-fade-in' : 'opacity-0'}`}>
          Featured <span className="text-primary">Dishes</span>
        </h2>
        <p className={`text-muted-foreground ${visibleElements.includes(1) ? 'animate-fade-in' : 'opacity-0'}`}>
          Our seasonal menu showcases the finest ingredients at their peak flavor, crafted with care and attention to detail.
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product, index) => (
          <div 
            key={product.id}
            className={`glass-card rounded-xl overflow-hidden hover-lift ${visibleElements.includes(index + 2) ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: `${(index + 2) * 100}ms` }}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <span className="font-medium text-primary">{product.price}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
              <div className="flex items-center space-x-2">
                {product.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-xs bg-accent rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button variant="outline" className="rounded-full border-food-300 px-8 py-6">
          View Full Menu <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
