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
          alt="Students achieving success in their academic journey"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-secondary/85 to-accent/75"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float hidden md:block">
        <div className="glass p-4 rounded-2xl shadow-elegant">
          <Star className="w-8 h-8 text-accent" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float hidden md:block" style={{ animationDelay: '2s' }}>
        <div className="glass p-4 rounded-2xl shadow-elegant">
          <Award className="w-8 h-8 text-secondary" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float hidden md:block" style={{ animationDelay: '4s' }}>
        <div className="glass p-4 rounded-2xl shadow-elegant">
          <TrendingUp className="w-8 h-8 text-accent" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-8 py-4 mb-8 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 animate-bounce-in shadow-elegant">
            <Users className="w-5 h-5 text-white mr-3" />
            <span className="text-white font-bold text-sm md:text-base">10,000+ Students Already Placed in Top Colleges!</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-poppins text-white mb-6 animate-fade-in-up leading-tight text-balance">
            From Dream College
            <br />
            to 
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent"> Dream Job</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/95 mb-10 max-w-4xl mx-auto font-medium leading-relaxed animate-fade-in-up text-balance" style={{ animationDelay: "0.2s" }}>
            Your complete journey partner from 12th to career success. We help you secure admission in top B.Tech colleges, 
            then train you with <span className="text-accent font-bold">industry-ready skills</span> for guaranteed job placement. 
            Join 10,000+ students who achieved their dreams with CCC.
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
            <Button variant="hero" size="xl" className="text-xl font-black shadow-elegant hover:shadow-glow">
              Start Your Journey
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="text-xl font-bold border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-md bg-white/15 shadow-card hover:shadow-elegant"
            >
              <Play className="w-6 h-6 mr-3" />
              Explore Colleges
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
