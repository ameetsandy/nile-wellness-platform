import React from 'react';
import { MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const openWhatsApp = () => {
    const phoneNumber = "918076036335"; // WhatsApp number
    const message = "I'd like to send my medical reports for a free opinion.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const callNow = () => {
    window.location.href = "tel:+918076036335"; // Phone number
  };

  const flags = [
    { code: 'bd', name: 'Bangladesh' },
    { code: 'bh', name: 'Bahrain' },
    { code: 'cd', name: 'DR Congo' },
    { code: 'cm', name: 'Cameroon' },
    { code: 'dj', name: 'Djibouti' },
    { code: 'et', name: 'Ethiopia' },
    { code: 'gh', name: 'Ghana' },
    { code: 'iq', name: 'Iraq' },
    { code: 'ke', name: 'Kenya' },
    { code: 'kg', name: 'Kyrgyzstan' },
    { code: 'kz', name: 'Kazakhstan' },
    { code: 'lk', name: 'Sri Lanka' },
    { code: 'mg', name: 'Madagascar' },
    { code: 'mm', name: 'Myanmar' },
    { code: 'mn', name: 'Mongolia' },
    { code: 'mu', name: 'Mauritius' },
    { code: 'mv', name: 'Maldives' },
    { code: 'mw', name: 'Malawi' },
    { code: 'mz', name: 'Mozambique' },
    { code: 'ng', name: 'Nigeria' },
    { code: 'om', name: 'Oman' },
    { code: 'rw', name: 'Rwanda' },
    { code: 'sa', name: 'Saudi Arabia' },
    { code: 'sc', name: 'Seychelles' },
    { code: 'sd', name: 'Sudan' },
    { code: 'so', name: 'Somalia' },
    { code: 'ss', name: 'South Sudan' },
    { code: 'td', name: 'Chad' },
    { code: 'tj', name: 'Tajikistan' },
    { code: 'tm', name: 'Turkmenistan' },
    { code: 'tz', name: 'Tanzania' },
    { code: 'ug', name: 'Uganda' },
    { code: 'uz', name: 'Uzbekistan' },
    { code: 'ye', name: 'Yemen' },
    { code: 'zm', name: 'Zambia' },
    { code: 'zw', name: 'Zimbabwe' }
  ];

  return (
    <div className="bg-gradient-to-r from-medical-50 to-nile-50 pt-20 pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Get Free Medical Opinion from India's Top Doctors
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
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <img 
                src="https://i.postimg.cc/Dw1sFRfL/Untitled-design-17.png"
                alt="Fast, Affordable, and Trusted Medical Care in India"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Static Text Strip */}
        <div className="mt-8 bg-[#F2FFFD] text-black py-4 px-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-center">
            <span className="text-xl font-medium tracking-wide">
            Trusted by 100,000+ International Patients
for World-Class Treatment in India
    
            </span>
          </div>
        </div>

        {/* Country Flags Grid */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
            {flags.map((flag, index) => (
              <div key={index} className="flex flex-col items-center">
                <img 
                  src={`https://flagcdn.com/w40/${flag.code}.png`} 
                  alt={flag.name} 
                  className="h-8 w-auto shadow-sm hover:shadow-md transition-shadow duration-300"
                />
                <span className="text-xs text-gray-600 mt-1">{flag.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
