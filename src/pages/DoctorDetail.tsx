import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, MessageCircle, Building, Award, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const mockDoctors = {
  "dr-arjun-mehta": {
    id: "dr-arjun-mehta",
    name: "Dr. Arjun Mehta",
    specialty: "Cardiologist",
    designation: "Director of Cardiac Sciences",
    hospital: "Medanta - The Medicity",
    location: "Gurugram",
    experience: "22+ Years Experience",
    education: "MBBS - AIIMS Delhi, MD (Cardiology), DM (Interventional Cardiology) - PGIMER Chandigarh",
    image: "https://placehold.co/500x500/medical-700/white/?text=Dr.+Mehta",
    about: "Dr. Arjun Mehta is a pioneer in minimally invasive cardiac procedures with over two decades of experience. He has performed more than 8,000 successful angioplasties and introduced several innovative techniques in interventional cardiology. His expertise includes complex coronary interventions, structural heart disease management, and preventive cardiology.",
    expertise: [
      "Complex Coronary Interventions",
      "Structural Heart Disease",
      "Minimally Invasive Cardiac Surgery",
      "Preventive Cardiology"
    ],
    awards: [
      "Padma Shri for contributions to Medical Sciences (2019)",
      "Dr. B.C. Roy National Award for Medical Innovation",
      "Excellence in Interventional Cardiology - Asia Pacific Society"
    ],
    patientCount: 15000,
    successRate: 99.8
  },
  "dr-priya-sharma": {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    specialty: "Neurologist",
    designation: "Head of Neurology Department",
    hospital: "Max Institute of Neurosciences",
    location: "New Delhi",
    experience: "18+ Years Experience",
    education: "MBBS - Lady Hardinge Medical College, MD (Neurology), DM (Neurology) - NIMHANS Bangalore",
    image: "https://placehold.co/500x500/medical-700/white/?text=Dr.+Sharma",
    about: "Dr. Priya Sharma is renowned for her groundbreaking work in movement disorders and neuroimmunology. She has established Delhi's first comprehensive Movement Disorders Clinic and has been instrumental in introducing advanced deep brain stimulation techniques in India. Her research on Parkinson's disease has been published in several international journals.",
    expertise: [
      "Movement Disorders",
      "Neuroimmunology",
      "Deep Brain Stimulation",
      "Multiple Sclerosis Management"
    ],
    awards: [
      "International Movement Disorder Society Excellence Award",
      "Best Neurologist Award - Indian Academy of Neurology",
      "Research Excellence in Neuroimmunology - NIMHANS"
    ],
    patientCount: 12000,
    successRate: 97.5
  },
  "dr-rajesh-kumar": {
    id: "dr-rajesh-kumar",
    name: "Dr. Rajesh Kumar",
    specialty: "Orthopedic Surgeon",
    designation: "Senior Joint Replacement Surgeon",
    hospital: "Fortis Memorial Research Institute",
    location: "Gurugram",
    experience: "25+ Years Experience",
    education: "MBBS - King George Medical University, MS (Ortho) - AIIMS Delhi, Fellowship in Joint Replacement - UK",
    image: "https://placehold.co/500x500/medical-700/white/?text=Dr.+Kumar",
    about: "Dr. Rajesh Kumar is a leading joint replacement surgeon who has pioneered robotic knee replacement surgery in India. With expertise in complex revision surgeries and sports injuries, he has treated numerous national-level athletes. He has performed over 10,000 joint replacements with exceptional outcomes and introduced several innovative techniques in minimally invasive surgery.",
    expertise: [
      "Robotic Joint Replacement",
      "Complex Revision Surgery",
      "Sports Injury Management",
      "Minimally Invasive Surgery"
    ],
    awards: [
      "ISAKOS Award for Innovation in Arthroscopy",
      "Best Paper Award - International Society for Technology in Arthroplasty",
      "Lifetime Achievement Award - Indian Orthopaedic Association"
    ],
    patientCount: 20000,
    successRate: 99.5
  },
  "dr-anita-desai": {
    id: "dr-anita-desai",
    name: "Dr. Anita Desai",
    specialty: "Oncologist",
    designation: "Chief of Medical Oncology",
    hospital: "Tata Memorial Hospital",
    location: "Mumbai",
    experience: "20+ Years Experience",
    education: "MBBS - Grant Medical College Mumbai, MD (Medicine), DM (Medical Oncology) - Tata Memorial, Fellowship in Precision Oncology - USA",
    image: "https://placehold.co/500x500/medical-700/white/?text=Dr.+Desai",
    about: "Dr. Anita Desai is a pioneer in precision oncology and immunotherapy. Her research has led to breakthrough treatments in breast and lung cancers. She leads India's largest molecular tumor board and has established a comprehensive cancer genetics program. Her work in personalized cancer treatment has benefited thousands of patients across South Asia.",
    expertise: [
      "Precision Oncology",
      "Immunotherapy",
      "Cancer Genetics",
      "Clinical Trials"
    ],
    awards: [
      "ESMO Award for Innovation in Cancer Research",
      "Outstanding Achievement in Oncology - ASCO",
      "Woman Scientist of the Year - Indian Cancer Society"
    ],
    patientCount: 18000,
    successRate: 85.5
  }
};

const DoctorDetail = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctor = () => {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        const mockDoctor = mockDoctors[id as keyof typeof mockDoctors] || mockDoctors["dr-arjun-mehta"];
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
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white bg-gray-100">
                    <div className="w-full h-full flex items-center justify-center text-4xl text-gray-400">
                      Dr. Mehta
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
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6">
                        <Calendar className="mr-2 h-4 w-4" /> Book Appointment
                      </Button>
                      <Button 
                        className="bg-green-600 hover:bg-green-700 text-white px-6"
                        onClick={openWhatsApp}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" /> Consult on WhatsApp
                      </Button>
                      <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6">
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
