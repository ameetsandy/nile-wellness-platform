
import { FileText, MessageCircle, UserCheck, Plane, Car, Building, Home } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText className="h-12 w-12 text-white" />,
      title: "Upload Medical Reports",
      description: "Share your medical reports and history via WhatsApp or our secure portal."
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-white" />,
      title: "Get Free Opinion from Top Doctors",
      description: "Receive treatment options and cost estimates from India's leading specialists."
    },
    {
      icon: <UserCheck className="h-12 w-12 text-white" />,
      title: "Confirm Doctor & Hospital",
      description: "Choose your preferred doctor and hospital based on our recommendations."
    },
    {
      icon: <Plane className="h-12 w-12 text-white" />,
      title: "Visa Support + Flight Planning",
      description: "We'll assist with medical visa, invitation letter, and travel arrangements."
    },
    {
      icon: <Car className="h-12 w-12 text-white" />,
      title: "Arrival & Pickup",
      description: "Our team will greet you at the airport and take you to your accommodation."
    },
    {
      icon: <Building className="h-12 w-12 text-white" />,
      title: "Hospital Admission & Treatment",
      description: "Seamless admission process and personalized care throughout your treatment."
    },
    {
      icon: <Home className="h-12 w-12 text-white" />,
      title: "Recovery + Return Home",
      description: "Post-treatment care, follow-up consultations, and return travel assistance."
    }
  ];

  return (
    <section className="section-container bg-gray-50 overflow-hidden">
      <h2 className="section-title">Your Journey to Healing in India – Step by Step</h2>
      
      <div className="relative">
        {/* Desktop Timeline (hidden on mobile) */}
        <div className="hidden md:block absolute left-1/2 top-24 bottom-24 w-1 bg-nile-300 transform -translate-x-1/2 z-0"></div>
        
        <div className="relative z-10 space-y-16 mt-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              <div className={`md:w-1/2 text-center ${index % 2 === 0 ? 'md:text-right pr-8' : 'md:text-left pl-8'}`}>
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 max-w-md mx-auto md:mx-0 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              <div className="flex-shrink-0 z-10 relative">
                {/* Number indicator slightly offset from timeline */}
                <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 md:translate-x-0 left-1/2 md:left-auto md:right-auto w-7 h-7 rounded-full bg-nile-100 flex items-center justify-center text-nile-700 font-bold text-sm"
                  style={{ 
                    [index % 2 === 0 ? 'right' : 'left']: '-30px'
                  }}
                >
                  {index + 1}
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-nile-600 to-medical-700 flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
              </div>
              
              <div className="md:w-1/2 md:hidden"></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-block bg-white shadow-md rounded-lg p-6 max-w-2xl">
          <h3 className="text-xl font-semibold mb-3">Ready to Begin Your Healing Journey?</h3>
          <p className="text-gray-600 mb-4">
            Our patient coordinators are ready to guide you through every step of your medical trip to India.
          </p>
          <button 
            className="cta-primary"
            onClick={() => {
              const phoneNumber = "911234567890";
              const message = "I'd like to learn more about medical treatment in India.";
              const encodedMessage = encodeURIComponent(message);
              window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
            }}
          >
            <MessageCircle className="h-5 w-5" /> Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
