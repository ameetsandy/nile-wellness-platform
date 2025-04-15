
import React from 'react';
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MessageCircle, Phone, ArrowRight, Star, Building, Users, CheckCircle, InfoIcon, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const SpineSurgery = () => {
  const openWhatsApp = () => {
    const phoneNumber = "911234567890";
    const message = "Hello, I'd like to get a free opinion on my spine MRI/reports.";
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
                  Spine Surgery in India
                  <span className="block text-nile-600 mt-2">Minimally invasive, highly successful spine procedures by experts</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Advanced spine treatments at 70% lower cost than Western countries with JCI-accredited hospitals and world-class neurosurgeons.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-nile-600 hover:bg-nile-700"
                    onClick={openWhatsApp}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> Send Spine MRI for Free Opinion
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-nile-600 text-nile-600 hover:bg-nile-50"
                    onClick={callNow}
                  >
                    <Phone className="mr-2 h-4 w-4" /> Call Our Spine Care Expert
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1486718448742-163732cd1544" 
                  alt="Spine surgery consultation" 
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
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">What is Spine Surgery?</h2>
                <p className="text-gray-700 mb-6">
                  Spine surgery is performed to correct structural issues in the spine caused by trauma, degenerative conditions, 
                  slipped discs, spinal stenosis, scoliosis, or spinal tumors. Depending on the condition, surgeries can include 
                  spinal fusion, laminectomy, discectomy, minimally invasive spine surgery (MISS), or artificial disc replacement. 
                </p>
                <p className="text-gray-700">
                  These procedures aim to relieve pain, restore mobility, and prevent further nerve damage.
                </p>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <h3 className="font-medium text-lg mb-2">Microdiscectomy</h3>
                    <p className="text-gray-600 text-sm">Removal of herniated disc material pressing on a nerve root or spinal cord</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <h3 className="font-medium text-lg mb-2">Spinal Fusion</h3>
                    <p className="text-gray-600 text-sm">Joining two or more vertebrae together to stabilize the spine</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <h3 className="font-medium text-lg mb-2">Laminectomy</h3>
                    <p className="text-gray-600 text-sm">Removal of the lamina to relieve pressure on spinal nerves</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <h3 className="font-medium text-lg mb-2">Endoscopic Surgery</h3>
                    <p className="text-gray-600 text-sm">Minimally invasive technique using tiny incisions and specialized instruments</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Why Choose India?</h2>
                <p className="text-gray-700 mb-6">
                  India is a global hub for affordable and advanced spine surgeries. Hospitals offer robotic-assisted 
                  and endoscopic spine procedures, world-class neurosurgeons, and faster recovery protocols.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-nile-50 p-2 rounded-full mr-4">
                      <CheckCircle className="h-5 w-5 text-nile-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">70% Cost Savings</h3>
                      <p className="text-sm text-gray-600">Compared to US, UK, and European prices with the same quality</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nile-50 p-2 rounded-full mr-4">
                      <CheckCircle className="h-5 w-5 text-nile-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">NABH/JCI Accredited Centers</h3>
                      <p className="text-sm text-gray-600">International standards in patient care and safety</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nile-50 p-2 rounded-full mr-4">
                      <CheckCircle className="h-5 w-5 text-nile-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Robotic & Endoscopic Procedures</h3>
                      <p className="text-sm text-gray-600">Advanced minimally invasive techniques for faster recovery</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nile-50 p-2 rounded-full mr-4">
                      <CheckCircle className="h-5 w-5 text-nile-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">No Waiting Period</h3>
                      <p className="text-sm text-gray-600">Immediate treatment as opposed to months of waiting in other countries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nile-50 p-2 rounded-full mr-4">
                      <CheckCircle className="h-5 w-5 text-nile-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Multilingual Support</h3>
                      <p className="text-sm text-gray-600">Patient coordinators speaking various languages for seamless care</p>
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
              Cost Comparison: Save Up to 70% on Spine Surgery
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
                    <td className="px-6 py-4 font-medium">Microdiscectomy</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">$3,000–$4,500</td>
                    <td className="px-6 py-4 text-gray-500">$30,000–$45,000</td>
                    <td className="px-6 py-4 text-gray-500">$20,000–$30,000</td>
                    <td className="px-6 py-4 text-gray-500">$8,000–$10,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Spinal Fusion (1 level)</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">$5,000–$6,500</td>
                    <td className="px-6 py-4 text-gray-500">$60,000–$80,000</td>
                    <td className="px-6 py-4 text-gray-500">$35,000–$50,000</td>
                    <td className="px-6 py-4 text-gray-500">$15,000–$18,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Laminectomy</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">$3,500–$4,500</td>
                    <td className="px-6 py-4 text-gray-500">$40,000–$55,000</td>
                    <td className="px-6 py-4 text-gray-500">$25,000+</td>
                    <td className="px-6 py-4 text-gray-500">$10,000+</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Endoscopic/Robotic Spine Surgery</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">$6,000–$8,000</td>
                    <td className="px-6 py-4 text-gray-500">$85,000+</td>
                    <td className="px-6 py-4 text-gray-500">$50,000+</td>
                    <td className="px-6 py-4 text-gray-500">$18,000–$25,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Scoliosis Correction</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">$8,000–$12,000</td>
                    <td className="px-6 py-4 text-gray-500">$100,000+</td>
                    <td className="px-6 py-4 text-gray-500">$60,000+</td>
                    <td className="px-6 py-4 text-gray-500">$25,000–$30,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 text-center text-sm text-gray-500">
              * Costs are approximate and may vary based on hospital, surgeon, and individual case complexity.
            </div>
          </div>
        </section>
        
        {/* Top Spine Surgeons */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
              Top Spine Surgeons in India
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      <Brain className="h-10 w-10 text-nile-600" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-semibold">Dr. Sandeep Vaishya</h3>
                      <p className="text-gray-600 text-sm">Neurosurgeon & Spine Specialist</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-700">Fortis Memorial Research Institute, Gurgaon</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-700">30+ Years Experience</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-amber-500 mr-2" />
                      <span className="text-sm text-gray-700">Specializes in Complex Spine Cases</span>
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
                      <Brain className="h-10 w-10 text-nile-600" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-semibold">Dr. Hitesh Garg</h3>
                      <p className="text-gray-600 text-sm">Spine Surgeon</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-700">Artemis Hospital, Gurgaon</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-700">22+ Years Experience</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-amber-500 mr-2" />
                      <span className="text-sm text-gray-700">Minimally Invasive Surgery Expert</span>
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
                      <Brain className="h-10 w-10 text-nile-600" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-semibold">Dr. Arvind Kulkarni</h3>
                      <p className="text-gray-600 text-sm">Minimally Invasive Spine Surgery Expert</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-700">Mumbai Spine Clinic, Mumbai</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-700">20+ Years Experience</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-amber-500 mr-2" />
                      <span className="text-sm text-gray-700">Endoscopic Spine Surgery Pioneer</span>
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
              Top Hospitals for Spine Surgery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1527576539890-dfa815648363" 
                  alt="Fortis Memorial Research Institute" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Fortis Memorial Research Institute</h3>
                  <div className="flex items-center mb-3">
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">NABH & JCI Accredited</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Spine Centre of Excellence</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    State-of-the-art spine surgery facility with advanced robotic technology and dedicated spine rehab
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
                  alt="Artemis Hospital" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Artemis Hospital</h3>
                  <div className="flex items-center mb-3">
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">NABH Accredited</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Robotic Spine Surgery</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    Leading hospital for complex spine surgeries with advanced imaging and nerve monitoring systems
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
                  alt="Max Super Speciality Hospital" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Max Super Speciality Hospital</h3>
                  <div className="flex items-center mb-3">
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">NABH Accredited</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Neurosurgery Department</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    Comprehensive spine care with both surgical and non-surgical interventions for all spine conditions
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <InfoIcon className="h-4 w-4 mr-1" />
                    <span>Delhi, India</span>
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
                      <h3 className="font-semibold text-lg mb-2">How long will I need to stay in India?</h3>
                      <p className="text-gray-700">
                        Hospitalization for 4–7 days and post-op observation for 10–14 days. The total stay depends on the complexity of the surgery and your recovery pace.
                      </p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2">Will I receive physiotherapy?</h3>
                      <p className="text-gray-700">
                        Yes. In-hospital and hotel-based physiotherapy are included in the treatment plan. Our rehabilitation team will guide you through exercises for optimal recovery.
                      </p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2">Can I travel with a family member?</h3>
                      <p className="text-gray-700">
                        Yes. Assistance is provided for accommodation, visas, and transportation for attendants. We recommend having a companion for spine surgery patients.
                      </p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2">Will my case be reviewed before travel?</h3>
                      <p className="text-gray-700">
                        Yes. A free medical opinion will be shared after reviewing your spine MRI or CT reports. This helps determine if you're a candidate for surgery and what procedure is recommended.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="medical" className="mt-6">
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2">What are the most common spine surgeries performed in India?</h3>
                      <p className="text-gray-700">
                        Discectomy, spinal fusion, laminectomy, and minimally invasive spine surgeries are the most frequently performed procedures for international patients.
                      </p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2">Is robotic or endoscopic spine surgery available?</h3>
                      <p className="text-gray-700">
                        Yes. Advanced techniques are available in top hospitals with reduced blood loss and recovery time. These precision-guided systems allow for smaller incisions and faster healing.
                      </p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2">What is the success rate of spine surgery in India?</h3>
                      <p className="text-gray-700">
                        Over 90% success rate for most spine procedures with restored function and pain relief. India's high-volume spine centers maintain outcomes on par with global benchmarks.
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
              Ready to Begin Your Spine Treatment Journey?
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Share your spine MRI reports and get a free evaluation from India's top specialists within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-nile-600 hover:bg-gray-100"
                onClick={openWhatsApp}
              >
                <MessageCircle className="mr-2 h-4 w-4" /> Send Spine MRI for Free Opinion
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={callNow}
              >
                <Phone className="mr-2 h-4 w-4" /> Call Our Spine Care Expert
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

export default SpineSurgery;
