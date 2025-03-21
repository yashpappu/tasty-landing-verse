
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
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato sauce with aromatic spices and fresh cream.",
    price: "$16.95",
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
    tags: ["Signature", "Spicy"]
  },
  {
    id: 2,
    name: "Vegetable Biryani",
    description: "Fragrant basmati rice cooked with seasonal vegetables, saffron, and traditional Indian spices.",
    price: "$14.95",
    imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    tags: ["Vegetarian", "Aromatic"]
  },
  {
    id: 3,
    name: "Palak Paneer",
    description: "Fresh spinach puree with homemade cottage cheese cubes, garlic, and authentic spices.",
    price: "$15.95",
    imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80",
    tags: ["Vegetarian", "Protein"]
  },
  {
    id: 4,
    name: "Masala Dosa",
    description: "Crispy rice and lentil crepe filled with spiced potato, served with coconut chutney and sambar.",
    price: "$13.95",
    imageUrl: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80",
    tags: ["South Indian", "Breakfast"]
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
      className="section py-24 relative" 
      ref={sectionRef}
      style={{
        background: 'linear-gradient(90deg, hsla(39, 100%, 97%, 1) 0%, hsla(46, 73%, 98%, 1) 100%)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dd7c59' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-cream-100 to-transparent opacity-60"></div>
      
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className={`inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium tracking-wide mb-4 ${visibleElements.includes(0) ? 'animate-fade-in' : 'opacity-0'}`}>
          EKTA'S MENU
        </div>
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 ${visibleElements.includes(1) ? 'animate-fade-in' : 'opacity-0'}`}>
          Authentic <span className="text-primary">Indian</span> Cuisine
        </h2>
        <p className={`text-muted-foreground ${visibleElements.includes(1) ? 'animate-fade-in' : 'opacity-0'}`}>
          Experience the rich flavors and aromatic spices of traditional Indian dishes, prepared with care using Ekta's time-honored family recipes.
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
        {products.map((product, index) => (
          <div 
            key={product.id}
            className={`glass-card rounded-xl overflow-hidden hover-lift border border-cream-200 ${visibleElements.includes(index + 2) ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: `${(index + 2) * 100}ms` }}
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full z-20 opacity-90">
                {product.price}
              </div>
            </div>
            <div className="p-5 bg-white/95">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium font-serif">{product.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
              <div className="flex items-center space-x-2">
                {product.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-xs bg-cream-100 text-primary rounded-full border border-cream-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="relative mt-16 text-center">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
        <Button variant="outline" className="rounded-full border-primary/30 px-8 py-6 mt-4 bg-white/80 hover:bg-white hover:text-primary">
          Explore Full Menu <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-full h-16 bg-gradient-to-t from-cream-100 to-transparent opacity-60"></div>
    </section>
  );
};

export default FeaturedProducts;
