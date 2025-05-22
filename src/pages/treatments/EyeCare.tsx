import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Check, Phone, MessageCircle } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const EyeCare = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Cataract Surgery in India
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Restore clear vision with advanced lens replacement surgeries
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
                  src="https://i.postimg.cc/k5jJKZJK/Eye-Care.png"
                  alt="Eye Care"
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
                    src="https://i.postimg.cc/k5jJKZJK/Eye-Care.png" 
                    alt="Eye Care" 
                    className="h-6 w-6 mr-3 object-contain"
                  />
                  <h2 className="text-2xl font-bold">What is Eye Care Treatment?</h2>
                </div>
                <p className="text-gray-700">
                  Cataract surgery is a safe and quick procedure used to remove a clouded natural lens of the eye and replace it with a clear artificial lens (IOL). This restores vision that has been impaired due to aging, diabetes, trauma, or prolonged steroid use. Modern cataract surgery is typically done under local anesthesia and takes less than 30 minutes with minimal downtime.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <img 
                    src="https://i.postimg.cc/k5jJKZJK/Eye-Care.png" 
                    alt="Eye Care" 
                    className="h-6 w-6 mr-3 object-contain"
                  />
                  <h2 className="text-2xl font-bold">Why Choose India?</h2>
                </div>
                <p className="text-gray-700">
                  India is globally recognized for high-quality, low-cost eye care. Cataract surgery in India uses advanced phacoemulsification and femto-laser-assisted techniques, performed by experienced ophthalmologists. The country offers same-day surgery, customized lens options (monofocal, multifocal, toric), and post-surgery care at a fraction of the cost in the West.
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
                    <td className="py-4 px-6 font-medium">Phaco Cataract Surgery (Monofocal)</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$300–$600</td>
                    <td className="py-4 px-6 text-center">$3,500–$5,000</td>
                    <td className="py-4 px-6 text-center">$2,500–$4,000</td>
                    <td className="py-4 px-6 text-center">$1,000–$1,800</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Cataract Surgery with Multifocal IOL</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$600–$1,000</td>
                    <td className="py-4 px-6 text-center">$4,500–$6,000</td>
                    <td className="py-4 px-6 text-center">$3,000–$5,000</td>
                    <td className="py-4 px-6 text-center">$1,500–$2,500</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Femto Laser Cataract Surgery</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$1,000–$1,500</td>
                    <td className="py-4 px-6 text-center">$6,000+</td>
                    <td className="py-4 px-6 text-center">$4,500+</td>
                    <td className="py-4 px-6 text-center">$2,500+</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Pre-op Eye Tests (OCT, Biometry)</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$50–$100</td>
                    <td className="py-4 px-6 text-center">$500+</td>
                    <td className="py-4 px-6 text-center">$300+</td>
                    <td className="py-4 px-6 text-center">$150+</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Post-op Eye Drops and Medicines</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">Included</td>
                    <td className="py-4 px-6 text-center">$150+</td>
                    <td className="py-4 px-6 text-center">$100+</td>
                    <td className="py-4 px-6 text-center">Included</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Top Cataract Surgeons */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Cataract Surgeons in India</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Doctor 1 */}
              <Link
                to="/doctors/dr-ranjana-mithal"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://www.vaidam.com/sites/default/files/dr_ranjana_mithal_-_opthalmology.jpg"
                      alt="Dr. Ranjana Mithal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Ranjana Mithal</h3>
                  <p className="text-center text-nile-600 mb-2">Ophthalmologist</p>
                  <p className="text-center text-gray-600 mb-4">38+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Indraprastha Apollo Hospital, New Delhi</span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-600">New Delhi</span>
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
                to="/doctors/dr-sudipto-pakrasi"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://www.vaidam.com/sites/default/files/dr_sudipto_pakrasi-min.jpg"
                      alt="Dr. Sudipto Pakrasi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Sudipto Pakrasi</h3>
                  <p className="text-center text-nile-600 mb-2">Ophthalmologist</p>
                  <p className="text-center text-gray-600 mb-4">35+ Years Experience</p>
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
                to="/doctors/dr-madhuri-pattiwar"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://d1ea147o02h74h.cloudfront.net/drmadhuri_pattiwar-min.jpg"
                      alt="Dr. Madhuri Pattiwar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Madhuri Pattiwar</h3>
                  <p className="text-center text-nile-600 mb-2">Ophthalmologist</p>
                  <p className="text-center text-gray-600 mb-4">32+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Apollo Hospitals, Mumbai</span>
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
              </Link>
            </div>
          </div>
        </section>

        {/* Top Eye Hospitals */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Eye Care Hospitals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Hospital 1 */}
              <Link
                to="https://www.nilewellness.com/hospitals/centre-sight-eye-hospital-sector-29-gurgaon"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://www.vaidam.com/sites/default/files/centre_for_sight_eye_hospital_sector_29_gurgaon_building-min.jpg"
                    alt="Centre for Sight Eye Hospital"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Centre for Sight Eye Hospital</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Established 1996</span>
                  </div>
                  <p className="text-gray-600 mb-4">Sector 29, Gurgaon</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </Link>

              {/* Hospital 2 */}
              <Link
                to="https://www.nilewellness.com/hospitals/pbmas-h-v-desai-eye-hospital-pune"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://www.vaidam.com/sites/default/files/pbmas_h_v_desai_eye_hospital_building-min.jpg"
                    alt="PBMA'S H V Desai Eye Hospital"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">PBMA'S H V Desai Eye Hospital</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">NABH Accredited</span>
                  </div>
                  <p className="text-gray-600 mb-4">Pune</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </Link>

              {/* Hospital 3 */}
              <Link
                to="https://www.nilewellness.com/hospitals/bharti-eye-hospital-new-delhi"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://www.vaidam.com/sites/default/files/dr-s-bharti-with-patient-1-delhi_0.jpg"
                    alt="Bharti Eye Hospital"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Bharti Eye Hospital</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">NABH Accredited</span>
                  </div>
                  <p className="text-gray-600 mb-4">New Delhi</p>
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
                  <TabsTrigger value="tab3">Planning</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Is cataract surgery painful?</h3>
                    <p className="text-gray-700">No, it's a painless day-care procedure with local anesthesia and same-day discharge.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Can I choose between monofocal and multifocal lenses?</h3>
                    <p className="text-gray-700">Yes. The choice depends on your lifestyle and vision needs. Your surgeon will guide you.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Is the surgery suitable for diabetic patients?</h3>
                    <p className="text-gray-700">Yes. Proper control of sugar levels is essential, and surgeons in India are well-versed in handling such cases.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab2" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How soon will I recover vision?</h3>
                    <p className="text-gray-700">Most patients notice clearer vision within 24–48 hours post-surgery.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Will I need glasses after cataract surgery?</h3>
                    <p className="text-gray-700">It depends on the type of lens implanted. Multifocal IOLs reduce the need for glasses significantly.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab3" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How many days should I stay in India?</h3>
                    <p className="text-gray-700">4–5 days is sufficient, including surgery and post-op review.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Are both eyes treated at once?</h3>
                    <p className="text-gray-700">Usually one eye is done first. The second eye is scheduled after 3–5 days.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-nile-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to restore your vision?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="bg-green-600 hover:bg-green-700 text-lg py-6">
                <MessageCircle className="mr-2 h-5 w-5" /> Send Eye Reports for Free Opinion
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-nile-600 text-lg py-6">
                <Phone className="mr-2 h-5 w-5" /> Speak to a Cataract Surgery Coordinator
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

export default EyeCare;
