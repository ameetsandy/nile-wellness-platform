import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Building, Star } from "lucide-react";
import { hospitals as allHospitals } from "@/data/hospitals";

// Utility function to generate random star rating between 4 and 5
const generateStarRating = () => {
  return 4 + Math.random(); // Returns a number between 4 and 5
};

const PartneredHospitals = () => {
  const hospitals = allHospitals.slice(0, 3);

  // Function to render star rating
  const renderStarRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const partialFill = (rating % 1) * 100;
    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      );
    }

    // Add partial star if needed
    if (partialFill > 0) {
      stars.push(
        <div key="partial" className="relative">
          <Star className="h-4 w-4 text-yellow-400" />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${partialFill}%` }}
          >
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    // Add remaining empty stars
    for (let i = Math.ceil(rating); i < 5; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
      );
    }

    return (
      <div className="flex items-center gap-0.5">
        {stars}
        <span className="ml-1 text-sm text-gray-600">({rating.toFixed(1)})</span>
      </div>
    );
  };

  return (
    <section className="section-container">
      <h2 className="section-title">We've Negotiated Special Rates with the Best Hospitals in India</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {hospitals.map((hospital) => (
          <div 
            key={hospital.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={hospital.image}
                alt={hospital.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 w-full p-4 flex justify-between items-end">
                <div className="flex items-center text-white">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{hospital.location}</span>
                </div>
                <div className="bg-white text-nile-600 py-1 px-3 rounded-md text-xs font-semibold">
                  {hospital.accreditation} Accredited
                </div>
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <img 
                  src={hospital.logo}
                  alt={`${hospital.name} logo`}
                  className="h-10"
                />
                {renderStarRating(hospital.rating)}
              </div>
              
              <Link to={hospital.path}>
                <h3 className="text-xl font-semibold mb-2 hover:text-nile-600 transition-colors flex items-center">
                  <Building className="h-5 w-5 mr-2 text-nile-600" />
                  {hospital.name}
                </h3>
              </Link>
              
              <div className="mb-4">
                <span className="inline-block bg-nile-50 text-nile-600 px-3 py-1 rounded-full text-sm font-medium">
                  {hospital.category}
                </span>
              </div>
              
              <Link 
                to={hospital.path}
                className="mt-auto flex items-center text-nile-600 hover:text-nile-700 font-medium text-sm"
              >
                View Hospital Details
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          to="/hospitals"
          className="cta-secondary"
        >
          View All Hospitals <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default PartneredHospitals;
