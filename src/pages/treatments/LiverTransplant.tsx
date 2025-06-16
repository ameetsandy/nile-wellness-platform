import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stethoscope, CircleDollarSign, Phone, MessageCircle, Calendar, ArrowRight } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import TreatmentCTA from "@/components/common/TreatmentCTA";

const LiverTransplant = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi, I'm interested in Liver Transplant in India. Please assist me.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918076036335?text=${encodedMessage}`, "_blank");
  };

  const handlePhoneClick = () => {
    const message = "Hi, I would like to speak with a coordinator about Liver Transplant in India.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918076036335?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Liver Transplant in India
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Advanced liver transplant procedures with world-class surgeons
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
                  <span className="bg-white border border-nile-100 text-nile-700 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm">97.5%+ Success Rate</span>
                </div>
              </div>
              <div className="relative flex items-end lg:justify-end mt-8 lg:mt-0">
                <div className="rounded-xl overflow-hidden shadow-2xl max-w-[500px] mx-auto">
                  <img
                    src="https://i.postimg.cc/MGX22Gwf/liver-transplant.png"
                    alt="Liver Transplant"
                    className="w-full h-[300px] object-contain"
                  />
                </div>
                <span className="absolute -bottom-6 left-0 bg-nile-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg whitespace-nowrap">
                  74% Cost Savings vs Western Countries
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
                    src="https://i.postimg.cc/qvw4HYCS/liver-transplant.png" 
                    alt="Liver Transplant" 
                    className="h-6 w-6 mr-3 object-contain"
                  />
                  <h2 className="text-2xl font-bold">What is Liver Transplant?</h2>
                </div>
                <p className="text-gray-700">
                  Liver transplant is a surgical procedure where a diseased or failing liver is replaced with a healthy liver from a donor. It's performed for patients with end-stage liver disease, acute liver failure, or certain liver cancers. The donor can be a living person (living donor transplant) who donates a portion of their liver, or a deceased donor (cadaveric transplant). After transplantation, the liver portions in both the donor and recipient regenerate to normal size.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <img 
                    src="https://i.postimg.cc/qvw4HYCS/liver-transplant.png" 
                    alt="Liver Transplant" 
                    className="h-6 w-6 mr-3 object-contain"
                  />
                  <h2 className="text-2xl font-bold">Why Choose India?</h2>
                </div>
                <p className="text-gray-700">
                  India is renowned for successful liver transplant outcomes with high survival rates comparable to Western centers. The country offers world-class transplant centers, experienced surgeons trained at top global institutions, and comprehensive patient care at a fraction of the cost. Indian hospitals have performed thousands of successful liver transplants and maintain strict donor selection protocols. International patients also benefit from personalized care and multilingual support.
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
                    <td className="py-4 px-6 font-medium">Living Donor Liver Transplant</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$40,000–$50,000</td>
                    <td className="py-4 px-6 text-center">$500,000–$700,000</td>
                    <td className="py-4 px-6 text-center">$250,000–$300,000</td>
                    <td className="py-4 px-6 text-center">$80,000–$100,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Deceased Donor Liver Transplant</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$35,000–$45,000</td>
                    <td className="py-4 px-6 text-center">$450,000–$600,000</td>
                    <td className="py-4 px-6 text-center">$200,000–$250,000</td>
                    <td className="py-4 px-6 text-center">$70,000–$90,000</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Pre-transplant Evaluation</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$2,000–$3,000</td>
                    <td className="py-4 px-6 text-center">$25,000–$40,000</td>
                    <td className="py-4 px-6 text-center">$15,000–$20,000</td>
                    <td className="py-4 px-6 text-center">$5,000–$7,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Post-Transplant Medication (per year)</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$3,000–$5,000</td>
                    <td className="py-4 px-6 text-center">$30,000–$40,000</td>
                    <td className="py-4 px-6 text-center">$20,000–$30,000</td>
                    <td className="py-4 px-6 text-center">$10,000–$15,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Top Liver Transplant Surgeons */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Liver Transplant Surgeons in India</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Doctor 1 */}
              <Link
                to="/doctors/dr-arvinder-singh-soin"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img
                      src="https://www.vaidam.com/sites/default/files/dr._arvinder_singh_soin-removebg-preview-min.png"
                      alt="Dr. Arvinder Singh Soin"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">38+ Years of Experience</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">
                    Dr. Arvinder Singh Soin
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      Liver Transplant Surgeon
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
                to="/doctors/dr-vivek-vij"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img
                      src="https://www.vaidam.com/sites/default/files/dr_vivek_vij.jpg"
                      alt="Dr. Vivek Vij"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">27+ Years of Experience</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">
                    Dr. Vivek Vij
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      Liver Transplant Surgeon
                    </p>
                    <p className="text-xs text-gray-500">
                      Director
                    </p>
                    <p className="text-gray-600 text-xs">
                      Fortis Hospital, Noida, India
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
                to="/doctors/dr-subhash-gupta"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img
                      src="https://www.vaidam.com/sites/default/files/dr-subhash-gupta-liver-transplant-surgeon.jpg"
                      alt="Dr. Subhash Gupta"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">38+ Years of Experience</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">
                    Dr. Subhash Gupta
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      Liver Transplant Surgeon
                    </p>
                    <p className="text-xs text-gray-500">
                      Chairman
                    </p>
                    <p className="text-gray-600 text-xs">
                      Max Super Speciality Hospital, Saket, India
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
            <h2 className="text-3xl font-bold text-center mb-12">Top Liver Transplant Hospitals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Hospital 1 */}
              <Link
                to="https://www.nilewellness.com/hospitals/blk-hospital-new-delhi"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://www.vaidam.com/sites/default/files/blk_facade-1-min.jpg"
                    alt="BLK-Max Super Speciality Hospital"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">BLK-Max Super Speciality Hospital</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">JCI & NABH Accredited</span>
                  </div>
                  <p className="text-gray-600 mb-4">New Delhi</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </Link>

              {/* Hospital 2 */}
              <Link
                to="https://www.nilewellness.com/hospitals/apollo-hospitals-tondiarpet"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://www.vaidam.com/sites/default/files/apollo_hospital_tondiarpet_list_image-min.jpg"
                    alt="Apollo Hospitals, Greams Road"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Apollo Hospitals, Greams Road</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">ISO 9001 Certified</span>
                  </div>
                  <p className="text-gray-600 mb-4">Chennai</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </Link>

              {/* Hospital 3 */}
              <Link
                to="https://www.nilewellness.com/hospitals/artemis-hospital-gurgaon"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://d1pkj1wi9lp6qx.cloudfront.net/50/files/aretmis-gurgaon.webp"
                    alt="Artemis Hospital"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Artemis Hospital</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">JCI & NABH Accredited</span>
                  </div>
                  <p className="text-gray-600 mb-4">Gurgaon</p>
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
                  <TabsTrigger value="tab2">Donor</TabsTrigger>
                  <TabsTrigger value="tab3">Recovery</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How long does the transplant process take?</h3>
                    <p className="text-gray-700">The evaluation takes 1-2 weeks, and the surgery itself takes 8-12 hours. Hospital stay is typically 2-3 weeks.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">What is the success rate of liver transplants in India?</h3>
                    <p className="text-gray-700">Top Indian centers report 90-95% one-year survival rates, comparable to international standards.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Is the liver transplant center government-approved?</h3>
                    <p className="text-gray-700">Yes, all listed centers are registered with the government and follow strict ethical guidelines.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab2" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Can I bring my own living donor from abroad?</h3>
                    <p className="text-gray-700">Yes, close relatives can be donors after appropriate evaluation and authorization committee approval.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How is the donor selected?</h3>
                    <p className="text-gray-700">Donors undergo thorough medical, psychological, and social evaluation to ensure safety and compatibility.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">What happens to the donor after surgery?</h3>
                    <p className="text-gray-700">The donor typically stays in hospital for 7-10 days. The liver regenerates within 6-8 weeks to normal size.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab3" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How long do I need to stay in India after transplant?</h3>
                    <p className="text-gray-700">Most patients need to stay for 2-3 months for close monitoring and follow-up care.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Will I need lifelong medication?</h3>
                    <p className="text-gray-700">Yes, immunosuppressants are needed lifelong, but dosages typically decrease over time.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How is post-transplant care handled after I return home?</h3>
                    <p className="text-gray-700">Indian centers provide detailed follow-up plans and coordinate with your local physicians for continued care.</p>
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
                <Phone className="mr-2 h-5 w-5" /> Speak to a Liver Specialist
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LiverTransplant;
