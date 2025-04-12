
import { WhatsappLogo } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const openWhatsApp = () => {
    const phoneNumber = "911234567890"; // Replace with actual WhatsApp number
    const message = "I'd like to send my medical reports for a free opinion.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="bg-gradient-to-r from-medical-50 to-nile-50 pt-16 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Get Free Medical Opinion from India's Top Doctors – With Govt. Verified Support
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Fast, Affordable, and Trusted Medical Care in India for International Patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="cta-whatsapp text-lg"
                onClick={openWhatsApp}
              >
                <WhatsappLogo className="mr-2 h-5 w-5" />
                Send Medical Reports via WhatsApp
              </Button>
              <Button 
                variant="outline"
                className="text-lg border-nile-600 text-nile-600 hover:bg-nile-50"
              >
                Talk to a Medical Expert
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-white p-2 rounded-md shadow-sm">
                <img 
                  src="https://placehold.co/60x30/white/gray/?text=IMA" 
                  alt="Indian Medical Association" 
                  className="h-6"
                />
              </div>
              <div className="bg-white p-2 rounded-md shadow-sm">
                <img 
                  src="https://placehold.co/60x30/white/gray/?text=NABH" 
                  alt="NABH Accreditation" 
                  className="h-6"
                />
              </div>
              <div className="bg-white p-2 rounded-md shadow-sm">
                <img 
                  src="https://placehold.co/60x30/white/gray/?text=JCI" 
                  alt="JCI Certification" 
                  className="h-6"
                />
              </div>
              <div className="bg-white p-2 rounded-md shadow-sm">
                <img 
                  src="https://placehold.co/100x30/white/gray/?text=Govt.+of+India" 
                  alt="Government of India" 
                  className="h-6"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://placehold.co/600x400/medical-600/white/?text=Doctors+With+Patients" 
                alt="Diverse patients with Indian doctors" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-nile-600 text-white py-3 px-5 rounded-lg shadow-lg">
              <p className="font-semibold">Trusted by 1000+ International Patients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
