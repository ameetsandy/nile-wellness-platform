import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, MessageCircle, Building, Award, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const mockDoctors = {
  "dr-subodh-chandra-pande": {
    "id": "dr-subodh-chandra-pande",
    "name": "Dr. Subodh Chandra Pande",
    "specialty": "Radiation Oncologist",
    "designation": "Consultant",
    "hospital": "Artemis Hospital, Gurgaon",
    "location": "Gurgaon",
    "experience": "10+ Years Experience",
    "education": "MBBS, MD in Radiotherapy",
    "image": "https://www.vaidam.com/sites/default/files/dr-subhash-chandra-pande-radiation-oncology.jpg",
    "about": "Dr. Subodh Chandra Pande, Consultant at Artemis Hospital, Gurgaon. Specializes in Radiation Oncologist and known for expertise in complex procedures.",
    "expertise": [
      "Radiation Oncologist"
    ],
    "awards": [
      "Best doctor of Artemis Hospital, Gurgaon"
    ],
    "patientCount": 8500,
    "successRate": 99.24
  },
  "dr-anmol-nagaraj": {
    "id": "dr-anmol-nagaraj",
    "name": "Dr. Anmol Nagaraj",
    "specialty": "Neurosurgeon",
    "designation": "Consultant",
    "hospital": "Sparsh Hospital (Yeshwanthpur) Bangalore",
    "location": "",
    "experience": "14+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._anmol_nagaraj-min.jpg",
    "about": "Dr. Anmol Nagaraj, Consultant at Sparsh Hospital (Yeshwanthpur) Bangalore. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Sparsh Hospital (Yeshwanthpur) Bangalore"
    ],
    "patientCount": 1500,
    "successRate": 97.33
  },
  "dr-mahesh-ghogare": {
    "id": "dr-mahesh-ghogare",
    "name": "Dr. Mahesh Ghogare",
    "specialty": "Interventional Cardiologist",
    "designation": "Consultant",
    "hospital": "Reliance Hospitals, Navi Mumbai",
    "location": "Navi Mumbai",
    "experience": "14+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr_mahesh.jpg",
    "about": "Dr. Mahesh Ghogare, Consultant at Reliance Hospitals, Navi Mumbai. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Reliance Hospitals, Navi Mumbai"
    ],
    "patientCount": 500,
    "successRate": 99.41
  },
  "dr-amit-sharma-spine-surgeon": {
    "id": "dr-amit-sharma-spine-surgeon",
    "name": "Dr. Amit Sharma",
    "specialty": "Spine Surgeon",
    "designation": "Consultant",
    "hospital": "Saifee Hospital, Mumbai",
    "location": "Mumbai",
    "experience": "14+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._amit_sharma_-_spine_surgeon.jpg",
    "about": "Dr. Amit Sharma, Consultant at Saifee Hospital, Mumbai. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Saifee Hospital, Mumbai"
    ],
    "patientCount": 10000,
    "successRate": 96.16
  },
  "dr-yadhu-k-lokanath": {
    "id": "dr-yadhu-k-lokanath",
    "name": "Dr Yadhu K Lokanath",
    "specialty": "Spine Surgeon",
    "designation": "Consultant",
    "hospital": "Aster RV Hospital (J P Nagar) Bangalore",
    "location": "",
    "experience": "14+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr-yadhu-k-lokanath.jpg",
    "about": "Dr Yadhu K Lokanath, Consultant at Aster RV Hospital (J P Nagar) Bangalore. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Aster RV Hospital (J P Nagar) Bangalore"
    ],
    "patientCount": 7000,
    "successRate": 95.82
  },
  "dr-harsh-bhardwaj": {
    "id": "dr-harsh-bhardwaj",
    "name": "Dr. Harsh Bhardwaj",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "Aakash Healthcare Super Speciality Hospital, Dwarka, New Delhi",
    "location": "New Delhi",
    "experience": "13+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr-harsh-bhardwaj.jpg",
    "about": "Dr. Harsh Bhardwaj, Consultant at Aakash Healthcare Super Speciality Hospital, Dwarka, New Delhi. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Aakash Healthcare Super Speciality Hospital, Dwarka, New Delhi"
    ],
    "patientCount": 1000,
    "successRate": 96.55
  },
  "dr-ankit-singh": {
    "id": "dr-ankit-singh",
    "name": "Dr. Ankit Singh",
    "specialty": "Neurologist",
    "designation": "Associate Consultant",
    "hospital": "Apollo Medics Super Speciality Hospital, Lucknow",
    "location": "Lucknow",
    "experience": "12+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._ankit-min.png",
    "about": "Dr. Ankit Singh, Associate Consultant at Apollo Medics Super Speciality Hospital, Lucknow. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Apollo Medics Super Speciality Hospital, Lucknow"
    ],
    "patientCount": 2000,
    "successRate": 95.0
  },
  "dr-anurag-sihag": {
    "id": "dr-anurag-sihag",
    "name": "Dr. Anurag Sihag",
    "specialty": "Neurosurgeon",
    "designation": "Consultant",
    "hospital": "Shalby Hospital, Jaipur",
    "location": "Jaipur",
    "experience": "12+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr_anurag_sihag.png",
    "about": "Dr. Anurag Sihag, Consultant at Shalby Hospital, Jaipur. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Shalby Hospital, Jaipur"
    ],
    "patientCount": 10000,
    "successRate": 96.91
  },
  "dr-ved-prakash": {
    "id": "dr-ved-prakash",
    "name": "Dr. Ved Prakash",
    "specialty": "Interventional Cardiologist",
    "designation": "Consultant",
    "hospital": "Sarvodaya Hospital, Faridabad",
    "location": "Faridabad",
    "experience": "12+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._ved_prakash-removebg-preview-min_0.png",
    "about": "Dr. Ved Prakash, Consultant at Sarvodaya Hospital, Faridabad. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Sarvodaya Hospital, Faridabad"
    ],
    "patientCount": 8000,
    "successRate": 97.97
  },
  "dr-avinash-k-m": {
    "id": "dr-avinash-k-m",
    "name": "Dr. Avinash K M",
    "specialty": "Neurosurgeon",
    "designation": "Consultant",
    "hospital": "Manipal Hospital Formerly Columbia Asia Referral Hospital, Bangalore (Yeshwanthpur)",
    "location": "Bangalore (Yeshwanthpur)",
    "experience": "16+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._avinash-min.jpg",
    "about": "Dr. Avinash K M, Consultant at Manipal Hospital Formerly Columbia Asia Referral Hospital, Bangalore (Yeshwanthpur). Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Manipal Hospital Formerly Columbia Asia Referral Hospital, Bangalore (Yeshwanthpur)"
    ],
    "patientCount": 3500,
    "successRate": 98.6
  },
  "dr-g-dimpu-edwin-jonathan": {
    "id": "dr-g-dimpu-edwin-jonathan",
    "name": "Dr. G Dimpu Edwin Jonathan",
    "specialty": "Interventional Cardiologist",
    "designation": "Consultant",
    "hospital": "Aster RV Hospital (J P Nagar) Bangalore",
    "location": "",
    "experience": "12+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._g_dimpu_edwin_jonathan.jpg",
    "about": "Dr. G Dimpu Edwin Jonathan, Consultant at Aster RV Hospital (J P Nagar) Bangalore. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Aster RV Hospital (J P Nagar) Bangalore"
    ],
    "patientCount": 5000,
    "successRate": 95.6
  },
  "dr-m-bharath-reddy": {
    "id": "dr-m-bharath-reddy",
    "name": "Dr. A. M. Bharath Reddy",
    "specialty": "Cardiac Surgeon",
    "designation": "Consultant",
    "hospital": "Apollo Spectra Hospital, Chennai",
    "location": "Chennai",
    "experience": "17+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._a._m._bharath_reddy_-_cardiologist.jpg",
    "about": "Dr. A. M. Bharath Reddy, Consultant at Apollo Spectra Hospital, Chennai. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Apollo Spectra Hospital, Chennai"
    ],
    "patientCount": 7500,
    "successRate": 96.58
  },
  "dr-abhishek-patil": {
    "id": "dr-abhishek-patil",
    "name": "Dr. Abhishek Patil",
    "specialty": "Rheumatologist",
    "designation": "Consultant",
    "hospital": "Manipal Hospital (Old Airport Road) Bangalore",
    "location": "",
    "experience": "14+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Rheumatology",
    "image": "https://www.vaidam.com/sites/default/files/dr.abhishek-min.png",
    "about": "Dr. Abhishek Patil, Consultant at Manipal Hospital (Old Airport Road) Bangalore. Specializes in Rheumatologist and known for expertise in complex procedures.",
    "expertise": [
      "Rheumatologist"
    ],
    "awards": [
      "Best doctor of Manipal Hospital (Old Airport Road) Bangalore"
    ],
    "patientCount": 1000,
    "successRate": 98.73
  },
  "dr-sumana-b-pallegar": {
    "id": "dr-sumana-b-pallegar",
    "name": "Dr. Sumana B Pallegar",
    "specialty": "Neurosurgeon",
    "designation": "Consultant",
    "hospital": "Narayana Multispeciality Hospital, Bangalore",
    "location": "Bangalore",
    "experience": "18+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._sumana_b_pallegar_-_neurosurgeon.jpg",
    "about": "Dr. Sumana B Pallegar, Consultant at Narayana Multispeciality Hospital, Bangalore. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Narayana Multispeciality Hospital, Bangalore"
    ],
    "patientCount": 3500,
    "successRate": 99.78
  },
  "dr-khushbu-goel": {
    "id": "dr-khushbu-goel",
    "name": "Dr Khushbu Goel",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "Manipal Hospitals Dwarka, Delhi",
    "location": "Delhi",
    "experience": "17+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr_khushbu_goel.jpg",
    "about": "Dr Khushbu Goel, Consultant at Manipal Hospitals Dwarka, Delhi. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Manipal Hospitals Dwarka, Delhi"
    ],
    "patientCount": 6500,
    "successRate": 99.49
  },
  "dr-keval-changadiya": {
    "id": "dr-keval-changadiya",
    "name": "Dr. Keval Changadiya",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "CIMS Hospital, Ahmedabad",
    "location": "Ahmedabad",
    "experience": "14+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr_keval_changadiya.jpeg",
    "about": "Dr. Keval Changadiya, Consultant at CIMS Hospital, Ahmedabad. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of CIMS Hospital, Ahmedabad"
    ],
    "patientCount": 3500,
    "successRate": 98.88
  },
  "dr-ankit-gupta-cardiologist": {
    "id": "dr-ankit-gupta-cardiologist",
    "name": "Dr. Ankit Gupta",
    "specialty": "Cardiac Surgeon",
    "designation": "Consultant",
    "hospital": "Shalby Hospital, Jaipur",
    "location": "Jaipur",
    "experience": "14+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr_ankit_gupta-min.png",
    "about": "Dr. Ankit Gupta, Consultant at Shalby Hospital, Jaipur. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Shalby Hospital, Jaipur"
    ],
    "patientCount": 9500,
    "successRate": 99.4
  },
  "dr-nishant-shanker-yagnick": {
    "id": "dr-nishant-shanker-yagnick",
    "name": "Dr. Nishant Shanker Yagnick",
    "specialty": "Neurosurgeon",
    "designation": "Senior Consultant",
    "hospital": "Fortis Hospital, Manesar, Gurgaon",
    "location": "Gurgaon",
    "experience": "14+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._nishant-min.jpg",
    "about": "Dr. Nishant Shanker Yagnick, Senior Consultant at Fortis Hospital, Manesar, Gurgaon. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Fortis Hospital, Manesar, Gurgaon"
    ],
    "patientCount": 4000,
    "successRate": 97.45
  },
  "dr-anup-charles-steven": {
    "id": "dr-anup-charles-steven",
    "name": "Dr. Anup Charles Steven",
    "specialty": "Cardiac Surgeon",
    "designation": "Consultant",
    "hospital": "Aster CMI Hospital (Hebbel) Bangalore",
    "location": "",
    "experience": "15+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._anup_charles_steven_-_cardiothoracic_surgeon.jpg",
    "about": "Dr. Anup Charles Steven, Consultant at Aster CMI Hospital (Hebbel) Bangalore. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Aster CMI Hospital (Hebbel) Bangalore"
    ],
    "patientCount": 10000,
    "successRate": 99.21
  },
  "dr-praveen-phaneendranath-sadarmin": {
    "id": "dr-praveen-phaneendranath-sadarmin",
    "name": "Dr. Praveen Phaneendranath Sadarmin",
    "specialty": "Interventional Cardiologist",
    "designation": "Consultant",
    "hospital": "Narayana Institute of Cardiac Sciences, Bangalore",
    "location": "Bangalore",
    "experience": "15+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._praveen_phaneendranath_sadarmin_-_cardiologist.jpg",
    "about": "Dr. Praveen Phaneendranath Sadarmin, Consultant at Narayana Institute of Cardiac Sciences, Bangalore. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Narayana Institute of Cardiac Sciences, Bangalore"
    ],
    "patientCount": 10000,
    "successRate": 97.09
  },
  "dr-ashwin-borkar": {
    "id": "dr-ashwin-borkar",
    "name": "Dr. Ashwin Borkar",
    "specialty": "Neurosurgeon",
    "designation": "Consultant",
    "hospital": "Wockhardt Super Speciality Hospital, Mira Road",
    "location": "Mira Road",
    "experience": "15+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._ashwin_borkar-min.jpg",
    "about": "Dr. Ashwin Borkar, Consultant at Wockhardt Super Speciality Hospital, Mira Road. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Wockhardt Super Speciality Hospital, Mira Road"
    ],
    "patientCount": 1500,
    "successRate": 99.36
  },
  "dr-srichandran-l": {
    "id": "dr-srichandran-l",
    "name": "Dr. Srichandran L",
    "specialty": "Interventional Cardiologist",
    "designation": "Consultant",
    "hospital": "MGM Healthcare, Chennai",
    "location": "Chennai",
    "experience": "19+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._srichandran_l_-_interventional_cardiologist.jpg",
    "about": "Dr. Srichandran L, Consultant at MGM Healthcare, Chennai. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of MGM Healthcare, Chennai"
    ],
    "patientCount": 9500,
    "successRate": 99.28
  },
  "dr-arvind-kulkarni": {
    "id": "dr-arvind-kulkarni",
    "name": "Dr. Arvind Kulkarni",
    "specialty": "Spine Surgeon",
    "designation": "Consultant",
    "hospital": "Saifee Hospital, Mumbai",
    "location": "Mumbai",
    "experience": "19+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._arvind_kulkarni_-_spinal_surgeon_0.jpg",
    "about": "Dr. Arvind Kulkarni, Consultant at Saifee Hospital, Mumbai. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Saifee Hospital, Mumbai"
    ],
    "patientCount": 9000,
    "successRate": 98.96
  },
  "dr-jimmy-lalkaka": {
    "id": "dr-jimmy-lalkaka",
    "name": "Dr. Jimmy Lalkaka",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "Saifee Hospital, Mumbai",
    "location": "Mumbai",
    "experience": "19+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._jimmy_lalkaka_-_neurologist.jpg",
    "about": "Dr. Jimmy Lalkaka, Consultant at Saifee Hospital, Mumbai. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Saifee Hospital, Mumbai"
    ],
    "patientCount": 7500,
    "successRate": 97.1
  },
  "dr-kisley-shrivastav": {
    "id": "dr-kisley-shrivastav",
    "name": "Dr. Kisley Shrivastav",
    "specialty": "Interventional Cardiologist",
    "designation": "Consultant",
    "hospital": "Apollo SAGE Hospital",
    "location": "",
    "experience": "15+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._kisley_shrivastav_0.jpg",
    "about": "Dr. Kisley Shrivastav, Consultant at Apollo SAGE Hospital. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Apollo SAGE Hospital"
    ],
    "patientCount": 7000,
    "successRate": 98.65
  },
  "dr-sankalp-bhartiya": {
    "id": "dr-sankalp-bhartiya",
    "name": "Dr. Sankalp Bhartiya",
    "specialty": "Neurosurgeon",
    "designation": "Consultant",
    "hospital": "Fortis Escorts Hospital Jaipur",
    "location": "",
    "experience": "8+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._sankalp_bhartiya-min.jpg",
    "about": "Dr. Sankalp Bhartiya, Consultant at Fortis Escorts Hospital Jaipur. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Fortis Escorts Hospital Jaipur"
    ],
    "patientCount": 6500,
    "successRate": 97.12
  },
  "dr-sudhir-kumar-neurologist": {
    "id": "dr-sudhir-kumar-neurologist",
    "name": "Dr. Sudhir Kumar",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "Apollo Hospitals, Jubilee Hills Hyderabad",
    "location": "Jubilee Hills Hyderabad",
    "experience": "22+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._sudhir_kumar_0.jpg",
    "about": "Dr. Sudhir Kumar, Consultant at Apollo Hospitals, Jubilee Hills Hyderabad. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Apollo Hospitals, Jubilee Hills Hyderabad"
    ],
    "patientCount": 9000,
    "successRate": 96.54
  },
  "dr-anshul-patodia": {
    "id": "dr-anshul-patodia",
    "name": "Dr. Anshul Patodia",
    "specialty": "Cardiac Surgeon",
    "designation": "Consultant",
    "hospital": "Shalby Hospital, Jaipur",
    "location": "Jaipur",
    "experience": "17+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr_anshul_patodia-min.png",
    "about": "Dr. Anshul Patodia, Consultant at Shalby Hospital, Jaipur. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Shalby Hospital, Jaipur"
    ],
    "patientCount": 7500,
    "successRate": 99.25
  },
  "dr-arun-l-naik": {
    "id": "dr-arun-l-naik",
    "name": "Dr. Arun L. Naik",
    "specialty": "Neurosurgeon",
    "designation": "Head of Department",
    "hospital": "Apollo Hospital (Bannerghatta Road) Bangalore",
    "location": "",
    "experience": "21+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._arun_l._naik_-_neurosurgeon.jpg",
    "about": "Dr. Arun L. Naik, Head of Department at Apollo Hospital (Bannerghatta Road) Bangalore. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Apollo Hospital (Bannerghatta Road) Bangalore"
    ],
    "patientCount": 5500,
    "successRate": 95.84
  },
  "dr-pawan-goyal": {
    "id": "dr-pawan-goyal",
    "name": "Dr. Pawan Goyal",
    "specialty": "Neurosurgeon",
    "designation": "Consultant",
    "hospital": "Artemis Hospital, Gurgaon",
    "location": "Gurgaon",
    "experience": "22+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._pawan_goyal_-_neurosurgeon.jpg",
    "about": "Dr. Pawan Goyal, Consultant at Artemis Hospital, Gurgaon. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Artemis Hospital, Gurgaon"
    ],
    "patientCount": 3500,
    "successRate": 95.62
  },
  "dr-rajesh-benny": {
    "id": "dr-rajesh-benny",
    "name": "Dr. Rajesh Benny",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "Fortis Hospital, Mulund, Mumbai",
    "location": "Mumbai",
    "experience": "22+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/drrajesh-benny.jpg",
    "about": "Dr. Rajesh Benny, Consultant at Fortis Hospital, Mulund, Mumbai. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Fortis Hospital, Mulund, Mumbai"
    ],
    "patientCount": 500,
    "successRate": 97.76
  },
  "dr-k-r-balakrishnan": {
    "id": "dr-k-r-balakrishnan",
    "name": "Dr. K. R. Balakrishnan",
    "specialty": "Cardiac Surgeon",
    "designation": "Chairman",
    "hospital": "MGM Healthcare, Chennai",
    "location": "Chennai",
    "experience": "46+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._k._r._balakrishnan-min.jpg",
    "about": "Dr. K. R. Balakrishnan, Chairman at MGM Healthcare, Chennai. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of MGM Healthcare, Chennai"
    ],
    "patientCount": 8000,
    "successRate": 96.75
  },
  "dr-lalit-aditya-malik": {
    "id": "dr-lalit-aditya-malik",
    "name": "Dr. Lalit Aditya Malik",
    "specialty": "Cardiac Surgeon",
    "designation": "HOD",
    "hospital": "Manipal Hospital, Jaipur",
    "location": "Jaipur",
    "experience": "20+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._lalit_aditya_malik-min.jpg",
    "about": "Dr. Lalit Aditya Malik, HOD at Manipal Hospital, Jaipur. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Manipal Hospital, Jaipur"
    ],
    "patientCount": 5000,
    "successRate": 95.97
  },
  "dr-rahul-jain-neurosurgery": {
    "id": "dr-rahul-jain-neurosurgery",
    "name": "Dr. Rahul Jain",
    "specialty": "Neurosurgeon",
    "designation": "Consultant",
    "hospital": "Apollo SAGE Hospital",
    "location": "",
    "experience": "19+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr_rahul_jain-min.jpeg",
    "about": "Dr. Rahul Jain, Consultant at Apollo SAGE Hospital. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Apollo SAGE Hospital"
    ],
    "patientCount": 3000,
    "successRate": 96.7
  },
  "dr-mangesh-g-kohale": {
    "id": "dr-mangesh-g-kohale",
    "name": "Dr. Mangesh G Kohale",
    "specialty": "Cardiac Surgeon",
    "designation": "Consultant",
    "hospital": "Wockhardt Hospital, Mumbai",
    "location": "Mumbai",
    "experience": "19+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._mangesh_g_kohale.jpg",
    "about": "Dr. Mangesh G Kohale, Consultant at Wockhardt Hospital, Mumbai. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Wockhardt Hospital, Mumbai"
    ],
    "patientCount": 10000,
    "successRate": 99.91
  },
  "dr-arun-sharma": {
    "id": "dr-arun-sharma",
    "name": "Dr. Arun Sharma",
    "specialty": "Spine Surgeon",
    "designation": "Consultant",
    "hospital": "Indian Spinal Injuries Center, New Delhi",
    "location": "New Delhi",
    "experience": "23+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._arun_sharma_-neurosurgeon.jpg",
    "about": "Dr. Arun Sharma, Consultant at Indian Spinal Injuries Center, New Delhi. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Indian Spinal Injuries Center, New Delhi"
    ],
    "patientCount": 2500,
    "successRate": 97.93
  },
  "dr-siddhartha-ghosh": {
    "id": "dr-siddhartha-ghosh",
    "name": "Dr. Siddhartha Ghosh",
    "specialty": "Neurosurgeon",
    "designation": "Senior Consultant",
    "hospital": "Apollo Proton Cancer Centre, Chennai",
    "location": "Chennai",
    "experience": "40+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/6_2.jpg",
    "about": "Dr. Siddhartha Ghosh, Senior Consultant at Apollo Proton Cancer Centre, Chennai. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Apollo Proton Cancer Centre, Chennai"
    ],
    "patientCount": 10000,
    "successRate": 95.94
  },
  "dr-amit-mittal": {
    "id": "dr-amit-mittal",
    "name": "Dr. Amit Mittal",
    "specialty": "Interventional Cardiologist",
    "designation": "Consultant",
    "hospital": "Indraprastha Apollo Hospital, New Delhi",
    "location": "New Delhi",
    "experience": "20+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._amit_mittal_-_interventional_cardiologist.jpg",
    "about": "Dr. Amit Mittal, Consultant at Indraprastha Apollo Hospital, New Delhi. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Indraprastha Apollo Hospital, New Delhi"
    ],
    "patientCount": 7000,
    "successRate": 99.29
  },
  "dr-annu-aggarwal": {
    "id": "dr-annu-aggarwal",
    "name": "Dr. Annu Aggarwal",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "Kokilaben Dhirubhai Ambani Hospital, Mumbai",
    "location": "Mumbai",
    "experience": "20+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr_annu_aggarwal_-_consultant_neurologist.jpg",
    "about": "Dr. Annu Aggarwal, Consultant at Kokilaben Dhirubhai Ambani Hospital, Mumbai. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Kokilaben Dhirubhai Ambani Hospital, Mumbai"
    ],
    "patientCount": 2000,
    "successRate": 96.39
  },
  "dr-emmanuel-thas-j": {
    "id": "dr-emmanuel-thas-j",
    "name": "Dr. Emmanuel Thas J",
    "specialty": "Neurosurgeon",
    "designation": "Consultant",
    "hospital": "Kauvery Hospital Radial Road Chennai",
    "location": "",
    "experience": "20+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._emmanuel_thas_j.jpg",
    "about": "Dr. Emmanuel Thas J, Consultant at Kauvery Hospital Radial Road Chennai. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Kauvery Hospital Radial Road Chennai"
    ],
    "patientCount": 8000,
    "successRate": 97.08
  },
  "dr-m-naga-suresh": {
    "id": "dr-m-naga-suresh",
    "name": "Dr. M. Naga Suresh",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "Medicover Hospital, Kurnool",
    "location": "Kurnool",
    "experience": "20+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr.suresh-min.png",
    "about": "Dr. M. Naga Suresh, Consultant at Medicover Hospital, Kurnool. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Medicover Hospital, Kurnool"
    ],
    "patientCount": 2500,
    "successRate": 95.86
  },
  "dr-vishal-kundnani": {
    "id": "dr-vishal-kundnani",
    "name": "Dr. Vishal Kundnani",
    "specialty": "Spine Surgeon",
    "designation": "Consultant",
    "hospital": "P.D Hinduja Hospital & Medical Research Centre, Mumbai",
    "location": "Mumbai",
    "experience": "18+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._vishal_kundnani_-_spine_surgeon.jpg",
    "about": "Dr. Vishal Kundnani, Consultant at P.D Hinduja Hospital & Medical Research Centre, Mumbai. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of P.D Hinduja Hospital & Medical Research Centre, Mumbai"
    ],
    "patientCount": 7000,
    "successRate": 95.85
  },
  "dr-pawan-garg": {
    "id": "dr-pawan-garg",
    "name": "Dr. Pawan Garg",
    "specialty": "Neurosurgeon",
    "designation": "Senior Consultant",
    "hospital": "Medeor Hospital, Qutab, New Delhi",
    "location": "New Delhi",
    "experience": "19+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._pawan_garg_-_neurosurgeon.jpg",
    "about": "Dr. Pawan Garg, Senior Consultant at Medeor Hospital, Qutab, New Delhi. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Medeor Hospital, Qutab, New Delhi"
    ],
    "patientCount": 1000,
    "successRate": 95.28
  },
  "dr-rahul-chaudhari": {
    "id": "dr-rahul-chaudhari",
    "name": "Dr. Rahul Chaudhari",
    "specialty": "Spine Surgeon",
    "designation": "Consultant",
    "hospital": "Manipal Hospital, Baner, Pune",
    "location": "Pune",
    "experience": "22+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr_rahul_chaudhari.jpg",
    "about": "Dr. Rahul Chaudhari, Consultant at Manipal Hospital, Baner, Pune. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Manipal Hospital, Baner, Pune"
    ],
    "patientCount": 10000,
    "successRate": 95.88
  },
  "dr-amitabh-gupta": {
    "id": "dr-amitabh-gupta",
    "name": "Dr. Amitabh Gupta",
    "specialty": "Neurosurgeon",
    "designation": "Consultant",
    "hospital": "Pushpawati Singhania Research Institute, New Delhi",
    "location": "New Delhi",
    "experience": "22+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._amitabh_gupta.jpg",
    "about": "Dr. Amitabh Gupta, Consultant at Pushpawati Singhania Research Institute, New Delhi. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Pushpawati Singhania Research Institute, New Delhi"
    ],
    "patientCount": 8000,
    "successRate": 97.09
  },
  "dr-j-kannan": {
    "id": "dr-j-kannan",
    "name": "Dr. J. Kannan",
    "specialty": "Interventional Cardiologist",
    "designation": "Consultant",
    "hospital": "Narayana Institute of Cardiac Sciences, Bangalore",
    "location": "Bangalore",
    "experience": "22+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/_dr._kannan_j.jpg",
    "about": "Dr. J. Kannan, Consultant at Narayana Institute of Cardiac Sciences, Bangalore. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Narayana Institute of Cardiac Sciences, Bangalore"
    ],
    "patientCount": 2000,
    "successRate": 98.48
  },
  "dr-sushil-tandel": {
    "id": "dr-sushil-tandel",
    "name": "Dr. Sushil Tandel",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "Asian Heart Institute, Mumbai",
    "location": "Mumbai",
    "experience": "26+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._sushil_tandel-min.png",
    "about": "Dr. Sushil Tandel, Consultant at Asian Heart Institute, Mumbai. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Asian Heart Institute, Mumbai"
    ],
    "patientCount": 5500,
    "successRate": 96.86
  },
  "dr-rahul-chakor": {
    "id": "dr-rahul-chakor",
    "name": "Dr. Rahul Chakor",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "Saifee Hospital, Mumbai",
    "location": "Mumbai",
    "experience": "27+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._rahul_chakor_-_neurologist.jpg",
    "about": "Dr. Rahul Chakor, Consultant at Saifee Hospital, Mumbai. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Saifee Hospital, Mumbai"
    ],
    "patientCount": 1000,
    "successRate": 96.6
  },
  "dr-rithesh-r-nair": {
    "id": "dr-rithesh-r-nair",
    "name": "Dr. Rithesh R Nair",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "SIMS Hospital, Vadapalani, Chennai",
    "location": "Chennai",
    "experience": "26+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._rithesh_r_nair.jpg",
    "about": "Dr. Rithesh R Nair, Consultant at SIMS Hospital, Vadapalani, Chennai. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of SIMS Hospital, Vadapalani, Chennai"
    ],
    "patientCount": 6500,
    "successRate": 99.79
  },
  "dr-anil-kumar-kansal": {
    "id": "dr-anil-kumar-kansal",
    "name": "Dr. Anil Kumar Kansal",
    "specialty": "Neurosurgeon",
    "designation": "Head of Department",
    "hospital": "BLK-Max Super Speciality Hospital Delhi",
    "location": "",
    "experience": "34+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr-anil-kumar-kansal-neurosurgeon_0.jpg",
    "about": "Dr. Anil Kumar Kansal, Head of Department at BLK-Max Super Speciality Hospital Delhi. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of BLK-Max Super Speciality Hospital Delhi"
    ],
    "patientCount": 4500,
    "successRate": 96.96
  },
  "dr-saurabh-chopra": {
    "id": "dr-saurabh-chopra",
    "name": "Dr. Saurabh Chopra",
    "specialty": "Paediatric Neurologist",
    "designation": "Consultant",
    "hospital": "Indraprastha Apollo Hospital, New Delhi",
    "location": "New Delhi",
    "experience": "24+ Years Experience",
    "education": "MBBS, MD in Paediatrics, DM in Paediatric Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr_saurabh_chopra-min.jpg",
    "about": "Dr. Saurabh Chopra, Consultant at Indraprastha Apollo Hospital, New Delhi. Specializes in Paediatric Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Paediatric Neurologist"
    ],
    "awards": [
      "Best doctor of Indraprastha Apollo Hospital, New Delhi"
    ],
    "patientCount": 6000,
    "successRate": 96.23
  },
  "dr-mohit-goel": {
    "id": "dr-mohit-goel",
    "name": "Dr. Mohit Goel",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "Max Super Speciality Hospital, Saket, New Delhi",
    "location": "New Delhi",
    "experience": "28+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._mohit_goel.jpg",
    "about": "Dr. Mohit Goel, Consultant at Max Super Speciality Hospital, Saket, New Delhi. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Max Super Speciality Hospital, Saket, New Delhi"
    ],
    "patientCount": 1500,
    "successRate": 99.5
  },
  "dr-surya-prakasa-rao-vithala": {
    "id": "dr-surya-prakasa-rao-vithala",
    "name": "Dr. Surya Prakasa Rao Vithala",
    "specialty": "Interventional Cardiologist",
    "designation": "HOD",
    "hospital": "Care Hospitals, Banjara Hills, Hyderabad",
    "location": "Hyderabad",
    "experience": "25+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._surya_prakasa_rao_vithala-min.jpg",
    "about": "Dr. Surya Prakasa Rao Vithala, HOD at Care Hospitals, Banjara Hills, Hyderabad. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Care Hospitals, Banjara Hills, Hyderabad"
    ],
    "patientCount": 1500,
    "successRate": 99.25
  },
  "dr-shahid-merchant": {
    "id": "dr-shahid-merchant",
    "name": "Dr. Shahid Merchant",
    "specialty": "Interventional Cardiologist",
    "designation": "Senior Consultant",
    "hospital": "Saifee Hospital, Mumbai",
    "location": "Mumbai",
    "experience": "29+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._shahid_merchant_-_cardiologist.jpg",
    "about": "Dr. Shahid Merchant, Senior Consultant at Saifee Hospital, Mumbai. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Saifee Hospital, Mumbai"
    ],
    "patientCount": 10000,
    "successRate": 97.98
  },
  "dr-anudath-brahmadathan": {
    "id": "dr-anudath-brahmadathan",
    "name": "Dr. Anudath Brahmadathan",
    "specialty": "Neurosurgeon",
    "designation": "HOD",
    "hospital": "Meitra Hospital, Kerala",
    "location": "Kerala",
    "experience": "26+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._anudath_brahmadathan-min.jpg",
    "about": "Dr. Anudath Brahmadathan, HOD at Meitra Hospital, Kerala. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Meitra Hospital, Kerala"
    ],
    "patientCount": 2500,
    "successRate": 95.56
  },
  "dr-nirmal-surya": {
    "id": "dr-nirmal-surya",
    "name": "Dr. Nirmal Surya",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "Saifee Hospital, Mumbai",
    "location": "Mumbai",
    "experience": "33+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._nirmal_surya_-_neurologist.jpg",
    "about": "Dr. Nirmal Surya, Consultant at Saifee Hospital, Mumbai. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Saifee Hospital, Mumbai"
    ],
    "patientCount": 4000,
    "successRate": 97.02
  },
  "dr-neeraj-gupta": {
    "id": "dr-neeraj-gupta",
    "name": "Dr. Neeraj Gupta",
    "specialty": "Spine Surgeon",
    "designation": "Consultant",
    "hospital": "Indian Spinal Injuries Center, New Delhi",
    "location": "New Delhi",
    "experience": "22+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._neeraj_gupta-min.jpg",
    "about": "Dr. Neeraj Gupta, Consultant at Indian Spinal Injuries Center, New Delhi. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Indian Spinal Injuries Center, New Delhi"
    ],
    "patientCount": 4500,
    "successRate": 97.99
  },
  "dr-muhammad-farooq": {
    "id": "dr-muhammad-farooq",
    "name": "Dr. Muhammad Farooq",
    "specialty": "Neurosurgeon",
    "designation": "Consultant",
    "hospital": "Saifee Hospital, Mumbai",
    "location": "Mumbai",
    "experience": "30+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._muhammad_farooq_-_neurosurgeon.jpeg",
    "about": "Dr. Muhammad Farooq, Consultant at Saifee Hospital, Mumbai. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Saifee Hospital, Mumbai"
    ],
    "patientCount": 5500,
    "successRate": 99.35
  },
  "dr-vrajesh-udani": {
    "id": "dr-vrajesh-udani",
    "name": "Dr. Vrajesh Udani",
    "specialty": "Paediatric Neurologist",
    "designation": "Consultant",
    "hospital": "Saifee Hospital, Mumbai",
    "location": "Mumbai",
    "experience": "38+ Years Experience",
    "education": "MBBS, MD in Paediatrics, DM in Paediatric Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._vrajesh_udani_-_pediatric_neurologist.jpg",
    "about": "Dr. Vrajesh Udani, Consultant at Saifee Hospital, Mumbai. Specializes in Paediatric Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Paediatric Neurologist"
    ],
    "awards": [
      "Best doctor of Saifee Hospital, Mumbai"
    ],
    "patientCount": 4500,
    "successRate": 99.55
  },
  "dr-anil-saxena": {
    "id": "dr-anil-saxena",
    "name": "Dr. Anil Saxena",
    "specialty": "Interventional Cardiologist",
    "designation": "Director",
    "hospital": "Fortis Escorts Heart Institute, New Delhi",
    "location": "New Delhi",
    "experience": "35+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._anil_saxena.jpg",
    "about": "Dr. Anil Saxena, Director at Fortis Escorts Heart Institute, New Delhi. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Fortis Escorts Heart Institute, New Delhi"
    ],
    "patientCount": 8500,
    "successRate": 99.94
  },
  "dr-rajiv-khanna-ent": {
    "id": "dr-rajiv-khanna-ent",
    "name": "Dr. Rajiv Khanna",
    "specialty": "ENT Surgeon",
    "designation": "HOD",
    "hospital": "Apollo Medics Super Speciality Hospital, Lucknow",
    "location": "Lucknow",
    "experience": "40+ Years Experience",
    "education": "MBBS, MS in ENT",
    "image": "https://www.vaidam.com/sites/default/files/dr_rajiv_khanna.jpg",
    "about": "Dr. Rajiv Khanna, HOD at Apollo Medics Super Speciality Hospital, Lucknow. Specializes in ENT Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "ENT Surgeon"
    ],
    "awards": [
      "Best doctor of Apollo Medics Super Speciality Hospital, Lucknow"
    ],
    "patientCount": 3000,
    "successRate": 96.91
  },
  "dr-sitla-prasad-pathak": {
    "id": "dr-sitla-prasad-pathak",
    "name": "Dr. Sitla Prasad Pathak",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "Max Super Speciality Hospital, Vaishali",
    "location": "Vaishali",
    "experience": "10+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._sitla_prasad_pathak.jpg",
    "about": "Dr. Sitla Prasad Pathak, Consultant at Max Super Speciality Hospital, Vaishali. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Max Super Speciality Hospital, Vaishali"
    ],
    "patientCount": 2000,
    "successRate": 98.8
  },
  "dr-satishchandra-p": {
    "id": "dr-satishchandra-p",
    "name": "Dr. Satishchandra P",
    "specialty": "Neurologist",
    "designation": "Senior Consultant",
    "hospital": "Apollo Speciality Hospital, Jayanagar",
    "location": "Jayanagar",
    "experience": "43+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr.satishchandra_p.jpg",
    "about": "Dr. Satishchandra P, Senior Consultant at Apollo Speciality Hospital, Jayanagar. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Apollo Speciality Hospital, Jayanagar"
    ],
    "patientCount": 3000,
    "successRate": 97.46
  },
  "dr-k-subramanyan": {
    "id": "dr-k-subramanyan",
    "name": "Dr. K Subramanyan",
    "specialty": "Interventional Cardiologist",
    "designation": "Director",
    "hospital": "SIMS Hospital, Vadapalani, Chennai",
    "location": "Chennai",
    "experience": "43+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._k_subramanyan.jpg",
    "about": "Dr. K Subramanyan, Director at SIMS Hospital, Vadapalani, Chennai. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of SIMS Hospital, Vadapalani, Chennai"
    ],
    "patientCount": 8000,
    "successRate": 97.64
  },
  "dr-upendra-bhalerao": {
    "id": "dr-upendra-bhalerao",
    "name": "Dr. Upendra Bhalerao",
    "specialty": "Cardiac Surgeon",
    "designation": "Senior Consultant",
    "hospital": "Nanavati Super Specialty Hospital, Mumbai",
    "location": "Mumbai",
    "experience": "15+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._upendra_bhalerao-min.jpg",
    "about": "Dr. Upendra Bhalerao, Senior Consultant at Nanavati Super Specialty Hospital, Mumbai. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Nanavati Super Specialty Hospital, Mumbai"
    ],
    "patientCount": 1000,
    "successRate": 95.12
  },
  "dr-mahesh-chaudhari": {
    "id": "dr-mahesh-chaudhari",
    "name": "Dr. Mahesh Chaudhari",
    "specialty": "Neurosurgeon",
    "designation": "Consultant",
    "hospital": "S. L. Raheja Hospital, Mumbai",
    "location": "Mumbai",
    "experience": "46+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._mahesh_chaudhari_-_neurosurgeon.jpg",
    "about": "Dr. Mahesh Chaudhari, Consultant at S. L. Raheja Hospital, Mumbai. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of S. L. Raheja Hospital, Mumbai"
    ],
    "patientCount": 1500,
    "successRate": 99.59
  },
  "dr-sudesh-prabhakar": {
    "id": "dr-sudesh-prabhakar",
    "name": "Dr. Sudesh Prabhakar",
    "specialty": "Neurologist",
    "designation": "Director",
    "hospital": "Fortis Hospital, Mohali",
    "location": "Mohali",
    "experience": "46+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr_sudesh.jpg",
    "about": "Dr. Sudesh Prabhakar, Director at Fortis Hospital, Mohali. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Fortis Hospital, Mohali"
    ],
    "patientCount": 9000,
    "successRate": 98.61
  },
  "dr-mahendra-prasad-tripathy": {
    "id": "dr-mahendra-prasad-tripathy",
    "name": "Dr. Mahendra Prasad Tripathy",
    "specialty": "Interventional Cardiologist",
    "designation": "Director",
    "hospital": "Care Super Specialty Hospital, Bhubaneswar",
    "location": "Bhubaneswar",
    "experience": "42+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr-mp-tripaty.png",
    "about": "Dr. Mahendra Prasad Tripathy, Director at Care Super Specialty Hospital, Bhubaneswar. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Care Super Specialty Hospital, Bhubaneswar"
    ],
    "patientCount": 3500,
    "successRate": 99.72
  },
  "dr-anil-karapurkar": {
    "id": "dr-anil-karapurkar",
    "name": "Dr. Anil Karapurkar",
    "specialty": "Neurosurgeon",
    "designation": "Consultant",
    "hospital": "Breach Candy Hospital, Mumbai",
    "location": "Mumbai",
    "experience": "50+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._anil_karapurkar_-_neurosurgeon.jpg",
    "about": "Dr. Anil Karapurkar, Consultant at Breach Candy Hospital, Mumbai. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Breach Candy Hospital, Mumbai"
    ],
    "patientCount": 10000,
    "successRate": 95.16
  },
  "dr-rajiv-karnik": {
    "id": "dr-rajiv-karnik",
    "name": "Dr. Rajiv Karnik",
    "specialty": "Interventional Cardiologist",
    "designation": "Consultant",
    "hospital": "Fortis Hospital, Mulund, Mumbai",
    "location": "Mumbai",
    "experience": "44+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr_rajiv_karnik.jpg",
    "about": "Dr. Rajiv Karnik, Consultant at Fortis Hospital, Mulund, Mumbai. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Fortis Hospital, Mulund, Mumbai"
    ],
    "patientCount": 5500,
    "successRate": 98.66
  },
  "dr-gaurav-khandelwal": {
    "id": "dr-gaurav-khandelwal",
    "name": "Dr. Gaurav Khandelwal",
    "specialty": "Spine Surgeon",
    "designation": "Consultant",
    "hospital": "Shalby Hospital, Surat",
    "location": "Surat",
    "experience": "23+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr_gaurav_khandelwal-min.jpg",
    "about": "Dr. Gaurav Khandelwal, Consultant at Shalby Hospital, Surat. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Shalby Hospital, Surat"
    ],
    "patientCount": 7500,
    "successRate": 95.96
  },
  "dr-v-narendra-kumar": {
    "id": "dr-v-narendra-kumar",
    "name": "Dr. V. Narendra Kumar",
    "specialty": "Interventional Cardiologist",
    "designation": "Senior Consultant",
    "hospital": "Dr. Rela Institute and Medical Centre, Chennai",
    "location": "Chennai",
    "experience": "16+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr_v_narendra_kumar.jpg",
    "about": "Dr. V. Narendra Kumar, Senior Consultant at Dr. Rela Institute and Medical Centre, Chennai. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Dr. Rela Institute and Medical Centre, Chennai"
    ],
    "patientCount": 8500,
    "successRate": 99.74
  },
  "dr-manoranjan-misra": {
    "id": "dr-manoranjan-misra",
    "name": "Dr. Manoranjan Misra",
    "specialty": "Cardiac Surgeon",
    "designation": "Consultant",
    "hospital": "Care Super Specialty Hospital, Bhubaneswar",
    "location": "Bhubaneswar",
    "experience": "10+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr.-manoranjan-misra.png",
    "about": "Dr. Manoranjan Misra, Consultant at Care Super Specialty Hospital, Bhubaneswar. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Care Super Specialty Hospital, Bhubaneswar"
    ],
    "patientCount": 10000,
    "successRate": 95.64
  },
  "dr-richa-agrawal": {
    "id": "dr-richa-agrawal",
    "name": "Dr. Richa Agrawal",
    "specialty": "Interventional Cardiologist",
    "designation": "Consultant",
    "hospital": "Metro Hospital and Heart Institute, Noida Sector 13",
    "location": "Noida Sector 13",
    "experience": "11+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._richa_agrawal-min.jpg",
    "about": "Dr. Richa Agrawal, Consultant at Metro Hospital and Heart Institute, Noida Sector 13. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Metro Hospital and Heart Institute, Noida Sector 13"
    ],
    "patientCount": 500,
    "successRate": 95.83
  },
  "dr-tridib-chowdhury": {
    "id": "dr-tridib-chowdhury",
    "name": "Dr. Tridib Chowdhury",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "Manipal Hospital Formerly AMRI Hospital, Kolkata (Mukundapur)",
    "location": "Kolkata (Mukundapur)",
    "experience": "22+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._tridib_chowdhury-min.jpg",
    "about": "Dr. Tridib Chowdhury, Consultant at Manipal Hospital Formerly AMRI Hospital, Kolkata (Mukundapur). Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Manipal Hospital Formerly AMRI Hospital, Kolkata (Mukundapur)"
    ],
    "patientCount": 4000,
    "successRate": 97.73
  },
  "dr-ranjan-kachru": {
    "id": "dr-ranjan-kachru",
    "name": "Dr. Ranjan Kachru",
    "specialty": "Interventional Cardiologist",
    "designation": "Additional Director",
    "hospital": "Fortis Flt. Lt. Rajan Dhall Hospital, Vasant Kunj, New Delhi",
    "location": "New Delhi",
    "experience": "41+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._ranjan_kachru-min.jpg",
    "about": "Dr. Ranjan Kachru, Additional Director at Fortis Flt. Lt. Rajan Dhall Hospital, Vasant Kunj, New Delhi. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Fortis Flt. Lt. Rajan Dhall Hospital, Vasant Kunj, New Delhi"
    ],
    "patientCount": 7500,
    "successRate": 96.03
  },
  "dr-amit-chakrabarty": {
    "id": "dr-amit-chakrabarty",
    "name": "Dr. Amit Chakrabarty",
    "specialty": "Neurosurgeon",
    "designation": "Additional Director",
    "hospital": "CK Birla Hospital, Jaipur",
    "location": "Jaipur",
    "experience": "20+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._amit_chakrabarty.jpeg",
    "about": "Dr. Amit Chakrabarty, Additional Director at CK Birla Hospital, Jaipur. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of CK Birla Hospital, Jaipur"
    ],
    "patientCount": 5000,
    "successRate": 97.64
  },
  "dr-neetu-ramrakhiani": {
    "id": "dr-neetu-ramrakhiani",
    "name": "Dr. Neetu Ramrakhiani",
    "specialty": "Neurologist",
    "designation": "Additional Director",
    "hospital": "Fortis Escorts Hospital Jaipur",
    "location": "",
    "experience": "17+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr-neetu-ramrakhiani.jpeg",
    "about": "Dr. Neetu Ramrakhiani, Additional Director at Fortis Escorts Hospital Jaipur. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Fortis Escorts Hospital Jaipur"
    ],
    "patientCount": 3500,
    "successRate": 97.8
  },
  "dr-km-hassan": {
    "id": "dr-km-hassan",
    "name": "Dr. KM Hassan",
    "specialty": "Neurologist",
    "designation": "Additional Director",
    "hospital": "Jaypee Hospital, Noida",
    "location": "Noida",
    "experience": "33+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._km-hassan-min.jpg",
    "about": "Dr. KM Hassan, Additional Director at Jaypee Hospital, Noida. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Jaypee Hospital, Noida"
    ],
    "patientCount": 2500,
    "successRate": 96.77
  },
  "dr-vivek-vaid": {
    "id": "dr-vivek-vaid",
    "name": "Dr. Vivek Vaid",
    "specialty": "Spine Surgeon",
    "designation": "Additional Director",
    "hospital": "Fortis Escorts Hospital Jaipur",
    "location": "",
    "experience": "18+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._vivek_vaid-min.jpg",
    "about": "Dr. Vivek Vaid, Additional Director at Fortis Escorts Hospital Jaipur. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Fortis Escorts Hospital Jaipur"
    ],
    "patientCount": 2500,
    "successRate": 97.43
  },
  "dr-sharad-sharma-0": {
    "id": "dr-sharad-sharma-0",
    "name": "Dr. Sharad Sharma",
    "specialty": "Paediatric Neurologist",
    "designation": "Additional Director",
    "hospital": "Fortis Escorts Hospital Jaipur",
    "location": "",
    "experience": "19+ Years Experience",
    "education": "MBBS, MD in Paediatrics, DM in Paediatric Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._sharad_sharma-min.jpg",
    "about": "Dr. Sharad Sharma, Additional Director at Fortis Escorts Hospital Jaipur. Specializes in Paediatric Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Paediatric Neurologist"
    ],
    "awards": [
      "Best doctor of Fortis Escorts Hospital Jaipur"
    ],
    "patientCount": 8500,
    "successRate": 96.76
  },
  "dr-sharad-sharma-1": {
    "id": "dr-sharad-sharma-1",
    "name": "Dr. Sharad Sharma",
    "specialty": "Paediatric Neurologist",
    "designation": "Additional Director",
    "hospital": "Fortis Escorts Hospital Jaipur",
    "location": "",
    "experience": "19+ Years Experience",
    "education": "MBBS, MD in Paediatrics, DM in Paediatric Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._sharad_sharma-min.jpg",
    "about": "Dr. Sharad Sharma, Additional Director at Fortis Escorts Hospital Jaipur. Specializes in Paediatric Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Paediatric Neurologist"
    ],
    "awards": [
      "Best doctor of Fortis Escorts Hospital Jaipur"
    ],
    "patientCount": 8500,
    "successRate": 97.25
  },
  "dr-rakesh-chittora": {
    "id": "dr-rakesh-chittora",
    "name": "Dr. Rakesh Chittora",
    "specialty": "Cardiac Surgeon",
    "designation": "Additional Director",
    "hospital": "Fortis Escorts Hospital Jaipur",
    "location": "",
    "experience": "21+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._rakesh_chittora-min.jpg",
    "about": "Dr. Rakesh Chittora, Additional Director at Fortis Escorts Hospital Jaipur. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Fortis Escorts Hospital Jaipur"
    ],
    "patientCount": 9000,
    "successRate": 99.16
  },
  "dr-rahul-singhal": {
    "id": "dr-rahul-singhal",
    "name": "Dr. Rahul Singhal",
    "specialty": "Cardiac Surgeon",
    "designation": "Additional Director",
    "hospital": "Fortis Escorts Hospital Jaipur",
    "location": "",
    "experience": "21+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._rahul_singhal-min.jpg",
    "about": "Dr. Rahul Singhal, Additional Director at Fortis Escorts Hospital Jaipur. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Fortis Escorts Hospital Jaipur"
    ],
    "patientCount": 9000,
    "successRate": 98.2
  },
  "dr-ambuj-choudhary": {
    "id": "dr-ambuj-choudhary",
    "name": "Dr. Ambuj Choudhary",
    "specialty": "Cardiac Surgeon",
    "designation": "Additional Director",
    "hospital": "Fortis Hospital, Mohali",
    "location": "Mohali",
    "experience": "28+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._ambuj-min.jpg",
    "about": "Dr. Ambuj Choudhary, Additional Director at Fortis Hospital, Mohali. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Fortis Hospital, Mohali"
    ],
    "patientCount": 2500,
    "successRate": 95.92
  },
  "dr-vishnu-gupta": {
    "id": "dr-vishnu-gupta",
    "name": "Dr. Vishnu Gupta",
    "specialty": "Spine Surgeon",
    "designation": "Additional Director",
    "hospital": "Fortis Hospital Ludhiana",
    "location": "",
    "experience": "19+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._vishnu_gupta-min.jpg",
    "about": "Dr. Vishnu Gupta, Additional Director at Fortis Hospital Ludhiana. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Fortis Hospital Ludhiana"
    ],
    "patientCount": 1500,
    "successRate": 96.87
  },
  "dr-atul-luthra-endocrinology-diabetes": {
    "id": "dr-atul-luthra-endocrinology-diabetes",
    "name": "Dr. Atul Luthra",
    "specialty": "Endocrinologist",
    "designation": "Additional Director",
    "hospital": "Fortis Memorial Research Institute, Gurgaon",
    "location": "Gurgaon",
    "experience": "34+ Years Experience",
    "education": "MBBS",
    "image": "https://www.vaidam.com/sites/default/files/dr._atul_luthra.jpg",
    "about": "Dr. Atul Luthra, Additional Director at Fortis Memorial Research Institute, Gurgaon. Specializes in Endocrinologist and known for expertise in complex procedures.",
    "expertise": [
      "Endocrinologist"
    ],
    "awards": [
      "Best doctor of Fortis Memorial Research Institute, Gurgaon"
    ],
    "patientCount": 4500,
    "successRate": 99.43
  },
  "dr-b-l-aggarwal": {
    "id": "dr-b-l-aggarwal",
    "name": "Dr. B L Aggarwal",
    "specialty": "Interventional Cardiologist",
    "designation": "Additional Director",
    "hospital": "Jaypee Hospital, Noida",
    "location": "Noida",
    "experience": "27+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr-b-l-agarwal-min.jpg",
    "about": "Dr. B L Aggarwal, Additional Director at Jaypee Hospital, Noida. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Jaypee Hospital, Noida"
    ],
    "patientCount": 7000,
    "successRate": 95.75
  },
  "dr-vivek-raj-gastroentrology-and-hepatology": {
    "id": "dr-vivek-raj-gastroentrology-and-hepatology",
    "name": "Dr. Vivek Raj",
    "specialty": "Medical Gastroenterologist",
    "designation": "Director",
    "hospital": "Max Super Speciality Hospital, Saket, New Delhi",
    "location": "New Delhi",
    "experience": "43+ Years Experience",
    "education": "MBBS",
    "image": "https://www.vaidam.com/sites/default/files/dr-vivek-raj-max.jpg",
    "about": "Dr. Vivek Raj, Director at Max Super Speciality Hospital, Saket, New Delhi. Specializes in Medical Gastroenterologist and known for expertise in complex procedures.",
    "expertise": [
      "Medical Gastroenterologist"
    ],
    "awards": [
      "Best doctor of Max Super Speciality Hospital, Saket, New Delhi"
    ],
    "patientCount": 8500,
    "successRate": 97.98
  },
  "dr-dilip-kumar": {
    "id": "dr-dilip-kumar",
    "name": "Dr. Dilip Kumar",
    "specialty": "Interventional Cardiologist",
    "designation": "Consultant",
    "hospital": "Medica Superspecialty Hospital",
    "location": "",
    "experience": "16+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr.-dilip-kumar-cardiology.jpg",
    "about": "Dr. Dilip Kumar, Consultant at Medica Superspecialty Hospital. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Medica Superspecialty Hospital"
    ],
    "patientCount": 5500,
    "successRate": 96.45
  },
  "dr-neelam-kaul": {
    "id": "dr-neelam-kaul",
    "name": "Dr. Neelam Kaul",
    "specialty": "Interventional Cardiologist",
    "designation": "Senior Consultant",
    "hospital": "Amandeep Hospital, Pathankot",
    "location": "Pathankot",
    "experience": "18+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._neelam_kaul.jpg",
    "about": "Dr. Neelam Kaul, Senior Consultant at Amandeep Hospital, Pathankot. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Amandeep Hospital, Pathankot"
    ],
    "patientCount": 6500,
    "successRate": 95.8
  },
  "dr-ravi-kumar-r": {
    "id": "dr-ravi-kumar-r",
    "name": "Dr. Ravi Kumar R",
    "specialty": "Interventional Cardiologist",
    "designation": "Senior Consultant",
    "hospital": "MGM Healthcare, Chennai",
    "location": "Chennai",
    "experience": "29+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._ravi_kumar_r_-_cardiologist.jpg",
    "about": "Dr. Ravi Kumar R, Senior Consultant at MGM Healthcare, Chennai. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of MGM Healthcare, Chennai"
    ],
    "patientCount": 1000,
    "successRate": 95.34
  },
  "dr-naveen-tahasildar": {
    "id": "dr-naveen-tahasildar",
    "name": "Dr. Naveen Tahasildar",
    "specialty": "Spine Surgeon",
    "designation": "Consultant",
    "hospital": "Sparsh Hospital, Bommasandra",
    "location": "Bommasandra",
    "experience": "21+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._naveen_tahasildar-min.jpg",
    "about": "Dr. Naveen Tahasildar, Consultant at Sparsh Hospital, Bommasandra. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Sparsh Hospital, Bommasandra"
    ],
    "patientCount": 3000,
    "successRate": 96.12
  },
  "dr-parthasarathy-srinivasan": {
    "id": "dr-parthasarathy-srinivasan",
    "name": "Dr. Parthasarathy Srinivasan",
    "specialty": "Spine Surgeon",
    "designation": "Consultant",
    "hospital": "Dr. Rela Institute and Medical Centre, Chennai",
    "location": "Chennai",
    "experience": "15+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._parthasarathy_srinivasan_-_consultant_spine_surgeon.jpg",
    "about": "Dr. Parthasarathy Srinivasan, Consultant at Dr. Rela Institute and Medical Centre, Chennai. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Dr. Rela Institute and Medical Centre, Chennai"
    ],
    "patientCount": 3000,
    "successRate": 99.68
  },
  "dr-muralidharan-v": {
    "id": "dr-muralidharan-v",
    "name": "Dr. Muralidharan V",
    "specialty": "Spine Surgeon",
    "designation": "Consultant",
    "hospital": "Apollo Hospitals, Greams Road, Chennai",
    "location": "Chennai",
    "experience": "22+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/4_4.jpg",
    "about": "Dr. Muralidharan V, Consultant at Apollo Hospitals, Greams Road, Chennai. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Apollo Hospitals, Greams Road, Chennai"
    ],
    "patientCount": 8500,
    "successRate": 97.9
  },
  "dr-nitti-kapoor-kaushal": {
    "id": "dr-nitti-kapoor-kaushal",
    "name": "Dr. Nitti Kapoor Kaushal",
    "specialty": "Neurologist",
    "designation": "Associate Consultant",
    "hospital": "Manipal Hospital Formerly Columbia Asia, Patiala",
    "location": "Patiala",
    "experience": "12+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview71-min.png",
    "about": "Dr. Nitti Kapoor Kaushal, Associate Consultant at Manipal Hospital Formerly Columbia Asia, Patiala. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Manipal Hospital Formerly Columbia Asia, Patiala"
    ],
    "patientCount": 1000,
    "successRate": 98.16
  },
  "dr-samir-puri": {
    "id": "dr-samir-puri",
    "name": "Dr. Samir Puri",
    "specialty": "Cardiac Surgeon",
    "designation": "Associate Consultant",
    "hospital": "Delhi heart and lung institute",
    "location": "",
    "experience": "15+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._samir_puri.jpg",
    "about": "Dr. Samir Puri, Associate Consultant at Delhi heart and lung institute. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Delhi heart and lung institute"
    ],
    "patientCount": 9000,
    "successRate": 96.31
  },
  "dr-s-t-sakthi-suganya": {
    "id": "dr-s-t-sakthi-suganya",
    "name": "Dr. S. T. Sakthi Suganya",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Consultant",
    "hospital": "Kauvery Hospital, Alwarpet",
    "location": "Alwarpet",
    "experience": "15+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/untitled6929-min.png",
    "about": "Dr. S. T. Sakthi Suganya, Associate Consultant at Kauvery Hospital, Alwarpet. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Kauvery Hospital, Alwarpet"
    ],
    "patientCount": 5500,
    "successRate": 95.32
  },
  "dr-naveen-c-b": {
    "id": "dr-naveen-c-b",
    "name": "Dr. Naveen C B",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Consultant",
    "hospital": "Fortis Hospital, Bangalore (Cunningham Road)",
    "location": "Bangalore (Cunningham Road)",
    "experience": "23+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/untitled690-min.png",
    "about": "Dr. Naveen C B, Associate Consultant at Fortis Hospital, Bangalore (Cunningham Road). Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Fortis Hospital, Bangalore (Cunningham Road)"
    ],
    "patientCount": 6500,
    "successRate": 97.08
  },
  "dr-dhanajay-zutshi": {
    "id": "dr-dhanajay-zutshi",
    "name": "Dr Dhanajay Zutshi",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Consultant",
    "hospital": "Manipal Hospital, Baner, Pune",
    "location": "Pune",
    "experience": "10+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr_dhanajay_zutshi-min.jpg",
    "about": "Dr Dhanajay Zutshi, Associate Consultant at Manipal Hospital, Baner, Pune. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Manipal Hospital, Baner, Pune"
    ],
    "patientCount": 5000,
    "successRate": 98.79
  },
  "dr-punish-sadana": {
    "id": "dr-punish-sadana",
    "name": "Dr. Punish Sadana",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Consultant",
    "hospital": "Max Super Speciality Hospital, Dehradun",
    "location": "Dehradun",
    "experience": "12+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._punish_sadana-min.png",
    "about": "Dr. Punish Sadana, Associate Consultant at Max Super Speciality Hospital, Dehradun. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Max Super Speciality Hospital, Dehradun"
    ],
    "patientCount": 10000,
    "successRate": 97.74
  },
  "dr-aditya-atal": {
    "id": "dr-aditya-atal",
    "name": "Dr. Aditya Atal",
    "specialty": "Neurosurgeon",
    "designation": "Associate Consultant",
    "hospital": "Alexis Multispeciality Hospital, Nagpur, Maharashtra, India",
    "location": "India",
    "experience": "11+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._aditya_atal-min.jpg",
    "about": "Dr. Aditya Atal, Associate Consultant at Alexis Multispeciality Hospital, Nagpur, Maharashtra, India. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Alexis Multispeciality Hospital, Nagpur, Maharashtra, India"
    ],
    "patientCount": 9000,
    "successRate": 99.0
  },
  "dr-vikas-sharma": {
    "id": "dr-vikas-sharma",
    "name": "Dr. Vikas Sharma",
    "specialty": "Neurosurgeon",
    "designation": "Associate Consultant",
    "hospital": "Fortis Memorial Research Institute, Gurgaon",
    "location": "Gurgaon",
    "experience": "18+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._vikas_sharma.jpg",
    "about": "Dr. Vikas Sharma, Associate Consultant at Fortis Memorial Research Institute, Gurgaon. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Fortis Memorial Research Institute, Gurgaon"
    ],
    "patientCount": 5000,
    "successRate": 98.96
  },
  "dr-arunkumar-karthikayan": {
    "id": "dr-arunkumar-karthikayan",
    "name": "Dr. Arunkumar Karthikayan",
    "specialty": "Neurosurgeon",
    "designation": "Associate Consultant",
    "hospital": "Kauvery Hospital, Alwarpet",
    "location": "Alwarpet",
    "experience": "8+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._arunkumar_karthikayan-min.jpg",
    "about": "Dr. Arunkumar Karthikayan, Associate Consultant at Kauvery Hospital, Alwarpet. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Kauvery Hospital, Alwarpet"
    ],
    "patientCount": 5000,
    "successRate": 95.37
  },
  "dr-ticini-joseph": {
    "id": "dr-ticini-joseph",
    "name": "Dr. Ticini Joseph",
    "specialty": "Spine Surgeon",
    "designation": "Associate Consultant",
    "hospital": "Meitra Hospital, Kerala",
    "location": "Kerala",
    "experience": "7+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/untitled482-min.png",
    "about": "Dr. Ticini Joseph, Associate Consultant at Meitra Hospital, Kerala. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Meitra Hospital, Kerala"
    ],
    "patientCount": 3000,
    "successRate": 96.41
  },
  "dr-maninder-singh-sidhu": {
    "id": "dr-maninder-singh-sidhu",
    "name": "Dr. Maninder Singh Sidhu",
    "specialty": "Non Invasive Cardiologist",
    "designation": "Associate Consultant",
    "hospital": "Fortis Escorts Hospital, Amritsar",
    "location": "Amritsar",
    "experience": "23+ Years Experience",
    "education": "MBBS",
    "image": "https://www.vaidam.com/sites/default/files/dr._maninder_singh_sidhu-min.jpg",
    "about": "Dr. Maninder Singh Sidhu, Associate Consultant at Fortis Escorts Hospital, Amritsar. Specializes in Non Invasive Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Non Invasive Cardiologist"
    ],
    "awards": [
      "Best doctor of Fortis Escorts Hospital, Amritsar"
    ],
    "patientCount": 2500,
    "successRate": 97.61
  },
  "dr-davinder-mohan-saini": {
    "id": "dr-davinder-mohan-saini",
    "name": "Dr. Davinder Mohan Saini",
    "specialty": "Cardiac Surgeon",
    "designation": "Associate Consultant",
    "hospital": "Fortis Escorts Hospital, Amritsar",
    "location": "Amritsar",
    "experience": "28+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._davinder_singh_saini.jpg",
    "about": "Dr. Davinder Mohan Saini, Associate Consultant at Fortis Escorts Hospital, Amritsar. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Fortis Escorts Hospital, Amritsar"
    ],
    "patientCount": 8000,
    "successRate": 99.1
  },
  "dr-ramanujam-s": {
    "id": "dr-ramanujam-s",
    "name": "Dr. Ramanujam S",
    "specialty": "Spine Surgeon",
    "designation": "Associate Consultant",
    "hospital": "Fortis Malar Hospital ,Chennai",
    "location": "Chennai",
    "experience": "19+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr_rama.jpg",
    "about": "Dr. Ramanujam S, Associate Consultant at Fortis Malar Hospital ,Chennai. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Fortis Malar Hospital ,Chennai"
    ],
    "patientCount": 4000,
    "successRate": 96.37
  },
  "dr-swati-rawat": {
    "id": "dr-swati-rawat",
    "name": "Dr. Swati Rawat",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Consultant",
    "hospital": "Medanta - The Medicity, Gurgaon",
    "location": "Gurgaon",
    "experience": "14+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._swati_rawat.jpg",
    "about": "Dr. Swati Rawat, Associate Consultant at Medanta - The Medicity, Gurgaon. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Medanta - The Medicity, Gurgaon"
    ],
    "patientCount": 7500,
    "successRate": 95.4
  },
  "dr-pradeep-g": {
    "id": "dr-pradeep-g",
    "name": "Dr Pradeep G",
    "specialty": "Cardiac Surgeon",
    "designation": "Associate Consultant",
    "hospital": "MGM Healthcare, Chennai",
    "location": "Chennai",
    "experience": "11+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr.-pradeep-g-min.jpg",
    "about": "Dr Pradeep G, Associate Consultant at MGM Healthcare, Chennai. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of MGM Healthcare, Chennai"
    ],
    "patientCount": 1000,
    "successRate": 98.32
  },
  "dr-vivekan-manoharan": {
    "id": "dr-vivekan-manoharan",
    "name": "Dr. Vivekan Manoharan",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Consultant",
    "hospital": "MGM Healthcare, Chennai",
    "location": "Chennai",
    "experience": "13+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._vivekan_manoharan_-_interventional_cardiologist.jpg",
    "about": "Dr. Vivekan Manoharan, Associate Consultant at MGM Healthcare, Chennai. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of MGM Healthcare, Chennai"
    ],
    "patientCount": 5500,
    "successRate": 99.3
  },
  "dr-ghayoor-ahmed": {
    "id": "dr-ghayoor-ahmed",
    "name": "Dr. Ghayoor Ahmed",
    "specialty": "Cardiac Surgeon",
    "designation": "Associate Consultant",
    "hospital": "MGM Healthcare, Chennai",
    "location": "Chennai",
    "experience": "13+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._ghayoor_ahmed_-_cardiothoracic_surgeon.jpg",
    "about": "Dr. Ghayoor Ahmed, Associate Consultant at MGM Healthcare, Chennai. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of MGM Healthcare, Chennai"
    ],
    "patientCount": 9000,
    "successRate": 95.17
  },
  "dr-rajender-thaplu": {
    "id": "dr-rajender-thaplu",
    "name": "Dr. Rajender Thaplu",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Consultant",
    "hospital": "Paras Hospitals, Gurgaon",
    "location": "Gurgaon",
    "experience": "14+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._rajendra.jpg",
    "about": "Dr. Rajender Thaplu, Associate Consultant at Paras Hospitals, Gurgaon. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Paras Hospitals, Gurgaon"
    ],
    "patientCount": 7000,
    "successRate": 97.62
  },
  "dr-ravindra-ghule": {
    "id": "dr-ravindra-ghule",
    "name": "Dr. Ravindra Ghule",
    "specialty": "Cardiology",
    "designation": "Associate Consultant",
    "hospital": "Fortis Hospital, Mulund, Mumbai",
    "location": "Mumbai",
    "experience": "16+ Years Experience",
    "education": "MBBS",
    "image": "https://www.vaidam.com/sites/default/files/dr._ravindra_ghule-min.png",
    "about": "Dr. Ravindra Ghule, Associate Consultant at Fortis Hospital, Mulund, Mumbai. Specializes in Cardiology and known for expertise in complex procedures.",
    "expertise": [
      "Cardiology"
    ],
    "awards": [
      "Best doctor of Fortis Hospital, Mulund, Mumbai"
    ],
    "patientCount": 9000,
    "successRate": 99.25
  },
  "dr-pallav-jain": {
    "id": "dr-pallav-jain",
    "name": "Dr. Pallav Jain",
    "specialty": "Neurologist",
    "designation": "Associate Consultant",
    "hospital": "Max Super Speciality Hospital, Bathinda",
    "location": "Bathinda",
    "experience": "13+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._pallav_jain-min.jpg",
    "about": "Dr. Pallav Jain, Associate Consultant at Max Super Speciality Hospital, Bathinda. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Max Super Speciality Hospital, Bathinda"
    ],
    "patientCount": 2000,
    "successRate": 95.11
  },
  "dr-arul-k": {
    "id": "dr-arul-k",
    "name": "Dr. Arul K",
    "specialty": "Neurosurgeon",
    "designation": "Associate Consultant",
    "hospital": "Gleneagles Global Hospital, Chennai",
    "location": "Chennai",
    "experience": "29+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr_arul_k-min.jpg",
    "about": "Dr. Arul K, Associate Consultant at Gleneagles Global Hospital, Chennai. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Gleneagles Global Hospital, Chennai"
    ],
    "patientCount": 8000,
    "successRate": 95.9
  },
  "dr-sanjeev-srivastava": {
    "id": "dr-sanjeev-srivastava",
    "name": "Dr. Sanjeev Srivastava",
    "specialty": "Neurosurgeon",
    "designation": "Associate Consultant",
    "hospital": "Artemis Hospital, Gurgaon",
    "location": "Gurgaon",
    "experience": "18+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._sanjeev-min_0.jpg",
    "about": "Dr. Sanjeev Srivastava, Associate Consultant at Artemis Hospital, Gurgaon. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Artemis Hospital, Gurgaon"
    ],
    "patientCount": 6500,
    "successRate": 99.56
  },
  "dr-harpreet-wasir": {
    "id": "dr-harpreet-wasir",
    "name": "Dr. Harpreet Wasir",
    "specialty": "Cardiac Surgeon",
    "designation": "Associate Director",
    "hospital": "Medanta - The Medicity, Gurgaon",
    "location": "Gurgaon",
    "experience": "31+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._harpreet_wasir.jpg",
    "about": "Dr. Harpreet Wasir, Associate Director at Medanta - The Medicity, Gurgaon. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Medanta - The Medicity, Gurgaon"
    ],
    "patientCount": 4000,
    "successRate": 95.11
  },
  "dr-abhishek-parmar": {
    "id": "dr-abhishek-parmar",
    "name": "Dr. Abhishek Parmar",
    "specialty": "Cardiac Surgeon",
    "designation": "Associate Director",
    "hospital": "Sterling Hospital, Ahmedabad",
    "location": "Ahmedabad",
    "experience": "19+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._abhishek_parmar-min.jpg",
    "about": "Dr. Abhishek Parmar, Associate Director at Sterling Hospital, Ahmedabad. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Sterling Hospital, Ahmedabad"
    ],
    "patientCount": 1000,
    "successRate": 97.92
  },
  "dr-arvind-sethi": {
    "id": "dr-arvind-sethi",
    "name": "Dr. Arvind Sethi",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Director",
    "hospital": "BLK-Max Super Speciality Hospital Delhi",
    "location": "",
    "experience": "23+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr-arvind-sethi-min.jpg",
    "about": "Dr. Arvind Sethi, Associate Director at BLK-Max Super Speciality Hospital Delhi. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of BLK-Max Super Speciality Hospital Delhi"
    ],
    "patientCount": 5000,
    "successRate": 95.35
  },
  "dr-biswajit-paul": {
    "id": "dr-biswajit-paul",
    "name": "Dr. Biswajit Paul",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Director",
    "hospital": "Jaypee Hospital, Noida",
    "location": "Noida",
    "experience": "32+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr-biswajit-paul-cardiologist.jpg",
    "about": "Dr. Biswajit Paul, Associate Director at Jaypee Hospital, Noida. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Jaypee Hospital, Noida"
    ],
    "patientCount": 7000,
    "successRate": 98.99
  },
  "dr-preeti-sharma": {
    "id": "dr-preeti-sharma",
    "name": "Dr. Preeti Sharma",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Director",
    "hospital": "Max Super Speciality Hospital, Dehradun",
    "location": "Dehradun",
    "experience": "17+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._preeti_sharma-min.png",
    "about": "Dr. Preeti Sharma, Associate Director at Max Super Speciality Hospital, Dehradun. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Max Super Speciality Hospital, Dehradun"
    ],
    "patientCount": 5500,
    "successRate": 99.73
  },
  "dr-pawan-kumar": {
    "id": "dr-pawan-kumar",
    "name": "Dr. Pawan Kumar",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Director",
    "hospital": "Max Super Speciality Hospital, Patparganj, New Delhi",
    "location": "New Delhi",
    "experience": "26+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._pawan_kumar-min.jpg",
    "about": "Dr. Pawan Kumar, Associate Director at Max Super Speciality Hospital, Patparganj, New Delhi. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Max Super Speciality Hospital, Patparganj, New Delhi"
    ],
    "patientCount": 3000,
    "successRate": 99.06
  },
  "dr-anil-bhatt": {
    "id": "dr-anil-bhatt",
    "name": "Dr. Anil Bhatt",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Director",
    "hospital": "Max Super Speciality Hospital, Patparganj, New Delhi",
    "location": "New Delhi",
    "experience": "42+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._anil_bhatt-min.jpg",
    "about": "Dr. Anil Bhatt, Associate Director at Max Super Speciality Hospital, Patparganj, New Delhi. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Max Super Speciality Hospital, Patparganj, New Delhi"
    ],
    "patientCount": 9500,
    "successRate": 97.79
  },
  "dr-yogendra-singh": {
    "id": "dr-yogendra-singh",
    "name": "Dr. Yogendra Singh",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Director",
    "hospital": "Max Super Speciality Hospital, Dehradun",
    "location": "Dehradun",
    "experience": "19+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._yogendra_singh-min.png",
    "about": "Dr. Yogendra Singh, Associate Director at Max Super Speciality Hospital, Dehradun. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Max Super Speciality Hospital, Dehradun"
    ],
    "patientCount": 500,
    "successRate": 96.9
  },
  "dr-nishant-tyagi": {
    "id": "dr-nishant-tyagi",
    "name": "Dr. Nishant Tyagi",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Director",
    "hospital": "Max Super Speciality Hospital, Patparganj, New Delhi",
    "location": "New Delhi",
    "experience": "21+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._nishant_tyagi-min.jpg",
    "about": "Dr. Nishant Tyagi, Associate Director at Max Super Speciality Hospital, Patparganj, New Delhi. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Max Super Speciality Hospital, Patparganj, New Delhi"
    ],
    "patientCount": 4000,
    "successRate": 98.22
  },
  "dr-vineet-bhatia": {
    "id": "dr-vineet-bhatia",
    "name": "Dr Vineet Bhatia",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Director",
    "hospital": "Max Super Speciality Hospital, Patparganj, New Delhi",
    "location": "New Delhi",
    "experience": "27+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr_vineet_bhatia.jpg",
    "about": "Dr Vineet Bhatia, Associate Director at Max Super Speciality Hospital, Patparganj, New Delhi. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Max Super Speciality Hospital, Patparganj, New Delhi"
    ],
    "patientCount": 1000,
    "successRate": 97.88
  },
  "dr-nagendra-singh-chauhan": {
    "id": "dr-nagendra-singh-chauhan",
    "name": "Dr. Nagendra Singh Chauhan",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Director",
    "hospital": "Medanta - The Medicity, Gurgaon",
    "location": "Gurgaon",
    "experience": "24+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview66-min.png",
    "about": "Dr. Nagendra Singh Chauhan, Associate Director at Medanta - The Medicity, Gurgaon. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Medanta - The Medicity, Gurgaon"
    ],
    "patientCount": 9000,
    "successRate": 99.29
  },
  "dr-atma-ram-bansal": {
    "id": "dr-atma-ram-bansal",
    "name": "Dr. Atma Ram Bansal",
    "specialty": "Neurologist",
    "designation": "Associate Director",
    "hospital": "Medanta - The Medicity, Gurgaon",
    "location": "Gurgaon",
    "experience": "16+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/atmaram.jpg",
    "about": "Dr. Atma Ram Bansal, Associate Director at Medanta - The Medicity, Gurgaon. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Medanta - The Medicity, Gurgaon"
    ],
    "patientCount": 10000,
    "successRate": 96.19
  },
  "dr-deepak": {
    "id": "dr-deepak",
    "name": "Dr. Deepak",
    "specialty": "Neurologist",
    "designation": "Associate Director",
    "hospital": "Max Superspecialty Hospital, Mohali",
    "location": "Mohali",
    "experience": "15+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr_deepak_gupta_6ef0dae075-min.jpg",
    "about": "Dr. Deepak, Associate Director at Max Superspecialty Hospital, Mohali. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Max Superspecialty Hospital, Mohali"
    ],
    "patientCount": 8500,
    "successRate": 95.81
  },
  "dr-arpinder-singh-gill": {
    "id": "dr-arpinder-singh-gill",
    "name": "Dr. Arpinder Singh Gill",
    "specialty": "Neurologist",
    "designation": "Associate Director",
    "hospital": "Max Superspecialty Hospital, Mohali",
    "location": "Mohali",
    "experience": "32+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr_arpinder_gill_1-min.png",
    "about": "Dr. Arpinder Singh Gill, Associate Director at Max Superspecialty Hospital, Mohali. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Max Superspecialty Hospital, Mohali"
    ],
    "patientCount": 6000,
    "successRate": 96.44
  },
  "dr-deepak-g": {
    "id": "dr-deepak-g",
    "name": "Dr. Deepak G",
    "specialty": "Neurologist",
    "designation": "Associate Director",
    "hospital": "Max Superspecialty Hospital, Mohali",
    "location": "Mohali",
    "experience": "16+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr_deepak_gupta_1-min.jpg",
    "about": "Dr. Deepak G, Associate Director at Max Superspecialty Hospital, Mohali. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Max Superspecialty Hospital, Mohali"
    ],
    "patientCount": 7500,
    "successRate": 98.16
  },
  "dr-gaurav-goel": {
    "id": "dr-gaurav-goel",
    "name": "Dr. Gaurav Goel",
    "specialty": "Neurologist",
    "designation": "Associate Director",
    "hospital": "Medanta - The Medicity, Gurgaon",
    "location": "Gurgaon",
    "experience": "20+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._gaurav.jpg",
    "about": "Dr. Gaurav Goel, Associate Director at Medanta - The Medicity, Gurgaon. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Medanta - The Medicity, Gurgaon"
    ],
    "patientCount": 3500,
    "successRate": 98.64
  },
  "dr-rakesh-ranjan": {
    "id": "dr-rakesh-ranjan",
    "name": "Dr. Rakesh Ranjan",
    "specialty": "Neurosurgeon",
    "designation": "Associate Director",
    "hospital": "Aditya Birla Memorial Hospital, Pune",
    "location": "Pune",
    "experience": "26+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/phot-frame-03-1-1-570x570_1-min.jpeg",
    "about": "Dr. Rakesh Ranjan, Associate Director at Aditya Birla Memorial Hospital, Pune. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Aditya Birla Memorial Hospital, Pune"
    ],
    "patientCount": 5000,
    "successRate": 96.03
  },
  "dr-anirban-deep-banerjee": {
    "id": "dr-anirban-deep-banerjee",
    "name": "Dr. Anirban Deep Banerjee",
    "specialty": "Neurosurgeon",
    "designation": "Associate Director",
    "hospital": "Medanta - The Medicity, Gurgaon",
    "location": "Gurgaon",
    "experience": "26+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._anirban_deep_banerjee.jpg",
    "about": "Dr. Anirban Deep Banerjee, Associate Director at Medanta - The Medicity, Gurgaon. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Medanta - The Medicity, Gurgaon"
    ],
    "patientCount": 9500,
    "successRate": 99.6
  },
  "dr-rohit-bansil": {
    "id": "dr-rohit-bansil",
    "name": "Dr. Rohit Bansil",
    "specialty": "Spine Surgeon",
    "designation": "Associate Director",
    "hospital": "BLK-Max Super Speciality Hospital Delhi",
    "location": "",
    "experience": "19+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr_rohit_bansil.jpg",
    "about": "Dr. Rohit Bansil, Associate Director at BLK-Max Super Speciality Hospital Delhi. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of BLK-Max Super Speciality Hospital Delhi"
    ],
    "patientCount": 500,
    "successRate": 96.66
  },
  "dr-sajal-kakkar": {
    "id": "dr-sajal-kakkar",
    "name": "Dr. Sajal Kakkar",
    "specialty": "Surgical Oncologist",
    "designation": "Associate Director",
    "hospital": "Max Superspecialty Hospital, Mohali",
    "location": "Mohali",
    "experience": "21+ Years Experience",
    "education": "MBBS",
    "image": "https://www.vaidam.com/sites/default/files/dr_sajal_kakkar_df156ccfc4_1-min_1.jpg",
    "about": "Dr. Sajal Kakkar, Associate Director at Max Superspecialty Hospital, Mohali. Specializes in Surgical Oncologist and known for expertise in complex procedures.",
    "expertise": [
      "Surgical Oncologist"
    ],
    "awards": [
      "Best doctor of Max Superspecialty Hospital, Mohali"
    ],
    "patientCount": 2000,
    "successRate": 96.26
  },
  "dr-gpv-subbaiah": {
    "id": "dr-gpv-subbaiah",
    "name": "Dr. G.P.V Subbaiah",
    "specialty": "Spine Surgeon",
    "designation": "Associate Director",
    "hospital": "Care Hospitals, HITEC City",
    "location": "HITEC City",
    "experience": "24+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._gpv_subbaiah-min.jpg",
    "about": "Dr. G.P.V Subbaiah, Associate Director at Care Hospitals, HITEC City. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Care Hospitals, HITEC City"
    ],
    "patientCount": 5000,
    "successRate": 99.36
  },
  "dr-ripen-gupta-cardiology": {
    "id": "dr-ripen-gupta-cardiology",
    "name": "Dr. Ripen Gupta",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Director",
    "hospital": "Max Super Speciality Hospital, Saket, New Delhi",
    "location": "New Delhi",
    "experience": "27+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._ripen_gupta-min.jpg",
    "about": "Dr. Ripen Gupta, Associate Director at Max Super Speciality Hospital, Saket, New Delhi. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Max Super Speciality Hospital, Saket, New Delhi"
    ],
    "patientCount": 7000,
    "successRate": 97.18
  },
  "dr-chandrashekhar": {
    "id": "dr-chandrashekhar",
    "name": "Dr. Chandrashekhar",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Director",
    "hospital": "Max Super Speciality hospital, Shalimar Bagh, New Delhi",
    "location": "New Delhi",
    "experience": "20+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._chandrashekhar-min.jpg",
    "about": "Dr. Chandrashekhar, Associate Director at Max Super Speciality hospital, Shalimar Bagh, New Delhi. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Max Super Speciality hospital, Shalimar Bagh, New Delhi"
    ],
    "patientCount": 9000,
    "successRate": 97.89
  },
  "dr-manoj-khanal": {
    "id": "dr-manoj-khanal",
    "name": "Dr. Manoj Khanal",
    "specialty": "Neurologist",
    "designation": "Associate Director",
    "hospital": "Max Super Speciality hospital, Shalimar Bagh, New Delhi",
    "location": "New Delhi",
    "experience": "18+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._manoj_khanal-min.jpg",
    "about": "Dr. Manoj Khanal, Associate Director at Max Super Speciality hospital, Shalimar Bagh, New Delhi. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Max Super Speciality hospital, Shalimar Bagh, New Delhi"
    ],
    "patientCount": 3500,
    "successRate": 96.68
  },
  "dr-rajesh-gupta": {
    "id": "dr-rajesh-gupta",
    "name": "Dr. Rajesh Gupta",
    "specialty": "Neurosurgeon",
    "designation": "Associate Director",
    "hospital": "Max Super Speciality Hospital, Patparganj, New Delhi",
    "location": "New Delhi",
    "experience": "20+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._rajesh_gupta-min.jpg",
    "about": "Dr. Rajesh Gupta, Associate Director at Max Super Speciality Hospital, Patparganj, New Delhi. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Max Super Speciality Hospital, Patparganj, New Delhi"
    ],
    "patientCount": 9000,
    "successRate": 96.44
  },
  "dr-kapil-k-chattree": {
    "id": "dr-kapil-k-chattree",
    "name": "Dr. Kapil K Chattree",
    "specialty": "Cardiac Surgeon",
    "designation": "Associate Director",
    "hospital": "Max Superspecialty Hospital, Mohali",
    "location": "Mohali",
    "experience": "20+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._kapil_k_chattree-min.jpg",
    "about": "Dr. Kapil K Chattree, Associate Director at Max Superspecialty Hospital, Mohali. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Max Superspecialty Hospital, Mohali"
    ],
    "patientCount": 5000,
    "successRate": 96.1
  },
  "dr-sudheer-saxena": {
    "id": "dr-sudheer-saxena",
    "name": "Dr. Sudheer Saxena",
    "specialty": "Cardiac Surgeon",
    "designation": "Associate Director",
    "hospital": "Max Superspecialty Hospital, Mohali",
    "location": "Mohali",
    "experience": "29+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr_sudheer_saxena_1-min.jpg",
    "about": "Dr. Sudheer Saxena, Associate Director at Max Superspecialty Hospital, Mohali. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Max Superspecialty Hospital, Mohali"
    ],
    "patientCount": 6000,
    "successRate": 99.35
  },
  "dr-sanjay-kumar-mishra": {
    "id": "dr-sanjay-kumar-mishra",
    "name": "Dr. Sanjay Kumar Mishra",
    "specialty": "Neurologist",
    "designation": "Associate Director",
    "hospital": "Max Superspecialty Hospital, Mohali",
    "location": "Mohali",
    "experience": "27+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr_sanjay_mishra_1-min.jpg",
    "about": "Dr. Sanjay Kumar Mishra, Associate Director at Max Superspecialty Hospital, Mohali. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Max Superspecialty Hospital, Mohali"
    ],
    "patientCount": 3000,
    "successRate": 99.25
  },
  "dr-kartikeya-bhargava": {
    "id": "dr-kartikeya-bhargava",
    "name": "Dr. Kartikeya Bhargava",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Director",
    "hospital": "Medanta - The Medicity, Gurgaon",
    "location": "Gurgaon",
    "experience": "20+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr-kartikeya-bhargava-cardiac-electrophysiologist.jpg",
    "about": "Dr. Kartikeya Bhargava, Associate Director at Medanta - The Medicity, Gurgaon. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Medanta - The Medicity, Gurgaon"
    ],
    "patientCount": 500,
    "successRate": 98.38
  },
  "dr-niraj-gupta": {
    "id": "dr-niraj-gupta",
    "name": "Dr. Niraj Gupta",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Director",
    "hospital": "Medanta - The Medicity, Gurgaon",
    "location": "Gurgaon",
    "experience": "24+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._niraj-min.jpg",
    "about": "Dr. Niraj Gupta, Associate Director at Medanta - The Medicity, Gurgaon. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Medanta - The Medicity, Gurgaon"
    ],
    "patientCount": 3500,
    "successRate": 96.96
  },
  "dr-jp-dhamija": {
    "id": "dr-jp-dhamija",
    "name": "Dr. JP Dhamija",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Professor",
    "hospital": "Mahatma Gandhi Medical College & Hospital, Jaipur",
    "location": "Jaipur",
    "experience": "43+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._jp_dhamija-min.jpg",
    "about": "Dr. JP Dhamija, Associate Professor at Mahatma Gandhi Medical College & Hospital, Jaipur. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Mahatma Gandhi Medical College & Hospital, Jaipur"
    ],
    "patientCount": 10000,
    "successRate": 99.94
  },
  "dr-ramanand-sinha": {
    "id": "dr-ramanand-sinha",
    "name": "Dr. Ramanand Sinha",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Professor",
    "hospital": "Mahatma Gandhi Medical College & Hospital, Jaipur",
    "location": "Jaipur",
    "experience": "18+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/sajdha-min.jpg",
    "about": "Dr. Ramanand Sinha, Associate Professor at Mahatma Gandhi Medical College & Hospital, Jaipur. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Mahatma Gandhi Medical College & Hospital, Jaipur"
    ],
    "patientCount": 7500,
    "successRate": 97.25
  },
  "dr-gaurav-goyal": {
    "id": "dr-gaurav-goyal",
    "name": "Dr. Gaurav Goyal",
    "specialty": "Neurologist",
    "designation": "Associate Professor",
    "hospital": "Mahatma Gandhi Medical College & Hospital, Jaipur",
    "location": "Jaipur",
    "experience": "13+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/gaurav-min.jpg",
    "about": "Dr. Gaurav Goyal, Associate Professor at Mahatma Gandhi Medical College & Hospital, Jaipur. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Mahatma Gandhi Medical College & Hospital, Jaipur"
    ],
    "patientCount": 7500,
    "successRate": 96.58
  },
  "dr-sadanand-reddy": {
    "id": "dr-sadanand-reddy",
    "name": "Dr Sadanand Reddy",
    "specialty": "Interventional Cardiologist",
    "designation": "Associate Professor",
    "hospital": "Medicover Hospital, Nizamabad",
    "location": "Nizamabad",
    "experience": "27+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_10.png",
    "about": "Dr Sadanand Reddy, Associate Professor at Medicover Hospital, Nizamabad. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Medicover Hospital, Nizamabad"
    ],
    "patientCount": 3000,
    "successRate": 96.36
  },
  "dr-anil-behl": {
    "id": "dr-anil-behl",
    "name": "Dr. Anil Behl",
    "specialty": "Cosmetic Surgeon",
    "designation": "Director",
    "hospital": "Fortis Memorial Research Institute, Gurgaon",
    "location": "Gurgaon",
    "experience": "49+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Plastic Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._anil_behl_0.jpg",
    "about": "Dr. Anil Behl, Director at Fortis Memorial Research Institute, Gurgaon. Specializes in Cosmetic Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cosmetic Surgeon"
    ],
    "awards": [
      "Best doctor of Fortis Memorial Research Institute, Gurgaon"
    ],
    "patientCount": 9500,
    "successRate": 99.91
  },
  "dr-hitesh-garg-orthopedics": {
    "id": "dr-hitesh-garg-orthopedics",
    "name": "Dr. Hitesh Garg",
    "specialty": "Spine Surgeon",
    "designation": "HOD",
    "hospital": "Artemis Hospital, Gurgaon",
    "location": "Gurgaon",
    "experience": "23+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._hitesh_garg_-_orthopaedics_spine_surgeon-min.jpg",
    "about": "Dr. Hitesh Garg, HOD at Artemis Hospital, Gurgaon. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Artemis Hospital, Gurgaon"
    ],
    "patientCount": 7500,
    "successRate": 97.55
  },
  "dr-s-k-rajan-neurosurgery-spine-surgery": {
    "id": "dr-s-k-rajan-neurosurgery-spine-surgery",
    "name": "Dr. S K Rajan",
    "specialty": "Spine Surgeon",
    "designation": "HOD",
    "hospital": "Artemis Hospital, Gurgaon",
    "location": "Gurgaon",
    "experience": "22+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview70-min.png",
    "about": "Dr. S K Rajan, HOD at Artemis Hospital, Gurgaon. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Artemis Hospital, Gurgaon"
    ],
    "patientCount": 2000,
    "successRate": 98.66
  },
  "dr-vipul-gupta-neurointerventional-surgery": {
    "id": "dr-vipul-gupta-neurointerventional-surgery",
    "name": "Dr Vipul Gupta",
    "specialty": "Spine Surgeon",
    "designation": "Director",
    "hospital": "Paras Hospitals, Gurgaon",
    "location": "Gurgaon",
    "experience": "29+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr_vipul_gupta-min.jpg",
    "about": "Dr Vipul Gupta, Director at Paras Hospitals, Gurgaon. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Paras Hospitals, Gurgaon"
    ],
    "patientCount": 4000,
    "successRate": 95.49
  },
  "dr-bipin-walia-neurology-neurosurgery": {
    "id": "dr-bipin-walia-neurology-neurosurgery",
    "name": "Dr. Bipin Walia",
    "specialty": "Spine Surgeon",
    "designation": "Director",
    "hospital": "Max Super Speciality Hospital, Saket, New Delhi",
    "location": "New Delhi",
    "experience": "41+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._bipin_s._walia.jpg",
    "about": "Dr. Bipin Walia, Director at Max Super Speciality Hospital, Saket, New Delhi. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Max Super Speciality Hospital, Saket, New Delhi"
    ],
    "patientCount": 10000,
    "successRate": 97.81
  },
  "dr-boga-venkatesh": {
    "id": "dr-boga-venkatesh",
    "name": "Dr. Boga Venkatesh",
    "specialty": "Neurosurgeon",
    "designation": "Consultant",
    "hospital": "Medicover Hospital, Karimnagar",
    "location": "Karimnagar",
    "experience": "11+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr_boga_venkatesh.jpg",
    "about": "Dr. Boga Venkatesh, Consultant at Medicover Hospital, Karimnagar. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Medicover Hospital, Karimnagar"
    ],
    "patientCount": 9000,
    "successRate": 96.77
  },
  "dr-anusha-d": {
    "id": "dr-anusha-d",
    "name": "Dr. Anusha D",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "Apollo Cancer Hospital, Chennai",
    "location": "Chennai",
    "experience": "17+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._anusha_d.jpg",
    "about": "Dr. Anusha D, Consultant at Apollo Cancer Hospital, Chennai. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Apollo Cancer Hospital, Chennai"
    ],
    "patientCount": 9000,
    "successRate": 98.3
  },
  "dr-arun-ed": {
    "id": "dr-arun-ed",
    "name": "Dr. Arun E.D.",
    "specialty": "Cardiac Surgeon",
    "designation": "Consultant",
    "hospital": "Apollo Specialty Hospital, OMR",
    "location": "OMR",
    "experience": "23+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._arul_e_d.jpg",
    "about": "Dr. Arun E.D., Consultant at Apollo Specialty Hospital, OMR. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Apollo Specialty Hospital, OMR"
    ],
    "patientCount": 7000,
    "successRate": 98.07
  },
  "dr-amjad-m-shaikh": {
    "id": "dr-amjad-m-shaikh",
    "name": "Dr. Amjad M Shaikh",
    "specialty": "Cardiac Surgeon",
    "designation": "Consultant",
    "hospital": "Kokilaben Dhirubhai Ambani Hospital, Mumbai",
    "location": "Mumbai",
    "experience": "19+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._amjad_m_shaikh-min.jpg",
    "about": "Dr. Amjad M Shaikh, Consultant at Kokilaben Dhirubhai Ambani Hospital, Mumbai. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Kokilaben Dhirubhai Ambani Hospital, Mumbai"
    ],
    "patientCount": 7500,
    "successRate": 97.91
  },
  "dr-s-venkatesh": {
    "id": "dr-s-venkatesh",
    "name": "Dr. S Venkatesh",
    "specialty": "Interventional Cardiologist",
    "designation": "Consultant",
    "hospital": "Aster RV Hospital (J P Nagar) Bangalore",
    "location": "",
    "experience": "34+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._venkatesh.jpg",
    "about": "Dr. S Venkatesh, Consultant at Aster RV Hospital (J P Nagar) Bangalore. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Aster RV Hospital (J P Nagar) Bangalore"
    ],
    "patientCount": 3500,
    "successRate": 95.85
  },
  "dr-revanur-vishwanath": {
    "id": "dr-revanur-vishwanath",
    "name": "Dr. Revanur Vishwanath",
    "specialty": "Interventional Cardiologist",
    "designation": "Consultant",
    "hospital": "Care Hospitals, Banjara Hills, Hyderabad",
    "location": "Hyderabad",
    "experience": "20+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._revanur_vishwanath-min.jpg",
    "about": "Dr. Revanur Vishwanath, Consultant at Care Hospitals, Banjara Hills, Hyderabad. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Care Hospitals, Banjara Hills, Hyderabad"
    ],
    "patientCount": 4000,
    "successRate": 96.28
  },
  "dr-rajneesh-kachhara": {
    "id": "dr-rajneesh-kachhara",
    "name": "Dr. Rajneesh Kachhara",
    "specialty": "Spine Surgeon",
    "designation": "Director",
    "hospital": "Medanta - The Medicity, Gurgaon",
    "location": "Gurgaon",
    "experience": "30+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._rajneesh_kachhara-director_neurosurgeon.jpg",
    "about": "Dr. Rajneesh Kachhara, Director at Medanta - The Medicity, Gurgaon. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Medanta - The Medicity, Gurgaon"
    ],
    "patientCount": 8500,
    "successRate": 97.2
  },
  "dr-rohit-mody": {
    "id": "dr-rohit-mody",
    "name": "Dr. Rohit Mody",
    "specialty": "Cardiac Surgeon",
    "designation": "Consultant",
    "hospital": "Max Super Speciality Hospital, Bathinda",
    "location": "Bathinda",
    "experience": "36+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._rohit_mody-min.jpg",
    "about": "Dr. Rohit Mody, Consultant at Max Super Speciality Hospital, Bathinda. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Max Super Speciality Hospital, Bathinda"
    ],
    "patientCount": 3000,
    "successRate": 98.23
  },
  "dr-sivakumar": {
    "id": "dr-sivakumar",
    "name": "Dr. A. Sivakumar",
    "specialty": "Cosmetic Surgeon",
    "designation": "Director",
    "hospital": "Kauvery Hospital Radial Road Chennai",
    "location": "",
    "experience": "30+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Plastic Surgery",
    "image": "https://www.vaidam.com/sites/default/files/a_sivakumar.jpg",
    "about": "Dr. A. Sivakumar, Director at Kauvery Hospital Radial Road Chennai. Specializes in Cosmetic Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cosmetic Surgeon"
    ],
    "awards": [
      "Best doctor of Kauvery Hospital Radial Road Chennai"
    ],
    "patientCount": 7500,
    "successRate": 95.76
  },
  "dr-pradeep-g-nayar": {
    "id": "dr-pradeep-g-nayar",
    "name": "Dr. Pradeep G Nayar",
    "specialty": "Interventional Cardiologist",
    "designation": "Senior Consultant",
    "hospital": "Fortis Malar Hospital ,Chennai",
    "location": "Chennai",
    "experience": "41+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._pradeep_g_nayar_-_interventional_cardiologist.jpg",
    "about": "Dr. Pradeep G Nayar, Senior Consultant at Fortis Malar Hospital ,Chennai. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Fortis Malar Hospital ,Chennai"
    ],
    "patientCount": 2500,
    "successRate": 98.54
  },
  "dr-gopal-krishna-dash": {
    "id": "dr-gopal-krishna-dash",
    "name": "Dr. Gopal Krishna Dash",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "NH Mazumdar Shaw Medical Centre, Bangalore",
    "location": "Bangalore",
    "experience": "23+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._gopal_krishna_dash.jpg",
    "about": "Dr. Gopal Krishna Dash, Consultant at NH Mazumdar Shaw Medical Centre, Bangalore. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of NH Mazumdar Shaw Medical Centre, Bangalore"
    ],
    "patientCount": 1000,
    "successRate": 98.98
  },
  "dr-ravindra-k-tongia": {
    "id": "dr-ravindra-k-tongia",
    "name": "Dr. Ravindra K Tongia",
    "specialty": "Cardiac Surgeon",
    "designation": "Director",
    "hospital": "Fortis Escorts Hospital Jaipur",
    "location": "",
    "experience": "54+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._ravindra_k_tongia_edited-min.jpg",
    "about": "Dr. Ravindra K Tongia, Director at Fortis Escorts Hospital Jaipur. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Fortis Escorts Hospital Jaipur"
    ],
    "patientCount": 3500,
    "successRate": 98.69
  },
  "dr-rajesh-taneja": {
    "id": "dr-rajesh-taneja",
    "name": "Dr. Rajesh Taneja",
    "specialty": "Urologist",
    "designation": "Senior Consultant",
    "hospital": "Indraprastha Apollo Hospital, New Delhi",
    "location": "New Delhi",
    "experience": "31+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Urology",
    "image": "https://www.vaidam.com/sites/default/files/rajesh_taneja-min.jpg",
    "about": "Dr. Rajesh Taneja, Senior Consultant at Indraprastha Apollo Hospital, New Delhi. Specializes in Urologist and known for expertise in complex procedures.",
    "expertise": [
      "Urologist"
    ],
    "awards": [
      "Best doctor of Indraprastha Apollo Hospital, New Delhi"
    ],
    "patientCount": 5500,
    "successRate": 95.91
  },
  "dr-mohit-walia": {
    "id": "dr-mohit-walia",
    "name": "Dr. Mohit Walia",
    "specialty": "Interventional Cardiologist",
    "designation": "Senior Consultant",
    "hospital": "Shalby Hospital, Mohali",
    "location": "Mohali",
    "experience": "24+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr-mohit-walia-min.png",
    "about": "Dr. Mohit Walia, Senior Consultant at Shalby Hospital, Mohali. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Shalby Hospital, Mohali"
    ],
    "patientCount": 5000,
    "successRate": 95.69
  },
  "dr-ramneek-mahajan-orthopedics-joint-replacement": {
    "id": "dr-ramneek-mahajan-orthopedics-joint-replacement",
    "name": "Dr. Ramneek Mahajan",
    "specialty": "Orthopaedic and Joint Replacement Surgeon",
    "designation": "Director",
    "hospital": "Max Super Speciality Hospital, Saket, New Delhi",
    "location": "New Delhi",
    "experience": "10+ Years Experience",
    "education": "MBBS, MS in Orthopaedics",
    "image": "https://www.vaidam.com/sites/default/files/dr._ramneek_mahajan-min.jpeg",
    "about": "Dr. Ramneek Mahajan, Director at Max Super Speciality Hospital, Saket, New Delhi. Specializes in Orthopaedic and Joint Replacement Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Orthopaedic and Joint Replacement Surgeon"
    ],
    "awards": [
      "Best doctor of Max Super Speciality Hospital, Saket, New Delhi"
    ],
    "patientCount": 500,
    "successRate": 97.15
  },
  "dr-pradeep-kumar-sharma": {
    "id": "dr-pradeep-kumar-sharma",
    "name": "Dr. Pradeep Kumar Sharma",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "Ivy Hospital Mohali",
    "location": "",
    "experience": "11+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._pradeep-min_3.jpg",
    "about": "Dr. Pradeep Kumar Sharma, Consultant at Ivy Hospital Mohali. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Ivy Hospital Mohali"
    ],
    "patientCount": 9000,
    "successRate": 97.5
  },
  "dr-siddharth-kharkar": {
    "id": "dr-siddharth-kharkar",
    "name": "Dr. Siddharth Kharkar",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "Nanavati Super Specialty Hospital, Mumbai",
    "location": "Mumbai",
    "experience": "25+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._siddharth_kharkar-min.jpg",
    "about": "Dr. Siddharth Kharkar, Consultant at Nanavati Super Specialty Hospital, Mumbai. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Nanavati Super Specialty Hospital, Mumbai"
    ],
    "patientCount": 9500,
    "successRate": 99.21
  },
  "dr-komal-prasad": {
    "id": "dr-komal-prasad",
    "name": "Dr. Komal Prasad",
    "specialty": "Spine Surgeon",
    "designation": "Senior Consultant",
    "hospital": "NH Mazumdar Shaw Medical Centre, Bangalore",
    "location": "Bangalore",
    "experience": "24+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._dr._komal_prasadellur.jpg",
    "about": "Dr. Komal Prasad, Senior Consultant at NH Mazumdar Shaw Medical Centre, Bangalore. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of NH Mazumdar Shaw Medical Centre, Bangalore"
    ],
    "patientCount": 1000,
    "successRate": 95.56
  },
  "dr-v-k-jain-neurosurgery": {
    "id": "dr-v-k-jain-neurosurgery",
    "name": "Dr. V. K. Jain",
    "specialty": "Neurosurgeon",
    "designation": "Director",
    "hospital": "Max Super Speciality Hospital, Saket, New Delhi",
    "location": "New Delhi",
    "experience": "50+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr_v_k_jain_-_neurosurgeon-min.jpeg",
    "about": "Dr. V. K. Jain, Director at Max Super Speciality Hospital, Saket, New Delhi. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Max Super Speciality Hospital, Saket, New Delhi"
    ],
    "patientCount": 2000,
    "successRate": 95.17
  },
  "dr-k-r-suresh-bapu": {
    "id": "dr-k-r-suresh-bapu",
    "name": "Dr. K R Suresh Bapu",
    "specialty": "Neurosurgeon",
    "designation": "Director",
    "hospital": "SIMS Hospital, Vadapalani, Chennai",
    "location": "Chennai",
    "experience": "49+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._k_r_suresh_bapu_-_neurosurgeon-min.jpg",
    "about": "Dr. K R Suresh Bapu, Director at SIMS Hospital, Vadapalani, Chennai. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of SIMS Hospital, Vadapalani, Chennai"
    ],
    "patientCount": 10000,
    "successRate": 98.82
  },
  "dr-subhash-jangid": {
    "id": "dr-subhash-jangid",
    "name": "Dr. Subhash Jangid",
    "specialty": "Orthopaedic and Joint Replacement Surgeon",
    "designation": "Director",
    "hospital": "Fortis Memorial Research Institute, Gurgaon",
    "location": "Gurgaon",
    "experience": "25+ Years Experience",
    "education": "MBBS, MS in Orthopaedics",
    "image": "https://www.vaidam.com/sites/default/files/subhashjangid-gurgaon-7c8d42.jpg",
    "about": "Dr. Subhash Jangid, Director at Fortis Memorial Research Institute, Gurgaon. Specializes in Orthopaedic and Joint Replacement Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Orthopaedic and Joint Replacement Surgeon"
    ],
    "awards": [
      "Best doctor of Fortis Memorial Research Institute, Gurgaon"
    ],
    "patientCount": 2500,
    "successRate": 95.46
  },
  "dr-rajesh-kumar-verma": {
    "id": "dr-rajesh-kumar-verma",
    "name": "Dr. Rajesh Kumar Verma",
    "specialty": "Spine Surgeon",
    "designation": "Director",
    "hospital": "Sanar International Hospital",
    "location": "",
    "experience": "27+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._rajesh-min_0.jpg",
    "about": "Dr. Rajesh Kumar Verma, Director at Sanar International Hospital. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Sanar International Hospital"
    ],
    "patientCount": 2500,
    "successRate": 99.53
  },
  "dr-vikas-dua-pediatrician-hematologist": {
    "id": "dr-vikas-dua-pediatrician-hematologist",
    "name": "Dr. Vikas Dua",
    "specialty": "Pediatric Hematologist",
    "designation": "Director",
    "hospital": "Fortis Memorial Research Institute, Gurgaon",
    "location": "Gurgaon",
    "experience": "22+ Years Experience",
    "education": "MBBS",
    "image": "https://www.vaidam.com/sites/default/files/dr_vikas_dua-min.png",
    "about": "Dr. Vikas Dua, Director at Fortis Memorial Research Institute, Gurgaon. Specializes in Pediatric Hematologist and known for expertise in complex procedures.",
    "expertise": [
      "Pediatric Hematologist"
    ],
    "awards": [
      "Best doctor of Fortis Memorial Research Institute, Gurgaon"
    ],
    "patientCount": 8000,
    "successRate": 99.71
  },
  "dr-abdul-muniem": {
    "id": "dr-abdul-muniem",
    "name": "Dr. Abdul Muniem",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "Medanta - The Medicity, Gurgaon",
    "location": "Gurgaon",
    "experience": "22+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._abdul_0.jpg",
    "about": "Dr. Abdul Muniem, Consultant at Medanta - The Medicity, Gurgaon. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Medanta - The Medicity, Gurgaon"
    ],
    "patientCount": 7500,
    "successRate": 97.91
  },
  "dr-thiruthani-kumaran-m-m": {
    "id": "dr-thiruthani-kumaran-m-m",
    "name": "Dr. Thiruthani Kumaran M M",
    "specialty": "Cardiac Surgeon",
    "designation": "Consultant",
    "hospital": "ANOVA Institute for Regenerative Medicine",
    "location": "",
    "experience": "16+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._thiruthani_kumaran_m_m.jpg",
    "about": "Dr. Thiruthani Kumaran M M, Consultant at ANOVA Institute for Regenerative Medicine. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of ANOVA Institute for Regenerative Medicine"
    ],
    "patientCount": 5500,
    "successRate": 99.88
  },
  "dr-shanmugasundaram-d": {
    "id": "dr-shanmugasundaram-d",
    "name": "Dr. Shanmugasundaram D",
    "specialty": "Cardiac Surgeon",
    "designation": "Consultant",
    "hospital": "Apollo Specialty Hospital, OMR",
    "location": "OMR",
    "experience": "28+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._shanmugasundaram_d-min.png",
    "about": "Dr. Shanmugasundaram D, Consultant at Apollo Specialty Hospital, OMR. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Apollo Specialty Hospital, OMR"
    ],
    "patientCount": 9000,
    "successRate": 98.62
  },
  "dr-minal-v-kekatpure": {
    "id": "dr-minal-v-kekatpure",
    "name": "Dr. Minal V. Kekatpure",
    "specialty": "Paediatric Neurologist",
    "designation": "Senior Consultant",
    "hospital": "Narayana Multispeciality Hospital, Bangalore",
    "location": "Bangalore",
    "experience": "14+ Years Experience",
    "education": "MBBS, MD in Paediatrics, DM in Paediatric Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr._minal_v._kekatpure_-_pediatric_neurologist.jpg",
    "about": "Dr. Minal V. Kekatpure, Senior Consultant at Narayana Multispeciality Hospital, Bangalore. Specializes in Paediatric Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Paediatric Neurologist"
    ],
    "awards": [
      "Best doctor of Narayana Multispeciality Hospital, Bangalore"
    ],
    "patientCount": 7000,
    "successRate": 98.39
  },
  "dr-selvapandian-s": {
    "id": "dr-selvapandian-s",
    "name": "Dr. Selvapandian S",
    "specialty": "Neurosurgeon",
    "designation": "Consultant",
    "hospital": "Apollo Specialty Hospitals, Vanagaram",
    "location": "Vanagaram",
    "experience": "25+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/5_1.jpg",
    "about": "Dr. Selvapandian S, Consultant at Apollo Specialty Hospitals, Vanagaram. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Apollo Specialty Hospitals, Vanagaram"
    ],
    "patientCount": 8500,
    "successRate": 99.12
  },
  "dr-chandar-mohan-batra": {
    "id": "dr-chandar-mohan-batra",
    "name": "Dr. Chandar Mohan Batra",
    "specialty": "Endocrinologist",
    "designation": "Senior Consultant",
    "hospital": "Indraprastha Apollo Hospital, New Delhi",
    "location": "New Delhi",
    "experience": "34+ Years Experience",
    "education": "MBBS",
    "image": "https://www.vaidam.com/sites/default/files/dr._chandar_mohan_batra-min.jpg",
    "about": "Dr. Chandar Mohan Batra, Senior Consultant at Indraprastha Apollo Hospital, New Delhi. Specializes in Endocrinologist and known for expertise in complex procedures.",
    "expertise": [
      "Endocrinologist"
    ],
    "awards": [
      "Best doctor of Indraprastha Apollo Hospital, New Delhi"
    ],
    "patientCount": 5500,
    "successRate": 95.97
  },
  "dr-vikas-tandon": {
    "id": "dr-vikas-tandon",
    "name": "Dr. Vikas Tandon",
    "specialty": "Spine Surgeon",
    "designation": "Senior Consultant",
    "hospital": "Indian Spinal Injuries Center, New Delhi",
    "location": "New Delhi",
    "experience": "25+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._vikas_tandon-min_0.jpg",
    "about": "Dr. Vikas Tandon, Senior Consultant at Indian Spinal Injuries Center, New Delhi. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Indian Spinal Injuries Center, New Delhi"
    ],
    "patientCount": 10000,
    "successRate": 97.12
  },
  "dr-udgeath-dhir": {
    "id": "dr-udgeath-dhir",
    "name": "Dr. Udgeath Dhir",
    "specialty": "Cardiac Surgeon",
    "designation": "Director",
    "hospital": "Fortis Memorial Research Institute, Gurgaon",
    "location": "Gurgaon",
    "experience": "21+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._udgeath_dhir-removebg-preview-min.png",
    "about": "Dr. Udgeath Dhir, Director at Fortis Memorial Research Institute, Gurgaon. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Fortis Memorial Research Institute, Gurgaon"
    ],
    "patientCount": 2000,
    "successRate": 98.22
  },
  "dr-suhail-naseem-bukhari": {
    "id": "dr-suhail-naseem-bukhari",
    "name": "Dr. Suhail Naseem Bukhari",
    "specialty": "Vascular Surgeon",
    "designation": "Director",
    "hospital": "BLK-Max Super Speciality Hospital Delhi",
    "location": "",
    "experience": "22+ Years Experience",
    "education": "MBBS",
    "image": "https://www.vaidam.com/sites/default/files/dr._suhail_naseem_bukhari.jpg",
    "about": "Dr. Suhail Naseem Bukhari, Director at BLK-Max Super Speciality Hospital Delhi. Specializes in Vascular Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Vascular Surgeon"
    ],
    "awards": [
      "Best doctor of BLK-Max Super Speciality Hospital Delhi"
    ],
    "patientCount": 9000,
    "successRate": 99.67
  },
  "dr-kaustubh-patel": {
    "id": "dr-kaustubh-patel",
    "name": "Dr. Kaustubh Patel",
    "specialty": "Surgical Oncologist",
    "designation": "Senior Consultant",
    "hospital": "HCG Cancer Centre, Ahmedabad",
    "location": "Ahmedabad",
    "experience": "50+ Years Experience",
    "education": "MBBS",
    "image": "https://www.vaidam.com/sites/default/files/dr-kaustubh-patel.jpg",
    "about": "Dr. Kaustubh Patel, Senior Consultant at HCG Cancer Centre, Ahmedabad. Specializes in Surgical Oncologist and known for expertise in complex procedures.",
    "expertise": [
      "Surgical Oncologist"
    ],
    "awards": [
      "Best doctor of HCG Cancer Centre, Ahmedabad"
    ],
    "patientCount": 7000,
    "successRate": 97.85
  },
  "dr-manoj-kumar-goel-pulmonology-and-sleep-medicine": {
    "id": "dr-manoj-kumar-goel-pulmonology-and-sleep-medicine",
    "name": "Dr. Manoj Kumar Goel",
    "specialty": "Pulmonologist",
    "designation": "Director",
    "hospital": "Fortis Memorial Research Institute, Gurgaon",
    "location": "Gurgaon",
    "experience": "36+ Years Experience",
    "education": "MBBS, MD in Respiratory Medicine",
    "image": "https://www.vaidam.com/sites/default/webp/50/files/dr._manoj_kumar_goel-removebg-preview-min.webp",
    "about": "Dr. Manoj Kumar Goel, Director at Fortis Memorial Research Institute, Gurgaon. Specializes in Pulmonologist and known for expertise in complex procedures.",
    "expertise": [
      "Pulmonologist"
    ],
    "awards": [
      "Best doctor of Fortis Memorial Research Institute, Gurgaon"
    ],
    "patientCount": 2000,
    "successRate": 97.53
  },
  "dr-arun-saroha-neurosurgery": {
    "id": "dr-arun-saroha-neurosurgery",
    "name": "Dr. Arun Saroha",
    "specialty": "Neurosurgeon",
    "designation": "Director",
    "hospital": "Max Super Specialty Hospital, Gurgaon",
    "location": "Gurgaon",
    "experience": "29+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview45-min.png",
    "about": "Dr. Arun Saroha, Director at Max Super Specialty Hospital, Gurgaon. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Max Super Specialty Hospital, Gurgaon"
    ],
    "patientCount": 7500,
    "successRate": 99.03
  },
  "dr-mihir-bapat": {
    "id": "dr-mihir-bapat",
    "name": "Dr. Mihir Bapat",
    "specialty": "Spine Surgeon",
    "designation": "Director",
    "hospital": "Nanavati Super Specialty Hospital, Mumbai",
    "location": "Mumbai",
    "experience": "27+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._mihir_bapat_-_spine_surgeon-min.jpg",
    "about": "Dr. Mihir Bapat, Director at Nanavati Super Specialty Hospital, Mumbai. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Nanavati Super Specialty Hospital, Mumbai"
    ],
    "patientCount": 10000,
    "successRate": 98.58
  },
  "dr-ashok-vaid-leukemia-bone-marrow-transplant": {
    "id": "dr-ashok-vaid-leukemia-bone-marrow-transplant",
    "name": "Dr. Ashok Vaid",
    "specialty": "Medical Oncologist",
    "designation": "Consultant",
    "hospital": "Medanta - The Medicity, Gurgaon",
    "location": "Gurgaon",
    "experience": "41+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Medical Oncology",
    "image": "https://www.vaidam.com/sites/default/files/dr._ashok_vaid_-_medical_oncologist-min.jpg",
    "about": "Dr. Ashok Vaid, Consultant at Medanta - The Medicity, Gurgaon. Specializes in Medical Oncologist and known for expertise in complex procedures.",
    "expertise": [
      "Medical Oncologist"
    ],
    "awards": [
      "Best doctor of Medanta - The Medicity, Gurgaon"
    ],
    "patientCount": 1000,
    "successRate": 97.3
  },
  "dr-gururaj-m": {
    "id": "dr-gururaj-m",
    "name": "Dr. Gururaj Sangondimath",
    "specialty": "Spine Surgeon",
    "designation": "Senior Consultant",
    "hospital": "Indian Spinal Injuries Center, New Delhi",
    "location": "New Delhi",
    "experience": "19+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._gururaj-min.jpg",
    "about": "Dr. Gururaj Sangondimath, Senior Consultant at Indian Spinal Injuries Center, New Delhi. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Indian Spinal Injuries Center, New Delhi"
    ],
    "patientCount": 3000,
    "successRate": 98.27
  },
  "dr-senthilnathan-j": {
    "id": "dr-senthilnathan-j",
    "name": "Dr. Senthilnathan J",
    "specialty": "Neurologist",
    "designation": "Consultant",
    "hospital": "Kauvery Hospital Formely Fortis Hospital, Vadapalani",
    "location": "Vadapalani",
    "experience": "20+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/dr_senthilnathan.jpg",
    "about": "Dr. Senthilnathan J, Consultant at Kauvery Hospital Formely Fortis Hospital, Vadapalani. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Kauvery Hospital Formely Fortis Hospital, Vadapalani"
    ],
    "patientCount": 4500,
    "successRate": 96.32
  },
  "dr-raghu-m-g": {
    "id": "dr-raghu-m-g",
    "name": "Dr. Raghu M G",
    "specialty": "Cardiac Surgeon",
    "designation": "Consultant",
    "hospital": "Narayana Institute of Cardiac Sciences, Bangalore",
    "location": "Bangalore",
    "experience": "21+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._raghu_m_g_-_cardiac_surgeon.jpg",
    "about": "Dr. Raghu M G, Consultant at Narayana Institute of Cardiac Sciences, Bangalore. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Narayana Institute of Cardiac Sciences, Bangalore"
    ],
    "patientCount": 9000,
    "successRate": 99.14
  },
  "dr-rana-serbjeet-singh": {
    "id": "dr-rana-serbjeet-singh",
    "name": "Dr. Rana Serbjeet Singh",
    "specialty": "Interventional Cardiologist",
    "designation": "Consultant",
    "hospital": "Manipal Hospital, Saltlake",
    "location": "Saltlake",
    "experience": "21+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._rana_serbjeet_singh-min.png",
    "about": "Dr. Rana Serbjeet Singh, Consultant at Manipal Hospital, Saltlake. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Manipal Hospital, Saltlake"
    ],
    "patientCount": 5000,
    "successRate": 96.38
  },
  "dr-narendra-agarwal": {
    "id": "dr-narendra-agarwal",
    "name": "Dr. Narendra Agarwal",
    "specialty": "Cardiac Surgeon",
    "designation": "Consultant",
    "hospital": "Fortis Memorial Research Institute, Gurgaon",
    "location": "Gurgaon",
    "experience": "11+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview68-min.png",
    "about": "Dr. Narendra Agarwal, Consultant at Fortis Memorial Research Institute, Gurgaon. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Fortis Memorial Research Institute, Gurgaon"
    ],
    "patientCount": 4500,
    "successRate": 96.46
  },
  "dr-nilesh-maru": {
    "id": "dr-nilesh-maru",
    "name": "Dr. Nilesh Maru",
    "specialty": "Cardiac Surgeon",
    "designation": "Senior Consultant",
    "hospital": "Reliance Hospitals, Navi Mumbai",
    "location": "Navi Mumbai",
    "experience": "21+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr_nilesh_maru.jpg",
    "about": "Dr. Nilesh Maru, Senior Consultant at Reliance Hospitals, Navi Mumbai. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Reliance Hospitals, Navi Mumbai"
    ],
    "patientCount": 6000,
    "successRate": 99.56
  },
  "dr-aliasgar-behrainwala": {
    "id": "dr-aliasgar-behrainwala",
    "name": "Dr. Aliasgar Behrainwala",
    "specialty": "Cardiac Surgeon",
    "designation": "HOD",
    "hospital": "Saifee Hospital, Mumbai",
    "location": "Mumbai",
    "experience": "30+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._aliasgar_behrainwala_-_cardiovascular_and_cardiothoracic_surgeon_1.jpg",
    "about": "Dr. Aliasgar Behrainwala, HOD at Saifee Hospital, Mumbai. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Saifee Hospital, Mumbai"
    ],
    "patientCount": 5000,
    "successRate": 98.66
  },
  "dr-cibi-issac": {
    "id": "dr-cibi-issac",
    "name": "Dr. Cibi Issac",
    "specialty": "Interventional Cardiologist",
    "designation": "Consultant",
    "hospital": "VPS Lakeshore Hospital, Kochi",
    "location": "Kochi",
    "experience": "19+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._cibi_issac_-_interventional_cardiologist.jpg",
    "about": "Dr. Cibi Issac, Consultant at VPS Lakeshore Hospital, Kochi. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of VPS Lakeshore Hospital, Kochi"
    ],
    "patientCount": 6500,
    "successRate": 99.07
  },
  "dr-vijay-mohan-kohli": {
    "id": "dr-vijay-mohan-kohli",
    "name": "Dr. Vijay Mohan Kohli",
    "specialty": "Interventional Cardiologist",
    "designation": "Senior Consultant",
    "hospital": "Pushpawati Singhania Research Institute, New Delhi",
    "location": "New Delhi",
    "experience": "40+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr_vijay_mohan_kohli_0.jpg",
    "about": "Dr. Vijay Mohan Kohli, Senior Consultant at Pushpawati Singhania Research Institute, New Delhi. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Pushpawati Singhania Research Institute, New Delhi"
    ],
    "patientCount": 7000,
    "successRate": 99.77
  },
  "dr-r-r-kasliwal": {
    "id": "dr-r-r-kasliwal",
    "name": "Dr. R. R. Kasliwal",
    "specialty": "Interventional Cardiologist",
    "designation": "Chairman",
    "hospital": "Medanta - The Medicity, Gurgaon",
    "location": "Gurgaon",
    "experience": "50+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._r._r._kasliwal-chairman_cardiologist.jpg",
    "about": "Dr. R. R. Kasliwal, Chairman at Medanta - The Medicity, Gurgaon. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Medanta - The Medicity, Gurgaon"
    ],
    "patientCount": 9500,
    "successRate": 98.63
  },
  "dr-sanjay-kumar-neurosurgeon": {
    "id": "dr-sanjay-kumar-neurosurgeon",
    "name": "Dr. Sanjay Kumar",
    "specialty": "Spine Surgeon",
    "designation": "Chairman",
    "hospital": "Bhagwan Mahavir Medica Superspecialty Hospital, Ranchi",
    "location": "Ranchi",
    "experience": "28+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr_sanjay_0.jpg",
    "about": "Dr. Sanjay Kumar, Chairman at Bhagwan Mahavir Medica Superspecialty Hospital, Ranchi. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Bhagwan Mahavir Medica Superspecialty Hospital, Ranchi"
    ],
    "patientCount": 4000,
    "successRate": 98.21
  },
  "dr-charudutt-apte": {
    "id": "dr-charudutt-apte",
    "name": "Dr. Charudutt Apte",
    "specialty": "Neurosurgeon",
    "designation": "Chairman",
    "hospital": "Sahyadri Speciality Hospital Pune",
    "location": "",
    "experience": "31+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._charudutt_apte-min.jpg",
    "about": "Dr. Charudutt Apte, Chairman at Sahyadri Speciality Hospital Pune. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Sahyadri Speciality Hospital Pune"
    ],
    "patientCount": 500,
    "successRate": 99.03
  },
  "dr-pradeep-sharma": {
    "id": "dr-pradeep-sharma",
    "name": "Dr. Pradeep Sharma",
    "specialty": "Orthopaedic and Joint Replacement Surgeon",
    "designation": "Chairman",
    "hospital": "Indian Spinal Injuries Center, New Delhi",
    "location": "New Delhi",
    "experience": "33+ Years Experience",
    "education": "MBBS, MS in Orthopaedics",
    "image": "https://www.vaidam.com/sites/default/files/dr.-pradeep-sharma.jpg",
    "about": "Dr. Pradeep Sharma, Chairman at Indian Spinal Injuries Center, New Delhi. Specializes in Orthopaedic and Joint Replacement Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Orthopaedic and Joint Replacement Surgeon"
    ],
    "awards": [
      "Best doctor of Indian Spinal Injuries Center, New Delhi"
    ],
    "patientCount": 500,
    "successRate": 96.31
  },
  "dr-rajiv-parakh-vascular-surgery": {
    "id": "dr-rajiv-parakh-vascular-surgery",
    "name": "Dr. Rajiv Parakh",
    "specialty": "Vascular Surgeon",
    "designation": "Chairman",
    "hospital": "Medanta - The Medicity, Gurgaon",
    "location": "Gurgaon",
    "experience": "42+ Years Experience",
    "education": "MBBS",
    "image": "https://www.vaidam.com/sites/default/webp/50/files/dr_rajiv_parakh.webp",
    "about": "Dr. Rajiv Parakh, Chairman at Medanta - The Medicity, Gurgaon. Specializes in Vascular Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Vascular Surgeon"
    ],
    "awards": [
      "Best doctor of Medanta - The Medicity, Gurgaon"
    ],
    "patientCount": 10000,
    "successRate": 96.81
  },
  "dr-kunal-hazari": {
    "id": "dr-kunal-hazari",
    "name": "Dr. Kunal Hazari",
    "specialty": "Cardiac Surgeon",
    "designation": "Chairman",
    "hospital": "Bhagwan Mahavir Medica Superspecialty Hospital, Ranchi",
    "location": "Ranchi",
    "experience": "23+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr_kunal_0.jpg",
    "about": "Dr. Kunal Hazari, Chairman at Bhagwan Mahavir Medica Superspecialty Hospital, Ranchi. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Bhagwan Mahavir Medica Superspecialty Hospital, Ranchi"
    ],
    "patientCount": 3000,
    "successRate": 98.03
  },
  "dr-kunal-sarkar": {
    "id": "dr-kunal-sarkar",
    "name": "Dr. Kunal Sarkar",
    "specialty": "Cardiac Surgeon",
    "designation": "Chairman",
    "hospital": "Medica Superspecialty Hospital",
    "location": "",
    "experience": "28+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/kunal-sarkar-500x460.jpg",
    "about": "Dr. Kunal Sarkar, Chairman at Medica Superspecialty Hospital. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Medica Superspecialty Hospital"
    ],
    "patientCount": 4000,
    "successRate": 99.82
  },
  "dr-prakash-p-kotwal": {
    "id": "dr-prakash-p-kotwal",
    "name": "Dr. Prakash P kotwal",
    "specialty": "Spine Surgeon",
    "designation": "Chairman",
    "hospital": "Pushpawati Singhania Research Institute, New Delhi",
    "location": "New Delhi",
    "experience": "43+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/kotwal.jpg",
    "about": "Dr. Prakash P kotwal, Chairman at Pushpawati Singhania Research Institute, New Delhi. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Pushpawati Singhania Research Institute, New Delhi"
    ],
    "patientCount": 7000,
    "successRate": 97.25
  },
  "dr-purvez-grant": {
    "id": "dr-purvez-grant",
    "name": "Dr. Purvez Grant",
    "specialty": "Cardiac Surgeon",
    "designation": "Chairman",
    "hospital": "Ruby Hall Clinic, Pune",
    "location": "Pune",
    "experience": "33+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_-_2021-11-26t130014.615-min.png",
    "about": "Dr. Purvez Grant, Chairman at Ruby Hall Clinic, Pune. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Ruby Hall Clinic, Pune"
    ],
    "patientCount": 7500,
    "successRate": 96.24
  },
  "dr-ashok-bhanage": {
    "id": "dr-ashok-bhanage",
    "name": "Dr Ashok Bhanage",
    "specialty": "Neurosurgeon",
    "designation": "Chairman",
    "hospital": "Ruby Hall Clinic, Pune",
    "location": "Pune",
    "experience": "38+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_-_2021-11-30t125341.786-min.png",
    "about": "Dr Ashok Bhanage, Chairman at Ruby Hall Clinic, Pune. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Ruby Hall Clinic, Pune"
    ],
    "patientCount": 500,
    "successRate": 95.4
  },
  "dr-purshotam-lal": {
    "id": "dr-purshotam-lal",
    "name": "Dr. Purshotam Lal",
    "specialty": "Interventional Cardiologist",
    "designation": "Chairman",
    "hospital": "Metro Hospital and Heart Institute, Noida Sector 13",
    "location": "Noida Sector 13",
    "experience": "46+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._purshotam-min.jpg",
    "about": "Dr. Purshotam Lal, Chairman at Metro Hospital and Heart Institute, Noida Sector 13. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Metro Hospital and Heart Institute, Noida Sector 13"
    ],
    "patientCount": 6000,
    "successRate": 95.76
  },
  "dr-manmohan-singh-neurosurgeon": {
    "id": "dr-manmohan-singh-neurosurgeon",
    "name": "Dr. Manmohan Singh",
    "specialty": "Neurosurgeon",
    "designation": "Chairman",
    "hospital": "Paras Hospitals, Gurgaon",
    "location": "Gurgaon",
    "experience": "23+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr_manmohan_singh-min.jpg",
    "about": "Dr. Manmohan Singh, Chairman at Paras Hospitals, Gurgaon. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Paras Hospitals, Gurgaon"
    ],
    "patientCount": 6500,
    "successRate": 95.8
  },
  "dr-mahesh-wadhwani": {
    "id": "dr-mahesh-wadhwani",
    "name": "Dr. Mahesh  Wadhwani",
    "specialty": "Cardiac Surgeon",
    "designation": "Chief",
    "hospital": "Fortis Hospital, Manesar, Gurgaon",
    "location": "Gurgaon",
    "experience": "15+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._mahesh-min.jpg",
    "about": "Dr. Mahesh  Wadhwani, Chief at Fortis Hospital, Manesar, Gurgaon. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Fortis Hospital, Manesar, Gurgaon"
    ],
    "patientCount": 10000,
    "successRate": 95.39
  },
  "dr-anil-kumar-mulpur": {
    "id": "dr-anil-kumar-mulpur",
    "name": "Dr. Anil Kumar Mulpur",
    "specialty": "Cardiac Surgeon",
    "designation": "Chief",
    "hospital": "KIMS Hospital Kondapur, Hyderabad",
    "location": "Hyderabad",
    "experience": "29+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._anil-min_1.jpg",
    "about": "Dr. Anil Kumar Mulpur, Chief at KIMS Hospital Kondapur, Hyderabad. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of KIMS Hospital Kondapur, Hyderabad"
    ],
    "patientCount": 1000,
    "successRate": 99.52
  },
  "dr-p-n-rao": {
    "id": "dr-p-n-rao",
    "name": "Dr. P. N. Rao",
    "specialty": "Cardiac Surgeon",
    "designation": "Chief",
    "hospital": "Sunshine Hospitals, Hyderabad",
    "location": "Hyderabad",
    "experience": "29+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._p_n_rao-min.jpg",
    "about": "Dr. P. N. Rao, Chief at Sunshine Hospitals, Hyderabad. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Sunshine Hospitals, Hyderabad"
    ],
    "patientCount": 10000,
    "successRate": 95.25
  },
  "dr-balbir-kalra": {
    "id": "dr-balbir-kalra",
    "name": "Dr. Balbir Kalra",
    "specialty": "Interventional Cardiologist",
    "designation": "Chief",
    "hospital": "Artemis Hospital, Gurgaon",
    "location": "Gurgaon",
    "experience": "26+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr-balbir-kalra.jpeg",
    "about": "Dr. Balbir Kalra, Chief at Artemis Hospital, Gurgaon. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Artemis Hospital, Gurgaon"
    ],
    "patientCount": 7500,
    "successRate": 98.67
  },
  "dr-sai-sudhakar": {
    "id": "dr-sai-sudhakar",
    "name": "Dr. Sai Sudhakar",
    "specialty": "Interventional Cardiologist",
    "designation": "Chief",
    "hospital": "Gleneagles Hospital, Lakdikapul, Hyderabad",
    "location": "Hyderabad",
    "experience": "24+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/drsaisudhakar.jpg",
    "about": "Dr. Sai Sudhakar, Chief at Gleneagles Hospital, Lakdikapul, Hyderabad. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Gleneagles Hospital, Lakdikapul, Hyderabad"
    ],
    "patientCount": 7500,
    "successRate": 95.18
  },
  "dr-rahul-mehrotra": {
    "id": "dr-rahul-mehrotra",
    "name": "Dr. Rahul Mehrotra",
    "specialty": "Cardiology",
    "designation": "Chief",
    "hospital": "Artemis Hospital, Gurgaon",
    "location": "Gurgaon",
    "experience": "24+ Years Experience",
    "education": "MBBS",
    "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview75-min.png",
    "about": "Dr. Rahul Mehrotra, Chief at Artemis Hospital, Gurgaon. Specializes in Cardiology and known for expertise in complex procedures.",
    "expertise": [
      "Cardiology"
    ],
    "awards": [
      "Best doctor of Artemis Hospital, Gurgaon"
    ],
    "patientCount": 7500,
    "successRate": 98.91
  },
  "dr-ganesh-kumar-av": {
    "id": "dr-ganesh-kumar-av",
    "name": "Dr. Ganesh Kumar AV",
    "specialty": "Cardiology",
    "designation": "Chief",
    "hospital": "Dr. L H Hiranandani Hospital, Mumbai",
    "location": "Mumbai",
    "experience": "20+ Years Experience",
    "education": "MBBS",
    "image": "https://www.vaidam.com/sites/default/files/dr_ganesh_av_1-min.jpg",
    "about": "Dr. Ganesh Kumar AV, Chief at Dr. L H Hiranandani Hospital, Mumbai. Specializes in Cardiology and known for expertise in complex procedures.",
    "expertise": [
      "Cardiology"
    ],
    "awards": [
      "Best doctor of Dr. L H Hiranandani Hospital, Mumbai"
    ],
    "patientCount": 6000,
    "successRate": 99.74
  },
  "dr-ravi-kumar-aluri": {
    "id": "dr-ravi-kumar-aluri",
    "name": "Dr. Ravi Kumar Aluri",
    "specialty": "Interventional Cardiologist",
    "designation": "Chief",
    "hospital": "KIMS Hospital Kondapur, Hyderabad",
    "location": "Hyderabad",
    "experience": "26+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._ravi-min_2.jpg",
    "about": "Dr. Ravi Kumar Aluri, Chief at KIMS Hospital Kondapur, Hyderabad. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of KIMS Hospital Kondapur, Hyderabad"
    ],
    "patientCount": 500,
    "successRate": 95.85
  },
  "dr-upendra-kaul-cardiology": {
    "id": "dr-upendra-kaul-cardiology",
    "name": "Dr. Upendra Kaul",
    "specialty": "Interventional Cardiologist",
    "designation": "Chief",
    "hospital": "Batra Hospital & Medical Research Centre, New Delhi",
    "location": "New Delhi",
    "experience": "44+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr-upendra-kaul-cardiology.jpg",
    "about": "Dr. Upendra Kaul, Chief at Batra Hospital & Medical Research Centre, New Delhi. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Batra Hospital & Medical Research Centre, New Delhi"
    ],
    "patientCount": 5500,
    "successRate": 96.87
  },
  "dr-ramesh-arora": {
    "id": "dr-ramesh-arora",
    "name": "Dr. Ramesh Arora",
    "specialty": "Interventional Cardiologist",
    "designation": "Chief",
    "hospital": "Metro Hospital & Cancer Institute, Preet Vihar, New Delhi",
    "location": "New Delhi",
    "experience": "44+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr._ramesh_arora-min.jpg",
    "about": "Dr. Ramesh Arora, Chief at Metro Hospital & Cancer Institute, Preet Vihar, New Delhi. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Metro Hospital & Cancer Institute, Preet Vihar, New Delhi"
    ],
    "patientCount": 3000,
    "successRate": 97.54
  },
  "dr-ksankara-subramanian": {
    "id": "dr-ksankara-subramanian",
    "name": "Dr. K.Sankara Subramanian",
    "specialty": "Neurologist",
    "designation": "Chief",
    "hospital": "Billroth Hospital, Chennai",
    "location": "Chennai",
    "experience": "18+ Years Experience",
    "education": "MBBS, MD in Neurology, DM in Neurology",
    "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_-_2021-10-19t185359.814-min.png",
    "about": "Dr. K.Sankara Subramanian, Chief at Billroth Hospital, Chennai. Specializes in Neurologist and known for expertise in complex procedures.",
    "expertise": [
      "Neurologist"
    ],
    "awards": [
      "Best doctor of Billroth Hospital, Chennai"
    ],
    "patientCount": 9500,
    "successRate": 95.78
  },
  "dr-mazhar-husain": {
    "id": "dr-mazhar-husain",
    "name": "Dr. Mazhar Husain",
    "specialty": "Neurosurgeon",
    "designation": "Chief",
    "hospital": "Sahara Hospital Lucknow",
    "location": "",
    "experience": "36+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._mazhar_husain-min.jpg",
    "about": "Dr. Mazhar Husain, Chief at Sahara Hospital Lucknow. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Sahara Hospital Lucknow"
    ],
    "patientCount": 500,
    "successRate": 99.69
  },
  "dr-n-k-venkataramana": {
    "id": "dr-n-k-venkataramana",
    "name": "Dr. N. K. Venkataramana",
    "specialty": "Neurosurgeon",
    "designation": "Chief",
    "hospital": "Brains Neuro Spine Centre, Bangalore",
    "location": "Bangalore",
    "experience": "38+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._n._k._venkataramana.jpg",
    "about": "Dr. N. K. Venkataramana, Chief at Brains Neuro Spine Centre, Bangalore. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Brains Neuro Spine Centre, Bangalore"
    ],
    "patientCount": 4000,
    "successRate": 97.75
  },
  "dr-ishwarchand-premsagar": {
    "id": "dr-ishwarchand-premsagar",
    "name": "Dr. Ishwarchand Premsagar",
    "specialty": "Neurosurgeon",
    "designation": "Chief",
    "hospital": "Rajiv Gandhi Cancer Institute and Research Centre, New Delhi",
    "location": "New Delhi",
    "experience": "32+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._ishwarchand-min.jpg",
    "about": "Dr. Ishwarchand Premsagar, Chief at Rajiv Gandhi Cancer Institute and Research Centre, New Delhi. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Rajiv Gandhi Cancer Institute and Research Centre, New Delhi"
    ],
    "patientCount": 4500,
    "successRate": 98.02
  },
  "prof-anupam-wakhlu": {
    "id": "prof-anupam-wakhlu",
    "name": "Prof. Anupam Wakhlu",
    "specialty": "Rheumatologist",
    "designation": "Chief",
    "hospital": "Apollo Medics Super Speciality Hospital, Lucknow",
    "location": "Lucknow",
    "experience": "31+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Rheumatology",
    "image": "https://www.vaidam.com/sites/default/files/prof._anupam_wakhlu-min.jpg",
    "about": "Prof. Anupam Wakhlu, Chief at Apollo Medics Super Speciality Hospital, Lucknow. Specializes in Rheumatologist and known for expertise in complex procedures.",
    "expertise": [
      "Rheumatologist"
    ],
    "awards": [
      "Best doctor of Apollo Medics Super Speciality Hospital, Lucknow"
    ],
    "patientCount": 5000,
    "successRate": 97.38
  },
  "dr-h-s-chhabra-spine-surgeries": {
    "id": "dr-h-s-chhabra-spine-surgeries",
    "name": "Dr. H. S. Chhabra",
    "specialty": "Spine Surgeon",
    "designation": "Chief",
    "hospital": "Sri Balaji Action Medical Institute New Delhi",
    "location": "",
    "experience": "38+ Years Experience",
    "education": "MBBS, MS in Orthopaedics, Fellowship in Spine Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._hs_chabra-min.jpg",
    "about": "Dr. H. S. Chhabra, Chief at Sri Balaji Action Medical Institute New Delhi. Specializes in Spine Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Spine Surgeon"
    ],
    "awards": [
      "Best doctor of Sri Balaji Action Medical Institute New Delhi"
    ],
    "patientCount": 8000,
    "successRate": 95.67
  },
  "dr-ravi-s-batra": {
    "id": "dr-ravi-s-batra",
    "name": "Dr. Ravi S. Batra",
    "specialty": "Dentist",
    "designation": "Consultant",
    "hospital": "Fortis Memorial Research Institute, Gurgaon",
    "location": "Gurgaon",
    "experience": "22+ Years Experience",
    "education": "MBBS",
    "image": "https://www.vaidam.com/sites/default/files/dr._ravi_s._batra-min.jpg",
    "about": "Dr. Ravi S. Batra, Consultant at Fortis Memorial Research Institute, Gurgaon. Specializes in Dentist and known for expertise in complex procedures.",
    "expertise": [
      "Dentist"
    ],
    "awards": [
      "Best doctor of Fortis Memorial Research Institute, Gurgaon"
    ],
    "patientCount": 10000,
    "successRate": 98.75
  },
  "dr-parul-gupta-khanna": {
    "id": "dr-parul-gupta-khanna",
    "name": "Dr. Parul Gupta Khanna",
    "specialty": "Infertility Specialist",
    "designation": "Consultant",
    "hospital": "Nova IVF Fertility, Gurgaon",
    "location": "Gurgaon",
    "experience": "9+ Years Experience",
    "education": "MBBS",
    "image": "https://www.vaidam.com/sites/default/files/dr._parul_gupta_1.png",
    "about": "Dr. Parul Gupta Khanna, Consultant at Nova IVF Fertility, Gurgaon. Specializes in Infertility Specialist and known for expertise in complex procedures.",
    "expertise": [
      "Infertility Specialist"
    ],
    "awards": [
      "Best doctor of Nova IVF Fertility, Gurgaon"
    ],
    "patientCount": 4000,
    "successRate": 99.1
  },
  "dr-sumit-sinha": {
    "id": "dr-sumit-sinha",
    "name": "Dr. Sumit Sinha",
    "specialty": "Neurosurgeon",
    "designation": "Director",
    "hospital": "Paras Hospitals, Gurgaon",
    "location": "Gurgaon",
    "experience": "31+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr.-sumit-sinha-neurosurgeon.jpg",
    "about": "Dr. Sumit Sinha, Director at Paras Hospitals, Gurgaon. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Paras Hospitals, Gurgaon"
    ],
    "patientCount": 6500,
    "successRate": 97.81
  },
  "dr-anupam-mehrotra": {
    "id": "dr-anupam-mehrotra",
    "name": "Dr. Anupam Mehrotra",
    "specialty": "Interventional Cardiologist",
    "designation": "Consultant",
    "hospital": "Chandan Hospital, Lucknow",
    "location": "Lucknow",
    "experience": "14+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr_anupam.jpg",
    "about": "Dr. Anupam Mehrotra, Consultant at Chandan Hospital, Lucknow. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Chandan Hospital, Lucknow"
    ],
    "patientCount": 9500,
    "successRate": 95.34
  },
  "dr-sudhir-suryakant-shetkar": {
    "id": "dr-sudhir-suryakant-shetkar",
    "name": "Dr. Sudhir Suryakant Shetkar",
    "specialty": "Interventional Cardiologist",
    "designation": "Consultant",
    "hospital": "Medicover Hospitals, Nashik",
    "location": "Nashik",
    "experience": "15+ Years Experience",
    "education": "MBBS, MD in Internal Medicine, DM in Cardiology, Fellowship in Interventional Cardiology",
    "image": "https://www.vaidam.com/sites/default/files/dr_sudhir_suryakant_shetkar.png",
    "about": "Dr. Sudhir Suryakant Shetkar, Consultant at Medicover Hospitals, Nashik. Specializes in Interventional Cardiologist and known for expertise in complex procedures.",
    "expertise": [
      "Interventional Cardiologist"
    ],
    "awards": [
      "Best doctor of Medicover Hospitals, Nashik"
    ],
    "patientCount": 10000,
    "successRate": 95.53
  },
  "dr-kamal-verma-neurosurgery": {
    "id": "dr-kamal-verma-neurosurgery",
    "name": "Dr. Kamal Verma",
    "specialty": "Neurosurgeon",
    "designation": "Director",
    "hospital": "Fortis Escorts Hospital, Faridabad",
    "location": "Faridabad",
    "experience": "20+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Neurosurgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._kamal_verma-min.jpg",
    "about": "Dr. Kamal Verma, Director at Fortis Escorts Hospital, Faridabad. Specializes in Neurosurgeon and known for expertise in complex procedures.",
    "expertise": [
      "Neurosurgeon"
    ],
    "awards": [
      "Best doctor of Fortis Escorts Hospital, Faridabad"
    ],
    "patientCount": 1500,
    "successRate": 97.78
  },
  "dr-charudatta-chaudhari": {
    "id": "dr-charudatta-chaudhari",
    "name": "Dr. Charudatta Chaudhari",
    "specialty": "Aesthetics and Plastic Surgeon",
    "designation": "Consultant",
    "hospital": "Apollo Hospitals, Mumbai",
    "location": "Mumbai",
    "experience": "35+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Plastic Surgery",
    "image": "https://www.vaidam.com/sites/default/files/charudutt_chaudhari.jpg",
    "about": "Dr. Charudatta Chaudhari, Consultant at Apollo Hospitals, Mumbai. Specializes in Aesthetics and Plastic Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Aesthetics and Plastic Surgeon"
    ],
    "awards": [
      "Best doctor of Apollo Hospitals, Mumbai"
    ],
    "patientCount": 9000,
    "successRate": 99.17
  },
  "dr-kshitij-dubey": {
    "id": "dr-kshitij-dubey",
    "name": "Dr. Kshitij Dubey",
    "specialty": "Cardiac Surgeon",
    "designation": "Consultant",
    "hospital": "Apollo Hospital, Indore",
    "location": "Indore",
    "experience": "22+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/dr._kshitij_dubey.jpg",
    "about": "Dr. Kshitij Dubey, Consultant at Apollo Hospital, Indore. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Apollo Hospital, Indore"
    ],
    "patientCount": 7000,
    "successRate": 98.83
  },
  "dr-rahul-r-gupta": {
    "id": "dr-rahul-r-gupta",
    "name": "Dr. Rahul R Gupta",
    "specialty": "Cardiac Surgeon",
    "designation": "Consultant",
    "hospital": "Apollo Hospitals, Mumbai",
    "location": "Mumbai",
    "experience": "21+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/rahul_gupta.jpg",
    "about": "Dr. Rahul R Gupta, Consultant at Apollo Hospitals, Mumbai. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Apollo Hospitals, Mumbai"
    ],
    "patientCount": 9500,
    "successRate": 96.5
  },
  "dr-divakar-bhat": {
    "id": "dr-divakar-bhat",
    "name": "Dr. Divakar Bhat",
    "specialty": "Cardiac Surgeon",
    "designation": "Consultant",
    "hospital": "Aster RV Hospital (J P Nagar) Bangalore",
    "location": "",
    "experience": "34+ Years Experience",
    "education": "MBBS, MS in General Surgery, MCh in Cardiac Surgery",
    "image": "https://www.vaidam.com/sites/default/files/divakar_1-min.jpg",
    "about": "Dr. Divakar Bhat, Consultant at Aster RV Hospital (J P Nagar) Bangalore. Specializes in Cardiac Surgeon and known for expertise in complex procedures.",
    "expertise": [
      "Cardiac Surgeon"
    ],
    "awards": [
      "Best doctor of Aster RV Hospital (J P Nagar) Bangalore"
    ],
    "patientCount": 1000,
    "successRate": 96.9
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
