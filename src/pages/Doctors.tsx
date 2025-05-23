import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Search, Filter, Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppointmentForm from "@/components/common/AppointmentForm";
import { doctors, specialties, cities, Doctor } from "@/data/doctorsData";

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [city, setCity] = useState("");
  const [visibleDoctors, setVisibleDoctors] = useState(40);
  const [selectedDoctor, setSelectedDoctor] = useState<{name: string, formType: "appointment" | "second-opinion" | "reports"} | null>(null);

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         String(doctor.hospital).toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialty ? doctor.specialty === specialty : true;
    const matchesCity = city ? doctor.city === city : true;
    
    return matchesSearch && matchesSpecialty && matchesCity;
  });

  const displayedDoctors = filteredDoctors.slice(0, visibleDoctors);
  const hasMoreDoctors = visibleDoctors < filteredDoctors.length;

  const loadMore = () => {
    setVisibleDoctors(prev => prev + 40); // Load 12 more doctors (3 more rows)
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSpecialty("");
    setCity("");
    setVisibleDoctors(40); // Reset to initial number of visible doctors
  };

  const openWhatsApp = (doctorName: string) => {
    const phoneNumber = "911234567890"; // Replace with actual WhatsApp number
    const message = `I'd like to consult with ${doctorName} for my treatment.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleAppointmentClick = (doctorName: string, formType: "appointment" | "second-opinion" | "reports") => {
    setSelectedDoctor({ name: doctorName, formType });
  };

  const closeForm = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <section className="bg-nile-600 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Top Doctors in India</h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Our network includes India's most experienced specialists, many trained at leading international institutions like Johns Hopkins, Mayo Clinic, and Harvard Medical School.
            </p>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-8">
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedDoctors.map((doctor) => (
              <div 
                key={doctor.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img 
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">{doctor.experience} Exp</span>
                  </div>
                </div>
                
                <div className="p-4">
                  <Link to={doctor.path}>
                    <h3 className="text-base font-semibold mb-1 hover:text-nile-600 transition-colors">
                      {doctor.name}
                    </h3>
                  </Link>
                  
                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      {doctor.specialty}
                    </p>
                    <p className="text-xs text-gray-500">
                      {doctor.designation}
                    </p>
                    <p className="text-gray-600 text-xs">
                      {doctor.hospital}, {doctor.city}
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 whitespace-nowrap text-xs py-1"
                      onClick={() => handleAppointmentClick(doctor.name, "appointment")}
                    >
                      <Calendar className="mr-1 h-3 w-3" /> Request Appointment
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-green-600 hover:bg-green-700 flex-1 whitespace-nowrap text-xs py-1"
                      onClick={() => openWhatsApp(doctor.name)}
                    >
                      <MessageCircle className="mr-1 h-3 w-3" /> WhatsApp
                    </Button>
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <Button
                      variant="link"
                      size="sm"
                      className="text-nile-600 hover:text-nile-700 text-xs"
                      onClick={() => handleAppointmentClick(doctor.name, "second-opinion")}
                    >
                      Get Second Opinion
                    </Button>
                    <span className="text-gray-300">|</span>
                    <Button
                      variant="link"
                      size="sm"
                      className="text-nile-600 hover:text-nile-700 text-xs"
                      onClick={() => handleAppointmentClick(doctor.name, "reports")}
                    >
                      Send Reports
                    </Button>
                  </div>
                  <Link 
                    to={doctor.path}
                    className="mt-2 flex items-center justify-center text-nile-600 hover:text-nile-700 font-medium text-xs"
                  >
                    View Full Profile
                    <ArrowRight className="ml-1 h-3 w-3" />
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

          {hasMoreDoctors && (
            <div className="text-center mt-8">
              <Button 
                onClick={loadMore}
                variant="outline"
                className="px-8 py-2 text-nile-600 border-nile-600 hover:bg-nile-50"
              >
                Load More Doctors
              </Button>
            </div>
          )}
          
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
      
      {selectedDoctor && (
        <AppointmentForm
          isOpen={true}
          onClose={closeForm}
          doctorName={selectedDoctor.name}
          formType={selectedDoctor.formType}
        />
      )}
    </div>
  );
};

export default Doctors;