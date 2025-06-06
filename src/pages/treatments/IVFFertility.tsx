import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Baby, HeartHandshake, Phone, MessageCircle, Calendar, ArrowRight } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const IVFFertility = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  IVF & Fertility Treatment in India
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Global expertise, high success rates, and ethical treatment programs
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <Button className="bg-green-600 hover:bg-green-700 text-white text-base py-3 px-6 h-auto">
                    <MessageCircle className="mr-2 h-5 w-5" /> Share Reports for Free Evaluation
                  </Button>
                  <Button variant="outline" className="text-base py-3 px-6 h-auto border-blue-600 text-blue-600 hover:bg-blue-50">
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
                    src="https://i.postimg.cc/Qxpj0VNX/IVF-Fertility.png"
                    alt="IVF & Fertility"
                    className="w-full h-[300px] object-contain"
                  />
                </div>
                <span className="absolute -bottom-6 left-0 bg-nile-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg whitespace-nowrap">
                  70% Cost Savings vs Western Countries
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
                    src="https://i.postimg.cc/Qxpj0VNX/IVF-Fertility.png" 
                    alt="IVF & Fertility" 
                    className="h-6 w-6 mr-3 object-contain"
                  />
                  <h2 className="text-2xl font-bold">What is IVF & Fertility Treatment?</h2>
                </div>
                <p className="text-gray-700">
                  In Vitro Fertilization (IVF) is an assisted reproductive technique where an egg is fertilized with sperm outside the body and then implanted in the uterus. It's commonly used to treat infertility due to blocked tubes, male factor issues, advanced maternal age, PCOS, or unexplained infertility. Fertility treatments also include IUI, ICSI, egg freezing, and donor programs for eggs, sperm, or embryos. IVF can help couples, single women, and same-sex couples achieve pregnancy.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <img 
                    src="https://i.postimg.cc/Qxpj0VNX/IVF-Fertility.png" 
                    alt="IVF & Fertility" 
                    className="h-6 w-6 mr-3 object-contain"
                  />
                  <h2 className="text-2xl font-bold">Why Choose India?</h2>
                </div>
                <p className="text-gray-700">
                  India is one of the most preferred destinations for IVF due to its high success rates, internationally accredited fertility clinics, and advanced technologies like laser hatching, PGT, and ICSI. Compared to the West, IVF in India is more affordable, has minimal waiting time, and offers personalized care by expert embryologists and fertility specialists. Clinics in metro cities are equipped with global-quality labs.
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
                    <td className="py-4 px-6 font-medium">Basic IVF Cycle</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$2,000–$3,000</td>
                    <td className="py-4 px-6 text-center">$15,000–$20,000</td>
                    <td className="py-4 px-6 text-center">$10,000–$15,000</td>
                    <td className="py-4 px-6 text-center">$5,000–$8,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">ICSI (IVF with sperm injection)</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$2,500–$3,500</td>
                    <td className="py-4 px-6 text-center">$18,000+</td>
                    <td className="py-4 px-6 text-center">$12,000+</td>
                    <td className="py-4 px-6 text-center">$6,000–$9,000</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Donor Egg IVF</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$3,000–$4,000</td>
                    <td className="py-4 px-6 text-center">$25,000+</td>
                    <td className="py-4 px-6 text-center">$20,000+</td>
                    <td className="py-4 px-6 text-center">$8,000–$10,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Frozen Embryo Transfer (FET)</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$1,200–$1,800</td>
                    <td className="py-4 px-6 text-center">$5,000–$7,000</td>
                    <td className="py-4 px-6 text-center">$4,000–$6,000</td>
                    <td className="py-4 px-6 text-center">$2,500–$3,500</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Preimplantation Genetic Testing</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$1,000–$2,000</td>
                    <td className="py-4 px-6 text-center">$7,000+</td>
                    <td className="py-4 px-6 text-center">$5,000+</td>
                    <td className="py-4 px-6 text-center">$3,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Top IVF Specialists */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top IVF Specialists in India</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Doctor 1 */}
              <Link
                to="/doctors/dr-rama-joshi-gynae-oncology"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img
                      src="https://d1ea147o02h74h.cloudfront.net/dr-rama-joshi-gynae-oncology-3.jpg"
                      alt="Dr. Rama Joshi"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">39+ Years of Experience</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">
                    Dr. Rama Joshi
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      Gynaecologist and Obstetrician
                    </p>
                    <p className="text-xs text-gray-500">
                      Consultant
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
                to="/doctors/dr-veena-bhat-obstetrics-gynaecology"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img
                      src="https://www.vaidam.com/sites/default/files/veena_bhat.jpg"
                      alt="Dr. Veena Bhat"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">48+ Years of Experience</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">
                    Dr. Veena Bhat
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      Gynaecologist and Obstetrician
                    </p>
                    <p className="text-xs text-gray-500">
                      Director
                    </p>
                    <p className="text-gray-600 text-xs">
                      Artemis Hospital, Gurgaon, India
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
                to="/doctors/dr-ramya-misra"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img
                      src="https://www.vaidam.com/sites/default/files/dr_ramya_mishra.jpg"
                      alt="Dr. Ramya Mishra"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">16+ Years of Experience</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">
                    Dr. Ramya Mishra
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      Gynaecologist and Obstetrician
                    </p>
                    <p className="text-xs text-gray-500">
                      Senior Consultant
                    </p>
                    <p className="text-gray-600 text-xs">
                      Apollo Fertility Center, Lajpat Nagar, New Delhi, India
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

        {/* Top IVF & Fertility Centers */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top IVF & Fertility Centers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Hospital 1 */}
              <Link
                to="https://www.nilewellness.com/hospitals/apollo-fertility-centre-anna-nagar"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://www.vaidam.com/sites/default/files/apollo_fertility_anna_nagar_list_image-min.jpg"
                    alt="Apollo Fertility Centre"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Apollo Fertility Centre</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Specialized IVF Center</span>
                  </div>
                  <p className="text-gray-600 mb-4">Anna Nagar, Chennai</p>
                  <Button className="w-full">View Center</Button>
                </div>
              </Link>

              {/* Hospital 2 */}
              <Link
                to="https://www.nilewellness.com/hospitals/world-infertility-and-ivf-centre-new-delhi"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://www.vaidam.com/sites/default/files/world_infertility_and_ivf_centre_new_delhi_building-min.jpg"
                    alt="World Infertility and IVF Centre"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">World Infertility and IVF Centre</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Established 1970</span>
                  </div>
                  <p className="text-gray-600 mb-4">New Delhi</p>
                  <Button className="w-full">View Center</Button>
                </div>
              </Link>

              {/* Hospital 3 */}
              <Link
                to="https://www.nilewellness.com/hospitals/apollo-fertility-banjara-hills"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://www.vaidam.com/sites/default/files/main_building_apollo_fertility_banjara_hills_hyderabad.jpg"
                    alt="Apollo Fertility Banjara Hills"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Apollo Fertility Banjara Hills</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Specialized IVF Center</span>
                  </div>
                  <p className="text-gray-600 mb-4">Hyderabad</p>
                  <Button className="w-full">View Center</Button>
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
                  <TabsTrigger value="tab2">Process</TabsTrigger>
                  <TabsTrigger value="tab3">Options</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">What is the success rate of IVF in India?</h3>
                    <p className="text-gray-700">Between 55% and 75%, depending on age, cause of infertility, and treatment method.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Is IVF painful or risky?</h3>
                    <p className="text-gray-700">Mild discomfort is common, but serious risks are rare. Modern IVF is safe and well-tolerated.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Will my identity remain private?</h3>
                    <p className="text-gray-700">Yes. All patient details and treatment are confidential and handled with care.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab2" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How many days do I need to stay in India?</h3>
                    <p className="text-gray-700">10–20 days per IVF cycle. Some patients choose to freeze embryos for later transfer.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Can I do IVF if I'm over 40?</h3>
                    <p className="text-gray-700">Yes. Many patients over 40 achieve success using their own or donor eggs.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab3" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Can I use a donor egg or sperm?</h3>
                    <p className="text-gray-700">Yes. India allows donor programs for eggs, sperm, and embryos with legal and ethical guidelines.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Is surrogacy available in India?</h3>
                    <p className="text-gray-700">As of current laws, surrogacy is restricted to Indian nationals. You can still explore egg/sperm donation or embryo transfer.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-nile-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to start your fertility journey?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="bg-green-600 hover:bg-green-700 text-lg py-6">
                <MessageCircle className="mr-2 h-5 w-5" /> Share Reports for Free IVF Review – WhatsApp
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-nile-600 text-lg py-6">
                <Phone className="mr-2 h-5 w-5" /> Talk to Fertility Coordinator
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

export default IVFFertility;
