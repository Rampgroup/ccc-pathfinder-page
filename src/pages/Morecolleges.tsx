
import React from "react";

const moreColleges = [
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
];

const MoreColleges: React.FC = () => {
  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10">More College Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {moreColleges.map((college, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-card p-6 flex flex-col items-center justify-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center mb-4 bg-gray-100">
                <img src={college.logo} alt={college.name + ' logo'} className="w-20 h-20 object-contain" />
              </div>
              <h3 className="font-semibold text-primary text-lg text-center">{college.name}</h3>
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
