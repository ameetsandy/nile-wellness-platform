
import React from "react";
import { Helmet } from "react-helmet";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MessageCircle, Smile, Eye } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const DentalEyeCare = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Dental & Eye Care in India – Cost, Best Specialists & Hospitals</title>
        <meta name="description" content="Get affordable dental and eye care treatments in India. Compare costs, top specialists, and best hospitals. Free consultation and visa support." />
      </Helmet>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-50 to-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Dental & Eye Care in India
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  World-class dental and ophthalmic treatments at affordable prices
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
              <div className="md:w-1/2">
                <img
                  src="https://placehold.co/800x600/e0f2fe/0ea5e9/?text=Dental+%26+Eye+Care"
                  alt="Dental and eye care treatments"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <Smile className="h-6 w-6 text-cyan-600" />
                    <h2 className="text-2xl font-bold">Dental Care</h2>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  India offers a comprehensive range of dental treatments including implants, veneers, crowns, bridges, root canals, and full mouth rehabilitation. Using the latest techniques and technologies, Indian dental specialists provide high-quality care that matches international standards.
                </p>
                <p className="text-gray-700 mb-4">
                  The combination of world-class dental facilities, experienced specialists, and cost-effective treatments makes India an ideal destination for dental tourism.
                </p>
                <div className="mt-8">
                  <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">Learn More About Dental Treatments</Button>
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <Eye className="h-6 w-6 text-blue-600" />
                    <h2 className="text-2xl font-bold">Eye Care</h2>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  India is home to world-renowned eye care centers offering advanced treatments for cataracts, glaucoma, retinal diseases, corneal disorders, and refractive errors. With state-of-the-art technology and internationally trained ophthalmologists, patients receive exceptional care at a fraction of Western costs.
                </p>
                <p className="text-gray-700 mb-4">
                  From routine eye exams to complex surgeries, Indian eye care facilities provide comprehensive services in modern, sterile environments.
                </p>
                <div className="mt-8">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Learn More About Eye Treatments</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose India for Dental & Eye Care?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Significant Cost Savings</h3>
                    <p className="text-gray-600">Save 60-80% on dental and eye procedures compared to US, UK, and European prices.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Internationally Trained Specialists</h3>
                    <p className="text-gray-600">Access to dentists and ophthalmologists trained at prestigious global institutions.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
                    <p className="text-gray-600">Latest equipment and techniques including digital dentistry and laser eye surgery.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Minimal Waiting Time</h3>
                    <p className="text-gray-600">Immediate appointments and procedures without long wait lists.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Care</h3>
                    <p className="text-gray-600">Complete treatment packages including follow-up care and accommodation.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tourism Opportunity</h3>
                    <p className="text-gray-600">Combine your treatment with a memorable vacation in India's diverse cultural landscape.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Cost Comparison</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="overflow-x-auto bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-bold p-4 bg-cyan-600 text-white rounded-t-xl">Dental Procedures</h3>
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-3 px-4 text-left">Procedure</th>
                      <th className="py-3 px-4 text-center">India</th>
                      <th className="py-3 px-4 text-center">USA</th>
                      <th className="py-3 px-4 text-center">UK</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Dental Implant (single)</td>
                      <td className="py-3 px-4 text-center text-green-600 font-semibold">$500–$800</td>
                      <td className="py-3 px-4 text-center">$3,000–$4,500</td>
                      <td className="py-3 px-4 text-center">$2,000–$3,000</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Full Mouth Rehabilitation</td>
                      <td className="py-3 px-4 text-center text-green-600 font-semibold">$5,000–$8,000</td>
                      <td className="py-3 px-4 text-center">$25,000–$45,000</td>
                      <td className="py-3 px-4 text-center">$18,000–$30,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Porcelain Crown</td>
                      <td className="py-3 px-4 text-center text-green-600 font-semibold">$200–$300</td>
                      <td className="py-3 px-4 text-center">$1,000–$1,500</td>
                      <td className="py-3 px-4 text-center">$800–$1,200</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Root Canal Treatment</td>
                      <td className="py-3 px-4 text-center text-green-600 font-semibold">$100–$200</td>
                      <td className="py-3 px-4 text-center">$700–$1,200</td>
                      <td className="py-3 px-4 text-center">$500–$900</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="overflow-x-auto bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-bold p-4 bg-blue-600 text-white rounded-t-xl">Eye Care Procedures</h3>
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-3 px-4 text-left">Procedure</th>
                      <th className="py-3 px-4 text-center">India</th>
                      <th className="py-3 px-4 text-center">USA</th>
                      <th className="py-3 px-4 text-center">UK</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Cataract Surgery (per eye)</td>
                      <td className="py-3 px-4 text-center text-green-600 font-semibold">$700–$1,500</td>
                      <td className="py-3 px-4 text-center">$3,500–$5,000</td>
                      <td className="py-3 px-4 text-center">$2,500–$4,000</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">LASIK (both eyes)</td>
                      <td className="py-3 px-4 text-center text-green-600 font-semibold">$800–$1,500</td>
                      <td className="py-3 px-4 text-center">$4,000–$6,000</td>
                      <td className="py-3 px-4 text-center">$3,000–$5,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Glaucoma Surgery</td>
                      <td className="py-3 px-4 text-center text-green-600 font-semibold">$1,000–$2,000</td>
                      <td className="py-3 px-4 text-center">$6,000–$10,000</td>
                      <td className="py-3 px-4 text-center">$4,000–$7,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Retinal Procedures</td>
                      <td className="py-3 px-4 text-center text-green-600 font-semibold">$1,500–$3,000</td>
                      <td className="py-3 px-4 text-center">$7,000–$12,000</td>
                      <td className="py-3 px-4 text-center">$5,000–$9,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-8 text-center text-gray-600">
              <p>*Prices are approximate and may vary based on hospital, specialist, and specific patient requirements</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Smile or Vision?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Our dental and eye care specialists can provide a personalized treatment plan to meet your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-6">
                <MessageCircle className="mr-2 h-5 w-5" /> Share Your Medical Reports
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg py-6">
                <Phone className="mr-2 h-5 w-5" /> Schedule a Free Consultation
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

export default DentalEyeCare;
