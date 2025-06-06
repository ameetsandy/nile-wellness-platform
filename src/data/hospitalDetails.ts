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
                "Brain tumor surgery",
                "Modern Operation Theatres",
                "Intensive Care Units",
                "24/7 Emergency Department"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer",
                "Currency Exchange",
                "Language Interpreter",
                "Hotel Booking",
                "Cafeteria",
                "24/7 Pharmacy"
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
                "Dedicated international patient services",
                "Modern Operation Theatres",
                "Intensive Care Units",
                "24/7 Emergency Department"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer",
                "Currency Exchange",
                "Language Interpreter",
                "Hotel Booking",
                "Cafeteria",
                "24/7 Pharmacy"
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
                "Digital MRI Technology",
                "Modern Operation Theatres",
                "Intensive Care Units",
                "24/7 Emergency Department"
            ],
            "amenities": [
                "International Patient Lounge",
                "Visa Assistance",
                "Airport Transfer",
                "Currency Exchange",
                "Language Interpreter",
                "Hotel Booking",
                "Cafeteria",
                "24/7 Pharmacy"
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
    }
};