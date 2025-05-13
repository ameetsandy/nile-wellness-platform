import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Search, Filter, Star, MapPin, Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hospitals, categories, cities } from "@/data/hospitals";

// Utility function to generate random star rating between 4 and 5
const generateStarRating = () => {
  return 4 + Math.random(); // Returns a number between 4 and 5
};

const Hospitals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [visibleHospitals, setVisibleHospitals] = useState(30);

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

  const displayedHospitals = filteredHospitals.slice(0, visibleHospitals);
  const hasMoreHospitals = visibleHospitals < filteredHospitals.length;

  const loadMoreHospitals = () => {
    setVisibleHospitals(prev => prev + 30);
  };

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
    setVisibleHospitals(30);
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
            {displayedHospitals.map((hospital) => (
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

          {/* Show More Button */}
          {hasMoreHospitals && (
            <div className="mt-12 text-center">
              <Button 
                onClick={loadMoreHospitals}
                className="cta-secondary"
              >
                Show More Hospitals <ArrowRight className="ml-1 h-4 w-4" />
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
