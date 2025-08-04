import { ArrowRight, Play, Star, Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroStudents from "@/assets/hero-students.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroStudents} 
          alt="Students achieving success"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="glass p-4 rounded-2xl">
          <Star className="w-8 h-8 text-accent" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="glass p-4 rounded-2xl">
          <Award className="w-8 h-8 text-secondary" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="glass p-4 rounded-2xl">
          <TrendingUp className="w-8 h-8 text-accent" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 animate-bounce-in">
            <Users className="w-5 h-5 text-white mr-2" />
            <span className="text-white font-semibold">10,000+ Students Already Placed in Top Colleges!</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-poppins text-white mb-6 animate-fade-in-up leading-tight">
            Turn Your Engineering
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Dreams into Reality
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Get into your dream B.Tech college with expert guidance. Then master 
            <span className="text-accent font-semibold"> in-demand skills</span> with our 4-year training program. 
            We are with you from Inter results to your first job offer!
          </p>

          {/* Stats Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center space-x-2 text-white">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="font-bold text-white">500+</span>
              </div>
              <span className="font-semibold">Top Colleges</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <span className="font-bold text-white">98%</span>
              </div>
              <span className="font-semibold">Placement Rate</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center">
                <span className="font-bold text-white">24/7</span>
              </div>
              <span className="font-semibold">Expert Support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button variant="cta" size="xl" className="text-xl font-bold hover:scale-110 transition-all duration-300 shadow-2xl">
              Start Your Journey
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="text-xl font-bold border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/10"
            >
              <Play className="w-6 h-6 mr-2" />
              See Success Stories
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/80 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">Trusted by India's Top Colleges</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-sm font-medium">Complete Skill Training Included</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-light rounded-full"></div>
              <span className="text-sm font-medium">End-to-End Admission Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
