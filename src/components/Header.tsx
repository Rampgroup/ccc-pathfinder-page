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
    { name: "About Us", href: "#about" },
    // { name: "Our Services", href: "#services" },
    { name: "Top Colleges", href: "#partners" },
    { name: "Skill Training", href: "#trainlance" },
    { name: "Get Support", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md shadow-card border-b border-border/30' 
        : ''
    }`}>
      <div className="w-full px-4">
        <div className="flex items-center h-20">
          {/* Logo and Navigation in a row */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4 group">
              <div className="p-1 bg-white/90 border-2 border-primary rounded-2xl shadow-card group-hover:shadow-elegant transition-all duration-300 group-hover:scale-105">
                <img 
                  src="/lovable-uploads/c7bcc15e-4423-4211-9f3f-e133243e9e7a.png" 
                  alt="Campus Career Club Logo" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-black font-poppins gradient-text tracking-tight">Campus Career Club</h1>
                <p className="text-sm text-muted-foreground font-semibold">Your Journey from College Dreams to Career Goals</p>
              </div>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10 ml-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-foreground hover:text-primary font-medium transition-colors duration-200 group px-2 py-2 flex items-center justify-center"
                  style={{ minWidth: '110px', textAlign: 'center' }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              ))}
            </nav>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors duration-200 ml-auto"
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
        <div
          className={`lg:hidden fixed top-20 left-0 w-full bg-background shadow-lg z-40 transition-all duration-300 ${
            isMenuOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
          style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
        >
          <nav className="flex flex-col space-y-4 pt-4 border-t border-border/50 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary font-medium transition-colors duration-200 py-2 px-4 rounded-xl hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col space-y-3 pt-4">
              <Button variant="outline" size="sm" className="w-full font-bold">
                <Phone className="w-4 h-4 mr-2" />
                Book Free Call
              </Button>
              <Button variant="cta" size="sm" className="w-full font-bold">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
