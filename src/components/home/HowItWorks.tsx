import { FileText, MessageCircle, UserCheck, Plane, Car, Building, Home } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Upload Medical Reports",
      description: "Share your medical reports and history via WhatsApp or our secure portal."
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-white" />,
      title: "Get Free Opinion from Top Doctors",
      description: "Receive treatment options and cost estimates from India's leading specialists."
    },
    {
      icon: <UserCheck className="h-6 w-6 text-white" />,
      title: "Confirm Doctor & Hospital",
      description: "Choose your preferred doctor and hospital based on our recommendations."
    },
    {
      icon: <Plane className="h-6 w-6 text-white" />,
      title: "Visa Support + Flight Planning",
      description: "We'll assist with medical visa, invitation letter, and travel arrangements."
    },
    {
      icon: <Car className="h-6 w-6 text-white" />,
      title: "Arrival & Pickup",
      description: "Our team will greet you at the airport and take you to your accommodation."
    },
    {
      icon: <Building className="h-6 w-6 text-white" />,
      title: "Hospital Admission & Treatment",
      description: "Seamless admission process and personalized care throughout your treatment."
    },
    {
      icon: <Home className="h-6 w-6 text-white" />,
      title: "Recovery + Return Home",
      description: "Post-treatment care, follow-up consultations, and return travel assistance."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Journey to Healing in India
          </h2>
          <p className="text-lg text-gray-500">
            Step by step guide to your medical treatment journey
          </p>
        </div>
      
        <div className="relative">
          {/* Central Timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>
          
          <div className="relative space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Combined Step Number and Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
                  <div className="relative">
                    {/* Number Circle */}
                    <div className="w-12 h-12 rounded-full bg-white ring-4 ring-gray-100 flex items-center justify-center">
                      <span className="text-gray-500 text-lg font-medium">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                    {/* Icon Circle - Overlapping */}
                    <div className="absolute -right-4 -top-4 w-8 h-8 rounded-full bg-nile-600 flex items-center justify-center shadow-md">
                      {step.icon}
                    </div>
                  </div>
                </div>

                <div className={`flex items-start justify-center gap-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content Container */}
                  <div className={`w-[calc(50%-3.5rem)] ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    {/* Text Box Container */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                      <h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3">
                        {step.title}
                      </h3>
                      <p className="text-base text-gray-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="w-[calc(50%-3.5rem)]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      
        <div className="mt-20 text-center">
          <div className="inline-block bg-gray-50 rounded-lg p-8 max-w-xl">
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              Ready to Begin Your Healing Journey?
            </h3>
            <p className="text-lg text-gray-500 mb-6">
              Our patient coordinators are ready to guide you through every step of your medical trip to India.
            </p>
            <button 
              className="inline-flex items-center gap-2 px-6 py-3 bg-nile-600 text-white text-base font-medium rounded-md hover:bg-nile-700 transition-colors"
              onClick={() => {
                const phoneNumber = "911234567890";
                const message = "I'd like to learn more about medical treatment in India.";
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
              }}
            >
              <MessageCircle className="h-5 w-5" />
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
