import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-accent rounded-lg">
                <GraduationCap className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Campus Career Club</h3>
                <p className="text-sm text-primary-foreground/80">Empowering Student Success</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner in building a successful academic and professional future. 
              We bridge the gap between dreams and reality.
            </p>
            <div className="flex space-x-4">
              <span className="text-sm bg-accent px-3 py-1 rounded-full text-accent-foreground">10K+ Students</span>
              <span className="text-sm bg-accent px-3 py-1 rounded-full text-accent-foreground">500+ Partners</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-primary-foreground/80 hover:text-accent transition-colors">Success Stories</a></li>
              <li><a href="#partners" className="text-primary-foreground/80 hover:text-accent transition-colors">Partner Colleges</a></li>
              <li><a href="#trainlance" className="text-primary-foreground/80 hover:text-accent transition-colors">Training (Trainlance)</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><span className="text-primary-foreground/80">B.Tech College Placement</span></li>
              <li><span className="text-primary-foreground/80">Career Counseling</span></li>
              <li><span className="text-primary-foreground/80">Admission Support</span></li>
              <li><span className="text-primary-foreground/80">Trainlance Skill Training</span></li>
              <li><span className="text-primary-foreground/80">Programming Courses</span></li>
              <li><span className="text-primary-foreground/80">Soft Skills Development</span></li>
              <li><span className="text-primary-foreground/80">Aptitude Training</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  CCC Campus, Block A, Sector 62<br />
                  Noida, Uttar Pradesh 201309
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">info@campuscareerclub.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Follow Us</h5>
              <div className="flex space-x-2">
                <a href="#" className="bg-accent text-accent-foreground px-3 py-1 rounded text-sm hover:bg-accent/90 transition-colors">FB</a>
                <a href="#" className="bg-accent text-accent-foreground px-3 py-1 rounded text-sm hover:bg-accent/90 transition-colors">IG</a>
                <a href="#" className="bg-accent text-accent-foreground px-3 py-1 rounded text-sm hover:bg-accent/90 transition-colors">LI</a>
                <a href="#" className="bg-accent text-accent-foreground px-3 py-1 rounded text-sm hover:bg-accent/90 transition-colors">YT</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © 2024 Campus Career Club. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;