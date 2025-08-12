import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const PartnersSection = () => {
  const [showAllColleges, setShowAllColleges] = useState(false);
  
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

  const moreColleges = [
    { name: "Bennett University", logo: "src/assets/bennett-logo.png", category: "Engineering", location: "Greater Noida", ranking: "#50 Private Engineering" },
    { name: "Shiv Nadar University", logo: "src/assets/shivnadar-logo.png", category: "Engineering", location: "Greater Noida", ranking: "#55 Private Engineering" },
    { name: "Chandigarh University", logo: "src/assets/chandigarh-logo.png", category: "Engineering", location: "Chandigarh", ranking: "#60 Private Engineering" },
    { name: "BITS Pilani", logo: "src/assets/bits-logo.png", category: "Engineering", location: "Pilani", ranking: "#3 Private Engineering" },
    { name: "Jain University", logo: "src/assets/jain-logo.png", category: "Engineering", location: "Bangalore", ranking: "#65 Private Engineering" },
    { name: "Graphic Era University", logo: "src/assets/graphicera-logo.png", category: "Engineering", location: "Dehradun", ranking: "#70 Private Engineering" },
    { name: "Presidency University", logo: "src/assets/presidency-logo.png", category: "Engineering", location: "Bangalore", ranking: "#75 Private Engineering" },
    { name: "REVA University", logo: "src/assets/reva-logo.png", category: "Engineering", location: "Bangalore", ranking: "#80 Private Engineering" },
    { name: "Galgotias University", logo: "src/assets/galgotias-logo.png", category: "Engineering", location: "Greater Noida", ranking: "#85 Private Engineering" },
    { name: "Sharda University", logo: "src/assets/sharda-logo.png", category: "Engineering", location: "Greater Noida", ranking: "#90 Private Engineering" },
    { name: "SRM AP", logo: "src/assets/srmap-logo.png", category: "Engineering", location: "Amaravati", ranking: "#95 Private Engineering" },
    { name: "Vignan University", logo: "src/assets/vignan-logo.png", category: "Engineering", location: "Guntur", ranking: "#100 Private Engineering" },
    { name: "Lovely Professional University", logo: "src/assets/lpu2-logo.png", category: "Engineering", location: "Punjab", ranking: "#25 Private Engineering" },
    { name: "Chitkara University", logo: "src/assets/chitkara-logo.png", category: "Engineering", location: "Punjab", ranking: "#105 Private Engineering" },
    { name: "Thapar Institute", logo: "src/assets/thapar-logo.png", category: "Engineering", location: "Patiala", ranking: "#110 Private Engineering" },
    { name: "Jaypee University", logo: "src/assets/jaypee-logo.png", category: "Engineering", location: "Noida", ranking: "#115 Private Engineering" },
    { name: "Nirma University", logo: "src/assets/nirma-logo.png", category: "Engineering", location: "Ahmedabad", ranking: "#120 Private Engineering" },
    { name: "Christ University", logo: "src/assets/christ-logo.png", category: "Engineering", location: "Bangalore", ranking: "#125 Private Engineering" },
    { name: "Symbiosis University", logo: "src/assets/symbiosis-logo.png", category: "Engineering", location: "Pune", ranking: "#130 Private Engineering" },
    { name: "MIT World Peace University", logo: "src/assets/mitwpu-logo.png", category: "Engineering", location: "Pune", ranking: "#135 Private Engineering" },
    { name: "Flame University", logo: "src/assets/flame-logo.png", category: "Engineering", location: "Pune", ranking: "#140 Private Engineering" },
    { name: "O.P. Jindal University", logo: "src/assets/jindal-logo.png", category: "Engineering", location: "Sonipat", ranking: "#145 Private Engineering" },
    { name: "Ashoka University", logo: "src/assets/ashoka-logo.png", category: "Engineering", location: "Sonipat", ranking: "#150 Private Engineering" },
    { name: "JSS Academy", logo: "src/assets/jss-logo.png", category: "Engineering", location: "Noida", ranking: "#155 Private Engineering" },
    { name: "PES University", logo: "src/assets/pes-logo.png", category: "Engineering", location: "Bangalore", ranking: "#160 Private Engineering" },
    { name: "BMS College", logo: "src/assets/bms-logo.png", category: "Engineering", location: "Bangalore", ranking: "#165 Private Engineering" },
    { name: "RV College", logo: "src/assets/rv-logo.png", category: "Engineering", location: "Bangalore", ranking: "#170 Private Engineering" },
    { name: "Dayananda Sagar University", logo: "src/assets/dsu-logo.png", category: "Engineering", location: "Bangalore", ranking: "#175 Private Engineering" },
    { name: "CMR University", logo: "src/assets/cmr-logo.png", category: "Engineering", location: "Bangalore", ranking: "#180 Private Engineering" },
    { name: "Alliance University", logo: "src/assets/alliance-logo.png", category: "Engineering", location: "Bangalore", ranking: "#185 Private Engineering" },
    { name: "IIIT Hyderabad", logo: "src/assets/iiith-logo.png", category: "Engineering", location: "Hyderabad", ranking: "#2 Private Engineering" },
    { name: "IIIT Bangalore", logo: "src/assets/iiitb-logo.png", category: "Engineering", location: "Bangalore", ranking: "#4 Private Engineering" },
    { name: "NIT Warangal", logo: "src/assets/nitw-logo.png", category: "Engineering", location: "Warangal", ranking: "#1 Government Engineering" },
    { name: "NIT Trichy", logo: "src/assets/nitt-logo.png", category: "Engineering", location: "Trichy", ranking: "#2 Government Engineering" },
    { name: "NIT Surathkal", logo: "src/assets/nitk-logo.png", category: "Engineering", location: "Surathkal", ranking: "#3 Government Engineering" },
    { name: "VIT Bhopal", logo: "src/assets/vitb-logo.png", category: "Engineering", location: "Bhopal", ranking: "#190 Private Engineering" },
    { name: "VIT AP", logo: "src/assets/vitap-logo.png", category: "Engineering", location: "Amaravati", ranking: "#195 Private Engineering" },
    { name: "Kalinga University", logo: "src/assets/kalinga-logo.png", category: "Engineering", location: "Bhubaneswar", ranking: "#200 Private Engineering" },
    { name: "Siksha O Anusandhan", logo: "src/assets/soa-logo.png", category: "Engineering", location: "Bhubaneswar", ranking: "#205 Private Engineering" },
    { name: "KIIT University", logo: "src/assets/kiit2-logo.png", category: "Engineering", location: "Bhubaneswar", ranking: "#210 Private Engineering" }
  ];

  const allColleges = [...partners, ...moreColleges];
  const displayedColleges = showAllColleges ? allColleges : partners;

  const categories = [];

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
            {displayedColleges.map((college, index) => (
              <Card key={index} className="bg-white border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 text-center">
                  <div className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-1 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <img src={college.logo} alt={college.name + ' logo'} className="w-24 h-24 object-contain rounded-full" />
                  </div>
                  <h4 className="font-semibold text-primary text-lg mb-2">{college.name}</h4>
                  <p className="text-muted-foreground text-sm mb-1">{college.location}</p>
                  <p className="text-primary text-xs font-medium bg-primary/10 rounded-full px-3 py-1 inline-block">
                    {college.ranking}
                  </p>
                  <div className="mt-3">
                    <span className="text-xs text-black bg-gray-100 rounded-full px-4 py-1">
                      {college.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More/Less Button */}
          <div className="flex justify-center mt-8">
            <button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-bold shadow-card flex items-center gap-2 text-lg hover:from-blue-600 hover:to-blue-800 transition-colors duration-200"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
              onClick={() => setShowAllColleges(!showAllColleges)}
            >
              {showAllColleges ? 'View Less' : 'View More'}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className={`w-5 h-5 transition-transform duration-200 ${showAllColleges ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
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