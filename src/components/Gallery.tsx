
import { useRef, useState, useEffect } from 'react';

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    alt: "Colorful Indian spices in traditional bowls",
    category: "Ingredients"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1613292443284-8d10ef9d4b09?auto=format&fit=crop&w=800&q=80",
    alt: "Traditional Indian curry dish",
    category: "Main Course"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1611489142329-5f62cfa43e6e?auto=format&fit=crop&w=800&q=80",
    alt: "Authentic Indian street food",
    category: "Street Food"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=800&q=80",
    alt: "Colorful Indian sweets and desserts",
    category: "Desserts"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1585937421612-70a008356c36?auto=format&fit=crop&w=800&q=80",
    alt: "Traditional thali with variety of dishes",
    category: "Thali"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80",
    alt: "Beautifully arranged Indian feast",
    category: "Feast"
  }
];

const Gallery = () => {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setTimeout(() => {
            // Fix: Convert Array.keys() to a proper array before mapping
            setVisibleElements([0, 1, 2, ...Array.from({ length: galleryImages.length }).map((_, i) => i + 3)]);
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
    <section id="gallery" className="section py-24 bg-food-50" ref={sectionRef}>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className={`inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium tracking-wide mb-4 ${visibleElements.includes(0) ? 'animate-fade-in' : 'opacity-0'}`}>
          VISUAL JOURNEY
        </div>
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 ${visibleElements.includes(1) ? 'animate-fade-in' : 'opacity-0'}`}>
          Our Culinary <span className="text-primary">Gallery</span>
        </h2>
        <p className={`text-muted-foreground ${visibleElements.includes(2) ? 'animate-fade-in' : 'opacity-0'}`}>
          Feast your eyes on our colorful dishes that celebrate the rich tradition of Indian cuisine.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {galleryImages.map((image, index) => (
          <div 
            key={image.id} 
            className={`group relative overflow-hidden rounded-xl shadow-md hover-lift ${visibleElements.includes(index + 3) ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: `${(index + 3) * 100}ms` }}
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="w-full">
                <span className="inline-block px-3 py-1 bg-primary/80 text-white text-xs rounded-full mb-2">
                  {image.category}
                </span>
                <h3 className="text-white text-sm md:text-base font-medium">{image.alt}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="indian-divider mt-16">
        <span className="text-primary text-sm font-medium px-4">Follow us on Instagram @EktasKitchen</span>
      </div>
    </section>
  );
};

export default Gallery;
