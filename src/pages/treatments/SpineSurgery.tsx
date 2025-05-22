import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Spline, CheckCircle, Phone, MessageCircle } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const SpineSurgery = () => {
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
                  Spine Surgery in India
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Advanced spine treatments and rehabilitation at affordable costs
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
                  src="https://i.postimg.cc/qvw4HYCS/spine-surgery.png"
                  alt="Spine Surgery"
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
                    src="https://i.postimg.cc/qvw4HYCS/spine-surgery.png" 
                    alt="Spine Surgery" 
                    className="h-6 w-6 mr-3 object-contain"
                  />
                  <h2 className="text-2xl font-bold">What is Spine Surgery?</h2>
                </div>
                <p className="text-gray-700">
                  Spine surgery encompasses various procedures to treat back pain, spinal deformities, and neurological issues affecting the spine. Common spine surgeries include discectomy, laminectomy, spinal fusion, artificial disc replacement, and minimally invasive techniques. These procedures aim to relieve pressure on the spinal cord or nerves, stabilize the spine, or correct deformities to reduce pain and improve function.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <img 
                    src="https://i.postimg.cc/qvw4HYCS/spine-surgery.png" 
                    alt="Spine Surgery" 
                    className="h-6 w-6 mr-3 object-contain"
                  />
                  <h2 className="text-2xl font-bold">Why Choose India?</h2>
                </div>
                <p className="text-gray-700">
                  India is a leading destination for spine surgery with experienced neurosurgeons and orthopedic spine specialists. The country offers state-of-the-art medical facilities with advanced imaging technology and robotic assistance. Patients can save up to 80% compared to Western countries while receiving high-quality care at JCI and NABH-accredited hospitals. Comprehensive rehabilitation programs ensure optimal recovery.
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
                    <td className="py-4 px-6 font-medium">Microdiscectomy</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$3,500–$5,000</td>
                    <td className="py-4 px-6 text-center">$30,000–$50,000</td>
                    <td className="py-4 px-6 text-center">$20,000–$35,000</td>
                    <td className="py-4 px-6 text-center">$10,000–$15,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Spinal Fusion (1-2 levels)</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$6,000–$8,000</td>
                    <td className="py-4 px-6 text-center">$80,000–$100,000</td>
                    <td className="py-4 px-6 text-center">$50,000–$70,000</td>
                    <td className="py-4 px-6 text-center">$15,000–$20,000</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Artificial Disc Replacement</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$7,000–$9,000</td>
                    <td className="py-4 px-6 text-center">$90,000–$110,000</td>
                    <td className="py-4 px-6 text-center">$60,000–$80,000</td>
                    <td className="py-4 px-6 text-center">$18,000–$22,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Laminectomy</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$4,000–$6,000</td>
                    <td className="py-4 px-6 text-center">$50,000–$70,000</td>
                    <td className="py-4 px-6 text-center">$30,000–$45,000</td>
                    <td className="py-4 px-6 text-center">$12,000–$15,000</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Scoliosis Correction</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$10,000–$15,000</td>
                    <td className="py-4 px-6 text-center">$100,000–$150,000</td>
                    <td className="py-4 px-6 text-center">$70,000–$100,000</td>
                    <td className="py-4 px-6 text-center">$25,000–$35,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Top Spine Surgeons */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Spine Surgeons in India</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Doctor 1 */}
              <Link
                to="/doctors/dr-hemant-bhartiya"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://www.vaidam.com/sites/default/files/dr._hemant_bhartiya-min.jpg"
                      alt="Dr. Hemant Bhartiya"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Hemant Bhartiya</h3>
                  <p className="text-center text-nile-600 mb-2">Spine Surgeon</p>
                  <p className="text-center text-gray-600 mb-4">30+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Fortis Escorts Hospital Jaipur</span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-600">Jaipur</span>
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
              </Link>

              {/* Doctor 2 */}
              <Link
                to="/doctors/dr-vineesh-mathur-orthopedics-spine"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://www.vaidam.com/sites/default/files/dr._vineesh_mathur-removebg-preview-min.png"
                      alt="Dr. Vineesh Mathur"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Vineesh Mathur</h3>
                  <p className="text-center text-nile-600 mb-2">Spine Surgeon</p>
                  <p className="text-center text-gray-600 mb-4">36+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Medanta - The Medicity, Gurgaon</span>
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
              </Link>

              {/* Doctor 3 */}
              <Link
                to="/doctors/dr-vidyadhara-s"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://www.vaidam.com/sites/default/files/dr._vidyadhara.jpg"
                      alt="Dr. Vidyadhara S."
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Vidyadhara S.</h3>
                  <p className="text-center text-nile-600 mb-2">Spine Surgeon</p>
                  <p className="text-center text-gray-600 mb-4">25+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Manipal Hospital (Old Airport Road) Bangalore</span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-600">Bangalore</span>
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
              </Link>
            </div>
          </div>
        </section>

        {/* Top Hospitals */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Hospitals for Spine Surgery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Hospital 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/nile-600/white/?text=ISIC"
                    alt="Indian Spinal Injuries Centre"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Indian Spinal Injuries Centre</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">NABH Accredited | Spine Specialty Hospital</span>
                  </div>
                  <p className="text-gray-600 mb-4">New Delhi</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </div>

              {/* Hospital 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/nile-600/white/?text=Fortis"
                    alt="Fortis Hospital"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Fortis Hospital</h3>
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
                    src="https://placehold.co/800x600/nile-600/white/?text=Apollo"
                    alt="Apollo Hospitals"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Apollo Hospitals</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">JCI Accredited | Advanced Spine Institute</span>
                  </div>
                  <p className="text-gray-600 mb-4">Chennai & Bangalore</p>
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
                  <TabsTrigger value="tab2">Recovery</TabsTrigger>
                  <TabsTrigger value="tab3">Logistics</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How do I know if I need spine surgery?</h3>
                    <p className="text-gray-700">Surgery is typically recommended after conservative treatments have failed and you have persistent pain or neurological symptoms. Our doctors will review your reports for a precise recommendation.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Are minimally invasive options available?</h3>
                    <p className="text-gray-700">Yes, most hospitals offer minimally invasive spine surgery options which result in smaller incisions, less pain, and faster recovery.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">What diagnostic tests will I need?</h3>
                    <p className="text-gray-700">Typically MRI, CT scans, X-rays, and sometimes nerve conduction studies are required before surgery.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab2" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How long is the recovery period?</h3>
                    <p className="text-gray-700">Recovery varies by procedure: 4-6 weeks for minimally invasive procedures and 3-6 months for complex surgeries like fusions.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Will I need physiotherapy after surgery?</h3>
                    <p className="text-gray-700">Yes, rehabilitation is crucial for optimal outcomes. All hospitals offer comprehensive physiotherapy programs.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">When can I travel back home?</h3>
                    <p className="text-gray-700">Typically 10-14 days after surgery, depending on the procedure and your recovery progress.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab3" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How long will I need to stay in India?</h3>
                    <p className="text-gray-700">Most spine surgeries require a 2-3 week stay including pre-op evaluation, surgery, and initial recovery.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Can I get a second opinion on my diagnosis?</h3>
                    <p className="text-gray-700">Yes, we can arrange for a second opinion by another spine specialist if requested.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Will I get assistance with visa and accommodation?</h3>
                    <p className="text-gray-700">Yes, we provide complete support with medical visa documentation and comfortable accommodation options near the hospital.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-nile-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Need help with your spine surgery journey?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="bg-green-600 hover:bg-green-700 text-lg py-6">
                <MessageCircle className="mr-2 h-5 w-5" /> Send Reports for Free Assessment
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-nile-600 text-lg py-6">
                <Phone className="mr-2 h-5 w-5" /> Speak to a Spine Specialist
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

export default SpineSurgery;
