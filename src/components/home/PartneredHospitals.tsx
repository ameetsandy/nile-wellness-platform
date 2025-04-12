
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Building } from "lucide-react";

const PartneredHospitals = () => {
  const hospitals = [
    {
      id: 1,
      name: "Apollo Hospitals",
      location: "Chennai",
      accreditation: "JCI",
      image: "https://placehold.co/600x400/medical-600/white/?text=Apollo+Hospitals",
      logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
      path: "/hospitals/apollo-chennai"
    },
    {
      id: 2,
      name: "Medanta Hospital",
      location: "Gurgaon",
      accreditation: "NABH",
      image: "https://placehold.co/600x400/medical-600/white/?text=Medanta+Hospital",
      logo: "https://placehold.co/200x100/white/gray/?text=Medanta",
      path: "/hospitals/medanta-gurgaon"
    },
    {
      id: 3,
      name: "Fortis Healthcare",
      location: "Mumbai",
      accreditation: "JCI",
      image: "https://placehold.co/600x400/medical-600/white/?text=Fortis+Healthcare",
      logo: "https://placehold.co/200x100/white/gray/?text=Fortis",
      path: "/hospitals/fortis-mumbai"
    }
  ];

  return (
    <section className="section-container">
      <h2 className="section-title">Partnered with India's Best Hospitals</h2>
      
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
              </div>
              
              <Link to={hospital.path}>
                <h3 className="text-xl font-semibold mb-2 hover:text-nile-600 transition-colors flex items-center">
                  <Building className="h-5 w-5 mr-2 text-nile-600" />
                  {hospital.name}
                </h3>
              </Link>
              
              <p className="text-gray-600 text-sm mb-4">
                Multi-specialty hospital with advanced medical technology and international standard care.
              </p>
              
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
