
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ActivitySquare, CheckCircle, Phone, MessageCircle, Bone, Flag, CircleDollarSign } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Helmet } from "react-helmet";

const KneeReplacement = () => {
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
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Now
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:text-blue-700">
                    <Phone className="mr-2 h-5 w-5" /> Request Callback
                  </Button>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://placehold.co/800x600/nile-600/white/?text=Knee+Replacement"
                  alt="Knee Replacement Surgery"
                  className="w-full h-auto"
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
                  <ActivitySquare className="text-red-500 mr-3 h-8 w-8" />
                  <h2 className="text-2xl font-bold">What is Knee Replacement Surgery?</h2>
                </div>
                <p className="text-gray-700">
                  Knee Replacement Surgery is a medical procedure to replace damaged or worn-out surfaces of the knee joint with artificial implants. It is most commonly performed for severe osteoarthritis or trauma that causes chronic pain and mobility issues. The procedure may be total or partial, depending on the damage. With robotic technology and enhanced implant design, modern knee surgeries are less invasive and offer faster recovery times.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <CheckCircle className="text-nile-600 mr-3 h-8 w-8" />
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Doctor 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://placehold.co/300x300/nile-600/white/?text=Dr.+Rajgopal"
                      alt="Dr. Ashok Rajgopal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Ashok Rajgopal</h3>
                  <p className="text-center text-nile-600 mb-2">Joint Replacement Surgeon</p>
                  <p className="text-center text-gray-600 mb-4">35+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Medanta Hospital</span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-600">Gurgaon</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button className="bg-green-600 hover:bg-green-700 w-full">
                      <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                    </Button>
                    <Button variant="outline" className="border-nile-600 text-nile-600 hover:text-nile-700 w-full">
                      Request Appointment
                    </Button>
                  </div>
                </div>
              </div>

              {/* Doctor 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://placehold.co/300x300/nile-600/white/?text=Dr.+Dey"
                      alt="Dr. Ranjan Kumar Dey"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Ranjan Kumar Dey</h3>
                  <p className="text-center text-nile-600 mb-2">Orthopedic Surgeon</p>
                  <p className="text-center text-gray-600 mb-4">28+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Apollo Hospitals</span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-600">Delhi</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button className="bg-green-600 hover:bg-green-700 w-full">
                      <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                    </Button>
                    <Button variant="outline" className="border-nile-600 text-nile-600 hover:text-nile-700 w-full">
                      Request Appointment
                    </Button>
                  </div>
                </div>
              </div>

              {/* Doctor 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://placehold.co/300x300/nile-600/white/?text=Dr.+Oberoi"
                      alt="Dr. IPS Oberoi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. IPS Oberoi</h3>
                  <p className="text-center text-nile-600 mb-2">Robotic Knee Surgeon</p>
                  <p className="text-center text-gray-600 mb-4">30+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Artemis Hospital</span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-600">Gurgaon</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button className="bg-green-600 hover:bg-green-700 w-full">
                      <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                    </Button>
                    <Button variant="outline" className="border-nile-600 text-nile-600 hover:text-nile-700 w-full">
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
            <h2 className="text-3xl font-bold text-center mb-12">Top Hospitals for Knee Replacement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Hospital 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/nile-600/white/?text=Medanta"
                    alt="Medanta - The Medicity"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Medanta - The Medicity</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">NABH & JCI Accredited</span>
                  </div>
                  <p className="text-gray-600 mb-4">Gurgaon</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </div>

              {/* Hospital 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/nile-600/white/?text=Apollo"
                    alt="Apollo Hospitals"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Apollo Hospitals, Delhi</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">JCI Accredited</span>
                  </div>
                  <p className="text-gray-600 mb-4">New Delhi</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </div>

              {/* Hospital 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/nile-600/white/?text=Fortis"
                    alt="Fortis Hospital"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Fortis Hospital, Bangalore</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">NABH Accredited</span>
                  </div>
                  <p className="text-gray-600 mb-4">Bangalore</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </div>
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
            <h2 className="text-3xl font-bold mb-8">Ready to regain your mobility?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="bg-green-600 hover:bg-green-700 text-lg py-6">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us Your Reports
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-nile-600 text-lg py-6">
                <Phone className="mr-2 h-5 w-5" /> Speak to Our Medical Coordinator
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

export default KneeReplacement;
