
import React from 'react';
import { MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const openWhatsApp = () => {
    const phoneNumber = "911234567890"; // Replace with actual WhatsApp number
    const message = "I'd like to send my medical reports for a free opinion.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const callNow = () => {
    window.location.href = "tel:+911234567890"; // Replace with actual phone number
  };

  return (
    <div className="bg-gradient-to-r from-medical-50 to-nile-50 pt-20 pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Get Free Medical Opinion from India's Top Doctors
              <span className="block text-nile-600 mt-2">With Govt. Verified Support</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Fast, Affordable, and Trusted Medical Care in India for International Patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                className="cta-whatsapp text-base py-3 px-6 h-auto"
                onClick={openWhatsApp}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Send Medical Reports via WhatsApp
              </Button>
              <Button 
                variant="outline"
                className="text-base py-3 px-6 h-auto border-nile-600 text-nile-600 hover:bg-nile-50"
                onClick={callNow}
              >
                <Phone className="mr-2 h-5 w-5" />
                Talk to a Medical Expert
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <div className="bg-white p-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                <img 
                  src="https://placehold.co/60x30/white/gray/?text=IMA" 
                  alt="Indian Medical Association" 
                  className="h-6"
                />
              </div>
              <div className="bg-white p-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                <img 
                  src="https://placehold.co/60x30/white/gray/?text=NABH" 
                  alt="NABH Accreditation" 
                  className="h-6"
                />
              </div>
              <div className="bg-white p-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                <img 
                  src="https://placehold.co/60x30/white/gray/?text=JCI" 
                  alt="JCI Certification" 
                  className="h-6"
                />
              </div>
              <div className="bg-white p-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                <img 
                  src="https://placehold.co/100x30/white/gray/?text=Govt.+of+India" 
                  alt="Government of India" 
                  className="h-6"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1504813184591-01572f98c85f" 
                alt="Diverse patients with Indian doctors" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-6 bg-nile-600 text-white py-3 px-5 rounded-lg shadow-lg text-sm">
              Trusted by 1000+ International Patients
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-full p-3 shadow-lg flex items-center justify-center">
              <div className="text-center">
                <span className="block text-nile-600 font-bold text-lg">70%</span>
                <span className="text-xs text-gray-600">Cost Savings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
