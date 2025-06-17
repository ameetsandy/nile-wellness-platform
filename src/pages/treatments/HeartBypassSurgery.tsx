import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, HeartPulse, Phone, MessageCircle, Calendar, ArrowRight } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import TreatmentCTA from "@/components/common/TreatmentCTA";
import AppointmentForm from "@/components/common/AppointmentForm";
import { useState } from "react";

const HeartBypassSurgery = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<{name: string, formType: "appointment" | "second-opinion" | "reports"} | null>(null);

  const handleWhatsAppClick = () => {
    const message = "Hi, I'm interested in Heart Bypass Surgery in India. Please assist me.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918076036335?text=${encodedMessage}`, "_blank");
  };

  const handlePhoneClick = () => {
    const message = "Hi, I would like to speak with a coordinator about Heart Bypass Surgery in India.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918076036335?text=${encodedMessage}`, "_blank");
  };

  const handleAppointmentClick = (doctorName: string, formType: "appointment" | "second-opinion" | "reports") => {
    setSelectedDoctor({ name: doctorName, formType });
  };

  const handleWhatsAppDoctor = (doctorName: string) => {
    const message = `Hi, I'm interested in consulting with ${doctorName} for Heart Bypass Surgery. Please assist me.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918076036335?text=${encodedMessage}`, "_blank");
  };

  const closeForm = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Heart Bypass Surgery (CABG) in India
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  World-class heart care, affordable prices, and leading cardiac surgeons
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white text-base py-3 px-6 h-auto"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" /> Share Reports for Free Evaluation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="text-base py-3 px-6 h-auto border-blue-600 text-blue-600 hover:bg-blue-50"
                    onClick={handleWhatsAppClick}
                  >
                    <Phone className="mr-2 h-5 w-5" /> Speak to a Coordinator
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="bg-white border border-nile-100 text-nile-700 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm">NABH Accredited</span>
                  <span className="bg-white border border-nile-100 text-nile-700 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm">JCI Certified</span>
                  <span className="bg-white border border-nile-100 text-nile-700 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm">97%+ Success Rate</span>
                </div>
              </div>
              <div className="relative flex items-end lg:justify-end mt-8 lg:mt-0">
                <div className="rounded-xl overflow-hidden shadow-2xl max-w-[500px] mx-auto">
                  <img
                    src="https://i.postimg.cc/BbFJWnxB/Heart-Bypass-Surgery-CABG.png"
                    alt="Heart Bypass Surgery"
                    className="w-full h-[300px] object-contain"
                  />
                </div>
                <span className="absolute -bottom-6 left-0 bg-nile-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg whitespace-nowrap">
                  75% Cost Savings vs Western Countries
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview and Why India */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <img 
                    src="https://i.postimg.cc/BbFJWnxB/Heart-Bypass-Surgery-CABG.png" 
                    alt="Heart Bypass Surgery" 
                    className="h-6 w-6 mr-3 object-contain"
                  />
                  <h2 className="text-2xl font-bold">What is Heart Bypass Surgery?</h2>
                </div>
                <p className="text-gray-700">
                  Heart Bypass Surgery, or Coronary Artery Bypass Grafting (CABG), is a procedure used to improve blood flow to the heart. In this surgery, a healthy blood vessel from another part of the body is used to bypass blocked arteries. It significantly reduces chest pain, prevents heart attacks, and improves overall cardiac function.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <img 
                    src="https://i.postimg.cc/BbFJWnxB/Heart-Bypass-Surgery-CABG.png" 
                    alt="Heart Bypass Surgery" 
                    className="h-6 w-6 mr-3 object-contain"
                  />
                  <h2 className="text-2xl font-bold">Why Choose India?</h2>
                </div>
                <p className="text-gray-700">
                  India is a global destination for cardiac surgery thanks to its highly skilled cardiothoracic surgeons, modern hospital infrastructure, and affordability. Patients save up to 90% in costs compared to Western nations. There's virtually no wait time, international accreditations (like JCI/NABH), and English-speaking medical staff for seamless communication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison Table */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Cost Comparison</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-lg">
                <thead className="bg-nile-600 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Procedure</th>
                    <th className="py-4 px-6 text-center">India</th>
                    <th className="py-4 px-6 text-center">USA</th>
                    <th className="py-4 px-6 text-center">UK</th>
                    <th className="py-4 px-6 text-center">Thailand</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Heart Bypass Surgery (CABG)</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$5,000–$7,000</td>
                    <td className="py-4 px-6 text-center">$70,000–$150,000</td>
                    <td className="py-4 px-6 text-center">$40,000–$80,000</td>
                    <td className="py-4 px-6 text-center">$15,000–$18,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Angioplasty</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$2,000–$4,000</td>
                    <td className="py-4 px-6 text-center">$30,000–$50,000</td>
                    <td className="py-4 px-6 text-center">$20,000–$30,000</td>
                    <td className="py-4 px-6 text-center">$7,000–$10,000</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Pacemaker Implant</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$4,000–$6,000</td>
                    <td className="py-4 px-6 text-center">$30,000–$60,000</td>
                    <td className="py-4 px-6 text-center">$20,000–$40,000</td>
                    <td className="py-4 px-6 text-center">$10,000–$12,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Valve Replacement</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$6,000–$8,000</td>
                    <td className="py-4 px-6 text-center">$80,000–$100,000</td>
                    <td className="py-4 px-6 text-center">$50,000–$90,000</td>
                    <td className="py-4 px-6 text-center">$15,000–$20,000</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Cardiac Rehab (1 Month)</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$300–$500</td>
                    <td className="py-4 px-6 text-center">$5,000+</td>
                    <td className="py-4 px-6 text-center">$4,000+</td>
                    <td className="py-4 px-6 text-center">$1,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Top Doctors */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Cardiac Doctors in India</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Doctor 1 */}
              <Link
                to="/doctors/dr-devi-prasad-shetty"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img
                      src="https://www.vaidam.com/sites/default/webp/50/files/dr._devi_prasad_shetty.webp"
                      alt="Dr. Devi Prasad Shetty"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">45+ Years of Experience</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">
                    Dr. Devi Prasad Shetty
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      Cardiac Surgeon
                    </p>
                    <p className="text-xs text-gray-500">
                      Senior Consultant
                    </p>
                    <p className="text-gray-600 text-xs">
                      Narayana Institute of Cardiac Sciences, Bangalore, India
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 whitespace-nowrap text-xs py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAppointmentClick("Dr. Devi Prasad Shetty", "appointment");
                      }}
                    >
                      <Calendar className="mr-1 h-3 w-3" /> Request Appointment
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 flex-1 whitespace-nowrap text-xs py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        handleWhatsAppDoctor("Dr. Devi Prasad Shetty");
                      }}
                    >
                      <MessageCircle className="mr-1 h-3 w-3" /> WhatsApp
                    </Button>
                  </div>
                  <div
                    className="mt-2 flex items-center justify-center text-nile-600 hover:text-nile-700 font-medium text-xs"
                  >
                    View Full Profile
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </Link>

              {/* Doctor 2 */}
              <Link
                to="/doctors/dr-naresh-trehan"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img
                      src="https://www.vaidam.com/sites/default/webp/50/files/dr._naresh_trehan-min.webp"
                      alt="Dr. Naresh Trehan"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">56+ Years of Experience</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">
                    Dr. Naresh Trehan
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      Cardiac Surgeon
                    </p>
                    <p className="text-xs text-gray-500">
                      Chairman
                    </p>
                    <p className="text-gray-600 text-xs">
                      Medanta - The Medicity, Gurgaon, India
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 whitespace-nowrap text-xs py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAppointmentClick("Dr. Naresh Trehan", "appointment");
                      }}
                    >
                      <Calendar className="mr-1 h-3 w-3" /> Request Appointment
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 flex-1 whitespace-nowrap text-xs py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        handleWhatsAppDoctor("Dr. Naresh Trehan");
                      }}
                    >
                      <MessageCircle className="mr-1 h-3 w-3" /> WhatsApp
                    </Button>
                  </div>
                  <div
                    className="mt-2 flex items-center justify-center text-nile-600 hover:text-nile-700 font-medium text-xs"
                  >
                    View Full Profile
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </Link>

              {/* Doctor 3 */}
              <Link
                to="/doctors/dr-z-s-meharwal"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img
                      src="https://www.vaidam.com/sites/default/webp/50/files/dr-z-s-meharwal_cardio-thorasic-vascular-surgery982956-min.webp"
                      alt="Dr. Z S Meharwal"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">42+ Years of Experience</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">
                    Dr. Z S Meharwal
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      Cardiac Surgeon
                    </p>
                    <p className="text-xs text-gray-500">
                      Chairman
                    </p>
                    <p className="text-gray-600 text-xs">
                      Fortis Escorts Heart Institute, New Delhi, India
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 whitespace-nowrap text-xs py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAppointmentClick("Dr. Z S Meharwal", "appointment");
                      }}
                    >
                      <Calendar className="mr-1 h-3 w-3" /> Request Appointment
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 flex-1 whitespace-nowrap text-xs py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        handleWhatsAppDoctor("Dr. Z S Meharwal");
                      }}
                    >
                      <MessageCircle className="mr-1 h-3 w-3" /> WhatsApp
                    </Button>
                  </div>
                  <div
                    className="mt-2 flex items-center justify-center text-nile-600 hover:text-nile-700 font-medium text-xs"
                  >
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
            <h2 className="text-3xl font-bold text-center mb-12">Top Hospitals for Heart Surgery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Hospital 1 */}
              <Link
                to="/hospitals/medanta-medicity-gurgaon"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://d1pkj1wi9lp6qx.cloudfront.net/50/files/medanta_the_medicity_gurgaon_list_view_image-min.webp"
                    alt="Medanta - The Medicity"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Medanta - The Medicity</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">JCI, NABH Certified | Super Specialty</span>
                  </div>
                  <p className="text-gray-600 mb-4">Gurgaon • Est. 2009 • 1600 Beds</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </Link>

              {/* Hospital 2 */}
              <Link
                to="/hospitals/narayana-institute-cardiac-sciences-bangalore"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://www.vaidam.com/sites/default/files/narayana_institute_of_cardiac_sciences_bangalore_1-min.jpg"
                    alt="Narayana Institute of Cardiac Sciences"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Narayana Institute of Cardiac Sciences</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">JCI, NABH Certified | Super Specialty</span>
                  </div>
                  <p className="text-gray-600 mb-4">Bangalore • Est. 2000 • 606 Beds</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </Link>

              {/* Hospital 3 */}
              <Link
                to="/hospitals/fortis-escorts-heart-institute-new-delhi"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://d1pkj1wi9lp6qx.cloudfront.net/50/files/fortis-escorts-heart-institute_0.webp"
                    alt="Fortis Escorts Heart Institute"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Fortis Escorts Heart Institute</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">JCI, NABH Certified | Multi Specialty</span>
                  </div>
                  <p className="text-gray-600 mb-4">New Delhi • Est. 1988 • 310 Beds</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="tab1">General</TabsTrigger>
                  <TabsTrigger value="tab2">Procedure</TabsTrigger>
                  <TabsTrigger value="tab3">Recovery</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How long will I need to stay in India?</h3>
                    <p className="text-gray-700">About 2–3 weeks including surgery and recovery.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Is heart surgery in India safe?</h3>
                    <p className="text-gray-700">Yes, top-tier hospitals use international protocols and advanced techniques.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">What visa do I need?</h3>
                    <p className="text-gray-700">A medical visa is required; our team will assist you through the process.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab2" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Are minimally invasive options available?</h3>
                    <p className="text-gray-700">Yes, robotic and keyhole CABG procedures are available.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How is the surgery performed?</h3>
                    <p className="text-gray-700">The surgeon takes a blood vessel from your leg, chest, or arm and connects it to bypass the blocked artery, allowing blood to flow around the blockage.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab3" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How long is the recovery?</h3>
                    <p className="text-gray-700">Initial recovery in 2–3 weeks; full recovery within 6–12 weeks.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Will I receive rehab and follow-up?</h3>
                    <p className="text-gray-700">Yes, in-hospital rehab and virtual follow-up support are provided.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Can my family come with me?</h3>
                    <p className="text-gray-700">Yes, Nile Wellness provides accommodation and visa support for companions.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-nile-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Need help with your treatment journey?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-lg py-6"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" /> Share Reports for Free Assessment
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-nile-600 hover:bg-white hover:text-nile-600 text-lg py-6"
                onClick={handleWhatsAppClick}
              >
                <Phone className="mr-2 h-5 w-5" /> Speak to a Heart Specialist
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      {selectedDoctor && (
        <AppointmentForm
          isOpen={true}
          onClose={closeForm}
          doctorName={selectedDoctor.name}
          formType={selectedDoctor.formType}
        />
      )}
    </div>
  );
};

export default HeartBypassSurgery;
