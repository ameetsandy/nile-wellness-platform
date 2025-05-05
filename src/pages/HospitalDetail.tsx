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
            name: "Aakash Healthcare Super Speciality Hospital, Dwarka, New Delhi",
            location: "New Delhi",
            address: "Sector 3, Dwarka, New Delhi - 110075",
            accreditation: ["NABH"],
            established: 2011,
            description: "Aakash Healthcare Super Speciality Hospital is a state-of-the-art multi-specialty hospital in Dwarka, New Delhi. With 200 beds and advanced medical infrastructure, it provides comprehensive healthcare services with a focus on patient-centric care.",
            image: "/images/hospitals/aakash-healthcare.jpg",
            logo: "https://www.vaidam.com/sites/default/files/main_image-min_14.jpg",
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
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Bhardwaj",
                experience: "20+ Yrs"
              },
              {
                id: "ankit-gupta",
                name: "Dr. Ankit Gupta",
                specialty: "Cardiac Surgeon",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Gupta",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.7,
            reviewCount: 450,
            images: [
              "https://placehold.co/600x400/medical-600/white/?text=Aakash+Healthcare+Super+Speciality+Hospital,+Dwarka,+New+Delhi",
              "https://placehold.co/600x400/medical-600/white/?text=Aakash+Hospital+2",
              "https://placehold.co/600x400/medical-600/white/?text=Aakash+Hospital+3",
              "https://placehold.co/600x400/medical-600/white/?text=Aakash+Hospital+4"
            ]
          },
          "aditya-birla-memorial-hospital-pune": {
            id: "aditya-birla-memorial-hospital-pune",
            name: "Aditya Birla Memorial Hospital, Pune",
            location: "Pune",
            address: "Aditya Birla Memorial Hospital, Chinchwad, Pune - 411033",
            accreditation: ["JCI", "NABH"],
            established: 2006,
            description: "Aditya Birla Memorial Hospital is a 500-bed multi-specialty hospital in Pune, known for its world-class infrastructure and advanced medical technology. The hospital is committed to providing quality healthcare services with a focus on patient safety and satisfaction.",
            image: "/images/hospitals/aditya-birla.jpg",
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
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Kumar",
                experience: "20+ Yrs"
              },
              {
                id: "kisley-shrivastav",
                name: "Dr. Kisley Shrivastav",
                specialty: "Interventional Cardiologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Shrivastav",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.8,
            reviewCount: 600,
            images: [
              "https://placehold.co/600x400/medical-600/white/?text=Aditya+Birla+Memorial+Hospital,+Pune",
              "https://placehold.co/600x400/medical-600/white/?text=Aditya+Birla+Hospital+2",
              "https://placehold.co/600x400/medical-600/white/?text=Aditya+Birla+Hospital+3",
              "https://placehold.co/600x400/medical-600/white/?text=Aditya+Birla+Hospital+4"
            ]
          },
          "advance-fertility-and-gynaecology-centre-new-delhi": {
            id: "advance-fertility-and-gynaecology-centre-new-delhi",
            name: "Advance Fertility and Gynaecology Centre, New Delhi",
            location: "New Delhi",
            address: "Greater Kailash, New Delhi - 110048",
            accreditation: [],
            established: 2011,
            description: "Advance Fertility and Gynaecology Centre is a specialized center for reproductive medicine and gynecological care. The center is known for its high success rates in fertility treatments and personalized care for patients.",
            image: "/images/hospitals/advance-fertility.jpg",
            logo: "https://placehold.co/200x100/white/gray/?text=Advance",
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
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Banerjee",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.9,
            reviewCount: 300,
            images: [
              "https://placehold.co/600x400/medical-600/white/?text=Advance+Fertility+and+Gynaecology+Centre,+New+Delhi",
              "https://placehold.co/600x400/medical-600/white/?text=Fertility+Center+2",
              "https://placehold.co/600x400/medical-600/white/?text=Fertility+Center+3",
              "https://placehold.co/600x400/medical-600/white/?text=Fertility+Center+4"
            ]
          },
          "ahalia-ayurveda-hospital-kerala": {
            id: "ahalia-ayurveda-hospital-kerala",
            name: "Ahalia Ayurveda Hospital, Kerala, Palakkad",
            location: "Palakkad",
            address: "Ahalia Campus, Kozhippara, Palakkad - 678557, Kerala",
            accreditation: ["JCI", "NABH"],
            established: 1984,
            description: "Ahalia Ayurveda Hospital is a renowned Ayurvedic healthcare center in Kerala, offering traditional Ayurvedic treatments with modern facilities. The hospital combines ancient Ayurvedic wisdom with contemporary medical practices to provide holistic healthcare solutions.",
            image: "/images/hospitals/ahalia-ayurveda.jpg",
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
              "https://placehold.co/600x400/medical-600/white/?text=Ahalia+Ayurveda+Hospital,+Kerala+,+Palakkad",
              "https://placehold.co/600x400/medical-600/white/?text=Ahalia+Hospital+2",
              "https://placehold.co/600x400/medical-600/white/?text=Ahalia+Hospital+3",
              "https://placehold.co/600x400/medical-600/white/?text=Ahalia+Hospital+4"
            ]
          },
          "ajanta-hospital-ivf-centre-pvt-ltd": {
            id: "ajanta-hospital-ivf-centre-pvt-ltd",
            name: "Ajanta Hospital & IVF Centre Pvt. Ltd., Lucknow",
            location: "Lucknow",
            address: "Sector 1, Gomti Nagar, Lucknow - 226010, Uttar Pradesh",
            accreditation: ["NABH"],
            established: 2004,
            description: "Ajanta Hospital & IVF Centre is a leading multi-specialty hospital in Lucknow, known for its excellence in IVF treatments and comprehensive healthcare services. The hospital combines advanced medical technology with compassionate care.",
            image: "/images/hospitals/ajanta-hospital.jpg",
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
              "https://placehold.co/600x400/medical-600/white/?text=Ajanta+Hospital+&+IVF+Centre+Pvt.+Ltd.+,+Lucknow",
              "https://placehold.co/600x400/medical-600/white/?text=Ajanta+Hospital+2",
              "https://placehold.co/600x400/medical-600/white/?text=Ajanta+Hospital+3",
              "https://placehold.co/600x400/medical-600/white/?text=Ajanta+Hospital+4"
            ]
          },
          "alexis-multispeciality-hospital-nagpur": {
            id: "alexis-multispeciality-hospital-nagpur",
            name: "Alexis Multispeciality Hospital, Nagpur",
            location: "Nagpur",
            address: "Wardha Road, Nagpur - 440015, Maharashtra",
            accreditation: ["JCI"],
            established: 2016,
            description: "Alexis Multispeciality Hospital is a state-of-the-art healthcare facility in Nagpur, offering comprehensive medical services with a focus on patient care and advanced treatment options. The hospital is known for its modern infrastructure and expert medical team.",
            image: "/images/hospitals/alexis-hospital.jpg",
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
              "https://placehold.co/600x400/medical-600/white/?text=Alexis+Multispeciality+Hospital,+Nagpur",
              "https://placehold.co/600x400/medical-600/white/?text=Alexis+Hospital+2",
              "https://placehold.co/600x400/medical-600/white/?text=Alexis+Hospital+3",
              "https://placehold.co/600x400/medical-600/white/?text=Alexis+Hospital+4"
            ]
          },
          "alive-wellness-clinics": {
            id: "alive-wellness-clinics",
            name: "Alive Wellness Clinics, New Delhi",
            location: "New Delhi",
            address: "Greater Kailash, New Delhi - 110048",
            accreditation: [],
            established: 1997,
            description: "Alive Wellness Clinics is a specialized center focusing on holistic wellness and preventive healthcare. The clinic offers personalized wellness programs, lifestyle management, and preventive healthcare services.",
            image: "/images/hospitals/alive-wellness.jpg",
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
              "https://placehold.co/600x400/medical-600/white/?text=Alive+Wellness+Clinics,+New+Delhi",
              "https://placehold.co/600x400/medical-600/white/?text=Alive+Clinic+2",
              "https://placehold.co/600x400/medical-600/white/?text=Alive+Clinic+3",
              "https://placehold.co/600x400/medical-600/white/?text=Alive+Clinic+4"
            ]
          },
          "amandeep-hospital-amritsar": {
            id: "amandeep-hospital-amritsar",
            name: "Amandeep Hospital, Amritsar",
            location: "Amritsar",
            address: "GT Road, Amritsar - 143001, Punjab",
            accreditation: ["NABH"],
            established: 1990,
            description: "Amandeep Hospital is a leading multi-specialty hospital in Amritsar, known for its advanced medical facilities and expert healthcare professionals. The hospital provides comprehensive healthcare services with a focus on patient care and satisfaction.",
            image: "/images/hospitals/amandeep-hospital.jpg",
            logo: "https://placehold.co/200x100/white/gray/?text=Amandeep",
            internationalPatients: 3000,
            beds: 500,
            doctors: 200,
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
                `Modern Operation Theaters (${calculateOperationTheaters(500)})`,
                `Intensive Care Units (${calculateICUBeds(calculateOperationTheaters(500))} beds)`,
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
                id: "rajesh-kumar",
                name: "Dr. Rajesh Kumar",
                specialty: "Cardiologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Kumar",
                experience: "20+ Yrs"
              },
              {
                id: "priya-sharma",
                name: "Dr. Priya Sharma",
                specialty: "Neurologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Sharma",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.7,
            reviewCount: 500,
            images: [
              "https://placehold.co/600x400/medical-600/white/?text=Amandeep+Hospital,+Amritsar",
              "https://placehold.co/600x400/medical-600/white/?text=Amandeep+Hospital+2",
              "https://placehold.co/600x400/medical-600/white/?text=Amandeep+Hospital+3",
              "https://placehold.co/600x400/medical-600/white/?text=Amandeep+Hospital+4"
            ]
          },
          "amandeep-hospital-pathankot": {
            id: "amandeep-hospital-pathankot",
            name: "Amandeep Hospital, Pathankot",
            location: "Pathankot",
            address: "Gurdaspur Road, Pathankot - 145001, Punjab",
            accreditation: ["NABH"],
            established: 2015,
            description: "Amandeep Hospital in Pathankot is a modern multi-specialty hospital offering comprehensive healthcare services. The hospital is equipped with state-of-the-art medical technology and staffed by experienced healthcare professionals.",
            image: "/images/hospitals/amandeep-pathankot.jpg",
            logo: "https://placehold.co/200x100/white/gray/?text=Amandeep",
            internationalPatients: 1500,
            beds: 200,
            doctors: 100,
            specialties: 25,
            specializations: [
              "Cardiology",
              "Neurology",
              "Orthopedics",
              "Gastroenterology",
              "Nephrology",
              "Urology",
              "General Medicine",
              "Pediatrics"
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
                id: "anil-gupta",
                name: "Dr. Anil Gupta",
                specialty: "Cardiologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Gupta",
                experience: "20+ Yrs"
              },
              {
                id: "meera-sharma",
                name: "Dr. Meera Sharma",
                specialty: "Neurologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Sharma",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.6,
            reviewCount: 300,
            images: [
              "https://placehold.co/600x400/medical-600/white/?text=Amandeep+Hospital,+Pathankot",
              "https://placehold.co/600x400/medical-600/white/?text=Amandeep+Hospital+2",
              "https://placehold.co/600x400/medical-600/white/?text=Amandeep+Hospital+3",
              "https://placehold.co/600x400/medical-600/white/?text=Amandeep+Hospital+4"
            ]
          },
          "amandeep-medicity-hospital-amritsar": {
            id: "amandeep-medicity-hospital-amritsar",
            name: "Amandeep Medicity Hospital Amritsar",
            location: "Amritsar",
            address: "GT Road, Amritsar - 143001, Punjab",
            accreditation: ["NABH"],
            established: 1990,
            description: "Amandeep Medicity Hospital is a state-of-the-art multi-specialty hospital in Amritsar, offering advanced medical care and comprehensive healthcare services. The hospital is known for its modern infrastructure and expert medical team.",
            image: "/images/hospitals/amandeep-medicity.jpg",
            logo: "https://placehold.co/200x100/white/gray/?text=Amandeep",
            internationalPatients: 3000,
            beds: 500,
            doctors: 200,
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
                `Modern Operation Theaters (${calculateOperationTheaters(500)})`,
                `Intensive Care Units (${calculateICUBeds(calculateOperationTheaters(500))} beds)`,
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
                id: "vikram-singh",
                name: "Dr. Vikram Singh",
                specialty: "Cardiologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Singh",
                experience: "20+ Yrs"
              },
              {
                id: "anita-sharma",
                name: "Dr. Anita Sharma",
                specialty: "Neurologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Sharma",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.7,
            reviewCount: 500,
            images: [
              "https://placehold.co/600x400/medical-600/white/?text=Amandeep+Medicity+Hospital+Amritsar",
              "https://placehold.co/600x400/medical-600/white/?text=Amandeep+Medicity+2",
              "https://placehold.co/600x400/medical-600/white/?text=Amandeep+Medicity+3",
              "https://placehold.co/600x400/medical-600/white/?text=Amandeep+Medicity+4"
            ]
          },
          "amri-hospitals-southern-avenue": {
            id: "amri-hospitals-southern-avenue",
            name: "AMRI Hospitals, Southern Avenue, Kolkata",
            location: "Kolkata",
            address: "Southern Avenue, Kolkata - 700026, West Bengal",
            accreditation: ["NABH"],
            established: 2002,
            description: "AMRI Hospitals in Southern Avenue, Kolkata is a leading healthcare institution known for its advanced medical facilities and expert healthcare professionals. The hospital provides comprehensive healthcare services with a focus on patient care and satisfaction.",
            image: "/images/hospitals/amri-hospital.jpg",
            logo: "https://placehold.co/200x100/white/gray/?text=AMRI",
            internationalPatients: 2500,
            beds: 0,
            doctors: 150,
            specialties: 25,
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
                id: "rajesh-verma",
                name: "Dr. Rajesh Verma",
                specialty: "Cardiologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Verma",
                experience: "20+ Yrs"
              },
              {
                id: "priya-choudhary",
                name: "Dr. Priya Choudhary",
                specialty: "Neurologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Choudhary",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.6,
            reviewCount: 400,
            images: [
              "https://placehold.co/600x400/medical-600/white/?text=AMRI+Hospitals,+Southern+Avenue+,+Kolkata",
              "https://placehold.co/600x400/medical-600/white/?text=AMRI+Hospital+2",
              "https://placehold.co/600x400/medical-600/white/?text=AMRI+Hospital+3",
              "https://placehold.co/600x400/medical-600/white/?text=AMRI+Hospital+4"
            ]
          },
          "amrita-hospital-faridabad": {
            id: "amrita-hospital-faridabad",
            name: "Amrita Hospital, Faridabad",
            location: "Faridabad",
            address: "Sector 88, Faridabad - 121002, Haryana",
            accreditation: [],
            established: 2022,
            description: "Amrita Hospital in Faridabad is a state-of-the-art multi-specialty hospital offering advanced medical care and comprehensive healthcare services. The hospital is known for its modern infrastructure and expert medical team.",
            image: "/images/hospitals/amrita-hospital.jpg",
            logo: "https://placehold.co/200x100/white/gray/?text=Amrita",
            internationalPatients: 1000,
            beds: 2600,
            doctors: 500,
            specialties: 40,
            specializations: [
              "Cardiology",
              "Neurology",
              "Orthopedics",
              "Oncology",
              "Gastroenterology",
              "Nephrology",
              "Urology",
              "Pulmonology",
              "Pediatrics",
              "Gynecology"
            ],
            facilities: {
              medical: [
                `Modern Operation Theaters (${calculateOperationTheaters(2600)})`,
                `Intensive Care Units (${calculateICUBeds(calculateOperationTheaters(2600))} beds)`,
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
                id: "vikram-malhotra",
                name: "Dr. Vikram Malhotra",
                specialty: "Cardiologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Malhotra",
                experience: "20+ Yrs"
              },
              {
                id: "anita-verma",
                name: "Dr. Anita Verma",
                specialty: "Neurologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Verma",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.8,
            reviewCount: 200,
            images: [
              "https://placehold.co/600x400/medical-600/white/?text=Amrita+Hospital,+Faridabad",
              "https://placehold.co/600x400/medical-600/white/?text=Amrita+Hospital+2",
              "https://placehold.co/600x400/medical-600/white/?text=Amrita+Hospital+3",
              "https://placehold.co/600x400/medical-600/white/?text=Amrita+Hospital+4"
            ]
          },
          "amrita-institute-of-medical-sciences-and-research-centre-kochi": {
            id: "amrita-institute-of-medical-sciences-and-research-centre-kochi",
            name: "Amrita Institute of Medical Sciences and Research Centre, Kochi",
            location: "Kochi",
            address: "Ponekkara, Kochi - 682041, Kerala",
            accreditation: ["NABH", "NABL"],
            established: 1998,
            description: "Amrita Institute of Medical Sciences and Research Centre is a premier super-specialty hospital in Kochi, known for its advanced medical facilities and research initiatives. The hospital provides comprehensive healthcare services with a focus on patient care and medical research.",
            image: "/images/hospitals/amrita-institute.jpg",
            logo: "https://placehold.co/200x100/white/gray/?text=Amrita",
            internationalPatients: 4000,
            beds: 1450,
            doctors: 400,
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
              "Pediatrics",
              "Gynecology"
            ],
            facilities: {
              medical: [
                `Modern Operation Theaters (${calculateOperationTheaters(1450)})`,
                `Intensive Care Units (${calculateICUBeds(calculateOperationTheaters(1450))} beds)`,
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
                id: "rajesh-nair",
                name: "Dr. Rajesh Nair",
                specialty: "Cardiologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Nair",
                experience: "20+ Yrs"
              },
              {
                id: "meera-menon",
                name: "Dr. Meera Menon",
                specialty: "Neurologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Menon",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.7,
            reviewCount: 600,
            images: [
              "https://placehold.co/600x400/medical-600/white/?text=Amrita+Institute+of+Medical+Sciences+and+Research+Centre,+Kochi",
              "https://placehold.co/600x400/medical-600/white/?text=Amrita+Institute+2",
              "https://placehold.co/600x400/medical-600/white/?text=Amrita+Institute+3",
              "https://placehold.co/600x400/medical-600/white/?text=Amrita+Institute+4"
            ]
          },
          "apex-super-specialty-hospital-varanasi": {
            id: "apex-super-specialty-hospital-varanasi",
            name: "Apex Super Specialty Hospital, Varanasi",
            location: "Varanasi",
            address: "Lanka, Varanasi - 221005, Uttar Pradesh",
            accreditation: ["NABH"],
            established: 1988,
            description: "Apex Super Specialty Hospital is a leading healthcare institution in Varanasi, known for its advanced medical facilities and expert healthcare professionals. The hospital provides comprehensive healthcare services with a focus on patient care and satisfaction.",
            image: "/images/hospitals/apex-hospital.jpg",
            logo: "https://placehold.co/200x100/white/gray/?text=Apex",
            internationalPatients: 2000,
            beds: 200,
            doctors: 100,
            specialties: 25,
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
                "Cafeteria"
              ]
            },
            topDoctors: [
              {
                id: "anil-verma",
                name: "Dr. Anil Verma",
                specialty: "Cardiologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Verma",
                experience: "20+ Yrs"
              },
              {
                id: "priya-singh",
                name: "Dr. Priya Singh",
                specialty: "Neurologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Singh",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.6,
            reviewCount: 300,
            images: [
              "https://placehold.co/600x400/medical-600/white/?text=Apex+Super+Specialty+Hospital,+Varanasi",
              "https://placehold.co/600x400/medical-600/white/?text=Apex+Hospital+2",
              "https://placehold.co/600x400/medical-600/white/?text=Apex+Hospital+3",
              "https://placehold.co/600x400/medical-600/white/?text=Apex+Hospital+4"
            ]
          },
          "apollo-adlux-hospital-angamaly": {
            id: "apollo-adlux-hospital-angamaly",
            name: "Apollo Adlux Hospital, Angamaly",
            location: "Angamaly",
            address: "NH 47, Angamaly - 683572, Kerala",
            accreditation: ["JCI"],
            established: 1983,
            description: "Apollo Adlux Hospital is a state-of-the-art multi-specialty hospital in Angamaly, offering advanced medical care and comprehensive healthcare services. The hospital is known for its modern infrastructure and expert medical team.",
            image: "/images/hospitals/apollo-adlux.jpg",
            logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
            internationalPatients: 2000,
            beds: 300,
            doctors: 150,
            specialties: 25,
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
                `Modern Operation Theaters (${calculateOperationTheaters(300)})`,
                `Intensive Care Units (${calculateICUBeds(calculateOperationTheaters(300))} beds)`,
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
                id: "rajesh-nair",
                name: "Dr. Rajesh Nair",
                specialty: "Cardiologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Nair",
                experience: "20+ Yrs"
              },
              {
                id: "meera-menon",
                name: "Dr. Meera Menon",
                specialty: "Neurologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Menon",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.7,
            reviewCount: 400,
            images: [
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Adlux+Hospital,+Angamaly",
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Adlux+2",
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Adlux+3",
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Adlux+4"
            ]
          },
          "apollo-cancer-hospital-chennai": {
            id: "apollo-cancer-hospital-chennai",
            name: "Apollo Cancer Hospital, Chennai",
            location: "Chennai",
            address: "Teynampet, Chennai - 600035, Tamil Nadu",
            accreditation: ["NABH"],
            established: 1970,
            description: "Apollo Cancer Hospital is a specialized center for cancer care in Chennai, offering advanced treatment options and comprehensive cancer care services. The hospital is known for its expertise in oncology and patient-centric care.",
            image: "/images/hospitals/apollo-cancer.jpg",
            logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
            internationalPatients: 3000,
            beds: 300,
            doctors: 100,
            specialties: 1,
            specializations: [
              "Oncology",
              "Radiation Oncology",
              "Surgical Oncology",
              "Medical Oncology",
              "Hematology"
            ],
            facilities: {
              medical: [
                `Modern Operation Theaters (${calculateOperationTheaters(300)})`,
                `Intensive Care Units (${calculateICUBeds(calculateOperationTheaters(300))} beds)`,
                "Advanced Imaging Center",
                "Radiation Therapy Center",
                "Chemotherapy Unit",
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
                "Support Groups"
              ]
            },
            topDoctors: [
              {
                id: "vikram-sharma",
                name: "Dr. Vikram Sharma",
                specialty: "Oncologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Sharma",
                experience: "20+ Yrs"
              },
              {
                id: "anita-patel",
                name: "Dr. Anita Patel",
                specialty: "Radiation Oncologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Patel",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.8,
            reviewCount: 500,
            images: [
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Cancer+Hospital,+Chennai",
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Cancer+2",
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Cancer+3",
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Cancer+4"
            ]
          },
          "apollo-childrens-hospital-chennai": {
            id: "apollo-childrens-hospital-chennai",
            name: "Apollo Children's Hospital, Chennai, Chennai",
            location: "Chennai",
            address: "Greams Road, Chennai - 600006, Tamil Nadu",
            accreditation: ["NABH"],
            established: 2009,
            description: "Apollo Children's Hospital is a specialized pediatric healthcare center in Chennai, offering comprehensive care for children. The hospital is known for its child-friendly environment and expert pediatric care.",
            image: "/images/hospitals/apollo-childrens.jpg",
            logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
            internationalPatients: 1000,
            beds: 70,
            doctors: 50,
            specialties: 1,
            specializations: [
              "Pediatrics",
              "Neonatology",
              "Pediatric Surgery",
              "Pediatric Cardiology",
              "Pediatric Neurology"
            ],
            facilities: {
              medical: [
                `Modern Operation Theaters (${calculateOperationTheaters(70)})`,
                `Intensive Care Units (${calculateICUBeds(calculateOperationTheaters(70))} beds)`,
                "Neonatal ICU",
                "Pediatric Emergency",
                "Play Therapy Room",
                "24/7 Emergency Department"
              ],
              amenities: [
                "Child-Friendly Waiting Area",
                "Play Area",
                "Parent Accommodation",
                "Language Interpreters",
                "Currency Exchange",
                "24/7 Pharmacy",
                "Cafeteria"
              ]
            },
            topDoctors: [
              {
                id: "rajesh-kumar",
                name: "Dr. Rajesh Kumar",
                specialty: "Pediatrician",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Kumar",
                experience: "20+ Yrs"
              },
              {
                id: "priya-sharma",
                name: "Dr. Priya Sharma",
                specialty: "Neonatologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Sharma",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.7,
            reviewCount: 300,
            images: [
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Children's+Hospital,+Chennai++,+Chennai",
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Children+2",
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Children+3",
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Children+4"
            ]
          },
          "apollo-cosmetic-clinic-mrc-nagar": {
            id: "apollo-cosmetic-clinic-mrc-nagar",
            name: "Apollo Cosmetic Clinic, MRC Nagar, Chennai",
            location: "Chennai",
            address: "MRC Nagar, Chennai - 600028, Tamil Nadu",
            accreditation: [],
            established: 1970,
            description: "Apollo Cosmetic Clinic is a specialized center for cosmetic and aesthetic procedures in Chennai. The clinic offers a range of cosmetic treatments with a focus on safety and natural results.",
            image: "/images/hospitals/apollo-cosmetic.jpg",
            logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
            internationalPatients: 500,
            beds: 47,
            doctors: 20,
            specialties: 1,
            specializations: [
              "Cosmetic Surgery",
              "Aesthetic Medicine",
              "Dermatology",
              "Plastic Surgery"
            ],
            facilities: {
              medical: [
                "Cosmetic Surgery Suites",
                "Laser Treatment Rooms",
                "Consultation Rooms",
                "Recovery Rooms",
                "24/7 Emergency Services"
              ],
              amenities: [
                "Comfortable Waiting Area",
                "Private Consultation Rooms",
                "Cafeteria",
                "Parking Facility"
              ]
            },
            topDoctors: [
              {
                id: "anil-gupta",
                name: "Dr. Anil Gupta",
                specialty: "Cosmetic Surgeon",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Gupta",
                experience: "20+ Yrs"
              },
              {
                id: "meera-sharma",
                name: "Dr. Meera Sharma",
                specialty: "Dermatologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Sharma",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.6,
            reviewCount: 200,
            images: [
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Cosmetic+Clinic,+MRC+Nagar+,+Chennai",
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Cosmetic+2",
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Cosmetic+3",
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Cosmetic+4"
            ]
          },
          "apollo-cradle-childrens-hospital-jayanagar": {
            id: "apollo-cradle-childrens-hospital-jayanagar",
            name: "Apollo Cradle & Children's Hospital, Jayanagar, Bangalore",
            location: "Bangalore",
            address: "Jayanagar, Bangalore - 560011, Karnataka",
            accreditation: [],
            established: 2013,
            description: "Apollo Cradle & Children's Hospital is a specialized center for women and children's healthcare in Bangalore. The hospital offers comprehensive care for mothers and children in a comfortable environment.",
            image: "/images/hospitals/apollo-cradle-jayanagar.jpg",
            logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
            internationalPatients: 800,
            beds: 28,
            doctors: 30,
            specialties: 2,
            specializations: [
              "Obstetrics & Gynecology",
              "Pediatrics",
              "Neonatology",
              "Fertility"
            ],
            facilities: {
              medical: [
                "Labor & Delivery Suites",
                "Neonatal ICU",
                "Pediatric Emergency",
                "Fertility Center",
                "24/7 Emergency Services"
              ],
              amenities: [
                "Comfortable Waiting Area",
                "Parent Accommodation",
                "Cafeteria",
                "Parking Facility"
              ]
            },
            topDoctors: [
              {
                id: "vikram-singh",
                name: "Dr. Vikram Singh",
                specialty: "Gynecologist",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Singh",
                experience: "20+ Yrs"
              },
              {
                id: "anita-sharma",
                name: "Dr. Anita Sharma",
                specialty: "Pediatrician",
                image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Sharma",
                experience: "20+ Yrs"
              }
            ],
            reviews: 4.7,
            reviewCount: 250,
            images: [
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Cradle+&+Children's+Hospital,+Jayanagar+,+Bangalore",
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Cradle+2",
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Cradle+3",
              "https://placehold.co/600x400/medical-600/white/?text=Apollo+Cradle+4"
            ]
          },
          "apollo-cradle-koramangala": {
            id: "apollo-cradle-koramangala",
            name: "Apollo Cradle & Children's Hospital",
            location: "Bangalore",
            address: "Koramangala, Bangalore, India",
            accreditation: ["NABH"],
            established: 1970,
            description: "Apollo Cradle & Children's Hospital in Koramangala, Bangalore, is a single specialty hospital dedicated to maternity, neonatal, and pediatric care. Renowned for its advanced medical technology and expert team, the hospital is a preferred choice for families.",
            image: "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_koramangala_building1-min.jpg",
            logo: "https://www.nilewellness.com/hospitals/apollo-cradle-childrens-hospital-koramangala-bangalore/logo.png",
            internationalPatients: 500,
            beds: 50,
            doctors: 30,
            specialties: 1,
            specializations: [
              "Maternity",
              "Pediatrics"
            ],
            facilities: {
              medical: [
                "Neonatal Intensive Care Unit (NICU)",
                "24x7 Emergency Services"
              ],
              amenities: [
                "Pharmacy",
                "In-house Cafeteria"
              ]
            },
            topDoctors: [
              {
                id: "dr-smitha-apollo",
                name: "Dr. Smitha Rao",
                specialty: "Pediatrics",
                image: "https://example.com/doctors/dr-smitha-rao.jpg",
                experience: "15 years of experience in pediatric care"
              }
            ],
            reviews: 4.6,
            reviewCount: 215,
            images: [
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_koramangala_building1-min.jpg",
              "https://www.nilewellness.com/hospitals/apollo-cradle-childrens-hospital-koramangala-bangalore/interior.jpg"
            ]
          },
          "21": {
            "id": "21",
            "name": "Apollo Cradle & Children's Hospital, Moti Nagar , New Delhi",
            "location": "New Delhi",
            "address": "Moti Nagar, New Delhi",
            "accreditation": [],
            "established": 2015,
            "description": "Apollo Cradle & Children's Hospital, Moti Nagar, New Delhi, is a single specialty hospital focusing on maternity and children's healthcare. The hospital is known for its advanced neonatal care and experienced pediatricians.",
            "image": "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_koramangala_building1-min.jpg",
            "logo": "https://placehold.co/200x100/white/gray/?text=Apollo",
            "internationalPatients": 300,
            "beds": 59,
            "doctors": 20,
            "specialties": 2,
            "specializations": [
              "Maternity Care",
              "Pediatrics"
            ],
            "facilities": {
              "medical": [
                "Neonatal Intensive Care Unit (NICU)",
                "24x7 Emergency Services",
                "Labor & Delivery Suites",
                "Pediatric Outpatient Services"
              ],
              "amenities": [
                "Pharmacy",
                "In-house Cafeteria",
                "Parent Accommodation",
                "Ambulance Service"
              ]
            },
            "topDoctors": [
              {
                "id": "dr-anjali-sharma-moti-nagar",
                "name": "Dr. Anjali Sharma",
                "specialty": "Pediatrics",
                "image": "https://www.vaidam.com/sites/default/files/doctor-profile/doctor-anjali-sharma.jpg",
                "experience": "12 years of experience in pediatric care"
              }
            ],
            "reviews": 4.7,
            "reviewCount": 180,
            "images": [
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_building.jpg",
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_interior.jpg"
            ]
          },
          "22": {
            "id": "22",
            "name": "Apollo Cradle & Children's Hospital, Moti Nagar , New Delhi",
            "location": "New Delhi",
            "address": "Moti Nagar, New Delhi",
            "accreditation": [],
            "established": 2015,
            "description": "Apollo Cradle & Children's Hospital, Moti Nagar, New Delhi, is a single specialty hospital focusing on maternity and children's healthcare. The hospital is known for its advanced neonatal care and experienced pediatricians.",
            "image": "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_building-min.jpg",
            "logo": "https://placehold.co/200x100/white/gray/?text=Apollo",
            "internationalPatients": 300,
            "beds": 59,
            "doctors": 20,
            "specialties": 2,
            "specializations": [
              "Maternity Care",
              "Pediatrics"
            ],
            "facilities": {
              "medical": [
                "Neonatal Intensive Care Unit (NICU)",
                "24x7 Emergency Services",
                "Labor & Delivery Suites",
                "Pediatric Outpatient Services"
              ],
              "amenities": [
                "Pharmacy",
                "In-house Cafeteria",
                "Parent Accommodation",
                "Ambulance Service"
              ]
            },
            "topDoctors": [
              {
                "id": "dr-anjali-sharma-moti-nagar",
                "name": "Dr. Anjali Sharma",
                "specialty": "Pediatrics",
                "image": "https://www.vaidam.com/sites/default/files/doctor-profile/doctor-anjali-sharma.jpg",
                "experience": "12 years of experience in pediatric care"
              }
            ],
            "reviews": 4.7,
            "reviewCount": 180,
            "images": [
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_building.jpg",
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_interior.jpg"
            ]
          },
          "23": {
            "id": "23",
            "name": "Apollo Cradle & Children's Hospital, Moti Nagar , New Delhi",
            "location": "New Delhi",
            "address": "Moti Nagar, New Delhi",
            "accreditation": [],
            "established": 2015,
            "description": "Apollo Cradle & Children's Hospital, Moti Nagar, New Delhi, is a single specialty hospital focusing on maternity and children's healthcare. The hospital is known for its advanced neonatal care and experienced pediatricians.",
            "image": "https://www.vaidam.com/sites/default/files/anyconv.com_apollo_cradle_and_apollo_womens_hospitals_thousand_lights_list_image-min.jpg",
            "logo": "https://placehold.co/200x100/white/gray/?text=Apollo",
            "internationalPatients": 300,
            "beds": 59,
            "doctors": 20,
            "specialties": 2,
            "specializations": [
              "Maternity Care",
              "Pediatrics"
            ],
            "facilities": {
              "medical": [
                "Neonatal Intensive Care Unit (NICU)",
                "24x7 Emergency Services",
                "Labor & Delivery Suites",
                "Pediatric Outpatient Services"
              ],
              "amenities": [
                "Pharmacy",
                "In-house Cafeteria",
                "Parent Accommodation",
                "Ambulance Service"
              ]
            },
            "topDoctors": [
              {
                "id": "dr-anjali-sharma-moti-nagar",
                "name": "Dr. Anjali Sharma",
                "specialty": "Pediatrics",
                "image": "https://www.vaidam.com/sites/default/files/doctor-profile/doctor-anjali-sharma.jpg",
                "experience": "12 years of experience in pediatric care"
              }
            ],
            "reviews": 4.7,
            "reviewCount": 180,
            "images": [
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_building.jpg",
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_interior.jpg"
            ]
          },
          "24": {
            "id": "24",
            "name": "Apollo Cradle & Children's Hospital, Moti Nagar , New Delhi",
            "location": "New Delhi",
            "address": "Moti Nagar, New Delhi",
            "accreditation": [],
            "established": 2015,
            "description": "Apollo Cradle & Children's Hospital, Moti Nagar, New Delhi, is a single specialty hospital focusing on maternity and children's healthcare. The hospital is known for its advanced neonatal care and experienced pediatricians.",
            "image": "https://www.vaidam.com/sites/default/files/apollo_cradle_maternity_childrens_hospital_nehru_place_outside-min.jpg",
            "logo": "https://placehold.co/200x100/white/gray/?text=Apollo",
            "internationalPatients": 300,
            "beds": 59,
            "doctors": 20,
            "specialties": 2,
            "specializations": [
              "Maternity Care",
              "Pediatrics"
            ],
            "facilities": {
              "medical": [
                "Neonatal Intensive Care Unit (NICU)",
                "24x7 Emergency Services",
                "Labor & Delivery Suites",
                "Pediatric Outpatient Services"
              ],
              "amenities": [
                "Pharmacy",
                "In-house Cafeteria",
                "Parent Accommodation",
                "Ambulance Service"
              ]
            },
            "topDoctors": [
              {
                "id": "dr-anjali-sharma-moti-nagar",
                "name": "Dr. Anjali Sharma",
                "specialty": "Pediatrics",
                "image": "https://www.vaidam.com/sites/default/files/doctor-profile/doctor-anjali-sharma.jpg",
                "experience": "12 years of experience in pediatric care"
              }
            ],
            "reviews": 4.7,
            "reviewCount": 180,
            "images": [
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_building.jpg",
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_interior.jpg"
            ]
          },
          "25": {
            "id": "25",
            "name": "Apollo Cradle & Children's Hospital, Moti Nagar , New Delhi",
            "location": "New Delhi",
            "address": "Moti Nagar, New Delhi",
            "accreditation": [],
            "established": 2015,
            "description": "Apollo Cradle & Children's Hospital, Moti Nagar, New Delhi, is a single specialty hospital focusing on maternity and children's healthcare. The hospital is known for its advanced neonatal care and experienced pediatricians.",
            "image": "https://www.vaidam.com/sites/default/files/building_apollo_cradle_jubilee_hills_hyderabad.jpg",
            "logo": "https://placehold.co/200x100/white/gray/?text=Apollo",
            "internationalPatients": 300,
            "beds": 59,
            "doctors": 20,
            "specialties": 2,
            "specializations": [
              "Maternity Care",
              "Pediatrics"
            ],
            "facilities": {
              "medical": [
                "Neonatal Intensive Care Unit (NICU)",
                "24x7 Emergency Services",
                "Labor & Delivery Suites",
                "Pediatric Outpatient Services"
              ],
              "amenities": [
                "Pharmacy",
                "In-house Cafeteria",
                "Parent Accommodation",
                "Ambulance Service"
              ]
            },
            "topDoctors": [
              {
                "id": "dr-anjali-sharma-moti-nagar",
                "name": "Dr. Anjali Sharma",
                "specialty": "Pediatrics",
                "image": "https://www.vaidam.com/sites/default/files/doctor-profile/doctor-anjali-sharma.jpg",
                "experience": "12 years of experience in pediatric care"
              }
            ],
            "reviews": 4.7,
            "reviewCount": 180,
            "images": [
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_building.jpg",
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_interior.jpg"
            ]
          },
          "26": {
            "id": "26",
            "name": "Apollo Cradle & Children's Hospital, Moti Nagar , New Delhi",
            "location": "New Delhi",
            "address": "Moti Nagar, New Delhi",
            "accreditation": [],
            "established": 2015,
            "description": "Apollo Cradle & Children's Hospital, Moti Nagar, New Delhi, is a single specialty hospital focusing on maternity and children's healthcare. The hospital is known for its advanced neonatal care and experienced pediatricians.",
            "image": "https://www.vaidam.com/sites/default/files/main_building_apollo_cradle_maternity_hospital_kondapur.jpg",
            "logo": "https://placehold.co/200x100/white/gray/?text=Apollo",
            "internationalPatients": 300,
            "beds": 59,
            "doctors": 20,
            "specialties": 2,
            "specializations": [
              "Maternity Care",
              "Pediatrics"
            ],
            "facilities": {
              "medical": [
                "Neonatal Intensive Care Unit (NICU)",
                "24x7 Emergency Services",
                "Labor & Delivery Suites",
                "Pediatric Outpatient Services"
              ],
              "amenities": [
                "Pharmacy",
                "In-house Cafeteria",
                "Parent Accommodation",
                "Ambulance Service"
              ]
            },
            "topDoctors": [
              {
                "id": "dr-anjali-sharma-moti-nagar",
                "name": "Dr. Anjali Sharma",
                "specialty": "Pediatrics",
                "image": "https://www.vaidam.com/sites/default/files/doctor-profile/doctor-anjali-sharma.jpg",
                "experience": "12 years of experience in pediatric care"
              }
            ],
            "reviews": 4.7,
            "reviewCount": 180,
            "images": [
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_building.jpg",
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_interior.jpg"
            ]
          },
          "27": {
            "id": "27",
            "name": "Apollo Cradle & Children's Hospital, Moti Nagar , New Delhi",
            "location": "New Delhi",
            "address": "Moti Nagar, New Delhi",
            "accreditation": [],
            "established": 2015,
            "description": "Apollo Cradle & Children's Hospital, Moti Nagar, New Delhi, is a single specialty hospital focusing on maternity and children's healthcare. The hospital is known for its advanced neonatal care and experienced pediatricians.",
            "image": "https://www.vaidam.com/sites/default/files/main_building_apollo_fertility_banjara_hills_hyderabad.jpg",
            "logo": "https://placehold.co/200x100/white/gray/?text=Apollo",
            "internationalPatients": 300,
            "beds": 59,
            "doctors": 20,
            "specialties": 2,
            "specializations": [
              "Maternity Care",
              "Pediatrics"
            ],
            "facilities": {
              "medical": [
                "Neonatal Intensive Care Unit (NICU)",
                "24x7 Emergency Services",
                "Labor & Delivery Suites",
                "Pediatric Outpatient Services"
              ],
              "amenities": [
                "Pharmacy",
                "In-house Cafeteria",
                "Parent Accommodation",
                "Ambulance Service"
              ]
            },
            "topDoctors": [
              {
                "id": "dr-anjali-sharma-moti-nagar",
                "name": "Dr. Anjali Sharma",
                "specialty": "Pediatrics",
                "image": "https://www.vaidam.com/sites/default/files/doctor-profile/doctor-anjali-sharma.jpg",
                "experience": "12 years of experience in pediatric care"
              }
            ],
            "reviews": 4.7,
            "reviewCount": 180,
            "images": [
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_building.jpg",
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_interior.jpg"
            ]
          },
          "28": {
            "id": "28",
            "name": "Apollo Cradle & Children's Hospital, Moti Nagar , New Delhi",
            "location": "New Delhi",
            "address": "Moti Nagar, New Delhi",
            "accreditation": [],
            "established": 2015,
            "description": "Apollo Cradle & Children's Hospital, Moti Nagar, New Delhi, is a single specialty hospital focusing on maternity and children's healthcare. The hospital is known for its advanced neonatal care and experienced pediatricians.",
            "image": "https://www.vaidam.com/sites/default/files/apollo_profile-min.jpg",
            "logo": "https://placehold.co/200x100/white/gray/?text=Apollo",
            "internationalPatients": 300,
            "beds": 59,
            "doctors": 20,
            "specialties": 2,
            "specializations": [
              "Maternity Care",
              "Pediatrics"
            ],
            "facilities": {
              "medical": [
                "Neonatal Intensive Care Unit (NICU)",
                "24x7 Emergency Services",
                "Labor & Delivery Suites",
                "Pediatric Outpatient Services"
              ],
              "amenities": [
                "Pharmacy",
                "In-house Cafeteria",
                "Parent Accommodation",
                "Ambulance Service"
              ]
            },
            "topDoctors": [
              {
                "id": "dr-anjali-sharma-moti-nagar",
                "name": "Dr. Anjali Sharma",
                "specialty": "Pediatrics",
                "image": "https://www.vaidam.com/sites/default/files/doctor-profile/doctor-anjali-sharma.jpg",
                "experience": "12 years of experience in pediatric care"
              }
            ],
            "reviews": 4.7,
            "reviewCount": 180,
            "images": [
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_building.jpg",
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_interior.jpg"
            ]
          },
          "29": {
            "id": "29",
            "name": "Apollo Cradle & Children's Hospital, Moti Nagar , New Delhi",
            "location": "New Delhi",
            "address": "Moti Nagar, New Delhi",
            "accreditation": [],
            "established": 2015,
            "description": "Apollo Cradle & Children's Hospital, Moti Nagar, New Delhi, is a single specialty hospital focusing on maternity and children's healthcare. The hospital is known for its advanced neonatal care and experienced pediatricians.",
            "image": "https://www.vaidam.com/sites/default/files/apollo_fertility_anna_nagar_list_image-min.jpg",
            "logo": "https://placehold.co/200x100/white/gray/?text=Apollo",
            "internationalPatients": 300,
            "beds": 59,
            "doctors": 20,
            "specialties": 2,
            "specializations": [
              "Maternity Care",
              "Pediatrics"
            ],
            "facilities": {
              "medical": [
                "Neonatal Intensive Care Unit (NICU)",
                "24x7 Emergency Services",
                "Labor & Delivery Suites",
                "Pediatric Outpatient Services"
              ],
              "amenities": [
                "Pharmacy",
                "In-house Cafeteria",
                "Parent Accommodation",
                "Ambulance Service"
              ]
            },
            "topDoctors": [
              {
                "id": "dr-anjali-sharma-moti-nagar",
                "name": "Dr. Anjali Sharma",
                "specialty": "Pediatrics",
                "image": "https://www.vaidam.com/sites/default/files/doctor-profile/doctor-anjali-sharma.jpg",
                "experience": "12 years of experience in pediatric care"
              }
            ],
            "reviews": 4.7,
            "reviewCount": 180,
            "images": [
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_building.jpg",
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_interior.jpg"
            ]
          },
          "30": {
            "id": "30",
            "name": "Apollo Cradle & Children's Hospital, Moti Nagar , New Delhi",
            "location": "New Delhi",
            "address": "Moti Nagar, New Delhi",
            "accreditation": [],
            "established": 2015,
            "description": "Apollo Cradle & Children's Hospital, Moti Nagar, New Delhi, is a single specialty hospital focusing on maternity and children's healthcare. The hospital is known for its advanced neonatal care and experienced pediatricians.",
            "image": "https://www.vaidam.com/sites/default/files/apollo_kolkoata_image_view-min.jpg",
            "logo": "https://placehold.co/200x100/white/gray/?text=Apollo",
            "internationalPatients": 300,
            "beds": 59,
            "doctors": 20,
            "specialties": 2,
            "specializations": [
              "Maternity Care",
              "Pediatrics"
            ],
            "facilities": {
              "medical": [
                "Neonatal Intensive Care Unit (NICU)",
                "24x7 Emergency Services",
                "Labor & Delivery Suites",
                "Pediatric Outpatient Services"
              ],
              "amenities": [
                "Pharmacy",
                "In-house Cafeteria",
                "Parent Accommodation",
                "Ambulance Service"
              ]
            },
            "topDoctors": [
              {
                "id": "dr-anjali-sharma-moti-nagar",
                "name": "Dr. Anjali Sharma",
                "specialty": "Pediatrics",
                "image": "https://www.vaidam.com/sites/default/files/doctor-profile/doctor-anjali-sharma.jpg",
                "experience": "12 years of experience in pediatric care"
              }
            ],
            "reviews": 4.7,
            "reviewCount": 180,
            "images": [
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_building.jpg",
              "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_interior.jpg"
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
