import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smile, CheckCircle, Phone, MessageCircle } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const DentalImplants = () => {
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
                  Dental Implants in India
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Restore your smile with world-class implant dentistry
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:text-blue-700">
                    <Phone className="mr-2 h-5 w-5" /> Book a Call
                  </Button>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl max-w-[500px] mx-auto">
                <img
                  src="https://i.postimg.cc/fRNRNmqt/Dental-Implants.png"
                  alt="Dental Implants"
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
                    src="https://i.postimg.cc/fRNRNmqt/Dental-Implants.png" 
                    alt="Dental Implants" 
                    className="h-6 w-6 mr-3 object-contain"
                  />
                  <h2 className="text-2xl font-bold">What are Dental Implants?</h2>
                </div>
                <p className="text-gray-700">
                  Dental implants are permanent, artificial tooth roots placed into the jawbone to replace missing teeth. They provide a stable foundation for fixed or removable crowns, bridges, or dentures. The implant integrates with the bone, restoring natural appearance and function. Common types include single-tooth implants, all-on-4/6 full-mouth implants, and zygomatic implants for patients with less bone.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <img 
                    src="https://i.postimg.cc/fRNRNmqt/Dental-Implants.png" 
                    alt="Dental Implants" 
                    className="h-6 w-6 mr-3 object-contain"
                  />
                  <h2 className="text-2xl font-bold">Why Choose India?</h2>
                </div>
                <p className="text-gray-700">
                  India is a global leader in affordable and high-quality dental implants. Clinics are equipped with the latest 3D imaging, CAD/CAM design, and global implant brands (Nobel Biocare, Straumann, Osstem). Indian dentists are internationally trained and follow strict sterilization protocols. Whether you need one implant or full-mouth restoration, you can save up to 80% compared to the West—without compromising on quality or aesthetics.
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
                    <td className="py-4 px-6 font-medium">Single Tooth Implant</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$350–$700</td>
                    <td className="py-4 px-6 text-center">$3,000–$5,000</td>
                    <td className="py-4 px-6 text-center">$2,500–$4,000</td>
                    <td className="py-4 px-6 text-center">$1,000–$1,500</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Full Mouth (All-on-4 per jaw)</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$3,000–$5,000</td>
                    <td className="py-4 px-6 text-center">$25,000–$35,000</td>
                    <td className="py-4 px-6 text-center">$20,000+</td>
                    <td className="py-4 px-6 text-center">$7,000–$10,000</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Full Mouth (All-on-6)</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$5,000–$7,000</td>
                    <td className="py-4 px-6 text-center">$30,000–$45,000</td>
                    <td className="py-4 px-6 text-center">$25,000+</td>
                    <td className="py-4 px-6 text-center">$9,000+</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Bone Grafting (if needed)</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$300–$600</td>
                    <td className="py-4 px-6 text-center">$3,000+</td>
                    <td className="py-4 px-6 text-center">$2,500+</td>
                    <td className="py-4 px-6 text-center">$1,000+</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">CBCT & 3D Scan</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">Included</td>
                    <td className="py-4 px-6 text-center">$400+</td>
                    <td className="py-4 px-6 text-center">$300+</td>
                    <td className="py-4 px-6 text-center">$150+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Top Dental Implant Experts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Dental Implant Experts in India</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Doctor 1 */}
              <Link
                to="/doctors/dr-anjana-satyajit"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://www.vaidam.com/sites/default/files/dr._anjana_satyajit.jpg"
                      alt="Dr. Anjana Satyajit"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Anjana Satyajit</h3>
                  <p className="text-center text-nile-600 mb-2">Dentist</p>
                  <p className="text-center text-gray-600 mb-4">29+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Artemis Hospital, Gurgaon</span>
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

              {/* Doctor 2 */}
              <Link
                to="/doctors/dr-ravi-s-batra"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://www.vaidam.com/sites/default/files/dr._ravi_s._batra-min.jpg"
                      alt="Dr. Ravi S. Batra"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Ravi S. Batra</h3>
                  <p className="text-center text-nile-600 mb-2">Dentist</p>
                  <p className="text-center text-gray-600 mb-4">22+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Fortis Memorial Research Institute, Gurgaon</span>
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
                to="/doctors/dr-rajni-sharma"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://www.vaidam.com/sites/default/files/dr._rajni_sharma.jpg"
                      alt="Dr. Rajni Sharma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Rajni Sharma</h3>
                  <p className="text-center text-nile-600 mb-2">Dentist</p>
                  <p className="text-center text-gray-600 mb-4">17+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Fortis Memorial Research Institute, Gurgaon</span>
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
            </div>
          </div>
        </section>

        {/* Top Dental Clinics */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Dental Clinics for Implants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Clinic 1 */}
              <Link
                to="https://www.nilewellness.com/hospitals/cosmetic-dental-clinic-bangalore"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://www.vaidam.com/sites/default/files/cosmetic_dental_clinic.jpg"
                    alt="Cosmetic Dental Clinic"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Cosmetic Dental Clinic</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Established 2001</span>
                  </div>
                  <p className="text-gray-600 mb-4">Bangalore</p>
                  <Button className="w-full">View Clinic</Button>
                </div>
              </Link>

              {/* Clinic 2 */}
              <Link
                to="https://www.nilewellness.com/hospitals/dental-brasstacks-gurgaon"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://www.vaidam.com/sites/default/files/dental-brass-tacks-gurgaon.jpg"
                    alt="Dental Brasstacks"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Dental Brasstacks</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Established 2016</span>
                  </div>
                  <p className="text-gray-600 mb-4">Gurgaon</p>
                  <Button className="w-full">View Clinic</Button>
                </div>
              </Link>

              {/* Clinic 3 */}
              <Link
                to="https://www.nilewellness.com/hospitals/dental-square-mumbai"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://www.vaidam.com/sites/default/files/dental_square_mumbai-home-min.jpg"
                    alt="Dental Square"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Dental Square</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Specialized Dental Center</span>
                  </div>
                  <p className="text-gray-600 mb-4">Mumbai</p>
                  <Button className="w-full">View Clinic</Button>
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
                  <TabsTrigger value="tab2">Procedure</TabsTrigger>
                  <TabsTrigger value="tab3">Post Care</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Is dental implant surgery painful?</h3>
                    <p className="text-gray-700">No. The procedure is done under local anesthesia or sedation and is virtually painless.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Can I get full-mouth implants done in one trip?</h3>
                    <p className="text-gray-700">Yes, using all-on-4 or all-on-6 techniques with same-day teeth, depending on case.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Are dental implants safe for diabetics or older adults?</h3>
                    <p className="text-gray-700">Yes, with proper blood sugar control and evaluation, they are safe and successful.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab2" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How many visits are needed?</h3>
                    <p className="text-gray-700">Typically 2 trips: one for implant placement and one for crown after 3–6 months. Immediate loading options are also available.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">What materials are used in implants?</h3>
                    <p className="text-gray-700">Titanium or Zirconia implants with porcelain or zirconium crowns.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab3" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Are follow-ups possible once I return to my country?</h3>
                    <p className="text-gray-700">Yes. Online consultations and imaging guidance are available for international patients.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Will the clinic assist with travel and stay?</h3>
                    <p className="text-gray-700">Yes. Leading dental centers help with hotel bookings and local transportation.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-nile-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to restore your smile?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="bg-green-600 hover:bg-green-700 text-lg py-6">
                <MessageCircle className="mr-2 h-5 w-5" /> Send Dental X-Rays for Free Treatment Plan
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-nile-600 text-lg py-6">
                <Phone className="mr-2 h-5 w-5" /> Call a Dental Care Coordinator
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

export default DentalImplants;
