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
        const mockHospitals = {
          "aakash-healthcare-super-speciality-hospital-dwarka-new-delhi": {
            id: "aakash-healthcare-super-speciality-hospital-dwarka-new-delhi",
            name: "Aakash Healthcare Super Speciality Hospital",
            location: "New Delhi",
            address: "Sector 3, Dwarka, New Delhi - 110075",
            accreditation: ["NABH"],
            established: 2011,
            description: "Aakash Healthcare Super Speciality Hospital is a state-of-the-art multi-specialty hospital in Dwarka, New Delhi. With 200 beds and advanced medical infrastructure, it provides comprehensive healthcare services with a focus on patient-centric care.",
            image: "https://www.vaidam.com/sites/default/files/main_image-min_14.jpg",
            logo: "https://placehold.co/200x100/white/gray/?text=Aakash",
            internationalPatients: 2000,
            beds: 200,
            doctors: 150,
            specialties: 25,
            specializations: [
              "Cardiology",
              "Orthopedics",
              "Neurology",
              "Gastroenterology",
              "Nephrology",
              "Urology",
              "Oncology",
              "Critical Care"
            ],
            facilities: {
              medical: [
                `Modern Operation Theaters (${calculateOperationTheaters(200)})`,
                `Intensive Care Units (${calculateICUBeds(calculateOperationTheaters(200))} beds)`,
                "Advanced Imaging Center",
                "Cath Lab",
                "Dialysis Unit",
                "24/7 Emergency Department"
              ],
              amenities: [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer",
                "Language Interpreters",
                "Currency Exchange",
                "24/7 Pharmacy",
                "Cafeteria"
              ]
            },
            topDoctors: [
              {
                id: "harsh-bhardwaj",
                name: "Dr. Harsh Bhardwaj",
                specialty: "Neurologist",
                image: "https://www.vaidam.com/sites/default/files/dr-harsh-bhardwaj.jpg",
                experience: "20+ Yrs"
              },
              {
                id: "ankit-gupta",
                name: "Dr. Ankit Gupta",
                specialty: "Cardiac Surgeon",
                image: "https://www.vaidam.com/sites/default/files/dr_ankit_gupta-min.png",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.7,
            reviewCount: 450,
            images: [
              "https://www.vaidam.com/sites/default/files/main_image-min_14.jpg",
              "https://placehold.co/600x400/medical-600/white/?text=Aakash+Hospital+2",
              "https://placehold.co/600x400/medical-600/white/?text=Aakash+Hospital+3",
              "https://placehold.co/600x400/medical-600/white/?text=Aakash+Hospital+4"
            ]
          },
          "aditya-birla-memorial-hospital-pune": {
            id: "aditya-birla-memorial-hospital-pune",
            name: "Aditya Birla Memorial Hospital",
            location: "Pune",
            address: "Aditya Birla Memorial Hospital, Chinchwad, Pune - 411033",
          accreditation: ["JCI", "NABH"],
            established: 2006,
            description: "Aditya Birla Memorial Hospital is a 500-bed multi-specialty hospital in Pune, known for its world-class infrastructure and advanced medical technology. The hospital is committed to providing quality healthcare services with a focus on patient safety and satisfaction.",
            image: "https://www.vaidam.com/sites/default/files/aditya_birla_memorial_hospital_pune_building-min.jpg",
            logo: "https://placehold.co/200x100/white/gray/?text=Aditya+Birla",
          internationalPatients: 5000,
            beds: 500,
            doctors: 300,
            specialties: 35,
          specializations: [
            "Cardiology",
            "Neurology",
            "Orthopedics",
              "Oncology",
            "Gastroenterology",
            "Nephrology",
            "Urology",
              "Pulmonology",
              "Pediatrics"
          ],
          facilities: {
            medical: [
                `Modern Operation Theaters (${calculateOperationTheaters(500)})`,
                `Intensive Care Units (${calculateICUBeds(calculateOperationTheaters(500))} beds)`,
                "Advanced Imaging Center",
                "Cath Lab",
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
                id: "sudhir-kumar",
                name: "Dr. Sudhir Kumar",
                specialty: "Neurologist",
                image: "https://d1ea147o02h74h.cloudfront.net/dr._sudhir_kumar_0.jpg",
                experience: "20+ Yrs"
              },
              {
                id: "kisley-shrivastav",
                name: "Dr. Kisley Shrivastav",
                specialty: "Interventional Cardiologist",
                image: "https://www.vaidam.com/sites/default/files/dr._kisley_shrivastav_0.jpg",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.8,
            reviewCount: 600,
            images: [
              "https://www.vaidam.com/sites/default/files/aditya_birla_memorial_hospital_pune_building-min.jpg",
              "https://placehold.co/600x400/medical-600/white/?text=Aditya+Birla+Hospital+2",
              "https://placehold.co/600x400/medical-600/white/?text=Aditya+Birla+Hospital+3",
              "https://placehold.co/600x400/medical-600/white/?text=Aditya+Birla+Hospital+4"
            ]
          },
          "advanced-fertility-and-gynaecology-centre-new-delhi": {
            id: "advanced-fertility-and-gynaecology-centre-new-delhi",
            name: "Advance Fertility and Gynaecology Centre",
            location: "New Delhi",
            address: "Greater Kailash, New Delhi - 110048",
            accreditation: [],
            established: 2011,
            description: "Advance Fertility and Gynaecology Centre is a specialized center for reproductive medicine and gynecological care. The center is known for its high success rates in fertility treatments and personalized care for patients.",
            image: "https://www.vaidam.com/sites/default/files/advanced_fertility_center_-dr_kaberi_banerjee-_new_delhi.jpg",
            logo: "https://placehold.co/200x100/white/gray/?text=Advance+Fertility",
            internationalPatients: 1000,
            beds: 0,
            doctors: 15,
            specialties: 2,
            specializations: [
              "Fertility Treatment",
              "Gynecology"
            ],
            facilities: {
              medical: [
                "Advanced IVF Lab",
                "Ultrasound Room",
                "Operation Theater",
                "Recovery Room",
                "Consultation Rooms"
              ],
              amenities: [
                "Patient Counseling Room",
                "Comfortable Waiting Area",
                "24/7 Emergency Services",
                "Pharmacy"
              ]
            },
            topDoctors: [
              {
                id: "kaberi-banerjee",
                name: "Dr. Kaberi Banerjee",
                specialty: "Fertility Specialist",
                image: "https://www.vaidam.com/sites/default/files/advanced_fertility_center_-dr_kaberi_banerjee-_new_delhi.jpg",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.9,
            reviewCount: 300,
            images: [
              "https://www.vaidam.com/sites/default/files/advanced_fertility_center_-dr_kaberi_banerjee-_new_delhi.jpg",
              "https://placehold.co/600x400/medical-600/white/?text=Fertility+Center+2",
              "https://placehold.co/600x400/medical-600/white/?text=Fertility+Center+3",
              "https://placehold.co/600x400/medical-600/white/?text=Fertility+Center+4"
            ]
          },
          "ahalia-ayurveda-hospital-kerala": {
            id: "ahalia-ayurveda-hospital-kerala",
            name: "Ahalia Ayurveda Hospital",
            location: "Palakkad",
            address: "Ahalia Campus, Kozhippara, Palakkad - 678557, Kerala",
            accreditation: ["JCI", "NABH"],
            established: 1984,
            description: "Ahalia Ayurveda Hospital is a renowned Ayurvedic healthcare center in Kerala, offering traditional Ayurvedic treatments with modern facilities. The hospital combines ancient Ayurvedic wisdom with contemporary medical practices to provide holistic healthcare solutions.",
            image: "https://www.vaidam.com/sites/default/files/ahalia_ayurveda_hospital_kerala.jpg",
            logo: "https://placehold.co/200x100/white/gray/?text=Ahalia",
            internationalPatients: 1000,
            beds: 100,
            doctors: 50,
            specialties: 15,
            specializations: [
              "Panchakarma",
              "Kerala Ayurveda",
              "Rheumatology",
              "Neurology",
              "Orthopedics",
              "Dermatology",
              "Respiratory Care",
              "Gastroenterology"
            ],
            facilities: {
              medical: [
                `Modern Operation Theaters (${calculateOperationTheaters(100)})`,
                `Intensive Care Units (${calculateICUBeds(calculateOperationTheaters(100))} beds)`,
                "Panchakarma Center",
                "Ayurvedic Pharmacy",
                "Yoga and Meditation Center",
                "24/7 Emergency Department"
              ],
              amenities: [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer",
                "Language Interpreters",
                "Currency Exchange",
                "24/7 Pharmacy",
                "Cafeteria",
                "Garden Area"
              ]
            },
            topDoctors: [
              {
                id: "rajesh-kumar",
                name: "Dr. Rajesh Kumar",
                specialty: "Ayurvedic Physician",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Kumar",
                experience: "20+ Yrs"
              },
              {
                id: "meera-nair",
                name: "Dr. Meera Nair",
                specialty: "Panchakarma Specialist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Nair",
                experience: "20+ Yrs"
            }
          ],
          reviews: 4.8,
            reviewCount: 350,
            images: [
              "https://www.vaidam.com/sites/default/files/ahalia_ayurveda_hospital_kerala.jpg",
              "https://placehold.co/600x400/medical-600/white/?text=Ahalia+Hospital+2",
              "https://placehold.co/600x400/medical-600/white/?text=Ahalia+Hospital+3",
              "https://placehold.co/600x400/medical-600/white/?text=Ahalia+Hospital+4"
            ]
          },
          "ajanta-hospital-ivf-centre-pvt-ltd": {
            id: "ajanta-hospital-ivf-centre-pvt-ltd",
            name: "Ajanta Hospital & IVF Centre Pvt. Ltd.",
            location: "Lucknow",
            address: "Sector 1, Gomti Nagar, Lucknow - 226010, Uttar Pradesh",
            accreditation: ["NABH"],
            established: 2004,
            description: "Ajanta Hospital & IVF Centre is a leading multi-specialty hospital in Lucknow, known for its excellence in IVF treatments and comprehensive healthcare services. The hospital combines advanced medical technology with compassionate care.",
            image: "https://www.vaidam.com/sites/default/files/ajanta_hospital_building-min.jpg",
            logo: "https://placehold.co/200x100/white/gray/?text=Ajanta",
            internationalPatients: 2000,
            beds: 141,
            doctors: 75,
            specialties: 20,
            specializations: [
              "IVF and Infertility",
              "Obstetrics & Gynecology",
              "Pediatrics",
              "General Medicine",
              "Orthopedics",
              "ENT",
              "Ophthalmology",
              "Dermatology"
            ],
            facilities: {
              medical: [
                `Modern Operation Theaters (${calculateOperationTheaters(141)})`,
                `Intensive Care Units (${calculateICUBeds(calculateOperationTheaters(141))} beds)`,
                "Advanced IVF Lab",
                "Neonatal ICU",
                "Labor & Delivery Suites",
                "24/7 Emergency Department"
              ],
              amenities: [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer",
                "Language Interpreters",
                "Currency Exchange",
                "24/7 Pharmacy",
                "Cafeteria",
                "Patient Counseling Room"
              ]
            },
            topDoctors: [
              {
                id: "anil-gupta",
                name: "Dr. Anil Gupta",
                specialty: "IVF Specialist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Gupta",
                experience: "20+ Yrs"
              },
              {
                id: "priya-sharma",
                name: "Dr. Priya Sharma",
                specialty: "Gynecologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Sharma",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.7,
            reviewCount: 400,
            images: [
              "https://www.vaidam.com/sites/default/files/ajanta_hospital_building-min.jpg",
              "https://placehold.co/600x400/medical-600/white/?text=Ajanta+Hospital+2",
              "https://placehold.co/600x400/medical-600/white/?text=Ajanta+Hospital+3",
              "https://placehold.co/600x400/medical-600/white/?text=Ajanta+Hospital+4"
            ]
          },
          "alexis-multispeciality-hospital-nagpur-maharashtra-india": {
            id: "alexis-multispeciality-hospital-nagpur-maharashtra-india",
            name: "Alexis Multispeciality Hospital",
            location: "Nagpur",
            address: "Wardha Road, Nagpur - 440015, Maharashtra",
            accreditation: ["JCI"],
            established: 2016,
            description: "Alexis Multispeciality Hospital is a state-of-the-art healthcare facility in Nagpur, offering comprehensive medical services with a focus on patient care and advanced treatment options. The hospital is known for its modern infrastructure and expert medical team.",
            image: "https://www.vaidam.com/sites/default/files/alexis_profile-min.jpg",
            logo: "https://placehold.co/200x100/white/gray/?text=Alexis",
            internationalPatients: 1500,
            beds: 200,
            doctors: 100,
            specialties: 30,
            specializations: [
              "Cardiology",
              "Neurology",
              "Orthopedics",
              "Oncology",
              "Gastroenterology",
              "Nephrology",
              "Urology",
              "Pulmonology"
            ],
            facilities: {
              medical: [
                `Modern Operation Theaters (${calculateOperationTheaters(200)})`,
                `Intensive Care Units (${calculateICUBeds(calculateOperationTheaters(200))} beds)`,
                "Advanced Imaging Center",
                "Cath Lab",
                "Dialysis Unit",
                "24/7 Emergency Department"
              ],
              amenities: [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer",
                "Language Interpreters",
                "Currency Exchange",
                "24/7 Pharmacy",
                "Cafeteria",
                "Garden Area"
              ]
            },
            topDoctors: [
              {
                id: "vikram-patil",
                name: "Dr. Vikram Patil",
                specialty: "Cardiologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Patil",
                experience: "20+ Yrs"
              },
              {
                id: "anita-deshmukh",
                name: "Dr. Anita Deshmukh",
                specialty: "Neurologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Deshmukh",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.6,
            reviewCount: 300,
            images: [
              "https://www.vaidam.com/sites/default/files/alexis_profile-min.jpg",
              "https://placehold.co/600x400/medical-600/white/?text=Alexis+Hospital+2",
              "https://placehold.co/600x400/medical-600/white/?text=Alexis+Hospital+3",
              "https://placehold.co/600x400/medical-600/white/?text=Alexis+Hospital+4"
            ]
          },
          "alive-wellness-clinics": {
            id: "alive-wellness-clinics",
            name: "Alive Wellness Clinics",
            location: "New Delhi",
            address: "Greater Kailash, New Delhi - 110048",
            accreditation: [],
            established: 1997,
            description: "Alive Wellness Clinics is a specialized center focusing on holistic wellness and preventive healthcare. The clinic offers personalized wellness programs, lifestyle management, and preventive healthcare services.",
            image: "https://www.vaidam.com/sites/default/files/alive_wellness_list_image-min.png",
            logo: "https://placehold.co/200x100/white/gray/?text=Alive",
            internationalPatients: 500,
            beds: 0,
            doctors: 10,
            specialties: 3,
            specializations: [
              "Wellness Programs",
              "Lifestyle Management",
              "Preventive Healthcare"
            ],
            facilities: {
              medical: [
                "Consultation Rooms",
                "Wellness Assessment Center",
                "Dietary Counseling Room",
                "Fitness Assessment Area",
                "Therapy Rooms"
              ],
              amenities: [
                "Comfortable Waiting Area",
                "Cafeteria",
                "Wellness Library",
                "Parking Facility"
              ]
            },
            topDoctors: [
              {
                id: "rahul-sharma",
                name: "Dr. Rahul Sharma",
                specialty: "Wellness Specialist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Sharma",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.9,
            reviewCount: 200,
          images: [
              "https://www.vaidam.com/sites/default/files/alive_wellness_list_image-min.png",
              "https://placehold.co/600x400/medical-600/white/?text=Alive+Clinic+2",
              "https://placehold.co/600x400/medical-600/white/?text=Alive+Clinic+3",
              "https://placehold.co/600x400/medical-600/white/?text=Alive+Clinic+4"
            ]
          }
        };

        const mockHospital = mockHospitals[id as keyof typeof mockHospitals] || mockHospitals["aakash-healthcare-super-speciality-hospital-dwarka-new-delhi"];

        // Calculate statistics
        const stats = {
          internationalPatients: calculateInternationalPatients(mockHospital.beds),
          patientSatisfaction: generatePatientSatisfaction(),
          successRate: generateSuccessRate(),
          established: mockHospital.established
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
                              <div className="relative sm:w-1/3 h-32 sm:h-auto">
                                <img 
                                  src={doctor.image}
                                  alt={doctor.name}
                                  className="w-full h-full object-cover"
                                />
                                {doctor.experience && (
                                  <div className="absolute bottom-0 left-0 w-full bg-nile-600 text-white text-xs py-1 text-center font-semibold" style={{borderRadius: 0}}>
                                    {doctor.experience}
                                  </div>
                                )}
                              </div>
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
