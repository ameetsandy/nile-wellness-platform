
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { MessageCircle, Phone, CheckCircle, MapPin, Building, Calendar, User, Star, ArrowRight, ChevronDown, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const KneeReplacement = () => {
  const openWhatsApp = () => {
    const phoneNumber = "911234567890";
    const message = "Hello, I'd like to inquire about Knee Replacement Surgery in India.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const topDoctors = [
    {
      name: "Dr. Ashok Rajgopal",
      hospital: "Medanta Hospital, Gurgaon",
      specialty: "Joint Replacement Surgeon",
      experience: "35+ Years",
      location: "Gurgaon",
      image: "https://placehold.co/300x300/medical-600/white/?text=Dr.+Rajgopal"
    },
    {
      name: "Dr. Ranjan Kumar Dey",
      hospital: "Apollo Hospitals, Delhi",
      specialty: "Orthopedic Surgeon",
      experience: "28+ Years",
      location: "New Delhi",
      image: "https://placehold.co/300x300/medical-600/white/?text=Dr.+Dey"
    },
    {
      name: "Dr. IPS Oberoi",
      hospital: "Artemis Hospital, Gurgaon",
      specialty: "Robotic Knee Surgeon",
      experience: "30+ Years",
      location: "Gurgaon",
      image: "https://placehold.co/300x300/medical-600/white/?text=Dr.+Oberoi"
    }
  ];

  const topHospitals = [
    {
      name: "Medanta - The Medicity",
      accreditation: "NABH & JCI Accredited",
      location: "Gurgaon",
      image: "https://placehold.co/600x400/medical-600/white/?text=Medanta+Hospital"
    },
    {
      name: "Apollo Hospitals, Delhi",
      accreditation: "JCI Accredited",
      location: "New Delhi",
      image: "https://placehold.co/600x400/medical-600/white/?text=Apollo+Hospital"
    },
    {
      name: "Fortis Hospital, Bangalore",
      accreditation: "NABH Accredited",
      location: "Bangalore",
      image: "https://placehold.co/600x400/medical-600/white/?text=Fortis+Hospital"
    }
  ];

  const faqs = [
    {
      question: "How long is the hospital stay for knee replacement?",
      answer: "Typically, 5–7 days. Recovery and physiotherapy continue for 10–14 more days."
    },
    {
      question: "Are robotic knee surgeries available?",
      answer: "Yes. Leading hospitals like Artemis and Fortis offer robotic and minimally invasive procedures."
    },
    {
      question: "What is the recovery time after surgery?",
      answer: "Most patients walk with support within a few days and recover fully in 6–8 weeks."
    },
    {
      question: "Can both knees be operated in one visit?",
      answer: "Yes, many patients undergo bilateral knee replacement in one admission."
    },
    {
      question: "Will physiotherapy be provided?",
      answer: "Yes, every hospital provides post-op physiotherapy as part of the treatment package."
    },
    {
      question: "Can I choose the implant brand?",
      answer: "Absolutely. We work with Zimmer, Stryker, Johnson & Johnson, and other global brands."
    },
    {
      question: "Is visa support available?",
      answer: "Yes. We help with medical visa invitation letters and application guidance."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-medical-50 to-nile-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  Knee Replacement Surgery in India
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Affordable joint care by top orthopedic surgeons with world-class implants and facilities
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white font-medium"
                    onClick={openWhatsApp}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-nile-600 text-nile-600 hover:bg-nile-50"
                  >
                    <Phone className="mr-2 h-5 w-5" /> Request Callback
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://placehold.co/800x600/medical-600/white/?text=Knee+Replacement"
                  alt="Knee Replacement Surgery"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Overview + Why India Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">What is Knee Replacement Surgery?</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    Knee Replacement Surgery is a medical procedure to replace damaged or worn-out surfaces of the knee joint with artificial implants. It is most commonly performed for severe osteoarthritis or trauma that causes chronic pain and mobility issues.
                  </p>
                  <p className="mb-4">
                    The procedure may be total or partial, depending on the damage. With robotic technology and enhanced implant design, modern knee surgeries are less invasive and offer faster recovery times.
                  </p>
                  <div className="mt-8 space-y-2">
                    <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <img 
                        src="https://placehold.co/60x60/nile-100/nile-600/?text=🦴"
                        alt="Knee joint"
                        className="h-10 w-10 mr-4"
                      />
                      <span className="text-gray-700">Total or partial joint replacement options</span>
                    </div>
                    <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <img 
                        src="https://placehold.co/60x60/nile-100/nile-600/?text=🤖"
                        alt="Robotic surgery"
                        className="h-10 w-10 mr-4"
                      />
                      <span className="text-gray-700">Advanced robotic-assisted procedures</span>
                    </div>
                    <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <img 
                        src="https://placehold.co/60x60/nile-100/nile-600/?text=👣"
                        alt="Fast recovery"
                        className="h-10 w-10 mr-4"
                      />
                      <span className="text-gray-700">Faster recovery and improved mobility</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Why Choose India?</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    India offers some of the best orthopedic care in the world at a fraction of the cost. Patients benefit from internationally trained orthopedic surgeons, JCI/NABH-accredited hospitals, advanced robotic-assisted surgery, and access to globally approved implants.
                  </p>
                  <p className="mb-4">
                    Most Indian hospitals have little to no waiting period and provide dedicated recovery care including physiotherapy and mobility aids. Patients from Africa, GCC, and CIS countries especially appreciate the support for visas, translation, and travel.
                  </p>
                  <div className="mt-8 space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">World-Class Surgeons</h4>
                        <p className="text-gray-600 text-sm">Internationally trained orthopedic specialists with expertise in the latest techniques</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Significant Cost Savings</h4>
                        <p className="text-gray-600 text-sm">70-80% lower costs than US and UK while maintaining quality standards</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">No Wait Times</h4>
                        <p className="text-gray-600 text-sm">Immediate scheduling unlike month-long waiting periods in Western countries</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Comprehensive Care</h4>
                        <p className="text-gray-600 text-sm">Complete assistance with travel, accommodation, and recovery support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison Table */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Cost Comparison</h2>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-md">
                <thead>
                  <tr className="bg-nile-600 text-white">
                    <th className="px-4 py-3 text-left">Procedure</th>
                    <th className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center">
                        <img src="https://placehold.co/30x20/fff/fff/?text=🇮🇳" alt="India Flag" className="mr-2" />
                        India
                      </div>
                    </th>
                    <th className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center">
                        <img src="https://placehold.co/30x20/fff/fff/?text=🇺🇸" alt="USA Flag" className="mr-2" />
                        USA
                      </div>
                    </th>
                    <th className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center">
                        <img src="https://placehold.co/30x20/fff/fff/?text=🇬🇧" alt="UK Flag" className="mr-2" />
                        UK
                      </div>
                    </th>
                    <th className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center">
                        <img src="https://placehold.co/30x20/fff/fff/?text=🇹🇭" alt="Thailand Flag" className="mr-2" />
                        Thailand
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-green-50">
                    <td className="px-4 py-3 font-medium">Total Knee Replacement</td>
                    <td className="px-4 py-3 text-green-700 font-medium text-center">$4,000–$6,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$45,000–$70,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$25,000–$35,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$12,000–$15,000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-medium">Partial Knee Replacement</td>
                    <td className="px-4 py-3 text-green-700 font-medium text-center">$3,500–$5,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$35,000–$50,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$20,000–$30,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$10,000–$12,000</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-green-50">
                    <td className="px-4 py-3 font-medium">Bilateral Knee Replacement</td>
                    <td className="px-4 py-3 text-green-700 font-medium text-center">$7,500–$9,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$80,000–$100,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$50,000+</td>
                    <td className="px-4 py-3 text-center text-gray-600">$18,000–$22,000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-medium">Robotic Knee Surgery</td>
                    <td className="px-4 py-3 text-green-700 font-medium text-center">$6,000–$7,500</td>
                    <td className="px-4 py-3 text-center text-gray-600">$75,000+</td>
                    <td className="px-4 py-3 text-center text-gray-600">$40,000+</td>
                    <td className="px-4 py-3 text-center text-gray-600">$15,000+</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">3D Custom-Fit Implants</td>
                    <td className="px-4 py-3 text-green-700 font-medium text-center">$5,500+</td>
                    <td className="px-4 py-3 text-center text-gray-600">$60,000+</td>
                    <td className="px-4 py-3 text-center text-gray-600">$35,000+</td>
                    <td className="px-4 py-3 text-center text-gray-600">$13,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center">Top Orthopedic Doctors</h2>
            <p className="text-gray-600 text-center mb-10">Meet India's leading knee replacement surgeons with international training</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topDoctors.map((doctor, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Building className="h-4 w-4 mr-2 text-nile-600" />
                      <span>{doctor.hospital}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <User className="h-4 w-4 mr-2 text-nile-600" />
                      <span>{doctor.specialty}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="h-4 w-4 mr-2 text-nile-600" />
                      <span>{doctor.experience}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-2 text-nile-600" />
                      <span>{doctor.location}</span>
                    </div>
                    
                    <div className="mt-4 flex gap-2">
                      <Button
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        onClick={openWhatsApp}
                      >
                        <MessageCircle className="h-4 w-4 mr-1" /> WhatsApp
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-nile-600 text-nile-600 hover:bg-nile-50"
                      >
                        Request Appointment
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hospitals Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center">Top Hospitals</h2>
            <p className="text-gray-600 text-center mb-10">Internationally accredited medical centers for knee replacement surgery</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {topHospitals.map((hospital, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={hospital.image} 
                    alt={hospital.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{hospital.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span>{hospital.accreditation}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-2 text-nile-600" />
                      <span>{hospital.location}</span>
                    </div>
                    
                    <Button
                      variant="outline"
                      className="w-full border-nile-600 text-nile-600 hover:bg-nile-50 mt-2"
                    >
                      View Hospital <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-center mb-10">Everything you need to know about knee replacement surgery in India</p>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center">
                        <Info className="h-5 w-5 mr-3 text-nile-600 flex-shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pl-8">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-nile-600 to-medical-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Ready to Take the Next Step?</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Get a free consultation and personalized treatment plan from India's leading orthopedic surgeons.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-white text-nile-600 hover:bg-gray-100"
                size="lg"
                onClick={openWhatsApp}
              >
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us Your Reports
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" /> Speak to Our Medical Coordinator
              </Button>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default KneeReplacement;
