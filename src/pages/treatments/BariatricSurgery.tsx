import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { 
  Phone, 
  MessageCircle, 
  Weight, 
  Hospital, 
  User, 
  CalendarClock,
  MapPin,
  Shield,
  Scale,
  ChevronDown,
  ChevronUp,
  Plane,
  Utensils,
  BadgeCheck,
  HeartPulse,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BariatricSurgery = () => {
  const openWhatsApp = () => {
    const phoneNumber = "911234567890"; // Replace with actual WhatsApp number
    const message = "Hello, I'd like to inquire about Bariatric Surgery in India.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const callNow = () => {
    window.location.href = "tel:+911234567890"; // Replace with actual phone number
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-medical-50 to-nile-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
                  Weight Loss Surgery in India
                  <span className="block text-nile-600 mt-2">Long-term obesity solutions with trusted bariatric surgeons</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-xl">
                  Transform your life with safe, effective, and affordable bariatric surgery at JCI-accredited hospitals in India.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <Button 
                    className="cta-whatsapp text-base py-3 px-6 h-auto"
                    onClick={openWhatsApp}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Share Reports for Free Evaluation
                  </Button>
                  <Button 
                    variant="outline"
                    className="text-base py-3 px-6 h-auto border-nile-600 text-nile-600 hover:bg-nile-50"
                    onClick={callNow}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Speak to a Coordinator
                  </Button>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <div className="bg-white p-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">NABH Accredited</span>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-medium">JCI Certified</span>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <HeartPulse className="h-5 w-5 text-red-600" />
                      <span className="text-sm font-medium">90%+ Success Rate</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 relative">
                <div className="rounded-xl overflow-hidden shadow-2xl max-w-[500px] mx-auto">
                  <img
                    src="https://i.postimg.cc/TPKSNHjr/Weight-Loss-Surgery-Bariatric.png"
                    alt="Bariatric Surgery"
                    className="w-full h-[300px] object-contain"
                  />
                </div>
                <div className="absolute -bottom-4 -left-6 bg-nile-600 text-white py-3 px-5 rounded-lg shadow-lg text-sm">
                  75% Cost Savings vs Western Countries
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview + Why India */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center mb-6">
                    <img 
                      src="https://i.postimg.cc/TPKSNHjr/Weight-Loss-Surgery-Bariatric.png" 
                      alt="Bariatric Surgery" 
                      className="h-6 w-6 mr-3 object-contain"
                    />
                    <h2 className="text-2xl font-bold">What is Bariatric Surgery?</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Bariatric surgery, also known as weight loss surgery, helps individuals with obesity lose excess weight by altering the digestive system. Common procedures include gastric bypass, sleeve gastrectomy, and mini gastric bypass. 
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    These surgeries work by limiting food intake and/or reducing nutrient absorption. Bariatric surgery is not just cosmetic—it's a medical intervention that can help reverse diabetes, hypertension, sleep apnea, and improve overall quality of life.
                  </p>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Common Procedures:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h4 className="font-semibold text-nile-600">Sleeve Gastrectomy</h4>
                        <p className="text-sm text-gray-600 mt-2">Removal of 80% of the stomach, creating a small sleeve-shaped stomach.</p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h4 className="font-semibold text-nile-600">Gastric Bypass</h4>
                        <p className="text-sm text-gray-600 mt-2">Creates a small pouch from the stomach and connects it directly to the small intestine.</p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h4 className="font-semibold text-nile-600">Mini Gastric Bypass</h4>
                        <p className="text-sm text-gray-600 mt-2">A simplified version of the gastric bypass with fewer complications.</p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h4 className="font-semibold text-nile-600">Intragastric Balloon</h4>
                        <p className="text-sm text-gray-600 mt-2">Non-surgical option where a balloon is placed in the stomach to reduce space for food.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center mb-6">
                    <img 
                      src="https://i.postimg.cc/TPKSNHjr/Weight-Loss-Surgery-Bariatric.png" 
                      alt="Bariatric Surgery" 
                      className="h-6 w-6 mr-3 object-contain"
                    />
                    <h2 className="text-2xl font-bold">Why Choose India?</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    India offers world-class bariatric care with experienced metabolic surgeons, advanced laparoscopic and robotic technology, and international standards in safety and infection control.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    With success rates above 90% and 75% cost savings over Western countries, India is a preferred destination for medical tourists. Hospitals provide personalized nutrition plans, physiotherapy, and multi-lingual care coordinators to guide international patients through their transformation journey.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    <div className="flex items-start gap-3">
                      <BadgeCheck className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Experienced Surgeons</h4>
                        <p className="text-sm text-gray-600">Internationally trained doctors with 20+ years experience</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BadgeCheck className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Advanced Technology</h4>
                        <p className="text-sm text-gray-600">Latest laparoscopic and robotic surgical systems</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BadgeCheck className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Patient Support</h4>
                        <p className="text-sm text-gray-600">Multilingual coordinators & comprehensive post-op care</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BadgeCheck className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Accredited Hospitals</h4>
                        <p className="text-sm text-gray-600">JCI and NABH certified facilities with international standards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Cost Comparison Table */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Scale className="h-8 w-8 text-nile-600" />
                <h2 className="text-3xl font-bold text-gray-800">Cost Comparison</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Save up to 75% on world-class bariatric procedures in India compared to the USA, UK, and other countries.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-md">
                <thead>
                  <tr className="bg-nile-600 text-white">
                    <th className="px-6 py-4 text-left rounded-tl-xl">Procedure</th>
                    <th className="px-6 py-4 text-center bg-nile-700">India</th>
                    <th className="px-6 py-4 text-center">USA</th>
                    <th className="px-6 py-4 text-center">UK</th>
                    <th className="px-6 py-4 text-center rounded-tr-xl">Thailand</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Sleeve Gastrectomy</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600 bg-green-50">$4,000–$5,500</td>
                    <td className="px-6 py-4 text-center text-red-600">$20,000–$25,000</td>
                    <td className="px-6 py-4 text-center">$15,000–$22,000</td>
                    <td className="px-6 py-4 text-center">$7,000–$9,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Gastric Bypass</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600 bg-green-50">$5,500–$7,000</td>
                    <td className="px-6 py-4 text-center text-red-600">$30,000–$40,000</td>
                    <td className="px-6 py-4 text-center">$20,000–$28,000</td>
                    <td className="px-6 py-4 text-center">$10,000–$12,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Mini Gastric Bypass</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600 bg-green-50">$4,800–$6,500</td>
                    <td className="px-6 py-4 text-center text-red-600">$25,000–$35,000</td>
                    <td className="px-6 py-4 text-center">$18,000+</td>
                    <td className="px-6 py-4 text-center">$8,000+</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Intragastric Balloon</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600 bg-green-50">$2,500–$3,000</td>
                    <td className="px-6 py-4 text-center text-red-600">$7,000+</td>
                    <td className="px-6 py-4 text-center">$6,000+</td>
                    <td className="px-6 py-4 text-center">$4,000–$5,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Follow-Up Nutrition Plan</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600 bg-green-50">Included</td>
                    <td className="px-6 py-4 text-center text-red-600">$1,000+</td>
                    <td className="px-6 py-4 text-center">$700+</td>
                    <td className="px-6 py-4 text-center">$500+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                className="bg-nile-600 hover:bg-nile-700"
                onClick={openWhatsApp}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get a Personalized Quote
              </Button>
            </div>
          </div>
        </section>
        
        {/* Top Bariatric Surgeons */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <User className="h-8 w-8 text-nile-600" />
                <h2 className="text-3xl font-bold text-gray-800">Top Bariatric Surgeons in India</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Internationally trained specialists with decades of experience in weight loss surgery.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://placehold.co/400x300/medical-600/white/?text=Dr.+Lakdawala" 
                    alt="Dr. Muffazal Lakdawala" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Dr. Muffazal Lakdawala</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Hospital className="h-4 w-4 mr-2" />
                    <span>Saifee Hospital, Mumbai</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Weight className="h-4 w-4 mr-2" />
                    <span>Laparoscopic & Bariatric Surgery</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <CalendarClock className="h-4 w-4 mr-2" />
                    <span>25+ Years Experience</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-6">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Mumbai</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-nile-600 hover:bg-nile-700"
                      onClick={openWhatsApp}
                    >
                      <MessageCircle className="h-4 w-4 mr-1" />
                      WhatsApp
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
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://placehold.co/400x300/medical-600/white/?text=Dr.+Wadhawan" 
                    alt="Dr. Randeep Wadhawan" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Dr. Randeep Wadhawan</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Hospital className="h-4 w-4 mr-2" />
                    <span>Max Super Speciality Hospital, Delhi</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Weight className="h-4 w-4 mr-2" />
                    <span>Robotic Bariatric Surgeon</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <CalendarClock className="h-4 w-4 mr-2" />
                    <span>20+ Years Experience</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-6">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Delhi</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-nile-600 hover:bg-nile-700"
                      onClick={openWhatsApp}
                    >
                      <MessageCircle className="h-4 w-4 mr-1" />
                      WhatsApp
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
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://placehold.co/400x300/medical-600/white/?text=Dr.+Baijal" 
                    alt="Dr. Manish Baijal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Dr. Manish Baijal</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Hospital className="h-4 w-4 mr-2" />
                    <span>Max Healthcare, Gurgaon</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Weight className="h-4 w-4 mr-2" />
                    <span>Metabolic & Obesity Surgeon</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <CalendarClock className="h-4 w-4 mr-2" />
                    <span>22+ Years Experience</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-6">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Gurgaon</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-nile-600 hover:bg-nile-700"
                      onClick={openWhatsApp}
                    >
                      <MessageCircle className="h-4 w-4 mr-1" />
                      WhatsApp
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
            </div>
          </div>
        </section>
        
        {/* Top Hospitals */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Hospital className="h-8 w-8 text-nile-600" />
                <h2 className="text-3xl font-bold text-gray-800">Top Hospitals for Bariatric Surgery</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                JCI and NABH accredited facilities with cutting-edge technology and dedicated bariatric centers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://placehold.co/400x300/medical-600/white/?text=Saifee+Hospital" 
                    alt="Saifee Hospital" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Saifee Hospital</h3>
                  <div className="flex items-center text-green-600 mb-4">
                    <BadgeCheck className="h-5 w-5 mr-2" />
                    <span className="font-medium">Center of Excellence in Bariatric Surgery</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-6">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Mumbai</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-nile-600 hover:bg-nile-700"
                  >
                    View Details
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://placehold.co/400x300/medical-600/white/?text=Max+Hospital" 
                    alt="Max Super Speciality Hospital" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Max Super Speciality Hospital</h3>
                  <div className="flex items-center text-green-600 mb-4">
                    <BadgeCheck className="h-5 w-5 mr-2" />
                    <span className="font-medium">NABH Accredited | Advanced Robotics</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-6">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Delhi & Gurgaon</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-nile-600 hover:bg-nile-700"
                  >
                    View Details
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://placehold.co/400x300/medical-600/white/?text=Fortis+Hospital" 
                    alt="Fortis Hospital" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Fortis Hospital</h3>
                  <div className="flex items-center text-green-600 mb-4">
                    <BadgeCheck className="h-5 w-5 mr-2" />
                    <span className="font-medium">Experienced team | High Success Rate</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-6">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Bangalore</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-nile-600 hover:bg-nile-700"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to know about bariatric surgery in India.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg overflow-hidden shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    <span className="text-left font-medium">Am I eligible for weight loss surgery?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                    <p className="text-gray-700">
                      You may be eligible if your BMI is over 35 or if you have obesity-related health conditions. A thorough evaluation by our bariatric team will determine if surgery is right for you based on your medical history, previous weight loss attempts, and current health status.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border rounded-lg overflow-hidden shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    <span className="text-left font-medium">How much weight can I expect to lose?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                    <p className="text-gray-700">
                      Most patients lose 60–80% of their excess weight within 12–18 months. Results vary based on the procedure type, your commitment to lifestyle changes, and your starting weight. Our team will provide realistic expectations based on your individual case.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border rounded-lg overflow-hidden shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    <span className="text-left font-medium">Is the surgery done laparoscopically?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                    <p className="text-gray-700">
                      Yes. Most procedures are minimally invasive with faster recovery and minimal scarring. Our surgeons use advanced laparoscopic techniques that require only small incisions, resulting in less pain, shorter hospital stays, and quicker return to normal activities.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border rounded-lg overflow-hidden shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    <span className="text-left font-medium">How many days will I need to stay in India?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                    <p className="text-gray-700">
                      Hospital stay is typically 3–4 days. You may return home in 7–10 days after surgery. We recommend staying for the full post-operative evaluation period to ensure your recovery is proceeding smoothly before international travel.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border rounded-lg overflow-hidden shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    <span className="text-left font-medium">What support is given post-surgery?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                    <p className="text-gray-700">
                      You'll receive a customized diet plan, physical activity guidance, and tele-follow-ups. Our comprehensive post-surgery support includes nutritional counseling, psychological support, and regular virtual consultations to monitor your progress and address any concerns.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6" className="border rounded-lg overflow-hidden shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    <span className="text-left font-medium">Will insurance cover the surgery?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                    <p className="text-gray-700">
                      International insurance depends on your provider. Many patients pay out-of-pocket due to affordability. We can provide detailed cost estimates and documentation to help you process insurance claims if your policy covers bariatric procedures performed abroad.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7" className="border rounded-lg overflow-hidden shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    <span className="text-left font-medium">Can I send my reports before I travel?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                    <p className="text-gray-700">
                      Yes. You can WhatsApp your medical history for a free evaluation by a bariatric expert. This pre-assessment helps determine if you're a suitable candidate and allows us to prepare a personalized treatment plan before your arrival in India.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-nile-600 to-medical-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Weight Loss Journey?</h2>
              <p className="text-xl mb-8">
                Take the first step toward a healthier life. Our bariatric experts are ready to guide you through the process.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  className="bg-white text-nile-600 hover:bg-gray-100 text-lg py-6 px-8 h-auto"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Share Reports for Free Evaluation
                </Button>
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg py-6 px-8 h-auto"
                  onClick={callNow}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Speak to a Bariatric Coordinator
                </Button>
              </div>
              
              <div className="mt-12 flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2">
                  <Plane className="h-5 w-5" />
                  <span>Visa assistance available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Utensils className="h-5 w-5" />
                  <span>Dietary guidance included</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Airport pickup service</span>
                </div>
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

export default BariatricSurgery;
