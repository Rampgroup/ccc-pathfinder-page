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

  const whyUsTab = { name: "Why Us?", href: "#whyus", isWhyUs: true };

  // Remove showWhyUs state, not needed for hover
  const whyUsPoints = [
    "Free Career Guidance after 12th by experts",
    "Free Campus Visits to shortlisted colleges",
    "Trainlance Tie-up for guaranteed placement training",
    "Top B Tech College Admissions with full support",
    "Personalized College Selection based on goals & budget",
    "Internships & Industry Exposure during your course",
    "Dedicated Mentorship from admission to job offer",
    "Educational Loan Assistance through Credella",
  ];

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md shadow-card border-b border-border/30' 
        : ''
    }`}>
      <div className="w-full px-4">
        <div className="flex items-center h-20 w-full">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4 group">
            <div className="p-1 bg-white/90 border-2 border-primary rounded-2xl shadow-card group-hover:shadow-elegant transition-all duration-300 group-hover:scale-105">
              <img 
                src="/ccc-logo.jpeg"
                alt="Campus Career Club connect" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-black font-poppins gradient-text tracking-tight leading-tight">Campus Career Connect</h1>
              <p className="text-sm text-muted-foreground font-semibold leading-tight">Your Journey from College Dreams to Career Goals</p>
            </div>
          </div>
          {/* Main nav links left-aligned after logo */}
          <nav className="hidden lg:flex items-center gap-10 ml-8 flex-1">
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
          {/* Why Us? tab at the far right */}
          <div className="hidden lg:block relative group">
            <div
              className="relative bg-primary text-white font-bold transition-colors duration-200 group px-4 py-2 flex items-center justify-center cursor-pointer rounded-lg shadow hover:bg-primary/90"
              style={{ minWidth: '110px', textAlign: 'center' }}
            >
              {whyUsTab.name}
            </div>
            <div className="absolute right-0 mt-2 w-80 bg-white border border-border rounded-xl shadow-lg z-50 p-4 text-left animate-fade-in opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
              <h3 className="font-bold text-lg mb-2 text-primary">Why Choose Us?</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-foreground">
                {whyUsPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
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
            {/* Why Us? tab at the right end in mobile menu */}
            <div className="relative">
              <div
                className="bg-primary text-white font-bold transition-colors duration-200 py-2 px-4 rounded-lg shadow w-full text-left cursor-pointer hover:bg-primary/90"
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {whyUsTab.name}
              </div>
              <div className="mt-2 w-full bg-white border border-border rounded-xl shadow-lg z-50 p-4 text-left animate-fade-in">
                <h3 className="font-bold text-lg mb-2 text-primary">Why Choose Us?</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-foreground">
                  {whyUsPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
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
