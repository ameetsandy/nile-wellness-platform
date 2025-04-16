
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, CircleDollarSign, Phone, MessageCircle } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const KidneyTransplant = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Kidney Transplant in India
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Safe, ethical, and advanced transplant procedures by experts
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
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://placehold.co/800x600/nile-600/white/?text=Kidney+Transplant"
                  alt="Kidney Transplant"
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
                  <Activity className="text-red-500 mr-3 h-8 w-8" />
                  <h2 className="text-2xl font-bold">What is Kidney Transplant?</h2>
                </div>
                <p className="text-gray-700">
                  A kidney transplant is a surgical procedure where a healthy kidney from a donor is placed into a patient whose kidneys are no longer functioning properly. It is the preferred treatment for end-stage kidney disease or chronic renal failure. The donor can be a living relative or a deceased person. Compared to lifelong dialysis, kidney transplants significantly improve the quality of life, mobility, and long-term survival.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <CircleDollarSign className="text-nile-600 mr-3 h-8 w-8" />
                  <h2 className="text-2xl font-bold">Why Choose India?</h2>
                </div>
                <p className="text-gray-700">
                  India is one of the most trusted destinations for kidney transplant procedures due to its advanced nephrology departments, world-renowned urologists, and strict organ transplant protocols. Indian hospitals maintain high standards in donor matching, pre-transplant evaluation, surgery, and post-operative care. The cost is up to 80% lower than Western countries, and patients benefit from fast-track transplant clearance.
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
                    <td className="py-4 px-6 font-medium">Kidney Transplant Surgery</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$13,000–$18,000</td>
                    <td className="py-4 px-6 text-center">$300,000–$400,000</td>
                    <td className="py-4 px-6 text-center">$100,000–$150,000</td>
                    <td className="py-4 px-6 text-center">$35,000–$50,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Pre-transplant Evaluation</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$1,000–$2,000</td>
                    <td className="py-4 px-6 text-center">$10,000–$20,000</td>
                    <td className="py-4 px-6 text-center">$8,000–$15,000</td>
                    <td className="py-4 px-6 text-center">$4,000–$6,000</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Post-Op Follow-up (3 mo)</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$800–$1,200</td>
                    <td className="py-4 px-6 text-center">$10,000+</td>
                    <td className="py-4 px-6 text-center">$8,000+</td>
                    <td className="py-4 px-6 text-center">$2,000+</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Immunosuppressant Drugs</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$100–$200/mo</td>
                    <td className="py-4 px-6 text-center">$1,500/mo</td>
                    <td className="py-4 px-6 text-center">$1,000/mo</td>
                    <td className="py-4 px-6 text-center">$500/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Top Kidney Transplant Surgeons */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Kidney Transplant Surgeons in India</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Doctor 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://placehold.co/300x300/nile-600/white/?text=Dr.+Guleria"
                      alt="Dr. Sandeep Guleria"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Sandeep Guleria</h3>
                  <p className="text-center text-nile-600 mb-2">Kidney Transplant Surgeon</p>
                  <p className="text-center text-gray-600 mb-4">35+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Indraprastha Apollo Hospitals</span>
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

              {/* Doctor 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://placehold.co/300x300/nile-600/white/?text=Dr.+Ahlawat"
                      alt="Dr. Rajesh Ahlawat"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Rajesh Ahlawat</h3>
                  <p className="text-center text-nile-600 mb-2">Urologist & Transplant Specialist</p>
                  <p className="text-center text-gray-600 mb-4">40+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Medanta - The Medicity</span>
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

              {/* Doctor 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://placehold.co/300x300/nile-600/white/?text=Dr.+Shroff"
                      alt="Dr. Sunil Shroff"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Sunil Shroff</h3>
                  <p className="text-center text-nile-600 mb-2">Renal Transplant Surgeon</p>
                  <p className="text-center text-gray-600 mb-4">30+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Madras Medical Mission</span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-600">Chennai</span>
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
            <h2 className="text-3xl font-bold text-center mb-12">Top Kidney Transplant Hospitals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Hospital 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/nile-600/white/?text=Apollo"
                    alt="Indraprastha Apollo Hospitals"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Indraprastha Apollo Hospitals</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">NABH & Govt-Approved Transplant Unit</span>
                  </div>
                  <p className="text-gray-600 mb-4">New Delhi</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </div>

              {/* Hospital 2 */}
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
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">JCI & NABH Accredited</span>
                  </div>
                  <p className="text-gray-600 mb-4">Gurgaon</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </div>

              {/* Hospital 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/nile-600/white/?text=Madras"
                    alt="Madras Medical Mission"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Madras Medical Mission</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Govt-Licensed Transplant Center</span>
                  </div>
                  <p className="text-gray-600 mb-4">Chennai</p>
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
                  <TabsTrigger value="tab1">Process</TabsTrigger>
                  <TabsTrigger value="tab2">Medical</TabsTrigger>
                  <TabsTrigger value="tab3">Logistics</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How long does the transplant process take?</h3>
                    <p className="text-gray-700">After donor clearance, the transplant can be scheduled within 7–10 days.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Can I bring my own donor?</h3>
                    <p className="text-gray-700">Yes, India allows living donor transplants after approval from an official authorization committee.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Is the hospital authorized for organ transplants?</h3>
                    <p className="text-gray-700">Yes. All listed hospitals are government-licensed and follow ethical transplant laws.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab2" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Is dialysis needed before the transplant?</h3>
                    <p className="text-gray-700">Yes, dialysis continues until the day of surgery and may be resumed if rejection occurs.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">What about long-term medication?</h3>
                    <p className="text-gray-700">Post-surgery, patients must take immunosuppressant drugs for life to prevent rejection.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">What is the success rate in India?</h3>
                    <p className="text-gray-700">Success rates are over 90% for living donor transplants in India's top hospitals.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab3" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Can international patients get kidney transplants in India?</h3>
                    <p className="text-gray-700">Yes, with proper documentation and donor matching, international patients are eligible.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How long will I need to stay in India?</h3>
                    <p className="text-gray-700">Most patients need to stay for about 4-6 weeks for the entire process from evaluation to post-surgery recovery.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-nile-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to explore kidney transplant options in India?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="bg-green-600 hover:bg-green-700 text-lg py-6">
                <MessageCircle className="mr-2 h-5 w-5" /> Send Your Reports via WhatsApp for Free Evaluation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-nile-600 text-lg py-6">
                <Phone className="mr-2 h-5 w-5" /> Speak to a Kidney Transplant Expert Now
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

export default KidneyTransplant;
