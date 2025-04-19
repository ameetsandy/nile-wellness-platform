import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MessageCircle, Building, Award, MapPin, ArrowRight, Phone, CheckCircle, User, Bed, HeartPulse, Clock, BedDouble, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { calculateInternationalPatients, generatePatientSatisfaction, generateSuccessRate, calculateOperationTheaters, calculateICUBeds } from "@/utils/hospitalStats";

const HospitalDetail = () => {
  const { id } = useParams();
  const [hospital, setHospital] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This would be replaced with a real API call in production
    const fetchHospital = () => {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        const mockHospital = {
          id: id,
          name: "Apollo Hospitals",
          location: "Delhi",
          address: "Sarita Vihar, Delhi Mathura Road, New Delhi - 110076",
          accreditation: ["JCI", "NABH"],
          established: 1983,
          description: "Apollo Hospitals, Delhi is a state-of-the-art multi-specialty tertiary care hospital established in 1996. The hospital is spread across 15 acres and has 900 beds. The hospital is a world-class facility and offers high-quality healthcare services to patients from India and abroad.",
          image: "https://placehold.co/800x400/medical-600/white/?text=Apollo+Hospitals",
          logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
          internationalPatients: 5000,
          beds: 900,
          doctors: 500,
          specialties: 57,
          specializations: [
            "Cardiology",
            "Oncology",
            "Neurology",
            "Orthopedics",
            "Gastroenterology",
            "Nephrology",
            "Urology",
            "Pulmonology"
          ],
          facilities: {
            medical: [
              `Modern Operation Theaters (${calculateOperationTheaters(900)})`,
              `Intensive Care Units (${calculateICUBeds(calculateOperationTheaters(900))} beds)`,
              "Advanced Imaging Center (MRI, CT, PET)",
              "Catheterization Lab",
              "Radiation Therapy Center",
              "24/7 Emergency Department"
            ],
            amenities: [
              "International Patient Lounge",
              "Visa Assistance",
              "Airport Transfer",
              "Language Interpreters",
              "Currency Exchange",
              "Hotel Booking",
              "24/7 Pharmacy",
              "Cafeteria"
            ]
          },
          topDoctors: [
            {
              id: "arjun-mehta",
              name: "Dr. Arjun Mehta",
              specialty: "Cardiologist",
              image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Mehta"
            },
            {
              id: "pooja-nair",
              name: "Dr. Pooja Nair",
              specialty: "Oncologist",
              image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Nair"
            },
            {
              id: "yusuf-khan",
              name: "Dr. Yusuf Khan",
              specialty: "Orthopedic",
              image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Khan"
            }
          ],
          reviews: 4.8,
          reviewCount: 789,
          images: [
            "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
            "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
            "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
            "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace"
          ]
        };

        // Calculate statistics
        const stats = {
          internationalPatients: calculateInternationalPatients(mockHospital.beds),
          patientSatisfaction: generatePatientSatisfaction(),
          successRate: generateSuccessRate(),
          // Established year would come from Excel data
          established: 1983
        };

        setHospital({ ...mockHospital, stats });
        setLoading(false);
      }, 500);
    };

    fetchHospital();
  }, [id]);

  const openWhatsApp = () => {
    const phoneNumber = "911234567890";
    const message = `I'm interested in treatment at Apollo Hospitals, Delhi.`;
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
                <div className="flex flex-col gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      <div className="w-48 h-36 flex items-center justify-center bg-white rounded-lg shadow-sm p-4">
                        <img src={hospital.logo} alt={hospital.name} className="max-w-full max-h-full" />
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{hospital.name}</h1>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                          {hospital.accreditation.map((item: string) => (
                            <span key={item} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                              {item} Accredited
                            </span>
                          ))}
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            Multi-Specialty
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-center md:justify-start mb-6">
                          <MapPin className="h-5 w-5 text-nile-600 mr-2" />
                          <span className="text-gray-600">{hospital.address}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                          <Button 
                            className="bg-green-600 hover:bg-green-700"
                            onClick={openWhatsApp}
                          >
                            <MessageCircle className="mr-2 h-4 w-4" /> Inquire on WhatsApp
                          </Button>
                          <Button className="bg-nile-600 hover:bg-nile-700">
                            <Phone className="mr-2 h-4 w-4" /> Call Hospital
                          </Button>
                          <Button variant="outline" className="border-nile-600 text-nile-600 hover:bg-nile-50">
                            Get Cost Estimate
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <Bed className="h-8 w-8 text-nile-600 mx-auto mb-2" />
                      <h4 className="text-2xl font-bold text-gray-800">{hospital.beds}</h4>
                      <p className="text-gray-600 text-sm">Beds</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <User className="h-8 w-8 text-nile-600 mx-auto mb-2" />
                      <h4 className="text-2xl font-bold text-gray-800">{hospital.doctors}</h4>
                      <p className="text-gray-600 text-sm">Doctors</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <HeartPulse className="h-8 w-8 text-nile-600 mx-auto mb-2" />
                      <h4 className="text-2xl font-bold text-gray-800">{hospital.specialties}</h4>
                      <p className="text-gray-600 text-sm">Specialties</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <Clock className="h-8 w-8 text-nile-600 mx-auto mb-2" />
                      <h4 className="text-2xl font-bold text-gray-800">{new Date().getFullYear() - hospital.established}</h4>
                      <p className="text-gray-600 text-sm">Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="py-12">
              <div className="container mx-auto px-4">
                <Tabs defaultValue="about" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="specialties">Specialties</TabsTrigger>
                    <TabsTrigger value="doctors">Doctors</TabsTrigger>
                    <TabsTrigger value="facilities">Facilities</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="about" className="mt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                          <img 
                            src={hospital.image}
                            alt={hospital.name}
                            className="w-full h-64 object-cover"
                          />
                          <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-4">About {hospital.name}</h2>
                            <p className="text-gray-700 mb-6">{hospital.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-3">Hospital Highlights</h3>
                                <ul className="space-y-2">
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">State-of-the-art medical equipment</span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">Advanced diagnostic facilities</span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">24/7 emergency services</span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">International patient services</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-3">Accreditations & Awards</h3>
                                <ul className="space-y-2">
                                  <li className="flex items-start">
                                    <Award className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">Joint Commission International (JCI)</span>
                                  </li>
                                  <li className="flex items-start">
                                    <Award className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">National Accreditation Board for Hospitals (NABH)</span>
                                  </li>
                                  <li className="flex items-start">
                                    <Award className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">Best Hospital Award - Healthcare Summit</span>
                                  </li>
                                  <li className="flex items-start">
                                    <Award className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">Excellence in Patient Care - Medical Council</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h3 className="font-semibold text-gray-800 mb-3">Hospital Images</h3>
                              <div className="grid grid-cols-2 gap-4">
                                {hospital.images.map((image: string, index: number) => (
                                  <div 
                                    key={index} 
                                    className="aspect-square rounded-lg overflow-hidden"
                                  >
                                    <img 
                                      src={`${image}?auto=format&fit=crop&w=600&h=600`}
                                      alt={`${hospital.name} - Image ${index + 1}`}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                ))}
                              </div>
                              <div className="flex items-start mt-4">
                                <MapPin className="h-5 w-5 text-nile-600 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-gray-700">{hospital.address}</p>
                                  <p className="text-sm text-gray-500 mt-1">5 km from Indira Gandhi International Airport</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-md p-6">
                          <h3 className="text-xl font-semibold mb-4">Key Statistics</h3>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-600">International Patients</span>
                              <span className="font-semibold text-nile-600">{hospital.stats.internationalPatients}+</span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-600">Patient Satisfaction</span>
                              <span className="font-semibold text-nile-600">{hospital.stats.patientSatisfaction}%</span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-600">Established</span>
                              <span className="font-semibold text-nile-600">{hospital.stats.established}</span>
                            </div>
                            <div className="flex items-center justify-between py-2">
                              <span className="text-gray-600">Success Rate</span>
                              <span className="font-semibold text-nile-600">{hospital.stats.successRate}%</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-nile-50 rounded-xl shadow-md p-6">
                          <h3 className="text-xl font-semibold mb-4">International Patient Services</h3>
                          <ul className="space-y-2 mb-6">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Visa letter assistance</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Airport pickup & drop</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Language interpreters</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Accommodation arrangements</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Dedicated international coordinator</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Currency exchange</span>
                            </li>
                          </ul>
                          <Button 
                            className="w-full bg-green-600 hover:bg-green-700"
                            onClick={openWhatsApp}
                          >
                            <MessageCircle className="mr-2 h-4 w-4" /> Inquire for More Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="specialties" className="mt-6">
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h2 className="text-2xl font-semibold mb-6">Medical Specialties</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {hospital.specializations.map((specialty: string, index: number) => (
                          <div 
                            key={index}
                            className="bg-gray-50 p-4 rounded-lg hover:bg-nile-50 transition-colors"
                          >
                            <HeartPulse className="h-8 w-8 text-nile-600 mb-2" />
                            <h3 className="font-medium text-gray-800">{specialty}</h3>
                            <p className="text-sm text-gray-600 mt-1">World-class care</p>
                            <Link 
                              to={`/treatments/${specialty.toLowerCase()}`}
                              className="text-nile-600 text-sm flex items-center mt-2 hover:underline"
                            >
                              Learn more
                              <ArrowRight className="h-3 w-3 ml-1" />
                            </Link>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-10">
                        <h3 className="text-xl font-semibold mb-4">Popular Procedures</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                            <div className="h-10 w-10 rounded-full bg-nile-100 flex items-center justify-center text-nile-600 mr-3">
                              <span className="font-semibold">1</span>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Coronary Artery Bypass Grafting (CABG)</h4>
                              <p className="text-sm text-gray-600 mt-1">Success rate: 98.7%</p>
                              <p className="text-sm text-nile-600 mt-1">Starting from $5,800</p>
                            </div>
                          </div>
                          <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                            <div className="h-10 w-10 rounded-full bg-nile-100 flex items-center justify-center text-nile-600 mr-3">
                              <span className="font-semibold">2</span>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Knee Replacement Surgery</h4>
                              <p className="text-sm text-gray-600 mt-1">Success rate: 99.2%</p>
                              <p className="text-sm text-nile-600 mt-1">Starting from $6,200</p>
                            </div>
                          </div>
                          <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                            <div className="h-10 w-10 rounded-full bg-nile-100 flex items-center justify-center text-nile-600 mr-3">
                              <span className="font-semibold">3</span>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Liver Transplant</h4>
                              <p className="text-sm text-gray-600 mt-1">Success rate: 95.8%</p>
                              <p className="text-sm text-nile-600 mt-1">Starting from $35,000</p>
                            </div>
                          </div>
                          <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                            <div className="h-10 w-10 rounded-full bg-nile-100 flex items-center justify-center text-nile-600 mr-3">
                              <span className="font-semibold">4</span>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">IVF Treatment</h4>
                              <p className="text-sm text-gray-600 mt-1">Success rate: 68%</p>
                              <p className="text-sm text-nile-600 mt-1">Starting from $3,500</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 text-center">
                          <Button 
                            variant="outline" 
                            className="border-nile-600 text-nile-600 hover:bg-nile-50"
                          >
                            View All Procedures & Cost Estimates
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="doctors" className="mt-6">
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h2 className="text-2xl font-semibold mb-6">Top Doctors at {hospital.name}</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {hospital.topDoctors.map((doctor: any) => (
                          <Link 
                            key={doctor.id}
                            to={`/doctors/${doctor.id}`}
                            className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                          >
                            <div className="flex flex-col sm:flex-row">
                              <img 
                                src={doctor.image}
                                alt={doctor.name}
                                className="sm:w-1/3 h-32 sm:h-auto object-cover"
                              />
                              <div className="p-4 flex-1">
                                <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
                                <p className="text-nile-600 text-sm mb-2">{doctor.specialty}</p>
                                <div className="flex items-center">
                                  <Building className="h-4 w-4 text-gray-500 mr-1" />
                                  <span className="text-gray-600 text-sm">{hospital.name}</span>
                                </div>
                                <div className="mt-3 flex items-center text-nile-600 text-sm hover:underline">
                                  View Profile
                                  <ArrowRight className="h-3 w-3 ml-1" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      <div className="mt-8 text-center">
                        <Link 
                          to="/doctors"
                          className="cta-secondary"
                        >
                          View All Doctors <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="facilities" className="mt-6">
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h2 className="text-2xl font-semibold mb-6">Hospital Facilities & Amenities</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h3 className="text-xl font-medium mb-6 flex items-center">
                            <BedDouble className="h-6 w-6 text-nile-600 mr-3" />
                            Medical Facilities
                          </h3>
                          <ul className="space-y-4">
                            {hospital.facilities.medical.map((facility: string, index: number) => (
                              <li key={index} className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">{facility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-medium mb-6 flex items-center">
                            <Hotel className="h-6 w-6 text-nile-600 mr-3" />
                            Patient Amenities
                          </h3>
                          <div className="grid grid-cols-1 gap-3">
                            {hospital.facilities.amenities.map((amenity: string, index: number) => (
                              <div 
                                key={index}
                                className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-nile-50 transition-colors"
                              >
                                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">{amenity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </section>
            
            <section className="py-8 bg-nile-50">
              <div className="container mx-auto px-4">
                <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                  <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Treatment Journey?</h2>
                    <p className="text-gray-700 mb-6">
                      Our team will help you with cost estimates, doctor selection, appointment scheduling, visa letter, and more.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        className="bg-green-600 hover:bg-green-700"
                        onClick={openWhatsApp}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" /> Ask on WhatsApp
                      </Button>
                      <Button className="bg-nile-600 hover:bg-nile-700">
                        Get Cost Estimate
                      </Button>
                      <Link to="/free-opinion">
                        <Button variant="outline" className="border-nile-600 text-nile-600 hover:bg-nile-50 w-full sm:w-auto">
                          Upload Medical Reports
                        </Button>
                      </Link>
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

export default HospitalDetail;
