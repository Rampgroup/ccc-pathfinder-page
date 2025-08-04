import { useState, useEffect } from "react";
import { GraduationCap, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Partner Colleges", href: "#partners" },
    { name: "Training (Trainlance)", href: "#trainlance" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-medium border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-primary rounded-2xl shadow-soft group-hover:shadow-glow transition-all duration-300">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-poppins gradient-text">Campus Career Club</h1>
              <p className="text-sm text-muted-foreground font-medium">From Dream College to Dream Job</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-foreground hover:text-primary font-medium transition-colors duration-200 group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="cta-outline" size="sm" className="font-semibold">
              <Phone className="w-4 h-4 mr-2" />
              Free Consultation
            </Button>
            <Button variant="cta" size="sm" className="font-semibold">
              Get College List
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 pb-6' 
            : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col space-y-4 pt-4 border-t border-border/50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary font-medium transition-colors duration-200 py-2 px-4 rounded-xl hover:bg-muted"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col space-y-3 pt-4 px-4">
              <Button variant="cta-outline" size="sm" className="w-full font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Free Consultation
              </Button>
              <Button variant="cta" size="sm" className="w-full font-semibold">
                Get College List
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
