import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  const partners = [
    { name: "SRM Institute", logo: "src/assets/srm-logo.png", category: "Engineering", location: "Chennai", ranking: "#5 Private Engineering" },
    { name: "VIT University", logo: "src/assets/vit-logo.png", category: "Engineering", location: "Vellore", ranking: "#8 Private Engineering" },
    { name: "Manipal Institute", logo: "src/assets/manipal-logo.jpg", category: "Technology", location: "Karnataka", ranking: "#12 Engineering" },
    { name: "GITAM University", logo: "src/assets/gitam.jpg", category: "Engineering", location: "Hyderabad,Vishakapatnam,Banglore", ranking: "#15 Private Engineering" },
    { name: "VR Siddhartha Engineering College", logo: "src/assets/vrsiddardha.png", category: "Engineering", location: "Vijayawada", ranking: "#20 Private Engineering" },
    { name: "LPU", logo: "src/assets/lpu-logo.png", category: "Engineering", location: "Punjab", ranking: "#25 Private Engineering" },
    { name: "Amity University", logo: "src/assets/amity-logo.png", category: "Engineering", location: "Noida", ranking: "#30 Private Engineering" },
    { name: "KL University", logo: "src/assets/kl-logo.png", category: "Engineering", location: "Hyderabad,Vijayawada", ranking: "#35 Private Engineering" },
    { name: "Anurag University", logo: "src/assets/anurag-university-logo.png", category: "Engineering", location: "Hyderabad", ranking: "#40 Private Engineering" },
    { name: "Mallareddy engineering college", logo: "src/assets/mallareddy-logo.jpg", category: "Engineering", location: "Hyderabad", ranking: "#18 Private Engineering" },
    { name: "Amritha Vishwa Vidyapeetham", logo: "src/assets/amrita-logo.png", category: "Engineering", location: "Coimbatore", ranking: "#22 Private Engineering" },
    { name: "Parul University", logo: "src/assets/Parul-University-Logo.png", category: "Engineering", location: "Gujarat", ranking: "#45 Private Engineering" }
  ];

  const categories = [

  ];

  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Private B.Tech College Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've partnered with India's top private B.Tech colleges to provide you 
            with direct access to quality engineering education and guaranteed placements.
          </p>
        </div> */}

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-2">
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
        <div className="bg-gradient-subtle rounded-2xl p-8 mb-4">
          <h3 className="text-2xl font-bold text-primary text-center mb-6">Top B.Tech College Partners</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="bg-white border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 text-center">
                  <div className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-1 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <img src={partner.logo} alt={partner.name + ' logo'} className="w-24 h-24 object-contain rounded-full" />
                  </div>
                  <h4 className="font-semibold text-primary text-lg mb-2">{partner.name}</h4>
                  <p className="text-muted-foreground text-sm mb-1">{partner.location}</p>
                  <p className="text-accent text-xs font-medium bg-accent/10 rounded-full px-3 py-1 inline-block">
                    {partner.ranking}
                  </p>
                  <div className="mt-3">
                    <span className="text-xs text-black bg-gray-100 rounded-full px-4 py-1">
                      {partner.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">And 500+ more private B.Tech colleges across India</p>
            <div className="flex justify-center flex-wrap gap-4 text-sm text-primary font-medium">
              <span className="bg-primary/10 px-3 py-1 rounded-full">• Top Private Universities</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">• Deemed Universities</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">• Engineering Colleges</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">• Technology Institutes</span>
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