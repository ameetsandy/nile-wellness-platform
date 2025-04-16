
import React from "react";
import { Helmet } from "react-helmet";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bone, CheckCircle, Phone, MessageCircle } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const KneeHipReplacement = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Knee & Hip Replacement Surgery in India – Cost, Best Surgeons & Hospitals</title>
        <meta name="description" content="Get affordable and expert knee & hip replacement in India. Compare costs, top doctors, and best orthopedic hospitals. Free consultation and visa support." />
      </Helmet>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Knee & Hip Replacement Surgery in India
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
              <div className="md:w-1/2">
                <img
                  src="https://placehold.co/800x600/e2e8f0/64748b/?text=Knee+%26+Hip+Surgery"
                  alt="Senior patient with doctor after knee surgery"
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
                  <h2 className="text-2xl font-bold">Knee & Hip Replacement Surgery</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Knee and Hip Replacement Surgeries are medical procedures to replace damaged or worn-out surfaces of the knee and hip joints with artificial implants. They are most commonly performed for severe osteoarthritis or trauma that causes chronic pain and mobility issues.
                </p>
                <p className="text-gray-700 mb-4">
                  The procedures may be total or partial, depending on the damage. With robotic technology and enhanced implant design, modern joint replacement surgeries are less invasive and offer faster recovery times.
                </p>
                <div className="mt-8">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Learn More About the Procedure</Button>
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">Why Choose India?</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  India offers some of the best orthopedic care in the world at a fraction of the cost. Patients benefit from internationally trained orthopedic surgeons, JCI/NABH-accredited hospitals, advanced robotic-assisted surgery, and access to globally approved implants.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Internationally trained orthopedic surgeons with extensive experience</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>JCI & NABH accredited hospitals with state-of-the-art facilities</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Advanced robotic-assisted surgeries for better outcomes</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Cost savings of 70-90% compared to Western countries</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Dedicated recovery care including physiotherapy and mobility aids</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Cost Comparison</h2>
            
            <div className="overflow-x-auto bg-white rounded-xl shadow-md">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-nile-600 text-white">
                    <th className="py-4 px-6 text-left">Procedure</th>
                    <th className="py-4 px-6 text-center">India</th>
                    <th className="py-4 px-6 text-center">USA</th>
                    <th className="py-4 px-6 text-center">UK</th>
                    <th className="py-4 px-6 text-center">Thailand</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Total Knee Replacement</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">$4,000–$6,000</td>
                    <td className="py-4 px-6 text-center">$45,000–$70,000</td>
                    <td className="py-4 px-6 text-center">$25,000–$35,000</td>
                    <td className="py-4 px-6 text-center">$12,000–$15,000</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="py-4 px-6 font-medium">Total Hip Replacement</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">$4,500–$6,500</td>
                    <td className="py-4 px-6 text-center">$40,000–$65,000</td>
                    <td className="py-4 px-6 text-center">$24,000–$32,000</td>
                    <td className="py-4 px-6 text-center">$13,000–$16,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Partial Knee Replacement</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">$3,500–$5,000</td>
                    <td className="py-4 px-6 text-center">$35,000–$50,000</td>
                    <td className="py-4 px-6 text-center">$20,000–$30,000</td>
                    <td className="py-4 px-6 text-center">$10,000–$12,000</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="py-4 px-6 font-medium">Bilateral Knee Replacement</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">$7,500–$9,000</td>
                    <td className="py-4 px-6 text-center">$80,000–$100,000</td>
                    <td className="py-4 px-6 text-center">$50,000+</td>
                    <td className="py-4 px-6 text-center">$18,000–$22,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Robotic Knee/Hip Surgery</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">$6,000–$7,500</td>
                    <td className="py-4 px-6 text-center">$75,000+</td>
                    <td className="py-4 px-6 text-center">$40,000+</td>
                    <td className="py-4 px-6 text-center">$15,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center text-gray-600">
              <p>*Prices are approximate and may vary based on hospital, surgeon, and specific patient requirements</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-nile-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Take the Next Step?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Our medical experts are ready to review your case and recommend the best treatment options for your condition.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-lg py-6">
                <MessageCircle className="mr-2 h-5 w-5" /> Share Your Medical Reports
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-nile-600 text-lg py-6">
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

export default KneeHipReplacement;
