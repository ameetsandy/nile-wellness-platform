import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Microscope, Heart, Phone, MessageCircle, Calendar, ArrowRight } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const CancerTreatment = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-pink-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Cancer Treatment in India
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Advanced, personalized cancer care at affordable costs
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Now
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:text-blue-700">
                    <Phone className="mr-2 h-5 w-5" /> Call Us
                  </Button>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl max-w-[500px] mx-auto">
                <img
                  src="https://i.postimg.cc/4yDjpvHz/Cancer-Treatment.png"
                  alt="Cancer Treatment"
                  className="w-full h-[300px] object-contain"
                />
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
                    src="https://i.postimg.cc/4yDjpvHz/Cancer-Treatment.png" 
                    alt="Cancer Treatment" 
                    className="h-6 w-6 mr-3 object-contain"
                  />
                  <h2 className="text-2xl font-bold">What is Cancer Treatment?</h2>
                </div>
                <p className="text-gray-700">
                  Cancer treatment involves a range of medical procedures to control or eliminate cancer cells from the body. Depending on the type and stage, treatment may include surgery, chemotherapy, radiation therapy, immunotherapy, targeted therapy, or bone marrow transplant. Oncologists (cancer specialists) work in multidisciplinary teams to offer patient-specific treatment plans, focusing on cure, remission, or symptom control.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <img 
                    src="https://i.postimg.cc/4yDjpvHz/Cancer-Treatment.png" 
                    alt="Cancer Treatment" 
                    className="h-6 w-6 mr-3 object-contain"
                  />
                  <h2 className="text-2xl font-bold">Why Choose India?</h2>
                </div>
                <p className="text-gray-700">
                  India is one of the top global destinations for cancer care, with state-of-the-art oncology centers, advanced diagnostic labs, robotic surgery, and internationally trained oncologists. Patients benefit from 24x7 support, shorter waiting times, personalized treatment plans, and costs up to 80% lower than Western countries. Hospitals in India follow global protocols and are equipped with PET-CT, CyberKnife, and bone marrow transplant units.
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
                    <td className="py-4 px-6 font-medium">Chemotherapy (per cycle)</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$400–$800</td>
                    <td className="py-4 px-6 text-center">$3,000–$5,000</td>
                    <td className="py-4 px-6 text-center">$2,500–$4,000</td>
                    <td className="py-4 px-6 text-center">$1,500–$2,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Radiation Therapy (full cycle)</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$2,000–$3,500</td>
                    <td className="py-4 px-6 text-center">$25,000–$40,000</td>
                    <td className="py-4 px-6 text-center">$20,000–$35,000</td>
                    <td className="py-4 px-6 text-center">$6,000–$9,000</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Cancer Surgery</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$3,000–$5,500</td>
                    <td className="py-4 px-6 text-center">$30,000–$60,000</td>
                    <td className="py-4 px-6 text-center">$25,000–$45,000</td>
                    <td className="py-4 px-6 text-center">$8,000–$12,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Bone Marrow Transplant</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$20,000–$30,000</td>
                    <td className="py-4 px-6 text-center">$150,000+</td>
                    <td className="py-4 px-6 text-center">$100,000+</td>
                    <td className="py-4 px-6 text-center">$40,000+</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">PET-CT Scan</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$400–$600</td>
                    <td className="py-4 px-6 text-center">$4,000–$6,000</td>
                    <td className="py-4 px-6 text-center">$3,500–$5,000</td>
                    <td className="py-4 px-6 text-center">$1,200–$1,800</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Top Oncologists */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Oncologists in India</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Doctor 1 */}
              <Link
                to="/doctors/dr-vinod-raina-medical-oncology"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img
                      src="https://www.vaidam.com/sites/default/files/dr._vinod_raina-min.png"
                      alt="Dr. Vinod Raina"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">40+ Exp</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">
                    Dr. Vinod Raina
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      Medical Oncologist
                    </p>
                    <p className="text-xs text-gray-500">
                      Director
                    </p>
                    <p className="text-gray-600 text-xs">
                      Fortis Memorial Research Institute, Gurgaon, India
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
                to="/doctors/dr-sameer-kaul"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img
                      src="https://www.vaidam.com/sites/default/files/dr._kaul-min.jpg"
                      alt="Dr. Sameer Kaul"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">30+ Exp</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">
                    Dr. Sameer Kaul
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      Medical Oncologist
                    </p>
                    <p className="text-xs text-gray-500">
                      Senior Consultant
                    </p>
                    <p className="text-gray-600 text-xs">
                      Indraprastha Apollo Hospital, New Delhi, India
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
                to="/doctors/dr-hari-goyal"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img
                      src="https://www.vaidam.com/sites/default/files/dr_hari_goyal-min.jpg"
                      alt="Dr. Hari Goyal"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">29+ Exp</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">
                    Dr. Hari Goyal
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      Medical Oncologist
                    </p>
                    <p className="text-xs text-gray-500">
                      Senior Consultant
                    </p>
                    <p className="text-gray-600 text-xs">
                      BLK-Max Super Speciality Hospital, New Delhi, India
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
            <h2 className="text-3xl font-bold text-center mb-12">Top Cancer Hospitals in India</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Hospital 1 */}
              <Link
                to="/hospitals/fortis-memorial-research-institute-gurgaon"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">JCI, NABH Accredited | 310 Beds</span>
                  </div>
                  <p className="text-gray-600 mb-4">Gurgaon</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </Link>

              {/* Hospital 2 */}
              <Link
                to="/hospitals/apollo-cancer-hospital-chennai"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://www.vaidam.com/sites/default/files/apollo_cancer_hospital_chennai_list_image-min.jpg"
                    alt="Apollo Cancer Hospital"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Apollo Cancer Hospital</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">NABH Accredited | 300 Beds</span>
                  </div>
                  <p className="text-gray-600 mb-4">Chennai</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </Link>

              {/* Hospital 3 */}
              <Link
                to="/hospitals/apollo-hospitals-hyderabad"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://d1pkj1wi9lp6qx.cloudfront.net/50/files/apollo_hospitals_jubilee_hills_hyderabad_building1-min.webp"
                    alt="Apollo Hospitals, Jubilee Hills"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Apollo Hospitals, Jubilee Hills</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">JCI Accredited | 550 Beds</span>
                  </div>
                  <p className="text-gray-600 mb-4">Hyderabad</p>
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
                  <TabsTrigger value="tab1">Treatment</TabsTrigger>
                  <TabsTrigger value="tab2">Stay & Support</TabsTrigger>
                  <TabsTrigger value="tab3">Medical</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How long do I need to stay in India for cancer treatment?</h3>
                    <p className="text-gray-700">Depends on the treatment – surgery: 2–3 weeks, chemotherapy: 2–6 months (in cycles).</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Is it safe to undergo chemotherapy in India?</h3>
                    <p className="text-gray-700">Absolutely. Hospitals follow global safety and infection-control protocols.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Will I be treated by a team of specialists?</h3>
                    <p className="text-gray-700">Yes. Indian hospitals follow a multidisciplinary approach involving surgeons, oncologists, radiologists, and nutritionists.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab2" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Can a family member stay with me?</h3>
                    <p className="text-gray-700">Yes. Most hospitals allow one attendant and we help book nearby hotel stays too.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Will my reports be kept confidential?</h3>
                    <p className="text-gray-700">Yes. All patient data is protected under strict confidentiality agreements.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab3" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Can I get the same medicine brands as in the US/UK?</h3>
                    <p className="text-gray-700">Yes. Most global chemo brands and generics are available at a lower cost.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Can I get a second opinion before starting treatment?</h3>
                    <p className="text-gray-700">Yes. Free second opinion is available with every report submission.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Is bone marrow transplant available for my condition?</h3>
                    <p className="text-gray-700">Yes. India offers both autologous and allogeneic bone marrow transplants with international success rates.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-nile-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Need help with your cancer treatment journey?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="bg-green-600 hover:bg-green-700 text-lg py-6">
                <MessageCircle className="mr-2 h-5 w-5" /> Send Reports for Free Opinion on WhatsApp
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-nile-600 text-lg py-6">
                <Phone className="mr-2 h-5 w-5" /> Speak to Our Oncology Expert
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

export default CancerTreatment;
