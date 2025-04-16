
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Shield, Phone, MessageCircle } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const BrainSurgery = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Brain Tumor Surgery in India
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  High-precision, life-saving brain surgeries with 75%+ cost savings
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
                  src="https://placehold.co/800x600/nile-600/white/?text=Brain+Surgery"
                  alt="Brain Tumor Surgery"
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
                  <Brain className="text-red-500 mr-3 h-8 w-8" />
                  <h2 className="text-2xl font-bold">What is Brain Tumor Surgery?</h2>
                </div>
                <p className="text-gray-700">
                  Brain tumor surgery is a complex neurosurgical procedure to remove abnormal growths inside the brain. Tumors can be benign or malignant and may originate in the brain (primary) or spread from other organs (secondary). Treatment involves craniotomy, endoscopic resection, stereotactic radiosurgery (like Gamma Knife), or a combination of surgery and radiation. The goal is to relieve symptoms, stop tumor growth, and restore neurological function.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <Shield className="text-nile-600 mr-3 h-8 w-8" />
                  <h2 className="text-2xl font-bold">Why Choose India?</h2>
                </div>
                <p className="text-gray-700">
                  India is a trusted destination for brain tumor surgery due to its internationally trained neurosurgeons, advanced neuro-navigation technology, and availability of Gamma Knife & CyberKnife. Hospitals here are NABH/JCI accredited and use minimally invasive approaches for faster recovery and fewer complications. With 75–85% cost savings compared to the West and robust post-op care, India offers safe, timely, and ethical brain surgery.
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
                    <td className="py-4 px-6 font-medium">Craniotomy (Open Surgery)</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$6,000–$9,000</td>
                    <td className="py-4 px-6 text-center">$60,000–$90,000</td>
                    <td className="py-4 px-6 text-center">$40,000–$70,000</td>
                    <td className="py-4 px-6 text-center">$15,000–$20,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Endoscopic Tumor Removal</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$7,000–$10,000</td>
                    <td className="py-4 px-6 text-center">$80,000+</td>
                    <td className="py-4 px-6 text-center">$50,000+</td>
                    <td className="py-4 px-6 text-center">$18,000–$25,000</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Gamma Knife Radiosurgery</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$5,000–$7,000</td>
                    <td className="py-4 px-6 text-center">$45,000–$60,000</td>
                    <td className="py-4 px-6 text-center">$35,000+</td>
                    <td className="py-4 px-6 text-center">$12,000–$15,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">MRI Brain Scan</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$200–$400</td>
                    <td className="py-4 px-6 text-center">$3,000–$5,000</td>
                    <td className="py-4 px-6 text-center">$2,500–$4,000</td>
                    <td className="py-4 px-6 text-center">$800–$1,200</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">ICU & Recovery (7–10 days)</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">Included</td>
                    <td className="py-4 px-6 text-center">Charged separately</td>
                    <td className="py-4 px-6 text-center">Charged separately</td>
                    <td className="py-4 px-6 text-center">Included</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Top Brain Surgeons */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Brain Surgeons in India</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Doctor 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://placehold.co/300x300/nile-600/white/?text=Dr.+Mishra"
                      alt="Dr. B. K. Mishra"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. B. K. Mishra</h3>
                  <p className="text-center text-nile-600 mb-2">Chief Neurosurgeon</p>
                  <p className="text-center text-gray-600 mb-4">30+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Hinduja Hospital</span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-600">Mumbai</span>
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
                      src="https://placehold.co/300x300/nile-600/white/?text=Dr.+Vaishya"
                      alt="Dr. Sandeep Vaishya"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Sandeep Vaishya</h3>
                  <p className="text-center text-nile-600 mb-2">Gamma Knife Expert</p>
                  <p className="text-center text-gray-600 mb-4">30+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Fortis Memorial Research Institute</span>
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
                      src="https://placehold.co/300x300/nile-600/white/?text=Dr.+Gupta"
                      alt="Dr. Aditya Gupta"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Aditya Gupta</h3>
                  <p className="text-center text-nile-600 mb-2">Endoscopic Brain Surgery Specialist</p>
                  <p className="text-center text-gray-600 mb-4">25+ Years Experience</p>
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
            <h2 className="text-3xl font-bold text-center mb-12">Top Hospitals for Brain Tumor Surgery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Hospital 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/nile-600/white/?text=Fortis"
                    alt="Fortis Memorial Research Institute"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Fortis Memorial Research Institute</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Gamma Knife & Advanced Neuro ICU</span>
                  </div>
                  <p className="text-gray-600 mb-4">Gurgaon</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </div>

              {/* Hospital 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/nile-600/white/?text=Hinduja"
                    alt="Hinduja Hospital"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Hinduja Hospital</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">NABH Accredited | Renowned Neurosurgery Wing</span>
                  </div>
                  <p className="text-gray-600 mb-4">Mumbai</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </div>

              {/* Hospital 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/nile-600/white/?text=Apollo"
                    alt="Apollo Hospitals"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Apollo Hospitals</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">JCI Accredited | Advanced Neuro Navigation</span>
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
                  <TabsTrigger value="tab1">Treatment</TabsTrigger>
                  <TabsTrigger value="tab2">Process</TabsTrigger>
                  <TabsTrigger value="tab3">Recovery</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Is brain tumor surgery safe in India?</h3>
                    <p className="text-gray-700">Yes, India has highly experienced neurosurgeons and advanced intra-op technologies that ensure safe outcomes.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">What is Gamma Knife and is it available in India?</h3>
                    <p className="text-gray-700">Yes. Gamma Knife is a non-invasive radiosurgery technique available in top hospitals in India.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Will I need radiation after surgery?</h3>
                    <p className="text-gray-700">Depending on the type of tumor, radiation or chemotherapy may be advised after surgery.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab2" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How many days will I need to stay?</h3>
                    <p className="text-gray-700">Usually 10–14 days including surgery, ICU, and basic rehabilitation.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Can I send my MRI reports before traveling?</h3>
                    <p className="text-gray-700">Yes. You can get a free expert opinion by sharing MRI or CT scans via WhatsApp or email.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">What happens if the tumor is not operable?</h3>
                    <p className="text-gray-700">Doctors may recommend radiation or targeted therapies based on a detailed review.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab3" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How long is the recovery process?</h3>
                    <p className="text-gray-700">Initial recovery takes 2-3 weeks, with full recovery taking 1-3 months depending on the procedure.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Will there be language or cultural barriers?</h3>
                    <p className="text-gray-700">No. Multilingual care coordinators are available for Arabic, French, Russian, and African languages.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Will I need follow-up scans?</h3>
                    <p className="text-gray-700">Yes, follow-up scans are recommended at regular intervals after treatment. These can be done in your home country.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-nile-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Need help with your brain tumor treatment?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="bg-green-600 hover:bg-green-700 text-lg py-6">
                <MessageCircle className="mr-2 h-5 w-5" /> Share MRI for Free Medical Review
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-nile-600 text-lg py-6">
                <Phone className="mr-2 h-5 w-5" /> Speak to Brain Surgery Specialist
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

export default BrainSurgery;
