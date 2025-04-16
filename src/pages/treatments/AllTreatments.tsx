
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Bone, Brain, Microscope, Activity, Baby, Eye, Smile, Phone, MessageCircle, Clock, CircleDollarSign } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const AllTreatments = () => {
  const treatmentCategories = [
    {
      id: "cardiac",
      name: "Cardiac Procedures",
      icon: <Heart className="h-6 w-6 text-red-500" />,
      treatments: [
        { name: "Heart Bypass Surgery (CABG)", path: "/treatments/heart-bypass" },
        { name: "Valve Replacement", path: "#" },
        { name: "Angioplasty & Stenting", path: "#" },
        { name: "Pacemaker Implantation", path: "#" },
        { name: "Heart Transplant", path: "#" }
      ]
    },
    {
      id: "orthopedic",
      name: "Orthopedic Procedures",
      icon: <Bone className="h-6 w-6 text-amber-600" />,
      treatments: [
        { name: "Knee Replacement", path: "/treatments/knee-replacement" },
        { name: "Hip Replacement", path: "/treatments/hip-replacement" },
        { name: "Spine Surgery", path: "/treatments/spine-surgery" },
        { name: "Shoulder Replacement", path: "#" },
        { name: "Sports Injury Treatment", path: "#" }
      ]
    },
    {
      id: "neuro",
      name: "Neurosurgery & Neurology",
      icon: <Brain className="h-6 w-6 text-indigo-600" />,
      treatments: [
        { name: "Brain Tumor Surgery", path: "/treatments/brain-surgery" },
        { name: "Spine Surgery", path: "/treatments/spine-surgery" },
        { name: "Deep Brain Stimulation", path: "#" },
        { name: "Epilepsy Surgery", path: "#" },
        { name: "Stroke Treatment", path: "#" }
      ]
    },
    {
      id: "oncology",
      name: "Cancer Treatment",
      icon: <Microscope className="h-6 w-6 text-purple-600" />,
      treatments: [
        { name: "Cancer Surgery", path: "/treatments/cancer-treatment" },
        { name: "Chemotherapy", path: "#" },
        { name: "Radiation Therapy", path: "#" },
        { name: "Immunotherapy", path: "#" },
        { name: "Bone Marrow Transplant", path: "#" }
      ]
    },
    {
      id: "transplant",
      name: "Transplants",
      icon: <Activity className="h-6 w-6 text-green-600" />,
      treatments: [
        { name: "Kidney Transplant", path: "/treatments/kidney-transplant" },
        { name: "Liver Transplant", path: "/treatments/liver-transplant" },
        { name: "Heart Transplant", path: "#" },
        { name: "Bone Marrow Transplant", path: "#" },
        { name: "Corneal Transplant", path: "#" }
      ]
    },
    {
      id: "fertility",
      name: "Fertility & Women's Health",
      icon: <Baby className="h-6 w-6 text-pink-500" />,
      treatments: [
        { name: "IVF Treatment", path: "/treatments/ivf-fertility" },
        { name: "ICSI", path: "#" },
        { name: "Egg Freezing", path: "#" },
        { name: "Gynecological Surgery", path: "#" },
        { name: "Endometriosis Treatment", path: "#" }
      ]
    },
    {
      id: "bariatric",
      name: "Bariatric & Metabolic",
      icon: <Activity className="h-6 w-6 text-orange-500" />,
      treatments: [
        { name: "Gastric Bypass", path: "/treatments/bariatric-surgery" },
        { name: "Sleeve Gastrectomy", path: "#" },
        { name: "Gastric Banding", path: "#" },
        { name: "Mini Gastric Bypass", path: "#" },
        { name: "Metabolic Surgery", path: "#" }
      ]
    },
    {
      id: "eyecare",
      name: "Eye Care",
      icon: <Eye className="h-6 w-6 text-blue-500" />,
      treatments: [
        { name: "Cataract Surgery", path: "/treatments/eye-care" },
        { name: "LASIK", path: "#" },
        { name: "Glaucoma Treatment", path: "#" },
        { name: "Retinal Surgery", path: "#" },
        { name: "Corneal Transplant", path: "#" }
      ]
    },
    {
      id: "dental",
      name: "Dental Procedures",
      icon: <Smile className="h-6 w-6 text-cyan-500" />,
      treatments: [
        { name: "Dental Implants", path: "/treatments/dental-implants" },
        { name: "Full Mouth Rehabilitation", path: "#" },
        { name: "Cosmetic Dentistry", path: "#" },
        { name: "Root Canal Treatment", path: "#" },
        { name: "Dental Crowns & Bridges", path: "#" }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Medical Treatments in India
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                World-class healthcare at affordable prices with personalized care and support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700">
                  <MessageCircle className="mr-2 h-5 w-5" /> Get Free Medical Opinion
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:text-blue-700">
                  <Phone className="mr-2 h-5 w-5" /> Speak to Medical Expert
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Browse Treatments by Category</h2>
            
            <Tabs defaultValue="cardiac" className="w-full mb-8">
              <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
                {treatmentCategories.map(category => (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                    {category.icon}
                    <span>{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {treatmentCategories.map(category => (
                <TabsContent key={category.id} value={category.id} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.treatments.map((treatment, index) => (
                      <Link 
                        key={index} 
                        to={treatment.path}
                        className={`p-6 rounded-xl shadow-md transition-all hover:shadow-lg ${
                          treatment.path !== "#" 
                            ? "bg-white hover:bg-blue-50 cursor-pointer" 
                            : "bg-gray-50 cursor-not-allowed"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {category.icon}
                          <h3 className="font-semibold text-lg">{treatment.name}</h3>
                        </div>
                        {treatment.path === "#" && (
                          <div className="mt-2 text-sm text-gray-500">Coming soon</div>
                        )}
                      </Link>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Popular Treatments */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Most Popular Medical Procedures</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Procedure 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/nile-600/white/?text=Heart+Bypass"
                    alt="Heart Bypass Surgery"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="h-5 w-5 text-red-500" />
                    <h3 className="text-xl font-bold">Heart Bypass Surgery</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Restore blood flow to your heart with world-class cardiac care at a fraction of Western costs.</p>
                  <div className="mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Save up to 90%</span>
                  </div>
                  <Link to="/treatments/heart-bypass">
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </div>
              </div>

              {/* Procedure 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/nile-600/white/?text=Knee+Replacement"
                    alt="Knee Replacement"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Bone className="h-5 w-5 text-amber-600" />
                    <h3 className="text-xl font-bold">Knee Replacement</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Regain mobility and relieve pain with advanced joint replacement surgery by top orthopedic surgeons.</p>
                  <div className="mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Save up to 85%</span>
                  </div>
                  <Link to="/treatments/knee-replacement">
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </div>
              </div>

              {/* Procedure 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/nile-600/white/?text=IVF"
                    alt="IVF Treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Baby className="h-5 w-5 text-pink-500" />
                    <h3 className="text-xl font-bold">IVF Treatment</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Build your family with high success rate IVF procedures and personalized fertility care.</p>
                  <div className="mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Save up to 80%</span>
                  </div>
                  <Link to="/treatments/ivf-fertility">
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose India */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose India for Medical Treatment?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-nile-600 text-white p-3 rounded-full mb-4">
                    <Activity className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">World-Class Healthcare</h3>
                  <p className="text-gray-700">JCI & NABH accredited hospitals with globally trained doctors and state-of-the-art facilities.</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-nile-600 text-white p-3 rounded-full mb-4">
                    <CircleDollarSign className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Affordable Excellence</h3>
                  <p className="text-gray-700">Save 60-90% on medical procedures compared to US, UK, and European costs.</p>
                </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-nile-600 text-white p-3 rounded-full mb-4">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Personalized Care</h3>
                  <p className="text-gray-700">Dedicated medical coordinators, translators, and support staff for a seamless experience.</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-nile-600 text-white p-3 rounded-full mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">No Waiting Time</h3>
                  <p className="text-gray-700">Immediate appointments and procedures without the long waitlists common in many countries.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-nile-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Not sure which treatment you need?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Our medical experts can review your reports and recommend the best treatment options for your condition.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
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

export default AllTreatments;
