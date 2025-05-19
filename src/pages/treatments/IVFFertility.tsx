import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Baby, HeartHandshake, Phone, MessageCircle } from "lucide-react";
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
                  src="https://i.postimg.cc/Qxpj0VNX/IVF-Fertility.png"
                  alt="IVF & Fertility"
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

        {/* Top Fertility Specialists */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Fertility Specialists in India</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Doctor 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://placehold.co/300x300/nile-600/white/?text=Dr.+Palshetkar"
                      alt="Dr. Nandita Palshetkar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Nandita Palshetkar</h3>
                  <p className="text-center text-nile-600 mb-2">IVF & Reproductive Medicine Expert</p>
                  <p className="text-center text-gray-600 mb-4">30+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">D.Y. Patil IVF Centre</span>
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
                      src="https://placehold.co/300x300/nile-600/white/?text=Dr.+Parikh"
                      alt="Dr. Firuza Parikh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Firuza Parikh</h3>
                  <p className="text-center text-nile-600 mb-2">Pioneer in IVF in India</p>
                  <p className="text-center text-gray-600 mb-4">35+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Jaslok Hospital</span>
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

              {/* Doctor 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://placehold.co/300x300/nile-600/white/?text=Dr.+Malik"
                      alt="Dr. Sonia Malik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Sonia Malik</h3>
                  <p className="text-center text-nile-600 mb-2">Fertility & IVF Specialist</p>
                  <p className="text-center text-gray-600 mb-4">28+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Max Healthcare</span>
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
            </div>
          </div>
        </section>

        {/* Top IVF Clinics */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top IVF Clinics & Hospitals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Clinic 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/nile-600/white/?text=Nova+IVF"
                    alt="Nova IVF Fertility"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Nova IVF Fertility</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Pan-India chain with high success rates</span>
                  </div>
                  <p className="text-gray-600 mb-4">Delhi, Mumbai, Chennai, Bangalore</p>
                  <Button className="w-full">View Clinic</Button>
                </div>
              </div>

              {/* Clinic 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/nile-600/white/?text=Max"
                    alt="Max Multi Speciality Centre"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Max Multi Speciality Centre</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">NABH Accredited | Fertility Wing</span>
                  </div>
                  <p className="text-gray-600 mb-4">Delhi</p>
                  <Button className="w-full">View Clinic</Button>
                </div>
              </div>

              {/* Clinic 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/nile-600/white/?text=Jaslok"
                    alt="Jaslok FertilTree"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Jaslok FertilTree</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Advanced IVF Lab | International patients</span>
                  </div>
                  <p className="text-gray-600 mb-4">Mumbai</p>
                  <Button className="w-full">View Clinic</Button>
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
