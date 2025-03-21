
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Our Story", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" }
      ]
    },
    {
      title: "Menu",
      links: [
        { name: "Seasonal", href: "#menu" },
        { name: "Dietary Preferences", href: "#" },
        { name: "Catering", href: "#" },
        { name: "Bulk Orders", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "FAQs", href: "#" },
        { name: "Contact", href: "#contact" },
        { name: "Delivery", href: "#" },
        { name: "Terms & Conditions", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-food-950 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <div className="space-y-6">
            <a href="#" className="text-2xl font-serif font-medium block mb-2 hover:text-primary transition-colors">
              Nourish
            </a>
            <p className="text-food-300 text-sm leading-relaxed pr-4">
              Crafting thoughtful, nourishing meals that honor both body and planet. Our commitment to quality is unwavering.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-food-800 hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-food-800 hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-food-800 hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-medium mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-food-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-food-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-food-400 text-sm mb-4 md:mb-0">
            © {currentYear} Nourish. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-food-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
