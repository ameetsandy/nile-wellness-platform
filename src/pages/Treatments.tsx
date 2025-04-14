
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MessageCircle, Search, HeartPulse, ArrowRight, Star, Building, Users, CheckCircle, InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const Treatments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const treatments = [
    {
      id: "cardiac",
      name: "Cardiac Treatments",
      procedures: [
        {
          id: "cabg",
          name: "Coronary Artery Bypass Grafting (CABG)",
          description: "Treat blocked heart arteries by creating new passages for blood to flow to heart muscles.",
          cost: "$5,800 - $7,500",
          hospital: "Apollo Hospitals",
          image: "https://placehold.co/600x400/medical-600/white/?text=CABG",
          success: "98.7%",
          stay: "7-10 days",
          recovery: "4-6 weeks"
        },
        {
          id: "angioplasty",
          name: "Angioplasty & Stent Placement",
          description: "Minimally invasive procedure to open narrowed or blocked coronary arteries.",
          cost: "$3,500 - $4,800",
          hospital: "Fortis Healthcare",
          image: "https://placehold.co/600x400/medical-600/white/?text=Angioplasty",
          success: "96.5%",
          stay: "3-5 days",
          recovery: "1-2 weeks"
        },
        {
          id: "valve-replacement",
          name: "Heart Valve Replacement",
          description: "Replace damaged heart valves with artificial or biological valves to restore normal blood flow.",
          cost: "$7,500 - $9,200",
          hospital: "Medanta Hospital",
          image: "https://placehold.co/600x400/medical-600/white/?text=Valve+Replacement",
          success: "97.3%",
          stay: "7-10 days",
          recovery: "6-8 weeks"
        }
      ]
    },
    {
      id: "orthopedic",
      name: "Orthopedic Treatments",
      procedures: [
        {
          id: "knee-replacement",
          name: "Total Knee Replacement",
          description: "Replace damaged knee joint with artificial joint to reduce pain and improve mobility.",
          cost: "$6,200 - $7,800",
          hospital: "Max Healthcare",
          image: "https://placehold.co/600x400/medical-600/white/?text=Knee+Replacement",
          success: "99.2%",
          stay: "5-7 days",
          recovery: "6-12 weeks"
        },
        {
          id: "hip-replacement",
          name: "Hip Replacement Surgery",
          description: "Replace damaged hip joint with prosthetic implant to improve function and relieve pain.",
          cost: "$6,500 - $8,200",
          hospital: "Fortis Healthcare",
          image: "https://placehold.co/600x400/medical-600/white/?text=Hip+Replacement",
          success: "98.1%",
          stay: "5-7 days",
          recovery: "6-12 weeks"
        }
      ]
    },
    {
      id: "transplant",
      name: "Organ Transplants",
      procedures: [
        {
          id: "liver-transplant",
          name: "Liver Transplant",
          description: "Replace diseased liver with healthy liver from donor to restore normal liver function.",
          cost: "$35,000 - $45,000",
          hospital: "Apollo Hospitals",
          image: "https://placehold.co/600x400/medical-600/white/?text=Liver+Transplant",
          success: "95.8%",
          stay: "2-3 weeks",
          recovery: "3-6 months"
        },
        {
          id: "kidney-transplant",
          name: "Kidney Transplant",
          description: "Surgical procedure to place a healthy kidney from a donor into a person with kidney failure.",
          cost: "$12,000 - $17,000",
          hospital: "Medanta Hospital",
          image: "https://placehold.co/600x400/medical-600/white/?text=Kidney+Transplant",
          success: "97.4%",
          stay: "1-2 weeks",
          recovery: "2-3 months"
        }
      ]
    },
    {
      id: "fertility",
      name: "Fertility Treatments",
      procedures: [
        {
          id: "ivf",
          name: "In Vitro Fertilization (IVF)",
          description: "A complex series of procedures to help with fertility and assist with conception.",
          cost: "$3,500 - $5,000",
          hospital: "Cloudnine Hospitals",
          image: "https://placehold.co/600x400/medical-600/white/?text=IVF",
          success: "68%",
          stay: "Outpatient",
          recovery: "1-2 days"
        },
        {
          id: "icsi",
          name: "Intracytoplasmic Sperm Injection (ICSI)",
          description: "A specialized form of IVF where a single sperm is injected directly into an egg.",
          cost: "$4,000 - $5,500",
          hospital: "Nova IVF Fertility",
          image: "https://placehold.co/600x400/medical-600/white/?text=ICSI",
          success: "70-85%",
          stay: "Outpatient",
          recovery: "1-2 days"
        }
      ]
    },
    {
      id: "oncology",
      name: "Cancer Treatments",
      procedures: [
        {
          id: "chemotherapy",
          name: "Chemotherapy",
          description: "Treatment that uses drugs to kill cancer cells or stop them from growing and dividing.",
          cost: "$2,500 - $12,000",
          hospital: "Tata Memorial Hospital",
          image: "https://placehold.co/600x400/medical-600/white/?text=Chemotherapy",
          success: "Varies by cancer type",
          stay: "Varies",
          recovery: "Varies"
        },
        {
          id: "radiation",
          name: "Radiation Therapy",
          description: "Treatment that uses high doses of radiation to kill cancer cells and shrink tumors.",
          cost: "$3,000 - $10,000",
          hospital: "HCG Oncology",
          image: "https://placehold.co/600x400/medical-600/white/?text=Radiation+Therapy",
          success: "Varies by cancer type",
          stay: "Outpatient",
          recovery: "Varies"
        }
      ]
    }
  ];

  const filterTreatments = (treatments: any[], searchTerm: string) => {
    if (!searchTerm) return treatments;
    
    return treatments.map(category => {
      const filteredProcedures = category.procedures.filter(procedure =>
        procedure.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        procedure.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      return {
        ...category,
        procedures: filteredProcedures
      };
    }).filter(category => category.procedures.length > 0);
  };

  const filteredTreatments = filterTreatments(treatments, searchTerm);

  const openWhatsApp = () => {
    const phoneNumber = "911234567890";
    const message = "Hello, I'd like to inquire about medical treatments in India.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-medical-50 to-nile-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                World-Class Medical Treatments in India
                <span className="block text-nile-600 mt-2">At a Fraction of International Costs</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Advanced procedures, top specialists, and JCI-accredited hospitals at 60-80% lower costs than US, UK & Europe.
              </p>
              
              <div className="bg-white p-3 rounded-lg shadow-md max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search for treatments, procedures, or conditions..."
                    className="pl-10 py-6 text-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <div className="bg-white py-2 px-4 rounded-full shadow-sm flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-700">JCI Accredited Hospitals</span>
                </div>
                <div className="bg-white py-2 px-4 rounded-full shadow-sm flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-700">World-Class Doctors</span>
                </div>
                <div className="bg-white py-2 px-4 rounded-full shadow-sm flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-700">Advanced Technology</span>
                </div>
                <div className="bg-white py-2 px-4 rounded-full shadow-sm flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-700">English-Speaking Staff</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="cardiac" className="w-full mb-8">
              <div className="flex justify-center mb-6">
                <TabsList className="inline-flex h-auto p-1 flex-wrap">
                  {treatments.map(category => (
                    <TabsTrigger 
                      key={category.id}
                      value={category.id}
                      className="rounded-full py-2 px-5 data-[state=active]:bg-nile-600"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {treatments.map(category => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.procedures.map(procedure => (
                      <div 
                        key={procedure.id}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                      >
                        <img 
                          src={procedure.image}
                          alt={procedure.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            {procedure.name}
                          </h3>
                          <p className="text-gray-600 mb-4">{procedure.description}</p>
                          
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-nile-600 font-semibold">{procedure.cost}</div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Building className="h-4 w-4 mr-1" />
                              {procedure.hospital}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2 mb-6">
                            <div className="bg-gray-50 p-2 rounded text-center">
                              <div className="text-xs text-gray-500">Success</div>
                              <div className="font-medium text-sm">{procedure.success}</div>
                            </div>
                            <div className="bg-gray-50 p-2 rounded text-center">
                              <div className="text-xs text-gray-500">Hospital Stay</div>
                              <div className="font-medium text-sm">{procedure.stay}</div>
                            </div>
                            <div className="bg-gray-50 p-2 rounded text-center">
                              <div className="text-xs text-gray-500">Recovery</div>
                              <div className="font-medium text-sm">{procedure.recovery}</div>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button 
                              className="flex-1 bg-nile-600 hover:bg-nile-700"
                              onClick={openWhatsApp}
                            >
                              <MessageCircle className="h-4 w-4 mr-1" /> Inquire
                            </Button>
                            <Link to={`/treatments/${procedure.id}`} className="flex-1">
                              <Button 
                                variant="outline" 
                                className="w-full border-nile-600 text-nile-600 hover:bg-nile-50"
                              >
                                Learn More
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            
            {searchTerm && (
              <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-6">Search Results for "{searchTerm}"</h2>
                {filteredTreatments.length === 0 ? (
                  <div className="text-center py-8">
                    <InfoIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-700 mb-2">No treatments found</h3>
                    <p className="text-gray-500 mb-6">Try searching with different keywords or browse our categories</p>
                    <Button 
                      onClick={() => setSearchTerm("")}
                      className="bg-nile-600 hover:bg-nile-700"
                    >
                      Clear Search
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {filteredTreatments.map(category => (
                      <div key={category.id}>
                        <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {category.procedures.map(procedure => (
                            <div 
                              key={procedure.id}
                              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                            >
                              <img 
                                src={procedure.image}
                                alt={procedure.name}
                                className="w-full h-48 object-cover"
                              />
                              <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                  {procedure.name}
                                </h3>
                                <p className="text-gray-600 mb-4">{procedure.description}</p>
                                
                                <div className="flex items-center justify-between mb-4">
                                  <div className="text-nile-600 font-semibold">{procedure.cost}</div>
                                  <div className="flex items-center text-sm text-gray-500">
                                    <Building className="h-4 w-4 mr-1" />
                                    {procedure.hospital}
                                  </div>
                                </div>
                                
                                <div className="flex gap-2">
                                  <Button 
                                    className="flex-1 bg-nile-600 hover:bg-nile-700"
                                    onClick={openWhatsApp}
                                  >
                                    <MessageCircle className="h-4 w-4 mr-1" /> Inquire
                                  </Button>
                                  <Link to={`/treatments/${procedure.id}`} className="flex-1">
                                    <Button 
                                      variant="outline" 
                                      className="w-full border-nile-600 text-nile-600 hover:bg-nile-50"
                                    >
                                      Learn More
                                    </Button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
        
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Why Choose India for Medical Treatment?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <HeartPulse className="h-6 w-6 text-nile-600 mr-2" />
                    Cost Savings
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Treatments in India cost 60-80% less than in US, UK, or Europe while maintaining the same quality standards.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-3">Sample Cost Comparison</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Heart Bypass</span>
                        <div className="flex gap-4">
                          <span className="text-red-500 line-through">$123,000 (US)</span>
                          <span className="text-green-600 font-semibold">$7,000 (India)</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Knee Replacement</span>
                        <div className="flex gap-4">
                          <span className="text-red-500 line-through">$40,000 (US)</span>
                          <span className="text-green-600 font-semibold">$6,000 (India)</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>IVF Treatment</span>
                        <div className="flex gap-4">
                          <span className="text-red-500 line-through">$12,000 (US)</span>
                          <span className="text-green-600 font-semibold">$3,000 (India)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Star className="h-6 w-6 text-amber-500 mr-2" />
                    World-Class Healthcare
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">38 JCI-accredited hospitals with international standards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Doctors trained in US, UK & top global institutions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">State-of-the-art medical technology & equipment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">English-speaking medical staff & interpreters</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">No waiting time for procedures (immediate treatment)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Comprehensive support services for international patients</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-nile-600 to-medical-700 rounded-xl overflow-hidden shadow-xl">
              <div className="md:w-1/2 p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Medical Journey?</h2>
                <p className="mb-6">
                  Get a free second opinion from India's top specialists. Share your medical reports and get expert advice within 48 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="bg-white text-nile-600 hover:bg-gray-100 font-medium"
                    onClick={openWhatsApp}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> Send Reports via WhatsApp
                  </Button>
                  <Link to="/free-opinion">
                    <Button 
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 font-medium"
                    >
                      Free Medical Opinion
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://placehold.co/800x400/cccccc/white/?text=Medical+Consultation"
                  alt="Medical Consultation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Most Popular Medical Procedures in India
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                India has become a preferred destination for these specialized treatments due to high success rates, lower costs, and excellent care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-nile-100 flex items-center justify-center text-nile-600 mr-3">
                    <HeartPulse className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Cardiac Surgery</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  World-renowned cardiac surgeons performing complex heart surgeries with success rates comparable to the best hospitals globally.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-5">
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    50,000+ patients yearly
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-1" />
                    98.7% success rate
                  </span>
                </div>
                <Link to="/treatments/cardiac" className="text-nile-600 font-medium flex items-center hover:underline">
                  View All Cardiac Procedures <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-nile-100 flex items-center justify-center text-nile-600 mr-3">
                    <img 
                      src="https://placehold.co/100x100/medical-100/nile-600/?text=⚕"
                      alt="Orthopedic icon"
                      className="h-6 w-6"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Orthopedic Surgery</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Advanced orthopedic procedures including joint replacements, spine surgeries, and sports medicine interventions.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-5">
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    35,000+ patients yearly
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-1" />
                    97.8% success rate
                  </span>
                </div>
                <Link to="/treatments/orthopedic" className="text-nile-600 font-medium flex items-center hover:underline">
                  View All Orthopedic Procedures <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-nile-100 flex items-center justify-center text-nile-600 mr-3">
                    <img 
                      src="https://placehold.co/100x100/medical-100/nile-600/?text=♥"
                      alt="Transplant icon"
                      className="h-6 w-6"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Organ Transplants</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  High-success liver, kidney, and heart transplants performed by experts with comprehensive pre and post-operative care.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-5">
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    10,000+ patients yearly
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-1" />
                    95.2% success rate
                  </span>
                </div>
                <Link to="/treatments/transplant" className="text-nile-600 font-medium flex items-center hover:underline">
                  View All Transplant Procedures <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-nile-100 flex items-center justify-center text-nile-600 mr-3">
                    <img 
                      src="https://placehold.co/100x100/medical-100/nile-600/?text=👶"
                      alt="Fertility icon"
                      className="h-6 w-6"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Fertility Treatments</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Advanced IVF, ICSI, and other fertility procedures with some of the highest success rates globally at a fraction of Western costs.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-5">
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    25,000+ patients yearly
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-1" />
                    68-75% success rate
                  </span>
                </div>
                <Link to="/treatments/fertility" className="text-nile-600 font-medium flex items-center hover:underline">
                  View All Fertility Procedures <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-nile-100 flex items-center justify-center text-nile-600 mr-3">
                    <img 
                      src="https://placehold.co/100x100/medical-100/nile-600/?text=◯"
                      alt="Oncology icon"
                      className="h-6 w-6"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Cancer Treatments</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive cancer care including chemotherapy, radiation, immunotherapy, and cutting-edge targeted treatments.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-5">
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    30,000+ patients yearly
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-1" />
                    Varies by cancer type
                  </span>
                </div>
                <Link to="/treatments/oncology" className="text-nile-600 font-medium flex items-center hover:underline">
                  View All Cancer Treatments <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-nile-100 flex items-center justify-center text-nile-600 mr-3">
                    <img 
                      src="https://placehold.co/100x100/medical-100/nile-600/?text=⚡"
                      alt="Neurology icon"
                      className="h-6 w-6"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Neurological Surgery</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Complex brain and spine surgeries performed using advanced robotics and minimally invasive techniques.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-5">
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    18,000+ patients yearly
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-1" />
                    96.3% success rate
                  </span>
                </div>
                <Link to="/treatments/neurology" className="text-nile-600 font-medium flex items-center hover:underline">
                  View All Neurological Procedures <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
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

export default Treatments;
