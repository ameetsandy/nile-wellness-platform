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
  ArrowRight,
  Calendar
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
        <section className="bg-gradient-to-r from-blue-50 to-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
                  Weight Loss Surgery in India
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
                    WhatsApp Now
                  </Button>
                  <Button 
                    variant="outline"
                    className="text-base py-3 px-6 h-auto border-blue-600 text-blue-600 hover:bg-blue-50"
                    onClick={callNow}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us
                  </Button>
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Bariatric Surgeons in India</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Doctor 1 */}
              <Link
                to="/doctors/dr-satish-n"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img
                      src="https://d1ea147o02h74h.cloudfront.net/dr_satish_n-removebg-preview-min.png"
                      alt="Dr. Satish N"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">32+ Exp</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">
                    Dr. Satish N
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      General Surgeon
                    </p>
                    <p className="text-xs text-gray-500">
                      Senior Consultant
                    </p>
                    <p className="text-gray-600 text-xs">
                      Manipal Hospital Formerly Columbia Asia Referral Hospital, Bangalore
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 whitespace-nowrap text-xs py-1"
                    >
                      <Calendar className="mr-1 h-3 w-3" /> Request Appointment
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 flex-1 whitespace-nowrap text-xs py-1"
                    >
                      <MessageCircle className="mr-1 h-3 w-3" /> WhatsApp
                    </Button>
                  </div>
                  <div className="mt-2 flex items-center justify-center text-nile-600 hover:text-nile-700 font-medium text-xs">
                    View Full Profile
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </Link>

              {/* Doctor 2 */}
              <Link
                to="/doctors/dr-ramen-goel"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img
                      src="https://d1ea147o02h74h.cloudfront.net/dr._ramen_goel.jpg"
                      alt="Dr. Ramen Goel"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">39+ Exp</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">
                    Dr. Ramen Goel
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      General Surgeon
                    </p>
                    <p className="text-xs text-gray-500">
                      Senior Consultant
                    </p>
                    <p className="text-gray-600 text-xs">
                      Wockhardt Hospital, Mumbai
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 whitespace-nowrap text-xs py-1"
                    >
                      <Calendar className="mr-1 h-3 w-3" /> Request Appointment
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 flex-1 whitespace-nowrap text-xs py-1"
                    >
                      <MessageCircle className="mr-1 h-3 w-3" /> WhatsApp
                    </Button>
                  </div>
                  <div className="mt-2 flex items-center justify-center text-nile-600 hover:text-nile-700 font-medium text-xs">
                    View Full Profile
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </Link>

              {/* Doctor 3 */}
              <Link
                to="/doctors/dr-kn-srivastava"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img
                      src="https://www.vaidam.com/sites/default/files/dr._kn-min.jpg"
                      alt="Dr. K.N. Srivastava"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">52+ Exp</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">
                    Dr. K.N. Srivastava
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      General Surgeon
                    </p>
                    <p className="text-xs text-gray-500">
                      Senior Consultant
                    </p>
                    <p className="text-gray-600 text-xs">
                      BLK-Max Super Speciality Hospital Delhi
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 whitespace-nowrap text-xs py-1"
                    >
                      <Calendar className="mr-1 h-3 w-3" /> Request Appointment
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 flex-1 whitespace-nowrap text-xs py-1"
                    >
                      <MessageCircle className="mr-1 h-3 w-3" /> WhatsApp
                    </Button>
                  </div>
                  <div className="mt-2 flex items-center justify-center text-nile-600 hover:text-nile-700 font-medium text-xs">
                    View Full Profile
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </Link>
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
              <Link
                to="https://www.nilewellness.com/hospitals/saifee-hospital-mumbai"
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://www.vaidam.com/sites/default/files/saifee-hospital.jpg" 
                    alt="Saifee Hospital" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Saifee Hospital</h3>
                  <div className="flex items-center text-green-600 mb-4">
                    <BadgeCheck className="h-5 w-5 mr-2" />
                    <span className="font-medium">NABH, NABL Accredited</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-6">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Mumbai</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-6">
                    <Shield className="h-4 w-4 mr-2" />
                    <span>257 Beds | Est. 1948</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-nile-600 hover:bg-nile-700"
                  >
                    View Details
                  </Button>
                </div>
              </Link>
              
              <Link
                to="https://www.nilewellness.com/hospitals/max-super-speciality-hospital-saket-new-delhi"
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://d1pkj1wi9lp6qx.cloudfront.net/50/files/max_hospital_saket_building-min.webp" 
                    alt="Max Super Speciality Hospital" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Max Super Speciality Hospital</h3>
                  <div className="flex items-center text-green-600 mb-4">
                    <BadgeCheck className="h-5 w-5 mr-2" />
                    <span className="font-medium">JCI, NABH Accredited</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-6">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>New Delhi</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-6">
                    <Shield className="h-4 w-4 mr-2" />
                    <span>550 Beds | Est. 2005</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-nile-600 hover:bg-nile-700"
                  >
                    View Details
                  </Button>
                </div>
              </Link>
              
              <Link
                to="https://www.nilewellness.com/hospitals/fortis-hospital-bangalore"
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://www.vaidam.com/sites/default/files/fortis_hospital_bangalore_0.jpg" 
                    alt="Fortis Hospital" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Fortis Hospital</h3>
                  <div className="flex items-center text-green-600 mb-4">
                    <BadgeCheck className="h-5 w-5 mr-2" />
                    <span className="font-medium">JCI, NABH Accredited</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-6">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Bangalore</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-6">
                    <Shield className="h-4 w-4 mr-2" />
                    <span>284 Beds | Est. 2006</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-nile-600 hover:bg-nile-700"
                  >
                    View Details
                  </Button>
                </div>
              </Link>
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
