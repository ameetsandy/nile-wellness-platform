import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, MessageCircle, Building, Award, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import AppointmentForm from "@/components/common/AppointmentForm";
import { mockDoctors } from "@/data/doctors";

const DoctorDetail = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedForm, setSelectedForm] = useState<"appointment" | "second-opinion" | "reports" | null>(null);

  useEffect(() => {
    fetchDoctor();
  }, [id]);

  const fetchDoctor = () => {
    // Simulate API call
    setTimeout(() => {
      const doctorData = mockDoctors[id as keyof typeof mockDoctors];
      setDoctor(doctorData);
      setLoading(false);
    }, 1000);
  };

  const openWhatsApp = () => {
    const message = `Hello, I would like to know more about Dr. ${doctor?.name}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFormOpen = (formType: "appointment" | "second-opinion" | "reports") => {
    setSelectedForm(formType);
  };

  const handleFormClose = () => {
    setSelectedForm(null);
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
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                    <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                      <img 
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                      <span className="text-sm font-medium block text-center">{doctor.experience}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{doctor.name}</h1>
                    <p className="text-xl text-emerald-600 mb-6">{doctor.specialty}</p>
                    
                    <div className="flex flex-wrap gap-6 mb-8">
                      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow">
                        <Building className="h-5 w-5 text-emerald-600" />
                        <span className="text-gray-700">{doctor.hospital}, {doctor.location}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow">
                        <Clock className="h-5 w-5 text-emerald-600" />
                        <span className="text-gray-700">{doctor.experience}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6"
                        onClick={() => handleFormOpen("appointment")}
                      >
                        <Calendar className="mr-2 h-4 w-4" /> Book Appointment
                      </Button>
                      <Button 
                        className="bg-green-600 hover:bg-green-700 text-white px-6"
                        onClick={openWhatsApp}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" /> Consult on WhatsApp
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6"
                        onClick={() => handleFormOpen("second-opinion")}
                      >
                        Get Second Opinion
                      </Button>
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
                          <Link 
                            to={`/hospitals/${doctor.hospital.toLowerCase().replace(/[,\s]+/g, '-')}`}
                            className="font-medium hover:text-nile-600 transition-colors"
                          >
                            {doctor.hospital}
                          </Link>
                          <p className="text-gray-600 text-sm">Sarita Vihar, Delhi Mathura Road, New Delhi - 110076</p>
                        </div>
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

      {selectedForm && (
        <AppointmentForm
          isOpen={true}
          onClose={handleFormClose}
          doctorName={doctor?.name}
          formType={selectedForm}
        />
      )}
    </div>
  );
};

export default DoctorDetail;