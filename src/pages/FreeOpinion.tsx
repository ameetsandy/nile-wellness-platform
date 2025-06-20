import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MessageCircle, Upload, Check, FilePlus, Clipboard, FileText, ArrowRight, Clock, User, Ban, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const FreeOpinion = () => {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStep(3);
    }, 1500);
  };
  
  const openWhatsApp = () => {
    const phoneNumber = "918076036335";
    const message = "I'd like to get a free medical opinion for my condition.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleUploadWhatsApp = () => {
    const phoneNumber = "918076036335";
    const message = "I'd like to share my medical reports for a free medical opinion.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-medical-50 to-nile-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Get a Free Medical Opinion from India's Top Specialists
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Share your medical reports via WhatsApp and receive a detailed treatment plan, cost estimate, and hospital recommendations within 48 hours.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mb-10">
                <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center max-w-[180px]">
                  <div className="w-14 h-14 rounded-full bg-nile-50 flex items-center justify-center mb-3">
                    <FileText className="h-7 w-7 text-nile-600" />
                  </div>
                  <h3 className="font-medium text-gray-800 mb-1">Share Reports</h3>
                  <p className="text-sm text-gray-500 text-center">Send your medical documents via WhatsApp</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center max-w-[180px]">
                  <div className="w-14 h-14 rounded-full bg-nile-50 flex items-center justify-center mb-3">
                    <Clock className="h-7 w-7 text-nile-600" />
                  </div>
                  <h3 className="font-medium text-gray-800 mb-1">48-Hour Review</h3>
                  <p className="text-sm text-gray-500 text-center">Expert analysis of your case</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center max-w-[180px]">
                  <div className="w-14 h-14 rounded-full bg-nile-50 flex items-center justify-center mb-3">
                    <Clipboard className="h-7 w-7 text-nile-600" />
                  </div>
                  <h3 className="font-medium text-gray-800 mb-1">Detailed Plan</h3>
                  <p className="text-sm text-gray-500 text-center">Receive treatment options</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center max-w-[180px]">
                  <div className="w-14 h-14 rounded-full bg-nile-50 flex items-center justify-center mb-3">
                    <MessageCircle className="h-7 w-7 text-nile-600" />
                  </div>
                  <h3 className="font-medium text-gray-800 mb-1">Consultation</h3>
                  <p className="text-sm text-gray-500 text-center">Discuss with specialists</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-base py-6 px-6 h-auto"
                  onClick={handleUploadWhatsApp}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Share Reports via WhatsApp
                </Button>
                <Button 
                  className="bg-nile-600 hover:bg-nile-700 text-base py-6 px-6 h-auto"
                  onClick={() => window.scrollTo({ top: document.getElementById('contact-form')?.offsetTop, behavior: 'smooth' })}
                >
                  <User className="mr-2 h-5 w-5" />
                  Fill Contact Form
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section id="contact-form" className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {formStep === 1 && (
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-nile-600 text-white p-6">
                    <h2 className="text-2xl font-semibold">Tell Us About Your Medical Condition</h2>
                    <p className="text-nile-50">
                      Share your details and our specialists will review your case
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <form 
                      action="https://formsubmit.co/care@nilewellness.com" 
                      method="POST"
                      className="space-y-6"
                    >
                      <input type="hidden" name="_subject" value="New Free Medical Opinion Request" />
                      <input type="hidden" name="_captcha" value="false" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <Label htmlFor="name" className="text-gray-700 mb-2 block">Full Name</Label>
                          <Input id="name" name="name" placeholder="Enter your full name" required />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-gray-700 mb-2 block">Email Address</Label>
                          <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-gray-700 mb-2 block">WhatsApp Number</Label>
                          <Input id="phone" name="phone" placeholder="With country code" required />
                        </div>
                        <div>
                          <Label htmlFor="age" className="text-gray-700 mb-2 block">Age</Label>
                          <Input id="age" name="age" type="number" placeholder="Your age" required />
                        </div>
                      </div>

                      <div className="mb-6">
                        <Label htmlFor="condition" className="text-gray-700 mb-2 block">Medical Condition</Label>
                        <Textarea 
                          id="condition" 
                          name="condition"
                          placeholder="Please describe your medical condition in detail"
                          className="min-h-[100px]"
                          required
                        />
                      </div>

                      <div className="flex items-start mb-8">
                        <div className="flex items-center h-5">
                          <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                            required
                          />
                        </div>
                        <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                          I consent to sharing my medical information for the purpose of receiving a free medical opinion. I understand this is not a substitute for an in-person consultation.
                        </label>
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-nile-600 hover:bg-nile-700 py-6 h-auto text-base"
                      >
                        Submit Request <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      
                      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                        <Shield className="h-4 w-4" /> Your information is secure and confidential
                      </div>
                    </form>
                  </div>
                </div>
              )}
              
              {formStep === 3 && (
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-green-600 text-white p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-white mx-auto mb-4 flex items-center justify-center">
                      <Check className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-semibold">Request Submitted Successfully!</h2>
                    <p className="text-green-50">
                      Your request has been received
                    </p>
                  </div>
                  
                  <div className="p-8 text-center">
                    <h3 className="text-xl font-semibold mb-4">What Happens Next?</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <Clock className="h-8 w-8 text-nile-600 mx-auto mb-3" />
                        <h4 className="font-medium mb-2">Doctor Review</h4>
                        <p className="text-sm text-gray-600">
                          Our specialist will review your case within 24-48 hours
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <Clipboard className="h-8 w-8 text-nile-600 mx-auto mb-3" />
                        <h4 className="font-medium mb-2">Opinion Preparation</h4>
                        <p className="text-sm text-gray-600">
                          We'll prepare a detailed treatment plan with cost estimates
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <MessageCircle className="h-8 w-8 text-nile-600 mx-auto mb-3" />
                        <h4 className="font-medium mb-2">Consultation</h4>
                        <p className="text-sm text-gray-600">
                          Our coordinator will contact you to discuss the treatment options
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      We've sent a confirmation to your email and WhatsApp number. A patient coordinator will be in touch with you shortly.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        className="bg-green-600 hover:bg-green-700"
                        onClick={handleUploadWhatsApp}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Share Reports via WhatsApp
                      </Button>
                      <Link to="/">
                        <Button variant="outline" className="w-full sm:w-auto">
                          Return to Home
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Why Get a Medical Opinion from India?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Make informed decisions about your health with expert insights from India's leading specialists.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <User className="h-10 w-10 text-nile-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Top Medical Experts</h3>
                <p className="text-gray-600">
                  Get your case reviewed by specialists from JCI-accredited hospitals with international experience and qualifications.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Check className="h-10 w-10 text-nile-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Completely Free</h3>
                <p className="text-gray-600">
                  There are no charges for the opinion. We believe everyone deserves access to quality medical advice regardless of financial situation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Clock className="h-10 w-10 text-nile-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
                <p className="text-gray-600">
                  Receive detailed feedback within 48 hours, much faster than waiting for appointments in many healthcare systems.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Shield className="h-10 w-10 text-nile-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Confidential & Secure</h3>
                <p className="text-gray-600">
                  Your medical information is handled with strict confidentiality and protected by advanced security measures.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Clipboard className="h-10 w-10 text-nile-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Comprehensive Plan</h3>
                <p className="text-gray-600">
                  Get a detailed treatment plan, cost estimate, timeline, and recommendations for hospitals and doctors.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <MessageCircle className="h-10 w-10 text-nile-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Direct Communication</h3>
                <p className="text-gray-600">
                  Opportunity to discuss your case directly with doctors via video consultation if you choose to proceed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default FreeOpinion;

const Link = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <a href={to} className="inline-block">
    {children}
  </a>
);
