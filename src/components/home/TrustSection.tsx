
import { CheckCircle, Globe, CreditCard, Users, MessageCircle, Shield } from "lucide-react";

const TrustSection = () => {
  const trustPoints = [
    {
      icon: <Globe className="h-10 w-10 text-nile-600" />,
      title: "End-to-End Support",
      description: "Visa, Pickup, Translator & More"
    },
    {
      icon: <CreditCard className="h-10 w-10 text-nile-600" />,
      title: "Lowest Treatment Cost Guarantee",
      description: "Best rates with no hidden charges"
    },
    {
      icon: <Shield className="h-10 w-10 text-nile-600" />,
      title: "Verified by Government of India",
      description: "Official recognition for quality care"
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-nile-600" />,
      title: "JCI & NABH Accredited Hospitals",
      description: "International quality standards"
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-nile-600" />,
      title: "24x7 Patient Support on WhatsApp",
      description: "Always there when you need us"
    },
    {
      icon: <Users className="h-10 w-10 text-nile-600" />,
      title: "100% Transparency",
      description: "Complete doctor & hospital information"
    }
  ];

  return (
    <section className="section-container bg-white">
      <h2 className="section-title">Why 1000+ Patients from Africa, GCC & CIS Trust Us</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {trustPoints.map((point, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 bg-nile-50 p-3 rounded-full">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-block bg-nile-50 text-nile-800 px-4 py-2 rounded-full text-sm font-medium">
          Your health and comfort are our top priorities
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
