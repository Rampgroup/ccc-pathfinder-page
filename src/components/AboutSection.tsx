import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Clear Roadmap",
      description: "Get a step-by-step plan from college selection to career success. No confusion, just clarity."
    },
    {
      icon: Heart,
      title: "Personal Mentoring",
      description: "We genuinely care about your future. Every student gets personal attention and guidance."
    },
    {
      icon: Lightbulb,
      title: "Industry Skills",
      description: "Learn what companies actually want. Get trained in latest technologies and soft skills."
    },
    {
      icon: Users,
      title: "Success Community",
      description: "Connect with 10,000+ successful students who started their journey just like you."
    }
  ];

  return (
    <section id="about" className="content-section bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-black text-primary mb-6 text-balance">
            Your Success Partner from <span className="text-accent">Inter to Career</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-balance">
            We understand the confusion after 12th grade. Which college? What course? How to build skills? 
            CCC is your complete mentor throughout this journey - from choosing the right B.Tech college to landing your dream job.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-black text-primary mb-6 text-balance">Why CCC is Different</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We know what it's like to feel lost after 12th grade. That's why CCC exists - to be 
                your trusted guide from Inter results to your first job offer. We don't just help you get admission, 
                we prepare you for lifelong success.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-card border border-border/30">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Find Your Perfect College</h4>
                  <p className="text-muted-foreground">Choose from 500+ top B.Tech institutions across India with expert guidance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-card border border-border/30">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Master Industry Skills</h4>
                  <p className="text-muted-foreground">Start skill training from Day 1 with our exclusive Trainlance program.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-card border border-border/30">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Secure Job Offers</h4>
                  <p className="text-muted-foreground">Graduate with job offers, not just a degree. 98% placement success rate.</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-primary/5 rounded-2xl border border-primary/20">
              <p className="text-lg font-semibold text-primary text-center">
                Join 10,000+ students who trusted CCC and are now working in top companies. 
                Your success story starts here.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="feature-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-card">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-primary mb-3 text-lg">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="section-divider"></div>
        
        {/* Enhanced Statistics */}
        <div className="bg-gradient-card rounded-3xl p-10 shadow-elegant border border-border/20">
          <h3 className="text-2xl font-black text-primary text-center mb-8">Our Track Record Speaks</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">10,000+</div>
              <div className="text-muted-foreground font-semibold">Students Placed Successfully</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-secondary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-muted-foreground font-semibold">Top College Partners</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-muted-foreground font-semibold">Students Get Job Offers</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-muted-foreground font-semibold">Expert Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;