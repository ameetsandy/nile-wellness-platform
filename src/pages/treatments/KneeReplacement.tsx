import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ActivitySquare, CheckCircle, Phone, MessageCircle, Bone, Flag, CircleDollarSign, ArrowRight, Calendar } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import TreatmentCTA from "@/components/common/TreatmentCTA";
import { Helmet } from "react-helmet";
import AppointmentForm from "@/components/common/AppointmentForm";
import { useState } from "react";

const KneeReplacement = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<{name: string, formType: "appointment" | "second-opinion" | "reports"} | null>(null);

  const handleWhatsAppClick = () => {
    const message = "Hi, I'm interested in Knee Replacement Surgery in India. Please assist me.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918076036335?text=${encodedMessage}`, "_blank");
  };

  const handleAppointmentClick = (doctorName: string, formType: "appointment" | "second-opinion" | "reports") => {
    setSelectedDoctor({ name: doctorName, formType });
  };

  const handleWhatsAppDoctor = (doctorName: string) => {
    const message = `Hi, I'm interested in consulting with ${doctorName} for Knee Replacement Surgery. Please assist me.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918076036335?text=${encodedMessage}`, "_blank");
  };

  const closeForm = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Knee Replacement Surgery in India – Cost, Best Surgeons & Hospitals</title>
        <meta name="description" content="Get affordable and expert knee replacement in India. Compare costs, top doctors, and best orthopedic hospitals. Free consultation and visa support." />
      </Helmet>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Knee Replacement Surgery in India
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Affordable joint care by top orthopedic surgeons
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
                  <span className="bg-white border border-nile-100 text-nile-700 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm">98%+ Success Rate</span>
                </div>
              </div>
              <div className="relative flex items-end lg:justify-end mt-8 lg:mt-0">
                <div className="rounded-xl overflow-hidden shadow-2xl max-w-[500px] mx-auto">
                  <img
                    src="https://i.postimg.cc/tR6b47xh/Knee-Replacement-Surgery.png"
                    alt="Knee Replacement Surgery"
                    className="w-full h-[300px] object-contain"
                  />
                </div>
                <span className="absolute -bottom-6 left-0 bg-nile-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg whitespace-nowrap">
                  78% Cost Savings vs Western Countries
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
                    src="https://i.postimg.cc/tR6b47xh/Knee-Replacement-Surgery.png" 
                    alt="Knee Replacement Surgery" 
                    className="h-6 w-6 mr-3 object-contain"
                  />
                  <h2 className="text-2xl font-bold">What is Knee Replacement Surgery?</h2>
                </div>
                <p className="text-gray-700">
                  Knee Replacement Surgery is a medical procedure to replace damaged or worn-out surfaces of the knee joint with artificial implants. It is most commonly performed for severe osteoarthritis or trauma that causes chronic pain and mobility issues. The procedure may be total or partial, depending on the damage. With robotic technology and enhanced implant design, modern knee surgeries are less invasive and offer faster recovery times.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <img 
                    src="https://i.postimg.cc/tR6b47xh/Knee-Replacement-Surgery.png" 
                    alt="Knee Replacement Surgery" 
                    className="h-6 w-6 mr-3 object-contain"
                  />
                  <h2 className="text-2xl font-bold">Why Choose India?</h2>
                </div>
                <p className="text-gray-700">
                  India offers some of the best orthopedic care in the world at a fraction of the cost. Patients benefit from internationally trained orthopedic surgeons, JCI/NABH-accredited hospitals, advanced robotic-assisted surgery, and access to globally approved implants. Most Indian hospitals have little to no waiting period and provide dedicated recovery care including physiotherapy and mobility aids. Patients from Africa, GCC, and CIS countries especially appreciate the support for visas, translation, and travel.
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
                    <td className="py-4 px-6 font-medium">Total Knee Replacement</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$4,000–$6,000</td>
                    <td className="py-4 px-6 text-center">$45,000–$70,000</td>
                    <td className="py-4 px-6 text-center">$25,000–$35,000</td>
                    <td className="py-4 px-6 text-center">$12,000–$15,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Partial Knee Replacement</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$3,500–$5,000</td>
                    <td className="py-4 px-6 text-center">$35,000–$50,000</td>
                    <td className="py-4 px-6 text-center">$20,000–$30,000</td>
                    <td className="py-4 px-6 text-center">$10,000–$12,000</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Bilateral Knee Replacement</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$7,500–$9,000</td>
                    <td className="py-4 px-6 text-center">$80,000–$100,000</td>
                    <td className="py-4 px-6 text-center">$50,000+</td>
                    <td className="py-4 px-6 text-center">$18,000–$22,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Robotic Knee Surgery</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$6,000–$7,500</td>
                    <td className="py-4 px-6 text-center">$75,000+</td>
                    <td className="py-4 px-6 text-center">$40,000+</td>
                    <td className="py-4 px-6 text-center">$15,000+</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">3D Custom-Fit Implants</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$5,500+</td>
                    <td className="py-4 px-6 text-center">$60,000+</td>
                    <td className="py-4 px-6 text-center">$35,000+</td>
                    <td className="py-4 px-6 text-center">$13,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Top Orthopedic Doctors */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Orthopedic Doctors in India</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Doctor 1 */}
              <Link
                to="/doctors/dr-ashok-rajgopal-bone-joint-replacement"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img
                      src="https://www.vaidam.com/sites/default/files/dr_ashok_rajgopal-min.png"
                      alt="Dr. Ashok Rajgopal"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">50+ Years of Experience</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">
                    Dr. Ashok Rajgopal
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      Orthopaedic and Joint Replacement Surgeon
                    </p>
                    <p className="text-xs text-gray-500">
                      Senior Consultant
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
                        handleAppointmentClick("Dr. Ashok Rajgopal", "appointment");
                      }}
                    >
                      <Calendar className="mr-1 h-3 w-3" /> Request Appointment
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 flex-1 whitespace-nowrap text-xs py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        handleWhatsAppDoctor("Dr. Ashok Rajgopal");
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
                to="/doctors/dr-c-vijay-bose"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img
                      src="https://d1ea147o02h74h.cloudfront.net/dr._c_vijay_bose-min.jpg"
                      alt="Dr. C Vijay Bose"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">36+ Years of Experience</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">
                    Dr. C Vijay Bose
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      Orthopaedic and Joint Replacement Surgeon
                    </p>
                    <p className="text-xs text-gray-500">
                      Senior Consultant
                    </p>
                    <p className="text-gray-600 text-xs">
                      Apollo Hospitals, Chennai, India
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 whitespace-nowrap text-xs py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAppointmentClick("Dr. C Vijay Bose", "appointment");
                      }}
                    >
                      <Calendar className="mr-1 h-3 w-3" /> Request Appointment
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 flex-1 whitespace-nowrap text-xs py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        handleWhatsAppDoctor("Dr. C Vijay Bose");
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
                to="/doctors/dr-jatinder-bir-singh-jaggi-orthopaedics-joint-replacement"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img
                      src="https://www.vaidam.com/sites/default/files/dr-jatinder-bir-singh-jaggi-arthroscopy-orthopedics.jpg"
                      alt="Dr. Jatinder Bir Singh Jaggi"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">31+ Years of Experience</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">
                    Dr. Jatinder Bir Singh Jaggi
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      Orthopaedic and Joint Replacement Surgeon
                    </p>
                    <p className="text-xs text-gray-500">
                      Director
                    </p>
                    <p className="text-gray-600 text-xs">
                      Max Super Specialty Hospital, Gurgaon, India
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
            <h2 className="text-3xl font-bold text-center mb-12">Top Hospitals for Knee Replacement</h2>
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
                to="/hospitals/indraprastha-apollo-hospital-new-delhi"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://d1pkj1wi9lp6qx.cloudfront.net/50/files/Apollo%20Hospital%20Delhi%20Lobby_0.webp"
                    alt="Indraprastha Apollo Hospital"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Indraprastha Apollo Hospital</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">JCI, NABL Certified | Multi Specialty</span>
                  </div>
                  <p className="text-gray-600 mb-4">New Delhi • Est. 1995 • 710 Beds</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </Link>

              {/* Hospital 3 */}
              <Link
                to="/hospitals/fortis-memorial-research-institute-gurgaon"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://d1pkj1wi9lp6qx.cloudfront.net/50/files/fortis_memorial_hospital_gurgaon_list_view_image-min.webp"
                    alt="Fortis Memorial Research Institute"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Fortis Memorial Research Institute</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">JCI, NABH Certified | Multi Specialty</span>
                  </div>
                  <p className="text-gray-600 mb-4">Gurgaon • Est. 2001 • 310 Beds</p>
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
                  <TabsTrigger value="tab1">Procedure</TabsTrigger>
                  <TabsTrigger value="tab2">Recovery</TabsTrigger>
                  <TabsTrigger value="tab3">Logistics</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How long is the hospital stay for knee replacement?</h3>
                    <p className="text-gray-700">Typically, 5–7 days. Recovery and physiotherapy continue for 10–14 more days.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Are robotic knee surgeries available?</h3>
                    <p className="text-gray-700">Yes. Leading hospitals like Artemis and Fortis offer robotic and minimally invasive procedures.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Can both knees be operated in one visit?</h3>
                    <p className="text-gray-700">Yes, many patients undergo bilateral knee replacement in one admission.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab2" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">What is the recovery time after surgery?</h3>
                    <p className="text-gray-700">Most patients walk with support within a few days and recover fully in 6–8 weeks.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Will physiotherapy be provided?</h3>
                    <p className="text-gray-700">Yes, every hospital provides post-op physiotherapy as part of the treatment package.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab3" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Can I choose the implant brand?</h3>
                    <p className="text-gray-700">Absolutely. We work with Zimmer, Stryker, Johnson & Johnson, and other global brands.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Is visa support available?</h3>
                    <p className="text-gray-700">Yes. We help with medical visa invitation letters and application guidance.</p>
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
                <Phone className="mr-2 h-5 w-5" /> Speak to a Knee Specialist
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

export default KneeReplacement;
