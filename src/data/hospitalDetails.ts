import { calculateInternationalPatients, generatePatientSatisfaction, generateSuccessRate, calculateOperationTheaters, calculateICUBeds } from "@/utils/hospitalStats";

export const hospitalDetails = 
   
{
    "indraprastha-apollo-hospital-new-delhi": {
        "id": "indraprastha-apollo-hospital-new-delhi",
        "name": "Indraprastha Apollo Hospital, New Delhi",
        "location": "Sarita Vihar",
        "address": "Sarita Vihar, Delhi Mathura Road New Delhi, 110076",
        "accreditation": [
            "JCI",
            "NABL"
        ],
        "established": 1995,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/webp/50/files/hospitals/Apollo%20Hospital%20Delhi.webp",
        "logo": "https://www.vaidam.com/sites/default/webp/50/files/hospitals/Apollo%20Hospital%20Delhi.webp",
        "internationalPatients": 1000,
        "beds": 710,
        "doctors": 71,
        "specialties": 52,
        "specializations": [
            "Anaesthesia",
            "Cardiology",
            "Cardiac Surgery",
            "Cancer",
            "Paediatrics",
            "Critical Care",
            "Emergency Care",
            "Foetal Medicine"
        ],
        "facilities": {
            "medical": [
                "CyberKnife for cancer",
                "Proton therapy for cancer",
                "Brain tumor surgery"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Brain Tumour Surgery"
            },
            {
                "name": "Bioresorbable Vascular Scaffold (BVS)"
            },
            {
                "name": "CyberKnife® for precise cancer treatment"
            },
            {
                "name": "Da Vinci® Robotic Surgical System"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/webp/50/files/dr_rakesh_mahajan.webp",
                "name": "Dr. Rakesh Mahajan",
                "speciality": "Vascular Surgeon",
                "experience": "40 years"
            },
            {
                "image": "https://i.postimg.cc/BQ99yzMb/Dr-Subhash-Wangnoo.jpg",
                "name": "Dr. Subhash Wangnoo",
                "speciality": "Endocrinologist",
                "experience": "35 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/webp/50/files/dr._p._l._dhingra-removebg-preview-min.webp",
                "name": "Dr. P. L. Dhingra",
                "speciality": "ENT Surgeon",
                "experience": "51 years"
            },
            {
                "image": "https://i.postimg.cc/v81bCfyq/bd612b83-4181-476b-8547-dc5ba511e6aa.webp",
                "name": "Dr. Shakti Bhan Khanna",
                "speciality": "Gynaecologist and Obstetrician",
                "experience": "66 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/webp/50/files/hospitals/Apollo%20Hospital%20Delhi.webp",
            "https://www.vaidam.com/sites/default/webp/50/files/hospitals/indraprastha_apollo_outside-min.webp",
            "https://i.postimg.cc/76cWrC40/2021-03-23.webp",
            "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/Apollo%20Hospital%20Delhi%20Lobby_0.webp"
        ]
    },
    "blk-hospital-new-delhi": {
        "id": "blk-hospital-new-delhi",
        "name": "BLK-Max Super Speciality Hospital, New Delhi",
        "location": "Pusa Rd",
        "address": "Pusa Rd, Radha Soami Satsang, Rajendra Place New Delhi, 110005",
        "accreditation": [
            "JCI",
            "NABH"
        ],
        "established": 1959,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/blk_facade-1-min.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/blk_facade-1-min.jpg",
        "internationalPatients": 1000,
        "beds": 650,
        "doctors": 65,
        "specialties": 52,
        "specializations": [
            "Cancer Centre",
            "Bone Marrow Transplant Centre",
            "Heart and Vascular Institute",
            "Neurosciences Centre",
            "Digestive and Liver Diseases Institute",
            "Renal Sciences and Kidney Transplant Centre",
            "Orthopaedics, Spine and Sports Medicine Institute",
            "Chest and Respiratory Diseases Centre"
        ],
        "facilities": {
            "medical": [
                "Robotic surgery expertise",
                "Pioneering imaging technologies",
                "Dedicated international patient services"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Robotic surgeries"
            },
            {
                "name": "Cancer care"
            },
            {
                "name": "Bone marrow transplants (BMTs)"
            },
            {
                "name": "Liver and heart transplants"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._t._s._kler-min.png",
                "name": "Dr. T. S. Kler",
                "speciality": "Electrophysiologist",
                "experience": "48 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._suhail_naseem_bukhari.jpg",
                "name": "Dr. Suhail Naseem Bukhari",
                "speciality": "Vascular Surgeon",
                "experience": "22 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr-rajan-madan-min.jpg",
                "name": "Dr. Rajan Madan",
                "speciality": "General Surgeon",
                "experience": "42 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._sandeep_nayar.jpg",
                "name": "Dr. Sandeep Nayar",
                "speciality": "Pulmonologist",
                "experience": "32 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/blk_facade-1-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/blk_max_delhi_outside-min.jpg",
            "https://www.vaidam.com/sites/default/files/blk_opd-1-min.jpg",
            "https://www.vaidam.com/sites/default/files/blk_opd-2-min_0.jpg"
        ]
    },
    "fortis-memorial-research-institute-gurgaon": {
        "id": "fortis-memorial-research-institute-gurgaon",
        "name": "Fortis Memorial Research Institute, Gurgaon",
        "location": "Sector - 44",
        "address": "Sector - 44, Opposite HUDA City Centre Gurgaon, 122002",
        "accreditation": [
            "JCI",
            "NABH"
        ],
        "established": 2001,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/fortis-gurgaon-building1_0.jpg",
        "logo": "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/fortis_memorial_hospital_gurgaon_list_view_image-min.webp",
        "internationalPatients": 1000,
        "beds": 300,
        "doctors": 30,
        "specialties": 52,
        "specializations": [
            "Neurosciences",
            "Oncology",
            "Renal Sciences",
            "Orthopaedics",
            "Cardiac Sciences",
            "Obstetrics And Gynaecology",
            "Robotic Surgery",
            "Haematology"
        ],
        "facilities": {
            "medical": [
                "Robotic Surgery",
                "Gamma Knife Technology",
                "Digital MRI Technology"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Neurosciences"
            },
            {
                "name": "Oncology"
            },
            {
                "name": "Cardiology"
            },
            {
                "name": "Orthopaedics"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._arvind_khurana-min.jpg",
                "name": "Dr. Arvind Khurana",
                "speciality": "Medical Gastroenterologist",
                "experience": "39 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._manoj_kumar_goel-removebg-preview-min.png",
                "name": "Dr. Manoj Kumar Goel",
                "speciality": "Pulmonologist",
                "experience": "36 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._sandeep_vaishya_0-min.jpg",
                "name": "Dr. Sandeep Vaishya",
                "speciality": "Neurosurgeon",
                "experience": "36 years"
            },
            {
                "image": "https://i.postimg.cc/bwRh1R0J/images.jpg",
                "name": "Dr. Ajay Kumar Kriplani",
                "speciality": "General Surgeon",
                "experience": "44 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/fortis-gurgaon-building1_0.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/fortis_memorial_research_institute_gurgaon_building1-min.jpg",
            "https://www.vaidam.com/sites/default/files/fortis-gurgaon-lobby.jpg",
            "https://www.vaidam.com/sites/default/files/helpdesk-min_0.jpg"
        ]
    },
    "medanta-medicity-gurgaon": {
        "id": "medanta-medicity-gurgaon",
        "name": "Medanta - The Medicity, Gurgaon",
        "location": "Medanta - The Medicity Gurgaon",
        "address": "Medanta - The Medicity Gurgaon, 122001",
        "accreditation": [
            "JCI",
            "NABH"
        ],
        "established": 2009,
        "description": "",
        "image": "https://i.postimg.cc/PJWzVN5t/medanta-building-min-1.webp",
        "logo": "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/medanta_the_medicity_gurgaon_list_view_image-min.webp",
        "internationalPatients": 1000,
        "beds": 1600,
        "doctors": 160,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Orthopedics",
            "Neurology",
            "Oncology",
            "Gastroenterology",
            "Urology",
            "Ophthalmology",
            "Radiology"
        ],
        "facilities": {
            "medical": [
                "Cyberknife Radiosurgery",
                "Da Vinci Surgical System",
                "BrainSUITE Neurosurgery"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Cardiac surgeries"
            },
            {
                "name": "Joint replacement surgeries"
            },
            {
                "name": "Intestinal transplant"
            },
            {
                "name": "Endovascular Surgical Cath Lab"
            }
        ],
        "topDoctors": [
            {
                "image": "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/dr_rajiv_parakh.webp",
                "name": "Dr. Rajiv Parakh",
                "speciality": "Vascular Surgeon",
                "experience": "42 years"
            },
            {
                "image": "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/dr._anand_jaiswal-min.webp",
                "name": "Dr. Anand Jaiswal",
                "speciality": "Pulmonologist",
                "experience": "36 years"
            },
            {
                "image": "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/dr._naresh_trehan-min.webp",
                "name": "Dr.naresh Trehan",
                "speciality": "Cardiac Surgeon",
                "experience": "56 years"
            },
            {
                "image": "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/dr_anil_bhan-min.webp",
                "name": "Dr. Anil Bhan",
                "speciality": "Cardiac Surgeon",
                "experience": "49 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://i.postimg.cc/PJWzVN5t/medanta-building-min-1.webp",
            "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/hospitals/medanta_outsid-min.webp",
            "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/medanta-waiting-area.webp",
            "https://i.postimg.cc/7YP2rKB1/unnamed.webp"
        ]
    },
    "apollo-hospitals-tondiarpet": {
        "id": "apollo-hospitals-tondiarpet",
        "name": "Apollo Hospitals, Greams Road, Chennai",
        "location": "Greams Lane",
        "address": "Greams Lane, 21, Greams Rd, Thousand Lights West, Thousand Lights Chennai, 600006",
        "accreditation": [
            "ISO 9001",
            ""
        ],
        "established": 2000,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/apollo_hospital_chennai_0.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/apollo_hospital_tondiarpet_list_image-min.jpg",
        "internationalPatients": 1000,
        "beds": 60,
        "doctors": 10,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Gastroenterology",
            "Neurology",
            "Radiology",
            "Orthopedics",
            "Pediatric Surgery",
            "Nephrology",
            "Urology"
        ],
        "facilities": {
            "medical": [
                "Cancer Treatment Center",
                "Rehabilitation Services",
                "Pain Management Clinic"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "CT scans"
            },
            {
                "name": "MRIs"
            },
            {
                "name": "Cardiac surgeries"
            },
            {
                "name": "Dialysis"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._ramakrishnan_s-min.png",
                "name": "Dr. Ramakrishnan S",
                "speciality": "Rheumatologist",
                "experience": "44 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr-murugan-n.jpg",
                "name": "Dr. Murugan N",
                "speciality": "Hepato-Pancreato-Biliary Surgeon",
                "experience": "46 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._narasimhan_r-min.jpg",
                "name": "Dr.narasimhan R",
                "speciality": "Pulmonologist",
                "experience": "42 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._rajendiran_n-min.jpg",
                "name": "Dr. Rajendiran N",
                "speciality": "Endocrinologist",
                "experience": "56 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/apollo_hospital_chennai_0.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/waiting-area.jpg",
            "https://www.vaidam.com/sites/default/files/apollo-hospitals-greams-road-chennai_building-min.jpg",
            "https://www.vaidam.com/sites/default/files/apollo-hospitals-greams-road-chennai_entrance-min.jpg"
        ]
    },
    "artemis-hospital-gurgaon": {
        "id": "artemis-hospital-gurgaon",
        "name": "Artemis Hospital, Gurgaon",
        "location": "Near Unitech Cyber park",
        "address": "Near Unitech Cyber park, Sector 51 Gurgaon, 122001",
        "accreditation": [
            "JCI",
            "NABH"
        ],
        "established": 2007,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/aretmis-gurgaon.jpg",
        "logo": "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/aretmis-gurgaon.webp",
        "internationalPatients": 1000,
        "beds": 750,
        "doctors": 75,
        "specialties": 52,
        "specializations": [
            "Orthopedics",
            "Urology",
            "Obstetrics and Gynecology",
            "Gastroenterology",
            "Oncology",
            "IVF",
            "Nephrology",
            "Cosmetic and Plastic Surgery"
        ],
        "facilities": {
            "medical": [
                "Artemis Heart Centre",
                "Nuclear Medicine Department",
                "M6 CyberKnife Radiosurgery"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Artemis Heart Centre"
            },
            {
                "name": "Nuclear Medicine"
            },
            {
                "name": "M6 CyberKnife Radiosurgery"
            },
            {
                "name": "Emergency & Trauma Services"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._pawan_rawal-min.jpg",
                "name": "Dr. Pawan Rawal",
                "speciality": "Medical Gastroenterologist",
                "experience": "25 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._anjana_satyajit.jpg",
                "name": "Dr. Anjana Satyajit",
                "speciality": "Dentist",
                "experience": "29 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_aditya_gupta.png",
                "name": "Dr. Aditya Gupta",
                "speciality": "Neurosurgeon",
                "experience": "30 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._ips_oberoi_-_orthopaedics-min.jpg",
                "name": "Dr. IPS Oberoi",
                "speciality": "Orthopaedic and Joint Replacement Surgeon",
                "experience": "31 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/aretmis-gurgaon.jpg",
            "https://i.postimg.cc/FKvvwBpN/unnamed-1.webp",
            "https://i.postimg.cc/s2Jzz4HS/unnamed-2.webp",
            "https://i.postimg.cc/qk2MQ8wp/unnamed-3.webp"
        ]
    },
    "apollo-cancer-hospital-chennai": {
        "id": "apollo-cancer-hospital-chennai",
        "name": "Apollo Cancer Hospital, Chennai",
        "location": "Chennai",
        "address": "Chennai",
        "accreditation": [
            "NABH",
            ""
        ],
        "established": 1970,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/apollo_cancer_hospital_chennai_1-min.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/apollo_cancer_hospital_chennai_list_image-min.jpg",
        "internationalPatients": 1000,
        "beds": 300,
        "doctors": 30,
        "specialties": 52,
        "specializations": [
            "Oncology",
            "Neurosurgery",
            "Orthopedics",
            "Head & Neck Surgery",
            "Reconstructive & Plastic Surgery",
            "Spine Surgery",
            "Radiation Oncology",
            "Medical Oncology"
        ],
        "facilities": {
            "medical": [
                "Cancer care expertise",
                "ExcelsiusGPS® Spine Robot",
                "Proton Therapy"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Oncology"
            },
            {
                "name": "Neurosurgery"
            },
            {
                "name": "Orthopedics"
            },
            {
                "name": "Head & Neck Surgery"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_mayil_vahanan_natarajan.jpg",
                "name": "Dr Mayil Vahanan Natarajan",
                "speciality": "Orthopaedic Oncosurgeon",
                "experience": "46 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr-rajendran-b-radiation-oncologist.jpg",
                "name": "Dr. Rajendran B",
                "speciality": "Radiation Oncologist",
                "experience": "34 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_naveen_ravel.jpg",
                "name": "Dr Naveen Ravel",
                "speciality": "Medical Oncologist",
                "experience": "36 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_chokalingam_b.jpg",
                "name": "Dr Chokalingam B",
                "speciality": "Orthopaedic and Joint Replacement Surgeon",
                "experience": "31 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/apollo_cancer_hospital_chennai_1-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/apollo_cancer_hospital_chennai_2-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/apollo_cancer_hospital_chennai_4-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/apollo_cancer_hospital_chennai_3-min.jpg"
        ]
    },
    "fortis-escorts-heart-institute-new-delhi": {
        "id": "fortis-escorts-heart-institute-new-delhi",
        "name": "Fortis Escorts Heart Institute, New Delhi",
        "location": "Okhla road",
        "address": "Okhla road, Sukhdev Vihar Metro Station New Delhi, 110025",
        "accreditation": [
            "JCI",
            "NABH"
        ],
        "established": 1988,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/fortis_escorts_heart.jpg",
        "logo": "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/fortis-escorts-heart-institute_0.webp",
        "internationalPatients": 1000,
        "beds": 310,
        "doctors": 31,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Interventional Cardiology",
            "Non-invasive Cardiology",
            "Paediatric Cardiology",
            "Paediatric Cardiac Surgery",
            "Adult Cardiac Surgery",
            "LVAD",
            "Heart Transplants"
        ],
        "facilities": {
            "medical": [
                "Robotic surgery centers",
                "eICU program",
                "Advanced diagnostic imaging"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Coronary Angiography"
            },
            {
                "name": "PTCA"
            },
            {
                "name": "CABG"
            },
            {
                "name": "Congenital surgeries"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._krishna_s_iyer-min_0.jpg",
                "name": "Dr. Krishna S Iyer",
                "speciality": "Pediatric Cardiac Surgeon",
                "experience": "46 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._neeraj_awasthy.jpg",
                "name": "Dr.neeraj Awasthy",
                "speciality": "Pediatric Cardiologist",
                "experience": "25 years"
            },
            {
                "image": "https://i.postimg.cc/76dwtYQQ/Screenshot-2025-05-28-193250.png",
                "name": "Dr. Sanjay Kumar Gudwani",
                "speciality": "ENT Surgeon",
                "experience": "23 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr-z-s-meharwal_cardio-thorasic-vascular-surgery982956-min.jpg",
                "name": "Dr. Z S Meharwal",
                "speciality": "Cardiac Surgeon",
                "experience": "42 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/fortis_escorts_heart.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/fortis_escorts_heart_institute_new_delhi_building1-min.jpg",
            "https://www.vaidam.com/sites/default/files/Fortis%20Escorts.jpg",
            "https://www.vaidam.com/sites/default/files/fortis_escorts_heart_delhi.jpg"
        ]
    },
    "fortis-hospital-bangalore": {
        "id": "fortis-hospital-bangalore",
        "name": "Fortis Hospital, Bangalore (Bannerghatta Road)",
        "location": "154/9",
        "address": "154/9, Bannerghatta Road, Opposite IIM-B Bangalore, 560076",
        "accreditation": [
            "JCI",
            "NABH"
        ],
        "established": 2006,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/fortis_hospital_bangalore.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/fortis_hospital_bangalore_0.jpg",
        "internationalPatients": 1000,
        "beds": 300,
        "doctors": 30,
        "specialties": 52,
        "specializations": [
            "Neurology and Neurosurgery",
            "Gastroenterology and Gastrointestinal Surgery",
            "Oncology",
            "Cardiac Sciences",
            "Urology",
            "Orthopaedics",
            "Gynaecology",
            "Organ Transplants"
        ],
        "facilities": {
            "medical": [
                "Cancer Care Center",
                "Robotic Surgery Department",
                "Organ Transplant Unit"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Neurosurgery"
            },
            {
                "name": "Gastrointestinal Surgery"
            },
            {
                "name": "Oncology"
            },
            {
                "name": "Cardiac Sciences"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._vivek_jawali.jpg",
                "name": "Dr. Vivek Jawali",
                "speciality": "Cardiac Surgeon",
                "experience": "44 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._manish_joshi-min_0.jpg",
                "name": "Dr. Manish Joshi",
                "speciality": "Surgical Gastroenterologist",
                "experience": "25 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._chandran_gnanamuthu-min.jpg",
                "name": "Dr. Chandran Gnanamuthu",
                "speciality": "Neurologist",
                "experience": "44 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._sandeep_nayak.jpg",
                "name": "Dr. Sandeep Nayak",
                "speciality": "Surgical Oncologist",
                "experience": "28 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/fortis_hospital_bangalore.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/fortis_hospital_bangalore_bannerghatta_road_building-min.jpg",
            "https://i.postimg.cc/HxcCM1s0/bolnicza-fortis-bangalor-korpus.webp",
            "https://i.postimg.cc/XN5b7WP4/bolnicza-fortis-bangalor.webp"
        ]
    },
    "narayana-institute-cardiac-sciences-bangalore": {
        "id": "narayana-institute-cardiac-sciences-bangalore",
        "name": "Narayana Institute of Cardiac Sciences, Bangalore",
        "location": "258/A",
        "address": "258/A, Hosur Road, Taluk Bangalore, 560099",
        "accreditation": [
            "JCI",
            "NABH"
        ],
        "established": 2000,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/narayana_institute_of_cardiac_sciences_bangalore_1-min.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/narayana_institute_of_cardiac_sciences_bangalore_1-min.jpg",
        "internationalPatients": 1000,
        "beds": 606,
        "doctors": 60,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Neurology",
            "Oncology",
            "Orthopaedics",
            "Gastroenterology",
            "Electrophysiology",
            "Pulmonary Endarterectomy",
            "Comprehensive Pharmacy Support"
        ],
        "facilities": {
            "medical": [
                "Pediatric cardiology unit",
                "Hybrid Cath Lab",
                "Cardiac rehabilitation program"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Coronary artery bypass graft"
            },
            {
                "name": "Heart transplant"
            },
            {
                "name": "Complex heart surgeries"
            },
            {
                "name": "Pediatric cardiac care"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._devi_prasad_shetty.jpg",
                "name": "Dr. Devi Prasad Shetty",
                "speciality": "Cardiac Surgeon",
                "experience": "45 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr.ramakrishnakumar_s.jpg",
                "name": "Dr. Ramakrishnakumar S",
                "speciality": "Electrophysiologist",
                "experience": "12 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._sanjay_mehrotra_-_interventional_cardiologist.jpg",
                "name": "Dr. Sanjay Mehrotra",
                "speciality": "Interventional Cardiologist",
                "experience": "31 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._bijay_kumar_mahala_-_caridologist_0.jpg",
                "name": "Dr. Bijay Kumar Mahala",
                "speciality": "Interventional Cardiologist",
                "experience": "27 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/narayana_institute_of_cardiac_sciences_bangalore_1-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/narayana_institute_of_cardiac_sciences_bangalore_2-min.jpg",
            "https://www.vaidam.com/sites/default/files/narayana_institute_of_cardiac_sciences_bangalore_3-min.jpg",
            "https://www.vaidam.com/sites/default/files/narayana_institute_of_cardiac_sciences_bangalore_4-min.jpg"
        ]
    },
    "apollo-hospital-bangalore": {
        "id": "apollo-hospital-bangalore",
        "name": "Apollo Hospital (Bannerghatta Road), Bangalore",
        "location": "154/11",
        "address": "154/11, Bannerghatta Main Road, Bangalore, 560076",
        "accreditation": [
            "JCI",
            ""
        ],
        "established": 2007,
        "description": "",
        "image": "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/hospitals/apollo_hospitals_bangalore.webp",
        "logo": "https://i.postimg.cc/tTVLTd22/Assets-03.jpg",
        "internationalPatients": 1000,
        "beds": 250,
        "doctors": 25,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Orthopaedics",
            "Neurology",
            "Gastroenterology",
            "Urology",
            "Oncology",
            "Transplantation",
            "Robotic Surgery"
        ],
        "facilities": {
            "medical": [
                "Thallium Laser Procedures",
                "Holmium Laser Treatments",
                "Digital XRay System"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Thallium Laser Surgery"
            },
            {
                "name": "Holmium Laser Surgery"
            },
            {
                "name": "Digital X-Ray Imaging"
            },
            {
                "name": "Y-shaped Stent Placement"
            }
        ],
        "topDoctors": [
            {
                "image": "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/dr-dinesh-min.webp",
                "name": "Dr. Dinesh Kini",
                "speciality": "Medical Gastroenterologist",
                "experience": "37 years"
            },
            {
                "image": "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/dr._nagamani_ys.webp",
                "name": "Dr.nagamani YS",
                "speciality": "ENT Surgeon",
                "experience": "15 years"
            },
            {
                "image": "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/dr._arun_l._naik_-_neurosurgeon.webp",
                "name": "Dr. Arun L.naik",
                "speciality": "Neurosurgeon",
                "experience": "21 years"
            },
            {
                "image": "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/dr-vikram-kamath-neurologist.webp",
                "name": "Dr. Vikram Kamath",
                "speciality": "Neurologist",
                "experience": "21 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/hospitals/apollo_hospitals_bangalore.webp",
            "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/hospitals/apollo_hospital_bannerghatta_road_bangalore-min.webp",
            "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/apollo-hospitals_bannerghatta_road_building-min_0.webp",
            "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/apollo-hospitals_bannerghatta_road_reception-min_0.webp"
        ]
    },
    "max-super-speciality-hospital-saket-new-delhi": {
        "id": "max-super-speciality-hospital-saket-new-delhi",
        "name": "Max Super Speciality Hospital, Saket, New Delhi",
        "location": "Press Enclave Road",
        "address": "Press Enclave Road, Mandir Marg, Saket New Delhi, 110017",
        "accreditation": [
            "JCI",
            "NABH"
        ],
        "established": 2005,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/max_hospital_saket_building-min.jpg",
        "logo": "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/max_hospital_saket_building-min.webp",
        "internationalPatients": 1000,
        "beds": 550,
        "doctors": 55,
        "specialties": 52,
        "specializations": [
            "Oncology",
            "Cardiology & Cardiac Surgery",
            "Neurology & Neurosurgery",
            "Orthopedics",
            "Gastroenterology & Hepatology",
            "Urology & Kidney Transplants",
            "ENT Surgery",
            "Organ Transplants"
        ],
        "facilities": {
            "medical": [
                "BiPlane Digital Cath Lab",
                "Da Vinci Xi Robotic System",
                "4D Echocardiography Machine"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Oncology"
            },
            {
                "name": "Cardiology & Cardiac Surgery"
            },
            {
                "name": "Neurology & Neurosurgery"
            },
            {
                "name": "Orthopedics"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr-vivek-raj-max.jpg",
                "name": "Dr. Vivek Raj",
                "speciality": "Medical Gastroenterologist",
                "experience": "43 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr-balbir-singh-medanta.jpg",
                "name": "Dr. Balbir Singh",
                "speciality": "Interventional Cardiologist",
                "experience": "36 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr-subhash-gupta-liver-transplant-surgeon.jpg",
                "name": "Dr. Subhash Gupta",
                "speciality": "Liver Transplant Surgeon",
                "experience": "38 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._harshavardhan_hegde-min.png",
                "name": "Dr. Harshavardhan Hegde",
                "speciality": "Orthopaedic and Joint Replacement Surgeon",
                "experience": "42 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/max_hospital_saket_building-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/max_hospital_saket_building1-min.jpg",
            "https://www.vaidam.com/sites/default/files/max_hospital_saket_reception-min.jpg",
            "https://www.vaidam.com/sites/default/files/max_hospital_saket_reception1-min.jpg"
        ]
    },
    "apollo-hospitals-mumbai": {
        "id": "apollo-hospitals-mumbai",
        "name": "Apollo Hospitals, Mumbai",
        "location": "Parsik Hill Road",
        "address": "Parsik Hill Road, Sector 23, CBD Belapur, Navi Mumbai Mumbai, 400614",
        "accreditation": [
            "JCI",
            "NABH"
        ],
        "established": 1970,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/apollo_hospitals_mumbai.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/apollo_hospitalsmumbai.jpg",
        "internationalPatients": 1000,
        "beds": 500,
        "doctors": 50,
        "specialties": 52,
        "specializations": [
            "Anaesthesiology",
            "Bariatric Surgery",
            "Bone Marrow Transplant",
            "Breast Surgery",
            "Cardiology",
            "Cardiovascular & Thoracic Surgery",
            "Cosmetic & Plastic Surgery",
            "Dentistry"
        ],
        "facilities": {
            "medical": [
                "International Patient Services",
                "Advanced Health Check Programs",
                "Cuttingedge Diagnostic Tools"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Bone Marrow Transplant"
            },
            {
                "name": "Cardiovascular & Thoracic Surgery"
            },
            {
                "name": "Organ Transplant (Kidney, Liver, Heart)"
            },
            {
                "name": "Robotic Surgery"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/_dr_sanjay_tulsiram_helale_-min.jpg",
                "name": "Dr. Sanjay Tulsiram Helale",
                "speciality": "ENT Surgeon",
                "experience": "28 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/vikram-paode-min.jpg",
                "name": "Dr. Vikram Paode",
                "speciality": "Orthopaedic and Joint Replacement Surgeon",
                "experience": "29 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._sanjeev_jadhav-min.jpg",
                "name": "Dr. Sanjeev Jadhav",
                "speciality": "Cardiac Surgeon",
                "experience": "24 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/charudutt_chaudhari.jpg",
                "name": "Dr. Charudatta Chaudhari",
                "speciality": "Aesthetics and Plastic Surgeon",
                "experience": "35 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/apollo_hospitals_mumbai.jpg",
            "https://i.postimg.cc/Jz6g5YFp/2021-07-06.webp",
            "https://www.vaidam.com/sites/default/files/hospitals/apollo_hospitalsmumbaii.jpg",
            "https://i.postimg.cc/pdmSGYbR/unnamed-4.webp"
        ]
    },
    "max-hospital-gurgaon": {
        "id": "max-hospital-gurgaon",
        "name": "Max Super Specialty Hospital, Gurgaon",
        "location": "B Block",
        "address": "B Block, Sushant Lok 1, Near Huda City Centre, MF Husain Marg , Sector 43 Gurgaon, 122001",
        "accreditation": [
            "NABH",
            "NABL"
        ],
        "established": 2007,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/gurgaon_facade-1-min.jpg",
        "logo": "https://i.postimg.cc/rmWPcVwH/2023-04-05.webp",
        "internationalPatients": 1000,
        "beds": 100,
        "doctors": 10,
        "specialties": 52,
        "specializations": [
            "Cardiac Sciences",
            "Nephrology",
            "Minimal Access, Laparoscopic Surgery",
            "Neurosciences",
            "Urology",
            "Orthopaedics",
            "Aesthetics",
            "Reconstructive Surgery"
        ],
        "facilities": {
            "medical": [
                "Cancer Treatment Center",
                "Robotic Surgery Department",
                "IVF Clinic"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Cardiac Sciences"
            },
            {
                "name": "Nephrology"
            },
            {
                "name": "Minimal Access, Laparoscopic Surgery"
            },
            {
                "name": "Neurosciences"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview45-min.png",
                "name": "Dr. Arun Saroha",
                "speciality": "Neurosurgeon",
                "experience": "29 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._nevin_kishore-_max_-_gurgaon.jpg",
                "name": "Dr.nevin Kishore",
                "speciality": "Pulmonologist",
                "experience": "42 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr-jatinder-bir-singh-jaggi-arthroscopy-orthopedics.jpg",
                "name": "Dr. Jatinder Bir Singh Jaggi",
                "speciality": "Orthopaedic and Joint Replacement Surgeon",
                "experience": "31 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._vikas_gupta.jpg",
                "name": "Dr. Vikas Gupta",
                "speciality": "Orthopaedic and Joint Replacement Surgeon",
                "experience": "28 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/gurgaon_facade-1-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/max_hospital_gurgaon-min.jpg",
            "https://www.vaidam.com/sites/default/files/gurgaon_reception-4-min.jpg",
            "https://www.vaidam.com/sites/default/files/gurgaon_ldr_room-1-min.jpg"
        ]
    },
    "apollo-hospitals-hyderabad": {
        "id": "apollo-hospitals-hyderabad",
        "name": "Apollo Hospitals, Jubilee Hills, Hyderabad",
        "location": "Rd Number 72",
        "address": "Rd Number 72, opposite Bharatiya Vidya Bhavan School, Film Nagar Hyderabad, 500033",
        "accreditation": [
            "JCI",
            ""
        ],
        "established": 1988,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/webp/50/files/hospitals/apollo_hospitals-hyderabad.webp",
        "logo": "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/apollo_hospitals_jubilee_hills_hyderabad_building1-min.webp",
        "internationalPatients": 1000,
        "beds": 550,
        "doctors": 55,
        "specialties": 52,
        "specializations": [
            "Heart",
            "Cancer",
            "Bones, Joints, and Spine",
            "Organ Transplants",
            "Neurology",
            "Gastro- and Colorectal",
            "Bariatric Surgery",
            "Gynaecology",
            "Ophthalmology"
        ],
        "facilities": {
            "medical": [
                "Cancer Institute",
                "Organ Transplant Center",
                "Neuroscience Institute"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Organ Transplants"
            },
            {
                "name": "Neurology"
            },
            {
                "name": "Gynaecology"
            },
            {
                "name": "Ophthalmology"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/webp/50/files/dr._sanjay_maitra_-_nephrologist.webp",
                "name": "Dr. Sanjay Maitra",
                "speciality": "Nephrologist",
                "experience": "29 years"
            },
            {
                "image": "https://i.postimg.cc/rFgYqYqq/2025-05-20.webp",
                "name": "Dr. Vijay Dikshit",
                "speciality": "Cardiac Surgeon",
                "experience": "53 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/webp/50/files/dr._sanjay_kumar_agarwal.webp",
                "name": "Dr. Sanjay Kumar Agarwal",
                "speciality": "Cardiac Surgeon",
                "experience": "33 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/webp/50/files/dr._tripti_deb.webp",
                "name": "Dr. Tripti Deb",
                "speciality": "Cardiac Surgeon",
                "experience": "47 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/webp/50/files/hospitals/apollo_hospitals-hyderabad.webp",
            "https://www.vaidam.com/sites/default/webp/50/files/hospitals/apollo_hospitals_jubilee_hills_hyderabad_building1-min.webp",
            "https://i.postimg.cc/7hntGK7M/unnamed-5.webp",
            "https://www.vaidam.com/sites/default/webp/50/files/apollo_hospital_jubilee_hills_building_lobby-min.webp"
        ]
    },
    "fortis-flt-lt-rajan-dhall-hospital-vasant-kunj-new-delhi": {
        "id": "fortis-flt-lt-rajan-dhall-hospital-vasant-kunj-new-delhi",
        "name": "Fortis Flt. Lt. Rajan Dhall Hospital, Vasant Kunj, New Delhi",
        "location": "Aruna Asaf Ali Marg",
        "address": "Aruna Asaf Ali Marg, Pocket 1, Sector B, Vasant Kunj New Delhi, 110070",
        "accreditation": [
            "NABH",
            ""
        ],
        "established": 1996,
        "description": "",
        "image": "https://i.postimg.cc/XvB2cjdv/2022-10-18.webp",
        "logo": "https://www.vaidam.com/sites/default/files/fortis-vasant-kunj-delhi.jpg",
        "internationalPatients": 1000,
        "beds": 200,
        "doctors": 20,
        "specialties": 52,
        "specializations": [
            "Cardiac Sciences",
            "Oncology",
            "Neurology",
            "Liver Transplant",
            "Dermatology",
            "Emergency and Trauma",
            "ENT",
            "General Surgery"
        ],
        "facilities": {
            "medical": [
                "Brachytherapy",
                "HIPEC surgery",
                "Endoscopic ultrasound"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Brachytherapy"
            },
            {
                "name": "HIPEC surgery"
            },
            {
                "name": "Endoscopic ultrasound"
            },
            {
                "name": "Endobronchial ultrasound"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._manoj_miglani_-_orthopedics_and_joint_replacement_surgeon.jpg",
                "name": "Dr. Manoj Miglani",
                "speciality": "Spine Surgeon",
                "experience": "27 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._jitendra_mohan_hans-min.png",
                "name": "Dr. Jitendra Mohan Hans",
                "speciality": "Oral & Maxillofacial Surgeon",
                "experience": "40 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._muneendra_gupta_0.jpg",
                "name": "Dr. Muneendra Gupta",
                "speciality": "General Surgeon",
                "experience": "49 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._mitu_shrikhande-min.jpg",
                "name": "Dr. Mitu Shrikhande",
                "speciality": "Hematologist",
                "experience": "30 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://i.postimg.cc/XvB2cjdv/2022-10-18.webp",
            "https://i.postimg.cc/T347DLyS/unnamed-6.webp",
            "https://www.vaidam.com/sites/default/files/fortis-reception-vasant-kunj.jpg",
            "https://www.vaidam.com/sites/default/files/fortis-room-vasant-kunj.jpg"
        ]
    },
    "fortis-malar-hospital-chennai": {
        "id": "fortis-malar-hospital-chennai",
        "name": "Fortis Malar Hospital ,Chennai",
        "location": "No. 52",
        "address": "No. 52, 1st Main Road, Gandhi Nagar, Adyar, Chennai, 600020",
        "accreditation": [
            "",
            ""
        ],
        "established": 1992,
        "description": "",
        "image": "https://i.postimg.cc/dtWnbk91/2025-03-18.webp",
        "logo": "https://i.postimg.cc/dtWnbk91/2025-03-18.webp",
        "internationalPatients": 1000,
        "beds": 500,
        "doctors": 50,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Cardiothoracic Surgery",
            "Neurology",
            "Neurosurgery",
            "Orthopaedics",
            "Nephrology",
            "Gynaecology",
            "Urology"
        ],
        "facilities": {
            "medical": [
                "Cath lab services",
                "Dialysis unit",
                "Speciality diagnostic services"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Cardiology"
            },
            {
                "name": "Cardiothoracic surgery"
            },
            {
                "name": "Neurology"
            },
            {
                "name": "Neurosurgery"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._satish_rao-removebg-preview-min.png",
                "name": "Dr. Satish Rao",
                "speciality": "Nephrologist",
                "experience": "39 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_rudrappa.jpg",
                "name": "Dr. Rudrappa",
                "speciality": "Cardiology",
                "experience": "26 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._r.v._thenmozhi-senior_consultant_gynaecologist_and_obstetrician.jpg",
                "name": "Dr. R.V. Thenmozhi",
                "speciality": "Gynaecologist and Obstetrician",
                "experience": "40 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._soundappan_v_-_neurosurgeon.jpg",
                "name": "Dr. Soundappan V",
                "speciality": "Neurosurgeon",
                "experience": "34 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://i.postimg.cc/dtWnbk91/2025-03-18.webp",
            "https://i.postimg.cc/hjp7XxvQ/unnamed-7.webp",
            "https://i.postimg.cc/QNYTspvR/unnamed-8.webp",
            "https://i.postimg.cc/DyWbzSTm/unnamed-9.webp"
        ]
    },
    "fortis-hospital-anandapur-kolkata": {
        "id": "fortis-hospital-anandapur-kolkata",
        "name": "Fortis Hospital (Anandapur) Kolkata",
        "location": "Kolkata",
        "address": "Kolkata",
        "accreditation": [
            "NABH",
            ""
        ],
        "established": 2011,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/fortis-hospital-kolkata.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/hospitals/fortis-hospital-kolkata.jpg",
        "internationalPatients": 1000,
        "beds": 400,
        "doctors": 40,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Cardiac Surgery",
            "Urology",
            "Nephrology",
            "Neurosciences",
            "Orthopaedics",
            "Digestive Care",
            "Emergency Care"
        ],
        "facilities": {
            "medical": [
                "Advanced Cardiology Treatments",
                "Advanced Neurosciences Department",
                "Integrated Building Management System"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Cardiology and Cardiac Surgery"
            },
            {
                "name": "Urology"
            },
            {
                "name": "Nephrology"
            },
            {
                "name": "Neurosciences"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_k_m_mandana_-min.jpg",
                "name": "Dr K M Mandana",
                "speciality": "Cardiac Surgeon",
                "experience": "30 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._amitava_mukherjee-min.jpg",
                "name": "Dr. Amitava Mukherjee",
                "speciality": "Urologist",
                "experience": "24 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/binayak_sinha.jpg",
                "name": "Dr. Binayak Sinha",
                "speciality": "Endocrinologist",
                "experience": "32 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_ghosh.jpg",
                "name": "Dr. Sudipta Ghosh",
                "speciality": "Surgical Gastroenterologist",
                "experience": "23 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/fortis-hospital-kolkata.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/fortis_hospital_0.jpg",
            "https://www.vaidam.com/sites/default/files/fortis_hospital_room.jpg",
            "https://www.vaidam.com/sites/default/files/fortis_room.jpg"
        ]
    },
    "sri-ramachandra-medical-centre-chennai": {
        "id": "sri-ramachandra-medical-centre-chennai",
        "name": "Sri Ramachandra Medical Centre, Chennai",
        "location": "No.1 Ramachandra Nagar",
        "address": "No.1 Ramachandra Nagar, Porur Chennai, 600116",
        "accreditation": [
            "JCI",
            "NABH"
        ],
        "established": 1985,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/sri_ramachandra_hospital_chennai-min_0.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/sri_ramachandra_hospital-chennai-home-min_0.jpg",
        "internationalPatients": 1000,
        "beds": 1500,
        "doctors": 150,
        "specialties": 52,
        "specializations": [
            "Surgery",
            "Internal Medicine",
            "Pediatrics",
            "Obstetrics and Gynecology",
            "Cardiology",
            "Orthopedics",
            "Neurology",
            "Oncology"
        ],
        "facilities": {
            "medical": [
                "Cancer Treatment Center",
                "Rehabilitation Services",
                "Pediatric Specialty Clinic"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Cardiac catheterization"
            },
            {
                "name": "Laparoscopic surgery"
            },
            {
                "name": "Chemotherapy"
            },
            {
                "name": "Dialysis"
            }
        ],
        "topDoctors": [
            {
                "image": "https://i.postimg.cc/9FjrcJJg/karthikkailash-final-469153850.jpg",
                "name": "Dr. K. Karthik Kailash",
                "speciality": "Spine Surgeon",
                "experience": "28 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/untitled7854-removebg-preview-min.png",
                "name": "Dr. J. S. Satyanarayana Murthy",
                "speciality": "Interventional Cardiologist",
                "experience": "33 years"
            },
            {
                "image": "https://i.postimg.cc/2SkyZ3p4/dr-shankar-v-sri-ramachandra-medical-centre-porur-chennai-neurologists-2ddt29d.avif",
                "name": "Dr. V. Shankar",
                "speciality": "Neurologist",
                "experience": "33 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/untitled3777-min.jpg",
                "name": "Dr. S. Thanikchalam",
                "speciality": "Cardiology",
                "experience": "49 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/sri_ramachandra_hospital_chennai-min_0.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/sri_ramachandra_hospital-min_0.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/entrance-min_0.jpg",
            "https://i.postimg.cc/SKjKg5xR/sri-ramachandra-medical-college-and-research-institute-porur-chennai-medical-colleges-ccy5wilmew.webp"
        ]
    },
    "fortis-hospital-mulund-mumbai": {
        "id": "fortis-hospital-mulund-mumbai",
        "name": "Fortis Hospital, Mulund, Mumbai",
        "location": "Mulund - Goregaon Link Rd",
        "address": "Mulund - Goregaon Link Rd, Nahur West, Industrial Area, Bhandup West Mumbai, 400078",
        "accreditation": [
            "JCI",
            "NABH"
        ],
        "established": 2002,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/fortis-mulund_0.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/fortis_mulund_mumbai_building.jpg",
        "internationalPatients": 1000,
        "beds": 400,
        "doctors": 40,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Cardiac Surgery",
            "Urology",
            "Nephrology",
            "Neurosciences",
            "Orthopedics",
            "Oncology",
            "Maternity Care"
        ],
        "facilities": {
            "medical": [
                "Multiorgan transplant center",
                "Advanced surgical robot",
                "Bone Marrow Transplant Unit"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Multi-organ transplants"
            },
            {
                "name": "Heart transplants"
            },
            {
                "name": "Bone Marrow Transplant"
            },
            {
                "name": "Robotic surgeries"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_rajiv_karnik.jpg",
                "name": "Dr. Rajiv Karnik",
                "speciality": "Interventional Cardiologist",
                "experience": "44 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._suresh_vijan-min.jpg",
                "name": "Dr. Suresh Vijan",
                "speciality": "Interventional Cardiologist",
                "experience": "33 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._aruna_bhave-min.png",
                "name": "Dr. Aruna Bhave",
                "speciality": "Medical Gastroenterologist",
                "experience": "36 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/rajesh_naithani-min.jpg",
                "name": "Dr. Rajesh Nathani",
                "speciality": "General Surgeon",
                "experience": "34 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/fortis-mulund_0.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/fortis_mulund_mumbai.jpg",
            "https://www.vaidam.com/sites/default/files/reception_0.jpg",
            "https://www.vaidam.com/sites/default/files/admission_process.jpg"
        ]
    },
    "fortis-hospital-mohali": {
        "id": "fortis-hospital-mohali",
        "name": "Fortis Hospital, Mohali",
        "location": "Sector 62",
        "address": "Sector 62, Sahibzada Ajit Singh Nagar Mohali, 160062",
        "accreditation": [
            "JCI",
            "NABH"
        ],
        "established": 2001,
        "description": "",
        "image": "https://i.postimg.cc/DZXwTXsK/unnamed-10.webp",
        "logo": "https://i.postimg.cc/DZXwTXsK/unnamed-10.webp",
        "internationalPatients": 1000,
        "beds": 400,
        "doctors": 40,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Oncology",
            "Neurology",
            "Orthopedics",
            "Pediatrics",
            "Bariatric care",
            "Diabetology",
            "Gastroenterology"
        ],
        "facilities": {
            "medical": [
                "Cancer Care Center",
                "International Patient Services",
                "Robotic Surgery Services"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Transcatheter Aortic Valve Implantation (TAVI)"
            },
            {
                "name": "Left Ventricular Assist Device (LVAD)"
            },
            {
                "name": "Right Ventricular Assist Device (RVAD)"
            },
            {
                "name": "Minimally Invasive Direct Coronary Artery Bypass Surgery (MIDCAB)"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview49-min.png",
                "name": "Dr. V K Maini",
                "speciality": "Pulmonologist",
                "experience": "47 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_behera-min.jpg",
                "name": "Dr. Digambar Behera",
                "speciality": "Pulmonologist",
                "experience": "43 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_ashit.jpg",
                "name": "Dr. Ashit Syngle",
                "speciality": "Rheumatologist",
                "experience": "28 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_atul.png",
                "name": "Dr. Atul Sharma Joshi",
                "speciality": "Advanced Laparoscopic, Minimal Access and Bariatric Surgeon",
                "experience": "34 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://i.postimg.cc/DZXwTXsK/unnamed-10.webp",
            "https://www.vaidam.com/sites/default/files/hospitals/fortis_hospital-mohali.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/ipd.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/privte_room.jpg"
        ]
    },
    "fortis-hospital-noida": {
        "id": "fortis-hospital-noida",
        "name": "Fortis Hospital, Noida",
        "location": "Fortis Hospital Noida",
        "address": "Fortis Hospital Noida, 201313",
        "accreditation": [
            "NABH",
            ""
        ],
        "established": 2004,
        "description": "",
        "image": "https://i.postimg.cc/VLRLm1S5/Fortis-Hospital-Noida.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/fortis-hospital-noida_0.jpg",
        "internationalPatients": 1000,
        "beds": 250,
        "doctors": 25,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Oncology",
            "Orthopaedics",
            "Neurology",
            "Robotic Surgery",
            "Kidney Transplant",
            "Liver Transplant",
            "Knee Surgery"
        ],
        "facilities": {
            "medical": [
                "Advanced dialysis unit",
                "Diagnostic services",
                "Ambulance services"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Kidney transplant"
            },
            {
                "name": "Liver transplant"
            },
            {
                "name": "Knee surgery"
            },
            {
                "name": "Cancer diagnosis and treatment"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_vivek_vij.jpg",
                "name": "Dr. Vivek Vij",
                "speciality": "Liver Transplant Surgeon",
                "experience": "27 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr.-mrinal-sircar-min.jpg",
                "name": "Dr. Mrinal Sircar",
                "speciality": "Pulmonologist",
                "experience": "38 years"
            },
            {
                "image": "https://i.postimg.cc/133RzT6B/dr-ajay.jpg",
                "name": "Dr. Ajay Kaul",
                "speciality": "Cardiac Surgeon",
                "experience": "38 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._dhar-min.jpg",
                "name": "Dr. Bimlesh Dhar Pandey",
                "speciality": "Rheumatologist",
                "experience": "23 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://i.postimg.cc/VLRLm1S5/Fortis-Hospital-Noida.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/fortis-hospital-noida-reception-fortis.jpg",
            "https://www.vaidam.com/sites/default/files/fortis-entrepreneur-award-fortis.jpg",
            "https://www.vaidam.com/sites/default/files/fortis-hospital-noida-rooms-fortis.jpg"
        ]
    },
    "rajagiri-hospital-kochi": {
        "id": "rajagiri-hospital-kochi",
        "name": "Rajagiri Hospital, Kochi",
        "location": "Rajagiri Hospital Kochi",
        "address": "Rajagiri Hospital Kochi, 683112",
        "accreditation": [
            "JCI",
            "NABH"
        ],
        "established": 1869,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/rajagiri_2-min_1_0.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/hospitals/rajagiri_2-min_1_0.jpg",
        "internationalPatients": 1000,
        "beds": 1200,
        "doctors": 120,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Orthopedics",
            "Neurology",
            "Oncology",
            "Gastroenterology",
            "Nephrology",
            "Pulmonology",
            "Dermatology"
        ],
        "facilities": {
            "medical": [
                "Advanced Radiology Services",
                "Comprehensive Organ Transplantation",
                "Affordable Surgical Procedures"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Organ transplantation"
            },
            {
                "name": "Kidney transplant"
            },
            {
                "name": "Heart transplant"
            },
            {
                "name": "Intestinal and GI transplant"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._m._g_usha.jpg",
                "name": "Dr. M.G. Usha",
                "speciality": "Gynaecologist and Obstetrician",
                "experience": "34 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._anitha_babu.jpg",
                "name": "Dr. Anitha Babu",
                "speciality": "Physiotherapist",
                "experience": "13 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._murukan_babu.jpg",
                "name": "Dr. Murukan Babu",
                "speciality": "Orthopaedic and Joint Replacement Surgeon",
                "experience": "14 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._ameer_s_theruvath.jpg",
                "name": "Dr. Ameer S Theruvath",
                "speciality": "Spine Surgeon",
                "experience": "20 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/rajagiri_2-min_1_0.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/rajagiri_1-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/rajagiri_3-min_0.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/rajagiri_4-min_0.jpg"
        ]
    },
    "max-multi-speciality-centre-noida": {
        "id": "max-multi-speciality-centre-noida",
        "name": "Max Multi Speciality Centre, Noida",
        "location": "A-364",
        "address": "A-364, Sector 19 Noida, 201301",
        "accreditation": [
            "ISO 9001",
            ""
        ],
        "established": 2014,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/noida_facade-1-min.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/noida_facade-1-min.jpg",
        "internationalPatients": 1000,
        "beds": 100,
        "doctors": 10,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Non-invasive Cardiology",
            "Orthopedics",
            "ENT",
            "Nephrology",
            "Neurology",
            "Gynecology",
            "Oncology"
        ],
        "facilities": {
            "medical": [
                "Cancer treatment center",
                "Liver transplant facility",
                "Bone marrow transplant center"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Cardiology"
            },
            {
                "name": "Orthopedics"
            },
            {
                "name": "Oncology"
            },
            {
                "name": "Liver Transplant & Biliary Sciences"
            }
        ],
        "topDoctors": [
            {
                "image": "https://i.postimg.cc/0NL9cy4X/Screenshot-2025-05-28-201350.png",
                "name": "Dr. Anoop Raj",
                "speciality": "ENT Surgeon",
                "experience": "47 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._reita_prakash.jpg",
                "name": "Dr. Reita Prakash",
                "speciality": "ENT Surgeon",
                "experience": "28 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._himangi_negi.jpg",
                "name": "Dr. Himangi Negi",
                "speciality": "Gynaecologist and Obstetrician",
                "experience": "29 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._payal_singhal-min.jpg",
                "name": "Dr. Payal Singhal",
                "speciality": "Gynaecologist and Obstetrician",
                "experience": "28 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/noida_facade-1-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/noida_reception-1-min.jpg",
            "https://www.vaidam.com/sites/default/files/noida_reception-2-min.jpg",
            "https://www.vaidam.com/sites/default/files/noida_php_lounge-1-min.jpg"
        ]
    },
    "fortis-hospital-shalimar-bagh-new-delhi": {
        "id": "fortis-hospital-shalimar-bagh-new-delhi",
        "name": "Fortis Hospital, Shalimar Bagh, New Delhi",
        "location": "A Block",
        "address": "A Block, Shaheed Udham Singh Marg, Poorbi Shalimar Bag, Shalimar Bagh New Delhi, 110088",
        "accreditation": [
            "NABH",
            ""
        ],
        "established": 2010,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/fortis_shalimar_bagh_building-min.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/hospitals/fortis_shalimar_bagh_building-min.jpg",
        "internationalPatients": 1000,
        "beds": 300,
        "doctors": 30,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Neurology",
            "Oncology",
            "Orthopaedics",
            "Obstetrics and Gynaecology",
            "Laparoscopic Surgery",
            "Cosmetic Surgery",
            "Infertility Treatment"
        ],
        "facilities": {
            "medical": [
                "Cancer Research Center",
                "Rehabilitation Therapy Center",
                "Genetic Counseling Services"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Cardiac Bypass Surgery"
            },
            {
                "name": "Interventional Cardiology"
            },
            {
                "name": "Non-Invasive Cardiology"
            },
            {
                "name": "Paediatric Cardiac Surgery"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._priyanka_kharbanda-min.jpg",
                "name": "Dr. Priyanka Kharbanda",
                "speciality": "Rheumatologist",
                "experience": "24 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr.-kapil-kumar.jpg",
                "name": "Dr. Kapil Kumar",
                "speciality": "Surgical Oncologist",
                "experience": "40 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_raju_vyas_cleanup-min.jpg",
                "name": "Dr Raju Vyas",
                "speciality": "Cardiac Surgeon",
                "experience": "36 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_vidit-min.jpg",
                "name": "Dr. Vidit Tripathi",
                "speciality": "ENT Surgeon",
                "experience": "30 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/fortis_shalimar_bagh_building-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/fortis_hospital.jpg",
            "",
            ""
        ]
    },
    "sterling-hospital-ahmedabad-india": {
        "id": "sterling-hospital-ahmedabad-india",
        "name": "Sterling Hospital, Ahmedabad",
        "location": "Sterling Hospital Road near Maharaja Agrasen Vidhyalaya",
        "address": "Sterling Hospital Road near Maharaja Agrasen Vidhyalaya, Memnagar, Ahmedabad, 380052",
        "accreditation": [
            "NABH",
            "NABL"
        ],
        "established": 2001,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/sterling_hospital_ahmedabad_building-min.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/sterling_hospital_ahmedabad_building-min.jpg",
        "internationalPatients": 1000,
        "beds": 1100,
        "doctors": 110,
        "specialties": 52,
        "specializations": [
            "Cancer care",
            "Neurology",
            "Cardiology",
            "Orthopedics",
            "Transplantation",
            "Urology",
            "Gastroenterology",
            "Trauma care"
        ],
        "facilities": {
            "medical": [
                "CRRT Dialysis",
                "Bone marrow unit",
                "Thrombolytic therapy"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Liver transplant"
            },
            {
                "name": "CRRT Dialysis"
            },
            {
                "name": "Bone marrow unit"
            },
            {
                "name": "Thrombolytic therapy"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr.navin-min.png",
                "name": "Dr.navin Patel",
                "speciality": "ENT Surgeon",
                "experience": "37 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._urmit_shah-min.png",
                "name": "Dr. Urmit Shah",
                "speciality": "Ophthalmologist",
                "experience": "33 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr-bharat-min.jpg",
                "name": "Dr. Bharat Dave",
                "speciality": "Spine Surgeon",
                "experience": "36 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/chirag_shah_0.jpg",
                "name": "Dr. Chirag Shah",
                "speciality": "Surgical Gastroenterologist",
                "experience": "23 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/sterling_hospital_ahmedabad_building-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/sterling_hospital_ahmedabad_joon_square-min.jpg",
            "https://www.vaidam.com/sites/default/files/sterling_hospital_ahmedabad_ward-min.jpg",
            "https://www.vaidam.com/sites/default/files/sterling_hospital_ahmedabad_ot-min.jpg"
        ]
    },
    "gleneagles-global-hospitals-chennai": {
        "id": "gleneagles-global-hospitals-chennai",
        "name": "Gleneagles Global Hospital, Chennai",
        "location": "439",
        "address": "439, Embassy Residency Rd, Cheran Nagar, Perumbakkam Chennai, 600001",
        "accreditation": [
            "NABH",
            "NABL"
        ],
        "established": 1999,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/building_facade.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/global-chennai-facade.jpg",
        "internationalPatients": 1000,
        "beds": 1000,
        "doctors": 100,
        "specialties": 52,
        "specializations": [
            "Liver Transplantation",
            "Kidney Transplantation",
            "Heart Transplantation",
            "Lung Transplantation",
            "Bone Marrow Transplantation",
            "Hepatology",
            "Cardiology",
            "Neurology"
        ],
        "facilities": {
            "medical": [
                "Robotic surgery program",
                "International patient services",
                "Advanced neurosurgery techniques"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Organ Transplants"
            },
            {
                "name": "Robotic Surgeries"
            },
            {
                "name": "Lung Transplantation"
            },
            {
                "name": "Minimally Invasive Lung Transplant"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_s_balakumar-min.jpg",
                "name": "Dr. Balakumar S",
                "speciality": "Vascular Surgeon",
                "experience": "33 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_s._raja_sundaram-min.jpg",
                "name": "Dr. Raja Sundaram",
                "speciality": "Surgical Oncologist",
                "experience": "32 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr-muruganandham-k-compressor.jpg",
                "name": "Dr. Muruganandham K",
                "speciality": "Urologist",
                "experience": "25 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._a_muraleedharan.jpg",
                "name": "Dr. A Muraleedharan",
                "speciality": "ENT Surgeon",
                "experience": "41 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/building_facade.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/global-chennai-facade.jpg",
            "https://www.vaidam.com/sites/default/files/gleneagles-global_chennai_reception-min.jpg",
            "https://www.vaidam.com/sites/default/files/gleneagles-global_chennai_lobby-min.jpg"
        ]
    },
    "kims-hospital-secunderabad": {
        "id": "kims-hospital-secunderabad",
        "name": "KIMS Hospital, Secunderabad , Hyderabad",
        "location": "Begumpet",
        "address": "Begumpet, 1-8-31/1, Minister Rd, Krishna Nagar Colony, Hyderabad, 500003",
        "accreditation": [
            "NABH",
            "NABL"
        ],
        "established": 2004,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/main_building_kims_secunderabad.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/main_building_kims_secunderabad.jpg",
        "internationalPatients": 1000,
        "beds": 1000,
        "doctors": 100,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Gastroenterology & Hepatology",
            "Neuro Sciences",
            "Organ Transplantation",
            "Paediatrics",
            "Dental",
            "Fertility Treatments",
            "Oncology"
        ],
        "facilities": {
            "medical": [
                "Cancer Treatment Center",
                "Fertility Clinic",
                "Bariatric Surgery Center"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Cardiology"
            },
            {
                "name": "Gastroenterology & Hepatology"
            },
            {
                "name": "Neuro Sciences"
            },
            {
                "name": "Organ Transplantation"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._nagendra_parvataneni.jpg",
                "name": "Dr.nagendra Parvataneni",
                "speciality": "Surgical Oncologist",
                "experience": "26 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._ravichand_siddachari.jpg",
                "name": "Dr. Ravichand Siddachari",
                "speciality": "Surgical Gastroenterologist",
                "experience": "23 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/anyconv.com_dr._ashwini_kumar_myneni.jpg",
                "name": "Dr. Ashwini Kumar Myneni",
                "speciality": "Surgical Gastroenterologist",
                "experience": "16 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr-neetu-modgil-ent-specialist_0.jpg",
                "name": "Dr.neetu Modgil",
                "speciality": "ENT Surgeon",
                "experience": "21 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/main_building_kims_secunderabad.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/entrancce_kims_secunderabad.jpg",
            "https://www.vaidam.com/sites/default/files/foyer_kims_secunderabad.jpg",
            "https://www.vaidam.com/sites/default/files/examination_room_kims_secunderabad.jpg"
        ]
    },
    "fortis-escorts-hospital-jaipur": {
        "id": "fortis-escorts-hospital-jaipur",
        "name": "Fortis Escorts Hospital Jaipur",
        "location": "Jawaharlal Nehru Marg",
        "address": "Jawaharlal Nehru Marg, Malviya Nagar Jaipur, 302017",
        "accreditation": [
            "NABH",
            ""
        ],
        "established": 2008,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/fortis_hospital_jaipur_building.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/fortis_hospital_jaipur_building.jpg",
        "internationalPatients": 1000,
        "beds": 250,
        "doctors": 25,
        "specialties": 52,
        "specializations": [
            "Kidney Transplant",
            "Total Knee & Hip Replacement",
            "Adult and Paediatric Cardiac Surgery",
            "GI & Bariatric Surgery",
            "Complex Neuro Intervention Procedures",
            "Surgical & Medical Management of Brain Stroke",
            "Comprehensive & Advance Cardiac Care",
            "Laser Surgery"
        ],
        "facilities": {
            "medical": [
                "Dedicated Stroke Unit",
                "Worldclass Dialysis Facilities",
                "Transport Ventilators"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Kidney Transplant"
            },
            {
                "name": "Total Knee & Hip Replacement with Robotics & Computer Navigation"
            },
            {
                "name": "Adult and Paediatric Cardiac Surgery including Congenital Heart Disease"
            },
            {
                "name": "Complex Neuro Intervention Procedures with minimal invasive through computer Navigation"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._a_k_sharma-min.jpg",
                "name": "Dr. A K Sharma",
                "speciality": "General Paediatrician",
                "experience": "57 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._madan_mohan_bansal-min.jpg",
                "name": "Dr. Madan Mohan Bansal",
                "speciality": "Urologist",
                "experience": "50 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._hemant_bhartiya-min.jpg",
                "name": "Dr. Hemant Bhartiya",
                "speciality": "Neurosurgeon",
                "experience": "30 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._mohan_kulhari-min.jpg",
                "name": "Dr. Mohan Kulhari",
                "speciality": "ENT Surgeon",
                "experience": "18 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/fortis_hospital_jaipur_building.jpg",
            "https://i.postimg.cc/hjTcwqWD/unnamed-11.webp",
            "https://i.postimg.cc/4yGsRFsz/unnamed-12.webp",
            "https://www.vaidam.com/sites/default/files/fortis_hospital_jaipur_ward.jpg"
        ]
    },
    "fortis-hiranandani-hospital-vashi": {
        "id": "fortis-hiranandani-hospital-vashi",
        "name": "Fortis Hiranandani Hospital, Vashi , Mumbai",
        "location": "Mini Sea Shore Road",
        "address": "Mini Sea Shore Road, Sector 10, Vashi Mumbai, 400703",
        "accreditation": [
            "NABH",
            ""
        ],
        "established": 2007,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/fortis_hiranandani_hospital_vashi-min.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/fortis_hiranandani_hospital_vashi-home.jpg",
        "internationalPatients": 1000,
        "beds": 150,
        "doctors": 15,
        "specialties": 52,
        "specializations": [
            "Orthopedics",
            "Cardiology",
            "Neurology",
            "Pediatrics",
            "Urology",
            "Nephrology",
            "ENT",
            "Obstetrics and Gynecology"
        ],
        "facilities": {
            "medical": [
                "Cancer Treatment Center",
                "Advanced Radiology Department",
                "Rehabilitation Services"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Orthopedic surgery"
            },
            {
                "name": "Cardiac catheterization"
            },
            {
                "name": "Neurosurgery"
            },
            {
                "name": "Pediatric surgery"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._atul_gattani-min.jpg",
                "name": "Dr. Atul Gattani",
                "speciality": "Rheumatologist",
                "experience": "17 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/satish_g_kulkarni-min.jpg",
                "name": "Dr. Satish G Kulkarni",
                "speciality": "Medical Gastroenterologist",
                "experience": "32 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._anil-heroor.jpg",
                "name": "Dr. Anil Heroor",
                "speciality": "Surgical Oncologist",
                "experience": "32 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/drpawan_ojha-min.jpg",
                "name": "Dr. Pawan Ojha",
                "speciality": "Neurologist",
                "experience": "21 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/fortis_hiranandani_hospital_vashi-min.jpg",
            "https://i.postimg.cc/qMj0WLY3/1688729656fortis-hiranandani-hospital-mumbai.webp",
            "https://www.vaidam.com/sites/default/files/hospitals/emegerency-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/suite-min_0.jpg"
        ]
    },
    "rainbow-childrens-hospital-hyderabad": {
        "id": "rainbow-childrens-hospital-hyderabad",
        "name": "Rainbow Children's Hospital, Hyderabad",
        "location": "Road No - 2",
        "address": "Road No - 2, Banjara Hills, Near L V Prasad Eye Hospital, Hyderabad, 500 034",
        "accreditation": [
            "NABH",
            ""
        ],
        "established": 1999,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/rainbow_childrens_hospital_hyderabad_building-min.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/rainbow_childrens_hospital_hyderabad_building-min.jpg",
        "internationalPatients": 1000,
        "beds": 1000,
        "doctors": 100,
        "specialties": 52,
        "specializations": [
            "Pediatrics",
            "Obstetrics and Gynecology",
            "Neonatology",
            "Fertility",
            "IVF",
            "Surgery",
            "Laparoscopy",
            "Labor and Delivery"
        ],
        "facilities": {
            "medical": [
                "Fertility treatments, Neonatal care, Laparoscopic surgeries"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Deliveries"
            },
            {
                "name": "Preterm baby treatment"
            },
            {
                "name": "IVF treatment"
            },
            {
                "name": "Surgeries"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._nageswaro-min.jpg",
                "name": "Dr.nageswara Rao Koneti",
                "speciality": "Pediatric Cardiac Surgeon",
                "experience": "36 years"
            },
            {
                "image": "",
                "name": "",
                "speciality": "",
                "experience": ""
            },
            {
                "image": "",
                "name": "",
                "speciality": "",
                "experience": ""
            },
            {
                "image": "",
                "name": "",
                "speciality": "",
                "experience": ""
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/rainbow_childrens_hospital_hyderabad_building-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/rainbow_childrens_hospital_hyderabad_building1-min.jpg",
            "https://www.vaidam.com/sites/default/files/rainbow_childrens_hospital_hyderabad_reception-min.jpg",
            "https://www.vaidam.com/sites/default/files/rainbow_childrens_hospital_hyderabad_nicu-min.jpg"
        ]
    },
    "br-life-hospitals-bangalore": {
        "id": "br-life-hospitals-bangalore",
        "name": "SS SPARSH Hospital (Mysore Road) Bangalore",
        "location": "8 Ideal Homes HBCS Layout",
        "address": "8 Ideal Homes HBCS Layout, Javarandoddi, RR Nagar Bangalore, 560098",
        "accreditation": [
            "",
            ""
        ],
        "established": 1975,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/br_lifehosptial-min.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/br_lifehosptial-home.jpg",
        "internationalPatients": 1000,
        "beds": 1000,
        "doctors": 100,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Orthopedics",
            "Pediatrics",
            "Nephrology",
            "Oncology",
            "Neurology",
            "Gynecology",
            "Urology"
        ],
        "facilities": {
            "medical": [
                "Kidney transplant program",
                "Coronary bypass surgery",
                "Mother & child care"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Kidney Transplant"
            },
            {
                "name": "Coronary Artery Bypass Surgery"
            },
            {
                "name": "Cardiac Care"
            },
            {
                "name": "Operation Theatres"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._manjunath_mk-min.jpg",
                "name": "Dr. Manjunath MK",
                "speciality": "ENT Surgeon",
                "experience": "18 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._nayana_kumari_s_kadamba_-_obstetrician-gynecologist.jpg",
                "name": "Dr.nayana Kumari S Kadamba",
                "speciality": "Gynaecologist and Obstetrician",
                "experience": "31 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_marpalli-min.jpg",
                "name": "Dr. Ravishankara Marpalli",
                "speciality": "General Paediatrician",
                "experience": "30 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/pediatrics-sreeharshasshivanna-bangalore-min.jpg",
                "name": "Dr. Sree Harsha.S",
                "speciality": "General Paediatrician",
                "experience": "21 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/br_lifehosptial-min.jpg",
            "https://i.postimg.cc/2StYS5Cj/ssnmch1.jpg",
            "https://i.postimg.cc/9M5jyN4v/SSNMC-Super-Specialty-Hospital-bengaluru-1613034535.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/international-lpounge-min.jpg"
        ]
    },
    "medanta-hospital-lucknow": {
        "id": "medanta-hospital-lucknow",
        "name": "Medanta Hospital, Lucknow",
        "location": "Sector - A",
        "address": "Sector - A, Pocket - 1, Amar Shaheed Path, Golf City Lucknow, 226030",
        "accreditation": [
            "JCI",
            "NABH"
        ],
        "established": 2019,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/medanta_lucknow_1-min.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/medanta_lucknow_list_image-min.jpg",
        "internationalPatients": 1000,
        "beds": 900,
        "doctors": 90,
        "specialties": 52,
        "specializations": [
            "Emergency & Trauma Care",
            "Endocrinology & Diabetes",
            "Internal Medicine",
            "Medanta Cancer Institute",
            "Medanta Heart Institute",
            "Medanta Institute of Critical Care & Anaesthesiology",
            "Medanta Institute of Digestive & Hepatobiliary Sciences",
            "Medanta Institute of Musculoskeletal & Orthopaedics"
        ],
        "facilities": {
            "medical": [
                "International Patient Services",
                "Second Opinion Lab Tests"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Coronary artery bypass grafting (CABG)"
            },
            {
                "name": "Bone marrow transplant"
            },
            {
                "name": "Robotic radical prostatectomy"
            },
            {
                "name": "Liver biopsy"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_neelam.jpg",
                "name": "Dr.neelam Vinay",
                "speciality": "Gynaecologist and Obstetrician",
                "experience": "34 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_harvardhan.jpg",
                "name": "Dr. Harshvardhan Atreya",
                "speciality": "Medical Oncologist",
                "experience": "19 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._saif_nabi_shah_-orthopedics_and_joint_replacement_surgeon_0.jpg",
                "name": "Dr. Saif Nabi Shah",
                "speciality": "Orthopaedic and Joint Replacement Surgeon",
                "experience": "21 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._dharmendra-min.jpg",
                "name": "Dr. Dharmendra Singh",
                "speciality": "Orthopaedic and Joint Replacement Surgeon",
                "experience": "27 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/medanta_lucknow_1-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/medanta_lucknow_2-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/medanta_lucknow_3-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/medanta_lucknow_4-min.jpg"
        ]
    },
    "sharda-hospital-greater-noida": {
        "id": "sharda-hospital-greater-noida",
        "name": "Sharda Hospital, Greater Noida",
        "location": "Plot # 32-34",
        "address": "Plot # 32-34, Knowledge Park-III, Gautam Budh Nagar, Knowledge Park III Noida, 201306",
        "accreditation": [
            "NABH",
            "NABL"
        ],
        "established": 2005,
        "description": "",
        "image": "https://i.postimg.cc/cHRGhMw6/download.jpg",
        "logo": "https://i.postimg.cc/cHRGhMw6/download.jpg",
        "internationalPatients": 1000,
        "beds": 900,
        "doctors": 90,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Cardiothoracic Surgery",
            "Neurosciences",
            "Joint Replacement",
            "Spine Surgery",
            "Orthopedics",
            "Urology",
            "Nephrology"
        ],
        "facilities": {
            "medical": [
                "Panchakarma Centre",
                "Telemedicine Technologies",
                "School of Medical Sciences"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Cardiology"
            },
            {
                "name": "Cardiothoracic Surgery"
            },
            {
                "name": "Neurosciences"
            },
            {
                "name": "Joint Replacement"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_virender_kumar_gautam-min.jpg",
                "name": "Dr. Virender Kumar Gautam",
                "speciality": "Orthopaedic and Joint Replacement Surgeon",
                "experience": "42 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_sashi_bhushan_paed_sharda_hospital_grnoida.jpg",
                "name": "Dr. Sashi Bhushan",
                "speciality": "Neonatologist",
                "experience": "32 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_neerja_goel_obs_gyn_sharda_hospital_grnoida.jpg",
                "name": "Dr.neerja Goel",
                "speciality": "Gynaecologist and Obstetrician",
                "experience": "41 years"
            },
            {
                "image": "https://i.postimg.cc/x867psCj/Dr-Ashutosh-Niranjan.jpg",
                "name": "Dr. Ashutosh Niranjan",
                "speciality": "Surgical Gastroenterologist",
                "experience": "34 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://i.postimg.cc/cHRGhMw6/download.jpg",
            "https://i.postimg.cc/G3j1sKb5/unnamed-14.webp",
            "https://i.postimg.cc/CLLpC81L/Red-Zone-Emergency.webp",
            "https://i.postimg.cc/FHYt8Q3M/unnamed-15.webp"
        ]
    },
    "deenanath-mangeshkar-hospital-and-research-center-pune": {
        "id": "deenanath-mangeshkar-hospital-and-research-center-pune",
        "name": "Deenanath Mangeshkar Hospital and Research Center, Pune",
        "location": "Near Mhatre Bridge",
        "address": "Near Mhatre Bridge, Erandawne Pune, 411004",
        "accreditation": [
            "",
            ""
        ],
        "established": 2001,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/deenanath_mangeshkar_hospital_and_research_center_pune-min.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/deenanath_mangeshkar_hospital_and_research_center_pune-home.jpg",
        "internationalPatients": 1000,
        "beds": 800,
        "doctors": 80,
        "specialties": 52,
        "specializations": [
            "Voice Disorders",
            "Joint Replacement",
            "Gastroenterology",
            "Cardiology",
            "Urology",
            "Cardiothoracic Surgery",
            "Neurology",
            "Nephrology"
        ],
        "facilities": {
            "medical": [
                "Human milk bank",
                "Voice disorders care",
                "EMS with ambulances"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Voice disorders treatment"
            },
            {
                "name": "Joint replacement surgery"
            },
            {
                "name": "Cardiac procedures"
            },
            {
                "name": "Kidney transplant"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dranil_bhatia-min.jpg",
                "name": "Dr. Anil Bhatia",
                "speciality": "Orthopaedic and Joint Replacement Surgeon",
                "experience": "32 years"
            },
            {
                "image": "",
                "name": "",
                "speciality": "",
                "experience": ""
            },
            {
                "image": "",
                "name": "",
                "speciality": "",
                "experience": ""
            },
            {
                "image": "",
                "name": "",
                "speciality": "",
                "experience": ""
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/deenanath_mangeshkar_hospital_and_research_center_pune-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/deenanath_mangeshkar_hospital_and_research_center-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/waiting_area-min_0.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/cafeteria-min.jpg"
        ]
    },
    "mazumdar-shaw-medical-centre-bangalore": {
        "id": "mazumdar-shaw-medical-centre-bangalore",
        "name": "NH Mazumdar Shaw Medical Centre, Bangalore",
        "location": "Narayana Health City Bangalore",
        "address": "Narayana Health City Bangalore, 560099",
        "accreditation": [
            "NABH",
            ""
        ],
        "established": 2000,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/mazumdar_shaw_medical_centre_bangalore_1-min.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/mazumdar_shaw_medical_centre_bangalore_1-min.jpg",
        "internationalPatients": 1000,
        "beds": 750,
        "doctors": 75,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Cardiac Surgery",
            "Oncology",
            "Neurology",
            "Neurosurgery",
            "Gastroenterology",
            "Hepatology",
            "Nephrology"
        ],
        "facilities": {
            "medical": [
                "Cancer care center",
                "Bone marrow transplant unit",
                "Oncology wing"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Bone Marrow Transplant"
            },
            {
                "name": "Cancer Therapy"
            },
            {
                "name": "Cardiac Surgery"
            },
            {
                "name": "Neurosurgery"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._prashanth_b.n-min.jpg",
                "name": "Dr. Prashanth B.N",
                "speciality": "Orthopaedic and Joint Replacement Surgeon",
                "experience": "24 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._thimappa_hegde.jpg",
                "name": "Dr. Thimappa Hegde",
                "speciality": "Neurosurgeon",
                "experience": "35 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._sunil_bhat.jpg",
                "name": "Dr. Sunil Bhat",
                "speciality": "Pediatric Hematologist",
                "experience": "22 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._vikas_ellur.jpg",
                "name": "Dr. Vikas Ellur",
                "speciality": "Paediatric Orthopedecian",
                "experience": "17 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/mazumdar_shaw_medical_centre_bangalore_1-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/mazumdar_shaw_medical_centre_bangalore_2-min.jpg",
            "https://www.vaidam.com/sites/default/files/mazumdar_shaw_medical_centre_bangalore_3-min.jpg",
            "https://www.vaidam.com/sites/default/files/mazumdar_shaw_medical_centre_bangalore_4-min.jpg"
        ]
    },
    "apolllo-gleneagles-hospital-kolkata": {
        "id": "apolllo-gleneagles-hospital-kolkata",
        "name": "Apollo Gleneagles Hospital, Kolkata",
        "location": "58",
        "address": "58, Canal Circular Road, Kadapara Kolkata, 700054",
        "accreditation": [
            "JCI",
            "NABL"
        ],
        "established": 2003,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/apollo-gleneagles-hospitals-728_0.jpg",
        "logo": "https://i.postimg.cc/k49pJrRX/display-Doctor-Image-kolkata.jpg",
        "internationalPatients": 1000,
        "beds": 750,
        "doctors": 75,
        "specialties": 52,
        "specializations": [
            "Emergency Care",
            "Cardiology",
            "Oncology",
            "Neurology",
            "Gastroenterology",
            "Robotic Surgery",
            "Neurosurgery",
            "Orthopaedics"
        ],
        "facilities": {
            "medical": [
                "Cellvizio System for imaging",
                "Cadaver transplant services",
                "CARTO Electrophysiology Mapping workshop"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Reverse Shoulder Prosthesis Replacement"
            },
            {
                "name": "Cellvizio System for real-time, in vivo cellular imaging"
            },
            {
                "name": "Cadaver transplant"
            },
            {
                "name": "CARTO or Electrophysiology Mapping Technique workshop"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._mahesh_goenka-min.jpg",
                "name": "Dr. Mahesh Goenka",
                "speciality": "Medical Gastroenterologist",
                "experience": "38 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_v_v_lakshiminarayanan-min.png",
                "name": "Dr V V Lakshiminarayanan",
                "speciality": "Nephrologist",
                "experience": "45 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_s_n_singh-min.jpg",
                "name": "Dr S N Singh",
                "speciality": "Neurosurgeon",
                "experience": "27 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_nipanjan_ghosh-min.jpg",
                "name": "Dr.nipanjan Ghosh",
                "speciality": "General Surgeon",
                "experience": "18 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/apollo-gleneagles-hospitals-728_0.jpg",
            "https://i.postimg.cc/k49pJrRX/display-Doctor-Image-kolkata.jpg",
            "https://www.vaidam.com/sites/default/files/room_0.jpg",
            "https://i.postimg.cc/mDw6hd73/apollo-kolkata.jpg"
        ]
    },
    "continental-hospitals-hyderabad": {
        "id": "continental-hospitals-hyderabad",
        "name": "Continental Hospitals, Hyderabad",
        "location": "Continental Hospitals Ltd. Plot No. 3 Road",
        "address": "Continental Hospitals Ltd. Plot No. 3 Road, No. 2, Hyderabad, 500032",
        "accreditation": [
            "JCI",
            "NABH"
        ],
        "established": 2013,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/continental_hospital_-_building.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/continental_hospital_-_building.jpg",
        "internationalPatients": 1000,
        "beds": 750,
        "doctors": 75,
        "specialties": 52,
        "specializations": [
            "Oncology (Cancer)- Radiation",
            "Cardiology/Cardiac Surgery",
            "Neurology/Neurosurgery",
            "Spine Surgery",
            "Joint Replacement Surgeries (Shoulder/Knee/Hip)",
            "Organ Transplant (Liver, Kidney and Heart)",
            "Gastroenterology, Liver Diseases and Bariatrics",
            "Woman and Child Care"
        ],
        "facilities": {
            "medical": [
                "StentViz Cardiology Technology",
                "Dual Energy CT",
                "TrueBeam STX Radiation"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Oncology (Cancer) - Radiation"
            },
            {
                "name": "Cardiology/Cardiac Surgery"
            },
            {
                "name": "Neurology/Neurosurgery"
            },
            {
                "name": "Organ Transplant (Liver, Kidney and Heart)"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._m._k._singh-min.jpg",
                "name": "Dr. M. K. Singh",
                "speciality": "Neurosurgeon",
                "experience": "26 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._abhisekh_mohanty-min.jpg",
                "name": "Dr. Abhisekh Mohanty",
                "speciality": "Interventional Cardiologist",
                "experience": "23 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr-deepthi-nandan.jpg",
                "name": "Dr. Deepthi Nandan Reddy A",
                "speciality": "Orthopaedic and Joint Replacement Surgeon",
                "experience": "32 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr.-vishwambar-nath.jpg",
                "name": "Dr. Vishwambar Nath",
                "speciality": "Urologist",
                "experience": "32 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/continental_hospital_-_building.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/continentalhospital.jpg",
            "https://www.vaidam.com/sites/default/files/continental-hospitals.jpg",
            "https://www.vaidam.com/sites/default/files/mainlobby_-continental_hospital.jpg"
        ]
    },
    "vijaya-hospital-chennai": {
        "id": "vijaya-hospital-chennai",
        "name": "Vijaya Hospital, Chennai",
        "location": "No:434",
        "address": "No:434, Arcot Rd, Vadapalani, Chennai, 600026",
        "accreditation": [
            "NABH",
            "NABL"
        ],
        "established": 1972,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/vijaya_hospital_chennai.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/vijaya_hospital_chenna-home.jpg",
        "internationalPatients": 1000,
        "beds": 750,
        "doctors": 75,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Neurology",
            "Oncology",
            "Orthopedics",
            "Gastroenterology",
            "Pediatrics",
            "Dermatology",
            "Ophthalmology"
        ],
        "facilities": {
            "medical": [
                "International Patient Services",
                "Advanced Medical Technologies",
                "Comprehensive Treatment Services"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Beating heart surgeries"
            },
            {
                "name": "Angiographic procedures"
            },
            {
                "name": "Intensive care units"
            },
            {
                "name": "Operation theatres"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_reddy.jpg",
                "name": "Dr. C. Rajasekhara Reddy",
                "speciality": "Orthopaedic and Joint Replacement Surgeon",
                "experience": "42 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._n.s_reddy-min.jpg",
                "name": "Dr.n.S Reddy",
                "speciality": "ENT Surgeon",
                "experience": "23 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview52-min.png",
                "name": "Dr. C. Chinnaswami",
                "speciality": "Urologist and Renal Transplant Specialist",
                "experience": "61 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_sathish_m._rao-min.jpg",
                "name": "Dr Sathish M. Rao",
                "speciality": "Nephrologist",
                "experience": "35 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/vijaya_hospital_chennai.jpg",
            "https://i.postimg.cc/4y2LQmLm/unnamed-16.webp",
            "https://www.vaidam.com/sites/default/files/hospitals/vijaya_hospital.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/children_area.jpg"
        ]
    },
    "aster-mims-calicut": {
        "id": "aster-mims-calicut",
        "name": "Aster MIMS, Calicut",
        "location": "Mini By-pass Road",
        "address": "Mini By-pass Road, Govindapuram P.O. Calicut, 673016",
        "accreditation": [
            "NABH",
            "NABL"
        ],
        "established": 2000,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/aster_mims_calicut_building-min.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/aster_mims_calicut_building-min.jpg",
        "internationalPatients": 1000,
        "beds": 650,
        "doctors": 65,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Nephrology",
            "Oncology",
            "Robotic Surgery",
            "Cochlear Implantation",
            "Critical Care",
            "Trauma Care",
            "Neurology"
        ],
        "facilities": {
            "medical": [
                "Kidney stone microtechnology",
                "Robotic liver cancer surgery",
                "Cochlear implantation centre"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Kidney stone treatment with micro-technology"
            },
            {
                "name": "Robotic liver cancer surgery"
            },
            {
                "name": "Robotic surgery with da Vinci Robot"
            },
            {
                "name": "Cochlear implantation"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr.-v-v-ashraf.jpg",
                "name": "Dr. Ashraf V V",
                "speciality": "Neurologist",
                "experience": "21 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_jacob.jpg",
                "name": "Dr. Jacob Alappat",
                "speciality": "Neurosurgeon",
                "experience": "31 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._sajith.jpg",
                "name": "Dr. Sajith Narayanan",
                "speciality": "Neurologist",
                "experience": "28 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._girish.jpg",
                "name": "Dr. Girish Warrier",
                "speciality": "Pediatric Cardiologist",
                "experience": "25 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/aster_mims_calicut_building-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/aster_mims_calicut_building1-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/help-desk-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/corridor-min.jpg"
        ]
    },
    "aster-medcity-kochi": {
        "id": "aster-medcity-kochi",
        "name": "Aster Medcity Kochi",
        "location": "Kuttisahib Road Cheranalloor",
        "address": "Kuttisahib Road Cheranalloor, South Chittoor Kochi, 682027",
        "accreditation": [
            "JCI",
            "NABH"
        ],
        "established": 2014,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/aster_medcity_kochi_building_outside-min.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/aster_medcity_hospital_entrance.jpg",
        "internationalPatients": 1000,
        "beds": 670,
        "doctors": 67,
        "specialties": 52,
        "specializations": [
            "Cardiology",
            "Neurosciences",
            "Oncology",
            "Orthopedics",
            "Organ Transplantation",
            "Physical Medicine & Rehabilitation",
            "Bone Marrow Transplant",
            "Liver Transplant"
        ],
        "facilities": {
            "medical": [
                "Robotic MARS surgeries",
                "ECMO facilities",
                "DBS treatment"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Cardiology"
            },
            {
                "name": "Neurosciences"
            },
            {
                "name": "Oncology"
            },
            {
                "name": "Orthopedics"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr_manoj_p_nair.jpg",
                "name": "Dr Manoj P Nair",
                "speciality": "Cardiac Surgeon",
                "experience": "28 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._vineeth_viswam.jpg",
                "name": "Dr. Vineeth Viswam",
                "speciality": "ENT",
                "experience": "years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr.shyam-sundar.jpg",
                "name": "Dr. Shyam Sundar S",
                "speciality": "Neurosurgeon",
                "experience": "18 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._p_s_binu-min.jpg",
                "name": "Dr. P S Binu",
                "speciality": "General Surgeon",
                "experience": "43 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/aster_medcity_kochi_building_outside-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/astermedcity-main_building.jpg",
            "https://www.vaidam.com/sites/default/files/astermedcity_lake_view.jpg",
            "https://www.vaidam.com/sites/default/files/gallery-03-new.jpg"
        ]
    },
    "hosmat-hospital-bangalore": {
        "id": "hosmat-hospital-bangalore",
        "name": "Hosmat Hospital, Bangalore",
        "location": "#45 Magrath Road Bangalore",
        "address": "#45 Magrath Road Bangalore, 560025",
        "accreditation": [
            "NABH",
            "ISO 9001"
        ],
        "established": 2002,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/hosmat_hospital_building-min.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/hosmat_hospital_building-min.jpg",
        "internationalPatients": 1000,
        "beds": 650,
        "doctors": 65,
        "specialties": 52,
        "specializations": [
            "Joint Replacement",
            "Neurosciences",
            "Plastic & Reconstructive Surgery",
            "Gastroenterology",
            "Physiotherapy",
            "Urology",
            "Orthopedics",
            "Accident-Trauma Care"
        ],
        "facilities": {
            "medical": [
                "Cancer Treatment Center",
                "Rehabilitation Services",
                "Pain Management Clinic"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Joint Replacement"
            },
            {
                "name": "Neurosciences"
            },
            {
                "name": "Plastic & Reconstructive Surgery"
            },
            {
                "name": "Gastroenterology"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._ananya_puttaraju-min.jpg",
                "name": "Dr. Ananya Puttaraju",
                "speciality": "Orthopaedic and Joint Replacement Surgeon",
                "experience": "19 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._thomas-min.jpg",
                "name": "Dr. Thomas A. Chandy",
                "speciality": "Orthopaedic and Joint Replacement Surgeon",
                "experience": "48 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._mn_kumar-min.jpg",
                "name": "Dr. M N Kumar",
                "speciality": "Orthopaedic and Joint Replacement Surgeon",
                "experience": "29 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._ravishankar-min.jpg",
                "name": "Dr. RaviShankar M R",
                "speciality": "Orthopaedic and Joint Replacement Surgeon",
                "experience": "22 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/hosmat_hospital_building-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/hosmat_hospital_2nd-min.jpg",
            "https://www.vaidam.com/sites/default/files/hosmat_hospital_bangalore_reception-min.jpg",
            "https://www.vaidam.com/sites/default/files/hosmat_hospital_bangalore_counter-min.jpg"
        ]
    },
    "rabindranath-tagore-international-institute-cardiac-sciences-kolkata": {
        "id": "rabindranath-tagore-international-institute-cardiac-sciences-kolkata",
        "name": "NH Rabindranath Tagore International Institute of Cardiac Sciences, Kolkata",
        "location": "Premises No: 1489",
        "address": "Premises No: 1489, 124, Eastern Metropolitan Bypass, Mukundapur Market Kolkata, 700099",
        "accreditation": [
            "NABH",
            ""
        ],
        "established": 2000,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/rabindranath_tagore_international_institute_of_cardiac_sciences_kolkata_1-min.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/rabindranath_tagore_international_institute_of_cardiac_sciences_kolkata_1-min.jpg",
        "internationalPatients": 1000,
        "beds": 600,
        "doctors": 60,
        "specialties": 52,
        "specializations": [
            "Cardiac Surgery",
            "Heart Transplants",
            "LVAD",
            "Interventional Cardiology",
            "Pacemaker and Device Therapy",
            "Electrophysiology",
            "Preventive Cardiology",
            "Neurology"
        ],
        "facilities": {
            "medical": [
                "Vascular disease clinical centre",
                "200 kidney transplants annually",
                "Brain Pacemakers for Parkinson's"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Cardiac Surgery"
            },
            {
                "name": "Heart Transplants"
            },
            {
                "name": "Interventional Cardiology"
            },
            {
                "name": "Kidney Transplants"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._arun_ganguly.jpg",
                "name": "Dr. Arun Ganguli",
                "speciality": "Aesthetics and Plastic Surgeon",
                "experience": "17 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._gautam_mukhopadhyay.jpg",
                "name": "Dr. Gautam Mukhopadhyay",
                "speciality": "Surgical Oncologist",
                "experience": "38 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._partha_karmakar.jpg",
                "name": "Dr. Partha Karmakar",
                "speciality": "Nephrologist",
                "experience": "27 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._abhijit_chatterjee.jpg",
                "name": "Dr. Abhijit Chatterjee",
                "speciality": "Interventional Cardiologist",
                "experience": "40 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/rabindranath_tagore_international_institute_of_cardiac_sciences_kolkata_1-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/rabindranath_tagore_international_institute_of_cardiac_sciences_kolkata_2-min.jpg",
            "https://www.vaidam.com/sites/default/files/rabindranath_tagore_international_institute_of_cardiac_sciences_kolkata_3-min.jpg",
            "https://www.vaidam.com/sites/default/files/rabindranath_tagore_international_institute_of_cardiac_sciences_kolkata_4-min.jpg"
        ]
    },
    "billroth-hospital-chennai": {
        "id": "billroth-hospital-chennai",
        "name": "Billroth Hospital, Chennai",
        "location": "Chennai",
        "address": "Chennai",
        "accreditation": [
            "NABH",
            ""
        ],
        "established": 1990,
        "description": "",
        "image": "",
        "logo": "https://www.vaidam.com/sites/default/files/url.jpg",
        "internationalPatients": 1000,
        "beds": 600,
        "doctors": 60,
        "specialties": 52,
        "specializations": [
            "Critical Care",
            "Radiology",
            "Imaging Sciences",
            "Anaesthesiology",
            "Physicians",
            "Nurse Practitioners",
            "Technicians",
            "Physiotherapists"
        ],
        "facilities": {
            "medical": [
                "Cancer Treatment Center",
                "Rehabilitation Services",
                "Pediatric Specialty Clinic"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Critical Care Unit"
            },
            {
                "name": "Radiology and Imaging Sciences"
            },
            {
                "name": "Laboratory Services"
            },
            {
                "name": "Free Medical Camps"
            }
        ],
        "topDoctors": [
            {
                "image": "",
                "name": "",
                "speciality": "",
                "experience": ""
            },
            {
                "image": "",
                "name": "",
                "speciality": "",
                "experience": ""
            },
            {
                "image": "",
                "name": "",
                "speciality": "",
                "experience": ""
            },
            {
                "image": "",
                "name": "",
                "speciality": "",
                "experience": ""
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "",
            "",
            "",
            ""
        ]
    },
    "manipal-hospital-bangalore": {
        "id": "manipal-hospital-bangalore",
        "name": "Manipal Hospital (Old Airport Road), Bangalore",
        "location": "Manipal Hospital Bangalore",
        "address": "Manipal Hospital Bangalore, 560017",
        "accreditation": [
            "NABH",
            "NABL"
        ],
        "established": 1991,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/manipal_hospital_old_airport_road_bangalore_building1-min.jpg",
        "logo": "https://d1pkj1wi9lp6qx.cloudfront.net/50/files/manipal_hospital_old_airport_road_bangalore_building1-min.webp",
        "internationalPatients": 1000,
        "beds": 600,
        "doctors": 60,
        "specialties": 52,
        "specializations": [
            "Oncology",
            "Cardiology",
            "ENT",
            "Gastrointestinal",
            "Orthopaedics",
            "Organ transplant",
            "Dermatology",
            "Neurology"
        ],
        "facilities": {
            "medical": [
                "Intracavitary Chemotherapy",
                "Gamma med brachytherapy system",
                "Volumetric modulated arc therapy"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Intracavitary Chemotherapy"
            },
            {
                "name": "Gamma med brachytherapy system"
            },
            {
                "name": "Volumetric modulated arc therapy (VMAT)"
            },
            {
                "name": "Intensity-modulated radiotherapy (IMRT)"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._venkatesh_reddy.jpg",
                "name": "Dr. Venkatesh Reddy",
                "speciality": "Vascular Surgeon",
                "experience": "32 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._madva_jayashankar.jpg",
                "name": "Dr. Madva Jayashankar",
                "speciality": "General Surgeon",
                "experience": "40 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._e.v._raman-removebg-preview-min_0.png",
                "name": "Dr. E.V. Raman",
                "speciality": "ENT Surgeon",
                "experience": "42 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._mohan_y_badgandi-min.png",
                "name": "Dr. Mohan Y. Badgandi",
                "speciality": "Endocrinologist",
                "experience": "48 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/manipal_hospital_old_airport_road_bangalore_building1-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/manipal_hospital_bangalore.jpg",
            "https://www.vaidam.com/sites/default/files/manipal_hospital_old_airport_road_bangalore_registration_counter.jpg",
            "https://www.vaidam.com/sites/default/files/manipal_hospital_old_airport_road_bangalore_waiting_lounge.jpg"
        ]
    },
    "medica-superspecialty-hospital": {
        "id": "medica-superspecialty-hospital",
        "name": "Medica Superspecialty Hospital, Kolkata",
        "location": "127",
        "address": "127, Eastern Metropolitan Bypass Rd, Nitai Nagar, Mukundapur Kolkata, 700099",
        "accreditation": [
            "NABH",
            "NABL"
        ],
        "established": 2010,
        "description": "",
        "image": "https://www.vaidam.com/sites/default/files/hospitals/medica_superspecialty_hospital_building1-min.jpg",
        "logo": "https://www.vaidam.com/sites/default/files/medica_superspecialty_hospital_building1-min.jpg",
        "internationalPatients": 1000,
        "beds": 600,
        "doctors": 60,
        "specialties": 52,
        "specializations": [
            "Anaesthesiology",
            "Cardiology",
            "Cardiac surgery",
            "Critical care",
            "Dermatology & cosmetology",
            "Dentistry",
            "Emergency medicine",
            "Endocrinology"
        ],
        "facilities": {
            "medical": [
                "Medical Dialysis Center",
                "Green Operation Theatre",
                "Robotic Surgery Training Center"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer"
            ]
        },
        "procedures": [
            {
                "name": "Robotic Surgery"
            },
            {
                "name": "Dialysis"
            },
            {
                "name": "Cardiac Surgery"
            },
            {
                "name": "Critical Care"
            }
        ],
        "topDoctors": [
            {
                "image": "https://www.vaidam.com/sites/default/files/kunal-sarkar-500x460.jpg",
                "name": "Dr. Kunal Sarkar",
                "speciality": "Cardiac Surgeon",
                "experience": "28 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/prof_dr_rabin_chakraborty-min.png",
                "name": "Prof Dr Rabin Chakraborty",
                "speciality": "Electrophysiologist",
                "experience": "41 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr._mrinal_das.jpg",
                "name": "Dr. Mrinal Bandhu Das",
                "speciality": "Cardiac Surgeon",
                "experience": "41 years"
            },
            {
                "image": "https://www.vaidam.com/sites/default/files/dr.soumya_patra.jpg",
                "name": "Dr. Soumya Patra",
                "speciality": "Cardiac Surgeon",
                "experience": "20 years"
            }
        ],
        "reviews": 4.5,
        "reviewCount": 125,
        "images": [
            "https://www.vaidam.com/sites/default/files/hospitals/medica_superspecialty_hospital_building1-min.jpg",
            "https://www.vaidam.com/sites/default/files/hospitals/main_d.png",
            "https://www.vaidam.com/sites/default/files/reception_d.png",
            "https://www.vaidam.com/sites/default/files/lobby_d.png"
        ]
    }
};