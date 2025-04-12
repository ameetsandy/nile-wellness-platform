
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Search, Filter, Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [city, setCity] = useState("");

  const doctors = [
    {
      id: 1,
      name: "Dr. Arjun Mehta",
      specialty: "Cardiology",
      hospital: "Apollo Hospital",
      city: "Delhi",
      experience: "15+ Yrs",
      languages: ["English", "Hindi", "Arabic"],
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Mehta",
      path: "/doctors/arjun-mehta"
    },
    {
      id: 2,
      name: "Dr. Pooja Nair",
      specialty: "Oncology",
      hospital: "Fortis Hospital",
      city: "Mumbai",
      experience: "20+ Yrs",
      languages: ["English", "Hindi", "Malayalam"],
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Nair",
      path: "/doctors/pooja-nair"
    },
    {
      id: 3,
      name: "Dr. Yusuf Khan",
      specialty: "Orthopedics",
      hospital: "Max Hospital",
      city: "Gurgaon",
      experience: "18+ Yrs",
      languages: ["English", "Hindi", "Urdu"],
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Khan",
      path: "/doctors/yusuf-khan"
    },
    {
      id: 4,
      name: "Dr. Sanjay Gupta",
      specialty: "Neurology",
      hospital: "Medanta Hospital",
      city: "Gurgaon",
      experience: "22+ Yrs",
      languages: ["English", "Hindi"],
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Gupta",
      path: "/doctors/sanjay-gupta"
    },
    {
      id: 5,
      name: "Dr. Ananya Sharma",
      specialty: "Gynecology",
      hospital: "BLK Hospital",
      city: "Delhi",
      experience: "12+ Yrs",
      languages: ["English", "Hindi", "Bengali"],
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Sharma",
      path: "/doctors/ananya-sharma"
    },
    {
      id: 6,
      name: "Dr. Rajiv Malhotra",
      specialty: "Nephrology",
      hospital: "Apollo Hospital",
      city: "Chennai",
      experience: "25+ Yrs",
      languages: ["English", "Hindi", "Tamil"],
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Malhotra",
      path: "/doctors/rajiv-malhotra"
    }
  ];

  const specialties = ["Cardiology", "Oncology", "Orthopedics", "Neurology", "Gynecology", "Nephrology"];
  const cities = ["Delhi", "Mumbai", "Gurgaon", "Chennai", "Bangalore", "Hyderabad"];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialty ? doctor.specialty === specialty : true;
    const matchesCity = city ? doctor.city === city : true;
    
    return matchesSearch && matchesSpecialty && matchesCity;
  });

  const resetFilters = () => {
    setSearchTerm("");
    setSpecialty("");
    setCity("");
  };

  const openWhatsApp = (doctorName: string) => {
    const phoneNumber = "911234567890"; // Replace with actual WhatsApp number
    const message = `I'd like to consult with ${doctorName} for my treatment.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <section className="bg-medical-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Top Doctors in India</h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Our network includes India's most experienced specialists, many trained at leading international institutions like Johns Hopkins, Mayo Clinic, and Harvard Medical School.
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
                  placeholder="Search doctors by name, specialty, or hospital..."
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nile-600 focus:border-nile-600"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="min-w-[200px]">
                  <select
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nile-600 focus:border-nile-600 appearance-none bg-white"
                  >
                    <option value="">All Specialties</option>
                    {specialties.map((spec) => (
                      <option key={spec} value={spec}>{spec}</option>
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
          
          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <div 
                key={doctor.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img 
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-nile-600 text-white py-1 px-3 rounded-tl-md">
                    <span className="text-sm font-medium">{doctor.experience}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <Link to={doctor.path}>
                    <h3 className="text-xl font-semibold mb-2 hover:text-nile-600 transition-colors">
                      {doctor.name}
                    </h3>
                  </Link>
                  <p className="text-gray-700 font-medium">
                    {doctor.specialty}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {doctor.hospital}, {doctor.city}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-sm text-gray-500">Languages: </span>
                    <span className="text-sm">{doctor.languages.join(", ")}</span>
                  </div>
                  
                  <div className="flex gap-2 mt-6">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Calendar className="mr-1 h-4 w-4" /> Request Appointment
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-green-600 hover:bg-green-700 flex-1"
                      onClick={() => openWhatsApp(doctor.name)}
                    >
                      <MessageCircle className="mr-1 h-4 w-4" /> WhatsApp
                    </Button>
                  </div>
                  <Link 
                    to={doctor.path}
                    className="mt-4 flex items-center justify-center text-nile-600 hover:text-nile-700 font-medium text-sm"
                  >
                    View Full Profile
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No doctors found</h3>
              <p className="text-gray-500 mb-4">Try changing your search criteria</p>
              <Button onClick={resetFilters}>
                Reset Filters
              </Button>
            </div>
          )}
          
          {/* More Information */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Why Choose Indian Doctors?</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Indian doctors are known globally for their expertise, skill, and compassionate care. Many have trained at the world's most prestigious medical institutions and bring international best practices to their work in India.
              </p>
              <p className="mb-4">
                With stringent medical education standards and a strong focus on continuous professional development, Indian doctors stay at the forefront of medical innovation. They combine this knowledge with cost-effective treatment approaches that have made India a premier destination for medical tourism.
              </p>
              <p>
                At Nile Wellness, we carefully select our partner doctors based on their credentials, experience, patient outcomes, and patient feedback. We ensure that international patients receive care only from the most qualified specialists in their field.
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

export default Doctors;
