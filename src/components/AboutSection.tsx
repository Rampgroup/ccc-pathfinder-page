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
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Your Success Partner from <span className="text-accent">Inter to Career</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand the confusion after 12th grade. Which college? What course? How to build skills? 
            CCC is your mentor throughout this journey - from choosing the right B.Tech college to landing your dream job.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Why CCC is Different</h3>
            <p className="text-lg text-muted-foreground mb-6">
              We know what it's like to feel lost after 12th grade. That's why CCC exists - to be 
              your trusted guide from Inter results to your first job offer. We don't just help you get admission, 
              we prepare you for success.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              <strong>Step 1:</strong> Find your perfect B.Tech college from 500+ top institutions across India.
              <br />
              <strong>Step 2:</strong> Start skill training from Day 1 with our exclusive Trainlance program.
              <br />
              <strong>Step 3:</strong> Graduate with job offers, not just a degree.
            </p>
            <p className="text-lg text-muted-foreground">
              Join 10,000+ students who trusted CCC and are now working in top companies. 
              Your success story starts here.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl p-8 shadow-card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Students Placed Successfully</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Top College Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Students Get Job Offers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Expert Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;