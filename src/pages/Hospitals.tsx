import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Search, Filter, Star, MapPin, Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Utility function to generate random star rating between 4 and 5
const generateStarRating = () => {
  return 4 + Math.random(); // Returns a number between 4 and 5
};

const Hospitals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");

  const hospitals = [
    {
      id: 1,
      name: "Apollo Hospitals",
      location: "Chennai",
      category: "Super Speciality",
      accreditation: "JCI, NABH",
      founded: 1983,
      beds: 700,
      rating: generateStarRating(),
      image: "https://placehold.co/600x400/medical-600/white/?text=Apollo+Hospitals",
      logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
      path: "/hospitals/apollo-chennai"
    },
    {
      id: 2,
      name: "Medanta - The Medicity",
      location: "Gurgaon",
      category: "Multi Speciality",
      accreditation: "NABH, ISO 9001",
      founded: 2009,
      beds: 1250,
      rating: generateStarRating(),
      image: "https://placehold.co/600x400/medical-600/white/?text=Medanta+Hospital",
      logo: "https://placehold.co/200x100/white/gray/?text=Medanta",
      path: "/hospitals/medanta-gurgaon"
    },
    {
      id: 3,
      name: "Fortis Healthcare",
      location: "Mumbai",
      category: "Super Speciality",
      accreditation: "JCI, NABH",
      founded: 2001,
      beds: 600,
      rating: generateStarRating(),
      image: "https://placehold.co/600x400/medical-600/white/?text=Fortis+Healthcare",
      logo: "https://placehold.co/200x100/white/gray/?text=Fortis",
      path: "/hospitals/fortis-mumbai"
    },
    {
      id: 4,
      name: "Max Super Speciality Hospital",
      location: "Delhi",
      category: "Super Speciality",
      accreditation: "NABH, ISO 9001",
      founded: 2000,
      beds: 850,
      rating: generateStarRating(),
      image: "https://placehold.co/600x400/medical-600/white/?text=Max+Hospital",
      logo: "https://placehold.co/200x100/white/gray/?text=Max",
      path: "/hospitals/max-delhi"
    },
    {
      id: 5,
      name: "Manipal Hospitals",
      location: "Bangalore",
      category: "Multi Speciality",
      accreditation: "NABH, JCI",
      founded: 1991,
      beds: 750,
      rating: generateStarRating(),
      image: "https://placehold.co/600x400/medical-600/white/?text=Manipal+Hospitals",
      logo: "https://placehold.co/200x100/white/gray/?text=Manipal",
      path: "/hospitals/manipal-bangalore"
    },
    {
      id: 6,
      name: "Kokilaben Dhirubhai Ambani Hospital",
      location: "Mumbai",
      category: "Super Speciality",
      accreditation: "JCI, NABH",
      founded: 2009,
      beds: 750,
      rating: generateStarRating(),
      image: "https://placehold.co/600x400/medical-600/white/?text=Kokilaben+Hospital",
      logo: "https://placehold.co/200x100/white/gray/?text=Kokilaben",
      path: "/hospitals/kokilaben-mumbai"
    },
    {
      id: 7,
      name: "Aakash Healthcare Super Speciality Hospital",
      location: "New Delhi",
      category: "Multi Speciality",
      accreditation: "NABH",
      founded: 2011,
      beds: 200,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/main_image-min_14.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Aakash",
      path: "/hospitals/aakash-healthcare-super-speciality-hospital-dwarka-new-delhi"
    },
    {
      id: 8,
      name: "Aditya Birla Memorial Hospital",
      location: "Pune",
      category: "Multi Speciality",
      accreditation: "JCI, NABH",
      founded: 2006,
      beds: 500,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/aditya_birla_memorial_hospital_pune_building-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Aditya+Birla",
      path: "/hospitals/aditya-birla-memorial-hospital-pune"
    },
    {
      id: 9,
      name: "Advance Fertility and Gynaecology Centre",
      location: "New Delhi",
      category: "Single Speciality",
      accreditation: "",
      founded: 2011,
      beds: 0,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/advanced_fertility_center_-dr_kaberi_banerjee-_new_delhi.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Advance+Fertility",
      path: "/hospitals/advanced-fertility-and-gynaecology-centre-new-delhi"
    },
    {
      id: 10,
      name: "Ahalia Ayurveda Hospital",
      location: "Palakkad",
      category: "Multi Speciality",
      accreditation: "JCI, NABH",
      founded: 1984,
      beds: 100,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/ahalia_ayurveda_hospital_kerala.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Ahalia",
      path: "/hospitals/ahalia-ayurveda-hospital-kerala"
    },
    {
      id: 11,
      name: "Ajanta Hospital & IVF Centre Pvt. Ltd.",
      location: "Lucknow",
      category: "Multi Speciality",
      accreditation: "NABH",
      founded: 2004,
      beds: 141,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/ajanta_hospital_building-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Ajanta",
      path: "/hospitals/ajanta-hospital-ivf-centre-pvt-ltd"
    },
    {
      id: 12,
      name: "Alexis Multispeciality Hospital",
      location: "Nagpur",
      category: "Multi Speciality",
      accreditation: "JCI",
      founded: 2016,
      beds: 200,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/alexis_profile-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Alexis",
      path: "/hospitals/alexis-multispeciality-hospital-nagpur-maharashtra-india"
    },
    {
      id: 13,
      name: "Alive Wellness Clinics",
      location: "New Delhi",
      category: "Single Speciality",
      accreditation: "",
      founded: 1997,
      beds: 0,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/alive_wellness_list_image-min.png",
      logo: "https://placehold.co/200x100/white/gray/?text=Alive",
      path: "/hospitals/alive-wellness-clinics"
    }
  ];

  const categories = ["Multi Speciality", "Super Speciality", "Single Speciality"];
  const cities = ["Delhi", "Mumbai", "Gurgaon", "Chennai", "Bangalore", "Hyderabad"];

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hospital.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = category 
      ? hospital.category === category
      : true;
      
    const matchesCity = city 
      ? hospital.location.toLowerCase() === city.toLowerCase()
      : true;
    
    return matchesSearch && matchesCategory && matchesCity;
  });

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

  const resetFilters = () => {
    setSearchTerm("");
    setCategory("");
    setCity("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <section className="bg-medical-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Top Hospitals in India</h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Our network includes JCI and NABH accredited hospitals equipped with cutting-edge technology and world-class infrastructure for comprehensive medical care.
            </p>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-8">
          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search hospitals by name or location..."
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nile-600 focus:border-nile-600"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="min-w-[200px]">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nile-600 focus:border-nile-600 appearance-none bg-white"
                  >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                
                <div className="min-w-[200px]">
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nile-600 focus:border-nile-600 appearance-none bg-white"
                  >
                    <option value="">All Cities</option>
                    {cities.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                
                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" /> Reset
                </Button>
              </div>
            </div>
          </div>
          
          {/* Hospitals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHospitals.map((hospital) => (
              <div 
                key={hospital.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
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
                      {hospital.accreditation}
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
                  
                  <div className="text-sm text-gray-500 mb-3">
                    Est. {hospital.founded} • {hospital.beds} Beds
                  </div>
                  
                  <div className="mb-6">
                    <span className="inline-block bg-nile-50 text-nile-600 px-3 py-1 rounded-full text-sm font-medium">
                      {hospital.category}
                    </span>
                  </div>
                  
                  <div className="mt-auto">
                    <Button className="w-full cta-primary">
                      Send Reports for Opinion
                    </Button>
                    <Link 
                      to={hospital.path}
                      className="mt-3 flex items-center justify-center text-nile-600 hover:text-nile-700 font-medium text-sm"
                    >
                      View Hospital Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredHospitals.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No hospitals found</h3>
              <p className="text-gray-500 mb-4">Try changing your search criteria</p>
              <Button onClick={resetFilters}>
                Reset Filters
              </Button>
            </div>
          )}
          
          {/* More Information */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Indian Hospitals: Global Standards, Local Expertise</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Indian hospitals featured in our network represent the pinnacle of healthcare excellence in the region. Many have achieved prestigious international accreditations such as Joint Commission International (JCI) and National Accreditation Board for Hospitals & Healthcare Providers (NABH), ensuring they meet rigorous global standards.
              </p>
              <p className="mb-4">
                These facilities are equipped with the latest medical technology and infrastructure, comparable to leading institutions in the US and Europe. From advanced robotic surgery systems to state-of-the-art imaging equipment and specialized care units, Indian hospitals offer comprehensive healthcare solutions under one roof.
              </p>
              <p>
                What sets Indian hospitals apart is their ability to deliver this world-class care at a fraction of Western costs while maintaining exceptional clinical outcomes and patient satisfaction rates. This combination of quality, affordability, and patient-centered care has established India as a premier destination for medical tourism.
              </p>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Hospitals;
