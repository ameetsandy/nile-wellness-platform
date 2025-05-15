import React from 'react';
import { FileText, MessageCircle, UserCheck, Plane, Car, Building, Home } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Upload Medical Reports",
      description: "Upload your reports via WhatsApp or our secure portal."
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-white" />,
      title: "Get Free Opinion from Top Doctors",
      description: "Get treatment options and cost estimates from top specialists in India."
    },
    {
      icon: <UserCheck className="h-6 w-6 text-white" />,
      title: "Confirm Doctor & Hospital",
      description: "Select your doctor and hospital from our recommendations."
    },
    {
      icon: <Plane className="h-6 w-6 text-white" />,
      title: "Visa Support + Flight Planning",
      description: "We help with visa, invitation letter, and travel plans."
    },
    {
      icon: <Car className="h-6 w-6 text-white" />,
      title: "Arrival & Pickup",
      description: "Airport pickup and drop to your stay"
    },
    {
      icon: <Building className="h-6 w-6 text-white" />,
      title: "Hospital Admission & Treatment",
      description: "Smooth admission and personalized care during your treatment."
    },
    {
      icon: <Home className="h-6 w-6 text-white" />,
      title: "Recovery + Return Home",
      description: "Post-treatment care, follow-ups, and help with return travel."
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
          {/* Central vertical timeline */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-nile-100 h-full z-0"></div>

          <div className="flex flex-col gap-16 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center justify-between w-full relative">
                {index % 2 === 0 ? (
                  <>
                    {/* LEFT CARD */}
                    <div className="w-[48%] flex justify-end">
                      <div className="bg-white rounded-lg shadow-md border border-gray-100 p-4 max-w-md">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-full bg-nile-600 flex items-center justify-center">
                            {step.icon}
                          </div>
                          <h3 className="text-base font-semibold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-500 pl-8">{step.description}</p>
                      </div>
                    </div>

                    {/* TIMELINE DOT */}
                    <div className="w-4 flex justify-center items-center z-10">
                      <div className="w-8 h-8 rounded-full bg-nile-100 border-4 border-white flex items-center justify-center shadow-md">
                        <span className="text-nile-600 text-sm font-medium">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* RIGHT SPACER */}
                    <div className="w-[48%]"></div>
                  </>
                ) : (
                  <>
                    {/* LEFT SPACER */}
                    <div className="w-[48%]"></div>

                    {/* TIMELINE DOT */}
                    <div className="w-4 flex justify-center items-center z-10">
                      <div className="w-8 h-8 rounded-full bg-nile-100 border-4 border-white flex items-center justify-center shadow-md">
                        <span className="text-nile-600 text-sm font-medium">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="w-[48%] flex justify-start">
                      <div className="bg-white rounded-lg shadow-md border border-gray-100 p-4 max-w-md">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-full bg-nile-600 flex items-center justify-center">
                            {step.icon}
                          </div>
                          <h3 className="text-base font-semibold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-500 pl-8">{step.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      
        <div className="mt-8 text-center">
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
