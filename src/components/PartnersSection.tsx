import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  const partners = [
    { name: "Delhi University", category: "Central University" },
    { name: "IIT Bombay", category: "Technical Institute" },
    { name: "BITS Pilani", category: "Private University" },
    { name: "AIIMS Delhi", category: "Medical College" },
    { name: "NIFT Mumbai", category: "Design Institute" },
    { name: "ISB Hyderabad", category: "Business School" },
    { name: "Jadavpur University", category: "State University" },
    { name: "XLRI Jamshedpur", category: "Management Institute" },
    { name: "NIT Trichy", category: "Technical Institute" },
    { name: "SRCC Delhi", category: "Commerce College" },
    { name: "Loyola College", category: "Arts & Science" },
    { name: "Christ University", category: "Private University" }
  ];

  const categories = [
    { title: "Engineering & Technology", count: "200+ Institutes", color: "from-blue-500 to-blue-600" },
    { title: "Medical & Healthcare", count: "150+ Colleges", color: "from-green-500 to-green-600" },
    { title: "Business & Management", count: "180+ Schools", color: "from-purple-500 to-purple-600" },
    { title: "Arts & Sciences", count: "250+ Universities", color: "from-orange-500 to-orange-600" }
  ];

  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our College Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've partnered with top colleges and universities across India to give you 
            direct access to quality education and career opportunities.
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl font-bold text-white">{category.count.split('+')[0].slice(-1)}</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">{category.title}</h3>
                <p className="text-accent font-medium">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner Logos/Names */}
        <div className="bg-gradient-subtle rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Featured Partners</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="bg-white border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">
                      {partner.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <h4 className="font-semibold text-primary text-sm mb-1">{partner.name}</h4>
                  <p className="text-muted-foreground text-xs">{partner.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">And 500+ more colleges across India</p>
            <div className="flex justify-center space-x-8 text-sm text-primary font-medium">
              <span>• IITs & NITs</span>
              <span>• Central Universities</span>
              <span>• Private Colleges</span>
              <span>• Deemed Universities</span>
            </div>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="font-semibold text-primary mb-2">Direct Admission</h3>
            <p className="text-muted-foreground text-sm">Skip the hassle with direct admission processes through our partner colleges</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="font-semibold text-primary mb-2">Scholarship Opportunities</h3>
            <p className="text-muted-foreground text-sm">Access exclusive scholarships and financial aid through our partnerships</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="font-semibold text-primary mb-2">Priority Support</h3>
            <p className="text-muted-foreground text-sm">Get priority support and faster responses from college admission teams</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;