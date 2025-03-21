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
      className="section py-24" 
      ref={sectionRef}
    >
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className={`inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium tracking-wide mb-4 ${visibleElements.includes(0) ? 'animate-fade-in' : 'opacity-0'}`}>
          OUR MENU
        </div>
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 ${visibleElements.includes(1) ? 'animate-fade-in' : 'opacity-0'}`}>
          Authentic <span className="text-primary">Indian</span> Cuisine
        </h2>
        <p className={`text-muted-foreground ${visibleElements.includes(1) ? 'animate-fade-in' : 'opacity-0'}`}>
          Experience the rich flavors and aromatic spices of traditional Indian dishes, prepared with care using time-honored recipes.
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
