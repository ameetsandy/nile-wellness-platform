
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Plane, Building, Globe, BookOpen, Landmark, Languages, MessageCircle, Users, ArrowRight, CheckCircle, CarTaxiFront, Phone, FileCheck, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const FreeServices = () => {
  const services = [
    {
      id: "visa",
      icon: <Globe className="h-14 w-14 text-white" />,
      title: "Medical Visa Assistance",
      description: "Complete support for your medical visa application, including invitation letters from hospitals, documentation guidance, and expedited processing.",
      details: [
        "Invitation letter from hospital",
        "Document checklist preparation",
        "Visa application guidance",
        "Fast-track processing advice",
        "Visa extension assistance if needed"
      ]
    },
    {
      id: "airport",
      icon: <CarTaxiFront className="h-14 w-14 text-white" />,
      title: "Airport Pickup & Drop",
      description: "Complimentary airport transfer service to ensure a smooth arrival and departure experience during your medical journey in India.",
      details: [
        "Free airport pickup on arrival",
        "Comfortable, air-conditioned vehicles",
        "English-speaking drivers",
        "Direct transfer to hospital/accommodation",
        "Return airport transfer after treatment"
      ]
    },
    {
      id: "translator",
      icon: <Languages className="h-14 w-14 text-white" />,
      title: "Language Interpreters",
      description: "Professional translators to bridge the communication gap between you and healthcare providers during consultations and procedures.",
      details: [
        "Multilingual interpreters (Arabic, French, Russian, Spanish, etc.)",
        "Medical terminology expertise",
        "Available during doctor consultations",
        "Help with hospital paperwork",
        "Cultural context translation"
      ]
    },
    {
      id: "accommodation",
      icon: <Building className="h-14 w-14 text-white" />,
      title: "Accommodation Assistance",
      description: "Help finding patient-friendly accommodations near your hospital with special rates negotiated for international patients.",
      details: [
        "Options for all budgets",
        "Hospital-adjacent locations",
        "Special medical patient rates",
        "Kitchen facilities for dietary needs",
        "Extended stay discounts"
      ]
    },
    {
      id: "second-opinion",
      icon: <FileCheck className="h-14 w-14 text-white" />,
      title: "Free Second Opinion",
      description: "Complimentary second opinion from India's leading specialists to help you make informed decisions about your treatment.",
      details: [
        "Review by top specialists",
        "Detailed treatment plan",
        "Alternative treatment options",
        "Cost estimation",
        "No obligation consultation"
      ]
    },
    {
      id: "financial",
      icon: <CreditCard className="h-14 w-14 text-white" />,
      title: "Financial Counseling",
      description: "Expert guidance on treatment costs, payment options, insurance coordination, and financial planning for your medical trip.",
      details: [
        "Transparent cost breakdowns",
        "Payment plan options",
        "Insurance claim assistance",
        "Currency exchange guidance",
        "No hidden costs guarantee"
      ]
    }
  ];

  const openWhatsApp = () => {
    const phoneNumber = "911234567890";
    const message = "Hello, I'd like to learn more about the free services you offer for medical tourists in India.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-medical-50 to-nile-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Free Support Services for International Patients
                <span className="block text-nile-600 mt-2">Making Your Medical Journey Seamless</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We take care of the logistics so you can focus on what matters most – your health and recovery.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  className="bg-nile-600 hover:bg-nile-700 text-base py-6 px-6 h-auto"
                  onClick={() => window.scrollTo({ top: document.getElementById('services')?.offsetTop, behavior: 'smooth' })}
                >
                  Explore All Free Services
                </Button>
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-base py-6 px-6 h-auto"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Ask About Services
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section id="services" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold mb-4">Comprehensive Support at Every Step</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                All services are completely free for patients who book their treatment through Nile Wellness. No hidden fees or charges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-to-r from-nile-600 to-medical-700 p-6 flex items-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="w-full bg-nile-600 hover:bg-nile-700"
                      onClick={openWhatsApp}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" /> Ask About This Service
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-semibold mb-4">Our Patient-First Approach</h2>
                  <p className="text-gray-600 mb-6">
                    We believe international patients deserve a stress-free medical journey. Our complimentary services are designed to remove logistical barriers so you can focus on healing.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center mb-2">
                        <Users className="h-5 w-5 text-nile-600 mr-2" />
                        <h3 className="font-medium">Dedicated Patient Coordinator</h3>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Every patient is assigned a personal coordinator who stays with you throughout your medical journey.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center mb-2">
                        <Globe className="h-5 w-5 text-nile-600 mr-2" />
                        <h3 className="font-medium">Cultural Sensitivity</h3>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Our staff is trained to respect cultural preferences, dietary requirements, and religious practices.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center mb-2">
                        <Phone className="h-5 w-5 text-nile-600 mr-2" />
                        <h3 className="font-medium">24/7 Emergency Support</h3>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Round-the-clock assistance for any concerns or emergencies during your stay in India.
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-nile-600 hover:bg-nile-700"
                    onClick={openWhatsApp}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> Discuss Your Needs
                  </Button>
                </div>
                
                <div className="md:w-1/2">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md">
                    <img 
                      src="https://placehold.co/600x400/medical-600/white/?text=Patient+Coordinator"
                      alt="Patient coordinator helping international patient"
                      className="w-full h-auto"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3">What Our Patients Say</h3>
                      <div className="bg-gray-50 p-4 rounded-lg italic text-gray-600 mb-4">
                        "The free support services made all the difference in my medical journey. From airport pickup to language assistance, everything was taken care of professionally. I could focus completely on my treatment and recovery."
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                        <div>
                          <p className="font-medium">Ahmed K.</p>
                          <p className="text-sm text-gray-500">Heart valve replacement patient from UAE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-nile-600 to-medical-700 rounded-xl overflow-hidden shadow-xl">
                <div className="p-8 md:p-12 text-white">
                  <h2 className="text-3xl font-bold mb-4">Your Journey to Healing Starts Here</h2>
                  <p className="text-xl opacity-90 mb-8 max-w-3xl">
                    Let us help you navigate your medical journey with our comprehensive free support services. Experience world-class healthcare without the stress of logistics.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <FileCheck className="h-8 w-8 mb-2 text-white/90" />
                      <h3 className="font-semibold text-white mb-1">Step 1</h3>
                      <p className="text-white/80 text-sm">Share your medical reports for free opinion</p>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <Users className="h-8 w-8 mb-2 text-white/90" />
                      <h3 className="font-semibold text-white mb-1">Step 2</h3>
                      <p className="text-white/80 text-sm">Receive treatment plan & cost estimate</p>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <BookOpen className="h-8 w-8 mb-2 text-white/90" />
                      <h3 className="font-semibold text-white mb-1">Step 3</h3>
                      <p className="text-white/80 text-sm">Confirm treatment & access free services</p>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <Plane className="h-8 w-8 mb-2 text-white/90" />
                      <h3 className="font-semibold text-white mb-1">Step 4</h3>
                      <p className="text-white/80 text-sm">Travel to India with our complete support</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/free-opinion">
                      <Button className="bg-white text-nile-600 hover:bg-gray-100 w-full sm:w-auto">
                        Get Free Opinion First
                      </Button>
                    </Link>
                    <Button 
                      className="bg-green-600 hover:bg-green-700 w-full sm:w-auto"
                      onClick={openWhatsApp}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" /> Chat with Patient Coordinator
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Common questions about our free support services for international patients
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Are these services really free?</h3>
                  <p className="text-gray-600">
                    Yes, all support services listed are completely free for patients who book their treatment through Nile Wellness. There are no hidden charges.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">How do I qualify for free visa assistance?</h3>
                  <p className="text-gray-600">
                    Once you confirm your treatment with one of our partner hospitals, our team automatically provides visa assistance as part of our service package.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Which languages do your interpreters speak?</h3>
                  <p className="text-gray-600">
                    We provide interpreters for Arabic, French, Spanish, Russian, Swahili, and several other languages. Please let us know your language requirements in advance.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Can family members stay with me?</h3>
                  <p className="text-gray-600">
                    Yes, we can arrange accommodations suitable for patients and accompanying family members. Most hospitals also allow one attendant to stay with the patient.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">How far in advance should I request these services?</h3>
                  <p className="text-gray-600">
                    We recommend contacting us at least 2-3 weeks before your planned travel date, especially for visa assistance. However, we can accommodate urgent requests as well.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">What happens if my treatment gets extended?</h3>
                  <p className="text-gray-600">
                    Our support continues for the duration of your treatment. We can assist with visa extensions, accommodation changes, and rescheduling return travel as needed.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-10">
                <p className="text-gray-600 mb-4">Don't see your question here? Contact us directly</p>
                <Button 
                  className="bg-nile-600 hover:bg-nile-700"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> Ask Your Question
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default FreeServices;
