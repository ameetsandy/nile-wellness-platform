
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MessageCircle, Plane, Building, Globe, Calendar, CreditCard, MapPin, Clock, CheckCircle, CarTaxiFront, FileText, Hotel, DollarSign, Languages, CakeSlice, ShoppingBag, Landmark, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const PlanYourTrip = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Your trip planning request has been submitted successfully! Our team will contact you within 24 hours.");
    }, 1500);
  };
  
  const openWhatsApp = () => {
    const phoneNumber = "911234567890";
    const message = "Hello, I'd like to plan my medical trip to India. Can you help me with the details?";
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Plan Your Medical Trip to India
                <span className="block text-nile-600 mt-2">Comprehensive Planning & Support</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Let our experienced team handle all the logistics of your medical journey, from hospital selection to visa arrangements and local transportation.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-base py-6 px-6 h-auto"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat with a Trip Planner
                </Button>
                <Button 
                  className="bg-nile-600 hover:bg-nile-700 text-base py-6 px-6 h-auto"
                  onClick={() => window.scrollTo({ top: document.getElementById('trip-planner')?.offsetTop, behavior: 'smooth' })}
                >
                  <Plane className="mr-2 h-5 w-5" />
                  Start Planning Now
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">How We Make Your Medical Journey Seamless</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our end-to-end planning service takes care of everything, so you can focus on your health and recovery.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-nile-50 flex items-center justify-center mb-5">
                  <FileText className="h-7 w-7 text-nile-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Medical Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Share your medical reports for review by specialists to determine the best treatment options.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Free doctor opinion</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Treatment recommendations</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Hospital & doctor selection</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-nile-50 flex items-center justify-center mb-5">
                  <Globe className="h-7 w-7 text-nile-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Travel Arrangements</h3>
                <p className="text-gray-600 mb-4">
                  Complete assistance with medical visa, flight recommendations, and all travel documentation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Visa invitation letter</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Flight guidance</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Travel insurance advice</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-nile-50 flex items-center justify-center mb-5">
                  <Building className="h-7 w-7 text-nile-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Accommodation</h3>
                <p className="text-gray-600 mb-4">
                  Booking comfortable, affordable lodging near your hospital for you and accompanying family.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Hospital-adjacent options</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Special patient rates</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Long-stay discounts</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-nile-50 flex items-center justify-center mb-5">
                  <CarTaxiFront className="h-7 w-7 text-nile-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Local Support</h3>
                <p className="text-gray-600 mb-4">
                  On-ground assistance including airport pickup, language help, and local guidance during your stay.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Airport transfers</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Language interpreters</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>24/7 emergency contact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="trip-planner" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-gradient-to-br from-nile-600 to-medical-700 p-8 text-white">
                    <h2 className="text-2xl font-bold mb-6">Plan Your Medical Journey</h2>
                    <p className="mb-8 text-white/90">
                      Fill out this form to get a customized trip plan based on your medical needs, budget, and preferences.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium mb-1">Quick Response</h3>
                          <p className="text-white/80 text-sm">
                            We'll contact you within 24 hours with a detailed plan
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CreditCard className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium mb-1">No Planning Fees</h3>
                          <p className="text-white/80 text-sm">
                            Our trip planning service is completely free
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <PhoneCall className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium mb-1">Need Urgent Help?</h3>
                          <p className="text-white/80 text-sm">
                            Call us directly: +91 1234567890
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 p-8">
                    <form onSubmit={submitForm}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <Label htmlFor="name" className="text-gray-700 mb-2 block">Full Name</Label>
                          <Input id="name" placeholder="Enter your full name" required />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-gray-700 mb-2 block">Email Address</Label>
                          <Input id="email" type="email" placeholder="Enter your email" required />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-gray-700 mb-2 block">WhatsApp Number</Label>
                          <Input id="phone" placeholder="With country code" required />
                        </div>
                        <div>
                          <Label htmlFor="country" className="text-gray-700 mb-2 block">Country</Label>
                          <Input id="country" placeholder="Your country" required />
                        </div>
                        <div>
                          <Label htmlFor="treatment-type" className="text-gray-700 mb-2 block">Treatment Type</Label>
                          <Select defaultValue="select">
                            <SelectTrigger>
                              <SelectValue placeholder="Select treatment type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="select" disabled>Select treatment type</SelectItem>
                              <SelectItem value="cardiac">Cardiac/Heart Treatment</SelectItem>
                              <SelectItem value="orthopedic">Orthopedic Surgery</SelectItem>
                              <SelectItem value="oncology">Cancer Treatment</SelectItem>
                              <SelectItem value="neurology">Neurology & Brain</SelectItem>
                              <SelectItem value="transplant">Organ Transplant</SelectItem>
                              <SelectItem value="fertility">Fertility Treatment</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="travel-date" className="text-gray-700 mb-2 block">Planned Travel Date</Label>
                          <Input id="travel-date" type="date" min={new Date().toISOString().split('T')[0]} />
                        </div>
                        <div>
                          <Label htmlFor="duration" className="text-gray-700 mb-2 block">Estimated Stay Duration</Label>
                          <Select defaultValue="select">
                            <SelectTrigger>
                              <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="select" disabled>Select duration</SelectItem>
                              <SelectItem value="1-week">1 week</SelectItem>
                              <SelectItem value="2-weeks">2 weeks</SelectItem>
                              <SelectItem value="3-weeks">3 weeks</SelectItem>
                              <SelectItem value="1-month">1 month</SelectItem>
                              <SelectItem value="2-months">2 months</SelectItem>
                              <SelectItem value="3-months">3+ months</SelectItem>
                              <SelectItem value="not-sure">Not sure yet</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="budget" className="text-gray-700 mb-2 block">Budget Range (USD)</Label>
                          <Select defaultValue="select">
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="select" disabled>Select budget range</SelectItem>
                              <SelectItem value="3000-5000">$3,000 - $5,000</SelectItem>
                              <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                              <SelectItem value="10000-15000">$10,000 - $15,000</SelectItem>
                              <SelectItem value="15000-25000">$15,000 - $25,000</SelectItem>
                              <SelectItem value="25000-plus">$25,000+</SelectItem>
                              <SelectItem value="not-sure">Not sure yet</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <Label htmlFor="accompaniment" className="text-gray-700 mb-2 block">Who Will Accompany You?</Label>
                        <Select defaultValue="select">
                          <SelectTrigger>
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="select" disabled>Select option</SelectItem>
                            <SelectItem value="traveling-alone">Traveling alone</SelectItem>
                            <SelectItem value="spouse">Spouse/Partner</SelectItem>
                            <SelectItem value="family-member">Family member</SelectItem>
                            <SelectItem value="friend">Friend</SelectItem>
                            <SelectItem value="multiple">Multiple people</SelectItem>
                            <SelectItem value="not-sure">Not decided yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="mb-6">
                        <Label htmlFor="special-requirements" className="text-gray-700 mb-2 block">Special Requirements or Questions</Label>
                        <Textarea 
                          id="special-requirements" 
                          placeholder="Any specific requirements, dietary needs, mobility concerns, language preferences, or questions you have."
                          className="min-h-[100px]"
                        />
                      </div>
                      
                      <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                          <input
                            id="terms"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                            required
                          />
                        </div>
                        <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                          I consent to being contacted regarding my medical trip planning. I understand my data will be processed according to the privacy policy.
                        </label>
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-nile-600 hover:bg-nile-700 py-6 h-auto text-base"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>Submit Trip Planning Request <Plane className="ml-2 h-4 w-4" /></>
                        )}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Planning Your Medical Trip to India</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Everything you need to know to prepare for your medical journey
              </p>
            </div>
            
            <Tabs defaultValue="before" className="w-full max-w-5xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList className="h-auto p-1">
                  <TabsTrigger 
                    value="before"
                    className="rounded-md py-2 px-4 data-[state=active]:bg-nile-600"
                  >
                    Before You Travel
                  </TabsTrigger>
                  <TabsTrigger 
                    value="during"
                    className="rounded-md py-2 px-4 data-[state=active]:bg-nile-600"
                  >
                    During Your Stay
                  </TabsTrigger>
                  <TabsTrigger 
                    value="after"
                    className="rounded-md py-2 px-4 data-[state=active]:bg-nile-600"
                  >
                    After Treatment
                  </TabsTrigger>
                  <TabsTrigger 
                    value="faq"
                    className="rounded-md py-2 px-4 data-[state=active]:bg-nile-600"
                  >
                    FAQs
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="before">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-semibold mb-5">Essential Travel Preparation</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <Globe className="h-6 w-6 text-nile-600 mr-3" />
                          <h4 className="font-medium text-lg">Visa Requirements</h4>
                        </div>
                        <div className="text-gray-700 space-y-2">
                          <p>
                            Most international patients require a Medical Visa (MED Visa) to receive treatment in India. Requirements include:
                          </p>
                          <ul className="space-y-2 pl-6 list-disc">
                            <li>Valid passport with at least 6 months validity</li>
                            <li>Completed visa application form</li>
                            <li>Medical attestation from an Indian hospital</li>
                            <li>Proof of sufficient funds for treatment</li>
                            <li>2 passport-sized photographs</li>
                          </ul>
                          <p className="mt-2 text-sm">
                            <strong>Processing time:</strong> 3-5 working days (standard), 1-2 days (expedited)
                          </p>
                          <p className="text-sm">
                            <strong>Our service:</strong> We provide a free medical visa invitation letter and guidance through the entire process.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <FileText className="h-6 w-6 text-nile-600 mr-3" />
                          <h4 className="font-medium text-lg">Essential Documents</h4>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>All medical records, reports, scans, and previous treatment history</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Current prescription medications list</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Passport and multiple photocopies</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Travel insurance documents</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Hospital appointment confirmation</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Contact details of your doctor in your home country</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <CreditCard className="h-6 w-6 text-nile-600 mr-3" />
                          <h4 className="font-medium text-lg">Financial Planning</h4>
                        </div>
                        <div className="text-gray-700 space-y-3">
                          <p>
                            Proper financial planning ensures a stress-free medical journey:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Request detailed treatment cost estimates in advance</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Budget for accommodation, food, and local transportation</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Consider emergency funds (recommended 20% buffer)</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Inform your bank about international transactions</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Carry both cash and cards</span>
                            </li>
                          </ul>
                          <p className="text-sm mt-2">
                            <strong>Payment options:</strong> Most hospitals accept major credit cards, bank transfers, and cash in major currencies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-5">Practical Preparations</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <Plane className="h-6 w-6 text-nile-600 mr-3" />
                          <h4 className="font-medium text-lg">Travel Tips</h4>
                        </div>
                        <div className="text-gray-700 space-y-3">
                          <p>
                            Making your journey to India comfortable and stress-free:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Book direct flights when possible to minimize travel fatigue</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Request special assistance or wheelchair service if needed</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Pack light but include all essentials</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Carry medications in hand luggage with prescriptions</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Wear compression stockings for long flights</span>
                            </li>
                          </ul>
                          <p className="text-sm mt-2">
                            <strong>Major airports:</strong> Delhi, Mumbai, Chennai, Bangalore, Hyderabad, and Kolkata have excellent connectivity to major international destinations.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <Hotel className="h-6 w-6 text-nile-600 mr-3" />
                          <h4 className="font-medium text-lg">Accommodation Options</h4>
                        </div>
                        <div className="text-gray-700 space-y-3">
                          <p>
                            Various options available for patients and accompanying family:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>Hospital guest houses:</strong> Convenient and often discounted</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>Serviced apartments:</strong> Ideal for longer stays with kitchen facilities</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>Hotels:</strong> Various price ranges with medical tourism packages</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>Patient hostels:</strong> Budget-friendly options near major hospitals</span>
                            </li>
                          </ul>
                          <p className="text-sm mt-2">
                            <strong>Our service:</strong> We can arrange accommodation that suits your budget and medical needs, with special rates negotiated for our patients.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <CakeSlice className="h-6 w-6 text-nile-600 mr-3" />
                          <h4 className="font-medium text-lg">Cultural & Practical Tips</h4>
                        </div>
                        <div className="text-gray-700 space-y-3">
                          <p>
                            Understanding Indian culture and practical matters:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Learn basic greetings in Hindi (though English is widely spoken in hospitals)</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Dress modestly, especially in public areas</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Prepare for varied weather (check seasonal conditions)</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Download useful apps (maps, translation, ride-hailing)</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Consider a local SIM card for affordable connectivity</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <Link to="/free-services">
                        <Button 
                          variant="outline"
                          className="border-nile-600 text-nile-600 hover:bg-nile-50"
                        >
                          View All Free Services We Provide
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="during">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-semibold mb-5">Medical Care in India</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <Building className="h-6 w-6 text-nile-600 mr-3" />
                          <h4 className="font-medium text-lg">Hospital Experience</h4>
                        </div>
                        <div className="text-gray-700 space-y-3">
                          <p>
                            What to expect at India's top international hospitals:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>International patient lounges with dedicated staff</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>English-speaking doctors, nurses, and support staff</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Advanced medical technology and equipment</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Comprehensive pre and post-operative care</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Room options from standard to deluxe suites</span>
                            </li>
                          </ul>
                          <p className="text-sm mt-2">
                            <strong>Hospital rooms:</strong> Most international patients choose private rooms with attached bathrooms. Many hospitals offer options for an attendant bed for family members.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <User className="h-6 w-6 text-nile-600 mr-3" />
                          <h4 className="font-medium text-lg">Doctor Interactions</h4>
                        </div>
                        <div className="text-gray-700 space-y-3">
                          <p>
                            Building effective communication with your healthcare team:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Prepare a list of questions before consultations</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Don't hesitate to ask for clarification on medical terms</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Request detailed explanations of procedures</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Share all prior medical history and treatments</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Inform about allergies, medications, and dietary restrictions</span>
                            </li>
                          </ul>
                          <p className="text-sm mt-2">
                            <strong>Our service:</strong> If needed, we can arrange for a medical coordinator to accompany you during key consultations to ensure all your questions are addressed.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <DollarSign className="h-6 w-6 text-nile-600 mr-3" />
                          <h4 className="font-medium text-lg">Managing Hospital Payments</h4>
                        </div>
                        <div className="text-gray-700 space-y-3">
                          <p>
                            Understanding hospital billing and payment processes:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Initial deposit usually required (30-50% of estimated cost)</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Interim billing during longer treatments</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Always request itemized bills and receipts</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Most hospitals have international patient finance desks</span>
                            </li>
                          </ul>
                          <p className="text-sm mt-2">
                            <strong>Important:</strong> Keep all payment records, medical reports, and prescriptions organized for insurance claims or tax purposes in your home country.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-5">Navigating Daily Life</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <CarTaxiFront className="h-6 w-6 text-nile-600 mr-3" />
                          <h4 className="font-medium text-lg">Local Transportation</h4>
                        </div>
                        <div className="text-gray-700 space-y-3">
                          <p>
                            Getting around during your medical stay:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>Hospital shuttles:</strong> Many hospitals provide free shuttle services</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>App-based rides:</strong> Uber, Ola (India's ride-hailing app)</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>Pre-paid taxis:</strong> Available at airports and major locations</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span><strong>Private car hire:</strong> Can be arranged for the duration of stay</span>
                            </li>
                          </ul>
                          <p className="text-sm mt-2">
                            <strong>Our service:</strong> We provide complimentary airport pickup and can arrange transportation for hospital visits and other necessary travel during your stay.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <CakeSlice className="h-6 w-6 text-nile-600 mr-3" />
                          <h4 className="font-medium text-lg">Food & Dietary Considerations</h4>
                        </div>
                        <div className="text-gray-700 space-y-3">
                          <p>
                            Maintaining proper nutrition during your medical stay:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Hospitals offer multiple cuisine options including international food</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Special diets (diabetic, low-sodium, etc.) can be arranged</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Halal, kosher, vegetarian, and vegan options available</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Food delivery apps (Zomato, Swiggy) offer wide variety</span>
                            </li>
                          </ul>
                          <p className="text-sm mt-2">
                            <strong>Tip:</strong> Always drink bottled or filtered water and follow your doctor's dietary guidelines for optimal recovery.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <Languages className="h-6 w-6 text-nile-600 mr-3" />
                          <h4 className="font-medium text-lg">Communication & Connectivity</h4>
                        </div>
                        <div className="text-gray-700 space-y-3">
                          <p>
                            Staying connected during your medical journey:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Most hospitals and accommodations offer free Wi-Fi</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Local SIM cards are inexpensive and easily available</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>WhatsApp is widely used for communication</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Language interpreters can be arranged if needed</span>
                            </li>
                          </ul>
                          <p className="text-sm mt-2">
                            <strong>Our service:</strong> We provide free language interpretation services for Arabic, French, Russian, and several other languages during important consultations.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <ShoppingBag className="h-6 w-6 text-nile-600 mr-3" />
                          <h4 className="font-medium text-lg">Recreation During Recovery</h4>
                        </div>
                        <div className="text-gray-700 space-y-3">
                          <p>
                            For accompanying family or during recovery periods:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Shopping malls with international brands</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Local markets for souvenirs and handicrafts</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Cultural attractions (once recovery permits)</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Movie theaters with international films</span>
                            </li>
                          </ul>
                          <p className="text-sm mt-2">
                            <strong>Important:</strong> Always follow your doctor's advice about physical activity limitations during recovery.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="after">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-semibold mb-5">Post-Treatment Care</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <FileText className="h-6 w-6 text-nile-600 mr-3" />
                          <h4 className="font-medium text-lg">Medical Documentation</h4>
                        </div>
                        <div className="text-gray-700 space-y-3">
                          <p>
                            Essential documents to take home with you:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Complete medical records of your treatment</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Discharge summary with full treatment details</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Medication prescriptions with generic names</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Follow-up care instructions</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Digital copies of all scans and test results</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Contact information for your doctor in India</span>
                            </li>
                          </ul>
                          <p className="text-sm mt-2">
                            <strong>Our service:</strong> We help ensure you receive all necessary documentation in English and can arrange for translations if required.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <Plane className="h-6 w-6 text-nile-600 mr-3" />
                          <h4 className="font-medium text-lg">Travel Considerations</h4>
                        </div>
                        <div className="text-gray-700 space-y-3">
                          <p>
                            Safe travel after medical treatment:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Obtain fitness-to-travel certificate from your doctor</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Arrange special accommodations with airlines if needed</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Pack medications in hand luggage with prescriptions</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Consider longer layovers to avoid rushing between flights</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Arrange wheelchair service at airports if required</span>
                            </li>
                          </ul>
                          <p className="text-sm mt-2">
                            <strong>Important:</strong> Some procedures require a minimum recovery period before flying. Always follow your doctor's advice about when it's safe to travel.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <Calendar className="h-6 w-6 text-nile-600 mr-3" />
                          <h4 className="font-medium text-lg">Follow-up Care</h4>
                        </div>
                        <div className="text-gray-700 space-y-3">
                          <p>
                            Continuing your care after returning home:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Schedule a consultation with your local doctor</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Share all medical records from India with your home doctor</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Follow the prescribed medication and care regimen</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Be vigilant about any unusual symptoms</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Attend all recommended follow-up tests and scans</span>
                            </li>
                          </ul>
                          <p className="text-sm mt-2">
                            <strong>Our service:</strong> We offer virtual follow-up consultations with your Indian doctors at 1, 3, and 6-month intervals as needed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-5">Staying Connected</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <MessageCircle className="h-6 w-6 text-nile-600 mr-3" />
                          <h4 className="font-medium text-lg">Remote Consultations</h4>
                        </div>
                        <div className="text-gray-700 space-y-3">
                          <p>
                            Maintaining contact with your Indian healthcare team:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Video consultations for follow-up appointments</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Email communication for sharing test results</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>WhatsApp for quick questions and concerns</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Hospital patient portals for accessing records</span>
                            </li>
                          </ul>
                          <p className="text-sm mt-2">
                            <strong>Our service:</strong> We coordinate virtual follow-ups and ensure your questions are answered promptly even after you return home.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <Landmark className="h-6 w-6 text-nile-600 mr-3" />
                          <h4 className="font-medium text-lg">Insurance & Documentation</h4>
                        </div>
                        <div className="text-gray-700 space-y-3">
                          <p>
                            Managing post-treatment paperwork:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Submit claims to your insurance provider if applicable</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Keep all receipts for tax deductions where allowed</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Store digital copies of all medical records securely</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Maintain communication with your patient coordinator</span>
                            </li>
                          </ul>
                          <p className="text-sm mt-2">
                            <strong>Our service:</strong> We can provide additional documentation or clarifications if required by your insurance company or for reimbursement purposes.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm border-2 border-nile-100">
                        <div className="flex items-center mb-3">
                          <Globe className="h-6 w-6 text-nile-600 mr-3" />
                          <h4 className="font-medium text-lg">Planning Future Visits</h4>
                        </div>
                        <div className="text-gray-700 space-y-3">
                          <p>
                            For treatments requiring multiple visits or check-ups:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Long-term treatment plans are created for phased procedures</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Visa extensions or re-applications can be facilitated</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Returning patient discounts at many hospitals</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Streamlined process for repeat visits</span>
                            </li>
                          </ul>
                          <p className="text-sm mt-2">
                            <strong>Our commitment:</strong> We maintain your records and preferences to make any future visits even smoother and more efficient.
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-center mt-8">
                        <Button 
                          className="bg-green-600 hover:bg-green-700"
                          onClick={openWhatsApp}
                        >
                          <MessageCircle className="mr-2 h-4 w-4" /> Contact Us to Start Planning
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="faq">
                <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    <div>
                      <h4 className="font-medium text-lg mb-2">How long does it take to get a medical visa for India?</h4>
                      <p className="text-gray-700">
                        Typically, medical visas are processed within 3-5 business days. With our assistance and a hospital invitation letter, the process can be expedited. We recommend applying at least 2 weeks before your planned travel date.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-2">Can I bring a family member with me?</h4>
                      <p className="text-gray-700">
                        Yes, up to two family members can accompany you on a Medical Attendant Visa. Most hospitals allow one attendant to stay in the patient room, and we can arrange nearby accommodation for additional family members.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-2">How are payments handled at hospitals?</h4>
                      <p className="text-gray-700">
                        Most hospitals require an advance deposit (30-50% of estimated costs) before admission. Final settlement is done at discharge. Payments can be made via credit card, bank transfer, or cash. Detailed estimates are provided before treatment begins.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-2">What if my treatment takes longer than expected?</h4>
                      <p className="text-gray-700">
                        We can assist with extending your visa, accommodation, and modifying return travel arrangements if your treatment duration changes. Our team remains flexible to accommodate any changes in your medical journey.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-2">Are doctors in India qualified to international standards?</h4>
                      <p className="text-gray-700">
                        Yes, doctors at top Indian hospitals are highly qualified with training from prestigious institutions in the US, UK, and Europe. Many are members of international medical associations and regularly present at global conferences.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-2">How do I arrange follow-up care after returning home?</h4>
                      <p className="text-gray-700">
                        Before discharge, your doctor will provide a detailed follow-up plan. We help arrange virtual consultations with your Indian doctors and can coordinate with your local healthcare providers to ensure continuity of care.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-2">What happens if there are complications after I return home?</h4>
                      <p className="text-gray-700">
                        Your Indian medical team remains available for consultation. We facilitate communication between your home doctors and Indian specialists. If necessary, we can arrange priority readmission for any treatment-related complications.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-2">What if I need to cancel my trip due to an emergency?</h4>
                      <p className="text-gray-700">
                        We understand that emergencies happen. We work with hospitals and hotels to minimize cancellation charges in genuine cases. We recommend travel insurance that covers trip cancellation for medical reasons.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-2">Are there any hidden costs I should be aware of?</h4>
                      <p className="text-gray-700">
                        We pride ourselves on transparency. Before you travel, you'll receive a detailed cost estimate including hospital charges, accommodation, and expected incidentals. Our planning service has no hidden fees or commissions.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-2">How do I get medications prescribed in India when I'm back home?</h4>
                      <p className="text-gray-700">
                        Your Indian doctor will provide prescriptions with generic drug names that can be filled locally. We ensure you have sufficient medication until you can consult your home doctor. For specialized medications, we can help with international shipping arrangements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-10 flex justify-center">
                    <Button 
                      className="bg-nile-600 hover:bg-nile-700"
                      onClick={openWhatsApp}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" /> Ask Us Any Question
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="py-12 bg-gradient-to-r from-nile-600 to-medical-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Medical Journey?</h2>
              <p className="text-xl opacity-90 mb-8">
                Let our experienced team handle the logistics so you can focus on your health and recovery.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  className="bg-white text-nile-600 hover:bg-gray-100"
                  onClick={() => window.scrollTo({ top: document.getElementById('trip-planner')?.offsetTop, behavior: 'smooth' })}
                >
                  <Plane className="mr-2 h-4 w-4" /> Start Planning Now
                </Button>
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> Chat with a Coordinator
                </Button>
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

export default PlanYourTrip;
