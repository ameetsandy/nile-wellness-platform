
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, MessageCircle, Building, Award, Clock, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const DoctorDetail = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This would be replaced with a real API call in production
    const fetchDoctor = () => {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        const mockDoctor = {
          id: id,
          name: "Dr. Arjun Mehta",
          specialty: "Cardiologist",
          hospital: "Apollo Hospital",
          location: "Delhi",
          experience: "15+ Years",
          education: "MBBS, MD - Cardiology, DM - Cardiology",
          image: "https://placehold.co/500x500/medical-700/white/?text=Dr.+Mehta",
          languages: ["English", "Hindi", "Punjabi"],
          about: "Dr. Arjun Mehta is one of India's leading cardiologists with over 15 years of experience in treating complex heart conditions. He has performed more than 5,000 heart surgeries with a success rate of 99.7%, making him one of the most reliable cardiac surgeons in the country.",
          expertise: ["Coronary Artery Bypass Surgery", "Heart Valve Replacement", "Angioplasty", "Cardiac Rehabilitation"],
          awards: ["Best Cardiologist Award - Indian Medical Association", "Excellence in Cardiac Care - Apollo Hospitals", "Healthcare Leadership Award - Health Ministry"],
          patientCount: 5000,
          successRate: 99.7,
          reviews: 4.9,
          reviewCount: 357
        };
        setDoctor(mockDoctor);
        setLoading(false);
      }, 500);
    };

    fetchDoctor();
  }, [id]);

  const openWhatsApp = () => {
    const phoneNumber = "911234567890";
    const message = `I'd like to consult with Dr. Arjun Mehta regarding my heart condition.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {loading ? (
          <div className="container mx-auto px-4 py-16 flex justify-center">
            <div className="w-16 h-16 border-4 border-nile-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <section className="bg-gradient-to-r from-medical-50 to-nile-50 py-12">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{doctor.name}</h1>
                    <p className="text-xl text-nile-600 mb-4">{doctor.specialty}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center bg-white px-3 py-2 rounded-md shadow-sm">
                        <Building className="h-5 w-5 text-nile-600 mr-2" />
                        <span>{doctor.hospital}, {doctor.location}</span>
                      </div>
                      <div className="flex items-center bg-white px-3 py-2 rounded-md shadow-sm">
                        <Clock className="h-5 w-5 text-nile-600 mr-2" />
                        <span>{doctor.experience} Experience</span>
                      </div>
                      <div className="flex items-center bg-white px-3 py-2 rounded-md shadow-sm">
                        <Star className="h-5 w-5 text-amber-500 mr-2" />
                        <span>{doctor.reviews} ({doctor.reviewCount} reviews)</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      <Button className="bg-nile-600 hover:bg-nile-700">
                        <Calendar className="mr-2 h-4 w-4" /> Book Appointment
                      </Button>
                      <Button 
                        className="bg-green-600 hover:bg-green-700"
                        onClick={openWhatsApp}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" /> Consult on WhatsApp
                      </Button>
                      <Button variant="outline" className="border-nile-600 text-nile-600 hover:bg-nile-50">
                        Get Second Opinion
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {doctor.languages.map((language: string) => (
                        <span key={language} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="py-12">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h2 className="text-2xl font-semibold mb-4">About {doctor.name}</h2>
                      <p className="text-gray-700">{doctor.about}</p>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h2 className="text-2xl font-semibold mb-4">Education & Training</h2>
                      <p className="text-gray-700 mb-4">{doctor.education}</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-nile-100 flex items-center justify-center text-nile-600 mr-3 flex-shrink-0">
                            <span className="text-sm font-medium">1</span>
                          </div>
                          <span>MBBS - All India Institute of Medical Sciences, Delhi</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-nile-100 flex items-center justify-center text-nile-600 mr-3 flex-shrink-0">
                            <span className="text-sm font-medium">2</span>
                          </div>
                          <span>MD (Cardiology) - Post Graduate Institute of Medical Education and Research</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-nile-100 flex items-center justify-center text-nile-600 mr-3 flex-shrink-0">
                            <span className="text-sm font-medium">3</span>
                          </div>
                          <span>DM (Interventional Cardiology) - Escorts Heart Institute and Research Centre</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h2 className="text-2xl font-semibold mb-4">Specializations</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {doctor.expertise.map((item: string, index: number) => (
                          <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                            <div className="h-10 w-10 rounded-full bg-nile-100 flex items-center justify-center text-nile-600 mr-3">
                              <span className="text-lg font-semibold">{index + 1}</span>
                            </div>
                            <span className="text-gray-800">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h2 className="text-2xl font-semibold mb-4">Awards & Recognition</h2>
                      <div className="space-y-4">
                        {doctor.awards.map((award: string, index: number) => (
                          <div key={index} className="flex items-start">
                            <Award className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{award}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600">Patients Treated</span>
                          <span className="font-semibold text-nile-600">{doctor.patientCount}+</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600">Success Rate</span>
                          <span className="font-semibold text-nile-600">{doctor.successRate}%</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600">Experience</span>
                          <span className="font-semibold text-nile-600">{doctor.experience}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="text-gray-600">Available For</span>
                          <span className="font-semibold text-nile-600">International Patients</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h3 className="text-xl font-semibold mb-4">Hospital Affiliation</h3>
                      <div className="flex items-start mb-4">
                        <MapPin className="h-5 w-5 text-nile-600 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">{doctor.hospital}</h4>
                          <p className="text-gray-600 text-sm">Sarita Vihar, Delhi Mathura Road, New Delhi - 110076</p>
                        </div>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <img 
                          src="https://placehold.co/400x200/white/gray/?text=Hospital+Map"
                          alt="Hospital Location Map"
                          className="w-full h-auto rounded"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-nile-50 rounded-xl shadow-md p-6">
                      <h3 className="text-xl font-semibold mb-4">Need More Information?</h3>
                      <p className="text-gray-700 mb-4">Our patient coordinators can help you with:</p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-nile-600 rounded-full mr-2"></span>
                          <span className="text-gray-600">Cost estimates</span>
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-nile-600 rounded-full mr-2"></span>
                          <span className="text-gray-600">Treatment options</span>
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-nile-600 rounded-full mr-2"></span>
                          <span className="text-gray-600">Hospital arrangements</span>
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-nile-600 rounded-full mr-2"></span>
                          <span className="text-gray-600">Visa assistance</span>
                        </li>
                      </ul>
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700"
                        onClick={openWhatsApp}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" /> Ask on WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default DoctorDetail;
