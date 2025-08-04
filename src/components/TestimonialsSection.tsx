import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      college: "DU - Delhi University",
      course: "B.Com (Hons)",
      image: testimonial1,
      rating: 5,
      testimonial: "CCC helped me navigate the complex college admission process with ease. Their personalized guidance was exactly what I needed to get into my dream college. The counselors understood my strengths and helped me choose the perfect course."
    },
    {
      name: "Arjun Patel",
      college: "IIT Bombay",
      course: "Computer Science",
      image: testimonial2,
      rating: 5,
      testimonial: "I was completely lost after 12th grade. CCC not only helped me discover my passion for computer science but also provided the roadmap to achieve my goals. Today, I'm proud to be studying at IIT Bombay!"
    },
    {
      name: "Sarah Johnson",
      college: "BITS Pilani",
      course: "Biotechnology",
      image: testimonial3,
      rating: 5,
      testimonial: "The mentorship and support I received from CCC was incredible. They helped me explore career options I never knew existed and guided me through every step of the application process. Highly recommended!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Success Stories from Our Students
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Hear from students who transformed their dreams into reality with Campus Career Club
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-accent mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-white/90 mb-6 leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-white/80 text-sm">{testimonial.course}</p>
                    <p className="text-accent text-sm font-medium">{testimonial.college}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80">Student Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/80">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Placement Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;