import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Search, Filter, Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppointmentForm from "@/components/common/AppointmentForm";

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [city, setCity] = useState("");
  const [visibleDoctors, setVisibleDoctors] = useState(40);
  const [selectedDoctor, setSelectedDoctor] = useState<{name: string, formType: "appointment" | "second-opinion" | "reports"} | null>(null);

  const doctors = [
    {
      "id": 1,
      "name": "Dr. Devi Prasad Shetty",
      "specialty": "Cardiac Surgeon",
      "designation": " Senior Consultant",
      "hospital": "Narayana Institute of Cardiac Sciences, Bangalore",
      "city": "Bangalore, India",
      "experience": "45+",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr._devi_prasad_shetty.webp",
      "path": "/doctors/dr-devi-prasad-shetty"
    },
    {
      "id": 2,
      "name": "Dr. Adarsh Choudhary",
      "specialty": "Surgical Gastroenterologist",
      "designation": " Consultant",
      "hospital": "Medanta - The Medicity, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "46+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr-adarsh-choudhary-bariatric-medanta.jpeg",
      "path": "/doctors/dr-adarsh-choudhary"
    },
    {
      "id": 3,
      "name": "Dr. Arun Saroha",
      "specialty": "Neurosurgeon",
      "designation": " Director",
      "hospital": "Max Super Specialty Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "29+",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview45-min.png",
      "path": "/doctors/dr-arun-saroha"
    },
    {
      "id": 4,
      "name": "Dr. Arup Ratan Dutta",
      "specialty": "Nephrologist",
      "designation": " Director",
      "hospital": "Fortis Hospital and Kidney Institute (Rash Behari Ave), Kolkata",
      "city": "Kolkata, India",
      "experience": "35+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._dutta-min.jpg",
      "path": "/doctors/dr-arup-ratan-dutta"
    },
    {
      "id": 5,
      "name": "Dr. Ashok Rajgopal",
      "specialty": "Orthopaedic and Joint Replacement Surgeon",
      "designation": " Senior Consultant",
      "hospital": "Medanta - The Medicity, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "50+",
      "image": "https://www.vaidam.com/sites/default/files/dr_ashok_rajgopal-min.png",
      "path": "/doctors/dr-ashok-rajgopal"
    },
    {
      "id": 6,
      "name": "Dr. Ashok Seth",
      "specialty": "Interventional Cardiologist",
      "designation": " Chairman",
      "hospital": "Fortis Escorts Heart Institute, New Delhi",
      "city": "New Delhi, India",
      "experience": "40+",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr._ashok_seth.webp",
      "path": "/doctors/dr-ashok-seth"
    },
    {
      "id": 7,
      "name": "Dr. Balbir Singh",
      "specialty": "Interventional Cardiologist",
      "designation": " Chairman",
      "hospital": "Max Super Speciality Hospital, Saket, New Delhi",
      "city": "Gurgaon, India",
      "experience": "36+",
      "image": "https://www.vaidam.com/sites/default/files/dr-balbir-singh-medanta.jpg",
      "path": "/doctors/dr-balbir-singh"
    },
    {
      "id": 8,
      "name": "Dr. Harit Chaturvedi",
      "specialty": "Surgical Oncologist",
      "designation": " Chairman",
      "hospital": "Max Super Speciality Hospital, Patparganj, New Delhi",
      "city": "New Delhi, India",
      "experience": "38+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._harit_chaturvedi_-_surgical_oncologist-min.jpg",
      "path": "/doctors/dr-harit-chaturvedi"
    },
    {
      "id": 9,
      "name": "Dr. Hemant Bhartiya",
      "specialty": "Spine Surgeon",
      "designation": " Director",
      "hospital": "Fortis Escorts Hospital Jaipur",
      "city": "Jaipur, India",
      "experience": "30+",
      "image": "https://www.vaidam.com/sites/default/files/dr._hemant_bhartiya-min.jpg",
      "path": "/doctors/dr-hemant-bhartiya"
    },
    {
      "id": 10,
      "name": "Dr. N.C. Krishnamani",
      "specialty": "Interventional Cardiologist",
      "designation": " Senior Consultant",
      "hospital": "Fortis Hospital, Shalimar Bagh, New Delhi",
      "city": "New Delhi, India",
      "experience": "36+",
      "image": "https://www.vaidam.com/sites/default/files/dr._n.c._krishnamani_1.jpeg",
      "path": "/doctors/dr-nc-krishnamani"
    },
    {
      "id": 11,
      "name": "Dr. Manoj Kumar Goel",
      "specialty": "Pulmonologist",
      "designation": " Director",
      "hospital": "Fortis Memorial Research Institute, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "36+",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr._manoj_kumar_goel-removebg-preview-min.webp",
      "path": "/doctors/dr-manoj-kumar-goel"
    },
    {
      "id": 12,
      "name": "Dr. Naresh Trehan",
      "specialty": "Cardiac Surgeon",
      "designation": " Chairman",
      "hospital": "Medanta - The Medicity, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "56+",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr._naresh_trehan-min.webp",
      "path": "/doctors/dr-naresh-trehan"
    },
    {
      "id": 13,
      "name": "Dr. Praveen Chandra",
      "specialty": "Interventional Cardiologist",
      "designation": " Chairman",
      "hospital": "Medanta - The Medicity, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "38+",
      "image": "https://www.vaidam.com/sites/default/files/dr._praveen_chandra-removebg-preview-min.png",
      "path": "/doctors/dr-praveen-chandra"
    },
    {
      "id": 14,
      "name": "Dr. Praveen Gupta",
      "specialty": "Neurologist",
      "designation": " Senior Consultant",
      "hospital": "Fortis Memorial Research Institute, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "26+",
      "image": "https://www.vaidam.com/sites/default/files/dr_praveen_gupta.jpg",
      "path": "/doctors/dr-praveen-gupta"
    },
    {
      "id": 15,
      "name": "Dr. Rama Joshi",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Consultant",
      "hospital": "Fortis Memorial Research Institute, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "39+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr-rama-joshi-gynae-oncology-3.jpg",
      "path": "/doctors/dr-rama-joshi"
    },
    {
      "id": 16,
      "name": "Dr. Rana Patir",
      "specialty": "Neurosurgeon",
      "designation": " Director",
      "hospital": "Fortis Memorial Research Institute, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "32+",
      "image": "https://www.vaidam.com/sites/default/files/dr._rana_patir_1.jpg",
      "path": "/doctors/dr-rana-patir"
    },
    {
      "id": 17,
      "name": "Dr. Sandeep Nayak",
      "specialty": "Surgical Oncologist",
      "designation": " Director",
      "hospital": "Fortis Hospital, Bangalore (Bannerghatta Road)",
      "city": "Bangalore, India",
      "experience": "28+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._sandeep_nayak.jpg",
      "path": "/doctors/dr-sandeep-nayak"
    },
    {
      "id": 18,
      "name": "Dr. Shuvanan Ray",
      "specialty": "Interventional Cardiologist",
      "designation": " Director",
      "hospital": "Fortis Hospital (Anandapur) Kolkata",
      "city": "Kolkata, India",
      "experience": "23+",
      "image": "https://www.vaidam.com/sites/default/files/dr_shuvanan_low_rez-min.jpg",
      "path": "/doctors/dr-shuvanan-ray"
    },
    {
      "id": 19,
      "name": "Dr. Subhash Gupta",
      "specialty": "Liver Transplant Surgeon",
      "designation": " Chairman",
      "hospital": "Max Super Speciality Hospital, Saket, New Delhi",
      "city": "New Delhi, India",
      "experience": "38+",
      "image": "https://www.vaidam.com/sites/default/files/dr-subhash-gupta-liver-transplant-surgeon.jpg",
      "path": "/doctors/dr-subhash-gupta"
    },
    {
      "id": 20,
      "name": "Dr. C Vijay Bose",
      "specialty": "Orthopaedic and Joint Replacement Surgeon",
      "designation": " Director",
      "hospital": "SIMS Hospital, Vadapalani, Chennai",
      "city": "Chennai, India",
      "experience": "36+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._c_vijay_bose-min.jpg",
      "path": "/doctors/dr-c-vijay-bose"
    },
    {
      "id": 21,
      "name": "Dr. Shyam Kishore Shrivastava",
      "specialty": "Radiation Oncologist",
      "designation": " Senior Consultant",
      "hospital": "Apollo Proton Cancer Centre, Chennai",
      "city": "Chennai, India",
      "experience": "49+",
      "image": "https://www.vaidam.com/sites/default/files/drshyam_kishore_shrivastava-min.jpg",
      "path": "/doctors/dr-shyam-kishore-shrivastava"
    },
    {
      "id": 22,
      "name": "Dr. Sandeep Attawar",
      "specialty": "Cardiac Surgeon",
      "designation": " Director",
      "hospital": "KIMS Hospital Kondapur, Hyderabad",
      "city": "Hyderabad, India",
      "experience": "33+",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr_sandeep_attawar-min.webp",
      "path": "/doctors/dr-sandeep-attawar"
    },
    {
      "id": 23,
      "name": "Dr. Sanjay Sarup",
      "specialty": "Paediatric Orthopedecian",
      "designation": " Senior Consultant",
      "hospital": "Artemis Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "32+",
      "image": "https://www.vaidam.com/sites/default/files/dr._sanjay_sarup-min.jpg",
      "path": "/doctors/dr-sanjay-sarup"
    },
    {
      "id": 24,
      "name": "Dr. Jatinder Bir Singh Jaggi",
      "specialty": "Orthopaedic and Joint Replacement Surgeon",
      "designation": " Director",
      "hospital": "Max Super Specialty Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "31+",
      "image": "https://www.vaidam.com/sites/default/files/dr-jatinder-bir-singh-jaggi-arthroscopy-orthopedics.jpg",
      "path": "/doctors/dr-jatinder-bir-singh-jaggi"
    },
    {
      "id": 25,
      "name": "Dr. Rajeev Verma",
      "specialty": "Orthopaedic and Joint Replacement Surgeon",
      "designation": " Chairman",
      "hospital": "Manipal Hospitals Dwarka, Delhi",
      "city": "New Delhi, India",
      "experience": "28+",
      "image": "https://www.vaidam.com/sites/default/files/dr._rajeev_vermaa-removebg-preview.png",
      "path": "/doctors/dr-rajeev-verma"
    },
    {
      "id": 26,
      "name": "Dr. Subhash Jangid",
      "specialty": "Orthopaedic and Joint Replacement Surgeon",
      "designation": " Director",
      "hospital": "Fortis Memorial Research Institute, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "25+",
      "image": "https://www.vaidam.com/sites/default/files/subhashjangid-gurgaon-7c8d42.jpg",
      "path": "/doctors/dr-subhash-jangid"
    },
    {
      "id": 27,
      "name": "Dr. Ishwar Bohra",
      "specialty": "Orthopaedic and Joint Replacement Surgeon",
      "designation": " Senior Consultant",
      "hospital": "BLK-Max Super Speciality Hospital Delhi",
      "city": "New Delhi, India",
      "experience": "24+",
      "image": "https://www.vaidam.com/sites/default/files/dr.ishwar_borah-min.jpg",
      "path": "/doctors/dr-ishwar-bohra"
    },
    {
      "id": 28,
      "name": "Dr. Vikram Barua Kaushik",
      "specialty": "Urologist",
      "designation": " Consultant",
      "hospital": "Manipal Hospital Formerly Columbia Asia, Palam Vihar, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "29+",
      "image": "https://www.vaidam.com/sites/default/files/dr._vikram_barua_kaushik-min.jpg",
      "path": "/doctors/dr-vikram-barua-kaushik"
    },
    {
      "id": 29,
      "name": "Dr. Z S Meharwal",
      "specialty": "Cardiac Surgeon",
      "designation": " Chairman",
      "hospital": "Fortis Escorts Heart Institute, New Delhi",
      "city": "New Delhi, India",
      "experience": "42+",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr-z-s-meharwal_cardio-thorasic-vascular-surgery982956-min.webp",
      "path": "/doctors/dr-z-s-meharwal"
    },
    {
      "id": 30,
      "name": "Dr. Yash Gulati",
      "specialty": "Spine and Pain Specialist",
      "designation": " Senior Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "46+",
      "image": "https://www.vaidam.com/sites/default/files/dr.-yash-gulati-orthopedic-surgeon-compressor-min.jpg",
      "path": "/doctors/dr-yash-gulati"
    },
    {
      "id": 31,
      "name": "Dr. Y K Mishra",
      "specialty": "Cardiac Surgeon",
      "designation": " Chairman",
      "hospital": "Manipal Hospitals Dwarka, Delhi",
      "city": "New Delhi, India",
      "experience": "44+",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr._y_k_mishra_1.webp",
      "path": "/doctors/dr-y-k-mishra"
    },
    {
      "id": 32,
      "name": "Dr. Vivekanandan Shanmugam",
      "specialty": "Liver Transplant Surgeon",
      "designation": " Senior Consultant",
      "hospital": "SIMS Hospital, Vadapalani, Chennai",
      "city": "Chennai, India",
      "experience": "21+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr-vivekanandan-shanmugam-min.jpg",
      "path": "/doctors/dr-vivekanandan-shanmugam"
    },
    {
      "id": 33,
      "name": "Dr. Vivek Vij",
      "specialty": "Liver Transplant Surgeon",
      "designation": " Chairman",
      "hospital": "Fortis Hospital, Noida",
      "city": "New Delhi, India",
      "experience": "27+",
      "image": "https://www.vaidam.com/sites/default/files/dr_vivek_vij.jpg",
      "path": "/doctors/dr-vivek-vij"
    },
    {
      "id": 34,
      "name": "Dr. Vivek Raj",
      "specialty": "Medical Gastroenterologist",
      "designation": " Director",
      "hospital": "Max Super Speciality Hospital, Saket, New Delhi",
      "city": "New Delhi, India",
      "experience": "43+",
      "image": "https://www.vaidam.com/sites/default/files/dr-vivek-raj-max.jpg",
      "path": "/doctors/dr-vivek-raj"
    },
    {
      "id": 35,
      "name": "Dr Vipul Gupta",
      "specialty": "Neurosurgeon",
      "designation": " Director",
      "hospital": "Paras Hospitals, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "29+",
      "image": "https://www.vaidam.com/sites/default/files/dr_vipul_gupta-min.jpg",
      "path": "/doctors/dr-vipul-gupta"
    },
    {
      "id": 36,
      "name": "Dr. Vinod Raina",
      "specialty": "Medical Oncologist",
      "designation": " Chairman",
      "hospital": "Fortis Memorial Research Institute, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "40+",
      "image": "https://www.vaidam.com/sites/default/files/dr._vinod_raina-min.png",
      "path": "/doctors/dr-vinod-raina"
    },
    {
      "id": 37,
      "name": "Dr. Vinod Kumar Nigam",
      "specialty": "General Surgeon",
      "designation": " Senior Consultant",
      "hospital": "Max Super Specialty Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "55+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr-vinod-kumar-nigam.jpg",
      "path": "/doctors/dr-vinod-kumar-nigam"
    },
    {
      "id": 38,
      "name": "Dr. Vineesh Mathur",
      "specialty": "Spine Surgeon",
      "designation": " Director",
      "hospital": "Medanta - The Medicity, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "36+",
      "image": "https://www.vaidam.com/sites/default/files/dr._vineesh_mathur-removebg-preview-min.png",
      "path": "/doctors/dr-vineesh-mathur"
    },
    {
      "id": 39,
      "name": "Dr. Vikram Pratap Singh",
      "specialty": "Surgical Oncologist",
      "designation": " Senior Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "50+",
      "image": "https://www.vaidam.com/sites/default/files/vikram_pratap_singh-min.jpg",
      "path": "/doctors/dr-vikram-pratap-singh"
    },
    {
      "id": 40,
      "name": "Dr Vikas Singhal",
      "specialty": "Obesity and Bariatric Surgeon",
      "designation": " Consultant",
      "hospital": "Medanta - The Medicity, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "25+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr_vikas_singhal-min.jpg",
      "path": "/doctors/dr-vikas-singhal"
    },
    {
      "id": 41,
      "name": "Dr. Vikas Dua",
      "specialty": "Pediatric Hematologist",
      "designation": " Director",
      "hospital": "Fortis Memorial Research Institute, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "22+",
      "image": "https://www.vaidam.com/sites/default/files/dr_vikas_dua-min.png",
      "path": "/doctors/dr-vikas-dua"
    },
    {
      "id": 42,
      "name": "Dr. Vijaya Rajakumari",
      "specialty": "Nephrologist",
      "designation": " Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "33+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._vijaya_rajakumari-min.jpg",
      "path": "/doctors/dr-vijaya-rajakumari"
    },
    {
      "id": 43,
      "name": "Dr. Vidyadhara S.",
      "specialty": "Spine Surgeon",
      "designation": " HOD",
      "hospital": "Manipal Hospital (Old Airport Road) Bangalore",
      "city": "Bangalore, India",
      "experience": "25+",
      "image": "https://www.vaidam.com/sites/default/files/dr._vidyadhara.jpg",
      "path": "/doctors/dr-vidyadhara-s"
    },
    {
      "id": 44,
      "name": "Dr. Vidur Jyoti",
      "specialty": "Advanced Laparoscopic, Minimal Access and Bariatric Surgeon",
      "designation": " Director",
      "hospital": "Max Super Specialty Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "45+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._vidur_jyoti-min.jpg",
      "path": "/doctors/dr-vidur-jyoti"
    },
    {
      "id": 45,
      "name": "Dr. Veena Bhat",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Director",
      "hospital": "Artemis Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "48+",
      "image": "https://www.vaidam.com/sites/default/files/veena_bhat.jpg",
      "path": "/doctors/dr-veena-bhat"
    },
    {
      "id": 46,
      "name": "Dr. V. P. Singh",
      "specialty": "Neurosurgeon",
      "designation": " Chairman",
      "hospital": "Medanta - The Medicity, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "36+",
      "image": "https://www.vaidam.com/sites/default/files/dr._v._p._singh-removebg-preview-min.png",
      "path": "/doctors/dr-v-p-singh"
    },
    {
      "id": 47,
      "name": "Dr. Umesh Gupta",
      "specialty": "Nephrologist",
      "designation": " Director",
      "hospital": "Aakash Healthcare Super Speciality Hospital, Dwarka, New Delhi",
      "city": "New Delhi, India",
      "experience": "30+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr_umesh_gupta.jpg",
      "path": "/doctors/dr-umesh-gupta"
    },
    {
      "id": 48,
      "name": "Dr. Tushar Shah",
      "specialty": "Neurosurgeon",
      "designation": " Consultant",
      "hospital": "CIMS Hospital, Ahmedabad",
      "city": "Ahmedabad, India",
      "experience": "37+",
      "image": "https://www.vaidam.com/sites/default/files/dr._tushar_shah.jpg",
      "path": "/doctors/dr-tushar-shah"
    },
    {
      "id": 49,
      "name": "Dr. TPR Bharadwaj",
      "specialty": "Hematologist",
      "designation": " Consultant",
      "hospital": "Apollo Hospitals, Greams Road, Chennai",
      "city": "Chennai, India",
      "experience": "52+",
      "image": "https://www.vaidam.com/sites/default/files/tpr_bharadwaj_1.jpg",
      "path": "/doctors/dr-tpr-bharadwaj"
    },
    {
      "id": 50,
      "name": "Dr. T. S. Kler",
      "specialty": "Interventional Cardiologist",
      "designation": " Chairman",
      "hospital": "BLK-Max Super Speciality Hospital Delhi",
      "city": "New Delhi, India",
      "experience": "48+",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr._t._s._kler-min.webp",
      "path": "/doctors/dr-t-s-kler"
    },
    {
      "id": 51,
      "name": "Dr. Sushma Ved",
      "specialty": "Infertility Specialist",
      "designation": " Senior Consultant",
      "hospital": "Mediworld IVF Center and Fertility",
      "city": "New Delhi, India",
      "experience": "16+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr_sushma_ved_embryologist_mediworld_fertility_centre_newdelhi.jpg",
      "path": "/doctors/dr-sushma-ved"
    },
    {
      "id": 52,
      "name": "Prof. Dr. Suresh H. Advani",
      "specialty": "Medical Oncologist",
      "designation": " Senior Consultant",
      "hospital": "Nanavati Super Specialty Hospital, Mumbai",
      "city": "Mumbai, India",
      "experience": "50+",
      "image": "https://www.vaidam.com/sites/default/files/prof._dr._suresh_h._advani-min.jpg",
      "path": "/doctors/prof-dr-suresh-h-advani"
    },
    {
      "id": 53,
      "name": "Dr. Suneeta Mittal",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Director",
      "hospital": "Fortis Memorial Research Institute, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "50+",
      "image": "https://www.vaidam.com/sites/default/files/dr-sunita-mittal_0.jpg",
      "path": "/doctors/dr-suneeta-mittal"
    },
    {
      "id": 54,
      "name": "Dr. Sumit Malhotra",
      "specialty": "Aesthetics and Plastic Surgeon",
      "designation": " Consultant",
      "hospital": NaN,
      "city": "Lucknow, India",
      "experience": "24+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr_sumit_malhotra.png",
      "path": "/doctors/dr-sumit-malhotra"
    },
    {
      "id": 55,
      "name": "Dr. Sulbha Arora",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Director",
      "hospital": "NOVA IVI Fertility, Mumbai",
      "city": "Mumbai, India",
      "experience": "26+",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr._sulbha_arora-min.webp",
      "path": "/doctors/dr-sulbha-arora"
    },
    {
      "id": 56,
      "name": "Dr. Sukhvinder Singh Saggu",
      "specialty": "Advanced Laparoscopic, Minimal Access and Bariatric Surgeon",
      "designation": " Consultant",
      "hospital": "CK Birla Hospital, Punjabi Bagh, New Delhi",
      "city": "New Delhi, India",
      "experience": "25+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._sukhvinder_singh_saggu_-_bariatric_and_laparoscopic_surgeon.jpg",
      "path": "/doctors/dr-sukhvinder-singh-saggu"
    },
    {
      "id": 57,
      "name": "Dr. Sujit Chaudhury",
      "specialty": "Medical Gastroenterologist",
      "designation": " Consultant",
      "hospital": "Manipal Hospitals Broadway Formerly AMRI Hospitals, Saltlake",
      "city": "Kolkata, India",
      "experience": "40+",
      "image": "https://www.vaidam.com/sites/default/files/dr._sujit_chaudhury-min.jpg",
      "path": "/doctors/dr-sujit-chaudhury"
    },
    {
      "id": 58,
      "name": "Dr. Sudhir Dubey",
      "specialty": "Neurosurgeon",
      "designation": " Chairman",
      "hospital": "Medanta - The Medicity, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "30+",
      "image": "https://www.vaidam.com/sites/default/files/dr._sudhir_dubey-removebg-preview-min.png",
      "path": "/doctors/dr-sudhir-dubey"
    },
    {
      "id": 59,
      "name": "Dr. Subodh Chandra Pande",
      "specialty": "Radiation Oncologist",
      "designation": " Consultant",
      "hospital": "Artemis Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "10+",
      "image": "https://www.vaidam.com/sites/default/files/dr-subhash-chandra-pande-radiation-oncology.jpg",
      "path": "/doctors/dr-subodh-chandra-pande"
    },
    {
      "id": 60,
      "name": "Dr. Srinivasa Prasad B V",
      "specialty": "Interventional Cardiologist",
      "designation": " Consultant",
      "hospital": "Fortis Hospital, Bangalore (Bannerghatta Road)",
      "city": "Bangalore, India",
      "experience": "24+",
      "image": "https://www.vaidam.com/sites/default/files/dr._srinivasa_prasad_b_v.jpg",
      "path": "/doctors/dr-srinivasa-prasad-b-v"
    },
    {
      "id": 61,
      "name": "Dr. Srikanth M",
      "specialty": "Hematologist",
      "designation": " Consultant",
      "hospital": "Apollo Hospitals, Greams Road, Chennai",
      "city": "Chennai, India",
      "experience": "29+",
      "image": "https://www.vaidam.com/sites/default/files/dr._srikanth_m-min.jpg",
      "path": "/doctors/dr-srikanth-m"
    },
    {
      "id": 62,
      "name": "Dr. Smita Mishra",
      "specialty": "Pediatric Cardiologist",
      "designation": " HOD",
      "hospital": "Manipal Hospitals Dwarka, Delhi",
      "city": "New Delhi, India",
      "experience": "41+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr-smita-mishra-consultant-and-hod-paediatrics-cardiology-min.jpeg",
      "path": "/doctors/dr-smita-mishra"
    },
    {
      "id": 63,
      "name": "Dr. Siddhartha Ghosh",
      "specialty": "Neurosurgeon",
      "designation": " Senior Consultant",
      "hospital": "Apollo Proton Cancer Centre, Chennai",
      "city": "Chennai, India",
      "experience": "40+",
      "image": "https://www.vaidam.com/sites/default/files/6_2.jpg",
      "path": "/doctors/dr-siddhartha-ghosh"
    },
    {
      "id": 64,
      "name": "Dr. Shilpa Saple",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Consultant",
      "hospital": "ART Fertility Clinics, Mumbai",
      "city": "Mumbai, India",
      "experience": "25+",
      "image": "https://d1ea147o02h74h.cloudfront.net/shilpasaple-mumbai-572db3_1-min.png",
      "path": "/doctors/dr-shilpa-saple"
    },
    {
      "id": 65,
      "name": "Dr. Shashidhar",
      "specialty": "Interventional Cardiologist",
      "designation": " Consultant",
      "hospital": "Fortis Hospital, Bangalore (Bannerghatta Road)",
      "city": "Bangalore, India",
      "experience": "34+",
      "image": "https://www.vaidam.com/sites/default/files/dr._shashidhar.jpg",
      "path": "/doctors/dr-shashidhar"
    },
    {
      "id": 66,
      "name": "Dr. Sharad Sheth",
      "specialty": "Nephrologist",
      "designation": " Head of Department",
      "hospital": "Kokilaben Dhirubhai Ambani Hospital, Mumbai",
      "city": "Mumbai, India",
      "experience": "49+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._sharad_sheth-min.png",
      "path": "/doctors/dr-sharad-sheth"
    },
    {
      "id": 67,
      "name": "Dr. Shakti Bhan Khanna",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Senior Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "10+",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/1231.webp",
      "path": "/doctors/dr-shakti-bhan-khanna"
    },
    {
      "id": 68,
      "name": "Dr. Sejal Shah",
      "specialty": "Pediatric Cardiologist",
      "designation": " Senior Consultant",
      "hospital": "Rainbow Children's Hospital & BirthRight by Rainbow, Bangalore",
      "city": "Bangalore, India",
      "experience": "28+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr.sejal_shah.jpg",
      "path": "/doctors/dr-sejal-shah"
    },
    {
      "id": 69,
      "name": "Dr. Vineet Bhushan Gupta",
      "specialty": "Paediatrician",
      "designation": " Senior Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "28+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._vineet_bhushan_gupta_0.jpg",
      "path": "/doctors/dr-vineet-bhushan-gupta"
    },
    {
      "id": 70,
      "name": "Dr Saurabh Rawall",
      "specialty": "Spine Surgeon",
      "designation": " Consultant",
      "hospital": NaN,
      "city": "Noida, India",
      "experience": "18+",
      "image": "https://www.vaidam.com/sites/default/files/dr_saurabh_rawall-min.jpg",
      "path": "/doctors/dr-saurabh-rawall"
    },
    {
      "id": 71,
      "name": "Dr. Satya Gupta",
      "specialty": "Interventional Cardiologist",
      "designation": " Consultant",
      "hospital": "CIMS Hospital, Ahmedabad",
      "city": "Ahmedabad, India",
      "experience": "27+",
      "image": "https://www.vaidam.com/sites/default/files/dr._satya_gupta.jpg",
      "path": "/doctors/dr-satya-gupta"
    },
    {
      "id": 72,
      "name": "Dr. Satish N",
      "specialty": "General Surgeon",
      "designation": " Senior Consultant",
      "hospital": "Manipal Hospital Formerly Columbia Asia Referral Hospital, Bangalore (Yeshwanthpur)",
      "city": "Bangalore, India",
      "experience": "32+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr_satish_n-removebg-preview-min.png",
      "path": "/doctors/dr-satish-n"
    },
    {
      "id": 73,
      "name": "Dr. Sanjay Verma",
      "specialty": "Advanced Laparoscopic, Minimal Access and Bariatric Surgeon",
      "designation": " Director",
      "hospital": "Fortis Escorts Heart Institute, New Delhi",
      "city": "New Delhi, India",
      "experience": "30+",
      "image": "https://www.vaidam.com/sites/default/files/dr._sanjay_verma.jpg",
      "path": "/doctors/dr-sanjay-verma"
    },
    {
      "id": 74,
      "name": "Dr. Sanjay Gogoi",
      "specialty": "Urologist and Renal Transplant Specialist",
      "designation": " Director",
      "hospital": NaN,
      "city": "New Delhi, India",
      "experience": "25+",
      "image": "https://www.vaidam.com/sites/default/files/dr._sanjay_gogoi-min.jpg",
      "path": "/doctors/dr-sanjay-gogoi"
    },
    {
      "id": 75,
      "name": "Dr. Sandip Shah",
      "specialty": "Neurosurgeon",
      "designation": " Consultant",
      "hospital": "CIMS Hospital, Ahmedabad",
      "city": "Ahmedabad, India",
      "experience": "19+",
      "image": "https://www.vaidam.com/sites/default/files/dr-sandip-shah-1.jpg",
      "path": "/doctors/dr-sandip-shah"
    },
    {
      "id": 76,
      "name": "Dr. Sandeep Vaishya",
      "specialty": "Neurosurgeon",
      "designation": " Director",
      "hospital": "Fortis Memorial Research Institute, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "36+",
      "image": "https://www.vaidam.com/sites/default/files/dr._sandeep_vaishya_0-min.jpg",
      "path": "/doctors/dr-sandeep-vaishya"
    },
    {
      "id": 77,
      "name": "Dr. Sameer Kaul",
      "specialty": "Medical Oncologist",
      "designation": " Senior Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "30+",
      "image": "https://www.vaidam.com/sites/default/files/dr._kaul-min.jpg",
      "path": "/doctors/dr-sameer-kaul"
    },
    {
      "id": 78,
      "name": "Dr. Salil Jain",
      "specialty": "Nephrologist",
      "designation": " Director",
      "hospital": "Fortis Memorial Research Institute, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "40+",
      "image": "https://www.vaidam.com/sites/default/files/dr._salil_jain-min.png",
      "path": "/doctors/dr-salil-jain"
    },
    {
      "id": 79,
      "name": "Dr. Saket Goel",
      "specialty": "Colo-Rectal Surgeon",
      "designation": " Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "30+",
      "image": "https://www.vaidam.com/sites/default/files/dr_saket_goel.jpg",
      "path": "/doctors/dr-saket-goel"
    },
    {
      "id": 80,
      "name": "Dr. Sajan K Hegde",
      "specialty": "Spine Surgeon",
      "designation": " Senior Consultant",
      "hospital": "Apollo Hospitals, Greams Road, Chennai",
      "city": "Chennai, India",
      "experience": "44+",
      "image": "https://www.vaidam.com/sites/default/files/dr._sajan-min.jpg",
      "path": "/doctors/dr-sajan-k-hegde"
    },
    {
      "id": 81,
      "name": "Dr. Sabhyata Gupta",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Director",
      "hospital": "Medanta - The Medicity, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "38+",
      "image": "https://www.vaidam.com/sites/default/files/dr._sabhyata_gupta.jpg",
      "path": "/doctors/dr-sabhyata-gupta"
    },
    {
      "id": 82,
      "name": "Dr. S K Rajan",
      "specialty": "Spine Surgeon",
      "designation": " HOD",
      "hospital": "Artemis Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "22+",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview70-min.png",
      "path": "/doctors/dr-s-k-rajan"
    },
    {
      "id": 83,
      "name": "Dr. S. V. Kotwal",
      "specialty": "Urologist",
      "designation": " Head of Department",
      "hospital": "Artemis Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "47+",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview74-min.png",
      "path": "/doctors/dr-s-v-kotwal"
    },
    {
      "id": 84,
      "name": "Dr. Robert Mao",
      "specialty": "Interventional Cardiologist",
      "designation": " Consultant",
      "hospital": "Apollo Hospitals, Greams Road, Chennai",
      "city": "Chennai, India",
      "experience": "53+",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr-robert-mao-cardiologist.webp",
      "path": "/doctors/dr-robert-mao"
    },
    {
      "id": 85,
      "name": "Dr. Robert Coelho",
      "specialty": "Pediatric Cardiac Surgeon",
      "designation": " Director",
      "hospital": "MIOT International, Chennai",
      "city": "Chennai, India",
      "experience": "34+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._coelho.images-min.jpeg",
      "path": "/doctors/dr-robert-coelho"
    },
    {
      "id": 86,
      "name": "Dr. Revathi Raj",
      "specialty": "Pediatric Hematologist",
      "designation": " Senior Consultant",
      "hospital": "Apollo Cancer Hospital, Chennai",
      "city": "Chennai, India",
      "experience": "34+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr-revathi-raj-min.jpg",
      "path": "/doctors/dr-revathi-raj"
    },
    {
      "id": 87,
      "name": "Dr. Renu Raina Sehgal",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Senior Consultant",
      "hospital": "Artemis Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "28+",
      "image": "https://www.vaidam.com/sites/default/files/dr._renu_raina_sehgal-min.jpg",
      "path": "/doctors/dr-renu-raina-sehgal"
    },
    {
      "id": 88,
      "name": "Dr. Ravi Bhatia",
      "specialty": "Neurosurgeon",
      "designation": " Senior Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "55+",
      "image": "https://www.vaidam.com/sites/default/files/dr._ravi_bhatia-min.jpg",
      "path": "/doctors/dr-ravi-bhatia"
    },
    {
      "id": 89,
      "name": "Dr. Ramya Mishra",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Senior Consultant",
      "hospital": "Apollo Fertility Center, Lajpat Nagar",
      "city": "New Delhi, India",
      "experience": "16+",
      "image": "https://www.vaidam.com/sites/default/files/dr_ramya_mishra.jpg",
      "path": "/doctors/dr-ramya-mishra"
    },
    {
      "id": 90,
      "name": "Dr. Ramesh Sarin",
      "specialty": "Surgical Oncologist",
      "designation": " Senior Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "10+",
      "image": "https://www.vaidam.com/sites/default/files/dr_ramesh_sarin.jpg",
      "path": "/doctors/dr-ramesh-sarin"
    },
    {
      "id": 91,
      "name": "Dr. Ramesh S Bilimagga",
      "specialty": "Radiation Oncologist",
      "designation": " Senior Consultant",
      "hospital": "HCG Cancer Centre, Bangalore",
      "city": "Bangalore, India",
      "experience": "43+",
      "image": "https://www.vaidam.com/sites/default/files/dr_ramesh_billimagga-radiationoncologist-hcgbangalore-min.jpg",
      "path": "/doctors/dr-ramesh-s-bilimagga"
    },
    {
      "id": 92,
      "name": "Dr. Ramen Goel",
      "specialty": "General Surgeon",
      "designation": " Consultant",
      "hospital": "Wockhardt Hospital, Mumbai",
      "city": "Mumbai, India",
      "experience": "39+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._ramen_goel.jpg",
      "path": "/doctors/dr-ramen-goel"
    },
    {
      "id": 93,
      "name": "Dr. Ramani Narasimhan",
      "specialty": "Paediatric Orthopedecian",
      "designation": " Senior Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "39+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._ramani_narasimhan-removebg-preview.png",
      "path": "/doctors/dr-ramani-narasimhan"
    },
    {
      "id": 94,
      "name": "Dr. Rakesh Agarwal",
      "specialty": "Neurologist",
      "designation": " Senior Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "44+",
      "image": "https://www.vaidam.com/sites/default/files/dr._rakesh_agarwal-min.png",
      "path": "/doctors/dr-rakesh-agarwal"
    },
    {
      "id": 95,
      "name": "Dr Raju Vyas",
      "specialty": "Cardiac Surgeon",
      "designation": " Director",
      "hospital": "Fortis Hospital, Shalimar Bagh, New Delhi",
      "city": "New Delhi, India",
      "experience": "36+",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr_raju_vyas_cleanup-min.webp",
      "path": "/doctors/dr-raju-vyas"
    },
    {
      "id": 96,
      "name": "Dr Rajinder Yadav",
      "specialty": "Urologist",
      "designation": " Director",
      "hospital": "Fortis Hospital, Shalimar Bagh, New Delhi",
      "city": "New Delhi, India",
      "experience": "51+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr_rajinder_yadav-min.jpg",
      "path": "/doctors/dr-rajinder-yadav"
    },
    {
      "id": 97,
      "name": "Dr. Rajesh Sharma",
      "specialty": "Pediatric Cardiac Surgeon",
      "designation": " Program Director",
      "hospital": "Marengo Asia Hospitals Formerly QRG Health City, Faridabad",
      "city": "New Delhi, India",
      "experience": "32+",
      "image": "https://www.vaidam.com/sites/default/files/dr._rajesh_sharma-min.jpg",
      "path": "/doctors/dr-rajesh-sharma"
    },
    {
      "id": 98,
      "name": "Dr. Rajesh Kumar Verma",
      "specialty": "Spine Surgeon",
      "designation": " Director",
      "hospital": "Sanar International Hospital",
      "city": "Gurgaon, India",
      "experience": "27+",
      "image": "https://www.vaidam.com/sites/default/files/dr._rajesh-min_0.jpg",
      "path": "/doctors/dr-rajesh-kumar-verma"
    },
    {
      "id": 99,
      "name": "Dr. Rajesh Kapoor",
      "specialty": "Surgical Gastroenterologist",
      "designation": " Director",
      "hospital": "Jaypee Hospital, Noida",
      "city": "Noida, India",
      "experience": "42+",
      "image": "https://www.vaidam.com/sites/default/files/dr._rajesh-kapoor-min_0.jpg",
      "path": "/doctors/dr-rajesh-kapoor"
    },
    {
      "id": 100,
      "name": "Dr. Rajat Kumar Gupta",
      "specialty": "Pediatric Cardiologist",
      "designation": " Senior Consultant",
      "hospital": "Fortis Hospital, Mohali",
      "city": "Mohali, India",
      "experience": "15+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr_rajat_1.jpg",
      "path": "/doctors/dr-rajat-kumar-gupta"
    },
    {
      "id": 101,
      "name": "Dr. Rajagopalan Krishnan",
      "specialty": "Spine Surgeon",
      "designation": " Senior Consultant",
      "hospital": NaN,
      "city": "New Delhi, India",
      "experience": "32+",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview46-min.png",
      "path": "/doctors/dr-rajagopalan-krishnan"
    },
    {
      "id": 102,
      "name": "Dr. Rahul Bhargava",
      "specialty": "Hematologist",
      "designation": " Director",
      "hospital": "Fortis Memorial Research Institute, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "24+",
      "image": "https://www.vaidam.com/sites/default/files/dr_rahul_bhargava.jpg",
      "path": "/doctors/dr-rahul-bhargava"
    },
    {
      "id": 103,
      "name": "Dr. Raghuram Sekhar",
      "specialty": "Endovascular Surgeon",
      "designation": " Consultant",
      "hospital": "Kokilaben Dhirubhai Ambani Hospital, Mumbai",
      "city": "Mumbai, India",
      "experience": "33+",
      "image": "https://www.vaidam.com/sites/default/files/dr._raghuram_sekhar-min.png",
      "path": "/doctors/dr-raghuram-sekhar"
    },
    {
      "id": 104,
      "name": "Dr. Puneet Girdhar",
      "specialty": "Spine Surgeon",
      "designation": " Head of Department",
      "hospital": "BLK-Max Super Speciality Hospital Delhi",
      "city": "New Delhi, India",
      "experience": "26+",
      "image": "https://www.vaidam.com/sites/default/files/dr._puneet_girdhar.jpg",
      "path": "/doctors/dr-puneet-girdhar"
    },
    {
      "id": 105,
      "name": "Dr. Priyadarshan K",
      "specialty": "Aesthetics and Plastic Surgeon",
      "designation": " Consultant",
      "hospital": "Fortis Hospital, Bangalore (Bannerghatta Road)",
      "city": "Bangalore, India",
      "experience": "30+",
      "image": "https://d1ea147o02h74h.cloudfront.net/image-removebg-preview_64.png",
      "path": "/doctors/dr-priyadarshan-k"
    },
    {
      "id": 106,
      "name": "Dr. Prita Trehan",
      "specialty": "General Paediatrician",
      "designation": " Senior Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "53+",
      "image": "https://www.vaidam.com/sites/default/files/dr._prita_trehan_1.jpg",
      "path": "/doctors/dr-prita-trehan"
    },
    {
      "id": 107,
      "name": "Dr. Pranathi Gutta",
      "specialty": "Paediatric Neurologist",
      "designation": " Consultant",
      "hospital": "Rainbow Children's Hospital and BirthRight by Rainbow, Kondapur, Hyderabad",
      "city": "Hyderabad, India",
      "experience": "23+",
      "image": "https://www.vaidam.com/sites/default/files/dr._pranathi_gutta.jpg",
      "path": "/doctors/dr-pranathi-gutta"
    },
    {
      "id": 108,
      "name": "Dr. Pradeep Chowbey",
      "specialty": "Obesity and Bariatric Surgeon",
      "designation": " Chairman",
      "hospital": "Max Super Speciality Hospital, Saket, New Delhi",
      "city": "New Delhi, India",
      "experience": "42+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr_pradeep_chowbey.jpg",
      "path": "/doctors/dr-pradeep-chowbey"
    },
    {
      "id": 109,
      "name": "Dr. Philomena Vaz",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Consultant",
      "hospital": "Manipal Hospital (Old Airport Road) Bangalore",
      "city": "Bangalore, India",
      "experience": "50+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._philomena_vaz.jpg",
      "path": "/doctors/dr-philomena-vaz"
    },
    {
      "id": 110,
      "name": "Dr. Pawan Rawal",
      "specialty": "Medical Gastroenterologist",
      "designation": " Head of Department",
      "hospital": "Artemis Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "25+",
      "image": "https://www.vaidam.com/sites/default/files/dr._pawan_rawal-min.jpg",
      "path": "/doctors/dr-pawan-rawal"
    },
    {
      "id": 111,
      "name": "Dr. Parul Katiyar",
      "specialty": "Infertility Specialist",
      "designation": " Consultant",
      "hospital": "ART Fertility Clinics, Delhi",
      "city": "New Delhi, India",
      "experience": "22+",
      "image": "https://www.vaidam.com/sites/default/files/dr.-min_1.jpg",
      "path": "/doctors/dr-parul-katiyar"
    },
    {
      "id": 112,
      "name": "Dr. Parul Gupta Khanna",
      "specialty": "Infertility Specialist",
      "designation": " Consultant",
      "hospital": "Nova IVF Fertility, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "9+",
      "image": "https://www.vaidam.com/sites/default/files/dr._parul_gupta_1.png",
      "path": "/doctors/dr-parul-gupta-khanna"
    },
    {
      "id": 113,
      "name": "Dr. Pankaj Venkatrao Deshpande",
      "specialty": "Paediatric Nephrologist",
      "designation": " Consultant",
      "hospital": "Apollo Hospitals, Mumbai",
      "city": "Mumbai, India",
      "experience": "34+",
      "image": "https://d1ea147o02h74h.cloudfront.net/drpankaj_venkatrao_deshpande-min.jpg",
      "path": "/doctors/dr-pankaj-venkatrao-deshpande"
    },
    {
      "id": 114,
      "name": "Dr. Nutan Agarwal",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Head of Department",
      "hospital": "Artemis Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "45+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._nutan_agarwal_-_obstetrician_and_gynecologist.jpg",
      "path": "/doctors/dr-nutan-agarwal"
    },
    {
      "id": 115,
      "name": "Dr. Nitin Sood",
      "specialty": "Hematologist",
      "designation": " Director",
      "hospital": "Medanta - The Medicity, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "28+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._nitin_sood-min.jpeg",
      "path": "/doctors/dr-nitin-sood"
    },
    {
      "id": 116,
      "name": "Dr. Niranjan Naik",
      "specialty": "Surgical Oncologist",
      "designation": " Consultant",
      "hospital": "Fortis Memorial Research Institute, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "31+",
      "image": "https://www.vaidam.com/sites/default/files/dr._niranjan_naik-removebg-preview-min.png",
      "path": "/doctors/dr-niranjan-naik"
    },
    {
      "id": 117,
      "name": "Dr. Neville Solomon",
      "specialty": "Pediatric Cardiac Surgeon",
      "designation": " Consultant",
      "hospital": "Apollo Children's Hospital, Chennai",
      "city": "Chennai, India",
      "experience": "27+",
      "image": "https://www.vaidam.com/sites/default/files/dr._neville_solomon-min.jpg",
      "path": "/doctors/dr-neville-solomon"
    },
    {
      "id": 118,
      "name": "Dr. Neha Gupta",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Senior Consultant",
      "hospital": "Mediworld IVF Center and Fertility",
      "city": "New Delhi, India",
      "experience": "19+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr_neha_gupta.jpg",
      "path": "/doctors/dr-neha-gupta"
    },
    {
      "id": 119,
      "name": "Dr. Neeraj Awasthy",
      "specialty": "Pediatric Cardiologist",
      "designation": " Director",
      "hospital": "Fortis Escorts Heart Institute, New Delhi",
      "city": "New Delhi, India",
      "experience": "25+",
      "image": "https://www.vaidam.com/sites/default/files/dr._neeraj_awasthy.jpg",
      "path": "/doctors/dr-neeraj-awasthy"
    },
    {
      "id": 120,
      "name": "Dr. Naveen Bhamri",
      "specialty": "Interventional Cardiologist",
      "designation": " Consultant",
      "hospital": "Max Super Speciality hospital, Shalimar Bagh, New Delhi",
      "city": "New Delhi, India",
      "experience": "23+",
      "image": "https://www.vaidam.com/sites/default/files/dr-naveen-bhamri-cardiology.jpg",
      "path": "/doctors/dr-naveen-bhamri"
    },
    {
      "id": 121,
      "name": "Dr. Nagraj Gururaj Huilgol",
      "specialty": "Radiation Oncologist",
      "designation": " Consultant",
      "hospital": "Nanavati Super Specialty Hospital, Mumbai",
      "city": "Mumbai, India",
      "experience": "47+",
      "image": "https://www.vaidam.com/sites/default/files/dr._nagraj_gururaj_huilgol.jpg",
      "path": "/doctors/dr-nagraj-gururaj-huilgol"
    },
    {
      "id": 122,
      "name": "Dr. N. Ragavan",
      "specialty": "Endourologist",
      "designation": " Consultant",
      "hospital": "Apollo Hospitals, Greams Road, Chennai",
      "city": "Chennai, India",
      "experience": "32+",
      "image": "https://www.vaidam.com/sites/default/files/dr._n._ragavan.jpg",
      "path": "/doctors/dr-n-ragavan"
    },
    {
      "id": 123,
      "name": "Dr. Murugan N",
      "specialty": "Hepato-Pancreato-Biliary Surgeon",
      "designation": " Consultant",
      "hospital": "Apollo Hospitals, Greams Road, Chennai",
      "city": "Chennai, India",
      "experience": "46+",
      "image": "https://www.vaidam.com/sites/default/files/dr-murugan-n.jpg",
      "path": "/doctors/dr-murugan-n"
    },
    {
      "id": 124,
      "name": "Dr. Mukut Minz",
      "specialty": "Urologist and Renal Transplant Specialist",
      "designation": " Director",
      "hospital": "Fortis Hospital, Mohali",
      "city": "Mohali, India",
      "experience": "48+",
      "image": "https://www.vaidam.com/sites/default/files/dr._mukut_minz_-_urologist_and_renal_transplant_surgeon.jpg",
      "path": "/doctors/dr-mukut-minz"
    },
    {
      "id": 125,
      "name": "Dr. Mriganka Sekhar Sharma",
      "specialty": "Advanced Laparoscopic, Minimal Access and Bariatric Surgeon",
      "designation": " Chief",
      "hospital": "Manipal Hospital Formerly Columbia Asia, Palam Vihar, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "30+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr_mrigankar_sekar_sharma.jpg",
      "path": "/doctors/dr-mriganka-sekhar-sharma"
    },
    {
      "id": 126,
      "name": "Dr. Moorthy G",
      "specialty": "Pediatric Urologist",
      "designation": " Senior Consultant",
      "hospital": "Rainbow Children's Hospital & BirthRight by Rainbow, Chennai",
      "city": "Chennai, India",
      "experience": "14+",
      "image": "https://www.vaidam.com/sites/default/files/dr._moorthy_g-min.jpg",
      "path": "/doctors/dr-moorthy-g"
    },
    {
      "id": 127,
      "name": "Dr. Meenakshi Dua",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Senior Consultant",
      "hospital": "ART Fertility Clinics, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "26+",
      "image": "https://www.vaidam.com/sites/default/files/dr._meenakshi_dua-removebg-preview-min.png",
      "path": "/doctors/dr-meenakshi-dua"
    },
    {
      "id": 128,
      "name": "Dr Manvinder Singh Sachdev",
      "specialty": "Pediatric Cardiologist",
      "designation": " Consultant",
      "hospital": "Fortis Memorial Research Institute, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "28+",
      "image": "https://www.vaidam.com/sites/default/files/dr._manvinder-min.jpg",
      "path": "/doctors/dr-manvinder-singh-sachdev"
    },
    {
      "id": 129,
      "name": "Dr. Manoj Miglani",
      "specialty": "Spine Surgeon",
      "designation": " Director",
      "hospital": "Fortis Flt. Lt. Rajan Dhall Hospital, Vasant Kunj, New Delhi",
      "city": "New Delhi, India",
      "experience": "27+",
      "image": "https://www.vaidam.com/sites/default/files/dr._manoj_miglani_-_orthopedics_and_joint_replacement_surgeon.jpg",
      "path": "/doctors/dr-manoj-miglani"
    },
    {
      "id": 130,
      "name": "Dr. Manju Sinha",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Senior Consultant",
      "hospital": "Fortis Hospital, Noida",
      "city": "Noida, India",
      "experience": "52+",
      "image": "https://www.vaidam.com/sites/default/files/dr._manju_sinha.jpg",
      "path": "/doctors/dr-manju-sinha"
    },
    {
      "id": 131,
      "name": "Dr. Madan Mohan Reddy",
      "specialty": "Orthopaedic and Joint Replacement Surgeon",
      "designation": " Senior Consultant",
      "hospital": "Apollo Hospitals, Greams Road, Chennai",
      "city": "Chennai, India",
      "experience": "35+",
      "image": "https://www.vaidam.com/sites/default/files/dr._madan_mohan_reddy-min.jpg",
      "path": "/doctors/dr-madan-mohan-reddy"
    },
    {
      "id": 132,
      "name": "Dr. Lavi Sindhu",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Consultant",
      "hospital": "Birla Fertility and IVF Center, Lajpat Nagar",
      "city": "New Delhi, India",
      "experience": "14+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._lavi-min.jpg",
      "path": "/doctors/dr-lavi-sindhu"
    },
    {
      "id": 133,
      "name": "Dr. Lakshmi Kant Tripathi",
      "specialty": "Nephrologist",
      "designation": " Senior Consultant",
      "hospital": "Artemis Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "31+",
      "image": "https://www.vaidam.com/sites/default/files/dr._lakshmi_kant_tripathi.jpg",
      "path": "/doctors/dr-lakshmi-kant-tripathi"
    },
    {
      "id": 134,
      "name": "Dr. Kulbhushan Singh Dagar",
      "specialty": "Cardiac Surgeon",
      "designation": " Director",
      "hospital": "Max Super Speciality Hospital, Saket, New Delhi",
      "city": "New Delhi, India",
      "experience": "36+",
      "image": "https://www.vaidam.com/sites/default/files/dr._kulbhushan_singh_dagar.jpg",
      "path": "/doctors/dr-kulbhushan-singh-dagar"
    },
    {
      "id": 135,
      "name": "Dr. Krishna S Iyer",
      "specialty": "Pediatric Cardiac Surgeon",
      "designation": " Director",
      "hospital": "Fortis Escorts Heart Institute, New Delhi",
      "city": "New Delhi, India",
      "experience": "46+",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr._krishna_s_iyer-min_0.webp",
      "path": "/doctors/dr-krishna-s-iyer"
    },
    {
      "id": 136,
      "name": "Dr. Kokkula Praneeth",
      "specialty": "Neurosurgeon",
      "designation": " Consultant",
      "hospital": "Rainbow Children's Hospital and BirthRight by Rainbow, Hyderabad",
      "city": "Hyderabad, India",
      "experience": "15+",
      "image": "https://www.vaidam.com/sites/default/files/dr._kokkula_praneeth-min.png",
      "path": "/doctors/dr-kokkula-praneeth"
    },
    {
      "id": 137,
      "name": "Dr Keshava R",
      "specialty": "Interventional Cardiologist",
      "designation": " Director",
      "hospital": "Fortis Hospital, Bangalore (Cunningham Road)",
      "city": "Bangalore, India",
      "experience": "38+",
      "image": "https://www.vaidam.com/sites/default/files/untitled339-min.png",
      "path": "/doctors/dr-keshava-r"
    },
    {
      "id": 138,
      "name": "Dr. Kaustubh Patel",
      "specialty": "Surgical Oncologist",
      "designation": " Senior Consultant",
      "hospital": "HCG Cancer Centre, Ahmedabad",
      "city": "Ahmedabad, India",
      "experience": "50+",
      "image": "https://www.vaidam.com/sites/default/files/dr-kaustubh-patel.jpg",
      "path": "/doctors/dr-kaustubh-patel"
    },
    {
      "id": 139,
      "name": "Dr. Kapil Kumar",
      "specialty": "Surgical Oncologist",
      "designation": " Director",
      "hospital": "Fortis Hospital, Shalimar Bagh, New Delhi",
      "city": "New Delhi, India",
      "experience": "40+",
      "image": "https://www.vaidam.com/sites/default/files/dr.-kapil-kumar.jpg",
      "path": "/doctors/dr-kapil-kumar"
    },
    {
      "id": 140,
      "name": "Dr. KNK Shetty",
      "specialty": "Medical Gastroenterologist",
      "designation": " Consultant",
      "hospital": "Manipal Hospital (Old Airport Road) Bangalore",
      "city": "Bangalore, India",
      "experience": "48+",
      "image": "https://www.vaidam.com/sites/default/files/dr._knk_shetty.jpg",
      "path": "/doctors/dr-knk-shetty"
    },
    {
      "id": 141,
      "name": "Dr. K.N. Srivastava",
      "specialty": "General Surgeon",
      "designation": " HOD",
      "hospital": "BLK-Max Super Speciality Hospital Delhi",
      "city": "New Delhi, India",
      "experience": "52+",
      "image": "https://www.vaidam.com/sites/default/files/dr._kn-min.jpg",
      "path": "/doctors/dr-kn-srivastava"
    },
    {
      "id": 142,
      "name": "Dr. Jyoti Anant Bobe",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Consultant",
      "hospital": "Apollo Hospitals, Mumbai",
      "city": "Mumbai, India",
      "experience": "32+",
      "image": "https://d1ea147o02h74h.cloudfront.net/jyoti_anant_bobe-min.jpg",
      "path": "/doctors/dr-jyoti-anant-bobe"
    },
    {
      "id": 143,
      "name": "Dr. Jayesh Sardhara",
      "specialty": "Neurosurgeon",
      "designation": " Senior Consultant",
      "hospital": "Fortis Hospital, Mulund, Mumbai",
      "city": "Mumbai, India",
      "experience": "15+",
      "image": "https://www.vaidam.com/sites/default/files/dr._jayesh_sardhara.jpg",
      "path": "/doctors/dr-jayesh-sardhara"
    },
    {
      "id": 144,
      "name": "Dr. Jayant Arora",
      "specialty": "Orthopaedic and Joint Replacement Surgeon",
      "designation": " Director",
      "hospital": "Fortis Memorial Research Institute, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "29+",
      "image": "https://www.vaidam.com/sites/default/files/dr_jayant_arora-min.png",
      "path": "/doctors/dr-jayant-arora"
    },
    {
      "id": 145,
      "name": "Dr. Jai Dev Wig",
      "specialty": "Surgical Oncologist",
      "designation": " Director",
      "hospital": "Fortis Hospital, Mohali",
      "city": "Mohali, India",
      "experience": "44+",
      "image": "https://www.vaidam.com/sites/default/files/dr_jai.jpg",
      "path": "/doctors/dr-jai-dev-wig"
    },
    {
      "id": 146,
      "name": "Dr. IPS Oberoi",
      "specialty": "Orthopaedic and Joint Replacement Surgeon",
      "designation": " Chairman",
      "hospital": "Artemis Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "31+",
      "image": "https://www.vaidam.com/sites/default/files/dr._ips_oberoi_-_orthopaedics-min.jpg",
      "path": "/doctors/dr-ips-oberoi"
    },
    {
      "id": 147,
      "name": "Dr. I. P. S. Kochar",
      "specialty": "Endocrinologist",
      "designation": " Senior Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "Noida, India",
      "experience": "40+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._i.p.s._kochar.jpg",
      "path": "/doctors/dr-i-p-s-kochar"
    },
    {
      "id": 148,
      "name": "Dr. Hitesh Garg",
      "specialty": "Spine Surgeon",
      "designation": " HOD",
      "hospital": "Artemis Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "23+",
      "image": "https://www.vaidam.com/sites/default/files/dr._hitesh_garg_-_orthopaedics_spine_surgeon-min.jpg",
      "path": "/doctors/dr-hitesh-garg"
    },
    {
      "id": 149,
      "name": "Dr. Hemant Sharma",
      "specialty": "Orthopaedic and Joint Replacement Surgeon",
      "designation": " Chairman",
      "hospital": "Marengo Asia Hospitals Formerly W Pratiksha Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "29+",
      "image": "https://www.vaidam.com/sites/default/files/dr._hemant_sharma_-_orthopedist.jpg",
      "path": "/doctors/dr-hemant-sharma"
    },
    {
      "id": 150,
      "name": "Dr. Harshavardhan Hegde",
      "specialty": "Orthopaedic and Joint Replacement Surgeon",
      "designation": " Director",
      "hospital": "Max Super Speciality Hospital, Saket, New Delhi",
      "city": "New Delhi, India",
      "experience": "42+",
      "image": "https://www.vaidam.com/sites/default/files/dr._harshavardhan_hegde-min.png",
      "path": "/doctors/dr-harshavardhan-hegde"
    },
    {
      "id": 151,
      "name": "Dr. Harnarayan Singh",
      "specialty": "Neurosurgeon",
      "designation": " Consultant",
      "hospital": "Sanar International Hospital",
      "city": "Gurgaon, India",
      "experience": "18+",
      "image": "https://www.vaidam.com/sites/default/files/1656409520_dr.-harnarayan-singh-2.jpg",
      "path": "/doctors/dr-harnarayan-singh"
    },
    {
      "id": 152,
      "name": "Dr Hari Goyal",
      "specialty": "Medical Oncologist",
      "designation": " HOD",
      "hospital": "BLK-Max Super Speciality Hospital Delhi",
      "city": "New Delhi, India",
      "experience": "29+",
      "image": "https://www.vaidam.com/sites/default/files/dr_hari_goyal-min.jpg",
      "path": "/doctors/dr-hari-goyal"
    },
    {
      "id": 153,
      "name": "Dr. H. S. Bhatyal",
      "specialty": "Urologist",
      "designation": " Senior Consultant",
      "hospital": "BLK-Max Super Speciality Hospital Delhi",
      "city": "New Delhi, India",
      "experience": "53+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr-h-s-bhatyal-urology.jpg",
      "path": "/doctors/dr-h-s-bhatyal"
    },
    {
      "id": 154,
      "name": "Dr. Giriraj Bora",
      "specialty": "Surgical Gastroenterologist",
      "designation": " Additional Director",
      "hospital": "Artemis Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "28+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._giriraj_bora-min.jpg",
      "path": "/doctors/dr-giriraj-bora"
    },
    {
      "id": 155,
      "name": "Dr. Gaurav Kharya",
      "specialty": "Hematologist",
      "designation": " Senior Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "24+",
      "image": "https://www.vaidam.com/sites/default/files/dr_gaurav_kharya.jpeg",
      "path": "/doctors/dr-gaurav-kharya"
    },
    {
      "id": 156,
      "name": "Dr. G. Balamurali",
      "specialty": "Spine Surgeon",
      "designation": " HOD",
      "hospital": "Kauvery Hospital, Alwarpet",
      "city": "Chennai, India",
      "experience": "26+",
      "image": "https://www.vaidam.com/sites/default/files/dr._g._balamurali-min.jpg",
      "path": "/doctors/dr-g-balamurali"
    },
    {
      "id": 157,
      "name": "Dr. Dinesh Kansal",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Head of Department",
      "hospital": "BLK-Max Super Speciality Hospital Delhi",
      "city": "New Delhi, India",
      "experience": "45+",
      "image": "https://www.vaidam.com/sites/default/files/dr._dinesh_kansal_gynecology_0.jpg",
      "path": "/doctors/dr-dinesh-kansal"
    },
    {
      "id": 158,
      "name": "Dr. Deepak Govil",
      "specialty": "Surgical Gastroenterologist",
      "designation": " Senior Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "42+",
      "image": "https://www.vaidam.com/sites/default/files/dr._deepak_govil-removebg-preview-min_1.png",
      "path": "/doctors/dr-deepak-govil"
    },
    {
      "id": 159,
      "name": "Dr. Deepak Dubey",
      "specialty": "Urologist and Renal Transplant Specialist",
      "designation": " Consultant",
      "hospital": "Manipal Hospital (Old Airport Road) Bangalore",
      "city": "Bangalore, India",
      "experience": "30+",
      "image": "https://www.vaidam.com/sites/default/files/dr._deepak_dubey-removebg-preview-min.png",
      "path": "/doctors/dr-deepak-dubey"
    },
    {
      "id": 160,
      "name": "Dr. D. K.Agarwal",
      "specialty": "Nephrologist",
      "designation": " Senior Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "40+",
      "image": "https://www.vaidam.com/sites/default/files/dr._d._k.agarwal-min.jpg",
      "path": "/doctors/dr-d-kagarwal"
    },
    {
      "id": 161,
      "name": "Dr. Brahm Datt Pathak",
      "specialty": "Advanced Laparoscopic, Minimal Access and Bariatric Surgeon",
      "designation": " Director",
      "hospital": "Fortis Escorts Hospital, Faridabad",
      "city": "Faridabad, India",
      "experience": "34+",
      "image": "https://www.vaidam.com/sites/default/files/patak.jpg",
      "path": "/doctors/dr-brahm-datt-pathak"
    },
    {
      "id": 162,
      "name": "Dr. Bipin Walia",
      "specialty": "Spine Surgeon",
      "designation": " Director",
      "hospital": "Max Super Speciality Hospital, Saket, New Delhi",
      "city": "New Delhi, India",
      "experience": "41+",
      "image": "https://www.vaidam.com/sites/default/files/dr._bipin_s._walia.jpg",
      "path": "/doctors/dr-bipin-walia"
    },
    {
      "id": 163,
      "name": "Dr. Bindu Garg",
      "specialty": "Infertility Specialist",
      "designation": " Chairman",
      "hospital": "Neelkanth Hospitals, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "44+",
      "image": "https://www.vaidam.com/sites/default/files/dr._bindu_garg-min.jpg",
      "path": "/doctors/dr-bindu-garg"
    },
    {
      "id": 164,
      "name": "Dr. Bhushan Nariani",
      "specialty": "Orthopaedic and Joint Replacement Surgeon",
      "designation": " Chairman",
      "hospital": "BLK-Max Super Speciality Hospital Delhi",
      "city": "New Delhi, India",
      "experience": "25+",
      "image": "https://www.vaidam.com/sites/default/files/dr._bhushan_nariani.jpg",
      "path": "/doctors/dr-bhushan-nariani"
    },
    {
      "id": 165,
      "name": "Dr. Bhaba Nanda Das",
      "specialty": "Cardiac Surgeon",
      "designation": " Chief",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "47+",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr_bhaba_nanda_das-min.webp",
      "path": "/doctors/dr-bhaba-nanda-das"
    },
    {
      "id": 166,
      "name": "Dr. B M L Kapoor",
      "specialty": "Colo-Rectal Surgeon",
      "designation": " Senior Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "10+",
      "image": "https://www.vaidam.com/sites/default/files/7_61.jpg",
      "path": "/doctors/dr-b-m-l-kapoor"
    },
    {
      "id": 167,
      "name": "Dr. Atul Sharma Joshi",
      "specialty": "Advanced Laparoscopic, Minimal Access and Bariatric Surgeon",
      "designation": " Associate Director",
      "hospital": "Fortis Hospital, Mohali",
      "city": "Mohali, India",
      "experience": "34+",
      "image": "https://www.vaidam.com/sites/default/files/dr_atul.png",
      "path": "/doctors/dr-atul-sharma-joshi"
    },
    {
      "id": 168,
      "name": "Dr. Ashutosh Marwah",
      "specialty": "Pediatric Cardiac Surgeon",
      "designation": " Director",
      "hospital": "Fortis Escorts Heart Institute, New Delhi",
      "city": "New Delhi, India",
      "experience": "34+",
      "image": "https://www.vaidam.com/sites/default/files/dr._ashutosh_marwah.jpg",
      "path": "/doctors/dr-ashutosh-marwah"
    },
    {
      "id": 169,
      "name": "Dr. Ashok Sarin",
      "specialty": "Nephrologist",
      "designation": " Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "55+",
      "image": "https://www.vaidam.com/sites/default/files/dr._ashok_sarin-min.png",
      "path": "/doctors/dr-ashok-sarin"
    },
    {
      "id": 170,
      "name": "Dr. Ashok Vaid",
      "specialty": "Medical Oncologist",
      "designation": " Consultant",
      "hospital": "Medanta - The Medicity, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "41+",
      "image": "https://www.vaidam.com/sites/default/files/dr._ashok_vaid_-_medical_oncologist-min.jpg",
      "path": "/doctors/dr-ashok-vaid"
    },
    {
      "id": 171,
      "name": "Dr. Ashish Sabharwal",
      "specialty": "Urologist",
      "designation": " Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "24+",
      "image": "https://www.vaidam.com/sites/default/files/dr_ashish_sabharwal.jpg",
      "path": "/doctors/dr-ashish-sabharwal"
    },
    {
      "id": 172,
      "name": "Dr. Ashish Dixit",
      "specialty": "Hematologist",
      "designation": " Consultant",
      "hospital": "Manipal Hospital (Old Airport Road) Bangalore",
      "city": "Bangalore, India",
      "experience": "30+",
      "image": "https://www.vaidam.com/sites/default/files/aashish_dixit_1.jpeg",
      "path": "/doctors/dr-ashish-dixit"
    },
    {
      "id": 173,
      "name": "Dr. Asheesh Sharma",
      "specialty": "General Surgeon",
      "designation": " Senior Consultant",
      "hospital": "Apollo Medics Super Speciality Hospital, Lucknow",
      "city": "Lucknow, India",
      "experience": "29+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._asheesh_sharma-min.jpg",
      "path": "/doctors/dr-asheesh-sharma"
    },
    {
      "id": 174,
      "name": "Dr. Arvinder Singh Soin",
      "specialty": "Liver Transplant Surgeon",
      "designation": " Chairman",
      "hospital": "Medanta - The Medicity, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "38+",
      "image": "https://www.vaidam.com/sites/default/files/dr._arvinder_singh_soin-removebg-preview-min.png",
      "path": "/doctors/dr-arvinder-singh-soin"
    },
    {
      "id": 175,
      "name": "Dr. Arvind Khurana",
      "specialty": "Medical Gastroenterologist",
      "designation": " Director",
      "hospital": "Fortis Memorial Research Institute, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "39+",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr._arvind_khurana-min.webp",
      "path": "/doctors/dr-arvind-khurana"
    },
    {
      "id": 176,
      "name": "Dr. Aruna Kalra",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Director",
      "hospital": "CK Birla Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "28+",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr_aruna_kalra.webp",
      "path": "/doctors/dr-aruna-kalra"
    },
    {
      "id": 177,
      "name": "Dr. Arun Halankar",
      "specialty": "Nephrologist",
      "designation": " Consultant",
      "hospital": "Jaslok Hospital, Mumbai",
      "city": "Mumbai, India",
      "experience": "57+",
      "image": "https://d1ea147o02h74h.cloudfront.net/image-removebg-preview42-min.png",
      "path": "/doctors/dr-arun-halankar"
    },
    {
      "id": 178,
      "name": "Dr. Anupam Jindal",
      "specialty": "Neurosurgeon",
      "designation": " Additional Director",
      "hospital": "Fortis Hospital, Mohali",
      "city": "Mohali, India",
      "experience": "25+",
      "image": "https://www.vaidam.com/sites/default/files/dr._anupam_jindal-min.jpg",
      "path": "/doctors/dr-anupam-jindal"
    },
    {
      "id": 179,
      "name": "Dr. Anjila Aneja",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Director",
      "hospital": "Fortis La Femme, New Delhi",
      "city": "New Delhi, India",
      "experience": "37+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._anjila_aneja-min_1.jpg",
      "path": "/doctors/dr-anjila-aneja"
    },
    {
      "id": 180,
      "name": "Dr. Anjali Kumar",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Head of Department",
      "hospital": "CK Birla Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "37+",
      "image": "https://www.vaidam.com/sites/default/files/dr-anjali-kumar-obstetrics-gynecologist.jpg",
      "path": "/doctors/dr-anjali-kumar"
    },
    {
      "id": 181,
      "name": "Dr. Anil Bhan",
      "specialty": "Cardiac Surgeon",
      "designation": " Chairman",
      "hospital": "Medanta - The Medicity, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "49+",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr_anil_bhan-min.webp",
      "path": "/doctors/dr-anil-bhan"
    },
    {
      "id": 182,
      "name": "Dr. Amitabha Ghosh",
      "specialty": "Laparoscopic Surgeon",
      "designation": " Consultant",
      "hospital": "Manipal Hospital Formerly AMRI Hospital, Kolkata (Dhakuria)",
      "city": "Kolkata, India",
      "experience": "31+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._amitabha_ghosh-removebg-preview-min.png",
      "path": "/doctors/dr-amitabha-ghosh"
    },
    {
      "id": 183,
      "name": "Dr. Alka Kriplani",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Head of Department",
      "hospital": "Paras Hospitals, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "44+",
      "image": "https://www.vaidam.com/sites/default/files/dr._alka_kriplani_-_gynecologist_and_fertility_expert.jpg",
      "path": "/doctors/dr-alka-kriplani"
    },
    {
      "id": 184,
      "name": "Dr. Akhil Mishra",
      "specialty": "Nephrologist",
      "designation": " Senior Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "59+",
      "image": "https://www.vaidam.com/sites/default/files/dr._akhil_mishra-min.jpg",
      "path": "/doctors/dr-akhil-mishra"
    },
    {
      "id": 185,
      "name": "Dr. Akhil Govil",
      "specialty": "Cardiac Surgeon",
      "designation": " Senior Consultant",
      "hospital": "Artemis Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "29+",
      "image": "https://www.vaidam.com/sites/default/files/dr._akhil_govil_0.jpg",
      "path": "/doctors/dr-akhil-govil"
    },
    {
      "id": 186,
      "name": "Dr. Ajit Singh Narula",
      "specialty": "Nephrologist",
      "designation": " Director",
      "hospital": "Fortis Escorts Heart Institute, New Delhi",
      "city": "New Delhi, India",
      "experience": "48+",
      "image": "https://www.vaidam.com/sites/default/files/dr._ajit_singh_narula.jpg",
      "path": "/doctors/dr-ajit-singh-narula"
    },
    {
      "id": 187,
      "name": "Dr. Ajay Kaul",
      "specialty": "Cardiac Surgeon",
      "designation": " Chairman",
      "hospital": "Fortis Hospital, Noida",
      "city": "Noida, India",
      "experience": "38+",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr._ajay-min_2.webp",
      "path": "/doctors/dr-ajay-kaul"
    },
    {
      "id": 188,
      "name": "Dr. Aditya Gupta",
      "specialty": "Neurosurgeon",
      "designation": " Director",
      "hospital": "Artemis Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "30+",
      "image": "https://www.vaidam.com/sites/default/files/dr_aditya_gupta.png",
      "path": "/doctors/dr-aditya-gupta"
    },
    {
      "id": 189,
      "name": "Dr. Abhilash C. Chokshi",
      "specialty": "General Surgeon",
      "designation": " Consultant",
      "hospital": "CIMS Hospital, Ahmedabad",
      "city": "Ahmedabad, India",
      "experience": "33+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._abhilash_c._chokshi.jpg",
      "path": "/doctors/dr-abhilash-c-chokshi"
    },
    {
      "id": 190,
      "name": "Dr. A.A Mehra",
      "specialty": "Spine Surgeon",
      "designation": " Senior Consultant",
      "hospital": "Amandeep Hospital, Amritsar",
      "city": "Amritsar, India",
      "experience": "29+",
      "image": "https://www.vaidam.com/sites/default/files/dr._a.a_mehra_-_spine_and_neurosurgeon.jpg",
      "path": "/doctors/dr-aa-mehra"
    },
    {
      "id": 191,
      "name": "Dr. A.K. Roy",
      "specialty": "Neurologist",
      "designation": " Consultant",
      "hospital": "Manipal Hospital (Old Airport Road) Bangalore",
      "city": "Bangalore, India",
      "experience": "46+",
      "image": "https://www.vaidam.com/sites/default/files/dr._a.k._roy.jpg",
      "path": "/doctors/dr-ak-roy"
    },
    {
      "id": 192,
      "name": "Dr. Dinakar. A",
      "specialty": "Spine Surgeon",
      "designation": " Consultant",
      "hospital": "KIMS Sunshine Hospitals, Begumpet",
      "city": "Hyderabad, India",
      "experience": "33+",
      "image": "https://www.vaidam.com/sites/default/files/dr._dinakar-min.jpg",
      "path": "/doctors/dr-dinakar-a"
    },
    {
      "id": 193,
      "name": "Dr. (Prof) Raju Vaishya",
      "specialty": "Orthopaedic and Joint Replacement Surgeon",
      "designation": " Senior Consultant",
      "hospital": "Indraprastha Apollo Hospital, New Delhi",
      "city": "New Delhi, India",
      "experience": "42+",
      "image": "https://www.vaidam.com/sites/default/files/dr._prof_raju_vaishya-min_0.jpg",
      "path": "/doctors/dr-prof-raju-vaishya"
    },
    {
      "id": 194,
      "name": "Dr. (Col.) Manjinder Singh Sandhu",
      "specialty": "Interventional Cardiologist",
      "designation": " Consultant",
      "hospital": "Fortis Memorial Research Institute, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "23+",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr_col_sandhu.webp",
      "path": "/doctors/dr-col-manjinder-singh-sandhu"
    },
    {
      "id": 195,
      "name": "Dr. Erika Patel",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Consultant",
      "hospital": "ART Fertility Clinic, Chennai",
      "city": "Chennai, India",
      "experience": "16+",
      "image": "https://d1ea147o02h74h.cloudfront.net/dr._erika_patel-min-min.jpg",
      "path": "/doctors/dr-erika-patel"
    },
    {
      "id": 196,
      "name": "Dr. Aswati Nair",
      "specialty": "Gynaecologist and Obstetrician",
      "designation": " Director",
      "hospital": "NOVA IVI Fertility, New Delhi",
      "city": "New Delhi, India",
      "experience": "20+",
      "image": "https://www.vaidam.com/sites/default/files/dr._aswati-min.jpeg",
      "path": "/doctors/dr-aswati-nair"
    },
    {
      "id": 197,
      "name": "Dr. Vikram Sharma",
      "specialty": "Urologist",
      "designation": " Director",
      "hospital": "Fortis Memorial Research Institute, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "36+",
      "image": "https://www.vaidam.com/sites/default/files/dr._vikram_sharma.jpg",
      "path": "/doctors/dr-vikram-sharma"
    },
    {
      "id": 198,
      "name": "Dr. Tarun Kukreja",
      "specialty": "Spine Surgeon",
      "designation": " Consultant",
      "hospital": "Artemis Hospital, Gurgaon",
      "city": "Gurgaon, India",
      "experience": "9+",
      "image": "https://www.vaidam.com/sites/default/files/dr._tarun_kukreja_-_spine_surgeon_and_orthopedist.jpg",
      "path": "/doctors/dr-tarun-kukreja"
    },
    {
      "id": 199,
      "name": "Dr. Senthilkumar D",
      "specialty": "Cardiac Surgeon",
      "designation": " Consultant",
      "hospital": "MGM Healthcare, Chennai",
      "city": "Chennai, India",
      "experience": "9+",
      "image": "https://www.vaidam.com/sites/default/files/dr._senthilkumar-d-min.jpg",
      "path": "/doctors/dr-senthilkumar-d"
    },
    {
      "id": 200,
      "name": "Dr. Krunal Tamakuwala",
      "specialty": "Interventional Cardiologist",
      "designation": " Consultant",
      "hospital": "KD Hospital Ahmedabad",
      "city": "Ahmedabad, India",
      "experience": "9+",
      "image": "https://www.vaidam.com/sites/default/files/dr._krunal_tamakuwala-min.jpg",
      "path": "/doctors/dr-krunal-tamakuwala"
    }

  ];

  const specialties = ["Cardiologist", "Oncologist", "Orthopedic Surgeon", "Neurologist", "Gynecologist", "Nephrologist", "Laparoscopic Surgeon", "Cosmetic Surgeon"];
  const cities = ["Delhi", "Mumbai", "Gurgaon", "Chennai", "Bangalore", "Hyderabad", "Lucknow"];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         String(doctor.hospital).toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialty ? doctor.specialty === specialty : true;
    const matchesCity = city ? doctor.city === city : true;
    
    return matchesSearch && matchesSpecialty && matchesCity;
  });

  const displayedDoctors = filteredDoctors.slice(0, visibleDoctors);
  const hasMoreDoctors = visibleDoctors < filteredDoctors.length;

  const loadMore = () => {
    setVisibleDoctors(prev => prev + 40); // Load 12 more doctors (3 more rows)
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSpecialty("");
    setCity("");
    setVisibleDoctors(40); // Reset to initial number of visible doctors
  };

  const openWhatsApp = (doctorName: string) => {
    const phoneNumber = "911234567890"; // Replace with actual WhatsApp number
    const message = `I'd like to consult with ${doctorName} for my treatment.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleAppointmentClick = (doctorName: string, formType: "appointment" | "second-opinion" | "reports") => {
    setSelectedDoctor({ name: doctorName, formType });
  };

  const closeForm = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <section className="bg-nile-600 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Top Doctors in India</h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Our network includes India's most experienced specialists, many trained at leading international institutions like Johns Hopkins, Mayo Clinic, and Harvard Medical School.
            </p>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search doctors by name, specialty, or hospital..."
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nile-600 focus:border-nile-600"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="min-w-[200px]">
                  <select
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nile-600 focus:border-nile-600 appearance-none bg-white"
                  >
                    <option value="">All Specialties</option>
                    {specialties.map((spec) => (
                      <option key={spec} value={spec}>{spec}</option>
                    ))}
                  </select>
                </div>
                
                <div className="min-w-[200px]">
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nile-600 focus:border-nile-600 appearance-none bg-white"
                  >
                    <option value="">All Cities</option>
                    {cities.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                
                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" /> Reset
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedDoctors.map((doctor) => (
              <div 
                key={doctor.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                    <img 
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                    <span className="text-sm font-medium block text-center">{doctor.experience} Exp</span>
                  </div>
                </div>
                
                <div className="p-4">
                  <Link to={doctor.path}>
                    <h3 className="text-base font-semibold mb-1 hover:text-nile-600 transition-colors">
                      {doctor.name}
                    </h3>
                  </Link>
                  
                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      {doctor.specialty}
                    </p>
                    <p className="text-xs text-gray-500">
                      {doctor.designation}
                    </p>
                    <p className="text-gray-600 text-xs">
                      {doctor.hospital}, {doctor.city}
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 whitespace-nowrap text-xs py-1"
                      onClick={() => handleAppointmentClick(doctor.name, "appointment")}
                    >
                      <Calendar className="mr-1 h-3 w-3" /> Request Appointment
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-green-600 hover:bg-green-700 flex-1 whitespace-nowrap text-xs py-1"
                      onClick={() => openWhatsApp(doctor.name)}
                    >
                      <MessageCircle className="mr-1 h-3 w-3" /> WhatsApp
                    </Button>
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <Button
                      variant="link"
                      size="sm"
                      className="text-nile-600 hover:text-nile-700 text-xs"
                      onClick={() => handleAppointmentClick(doctor.name, "second-opinion")}
                    >
                      Get Second Opinion
                    </Button>
                    <span className="text-gray-300">|</span>
                    <Button
                      variant="link"
                      size="sm"
                      className="text-nile-600 hover:text-nile-700 text-xs"
                      onClick={() => handleAppointmentClick(doctor.name, "reports")}
                    >
                      Send Reports
                    </Button>
                  </div>
                  <Link 
                    to={doctor.path}
                    className="mt-2 flex items-center justify-center text-nile-600 hover:text-nile-700 font-medium text-xs"
                  >
                    View Full Profile
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No doctors found</h3>
              <p className="text-gray-500 mb-4">Try changing your search criteria</p>
              <Button onClick={resetFilters}>
                Reset Filters
              </Button>
            </div>
          )}

          {hasMoreDoctors && (
            <div className="text-center mt-8">
              <Button 
                onClick={loadMore}
                variant="outline"
                className="px-8 py-2 text-nile-600 border-nile-600 hover:bg-nile-50"
              >
                Load More Doctors
              </Button>
            </div>
          )}
          
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Why Choose Indian Doctors?</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Indian doctors are known globally for their expertise, skill, and compassionate care. Many have trained at the world's most prestigious medical institutions and bring international best practices to their work in India.
              </p>
              <p className="mb-4">
                With stringent medical education standards and a strong focus on continuous professional development, Indian doctors stay at the forefront of medical innovation. They combine this knowledge with cost-effective treatment approaches that have made India a premier destination for medical tourism.
              </p>
              <p>
                At Nile Wellness, we carefully select our partner doctors based on their credentials, experience, patient outcomes, and patient feedback. We ensure that international patients receive care only from the most qualified specialists in their field.
              </p>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
      
      {selectedDoctor && (
        <AppointmentForm
          isOpen={true}
          onClose={closeForm}
          doctorName={selectedDoctor.name}
          formType={selectedDoctor.formType}
        />
      )}
    </div>
  );
};

export default Doctors;