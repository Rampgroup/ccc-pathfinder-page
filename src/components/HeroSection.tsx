import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-96px)]">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
              <Trophy className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">#1 Career Platform for Students</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Bridge to 
              <span className="block bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                Dream Colleges
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Campus Career Club empowers 12th-passed students with personalized guidance, 
              college connections, and career roadmaps to unlock their full potential.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-white/80 text-sm">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-white/80 text-sm">College Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-white/80 text-sm">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Programs
              </Button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative lg:order-last">
            <div className="relative">
              <img
                src={heroImage}
                alt="Successful students at Campus Career Club"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-elegant max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Join 10K+ Students</div>
                    <div className="text-sm text-muted-foreground">Building their future</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;