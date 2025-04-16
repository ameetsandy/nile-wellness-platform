
import React from "react";
import { Helmet } from "react-helmet";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MessageCircle, Activity, Layers } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const KidneyLiverTransplant = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Kidney & Liver Transplant in India – Cost, Best Surgeons & Hospitals</title>
        <meta name="description" content="Get affordable kidney and liver transplant in India. Compare costs, top doctors, and best hospitals. Free consultation and visa support." />
      </Helmet>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-50 to-teal-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Kidney & Liver Transplant in India
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Life-saving transplant procedures by experienced surgeons at affordable costs
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
                  src="https://placehold.co/800x600/e6f9ef/3a815d/?text=Transplant+Surgery"
                  alt="Transplant surgery team"
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
                    <Activity className="h-6 w-6 text-green-600" />
                    <h2 className="text-2xl font-bold">Transplant Procedures</h2>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Kidney and Liver Transplant surgeries are life-saving procedures for patients with end-stage organ failure. These complex surgeries involve replacing a diseased organ with a healthy one from a living or deceased donor.
                </p>
                <p className="text-gray-700 mb-4">
                  India has emerged as a global leader in organ transplantation with exceptional success rates comparable to the best centers worldwide, but at a fraction of the cost.
                </p>
                <div className="mt-8">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">Learn More About Transplantation</Button>
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <Layers className="h-6 w-6 text-blue-600" />
                    <h2 className="text-2xl font-bold">Why Choose India?</h2>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  India offers internationally recognized transplant programs with comprehensive pre and post-transplant care at a significantly lower cost than Western countries.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Internationally trained transplant surgeons and specialists</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>JCI & NABH accredited transplant centers with state-of-the-art facilities</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>High success rates comparable to leading global centers</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Cost savings of 80-90% compared to US and European countries</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Comprehensive pre and post-transplant care and follow-up</p>
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
                  <tr className="bg-green-600 text-white">
                    <th className="py-4 px-6 text-left">Procedure</th>
                    <th className="py-4 px-6 text-center">India</th>
                    <th className="py-4 px-6 text-center">USA</th>
                    <th className="py-4 px-6 text-center">UK</th>
                    <th className="py-4 px-6 text-center">Singapore</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Kidney Transplant</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">$12,000–$18,000</td>
                    <td className="py-4 px-6 text-center">$150,000–$300,000</td>
                    <td className="py-4 px-6 text-center">$80,000–$120,000</td>
                    <td className="py-4 px-6 text-center">$50,000–$80,000</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="py-4 px-6 font-medium">Liver Transplant</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">$30,000–$45,000</td>
                    <td className="py-4 px-6 text-center">$300,000–$800,000</td>
                    <td className="py-4 px-6 text-center">$200,000–$300,000</td>
                    <td className="py-4 px-6 text-center">$150,000–$250,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Pre & Post Operative Care (1 month)</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">$5,000–$8,000</td>
                    <td className="py-4 px-6 text-center">$30,000–$60,000</td>
                    <td className="py-4 px-6 text-center">$20,000–$40,000</td>
                    <td className="py-4 px-6 text-center">$15,000–$30,000</td>
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
        <section className="bg-green-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Transplant Consultation?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Our transplant specialists can review your medical reports and provide a comprehensive treatment plan tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-green-600 hover:bg-gray-100 text-lg py-6">
                <MessageCircle className="mr-2 h-5 w-5" /> Share Your Medical Reports
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 text-lg py-6">
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

export default KidneyLiverTransplant;
