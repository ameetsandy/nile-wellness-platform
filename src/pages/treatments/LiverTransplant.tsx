
import React from 'react';
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MessageCircle, Phone, ArrowRight, Star, Building, Users, CheckCircle, InfoIcon, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const LiverTransplant = () => {
  const openWhatsApp = () => {
    const phoneNumber = "911234567890";
    const message = "Hello, I'd like to get a free opinion on liver transplant options in India.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const callNow = () => {
    window.location.href = "tel:+911234567890";
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-medical-50 to-nile-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  Liver Transplant in India
                  <span className="block text-nile-600 mt-2">High success rates, ethical transplant programs, and expert care</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Life-saving liver transplants at 70-80% lower cost than Western countries with internationally trained surgeons and advanced care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-nile-600 hover:bg-nile-700"
                    onClick={openWhatsApp}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> Send Liver Reports for Free Opinion
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-nile-600 text-nile-600 hover:bg-nile-50"
                    onClick={callNow}
                  >
                    <Phone className="mr-2 h-4 w-4" /> Speak to a Liver Transplant Advisor
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb" 
                  alt="Liver transplant surgery in India" 
                  className="rounded-lg shadow-xl w-full object-cover h-[400px]"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* What is & Why Choose */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">What is Liver Transplant?</h2>
                <p className="text-gray-700 mb-6">
                  Liver Transplant is a life-saving surgery that replaces a damaged or failing liver with a healthy 
                  one from a donor. It is primarily performed for patients with liver cirrhosis, liver cancer, or 
                  acute liver failure.
                </p>
                <p className="text-gray-700 mb-6">
                  There are two types: living donor transplant (where a portion of a healthy liver is used) and 
                  deceased donor transplant (entire liver from a brain-dead donor). Post-transplant, the liver 
                  regenerates and restores full function within weeks.
                </p>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <h3 className="font-medium text-lg mb-2">Living Donor Transplant</h3>
                    <p className="text-gray-600 text-sm">A portion of liver from a living donor (usually a relative) is transplanted</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <h3 className="font-medium text-lg mb-2">Deceased Donor Transplant</h3>
                    <p className="text-gray-600 text-sm">Entire liver from a brain-dead donor is transplanted to the recipient</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <h3 className="font-medium text-lg mb-2">Pediatric Liver Transplant</h3>
                    <p className="text-gray-600 text-sm">Specialized liver transplant for infants and children with liver failure</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <h3 className="font-medium text-lg mb-2">ABO-Incompatible Transplant</h3>
                    <p className="text-gray-600 text-sm">Advanced procedure allowing transplant despite blood type mismatch</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Why Choose India?</h2>
                <p className="text-gray-700 mb-6">
                  India is one of the leading destinations globally for liver transplants, thanks to internationally 
                  trained surgeons, high-volume liver transplant centers, ethical donor programs, and advanced critical 
                  care infrastructure.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-nile-50 p-2 rounded-full mr-4">
                      <CheckCircle className="h-5 w-5 text-nile-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">70-80% Cost Savings</h3>
                      <p className="text-sm text-gray-600">Compared to US, UK, and European prices with the same quality</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nile-50 p-2 rounded-full mr-4">
                      <CheckCircle className="h-5 w-5 text-nile-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">World-Renowned Transplant Surgeons</h3>
                      <p className="text-sm text-gray-600">Teams trained at leading global institutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nile-50 p-2 rounded-full mr-4">
                      <CheckCircle className="h-5 w-5 text-nile-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">High-Volume Transplant Centers</h3>
                      <p className="text-sm text-gray-600">Some centers perform 300+ liver transplants annually</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nile-50 p-2 rounded-full mr-4">
                      <CheckCircle className="h-5 w-5 text-nile-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Ethical Donor Programs</h3>
                      <p className="text-sm text-gray-600">Government-regulated transplant protocols and approvals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nile-50 p-2 rounded-full mr-4">
                      <CheckCircle className="h-5 w-5 text-nile-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Comprehensive Support</h3>
                      <p className="text-sm text-gray-600">Assistance with visas, accommodation, and post-surgery care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Cost Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
              Cost Comparison: Save Up to 80% on Liver Transplant
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="bg-nile-600 text-white">
                    <th className="px-6 py-4 text-left">Procedure</th>
                    <th className="px-6 py-4 text-left">India</th>
                    <th className="px-6 py-4 text-left">USA</th>
                    <th className="px-6 py-4 text-left">UK</th>
                    <th className="px-6 py-4 text-left">Thailand</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Liver Transplant (Living Donor)</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">$28,000–$35,000</td>
                    <td className="px-6 py-4 text-gray-500">$600,000+</td>
                    <td className="px-6 py-4 text-gray-500">$300,000+</td>
                    <td className="px-6 py-4 text-gray-500">$80,000–$100,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Liver Transplant (Deceased Donor)</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">$30,000–$40,000</td>
                    <td className="px-6 py-4 text-gray-500">$800,000+</td>
                    <td className="px-6 py-4 text-gray-500">$350,000+</td>
                    <td className="px-6 py-4 text-gray-500">$90,000+</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Pre-Transplant Evaluation</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">$1,200–$2,000</td>
                    <td className="px-6 py-4 text-gray-500">$20,000+</td>
                    <td className="px-6 py-4 text-gray-500">$15,000+</td>
                    <td className="px-6 py-4 text-gray-500">$4,000+</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">ICU & Hospital Stay (3–4 weeks)</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Included</td>
                    <td className="px-6 py-4 text-gray-500">Charged separately</td>
                    <td className="px-6 py-4 text-gray-500">Charged separately</td>
                    <td className="px-6 py-4 text-gray-500">Included</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Post-Transplant Medication (Monthly)</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">$100–$200</td>
                    <td className="px-6 py-4 text-gray-500">$2,000/mo</td>
                    <td className="px-6 py-4 text-gray-500">$1,500/mo</td>
                    <td className="px-6 py-4 text-gray-500">$600/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 text-center text-sm text-gray-500">
              * Costs are approximate and may vary based on hospital, complexity, and individual patient requirements.
            </div>
          </div>
        </section>
        
        {/* Top Liver Transplant Surgeons */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
              Top Liver Transplant Surgeons in India
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      <Heart className="h-10 w-10 text-nile-600" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-semibold">Dr. Arvinder Singh Soin</h3>
                      <p className="text-gray-600 text-sm">Liver Transplant Surgeon</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-700">Medanta - The Medicity, Gurgaon</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-700">30+ Years Experience</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-amber-500 mr-2" />
                      <span className="text-sm text-gray-700">3,500+ Liver Transplants Performed</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-nile-600 hover:bg-nile-700"
                      onClick={openWhatsApp}
                    >
                      <MessageCircle className="h-4 w-4 mr-1" /> WhatsApp
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-nile-600 text-nile-600 hover:bg-nile-50"
                      onClick={callNow}
                    >
                      Request Appointment
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      <Heart className="h-10 w-10 text-nile-600" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-semibold">Dr. Mohamed Rela</h3>
                      <p className="text-gray-600 text-sm">Pioneer in Liver Transplants</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-700">Rela Institute & Medical Centre, Chennai</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-700">35+ Years Experience</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-amber-500 mr-2" />
                      <span className="text-sm text-gray-700">Pediatric Liver Transplant Expert</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-nile-600 hover:bg-nile-700"
                      onClick={openWhatsApp}
                    >
                      <MessageCircle className="h-4 w-4 mr-1" /> WhatsApp
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-nile-600 text-nile-600 hover:bg-nile-50"
                      onClick={callNow}
                    >
                      Request Appointment
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      <Heart className="h-10 w-10 text-nile-600" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-semibold">Dr. Subhash Gupta</h3>
                      <p className="text-gray-600 text-sm">Liver & GI Surgeon</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-700">Max Super Speciality Hospital, Saket</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-700">30+ Years Experience</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-amber-500 mr-2" />
                      <span className="text-sm text-gray-700">Living Donor Liver Transplant Pioneer</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-nile-600 hover:bg-nile-700"
                      onClick={openWhatsApp}
                    >
                      <MessageCircle className="h-4 w-4 mr-1" /> WhatsApp
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-nile-600 text-nile-600 hover:bg-nile-50"
                      onClick={callNow}
                    >
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
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
              Top Liver Transplant Hospitals
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1527576539890-dfa815648363" 
                  alt="Medanta - The Medicity" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Medanta - The Medicity</h3>
                  <div className="flex items-center mb-3">
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">NABH & JCI Accredited</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Transplant Center of Excellence</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    One of the largest liver transplant programs in India with dedicated liver ICU and post-transplant care
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <InfoIcon className="h-4 w-4 mr-1" />
                    <span>Gurgaon, India</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-nile-600 text-nile-600 hover:bg-nile-50"
                  >
                    View Hospital
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1527576539890-dfa815648363" 
                  alt="Rela Institute, Chennai" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Rela Institute, Chennai</h3>
                  <div className="flex items-center mb-3">
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">NABH Accredited</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Govt-Licensed Transplant Center</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    Specialized in pediatric and adult liver transplantation with world-class infrastructure
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <InfoIcon className="h-4 w-4 mr-1" />
                    <span>Chennai, India</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-nile-600 text-nile-600 hover:bg-nile-50"
                  >
                    View Hospital
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1527576539890-dfa815648363" 
                  alt="Max Super Speciality Hospital" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Max Super Speciality Hospital</h3>
                  <div className="flex items-center mb-3">
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">NABH Accredited</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Liver ICU</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    Comprehensive liver care center with expertise in complex and high-risk liver transplants
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <InfoIcon className="h-4 w-4 mr-1" />
                    <span>New Delhi, India</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-nile-600 text-nile-600 hover:bg-nile-50"
                  >
                    View Hospital
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="general">General Questions</TabsTrigger>
                  <TabsTrigger value="medical">Medical Information</TabsTrigger>
                </TabsList>
                <TabsContent value="general" className="mt-6">
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2">How long is the hospital stay after transplant?</h3>
                      <p className="text-gray-700">
                        3–4 weeks including ICU and ward care, followed by hotel recovery. The exact duration depends on your recovery progress.
                      </p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2">Can international patients get liver transplants in India?</h3>
                      <p className="text-gray-700">
                        Yes, with a valid medical visa and donor clearance, the procedure is legally and ethically performed. The hospital assists with all necessary government approvals.
                      </p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2">Do hospitals offer post-transplant care and housing?</h3>
                      <p className="text-gray-700">
                        Yes, hospitals offer outpatient rehab and help find suitable accommodation for longer stays. Many hotels near hospitals offer special rates for medical tourists.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="medical" className="mt-6">
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2">Who is eligible for a liver transplant in India?</h3>
                      <p className="text-gray-700">
                        Patients with chronic liver disease, liver cancer, or liver failure with a matching living or deceased donor. A comprehensive evaluation determines eligibility.
                      </p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2">Can I bring my own donor?</h3>
                      <p className="text-gray-700">
                        Yes, living donors must be a close relative and cleared by the hospital transplant committee. The donor undergoes extensive testing to ensure compatibility and safety.
                      </p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2">What is the success rate of liver transplants in India?</h3>
                      <p className="text-gray-700">
                        Survival rates are above 90% in high-volume Indian centers. One-year survival rates are comparable to the best centers globally.
                      </p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2">Will I need to take medications for life?</h3>
                      <p className="text-gray-700">
                        Yes, immunosuppressants and follow-ups are essential for long-term success. The dosage typically decreases over time, but some medication is needed permanently.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-nile-600 to-medical-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Begin Your Liver Transplant Journey?
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Share your liver reports and get a free evaluation from India's top specialists within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-nile-600 hover:bg-gray-100"
                onClick={openWhatsApp}
              >
                <MessageCircle className="mr-2 h-4 w-4" /> Send Your Liver Reports for Free Opinion
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={callNow}
              >
                <Phone className="mr-2 h-4 w-4" /> Speak to a Liver Transplant Advisor
              </Button>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default LiverTransplant;
