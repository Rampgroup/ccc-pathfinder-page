import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Focused Guidance",
      description: "Personalized career counseling tailored to each student's strengths and aspirations."
    },
    {
      icon: Heart,
      title: "Genuine Care",
      description: "We genuinely care about your success and are committed to your educational journey."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge tools and resources to help you stay ahead in today's competitive landscape."
    },
    {
      icon: Users,
      title: "Community",
      description: "Join a supportive community of like-minded students and mentors."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About Campus Career Club
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're more than just a career guidance platform. We're your partners in building 
            a successful academic and professional future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Campus Career Club was founded with a simple yet powerful mission: to bridge the gap 
              between academic achievement and career success for 12th-passed students across India.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We understand that transitioning from school to college can be overwhelming. That's why 
              we've created a comprehensive ecosystem that provides personalized guidance, direct 
              college connections, and continuous support throughout your educational journey.
            </p>
            <p className="text-lg text-muted-foreground">
              Our team of experienced counselors, industry professionals, and educational experts 
              work tirelessly to ensure every student finds their perfect academic and career path.
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
              <div className="text-muted-foreground">Students Guided</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">College Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Expert Counselors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;