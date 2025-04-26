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
  },
  "dr-dheeraj-garg": {
    id: "dr-dheeraj-garg",
    name: "Dr. Dheeraj Garg",
    specialty: "Interventional Cardiologist",
    designation: "Senior Consultant",
    hospital: "",
    location: "New Delhi",
    experience: "20+ Years Experience",
    education: "MBBS, MD, DM (Cardiology)",
    image: "https://www.vaidam.com/sites/default/files/dr._dheeraj_garg.jpg",
    about: "Dr. Dheeraj Garg, Senior Consultant Interventional Cardiologist in New Delhi, India, with over 15 years of experience. Specializes in Adult Intervention Cardiology and Cardiac Electrophysiology, performing procedures such as Coronary Angiography, Angioplasty, Pacemaker Implantation, and Cardiac Ablation. Known for expertise in complex cardiac interventions.",
    expertise: [
      "Interventional Cardiology",
      "Cardiac Electrophysiology",
      "Coronary Angiography",
      "Pacemaker Implantation"
    ],
    awards: [
      "10,000 Coronary Angiograms performed",
      "200 Permanent Pacemakers implanted",
      "200 Supraventricular Arrhythmias treated"
    ],
    patientCount: 10000,
    successRate: 98.5
  },
  "dr-subodh-chandra-pande": {
    id: "dr-subodh-chandra-pande",
    name: "Dr. Subodh Chandra Pande",
    specialty: "Radiation Oncologist",
    designation: "Consultant",
    hospital: "Artemis Hospital, Gurgaon",
    location: "Gurgaon",
    experience: "10+ Years Experience",
    education: "MBBS, MD, DMRT",
    image: "https://www.vaidam.com/sites/default/files/dr-subhash-chandra-pande-radiation-oncology.jpg",
    about: "Dr. Subodh Chandra Pande, a renowned Radiation Oncologist at Artemis Hospital, Gurgaon, India, boasts nearly five decades of experience. He is a pioneer in Image-Guided Radiation Therapy and pediatric oncology, with specialized expertise in Head & Neck, CNS, Childhood, and Prostate Cancers. Dr. Pande led the installation of Rajasthan's first Linear Accelerator.",
    expertise: [
      "Radiation Oncology",
      "Image-Guided Therapy",
      "Pediatric Oncology",
      "Head & Neck Cancers"
    ],
    awards: [
      "10+ years at Artemis Hospital",
      "Leadership in Rajasthan",
      "Specialized Expertise in Radiation Oncology"
    ],
    patientCount: 1000,
    successRate: 95.0
  },
  "dr-anmol-nagaraj": {
    id: "dr-anmol-nagaraj",
    name: "Dr. Anmol Nagaraj",
    specialty: "Neurosurgeon",
    designation: "Consultant",
    hospital: "Sparsh Hospital (Yeshwanthpur) Bangalore",
    location: "Bangalore",
    experience: "14+ Years Experience",
    education: "M.Ch. Neurosurgery - Manipal Academy of Higher Education",
    image: "https://www.vaidam.com/sites/default/files/dr._anmol_nagaraj-min.jpg",
    about: "Dr. Anmol Nagaraj is a Consultant Neurosurgeon with over 10 years of experience. Graduated from JJM Medical College, Davangere, he completed his M.Ch. in Neurosurgery at Manipal Academy of Higher Education. Specializing in Brain Tumor Surgery, Spine Surgery, and more, he is dedicated to advancing neurosurgical care.",
    expertise: [
      "Neurosurgery",
      "Brain Tumor Surgery",
      "Radiosurgery (Cyberknife, Gamma Knife)",
      "Spine Surgery"
    ],
    awards: [
      "10+ years experience",
      "M.Ch. Neurosurgery, 2017",
      "Published several papers"
    ],
    patientCount: 1000,
    successRate: 97.0
  },
  "dr-mahesh-ghogare": {
    id: "dr-mahesh-ghogare",
    name: "Dr. Mahesh Ghogare",
    specialty: "Interventional Cardiologist",
    designation: "Consultant",
    hospital: "Reliance Hospitals, Navi Mumbai",
    location: "Mumbai",
    experience: "14+ Years Experience",
    education: "DM in Cardiology - Lokmanya Tilak Municipal Medical College, Mumbai",
    image: "https://www.vaidam.com/sites/default/files/dr_mahesh.jpg",
    about: "Dr. Mahesh Ghogare, Consultant Interventional Cardiologist in Mumbai, India, with 10+ years of experience. Specializes in Coronary Angiography, Angioplasty, Peripheral Vascular Interventions, Cardiac Catheterization, Valvular Heart Diseases, and more. Graduated from Government Medical College, Nagpur, and holds DM in Cardiology from Lokmanya Tilak Municipal Medical College, Mumbai. A member of various prestigious medical associations.",
    expertise: [
      "Interventional Cardiology",
      "Cardiac Catheterisation",
      "Valvular Heart Diseases",
      "Permanent Pacemakers"
    ],
    awards: [
      "10+ years experience",
      "Member of Medical Council",
      "Guest speaker at conferences"
    ],
    patientCount: 500,
    successRate: 96.5
  },
  "dr-amit-sharma": {
    id: "dr-amit-sharma",
    name: "Dr. Amit Sharma",
    specialty: "Spine Surgeon",
    designation: "Consultant",
    hospital: "Saifee Hospital, Mumbai",
    location: "Mumbai",
    experience: "14+ Years Experience",
    education: "Pediatric orthopedics training from Children's Hospital, New Orleans, USA; Orthopedic surgery training from KEM Hospital, Mumbai",
    image: "https://www.vaidam.com/sites/default/files/dr._amit_sharma_-_spine_surgeon.jpg",
    about: "Dr. Amit Sharma, a Consultant Spine Surgeon at Saifee Hospital, Mumbai, specializes in various spine surgeries with over 10 years of experience. He is actively involved in research and has presented work in national and international meetings, with publications in international journals.",
    expertise: [
      "Cervical spine surgery",
      "Minimally invasive spine surgery",
      "Spinal deformity correction",
      "Revision spine surgeries"
    ],
    awards: [
      "10+ years experience",
      "Specializes in spine surgery",
      "Published in international journals"
    ],
    patientCount: 500,
    successRate: 98.0
  },
  "dr-arvind-prasad": {
    id: "dr-arvind-prasad",
    name: "Dr. Arvind Prasad",
    specialty: "Interventional Cardiologist",
    designation: "Consultant",
    hospital: "",
    location: "Bangalore",
    experience: "14+ Years Experience",
    education: "MBBS - Adichunchanagiri Institute of Medical Sciences; MD in Medicine - Government Medical College VIMS Bellary; DM in cardiology - Sri Jayadeva Institute of Cardiovascular Sciences & Research",
    image: "https://www.vaidam.com/sites/default/files/dr._arvind_prasad_-_cardiologist.jpg",
    about: "Dr. Arvind Prasad, an experienced Interventional Cardiologist in Bangalore, India, specializes in emergency and elective cardiac interventions such as primary PCI, Pacemaker Implantation, and Peripheral Interventions. With over 10 years of experience, he is affiliated with various medical associations and has multiple publications in national journals.",
    expertise: [
      "Interventional Cardiology",
      "Emergency Cardiac Interventions",
      "Elective Cardiac Interventions",
      "Peripheral Interventions"
    ],
    awards: [
      "10+ years of experience",
      "Member of various medical associations",
      "Multiple publications in national journals"
    ],
    patientCount: 1000,
    successRate: 97.5
  },
  "dr-yadhu-k-lokanath": {
    id: "dr-yadhu-k-lokanath",
    name: "Dr. Yadhu K Lokanath",
    specialty: "Spine Surgeon",
    designation: "Consultant",
    hospital: "Aster RV Hospital (J P Nagar) Bangalore",
    location: "Bangalore",
    experience: "14+ Years Experience",
    education: "MCh Neurosurgery J.N Medical College",
    image: "https://www.vaidam.com/sites/default/files/dr-yadhu-k-lokanath.jpg",
    about: "Dr. Yadhu K Lokanath, a Consultant Spine Surgeon based in Bangalore, India, specializes in spinal conditions across all age groups. With over 10 years of experience, he offers expertise in lateral access surgery, minimally invasive surgery, endoscopic spine surgery, and treatment of various brain and spine disorders.",
    expertise: [
      "Spine Surgeon",
      "Neurosurgeon",
      "Minimally Invasive Spine Surgeon",
      "Trauma Surgeon"
    ],
    awards: [
      "10+ years of experience",
      "National and international publications",
      "Guest speaker worldwide"
    ],
    patientCount: 1000,
    successRate: 96.0
  },
  "dr-harsh-bhardwaj": {
    id: "dr-harsh-bhardwaj",
    name: "Dr. Harsh Bhardwaj",
    specialty: "Neurologist",
    designation: "Consultant",
    hospital: "Aakash Healthcare Super Speciality Hospital, Dwarka, New Delhi",
    location: "New Delhi",
    experience: "13+ Years Experience",
    education: "MBBS - Vardhman Mahavir Medical College 2011; MD in General Medicine - Same college 2014",
    image: "https://www.vaidam.com/sites/default/files/dr-harsh-bhardwaj.jpg",
    about: "Dr. Harsh Bhardwaj, a Consultant Neurologist based in New Delhi, India, brings 12 years of experience in treating over 10,000 patients with neurological disorders. Specializing in multiple sclerosis, autoimmune disorders, epilepsy, stroke, dementia, migraine, and movement disorders, he excels in thrombolytic therapy for stroke and BOTOX therapy for various neurological conditions.",
    expertise: [
      "Neurology",
      "Multiple Sclerosis",
      "Epilepsy",
      "Stroke"
    ],
    awards: [
      "12 years experience",
      "10,000+ patients treated",
      "Vast stroke management experience"
    ],
    patientCount: 10000,
    successRate: 95.5
  },
  "dr-anurag-sihag": {
    id: "dr-anurag-sihag",
    name: "Dr. Anurag Sihag",
    specialty: "Neurosurgeon",
    designation: "Consultant",
    hospital: "Shalby Hospital",
    location: "Jaipur",
    experience: "12+ Years Experience",
    education: "MBBS, MS, MCh (Neurosurgery)",
    image: "https://www.vaidam.com/sites/default/files/dr_anurag_sihag.png",
    about: "Dr. Anurag Sihag is a skilled Neurosurgeon with over 12 years of experience. He specializes in complex brain and spine surgeries, with a focus on minimally invasive techniques and advanced neurosurgical procedures.",
    expertise: [
      "Brain Tumor Surgery",
      "Spine Surgery",
      "Minimally Invasive Neurosurgery",
      "Neurotrauma"
    ],
    awards: [
      "12+ years of experience",
      "Expert in complex neurosurgical procedures",
      "Specialized training in advanced techniques"
    ],
    patientCount: 5000,
    successRate: 98.5
  },
  "dr-rahul-jain-plastic-surgeon": {
    id: "dr-rahul-jain-plastic-surgeon",
    name: "Dr. Rahul Jain",
    specialty: "Aesthetics and Plastic Surgeon",
    designation: "Consultant",
    hospital: "Fortis Hospital",
    location: "Manesar, Gurgaon",
    experience: "12+ Years Experience",
    education: "MBBS, MS, MCh (Plastic Surgery)",
    image: "https://d1ea147o02h74h.cloudfront.net/dr_rahul_jain.jpg",
    about: "Dr. Rahul Jain is a renowned Aesthetics and Plastic Surgeon with extensive experience in cosmetic and reconstructive procedures. He is known for his expertise in facial aesthetics, body contouring, and reconstructive surgeries.",
    expertise: [
      "Facial Aesthetics",
      "Body Contouring",
      "Reconstructive Surgery",
      "Cosmetic Procedures"
    ],
    awards: [
      "12+ years of experience",
      "Specialized in aesthetic procedures",
      "Expert in reconstructive surgery"
    ],
    patientCount: 4000,
    successRate: 97.8
  },
  "dr-ashok-kumar-p": {
    id: "dr-ashok-kumar-p",
    name: "Dr. Ashok Kumar P",
    specialty: "Interventional Cardiologist",
    designation: "Consultant",
    hospital: "",
    location: "",
    experience: "16+ Years Experience",
    education: "MBBS, MD, DM (Cardiology)",
    image: "https://www.vaidam.com/sites/default/files/dr._ashok_kumar_p_-_cardiologist.jpg",
    about: "Dr. Ashok Kumar P is an experienced Interventional Cardiologist with over 16 years of practice. He specializes in complex cardiac interventions and has performed numerous successful procedures in interventional cardiology.",
    expertise: [
      "Interventional Cardiology",
      "Complex Coronary Interventions",
      "Structural Heart Disease",
      "Cardiac Catheterization"
    ],
    awards: [
      "16+ years of experience",
      "Expert in complex cardiac interventions",
      "Specialized in structural heart disease"
    ],
    patientCount: 8000,
    successRate: 98.2
  },
  "dr-ved-prakash": {
    id: "dr-ved-prakash",
    name: "Dr. Ved Prakash",
    specialty: "Interventional Cardiologist",
    designation: "Consultant",
    hospital: "Sarvodaya Hospital",
    location: "Faridabad",
    experience: "12+ Years Experience",
    education: "MBBS, MD, DM (Cardiology)",
    image: "https://www.vaidam.com/sites/default/files/dr._ved_prakash-removebg-preview-min_0.png",
    about: "Dr. Ved Prakash is a skilled Interventional Cardiologist with extensive experience in cardiac interventions. He is known for his expertise in complex coronary procedures and has successfully treated numerous patients with cardiac conditions.",
    expertise: [
      "Interventional Cardiology",
      "Coronary Angiography",
      "Angioplasty",
      "Cardiac Interventions"
    ],
    awards: [
      "12+ years of experience",
      "Expert in coronary interventions",
      "Specialized in complex cardiac procedures"
    ],
    patientCount: 6000,
    successRate: 97.9
  },
  "dr-avinash-k-m": {
    id: "dr-avinash-k-m",
    name: "Dr. Avinash K M",
    specialty: "Neurosurgeon",
    designation: "Consultant",
    hospital: "Manipal Hospital",
    location: "Bangalore",
    experience: "16+ Years Experience",
    education: "MBBS, MS, MCh (Neurosurgery)",
    image: "https://www.vaidam.com/sites/default/files/dr._avinash-min.jpg",
    about: "Dr. Avinash K M is a highly experienced Neurosurgeon with expertise in complex brain and spine surgeries. He has successfully performed numerous neurosurgical procedures and is known for his patient-centric approach.",
    expertise: [
      "Brain Surgery",
      "Spine Surgery",
      "Minimally Invasive Neurosurgery",
      "Neurotrauma"
    ],
    awards: [
      "16+ years of experience",
      "Expert in complex neurosurgical procedures",
      "Specialized in minimally invasive techniques"
    ],
    patientCount: 7000,
    successRate: 98.3
  },
  "dr-g-dimpu-edwin-jonathan": {
    id: "dr-g-dimpu-edwin-jonathan",
    name: "Dr. G Dimpu Edwin Jonathan",
    specialty: "Interventional Cardiologist",
    designation: "Consultant",
    hospital: "Aster RV Hospital",
    location: "Bangalore",
    experience: "12+ Years Experience",
    education: "MBBS, MD, DM (Cardiology)",
    image: "https://www.vaidam.com/sites/default/files/dr._g_dimpu_edwin_jonathan.jpg",
    about: "Dr. G Dimpu Edwin Jonathan is a skilled Interventional Cardiologist with expertise in complex cardiac procedures. He has successfully treated numerous patients with various cardiac conditions and is known for his precision in interventions.",
    expertise: [
      "Interventional Cardiology",
      "Coronary Interventions",
      "Structural Heart Disease",
      "Cardiac Catheterization"
    ],
    awards: [
      "12+ years of experience",
      "Expert in cardiac interventions",
      "Specialized in complex procedures"
    ],
    patientCount: 5000,
    successRate: 97.7
  },
  "dr-annamaneni-ravi-chander-rao": {
    id: "dr-annamaneni-ravi-chander-rao",
    name: "Dr. Annamaneni Ravi Chander Rao",
    specialty: "Aesthetics and Plastic Surgeon",
    designation: "Consultant",
    hospital: "Care Hospitals",
    location: "Hyderabad",
    experience: "13+ Years Experience",
    education: "MBBS, MS, MCh (Plastic Surgery)",
    image: "https://d1ea147o02h74h.cloudfront.net/dr_a_ravi_chander_rao-min.png",
    about: "Dr. Annamaneni Ravi Chander Rao is a renowned Aesthetics and Plastic Surgeon with extensive experience in cosmetic and reconstructive procedures. He is known for his expertise in facial aesthetics and body contouring surgeries.",
    expertise: [
      "Facial Aesthetics",
      "Body Contouring",
      "Reconstructive Surgery",
      "Cosmetic Procedures"
    ],
    awards: [
      "13+ years of experience",
      "Expert in aesthetic procedures",
      "Specialized in reconstructive surgery"
    ],
    patientCount: 4500,
    successRate: 98.1
  },
  "dr-m-bharath-reddy": {
    id: "dr-m-bharath-reddy",
    name: "Dr. A. M. Bharath Reddy",
    specialty: "Cardiac Surgeon",
    designation: "Consultant",
    hospital: "Apollo Spectra Hospital",
    location: "Chennai",
    experience: "17+ Years Experience",
    education: "MBBS, MS, MCh (Cardiothoracic Surgery)",
    image: "https://www.vaidam.com/sites/default/files/dr._a._m._bharath_reddy_-_cardiologist.jpg",
    about: "Dr. A. M. Bharath Reddy is a highly experienced Cardiac Surgeon with expertise in complex cardiac surgeries. He has successfully performed numerous cardiac procedures and is known for his precision and patient care.",
    expertise: [
      "Cardiac Surgery",
      "Coronary Artery Bypass Grafting",
      "Valve Surgery",
      "Minimally Invasive Cardiac Surgery"
    ],
    awards: [
      "17+ years of experience",
      "Expert in complex cardiac surgeries",
      "Specialized in minimally invasive procedures"
    ],
    patientCount: 9000,
    successRate: 98.6
  },
  "dr-abhishek-patil": {
    id: "dr-abhishek-patil",
    name: "Dr. Abhishek Patil",
    specialty: "Rheumatologist",
    designation: "Consultant",
    hospital: "Manipal Hospital (Old Airport Road) Bangalore",
    location: "Bangalore",
    experience: "14+ Years Experience",
    education: "Not specified",
    image: "https://www.vaidam.com/sites/default/files/dr.abhishek-min.png",
    about: "Dr. Abhishek Patil is a Consultant Rheumatologist with extensive experience in treating conditions related to joints and autoimmune diseases.",
    expertise: [
      "Rheumatology",
      "Arthritis Treatment",
      "Osteoarthritis",
      "Systemic Lupus Erythematosus"
    ],
    awards: [
      "14+ years experience"
    ],
    patientCount: 1000,
    successRate: 97.0
  },
  "dr-sumana-b-pallegar": {
    id: "dr-sumana-b-pallegar",
    name: "Dr. Sumana B Pallegar",
    specialty: "Neurosurgeon",
    designation: "Consultant",
    hospital: "Narayana Multispeciality Hospital, Bangalore",
    location: "Bangalore",
    experience: "18+ Years Experience",
    education: "Not specified",
    image: "https://www.vaidam.com/sites/default/files/dr._sumana_b_pallegar_-_neurosurgeon.jpg",
    about: "Dr. Sumana B Pallegar is a Consultant Neurosurgeon specializing in neurological surgeries with over 18 years of experience.",
    expertise: [
      "Neurosurgery",
      "Brain Tumor Surgery",
      "Spine Surgery",
      "Neurovascular Surgery"
    ],
    awards: [
      "18+ years experience"
    ],
    patientCount: 1200,
    successRate: 96.5
  },
  "dr-khushbu-goel": {
    id: "dr-khushbu-goel",
    name: "Dr. Khushbu Goel",
    specialty: "Neurologist",
    designation: "Consultant",
    hospital: "Manipal Hospitals Dwarka, Delhi",
    location: "Delhi",
    experience: "17+ Years Experience",
    education: "Not specified",
    image: "https://www.vaidam.com/sites/default/files/dr_khushbu_goel.jpg",
    about: "Dr. Khushbu Goel is a Consultant Neurologist with over 17 years of experience in treating a wide range of neurological disorders.",
    expertise: [
      "Neurology",
      "Epilepsy Treatment",
      "Stroke Management",
      "Parkinson's Disease Treatment"
    ],
    awards: [
      "17+ years experience"
    ],
    patientCount: 1500,
    successRate: 98.0
  },
  "dr-gundurao-harish-joshi": {
    id: "dr-gundurao-harish-joshi",
    name: "Dr. Gundurao Harish Joshi",
    specialty: "Interventional Cardiologist",
    designation: "Consultant",
    hospital: "Not specified",
    location: "Not specified",
    experience: "18+ Years Experience",
    education: "Not specified",
    image: "https://www.vaidam.com/sites/default/files/dr._gundurao_harish_joshi_-_cardiologist_0.jpg",
    about: "Dr. Gundurao Harish Joshi is an experienced Interventional Cardiologist specializing in advanced cardiac procedures.",
    expertise: [
      "Cardiology",
      "Cardiac Interventions",
      "Coronary Angioplasty",
      "Heart Attack Management"
    ],
    awards: [
      "18+ years experience"
    ],
    patientCount: 2000,
    successRate: 95.0
  },
  "dr-keval-changadiya": {
    id: "dr-keval-changadiya",
    name: "Dr. Keval Changadiya",
    specialty: "Neurologist",
    designation: "Consultant",
    hospital: "CIMS Hospital, Ahmedabad",
    location: "Ahmedabad",
    experience: "14+ Years Experience",
    education: "Not specified",
    image: "https://www.vaidam.com/sites/default/files/dr_keval_changadiya.jpeg",
    about: "Dr. Keval Changadiya is a Consultant Neurologist with expertise in treating various neurological conditions.",
    expertise: [
      "Neurology",
      "Seizure Disorders",
      "Multiple Sclerosis",
      "Stroke Treatment"
    ],
    awards: [
      "14+ years experience"
    ],
    patientCount: 900,
    successRate: 97.5
  },
  "dr-ankit-gupta": {
    id: "dr-ankit-gupta",
    name: "Dr. Ankit Gupta",
    specialty: "Cardiac Surgeon",
    designation: "Consultant",
    hospital: "Shalby Hospital, Jaipur",
    location: "Jaipur",
    experience: "14+ Years Experience",
    education: "Not specified",
    image: "https://www.vaidam.com/sites/default/files/dr_ankit_gupta-min.png",
    about: "Dr. Ankit Gupta is a Consultant Cardiac Surgeon with over 14 years of experience in performing heart surgeries.",
    expertise: [
      "Cardiac Surgery",
      "Coronary Bypass Surgery",
      "Valve Replacement",
      "Minimally Invasive Heart Surgery"
    ],
    awards: [
      "14+ years experience"
    ],
    patientCount: 800,
    successRate: 95.5
  },
  "dr-nishant-shanker-yagnick": {
    id: "dr-nishant-shanker-yagnick",
    name: "Dr. Nishant Shanker Yagnick",
    specialty: "Neurosurgeon",
    designation: "Senior Consultant",
    hospital: "Fortis Hospital, Manesar, Gurgaon",
    location: "Gurgaon",
    experience: "14+ Years Experience",
    education: "Not specified",
    image: "https://www.vaidam.com/sites/default/files/dr._nishant-min.jpg",
    about: "Dr. Nishant Shanker Yagnick is a Senior Consultant Neurosurgeon with a vast experience in neurological surgeries.",
    expertise: [
      "Neurosurgery",
      "Spine Surgery",
      "Brain Tumor Surgery",
      "Trauma Surgery"
    ],
    awards: [
      "14+ years experience"
    ],
    patientCount: 1100,
    successRate: 96.0
  },
  "dr-anil-tibrewala": {
    id: "dr-anil-tibrewala",
    name: "Dr. Anil Tibrewala",
    specialty: "Cosmetic Surgeon",
    designation: "Consultant",
    hospital: "Saifee Hospital, Mumbai",
    location: "Mumbai",
    experience: "19+ Years Experience",
    education: "Not specified",
    image: "https://d1ea147o02h74h.cloudfront.net/dr._anil_tibrewala_-_plastic_and_cosmetic_surgeon.jpg",
    about: "Dr. Anil Tibrewala is a Consultant Cosmetic Surgeon with over 19 years of expertise in cosmetic and reconstructive surgery.",
    expertise: [
      "Cosmetic Surgery",
      "Plastic Surgery",
      "Hair Transplant",
      "Facial Aesthetic Surgery"
    ],
    awards: [
      "19+ years experience"
    ],
    patientCount: 1200,
    successRate: 98.5
  },
  "dr-anup-charles-steven": {
    id: "dr-anup-charles-steven",
    name: "Dr. Anup Charles Steven",
    specialty: "Cardiac Surgeon",
    designation: "Consultant",
    hospital: "Aster CMI Hospital (Hebbel) Bangalore",
    location: "Bangalore",
    experience: "15+ Years Experience",
    education: "Not specified",
    image: "https://www.vaidam.com/sites/default/files/dr._anup_charles_steven_-_cardiothoracic_surgeon.jpg",
    about: "Dr. Anup Charles Steven is a Consultant Cardiac Surgeon with over 15 years of experience in heart surgeries.",
    expertise: [
      "Cardiac Surgery",
      "Valve Replacement",
      "Coronary Artery Bypass Surgery",
      "Heart Transplant"
    ],
    awards: [
      "15+ years experience"
    ],
    patientCount: 1000,
    successRate: 97.2
  },
  "dr-praveen-phaneendranath-sadarmin": {
    id: "dr-praveen-phaneendranath-sadarmin",
    name: "Dr. Praveen Phaneendranath Sadarmin",
    specialty: "Interventional Cardiologist",
    designation: "Consultant",
    hospital: "Narayana Institute of Cardiac Sciences, Bangalore",
    location: "Bangalore",
    experience: "15+ Years Experience",
    education: "Not specified",
    image: "https://www.vaidam.com/sites/default/files/dr._praveen_phaneendranath_sadarmin_-_cardiologist.jpg",
    about: "Dr. Praveen Phaneendranath Sadarmin is an experienced Interventional Cardiologist with over 15 years of expertise in heart care.",
    expertise: [
      "Cardiology",
      "Interventional Cardiology",
      "Angioplasty",
      "Heart Disease Treatment"
    ],
    awards: [
      "15+ years experience"
    ],
    patientCount: 1400,
    successRate: 96.8
  },
  "dr-ashwin-borkar": {
    id: "dr-ashwin-borkar",
    name: "Dr. Ashwin Borkar",
    specialty: "Neurosurgeon",
    designation: "Consultant",
    hospital: "Wockhardt Super Speciality Hospital, Mira Road",
    location: "Mira Road, Mumbai",
    experience: "15+ Years Experience",
    education: "Not specified",
    image: "https://www.vaidam.com/sites/default/files/dr._ashwin_borkar-min.jpg",
    about: "Dr. Ashwin Borkar is a Consultant Neurosurgeon with over 15 years of experience in treating complex brain and spine disorders.",
    expertise: [
      "Neurosurgery",
      "Brain Tumor Surgery",
      "Spine Surgery",
      "Neurotrauma Management"
    ],
    awards: [
      "15+ years experience"
    ],
    patientCount: 4000,
    successRate: 94.5
  },
  "dr-srichandran-l": {
    id: "dr-srichandran-l",
    name: "Dr. Srichandran L",
    specialty: "Interventional Cardiologist",
    designation: "Consultant",
    hospital: "MGM Healthcare, Chennai",
    location: "Chennai",
    experience: "19+ Years Experience",
    education: "Not specified",
    image: "https://www.vaidam.com/sites/default/files/dr._srichandran_l_-_interventional_cardiologist.jpg",
    about: "Dr. Srichandran L is a leading Interventional Cardiologist with nearly two decades of experience in performing complex cardiac interventions.",
    expertise: [
      "Cardiology",
      "Interventional Cardiology",
      "Angioplasty",
      "Pacemaker Implantation"
    ],
    awards: [
      "19+ years experience"
    ],
    patientCount: 6000,
    successRate: 96.2
  },
  "dr-arvind-kulkarni": {
    id: "dr-arvind-kulkarni",
    name: "Dr. Arvind Kulkarni",
    specialty: "Spine Surgeon",
    designation: "Consultant",
    hospital: "Saifee Hospital, Mumbai",
    location: "Mumbai",
    experience: "19+ Years Experience",
    education: "Not specified",
    image: "https://www.vaidam.com/sites/default/files/dr._arvind_kulkarni_-_spinal_surgeon_0.jpg",
    about: "Dr. Arvind Kulkarni is a highly skilled Spine Surgeon specializing in minimally invasive spine surgeries and complex spinal deformity corrections.",
    expertise: [
      "Spine Surgery",
      "Minimally Invasive Spine Surgery",
      "Spinal Deformity Correction",
      "Degenerative Spine Disorders"
    ],
    awards: [
      "19+ years experience"
    ],
    patientCount: 5000,
    successRate: 95.8
  },
  "dr-mohamed-ibrahim-b-k": {
    id: "dr-mohamed-ibrahim-b-k",
    name: "Dr. Mohamed Ibrahim B K",
    specialty: "Cosmetic Surgeon",
    designation: "Consultant",
    hospital: "SIMS Hospital, Vadapalani, Chennai",
    location: "Vadapalani, Chennai",
    experience: "15+ Years Experience",
    education: "Not specified",
    image: "https://d1ea147o02h74h.cloudfront.net/dr._mohamed_ibrahim_b_k.png",
    about: "Dr. Mohamed Ibrahim B K is a renowned Cosmetic Surgeon known for advanced aesthetic surgeries and reconstructive procedures with a focus on natural-looking results.",
    expertise: [
      "Cosmetic Surgery",
      "Aesthetic Surgery",
      "Reconstructive Surgery",
      "Facial and Body Contouring"
    ],
    awards: [
      "15+ years experience"
    ],
    patientCount: 3500,
    successRate: 97.1
  },
  "dr-jimmy-lalkaka": {
    id: "dr-jimmy-lalkaka",
    name: "Dr. Jimmy Lalkaka",
    specialty: "Neurologist",
    designation: "Consultant",
    hospital: "Saifee Hospital, Mumbai",
    location: "Mumbai",
    experience: "19+ Years Experience",
    education: "Not specified",
    image: "https://www.vaidam.com/sites/default/files/dr._jimmy_lalkaka_-_neurologist.jpg",
    about: "Dr. Jimmy Lalkaka is an experienced Neurologist specializing in treating neurological disorders with advanced medical and therapeutic techniques.",
    expertise: [
      "Neurology",
      "Stroke Management",
      "Epilepsy Treatment",
      "Neuromuscular Disorders"
    ],
    awards: [
      "19+ years experience"
    ],
    patientCount: 5500,
    successRate: 94.9
  },
  "dr-kisley-shrivastav": {
    id: "dr-kisley-shrivastav",
    name: "Dr. Kisley Shrivastav",
    specialty: "Interventional Cardiologist",
    designation: "Consultant",
    hospital: "Apollo SAGE Hospital",
    location: "Bhopal",
    experience: "15+ Years Experience",
    education: "D.M. Cardiology - Top Indian Institutes",
    image: "https://www.vaidam.com/sites/default/files/dr._kisley_shrivastav_0.jpg",
    about: "Dr. Kisley Shrivastav is a skilled Interventional Cardiologist with expertise in complex coronary interventions and preventive cardiology.",
    expertise: [
      "Coronary Angioplasty",
      "Device Implantation",
      "Preventive Cardiology"
    ],
    awards: [
      "Young Cardiologist Award, 2017",
      "Advanced Fellowship in Interventional Cardiology"
    ],
    patientCount: 4500,
    successRate: 96.0
  },
  "dr-sankalp-bhartiya": {
    id: "dr-sankalp-bhartiya",
    name: "Dr. Sankalp Bhartiya",
    specialty: "Neurosurgeon",
    designation: "Consultant",
    hospital: "Fortis Escorts Hospital Jaipur",
    location: "Jaipur",
    experience: "8+ Years Experience",
    education: "M.Ch. Neurosurgery - Top Indian Institutes",
    image: "https://www.vaidam.com/sites/default/files/dr._sankalp_bhartiya-min.jpg",
    about: "Dr. Sankalp Bhartiya is a young and dynamic Neurosurgeon with extensive training in minimally invasive neurosurgical procedures.",
    expertise: [
      "Brain Tumor Surgery",
      "Spinal Surgeries",
      "Neurotrauma Care"
    ],
    awards: [
      "Emerging Neurosurgeon Award, 2021",
      "Certified Specialist in Neuro-Oncology"
    ],
    patientCount: 2000,
    successRate: 93.5
  },
  "dr-sudhir-kumar": {
    id: "dr-sudhir-kumar",
    name: "Dr. Sudhir Kumar",
    specialty: "Neurologist",
    designation: "Consultant",
    hospital: "Apollo Hospitals, Jubilee Hills Hyderabad",
    location: "Hyderabad",
    experience: "22+ Years Experience",
    education: "D.M. Neurology - Premier Indian Institutes",
    image: "https://d1ea147o02h74h.cloudfront.net/dr._sudhir_kumar_0.jpg",
    about: "Dr. Sudhir Kumar is a Senior Consultant Neurologist renowned for his clinical expertise in treating complex neurological and neuromuscular disorders.",
    expertise: [
      "Stroke and Paralysis Management",
      "Epilepsy and Seizure Treatment",
      "Multiple Sclerosis and Neurodegenerative Diseases"
    ],
    awards: [
      "Lifetime Achievement Award in Neurology, 2022",
      "Published Research Papers in Top Medical Journals"
    ],
    patientCount: 8000,
    successRate: 97.3
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
