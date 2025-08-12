
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface College {
  name: string;
  logo: string;
  generatedImage?: string;
}

const moreColleges: College[] = [
  { name: "Bennett University", logo: "src/assets/bennett-logo.png" },
  { name: "Shiv Nadar University", logo: "src/assets/shivnadar-logo.png" },
  { name: "Chandigarh University", logo: "src/assets/chandigarh-logo.png" },
  { name: "BITS Pilani", logo: "src/assets/bits-logo.png" },
  { name: "Jain University", logo: "src/assets/jain-logo.png" },
  { name: "Graphic Era University", logo: "src/assets/graphicera-logo.png" },
  { name: "Presidency University", logo: "src/assets/presidency-logo.png" },
  { name: "REVA University", logo: "src/assets/reva-logo.png" },
  { name: "Galgotias University", logo: "src/assets/galgotias-logo.png" },
  { name: "Sharda University", logo: "src/assets/sharda-logo.png" },
  { name: "SRM AP", logo: "src/assets/srmap-logo.png" },
  { name: "Vignan University", logo: "src/assets/vignan-logo.png" },
  { name: "Lovely Professional University", logo: "src/assets/lpu2-logo.png" },
  { name: "Chitkara University", logo: "src/assets/chitkara-logo.png" },
  { name: "Thapar Institute", logo: "src/assets/thapar-logo.png" },
  { name: "Jaypee University", logo: "src/assets/jaypee-logo.png" },
  { name: "Nirma University", logo: "src/assets/nirma-logo.png" },
  { name: "Christ University", logo: "src/assets/christ-logo.png" },
  { name: "Symbiosis University", logo: "src/assets/symbiosis-logo.png" },
  { name: "MIT World Peace University", logo: "src/assets/mitwpu-logo.png" },
  { name: "Flame University", logo: "src/assets/flame-logo.png" },
  { name: "O.P. Jindal University", logo: "src/assets/jindal-logo.png" },
  { name: "Ashoka University", logo: "src/assets/ashoka-logo.png" },
  { name: "JSS Academy", logo: "src/assets/jss-logo.png" },
  { name: "PES University", logo: "src/assets/pes-logo.png" },
  { name: "BMS College", logo: "src/assets/bms-logo.png" },
  { name: "RV College", logo: "src/assets/rv-logo.png" },
  { name: "Dayananda Sagar University", logo: "src/assets/dsu-logo.png" },
  { name: "CMR University", logo: "src/assets/cmr-logo.png" },
  { name: "Alliance University", logo: "src/assets/alliance-logo.png" },
  { name: "IIIT Hyderabad", logo: "src/assets/iiith-logo.png" },
  { name: "IIIT Bangalore", logo: "src/assets/iiitb-logo.png" },
  { name: "NIT Warangal", logo: "src/assets/nitw-logo.png" },
  { name: "NIT Trichy", logo: "src/assets/nitt-logo.png" },
  { name: "NIT Surathkal", logo: "src/assets/nitk-logo.png" },
  { name: "VIT Bhopal", logo: "src/assets/vitb-logo.png" },
  { name: "VIT AP", logo: "src/assets/vitap-logo.png" },
  { name: "Kalinga University", logo: "src/assets/kalinga-logo.png" },
  { name: "Siksha O Anusandhan", logo: "src/assets/soa-logo.png" },
  { name: "KIIT University", logo: "src/assets/kiit2-logo.png" },
  { name: "Xavier University", logo: "src/assets/xavier-logo.png" },
  { name: "NIFT Delhi", logo: "src/assets/nift-logo.png" },
  { name: "Pearl Academy", logo: "src/assets/pearl-logo.png" },
  { name: "Whistling Woods", logo: "src/assets/ww-logo.png" },
  { name: "IIAD Delhi", logo: "src/assets/iiad-logo.png" },
  { name: "Anant National University", logo: "src/assets/anant-logo.png" },
  { name: "Banasthali University", logo: "src/assets/banasthali-logo.png" },
  { name: "Birla Institute", logo: "src/assets/birla-logo.png" },
  { name: "DTU Delhi", logo: "src/assets/dtu-logo.png" },
  { name: "NSUT Delhi", logo: "src/assets/nsut-logo.png" },
  { name: "IGDTUW Delhi", logo: "src/assets/igdtuw-logo.png" },
  { name: "Jamia Millia Islamia", logo: "src/assets/jamia-logo.png" },
  { name: "Aligarh Muslim University", logo: "src/assets/amu-logo.png" },
];

const MoreColleges: React.FC = () => {
  const [colleges, setColleges] = useState<College[]>(moreColleges);
  const [generatingIndex, setGeneratingIndex] = useState<number | null>(null);

  const generateCollegeImage = async (college: College, index: number) => {
    setGeneratingIndex(index);
    try {
      const response = await fetch('/api/generate-college-images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ collegeName: college.name }),
      });

      const data = await response.json();
      
      if (data.success && data.imageURL) {
        const updatedColleges = [...colleges];
        updatedColleges[index].generatedImage = data.imageURL;
        setColleges(updatedColleges);
        toast.success(`Generated image for ${college.name}!`);
      } else {
        throw new Error(data.error || 'Failed to generate image');
      }
    } catch (error) {
      console.error('Error generating image:', error);
      toast.error(`Failed to generate image for ${college.name}`);
    } finally {
      setGeneratingIndex(null);
    }
  };

  const generateAllImages = async () => {
    toast.info("Starting to generate images for all colleges...");
    
    for (let i = 0; i < colleges.length; i++) {
      if (!colleges[i].generatedImage) {
        await generateCollegeImage(colleges[i], i);
        // Add a small delay between requests to avoid overwhelming the API
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    toast.success("Finished generating all college images!");
  };

  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">More College Partners</h2>
        
        <div className="text-center mb-8">
          <Button 
            onClick={generateAllImages}
            className="bg-gradient-primary text-white px-6 py-3 rounded-full font-semibold hover:shadow-elegant transition-all duration-300"
            disabled={generatingIndex !== null}
          >
            {generatingIndex !== null ? 'Generating Images...' : 'Generate All College Images'}
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            Click individual colleges or generate all at once using AI
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {colleges.map((college, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl shadow-card p-6 flex flex-col items-center justify-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => !college.generatedImage && generatingIndex === null && generateCollegeImage(college, idx)}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center mb-4 bg-gray-100 relative">
                {generatingIndex === idx ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  <img 
                    src={college.generatedImage || college.logo} 
                    alt={college.name + ' logo'} 
                    className="w-20 h-20 object-contain" 
                  />
                )}
                {!college.generatedImage && generatingIndex !== idx && (
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 rounded-full flex items-center justify-center transition-all duration-200">
                    <span className="text-xs text-white opacity-0 hover:opacity-100 font-medium">Generate AI Image</span>
                  </div>
                )}
              </div>
              <h3 className="font-semibold text-primary text-lg text-center">{college.name}</h3>
              {college.generatedImage && (
                <span className="text-xs text-accent mt-1">✨ AI Generated</span>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-bold shadow-card text-lg hover:from-blue-600 hover:to-blue-800 transition-colors duration-200">
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default MoreColleges;
