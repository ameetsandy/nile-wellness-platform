import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Search, Filter, Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [city, setCity] = useState("");
  const [visibleDoctors, setVisibleDoctors] = useState(40); // Show 12 doctors initially (3 rows)

  const doctors = [
    {
      "id": 1,
      "name": "Dr. Subodh Chandra Pande",
      "specialty": "radiation oncologist",
      "designation": "consultant",
      "hospital": "artemis hospital, gurgaon",
      "city": "unknown",
      "experience": "10+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-subhash-chandra-pande-radiation-oncology.jpg",
      "path": "/doctors/dr-subodh-chandra-pande"
    },
    {
      "id": 2,
      "name": "Dr. Anmol Nagaraj",
      "specialty": "neurosurgeon",
      "designation": "consultant",
      "hospital": "sparsh hospital (yeshwanthpur) bangalore",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._anmol_nagaraj-min.jpg",
      "path": "/doctors/dr-anmol-nagaraj"
    },
    {
      "id": 3,
      "name": "Dr. Mahesh Ghogare",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "reliance hospitals, navi mumbai",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_mahesh.jpg",
      "path": "/doctors/dr-mahesh-ghogare"
    },
    {
      "id": 4,
      "name": "Dr. Amit Sharma",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "saifee hospital, mumbai",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._amit_sharma_-_spine_surgeon.jpg",
      "path": "/doctors/dr-amit-sharma-spine-surgeon"
    },
    {
      "id": 5,
      "name": "Dr Yadhu K Lokanath",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "aster rv hospital (j p nagar) bangalore",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-yadhu-k-lokanath.jpg",
      "path": "/doctors/dr-yadhu-k-lokanath"
    },
    {
      "id": 6,
      "name": "Dr. Harsh Bhardwaj",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "aakash healthcare super speciality hospital, dwarka, new delhi",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-harsh-bhardwaj.jpg",
      "path": "/doctors/dr-harsh-bhardwaj"
    },
    {
      "id": 7,
      "name": "Dr. Ankit Singh",
      "specialty": "neurologist",
      "designation": "associate consultant",
      "hospital": "apollo medics super speciality hospital, lucknow",
      "city": "unknown",
      "experience": "12+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ankit-min.png",
      "path": "/doctors/dr-ankit-singh"
    },
    {
      "id": 8,
      "name": "Dr. Anurag Sihag",
      "specialty": "neurosurgeon",
      "designation": "consultant",
      "hospital": "shalby hospital, jaipur",
      "city": "unknown",
      "experience": "12+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_anurag_sihag.png",
      "path": "/doctors/dr-anurag-sihag"
    },
    {
      "id": 9,
      "name": "Dr. Ved Prakash",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "sarvodaya hospital, faridabad",
      "city": "unknown",
      "experience": "12+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ved_prakash-removebg-preview-min_0.png",
      "path": "/doctors/dr-ved-prakash"
    },
    {
      "id": 10,
      "name": "Dr. Avinash K M",
      "specialty": "neurosurgeon",
      "designation": "consultant",
      "hospital": "manipal hospital formerly columbia asia referral hospital, bangalore (yeshwanthpur)",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._avinash-min.jpg",
      "path": "/doctors/dr-avinash-k-m"
    },
    {
      "id": 11,
      "name": "Dr. G Dimpu Edwin Jonathan",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "aster rv hospital (j p nagar) bangalore",
      "city": "unknown",
      "experience": "12+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._g_dimpu_edwin_jonathan.jpg",
      "path": "/doctors/dr-g-dimpu-edwin-jonathan"
    },
    {
      "id": 12,
      "name": "Dr. A. M. Bharath Reddy",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo spectra hospital, chennai",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._a._m._bharath_reddy_-_cardiologist.jpg",
      "path": "/doctors/dr-m-bharath-reddy"
    },
    {
      "id": 13,
      "name": "Dr. Abhishek Patil",
      "specialty": "rheumatologist",
      "designation": "consultant",
      "hospital": "manipal hospital (old airport road) bangalore",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.abhishek-min.png",
      "path": "/doctors/dr-abhishek-patil"
    },
    {
      "id": 14,
      "name": "Dr. Sumana B Pallegar",
      "specialty": "neurosurgeon",
      "designation": "consultant",
      "hospital": "narayana multispeciality hospital, bangalore",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._sumana_b_pallegar_-_neurosurgeon.jpg",
      "path": "/doctors/dr-sumana-b-pallegar"
    },
    {
      "id": 15,
      "name": "Dr Khushbu Goel",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "manipal hospitals dwarka, delhi",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_khushbu_goel.jpg",
      "path": "/doctors/dr-khushbu-goel"
    },
    {
      "id": 16,
      "name": "Dr. Keval Changadiya",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "cims hospital, ahmedabad",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_keval_changadiya.jpeg",
      "path": "/doctors/dr-keval-changadiya"
    },
    {
      "id": 17,
      "name": "Dr. Ankit Gupta",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "shalby hospital, jaipur",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_ankit_gupta-min.png",
      "path": "/doctors/dr-ankit-gupta-cardiologist"
    },
    {
      "id": 18,
      "name": "Dr. Nishant Shanker Yagnick",
      "specialty": "neurosurgeon",
      "designation": "senior consultant",
      "hospital": "fortis hospital, manesar, gurgaon",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._nishant-min.jpg",
      "path": "/doctors/dr-nishant-shanker-yagnick"
    },
    {
      "id": 19,
      "name": "Dr. Anup Charles Steven",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "aster cmi hospital (hebbel) bangalore",
      "city": "unknown",
      "experience": "15+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._anup_charles_steven_-_cardiothoracic_surgeon.jpg",
      "path": "/doctors/dr-anup-charles-steven"
    },
    {
      "id": 20,
      "name": "Dr. Praveen Phaneendranath Sadarmin",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "narayana institute of cardiac sciences, bangalore",
      "city": "unknown",
      "experience": "15+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._praveen_phaneendranath_sadarmin_-_cardiologist.jpg",
      "path": "/doctors/dr-praveen-phaneendranath-sadarmin"
    },
    {
      "id": 21,
      "name": "Dr. Ashwin Borkar",
      "specialty": "neurosurgeon",
      "designation": "consultant",
      "hospital": "wockhardt super speciality hospital, mira road",
      "city": "unknown",
      "experience": "15+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ashwin_borkar-min.jpg",
      "path": "/doctors/dr-ashwin-borkar"
    },
    {
      "id": 22,
      "name": "Dr. Srichandran L",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "mgm healthcare, chennai",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._srichandran_l_-_interventional_cardiologist.jpg",
      "path": "/doctors/dr-srichandran-l"
    },
    {
      "id": 23,
      "name": "Dr. Arvind Kulkarni",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "saifee hospital, mumbai",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._arvind_kulkarni_-_spinal_surgeon_0.jpg",
      "path": "/doctors/dr-arvind-kulkarni"
    },
    {
      "id": 24,
      "name": "Dr. Jimmy Lalkaka",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "saifee hospital, mumbai",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._jimmy_lalkaka_-_neurologist.jpg",
      "path": "/doctors/dr-jimmy-lalkaka"
    },
    {
      "id": 25,
      "name": "Dr. Kisley Shrivastav",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "apollo sage hospital",
      "city": "unknown",
      "experience": "15+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._kisley_shrivastav_0.jpg",
      "path": "/doctors/dr-kisley-shrivastav"
    },
    {
      "id": 26,
      "name": "Dr. Sankalp Bhartiya",
      "specialty": "neurosurgeon",
      "designation": "consultant",
      "hospital": "fortis escorts hospital jaipur",
      "city": "unknown",
      "experience": "8+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._sankalp_bhartiya-min.jpg",
      "path": "/doctors/dr-sankalp-bhartiya"
    },
    {
      "id": 27,
      "name": "Dr. Sudhir Kumar",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "apollo hospitals, jubilee hills hyderabad",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._sudhir_kumar_0.jpg",
      "path": "/doctors/dr-sudhir-kumar-neurologist"
    },
    {
      "id": 28,
      "name": "Dr. Anshul Patodia",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "shalby hospital, jaipur",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_anshul_patodia-min.png",
      "path": "/doctors/dr-anshul-patodia"
    },
    {
      "id": 29,
      "name": "Dr. Arun L. Naik",
      "specialty": "neurosurgeon",
      "designation": "head of department",
      "hospital": "apollo hospital (bannerghatta road) bangalore",
      "city": "unknown",
      "experience": "21+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._arun_l._naik_-_neurosurgeon.jpg",
      "path": "/doctors/dr-arun-l-naik"
    },
    {
      "id": 30,
      "name": "Dr. Pawan Goyal",
      "specialty": "neurosurgeon",
      "designation": "consultant",
      "hospital": "artemis hospital, gurgaon",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._pawan_goyal_-_neurosurgeon.jpg",
      "path": "/doctors/dr-pawan-goyal"
    },
    {
      "id": 31,
      "name": "Dr. Rajesh Benny",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "fortis hospital, mulund, mumbai",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/drrajesh-benny.jpg",
      "path": "/doctors/dr-rajesh-benny"
    },
    {
      "id": 32,
      "name": "Dr. K. R. Balakrishnan",
      "specialty": "cardiac surgeon",
      "designation": "chairman",
      "hospital": "mgm healthcare, chennai",
      "city": "unknown",
      "experience": "46+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._k._r._balakrishnan-min.jpg",
      "path": "/doctors/dr-k-r-balakrishnan"
    },
    {
      "id": 33,
      "name": "Dr. Lalit Aditya Malik",
      "specialty": "cardiac surgeon",
      "designation": "hod",
      "hospital": "manipal hospital, jaipur",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._lalit_aditya_malik-min.jpg",
      "path": "/doctors/dr-lalit-aditya-malik"
    },
    {
      "id": 34,
      "name": "Dr. Rahul Jain",
      "specialty": "neurosurgeon",
      "designation": "consultant",
      "hospital": "apollo sage hospital",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_rahul_jain-min.jpeg",
      "path": "/doctors/dr-rahul-jain-neurosurgery"
    },
    {
      "id": 35,
      "name": "Dr. Mangesh G Kohale",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "wockhardt hospital, mumbai",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._mangesh_g_kohale.jpg",
      "path": "/doctors/dr-mangesh-g-kohale"
    },
    {
      "id": 36,
      "name": "Dr. Arun Sharma",
      "specialty": "neurosurgeon",
      "designation": "consultant",
      "hospital": "indian spinal injuries center, new delhi",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._arun_sharma_-neurosurgeon.jpg",
      "path": "/doctors/dr-arun-sharma"
    },
    {
      "id": 37,
      "name": "Dr. Arun Sharma",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "indian spinal injuries center, new delhi",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._arun_sharma_-neurosurgeon.jpg",
      "path": "/doctors/dr-arun-sharma"
    },
    {
      "id": 38,
      "name": "Dr. Siddhartha Ghosh",
      "specialty": "neurosurgeon",
      "designation": "senior consultant",
      "hospital": "apollo proton cancer centre, chennai",
      "city": "unknown",
      "experience": "40+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/6_2.jpg",
      "path": "/doctors/dr-siddhartha-ghosh"
    },
    {
      "id": 39,
      "name": "Dr. Amit Mittal",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "indraprastha apollo hospital, new delhi",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._amit_mittal_-_interventional_cardiologist.jpg",
      "path": "/doctors/dr-amit-mittal"
    },
    {
      "id": 40,
      "name": "Dr. Annu Aggarwal",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "kokilaben dhirubhai ambani hospital, mumbai",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_annu_aggarwal_-_consultant_neurologist.jpg",
      "path": "/doctors/dr-annu-aggarwal"
    },
    {
      "id": 41,
      "name": "Dr. Emmanuel Thas J",
      "specialty": "neurosurgeon",
      "designation": "consultant",
      "hospital": "kauvery hospital radial road chennai",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._emmanuel_thas_j.jpg",
      "path": "/doctors/dr-emmanuel-thas-j"
    },
    {
      "id": 42,
      "name": "Dr. M. Naga Suresh",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "medicover hospital, kurnool",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.suresh-min.png",
      "path": "/doctors/dr-m-naga-suresh"
    },
    {
      "id": 43,
      "name": "Dr. Vishal Kundnani",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "p.d hinduja hospital & medical research centre, mumbai",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._vishal_kundnani_-_spine_surgeon.jpg",
      "path": "/doctors/dr-vishal-kundnani"
    },
    {
      "id": 44,
      "name": "Dr. Pawan Garg",
      "specialty": "neurosurgeon",
      "designation": "senior consultant",
      "hospital": "medeor hospital, qutab, new delhi",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._pawan_garg_-_neurosurgeon.jpg",
      "path": "/doctors/dr-pawan-garg"
    },
    {
      "id": 45,
      "name": "Dr. Rahul Chaudhari",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "manipal hospital, baner, pune",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_rahul_chaudhari.jpg",
      "path": "/doctors/dr-rahul-chaudhari"
    },
    {
      "id": 46,
      "name": "Dr. Amitabh Gupta",
      "specialty": "neurosurgeon",
      "designation": "consultant",
      "hospital": "pushpawati singhania research institute, new delhi",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._amitabh_gupta.jpg",
      "path": "/doctors/dr-amitabh-gupta"
    },
    {
      "id": 47,
      "name": "Dr. J. Kannan",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "narayana institute of cardiac sciences, bangalore",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/_dr._kannan_j.jpg",
      "path": "/doctors/dr-j-kannan"
    },
    {
      "id": 48,
      "name": "Dr. Sushil Tandel",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "asian heart institute, mumbai",
      "city": "unknown",
      "experience": "26+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._sushil_tandel-min.png",
      "path": "/doctors/dr-sushil-tandel"
    },
    {
      "id": 49,
      "name": "Dr. Rahul Chakor",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "saifee hospital, mumbai",
      "city": "unknown",
      "experience": "27+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._rahul_chakor_-_neurologist.jpg",
      "path": "/doctors/dr-rahul-chakor"
    },
    {
      "id": 50,
      "name": "Dr. Rithesh R Nair",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "sims hospital, vadapalani, chennai",
      "city": "unknown",
      "experience": "26+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._rithesh_r_nair.jpg",
      "path": "/doctors/dr-rithesh-r-nair"
    },
    {
      "id": 51,
      "name": "Dr. Anil Kumar Kansal",
      "specialty": "neurosurgeon",
      "designation": "head of department",
      "hospital": "blk-max super speciality hospital delhi",
      "city": "unknown",
      "experience": "34+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-anil-kumar-kansal-neurosurgeon_0.jpg",
      "path": "/doctors/dr-anil-kumar-kansal"
    },
    {
      "id": 52,
      "name": "Dr. Saurabh Chopra",
      "specialty": "paediatric neurologist",
      "designation": "consultant",
      "hospital": "indraprastha apollo hospital, new delhi",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_saurabh_chopra-min.jpg",
      "path": "/doctors/dr-saurabh-chopra"
    },
    {
      "id": 53,
      "name": "Dr. Mohit Goel",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "max super speciality hospital, saket, new delhi",
      "city": "unknown",
      "experience": "28+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._mohit_goel.jpg",
      "path": "/doctors/dr-mohit-goel"
    },
    {
      "id": 54,
      "name": "Dr. Surya Prakasa Rao Vithala",
      "specialty": "interventional cardiologist",
      "designation": "hod",
      "hospital": "care hospitals, banjara hills, hyderabad",
      "city": "unknown",
      "experience": "25+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._surya_prakasa_rao_vithala-min.jpg",
      "path": "/doctors/dr-surya-prakasa-rao-vithala"
    },
    {
      "id": 55,
      "name": "Dr. Shahid Merchant",
      "specialty": "interventional cardiologist",
      "designation": "senior consultant",
      "hospital": "saifee hospital, mumbai",
      "city": "unknown",
      "experience": "29+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._shahid_merchant_-_cardiologist.jpg",
      "path": "/doctors/dr-shahid-merchant"
    },
    {
      "id": 56,
      "name": "Dr. Anudath Brahmadathan",
      "specialty": "neurosurgeon",
      "designation": "hod",
      "hospital": "meitra hospital, kerala",
      "city": "unknown",
      "experience": "26+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._anudath_brahmadathan-min.jpg",
      "path": "/doctors/dr-anudath-brahmadathan"
    },
    {
      "id": 57,
      "name": "Dr. Nirmal Surya",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "saifee hospital, mumbai",
      "city": "unknown",
      "experience": "33+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._nirmal_surya_-_neurologist.jpg",
      "path": "/doctors/dr-nirmal-surya"
    },
    {
      "id": 58,
      "name": "Dr. Neeraj Gupta",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "indian spinal injuries center, new delhi",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._neeraj_gupta-min.jpg",
      "path": "/doctors/dr-neeraj-gupta"
    },
    {
      "id": 59,
      "name": "Dr. Muhammad Farooq",
      "specialty": "neurosurgeon",
      "designation": "consultant",
      "hospital": "saifee hospital, mumbai",
      "city": "unknown",
      "experience": "30+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._muhammad_farooq_-_neurosurgeon.jpeg",
      "path": "/doctors/dr-muhammad-farooq"
    },
    {
      "id": 60,
      "name": "Dr. Vrajesh Udani",
      "specialty": "paediatric neurologist",
      "designation": "consultant",
      "hospital": "saifee hospital, mumbai",
      "city": "unknown",
      "experience": "38+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._vrajesh_udani_-_pediatric_neurologist.jpg",
      "path": "/doctors/dr-vrajesh-udani"
    },
    {
      "id": 61,
      "name": "Dr. Anil Saxena",
      "specialty": "interventional cardiologist",
      "designation": "director",
      "hospital": "fortis escorts heart institute, new delhi",
      "city": "unknown",
      "experience": "35+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._anil_saxena.jpg",
      "path": "/doctors/dr-anil-saxena"
    },
    {
      "id": 62,
      "name": "Dr. Rajiv Khanna",
      "specialty": "ent surgeon",
      "designation": "hod",
      "hospital": "apollo medics super speciality hospital, lucknow",
      "city": "unknown",
      "experience": "40+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_rajiv_khanna.jpg",
      "path": "/doctors/dr-rajiv-khanna-ent"
    },
    {
      "id": 63,
      "name": "Dr. Sitla Prasad Pathak",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "max super speciality hospital, vaishali",
      "city": "unknown",
      "experience": "10+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._sitla_prasad_pathak.jpg",
      "path": "/doctors/dr-sitla-prasad-pathak"
    },
    {
      "id": 64,
      "name": "Dr. Satishchandra P",
      "specialty": "neurologist",
      "designation": "senior consultant",
      "hospital": "apollo speciality hospital, jayanagar",
      "city": "unknown",
      "experience": "43+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.satishchandra_p.jpg",
      "path": "/doctors/dr-satishchandra-p"
    },
    {
      "id": 65,
      "name": "Dr. K Subramanyan",
      "specialty": "interventional cardiologist",
      "designation": "director",
      "hospital": "sims hospital, vadapalani, chennai",
      "city": "unknown",
      "experience": "43+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._k_subramanyan.jpg",
      "path": "/doctors/dr-k-subramanyan"
    },
    {
      "id": 66,
      "name": "Dr. Upendra Bhalerao",
      "specialty": "cardiac surgeon",
      "designation": "senior consultant",
      "hospital": "nanavati super specialty hospital, mumbai",
      "city": "unknown",
      "experience": "15+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._upendra_bhalerao-min.jpg",
      "path": "/doctors/dr-upendra-bhalerao"
    },
    {
      "id": 67,
      "name": "Dr. Mahesh Chaudhari",
      "specialty": "neurosurgeon",
      "designation": "consultant",
      "hospital": "s. l. raheja hospital, mumbai",
      "city": "unknown",
      "experience": "46+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._mahesh_chaudhari_-_neurosurgeon.jpg",
      "path": "/doctors/dr-mahesh-chaudhari"
    },
    {
      "id": 68,
      "name": "Dr. Sudesh Prabhakar",
      "specialty": "neurologist",
      "designation": "director",
      "hospital": "fortis hospital, mohali",
      "city": "unknown",
      "experience": "46+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_sudesh.jpg",
      "path": "/doctors/dr-sudesh-prabhakar"
    },
    {
      "id": 69,
      "name": "Dr. Mahendra Prasad Tripathy",
      "specialty": "interventional cardiologist",
      "designation": "director",
      "hospital": "care super specialty hospital, bhubaneswar",
      "city": "unknown",
      "experience": "42+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-mp-tripaty.png",
      "path": "/doctors/dr-mahendra-prasad-tripathy"
    },
    {
      "id": 70,
      "name": "Dr. Anil Karapurkar",
      "specialty": "neurosurgeon",
      "designation": "consultant",
      "hospital": "breach candy hospital, mumbai",
      "city": "unknown",
      "experience": "50+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._anil_karapurkar_-_neurosurgeon.jpg",
      "path": "/doctors/dr-anil-karapurkar"
    },
    {
      "id": 71,
      "name": "Dr. Rajiv Karnik",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "fortis hospital, mulund, mumbai",
      "city": "unknown",
      "experience": "44+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_rajiv_karnik.jpg",
      "path": "/doctors/dr-rajiv-karnik"
    },
    {
      "id": 72,
      "name": "Dr. Gaurav Khandelwal",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "shalby hospital, surat",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_gaurav_khandelwal-min.jpg",
      "path": "/doctors/dr-gaurav-khandelwal"
    },
    {
      "id": 73,
      "name": "Dr. V. Narendra Kumar",
      "specialty": "interventional cardiologist",
      "designation": "senior consultant",
      "hospital": "dr. rela institute and medical centre, chennai",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_v_narendra_kumar.jpg",
      "path": "/doctors/dr-v-narendra-kumar"
    },
    {
      "id": 74,
      "name": "Dr. Manoranjan Misra",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "care super specialty hospital, bhubaneswar",
      "city": "unknown",
      "experience": "10+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.-manoranjan-misra.png",
      "path": "/doctors/dr-manoranjan-misra"
    },
    {
      "id": 75,
      "name": "Dr. Richa Agrawal",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "metro hospital and heart institute, noida sector 12",
      "city": "unknown",
      "experience": "11+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._richa_agrawal-min.jpg",
      "path": "/doctors/dr-richa-agrawal"
    },
    {
      "id": 76,
      "name": "Dr. Richa Agrawal",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "metro hospital and heart institute, noida sector 13",
      "city": "unknown",
      "experience": "11+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._richa_agrawal-min.jpg",
      "path": "/doctors/dr-richa-agrawal"
    },
    {
      "id": 77,
      "name": "Dr. Tridib Chowdhury",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "manipal hospital formerly amri hospital, kolkata (mukundapur)",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._tridib_chowdhury-min.jpg",
      "path": "/doctors/dr-tridib-chowdhury"
    },
    {
      "id": 78,
      "name": "Dr. Ranjan Kachru",
      "specialty": "interventional cardiologist",
      "designation": "additional director",
      "hospital": "fortis flt. lt. rajan dhall hospital, vasant kunj, new delhi",
      "city": "unknown",
      "experience": "41+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ranjan_kachru-min.jpg",
      "path": "/doctors/dr-ranjan-kachru"
    },
    {
      "id": 79,
      "name": "Dr. Amit Chakrabarty",
      "specialty": "neurosurgeon",
      "designation": "additional director",
      "hospital": "ck birla hospital, jaipur",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._amit_chakrabarty.jpeg",
      "path": "/doctors/dr-amit-chakrabarty"
    },
    {
      "id": 80,
      "name": "Dr. Neetu Ramrakhiani",
      "specialty": "neurologist",
      "designation": "additional director",
      "hospital": "fortis escorts hospital jaipur",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-neetu-ramrakhiani.jpeg",
      "path": "/doctors/dr-neetu-ramrakhiani"
    },
    {
      "id": 81,
      "name": "Dr. Km Hassan",
      "specialty": "neurologist",
      "designation": "additional director",
      "hospital": "jaypee hospital, noida",
      "city": "unknown",
      "experience": "33+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._km-hassan-min.jpg",
      "path": "/doctors/dr-km-hassan"
    },
    {
      "id": 82,
      "name": "Dr. Vivek Vaid",
      "specialty": "neurosurgeon",
      "designation": "additional director",
      "hospital": "fortis escorts hospital jaipur",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._vivek_vaid-min.jpg",
      "path": "/doctors/dr-vivek-vaid"
    },
    {
      "id": 83,
      "name": "Dr. Sharad Sharma",
      "specialty": "paediatric neurologist",
      "designation": "additional director",
      "hospital": "fortis escorts hospital jaipur",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._sharad_sharma-min.jpg",
      "path": "/doctors/dr-sharad-sharma-0"
    },
    {
      "id": 84,
      "name": "Dr. Vivek Vaid",
      "specialty": "spine surgeon",
      "designation": "additional director",
      "hospital": "fortis escorts hospital jaipur",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._vivek_vaid-min.jpg",
      "path": "/doctors/dr-vivek-vaid"
    },
    {
      "id": 85,
      "name": "Dr. Rakesh Chittora",
      "specialty": "cardiac surgeon",
      "designation": "additional director",
      "hospital": "fortis escorts hospital jaipur",
      "city": "unknown",
      "experience": "21+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._rakesh_chittora-min.jpg",
      "path": "/doctors/dr-rakesh-chittora"
    },
    {
      "id": 86,
      "name": "Dr. Rahul Singhal",
      "specialty": "cardiac surgeon",
      "designation": "additional director",
      "hospital": "fortis escorts hospital jaipur",
      "city": "unknown",
      "experience": "21+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._rahul_singhal-min.jpg",
      "path": "/doctors/dr-rahul-singhal"
    },
    {
      "id": 87,
      "name": "Dr. Ambuj Choudhary",
      "specialty": "cardiac surgeon",
      "designation": "additional director",
      "hospital": "fortis hospital, mohali",
      "city": "unknown",
      "experience": "28+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ambuj-min.jpg",
      "path": "/doctors/dr-ambuj-choudhary"
    },
    {
      "id": 88,
      "name": "Dr. Vishnu Gupta",
      "specialty": "neurosurgeon",
      "designation": "additional director",
      "hospital": "fortis hospital ludhiana",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._vishnu_gupta-min.jpg",
      "path": "/doctors/dr-vishnu-gupta"
    },
    {
      "id": 89,
      "name": "Dr. Vishnu Gupta",
      "specialty": "spine surgeon",
      "designation": "additional director",
      "hospital": "fortis hospital ludhiana",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._vishnu_gupta-min.jpg",
      "path": "/doctors/dr-vishnu-gupta"
    },
    {
      "id": 90,
      "name": "Dr. Atul Luthra",
      "specialty": "endocrinologist",
      "designation": "additional director",
      "hospital": "fortis memorial research institute, gurgaon",
      "city": "unknown",
      "experience": "34+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._atul_luthra.jpg",
      "path": "/doctors/dr-atul-luthra-endocrinology-diabetes"
    },
    {
      "id": 91,
      "name": "Dr. B L Aggarwal",
      "specialty": "interventional cardiologist",
      "designation": "additional director",
      "hospital": "jaypee hospital, noida",
      "city": "unknown",
      "experience": "27+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-b-l-agarwal-min.jpg",
      "path": "/doctors/dr-b-l-aggarwal"
    },
    {
      "id": 92,
      "name": "Dr. Vivek Raj",
      "specialty": "medical gastroenterologist",
      "designation": "director",
      "hospital": "max super speciality hospital, saket, new delhi",
      "city": "unknown",
      "experience": "43+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-vivek-raj-max.jpg",
      "path": "/doctors/dr-vivek-raj-gastroentrology-and-hepatology"
    },
    {
      "id": 93,
      "name": "Dr. Dilip Kumar",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "medica superspecialty hospital",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.-dilip-kumar-cardiology.jpg",
      "path": "/doctors/dr-dilip-kumar"
    },
    {
      "id": 94,
      "name": "Dr. Neelam Kaul",
      "specialty": "interventional cardiologist",
      "designation": "senior consultant",
      "hospital": "amandeep hospital, pathankot",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._neelam_kaul.jpg",
      "path": "/doctors/dr-neelam-kaul"
    },
    {
      "id": 95,
      "name": "Dr. Ravi Kumar R",
      "specialty": "interventional cardiologist",
      "designation": "senior consultant",
      "hospital": "mgm healthcare, chennai",
      "city": "unknown",
      "experience": "29+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ravi_kumar_r_-_cardiologist.jpg",
      "path": "/doctors/dr-ravi-kumar-r"
    },
    {
      "id": 96,
      "name": "Dr. Naveen Tahasildar",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "sparsh hospital, bommasandra",
      "city": "unknown",
      "experience": "21+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._naveen_tahasildar-min.jpg",
      "path": "/doctors/dr-naveen-tahasildar"
    },
    {
      "id": 97,
      "name": "Dr. Parthasarathy Srinivasan",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "dr. rela institute and medical centre, chennai",
      "city": "unknown",
      "experience": "15+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._parthasarathy_srinivasan_-_consultant_spine_surgeon.jpg",
      "path": "/doctors/dr-parthasarathy-srinivasan"
    },
    {
      "id": 98,
      "name": "Dr. Muralidharan V",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "apollo hospitals, greams road, chennai",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/4_4.jpg",
      "path": "/doctors/dr-muralidharan-v"
    },
    {
      "id": 99,
      "name": "Dr. Nitti Kapoor Kaushal",
      "specialty": "neurologist",
      "designation": "associate consultant",
      "hospital": "manipal hospital formerly columbia asia, patiala",
      "city": "unknown",
      "experience": "12+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview71-min.png",
      "path": "/doctors/dr-nitti-kapoor-kaushal"
    },
    {
      "id": 100,
      "name": "Dr. Samir Puri",
      "specialty": "cardiac surgeon",
      "designation": "associate consultant",
      "hospital": "delhi heart and lung institute",
      "city": "unknown",
      "experience": "15+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._samir_puri.jpg",
      "path": "/doctors/dr-samir-puri"
    },
    {
      "id": 101,
      "name": "Dr. S. T. Sakthi Suganya",
      "specialty": "interventional cardiologist",
      "designation": "associate consultant",
      "hospital": "kauvery hospital, alwarpet",
      "city": "unknown",
      "experience": "15+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/untitled6929-min.png",
      "path": "/doctors/dr-s-t-sakthi-suganya"
    },
    {
      "id": 102,
      "name": "Dr. Naveen C B",
      "specialty": "interventional cardiologist",
      "designation": "associate consultant",
      "hospital": "fortis hospital, bangalore (cunningham road)",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/untitled690-min.png",
      "path": "/doctors/dr-naveen-c-b"
    },
    {
      "id": 103,
      "name": "Dr Dhanajay Zutshi",
      "specialty": "interventional cardiologist",
      "designation": "associate consultant",
      "hospital": "manipal hospital, baner, pune",
      "city": "unknown",
      "experience": "10+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_dhanajay_zutshi-min.jpg",
      "path": "/doctors/dr-dhanajay-zutshi"
    },
    {
      "id": 104,
      "name": "Dr. Punish Sadana",
      "specialty": "interventional cardiologist",
      "designation": "associate consultant",
      "hospital": "max super speciality hospital, dehradun",
      "city": "unknown",
      "experience": "12+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._punish_sadana-min.png",
      "path": "/doctors/dr-punish-sadana"
    },
    {
      "id": 105,
      "name": "Dr. Aditya Atal",
      "specialty": "neurosurgeon",
      "designation": "associate consultant",
      "hospital": "alexis multispeciality hospital, nagpur, maharashtra, india",
      "city": "unknown",
      "experience": "11+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._aditya_atal-min.jpg",
      "path": "/doctors/dr-aditya-atal"
    },
    {
      "id": 106,
      "name": "Dr. Vikas Sharma",
      "specialty": "neurosurgeon",
      "designation": "associate consultant",
      "hospital": "fortis memorial research institute, gurgaon",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._vikas_sharma.jpg",
      "path": "/doctors/dr-vikas-sharma"
    },
    {
      "id": 107,
      "name": "Dr. Arunkumar Karthikayan",
      "specialty": "neurosurgeon",
      "designation": "associate consultant",
      "hospital": "kauvery hospital, alwarpet",
      "city": "unknown",
      "experience": "8+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._arunkumar_karthikayan-min.jpg",
      "path": "/doctors/dr-arunkumar-karthikayan"
    },
    {
      "id": 108,
      "name": "Dr. Ticini Joseph",
      "specialty": "neurosurgeon",
      "designation": "associate consultant",
      "hospital": "meitra hospital, kerala",
      "city": "unknown",
      "experience": "7+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/untitled482-min.png",
      "path": "/doctors/dr-ticini-joseph"
    },
    {
      "id": 109,
      "name": "Dr. Maninder Singh Sidhu",
      "specialty": "non invasive cardiologist",
      "designation": "associate consultant",
      "hospital": "fortis escorts hospital, amritsar",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._maninder_singh_sidhu-min.jpg",
      "path": "/doctors/dr-maninder-singh-sidhu"
    },
    {
      "id": 110,
      "name": "Dr. Ticini Joseph",
      "specialty": "spine surgeon",
      "designation": "associate consultant",
      "hospital": "meitra hospital, kerala",
      "city": "unknown",
      "experience": "7+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/untitled482-min.png",
      "path": "/doctors/dr-ticini-joseph"
    },
    {
      "id": 111,
      "name": "Dr. Davinder Mohan Saini",
      "specialty": "cardiac surgeon",
      "designation": "associate consultant",
      "hospital": "fortis escorts hospital, amritsar",
      "city": "unknown",
      "experience": "28+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._davinder_singh_saini.jpg",
      "path": "/doctors/dr-davinder-mohan-saini"
    },
    {
      "id": 112,
      "name": "Dr. Ramanujam S",
      "specialty": "spine surgeon",
      "designation": "associate consultant",
      "hospital": "fortis malar hospital ,chennai",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_rama.jpg",
      "path": "/doctors/dr-ramanujam-s"
    },
    {
      "id": 113,
      "name": "Dr. Swati Rawat",
      "specialty": "interventional cardiologist",
      "designation": "associate consultant",
      "hospital": "medanta - the medicity, gurgaon",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._swati_rawat.jpg",
      "path": "/doctors/dr-swati-rawat"
    },
    {
      "id": 114,
      "name": "Dr Pradeep G",
      "specialty": "cardiac surgeon",
      "designation": "associate consultant",
      "hospital": "mgm healthcare, chennai",
      "city": "unknown",
      "experience": "11+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.-pradeep-g-min.jpg",
      "path": "/doctors/dr-pradeep-g"
    },
    {
      "id": 115,
      "name": "Dr. Vivekan Manoharan",
      "specialty": "interventional cardiologist",
      "designation": "associate consultant",
      "hospital": "mgm healthcare, chennai",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._vivekan_manoharan_-_interventional_cardiologist.jpg",
      "path": "/doctors/dr-vivekan-manoharan"
    },
    {
      "id": 116,
      "name": "Dr. Ghayoor Ahmed",
      "specialty": "cardiac surgeon",
      "designation": "associate consultant",
      "hospital": "mgm healthcare, chennai",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ghayoor_ahmed_-_cardiothoracic_surgeon.jpg",
      "path": "/doctors/dr-ghayoor-ahmed"
    },
    {
      "id": 117,
      "name": "Dr. Rajender Thaplu",
      "specialty": "interventional cardiologist",
      "designation": "associate consultant",
      "hospital": "paras hospitals, gurgaon",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._rajendra.jpg",
      "path": "/doctors/dr-rajender-thaplu"
    },
    {
      "id": 118,
      "name": "Dr. Ravindra Ghule",
      "specialty": "cardiology",
      "designation": "associate consultant",
      "hospital": "fortis hospital, mulund, mumbai",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ravindra_ghule-min.png",
      "path": "/doctors/dr-ravindra-ghule"
    },
    {
      "id": 119,
      "name": "Dr. Pallav Jain",
      "specialty": "neurologist",
      "designation": "associate consultant",
      "hospital": "max super speciality hospital, bathinda",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._pallav_jain-min.jpg",
      "path": "/doctors/dr-pallav-jain"
    },
    {
      "id": 120,
      "name": "Dr. Arul K",
      "specialty": "neurosurgeon",
      "designation": "associate consultant",
      "hospital": "gleneagles global hospital, chennai",
      "city": "unknown",
      "experience": "29+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_arul_k-min.jpg",
      "path": "/doctors/dr-arul-k"
    },
    {
      "id": 121,
      "name": "Dr. Sanjeev Srivastava",
      "specialty": "neurosurgeon",
      "designation": "associate consultant",
      "hospital": "artemis hospital, gurgaon",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._sanjeev-min_0.jpg",
      "path": "/doctors/dr-sanjeev-srivastava"
    },
    {
      "id": 122,
      "name": "Dr. Harpreet Wasir",
      "specialty": "cardiac surgeon",
      "designation": "associate director",
      "hospital": "medanta - the medicity, gurgaon",
      "city": "unknown",
      "experience": "31+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._harpreet_wasir.jpg",
      "path": "/doctors/dr-harpreet-wasir"
    },
    {
      "id": 123,
      "name": "Dr. Abhishek Parmar",
      "specialty": "cardiac surgeon",
      "designation": "associate director",
      "hospital": "sterling hospital, ahmedabad",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._abhishek_parmar-min.jpg",
      "path": "/doctors/dr-abhishek-parmar"
    },
    {
      "id": 124,
      "name": "Dr. Arvind Sethi",
      "specialty": "interventional cardiologist",
      "designation": "associate director",
      "hospital": "blk-max super speciality hospital delhi",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-arvind-sethi-min.jpg",
      "path": "/doctors/dr-arvind-sethi"
    },
    {
      "id": 125,
      "name": "Dr. Biswajit Paul",
      "specialty": "interventional cardiologist",
      "designation": "associate director",
      "hospital": "jaypee hospital, noida",
      "city": "unknown",
      "experience": "32+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-biswajit-paul-cardiologist.jpg",
      "path": "/doctors/dr-biswajit-paul"
    },
    {
      "id": 126,
      "name": "Dr. Preeti Sharma",
      "specialty": "interventional cardiologist",
      "designation": "associate director",
      "hospital": "max super speciality hospital, dehradun",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._preeti_sharma-min.png",
      "path": "/doctors/dr-preeti-sharma"
    },
    {
      "id": 127,
      "name": "Dr. Pawan Kumar",
      "specialty": "interventional cardiologist",
      "designation": "associate director",
      "hospital": "max super speciality hospital, patparganj, new delhi",
      "city": "unknown",
      "experience": "26+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._pawan_kumar-min.jpg",
      "path": "/doctors/dr-pawan-kumar"
    },
    {
      "id": 128,
      "name": "Dr. Anil Bhatt",
      "specialty": "interventional cardiologist",
      "designation": "associate director",
      "hospital": "max super speciality hospital, patparganj, new delhi",
      "city": "unknown",
      "experience": "42+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._anil_bhatt-min.jpg",
      "path": "/doctors/dr-anil-bhatt"
    },
    {
      "id": 129,
      "name": "Dr. Yogendra Singh",
      "specialty": "interventional cardiologist",
      "designation": "associate director",
      "hospital": "max super speciality hospital, dehradun",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._yogendra_singh-min.png",
      "path": "/doctors/dr-yogendra-singh"
    },
    {
      "id": 130,
      "name": "Dr. Nishant Tyagi",
      "specialty": "interventional cardiologist",
      "designation": "associate director",
      "hospital": "max super speciality hospital, patparganj, new delhi",
      "city": "unknown",
      "experience": "21+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._nishant_tyagi-min.jpg",
      "path": "/doctors/dr-nishant-tyagi"
    },
    {
      "id": 131,
      "name": "Dr Vineet Bhatia",
      "specialty": "interventional cardiologist",
      "designation": "associate director",
      "hospital": "max super speciality hospital, patparganj, new delhi",
      "city": "unknown",
      "experience": "27+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_vineet_bhatia.jpg",
      "path": "/doctors/dr-vineet-bhatia"
    },
    {
      "id": 132,
      "name": "Dr. Nagendra Singh Chauhan",
      "specialty": "interventional cardiologist",
      "designation": "associate director",
      "hospital": "medanta - the medicity, gurgaon",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview66-min.png",
      "path": "/doctors/dr-nagendra-singh-chauhan"
    },
    {
      "id": 133,
      "name": "Dr. Atma Ram Bansal",
      "specialty": "neurologist",
      "designation": "associate director",
      "hospital": "medanta - the medicity, gurgaon",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/atmaram.jpg",
      "path": "/doctors/dr-atma-ram-bansal"
    },
    {
      "id": 134,
      "name": "Dr. Deepak",
      "specialty": "neurologist",
      "designation": "associate director",
      "hospital": "max superspecialty hospital, mohali",
      "city": "unknown",
      "experience": "15+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_deepak_gupta_6ef0dae075-min.jpg",
      "path": "/doctors/dr-deepak"
    },
    {
      "id": 135,
      "name": "Dr. Arpinder Singh Gill",
      "specialty": "neurologist",
      "designation": "associate director",
      "hospital": "max superspecialty hospital, mohali",
      "city": "unknown",
      "experience": "32+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_arpinder_gill_1-min.png",
      "path": "/doctors/dr-arpinder-singh-gill"
    },
    {
      "id": 136,
      "name": "Dr. Deepak G",
      "specialty": "neurologist",
      "designation": "associate director",
      "hospital": "max superspecialty hospital, mohali",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_deepak_gupta_1-min.jpg",
      "path": "/doctors/dr-deepak-g"
    },
    {
      "id": 137,
      "name": "Dr. Gaurav Goel",
      "specialty": "neurologist",
      "designation": "associate director",
      "hospital": "medanta - the medicity, gurgaon",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._gaurav.jpg",
      "path": "/doctors/dr-gaurav-goel"
    },
    {
      "id": 138,
      "name": "Dr. Rakesh Ranjan",
      "specialty": "neurosurgeon",
      "designation": "associate director",
      "hospital": "aditya birla memorial hospital, pune",
      "city": "unknown",
      "experience": "26+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/phot-frame-03-1-1-570x570_1-min.jpeg",
      "path": "/doctors/dr-rakesh-ranjan"
    },
    {
      "id": 139,
      "name": "Dr. Anirban Deep Banerjee",
      "specialty": "neurosurgeon",
      "designation": "associate director",
      "hospital": "medanta - the medicity, gurgaon",
      "city": "unknown",
      "experience": "26+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._anirban_deep_banerjee.jpg",
      "path": "/doctors/dr-anirban-deep-banerjee"
    },
    {
      "id": 140,
      "name": "Dr. Rohit Bansil",
      "specialty": "neurosurgeon",
      "designation": "associate director",
      "hospital": "blk-max super speciality hospital delhi",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_rohit_bansil.jpg",
      "path": "/doctors/dr-rohit-bansil"
    },
    {
      "id": 141,
      "name": "Dr. Rohit Bansil",
      "specialty": "spine surgeon",
      "designation": "associate director",
      "hospital": "blk-max super speciality hospital delhi",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_rohit_bansil.jpg",
      "path": "/doctors/dr-rohit-bansil"
    },
    {
      "id": 142,
      "name": "Dr. Sajal Kakkar",
      "specialty": "surgical oncologist",
      "designation": "associate director",
      "hospital": "max superspecialty hospital, mohali",
      "city": "unknown",
      "experience": "21+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_sajal_kakkar_df156ccfc4_1-min_1.jpg",
      "path": "/doctors/dr-sajal-kakkar"
    },
    {
      "id": 143,
      "name": "Dr. G.P.V Subbaiah",
      "specialty": "spine surgeon",
      "designation": "associate director",
      "hospital": "care hospitals, hitec city",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._gpv_subbaiah-min.jpg",
      "path": "/doctors/dr-gpv-subbaiah"
    },
    {
      "id": 144,
      "name": "Dr. Ripen Gupta",
      "specialty": "interventional cardiologist",
      "designation": "associate director",
      "hospital": "max super speciality hospital, saket, new delhi",
      "city": "unknown",
      "experience": "27+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ripen_gupta-min.jpg",
      "path": "/doctors/dr-ripen-gupta-cardiology"
    },
    {
      "id": 145,
      "name": "Dr. Chandrashekhar",
      "specialty": "interventional cardiologist",
      "designation": "associate director",
      "hospital": "max super speciality hospital, shalimar bagh, new delhi",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._chandrashekhar-min.jpg",
      "path": "/doctors/dr-chandrashekhar"
    },
    {
      "id": 146,
      "name": "Dr. Manoj Khanal",
      "specialty": "neurologist",
      "designation": "associate director",
      "hospital": "max super speciality hospital, shalimar bagh, new delhi",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._manoj_khanal-min.jpg",
      "path": "/doctors/dr-manoj-khanal"
    },
    {
      "id": 147,
      "name": "Dr. Rajesh Gupta",
      "specialty": "neurosurgeon",
      "designation": "associate director",
      "hospital": "max super speciality hospital, patparganj, new delhi",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._rajesh_gupta-min.jpg",
      "path": "/doctors/dr-rajesh-gupta"
    },
    {
      "id": 148,
      "name": "Dr. Kapil K Chattree",
      "specialty": "cardiac surgeon",
      "designation": "associate director",
      "hospital": "max superspecialty hospital, mohali",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._kapil_k_chattree-min.jpg",
      "path": "/doctors/dr-kapil-k-chattree"
    },
    {
      "id": 149,
      "name": "Dr. Sudheer Saxena",
      "specialty": "cardiac surgeon",
      "designation": "associate director",
      "hospital": "max superspecialty hospital, mohali",
      "city": "unknown",
      "experience": "29+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_sudheer_saxena_1-min.jpg",
      "path": "/doctors/dr-sudheer-saxena"
    },
    {
      "id": 150,
      "name": "Dr. Sanjay Kumar Mishra",
      "specialty": "neurologist",
      "designation": "associate director",
      "hospital": "max superspecialty hospital, mohali",
      "city": "unknown",
      "experience": "27+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_sanjay_mishra_1-min.jpg",
      "path": "/doctors/dr-sanjay-kumar-mishra"
    },
    {
      "id": 151,
      "name": "Dr. Kartikeya Bhargava",
      "specialty": "interventional cardiologist",
      "designation": "associate director",
      "hospital": "medanta - the medicity, gurgaon",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-kartikeya-bhargava-cardiac-electrophysiologist.jpg",
      "path": "/doctors/dr-kartikeya-bhargava"
    },
    {
      "id": 152,
      "name": "Dr. Niraj Gupta",
      "specialty": "interventional cardiologist",
      "designation": "associate director",
      "hospital": "medanta - the medicity, gurgaon",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._niraj-min.jpg",
      "path": "/doctors/dr-niraj-gupta"
    },
    {
      "id": 153,
      "name": "Dr. Jp Dhamija",
      "specialty": "interventional cardiologist",
      "designation": "associate professor",
      "hospital": "mahatma gandhi medical college & hospital, jaipur",
      "city": "unknown",
      "experience": "43+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._jp_dhamija-min.jpg",
      "path": "/doctors/dr-jp-dhamija"
    },
    {
      "id": 154,
      "name": "Dr. Ramanand Sinha",
      "specialty": "interventional cardiologist",
      "designation": "associate professor",
      "hospital": "mahatma gandhi medical college & hospital, jaipur",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/sajdha-min.jpg",
      "path": "/doctors/dr-ramanand-sinha"
    },
    {
      "id": 155,
      "name": "Dr. Gaurav Goyal",
      "specialty": "neurologist",
      "designation": "associate professor",
      "hospital": "mahatma gandhi medical college & hospital, jaipur",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/gaurav-min.jpg",
      "path": "/doctors/dr-gaurav-goyal"
    },
    {
      "id": 156,
      "name": "Dr Sadanand Reddy",
      "specialty": "interventional cardiologist",
      "designation": "associate professor",
      "hospital": "medicover hospital, nizamabad",
      "city": "unknown",
      "experience": "27+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_10.png",
      "path": "/doctors/dr-sadanand-reddy"
    },
    {
      "id": 157,
      "name": "Dr. Anil Behl",
      "specialty": "cosmetic surgeon",
      "designation": "director",
      "hospital": "fortis memorial research institute, gurgaon",
      "city": "unknown",
      "experience": "49+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._anil_behl_0.jpg",
      "path": "/doctors/dr-anil-behl"
    },
    {
      "id": 158,
      "name": "Dr. Hitesh Garg",
      "specialty": "spine surgeon",
      "designation": "hod",
      "hospital": "artemis hospital, gurgaon",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._hitesh_garg_-_orthopaedics_spine_surgeon-min.jpg",
      "path": "/doctors/dr-hitesh-garg-orthopedics"
    },
    {
      "id": 159,
      "name": "Dr. S K Rajan",
      "specialty": "spine surgeon",
      "designation": "hod",
      "hospital": "artemis hospital, gurgaon",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview70-min.png",
      "path": "/doctors/dr-s-k-rajan-neurosurgery-spine-surgery"
    },
    {
      "id": 160,
      "name": "Dr Vipul Gupta",
      "specialty": "neurosurgeon",
      "designation": "director",
      "hospital": "paras hospitals, gurgaon",
      "city": "unknown",
      "experience": "29+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_vipul_gupta-min.jpg",
      "path": "/doctors/dr-vipul-gupta-neurointerventional-surgery"
    },
    {
      "id": 161,
      "name": "Dr Vipul Gupta",
      "specialty": "spine surgeon",
      "designation": "director",
      "hospital": "paras hospitals, gurgaon",
      "city": "unknown",
      "experience": "29+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_vipul_gupta-min.jpg",
      "path": "/doctors/dr-vipul-gupta-neurointerventional-surgery"
    },
    {
      "id": 162,
      "name": "Dr. Bipin Walia",
      "specialty": "neurosurgeon",
      "designation": "director",
      "hospital": "max super speciality hospital, saket, new delhi",
      "city": "unknown",
      "experience": "41+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._bipin_s._walia.jpg",
      "path": "/doctors/dr-bipin-walia-neurology-neurosurgery"
    },
    {
      "id": 163,
      "name": "Dr. Bipin Walia",
      "specialty": "spine surgeon",
      "designation": "director",
      "hospital": "max super speciality hospital, saket, new delhi",
      "city": "unknown",
      "experience": "41+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._bipin_s._walia.jpg",
      "path": "/doctors/dr-bipin-walia-neurology-neurosurgery"
    },
    {
      "id": 164,
      "name": "Dr. Boga Venkatesh",
      "specialty": "neurosurgeon",
      "designation": "consultant",
      "hospital": "medicover hospital, karimnagar",
      "city": "unknown",
      "experience": "11+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_boga_venkatesh.jpg",
      "path": "/doctors/dr-boga-venkatesh"
    },
    {
      "id": 165,
      "name": "Dr. Anusha D",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "apollo cancer hospital, chennai",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._anusha_d.jpg",
      "path": "/doctors/dr-anusha-d"
    },
    {
      "id": 166,
      "name": "Dr. Arun E.D.",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo specialty hospital, omr",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._arul_e_d.jpg",
      "path": "/doctors/dr-arun-ed"
    },
    {
      "id": 167,
      "name": "Dr. Amjad M Shaikh",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "kokilaben dhirubhai ambani hospital, mumbai",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._amjad_m_shaikh-min.jpg",
      "path": "/doctors/dr-amjad-m-shaikh"
    },
    {
      "id": 168,
      "name": "Dr. S Venkatesh",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "aster rv hospital (j p nagar) bangalore",
      "city": "unknown",
      "experience": "34+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._venkatesh.jpg",
      "path": "/doctors/dr-s-venkatesh"
    },
    {
      "id": 169,
      "name": "Dr. Revanur Vishwanath",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "care hospitals, banjara hills, hyderabad",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._revanur_vishwanath-min.jpg",
      "path": "/doctors/dr-revanur-vishwanath"
    },
    {
      "id": 170,
      "name": "Dr. Rajneesh Kachhara",
      "specialty": "neurosurgeon",
      "designation": "director",
      "hospital": "medanta - the medicity, gurgaon",
      "city": "unknown",
      "experience": "30+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._rajneesh_kachhara-director_neurosurgeon.jpg",
      "path": "/doctors/dr-rajneesh-kachhara"
    },
    {
      "id": 171,
      "name": "Dr. Rajneesh Kachhara",
      "specialty": "spine surgeon",
      "designation": "director",
      "hospital": "medanta - the medicity, gurgaon",
      "city": "unknown",
      "experience": "30+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._rajneesh_kachhara-director_neurosurgeon.jpg",
      "path": "/doctors/dr-rajneesh-kachhara"
    },
    {
      "id": 172,
      "name": "Dr. Rohit Mody",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "max super speciality hospital, bathinda",
      "city": "unknown",
      "experience": "36+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._rohit_mody-min.jpg",
      "path": "/doctors/dr-rohit-mody"
    },
    {
      "id": 173,
      "name": "Dr. A. Sivakumar",
      "specialty": "cosmetic surgeon",
      "designation": "director",
      "hospital": "kauvery hospital radial road chennai",
      "city": "unknown",
      "experience": "30+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/a_sivakumar.jpg",
      "path": "/doctors/dr-sivakumar"
    },
    {
      "id": 174,
      "name": "Dr. Pradeep G Nayar",
      "specialty": "interventional cardiologist",
      "designation": "senior consultant",
      "hospital": "fortis malar hospital ,chennai",
      "city": "unknown",
      "experience": "41+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._pradeep_g_nayar_-_interventional_cardiologist.jpg",
      "path": "/doctors/dr-pradeep-g-nayar"
    },
    {
      "id": 175,
      "name": "Dr. Gopal Krishna Dash",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "nh mazumdar shaw medical centre, bangalore",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._gopal_krishna_dash.jpg",
      "path": "/doctors/dr-gopal-krishna-dash"
    },
    {
      "id": 176,
      "name": "Dr. Ravindra K Tongia",
      "specialty": "cardiac surgeon",
      "designation": "director",
      "hospital": "fortis escorts hospital jaipur",
      "city": "unknown",
      "experience": "54+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ravindra_k_tongia_edited-min.jpg",
      "path": "/doctors/dr-ravindra-k-tongia"
    },
    {
      "id": 177,
      "name": "Dr. Rajesh Taneja",
      "specialty": "urologist",
      "designation": "senior consultant",
      "hospital": "indraprastha apollo hospital, new delhi",
      "city": "unknown",
      "experience": "31+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/rajesh_taneja-min.jpg",
      "path": "/doctors/dr-rajesh-taneja"
    },
    {
      "id": 178,
      "name": "Dr. Mohit Walia",
      "specialty": "interventional cardiologist",
      "designation": "senior consultant",
      "hospital": "shalby hospital, mohali",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-mohit-walia-min.png",
      "path": "/doctors/dr-mohit-walia"
    },
    {
      "id": 179,
      "name": "Dr. Ramneek Mahajan",
      "specialty": "orthopaedic and joint replacement surgeon",
      "designation": "director",
      "hospital": "max super speciality hospital, saket, new delhi",
      "city": "unknown",
      "experience": "10+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ramneek_mahajan-min.jpeg",
      "path": "/doctors/dr-ramneek-mahajan-orthopedics-joint-replacement"
    },
    {
      "id": 180,
      "name": "Dr. Pradeep Kumar Sharma",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "ivy hospital mohali",
      "city": "unknown",
      "experience": "11+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._pradeep-min_3.jpg",
      "path": "/doctors/dr-pradeep-kumar-sharma"
    },
    {
      "id": 181,
      "name": "Dr. Siddharth Kharkar",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "nanavati super specialty hospital, mumbai",
      "city": "unknown",
      "experience": "25+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._siddharth_kharkar-min.jpg",
      "path": "/doctors/dr-siddharth-kharkar"
    },
    {
      "id": 182,
      "name": "Dr. Komal Prasad",
      "specialty": "neurosurgeon",
      "designation": "senior consultant",
      "hospital": "nh mazumdar shaw medical centre, bangalore",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._dr._komal_prasadellur.jpg",
      "path": "/doctors/dr-komal-prasad"
    },
    {
      "id": 183,
      "name": "Dr. Komal Prasad",
      "specialty": "spine surgeon",
      "designation": "senior consultant",
      "hospital": "nh mazumdar shaw medical centre, bangalore",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._dr._komal_prasadellur.jpg",
      "path": "/doctors/dr-komal-prasad"
    },
    {
      "id": 184,
      "name": "Dr. V. K. Jain",
      "specialty": "neurosurgeon",
      "designation": "director",
      "hospital": "max super speciality hospital, saket, new delhi",
      "city": "unknown",
      "experience": "50+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_v_k_jain_-_neurosurgeon-min.jpeg",
      "path": "/doctors/dr-v-k-jain-neurosurgery"
    },
    {
      "id": 185,
      "name": "Dr. K R Suresh Bapu",
      "specialty": "neurosurgeon",
      "designation": "director",
      "hospital": "sims hospital, vadapalani, chennai",
      "city": "unknown",
      "experience": "49+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._k_r_suresh_bapu_-_neurosurgeon-min.jpg",
      "path": "/doctors/dr-k-r-suresh-bapu"
    },
    {
      "id": 186,
      "name": "Dr. Subhash Jangid",
      "specialty": "orthopaedic and joint replacement surgeon",
      "designation": "director",
      "hospital": "fortis memorial research institute, gurgaon",
      "city": "unknown",
      "experience": "25+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/subhashjangid-gurgaon-7c8d42.jpg",
      "path": "/doctors/dr-subhash-jangid"
    },
    {
      "id": 187,
      "name": "Dr. Rajesh Kumar Verma",
      "specialty": "spine surgeon",
      "designation": "director",
      "hospital": "sanar international hospital",
      "city": "unknown",
      "experience": "27+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._rajesh-min_0.jpg",
      "path": "/doctors/dr-rajesh-kumar-verma"
    },
    {
      "id": 188,
      "name": "Dr. Vikas Dua",
      "specialty": "pediatric hematologist",
      "designation": "director",
      "hospital": "fortis memorial research institute, gurgaon",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_vikas_dua-min.png",
      "path": "/doctors/dr-vikas-dua-pediatrician-hematologist"
    },
    {
      "id": 189,
      "name": "Dr. Abdul Muniem",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "medanta - the medicity, gurgaon",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._abdul_0.jpg",
      "path": "/doctors/dr-abdul-muniem"
    },
    {
      "id": 190,
      "name": "Dr. Thiruthani Kumaran M M",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "anova institute for regenerative medicine",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._thiruthani_kumaran_m_m.jpg",
      "path": "/doctors/dr-thiruthani-kumaran-m-m"
    },
    {
      "id": 191,
      "name": "Dr. Shanmugasundaram D",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo specialty hospital, omr",
      "city": "unknown",
      "experience": "28+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._shanmugasundaram_d-min.png",
      "path": "/doctors/dr-shanmugasundaram-d"
    },
    {
      "id": 192,
      "name": "Dr. Minal V. Kekatpure",
      "specialty": "paediatric neurologist",
      "designation": "senior consultant",
      "hospital": "narayana multispeciality hospital, bangalore",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._minal_v._kekatpure_-_pediatric_neurologist.jpg",
      "path": "/doctors/dr-minal-v-kekatpure"
    },
    {
      "id": 193,
      "name": "Dr. Selvapandian S",
      "specialty": "neurosurgeon",
      "designation": "consultant",
      "hospital": "apollo specialty hospitals, vanagaram",
      "city": "unknown",
      "experience": "25+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/5_1.jpg",
      "path": "/doctors/dr-selvapandian-s"
    },
    {
      "id": 194,
      "name": "Dr. Chandar Mohan Batra",
      "specialty": "endocrinologist",
      "designation": "senior consultant",
      "hospital": "indraprastha apollo hospital, new delhi",
      "city": "unknown",
      "experience": "34+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._chandar_mohan_batra-min.jpg",
      "path": "/doctors/dr-chandar-mohan-batra"
    },
    {
      "id": 195,
      "name": "Dr. Vikas Tandon",
      "specialty": "spine surgeon",
      "designation": "senior consultant",
      "hospital": "indian spinal injuries center, new delhi",
      "city": "unknown",
      "experience": "25+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._vikas_tandon-min_0.jpg",
      "path": "/doctors/dr-vikas-tandon"
    },
    {
      "id": 196,
      "name": "Dr. Udgeath Dhir",
      "specialty": "cardiac surgeon",
      "designation": "director",
      "hospital": "fortis memorial research institute, gurgaon",
      "city": "unknown",
      "experience": "21+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._udgeath_dhir-removebg-preview-min.png",
      "path": "/doctors/dr-udgeath-dhir"
    },
    {
      "id": 197,
      "name": "Dr. Suhail Naseem Bukhari",
      "specialty": "vascular surgeon",
      "designation": "director",
      "hospital": "blk-max super speciality hospital delhi",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._suhail_naseem_bukhari.jpg",
      "path": "/doctors/dr-suhail-naseem-bukhari"
    },
    {
      "id": 198,
      "name": "Dr. Kaustubh Patel",
      "specialty": "surgical oncologist",
      "designation": "senior consultant",
      "hospital": "hcg cancer centre, ahmedabad",
      "city": "unknown",
      "experience": "50+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-kaustubh-patel.jpg",
      "path": "/doctors/dr-kaustubh-patel"
    },
    {
      "id": 199,
      "name": "Dr. Manoj Kumar Goel",
      "specialty": "pulmonologist",
      "designation": "director",
      "hospital": "fortis memorial research institute, gurgaon",
      "city": "unknown",
      "experience": "36+ Yrs",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr._manoj_kumar_goel-removebg-preview-min.webp",
      "path": "/doctors/dr-manoj-kumar-goel-pulmonology-and-sleep-medicine"
    },
    {
      "id": 200,
      "name": "Dr. Arun Saroha",
      "specialty": "spine surgeon",
      "designation": "director",
      "hospital": "max super specialty hospital, gurgaon",
      "city": "unknown",
      "experience": "29+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview45-min.png",
      "path": "/doctors/dr-arun-saroha-neurosurgery"
    },
    {
      "id": 201,
      "name": "Dr. Arun Saroha",
      "specialty": "neurosurgeon",
      "designation": "director",
      "hospital": "max super specialty hospital, gurgaon",
      "city": "unknown",
      "experience": "29+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview45-min.png",
      "path": "/doctors/dr-arun-saroha-neurosurgery"
    },
    {
      "id": 202,
      "name": "Dr. Mihir Bapat",
      "specialty": "spine surgeon",
      "designation": "director",
      "hospital": "nanavati super specialty hospital, mumbai",
      "city": "unknown",
      "experience": "27+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._mihir_bapat_-_spine_surgeon-min.jpg",
      "path": "/doctors/dr-mihir-bapat"
    },
    {
      "id": 203,
      "name": "Dr. Ashok Vaid",
      "specialty": "medical oncologist",
      "designation": "consultant",
      "hospital": "medanta - the medicity, gurgaon",
      "city": "unknown",
      "experience": "41+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ashok_vaid_-_medical_oncologist-min.jpg",
      "path": "/doctors/dr-ashok-vaid-leukemia-bone-marrow-transplant"
    },
    {
      "id": 204,
      "name": "Dr. Gururaj Sangondimath",
      "specialty": "spine surgeon",
      "designation": "senior consultant",
      "hospital": "indian spinal injuries center, new delhi",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._gururaj-min.jpg",
      "path": "/doctors/dr-gururaj-m"
    },
    {
      "id": 205,
      "name": "Dr. Senthilnathan J",
      "specialty": "neurologist",
      "designation": "consultant",
      "hospital": "kauvery hospital formely fortis hospital, vadapalani",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_senthilnathan.jpg",
      "path": "/doctors/dr-senthilnathan-j"
    },
    {
      "id": 206,
      "name": "Dr. Raghu M G",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "narayana institute of cardiac sciences, bangalore",
      "city": "unknown",
      "experience": "21+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._raghu_m_g_-_cardiac_surgeon.jpg",
      "path": "/doctors/dr-raghu-m-g"
    },
    {
      "id": 207,
      "name": "Dr. Rana Serbjeet Singh",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "manipal hospital, saltlake",
      "city": "unknown",
      "experience": "21+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._rana_serbjeet_singh-min.png",
      "path": "/doctors/dr-rana-serbjeet-singh"
    },
    {
      "id": 208,
      "name": "Dr. Narendra Agarwal",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "fortis memorial research institute, gurgaon",
      "city": "unknown",
      "experience": "11+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview68-min.png",
      "path": "/doctors/dr-narendra-agarwal"
    },
    {
      "id": 209,
      "name": "Dr. Nilesh Maru",
      "specialty": "cardiac surgeon",
      "designation": "senior consultant",
      "hospital": "reliance hospitals, navi mumbai",
      "city": "unknown",
      "experience": "21+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_nilesh_maru.jpg",
      "path": "/doctors/dr-nilesh-maru"
    },
    {
      "id": 210,
      "name": "Dr. Aliasgar Behrainwala",
      "specialty": "cardiac surgeon",
      "designation": "hod",
      "hospital": "saifee hospital, mumbai",
      "city": "unknown",
      "experience": "30+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._aliasgar_behrainwala_-_cardiovascular_and_cardiothoracic_surgeon_1.jpg",
      "path": "/doctors/dr-aliasgar-behrainwala"
    },
    {
      "id": 211,
      "name": "Dr. Cibi Issac",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "vps lakeshore hospital, kochi",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._cibi_issac_-_interventional_cardiologist.jpg",
      "path": "/doctors/dr-cibi-issac"
    },
    {
      "id": 212,
      "name": "Dr. Vijay Mohan Kohli",
      "specialty": "interventional cardiologist",
      "designation": "senior consultant",
      "hospital": "pushpawati singhania research institute, new delhi",
      "city": "unknown",
      "experience": "40+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_vijay_mohan_kohli_0.jpg",
      "path": "/doctors/dr-vijay-mohan-kohli"
    },
    {
      "id": 213,
      "name": "Dr. R. R. Kasliwal",
      "specialty": "interventional cardiologist",
      "designation": "chairman",
      "hospital": "medanta - the medicity, gurgaon",
      "city": "unknown",
      "experience": "50+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._r._r._kasliwal-chairman_cardiologist.jpg",
      "path": "/doctors/dr-r-r-kasliwal"
    },
    {
      "id": 214,
      "name": "Dr. Sanjay Kumar",
      "specialty": "neurosurgeon",
      "designation": "chairman",
      "hospital": "bhagwan mahavir medica superspecialty hospital, ranchi",
      "city": "unknown",
      "experience": "28+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_sanjay_0.jpg",
      "path": "/doctors/dr-sanjay-kumar-neurosurgeon"
    },
    {
      "id": 215,
      "name": "Dr. Charudutt Apte",
      "specialty": "neurosurgeon",
      "designation": "chairman",
      "hospital": "sahyadri speciality hospital pune",
      "city": "unknown",
      "experience": "31+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._charudutt_apte-min.jpg",
      "path": "/doctors/dr-charudutt-apte"
    },
    {
      "id": 216,
      "name": "Dr. Pradeep Sharma",
      "specialty": "orthopaedic and joint replacement surgeon",
      "designation": "chairman",
      "hospital": "indian spinal injuries center, new delhi",
      "city": "unknown",
      "experience": "33+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.-pradeep-sharma.jpg",
      "path": "/doctors/dr-pradeep-sharma"
    },
    {
      "id": 217,
      "name": "Dr. Rajiv Parakh",
      "specialty": "vascular surgeon",
      "designation": "chairman",
      "hospital": "medanta - the medicity, gurgaon",
      "city": "unknown",
      "experience": "42+ Yrs",
      "image": "https://www.vaidam.com/sites/default/webp/50/files/dr_rajiv_parakh.webp",
      "path": "/doctors/dr-rajiv-parakh-vascular-surgery"
    },
    {
      "id": 218,
      "name": "Dr. Kunal Hazari",
      "specialty": "cardiac surgeon",
      "designation": "chairman",
      "hospital": "bhagwan mahavir medica superspecialty hospital, ranchi",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_kunal_0.jpg",
      "path": "/doctors/dr-kunal-hazari"
    },
    {
      "id": 219,
      "name": "Dr. Sanjay Kumar",
      "specialty": "spine surgeon",
      "designation": "chairman",
      "hospital": "bhagwan mahavir medica superspecialty hospital, ranchi",
      "city": "unknown",
      "experience": "28+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_sanjay_0.jpg",
      "path": "/doctors/dr-sanjay-kumar-neurosurgeon"
    },
    {
      "id": 220,
      "name": "Dr. Kunal Sarkar",
      "specialty": "cardiac surgeon",
      "designation": "chairman",
      "hospital": "medica superspecialty hospital",
      "city": "unknown",
      "experience": "28+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/kunal-sarkar-500x460.jpg",
      "path": "/doctors/dr-kunal-sarkar"
    },
    {
      "id": 221,
      "name": "Dr. Prakash P Kotwal",
      "specialty": "spine surgeon",
      "designation": "chairman",
      "hospital": "pushpawati singhania research institute, new delhi",
      "city": "unknown",
      "experience": "43+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/kotwal.jpg",
      "path": "/doctors/dr-prakash-p-kotwal"
    },
    {
      "id": 222,
      "name": "Dr. Purvez Grant",
      "specialty": "cardiac surgeon",
      "designation": "chairman",
      "hospital": "ruby hall clinic, pune",
      "city": "unknown",
      "experience": "33+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_-_2021-11-26t130014.615-min.png",
      "path": "/doctors/dr-purvez-grant"
    },
    {
      "id": 223,
      "name": "Dr Ashok Bhanage",
      "specialty": "neurosurgeon",
      "designation": "chairman",
      "hospital": "ruby hall clinic, pune",
      "city": "unknown",
      "experience": "38+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_-_2021-11-30t125341.786-min.png",
      "path": "/doctors/dr-ashok-bhanage"
    },
    {
      "id": 224,
      "name": "Dr. Purshotam Lal",
      "specialty": "interventional cardiologist",
      "designation": "chairman",
      "hospital": "metro hospital and heart institute, noida sector 12",
      "city": "unknown",
      "experience": "46+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._purshotam-min.jpg",
      "path": "/doctors/dr-purshotam-lal"
    },
    {
      "id": 225,
      "name": "Dr. Purshotam Lal",
      "specialty": "interventional cardiologist",
      "designation": "chairman",
      "hospital": "metro hospital and heart institute, noida sector 13",
      "city": "unknown",
      "experience": "46+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._purshotam-min.jpg",
      "path": "/doctors/dr-purshotam-lal"
    },
    {
      "id": 226,
      "name": "Dr. Manmohan Singh",
      "specialty": "neurosurgeon",
      "designation": "chairman",
      "hospital": "paras hospitals, gurgaon",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_manmohan_singh-min.jpg",
      "path": "/doctors/dr-manmohan-singh-neurosurgeon"
    },
    {
      "id": 227,
      "name": "Dr. Mahesh  Wadhwani",
      "specialty": "cardiac surgeon",
      "designation": "chief",
      "hospital": "fortis hospital, manesar, gurgaon",
      "city": "unknown",
      "experience": "15+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._mahesh-min.jpg",
      "path": "/doctors/dr-mahesh-wadhwani"
    },
    {
      "id": 228,
      "name": "Dr. Anil Kumar Mulpur",
      "specialty": "cardiac surgeon",
      "designation": "chief",
      "hospital": "kims hospital kondapur, hyderabad",
      "city": "unknown",
      "experience": "29+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._anil-min_1.jpg",
      "path": "/doctors/dr-anil-kumar-mulpur"
    },
    {
      "id": 229,
      "name": "Dr. P. N. Rao",
      "specialty": "cardiac surgeon",
      "designation": "chief",
      "hospital": "sunshine hospitals, hyderabad",
      "city": "unknown",
      "experience": "29+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._p_n_rao-min.jpg",
      "path": "/doctors/dr-p-n-rao"
    },
    {
      "id": 230,
      "name": "Dr. Balbir Kalra",
      "specialty": "interventional cardiologist",
      "designation": "chief",
      "hospital": "artemis hospital, gurgaon",
      "city": "unknown",
      "experience": "26+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-balbir-kalra.jpeg",
      "path": "/doctors/dr-balbir-kalra"
    },
    {
      "id": 231,
      "name": "Dr. Sai Sudhakar",
      "specialty": "interventional cardiologist",
      "designation": "chief",
      "hospital": "gleneagles hospital, lakdikapul, hyderabad",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/drsaisudhakar.jpg",
      "path": "/doctors/dr-sai-sudhakar"
    },
    {
      "id": 232,
      "name": "Dr. Rahul Mehrotra",
      "specialty": "cardiology",
      "designation": "chief",
      "hospital": "artemis hospital, gurgaon",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview75-min.png",
      "path": "/doctors/dr-rahul-mehrotra"
    },
    {
      "id": 233,
      "name": "Dr. Ganesh Kumar Av",
      "specialty": "cardiology",
      "designation": "chief",
      "hospital": "dr. l h hiranandani hospital, mumbai",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_ganesh_av_1-min.jpg",
      "path": "/doctors/dr-ganesh-kumar-av"
    },
    {
      "id": 234,
      "name": "Dr. Ravi Kumar Aluri",
      "specialty": "interventional cardiologist",
      "designation": "chief",
      "hospital": "kims hospital kondapur, hyderabad",
      "city": "unknown",
      "experience": "26+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ravi-min_2.jpg",
      "path": "/doctors/dr-ravi-kumar-aluri"
    },
    {
      "id": 235,
      "name": "Dr. Upendra Kaul",
      "specialty": "interventional cardiologist",
      "designation": "chief",
      "hospital": "batra hospital & medical research centre, new delhi",
      "city": "unknown",
      "experience": "44+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-upendra-kaul-cardiology.jpg",
      "path": "/doctors/dr-upendra-kaul-cardiology"
    },
    {
      "id": 236,
      "name": "Dr. Ramesh Arora",
      "specialty": "interventional cardiologist",
      "designation": "chief",
      "hospital": "metro hospital & cancer institute, preet vihar, new delhi",
      "city": "unknown",
      "experience": "44+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ramesh_arora-min.jpg",
      "path": "/doctors/dr-ramesh-arora"
    },
    {
      "id": 237,
      "name": "Dr. K.Sankara Subramanian",
      "specialty": "neurologist",
      "designation": "chief",
      "hospital": "billroth hospital, chennai",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_-_2021-10-19t185359.814-min.png",
      "path": "/doctors/dr-ksankara-subramanian"
    },
    {
      "id": 238,
      "name": "Dr. Mazhar Husain",
      "specialty": "neurosurgeon",
      "designation": "chief",
      "hospital": "sahara hospital lucknow",
      "city": "unknown",
      "experience": "36+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._mazhar_husain-min.jpg",
      "path": "/doctors/dr-mazhar-husain"
    },
    {
      "id": 239,
      "name": "Dr. N. K. Venkataramana",
      "specialty": "neurosurgeon",
      "designation": "chief",
      "hospital": "brains neuro spine centre, bangalore",
      "city": "unknown",
      "experience": "38+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._n._k._venkataramana.jpg",
      "path": "/doctors/dr-n-k-venkataramana"
    },
    {
      "id": 240,
      "name": "Dr. Ishwarchand Premsagar",
      "specialty": "neurosurgeon",
      "designation": "chief",
      "hospital": "rajiv gandhi cancer institute and research centre, new delhi",
      "city": "unknown",
      "experience": "32+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ishwarchand-min.jpg",
      "path": "/doctors/dr-ishwarchand-premsagar"
    },
    {
      "id": 241,
      "name": "Prof. Anupam Wakhlu",
      "specialty": "rheumatologist",
      "designation": "chief",
      "hospital": "apollo medics super speciality hospital, lucknow",
      "city": "unknown",
      "experience": "31+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/prof._anupam_wakhlu-min.jpg",
      "path": "/doctors/prof-anupam-wakhlu"
    },
    {
      "id": 242,
      "name": "Dr. H. S. Chhabra",
      "specialty": "spine surgeon",
      "designation": "chief",
      "hospital": "sri balaji action medical institute new delhi",
      "city": "unknown",
      "experience": "38+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._hs_chabra-min.jpg",
      "path": "/doctors/dr-h-s-chhabra-spine-surgeries"
    },
    {
      "id": 243,
      "name": "Dr. Ravi S. Batra",
      "specialty": "dentist",
      "designation": "consultant",
      "hospital": "fortis memorial research institute, gurgaon",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ravi_s._batra-min.jpg",
      "path": "/doctors/dr-ravi-s-batra"
    },
    {
      "id": 244,
      "name": "Dr. Parul Gupta Khanna",
      "specialty": "infertility specialist",
      "designation": "consultant",
      "hospital": "nova ivf fertility, gurgaon",
      "city": "unknown",
      "experience": "9+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._parul_gupta_1.png",
      "path": "/doctors/dr-parul-gupta-khanna"
    },
    {
      "id": 245,
      "name": "Dr. Sumit Sinha",
      "specialty": "neurosurgeon",
      "designation": "director",
      "hospital": "paras hospitals, gurgaon",
      "city": "unknown",
      "experience": "31+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.-sumit-sinha-neurosurgeon.jpg",
      "path": "/doctors/dr-sumit-sinha"
    },
    {
      "id": 246,
      "name": "Dr. Anupam Mehrotra",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "chandan hospital, lucknow",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_anupam.jpg",
      "path": "/doctors/dr-anupam-mehrotra"
    },
    {
      "id": 247,
      "name": "Dr. Sudhir Suryakant Shetkar",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "medicover hospitals, nashik",
      "city": "unknown",
      "experience": "15+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_sudhir_suryakant_shetkar.png",
      "path": "/doctors/dr-sudhir-suryakant-shetkar"
    },
    {
      "id": 248,
      "name": "Dr. Kamal Verma",
      "specialty": "neurosurgeon",
      "designation": "director",
      "hospital": "fortis escorts hospital, faridabad",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._kamal_verma-min.jpg",
      "path": "/doctors/dr-kamal-verma-neurosurgery"
    },
    {
      "id": 249,
      "name": "Dr. Charudatta Chaudhari",
      "specialty": "aesthetics and plastic surgeon",
      "designation": "consultant",
      "hospital": "apollo hospitals, mumbai",
      "city": "unknown",
      "experience": "35+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/charudutt_chaudhari.jpg",
      "path": "/doctors/dr-charudatta-chaudhari"
    },
    {
      "id": 250,
      "name": "Dr. Kshitij Dubey",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo hospital, indore",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._kshitij_dubey.jpg",
      "path": "/doctors/dr-kshitij-dubey"
    },
    {
      "id": 251,
      "name": "Dr. Rahul R Gupta",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo hospitals, mumbai",
      "city": "unknown",
      "experience": "21+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/rahul_gupta.jpg",
      "path": "/doctors/dr-rahul-r-gupta"
    },
    {
      "id": 252,
      "name": "Dr. Divakar Bhat",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "aster rv hospital (j p nagar) bangalore",
      "city": "unknown",
      "experience": "34+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/divakar_1-min.jpg",
      "path": "/doctors/dr-divakar-bhat"
    },
    {
      "id": 253,
      "name": "Dr. Anurag Vidhale",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "avanti institute of cardiology pvt. ltd.",
      "city": "unknown",
      "experience": "11+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_anurag_vidhale_-min.jpg",
      "path": "/doctors/dr-anurag-vidhale"
    },
    {
      "id": 254,
      "name": "Dr. Udaynarayan Sarkar",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "manipal hospital, saltlake",
      "city": "unknown",
      "experience": "41+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._udaynarayan_sarkar-min.jpg",
      "path": "/doctors/dr-udaynarayan-sarkar"
    },
    {
      "id": 255,
      "name": "Dr. Soumyajit Ghosh",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "medica superspecialty hospital",
      "city": "unknown",
      "experience": "10+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/sowmyajit_1-min.jpg",
      "path": "/doctors/dr-soumyajit-ghosh"
    },
    {
      "id": 256,
      "name": "Dr. Kumaresan M N",
      "specialty": "cosmetic surgeon",
      "designation": "consultant",
      "hospital": "apollo hospitals, greams road, chennai",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-kumaresan-m-n-plastic-surgeon.jpg",
      "path": "/doctors/dr-kumaresan-m-n"
    },
    {
      "id": 257,
      "name": "Dr. Nagabhushan Kn",
      "specialty": "endovascular surgeon",
      "designation": "consultant",
      "hospital": "fortis hospital, bangalore (bannerghatta road)",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._nagabhushan_kn.jpg",
      "path": "/doctors/dr-nagabhushan-kn"
    },
    {
      "id": 258,
      "name": "Dr. Azeez Pasha",
      "specialty": "endovascular surgeon",
      "designation": "consultant",
      "hospital": "manipal hospital (old airport road) bangalore",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._azeez_pasha.jpg",
      "path": "/doctors/dr-azeez-pasha"
    },
    {
      "id": 259,
      "name": "Dr. Indira Hinduja",
      "specialty": "infertility specialist",
      "designation": "consultant",
      "hospital": "jaslok hospital, mumbai",
      "city": "unknown",
      "experience": "59+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-indira-hinduja.jpg",
      "path": "/doctors/dr-indira-hinduja-obstetrics-gynecology"
    },
    {
      "id": 260,
      "name": "Dr. Venu Gopal Kondaparthi",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "medicover hospital, sangareddy",
      "city": "unknown",
      "experience": "11+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-venu-gopal-kondaparthi-min.jpg",
      "path": "/doctors/dr-venu-gopal-kondaparthi"
    },
    {
      "id": 261,
      "name": "Dr. Sachin Hundekari",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "aditya birla memorial hospital, pune",
      "city": "unknown",
      "experience": "12+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/sachin-hundekari-01-min-1-570x570_1-min.jpeg",
      "path": "/doctors/dr-sachin-hundekari"
    },
    {
      "id": 262,
      "name": "Dr. Ajit Jadhav",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "aditya birla memorial hospital, pune",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-ajitkumar-jadhav-cardiologist-pune-a15f6ef1-9104-4290-beb5-716a56cf9a3a_1_1-min.jpeg",
      "path": "/doctors/dr-ajit-jadhav"
    },
    {
      "id": 263,
      "name": "Dr. Prabhakar D",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "apollo first med hospitals, kilpauk",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/3_0.jpg",
      "path": "/doctors/dr-prabhakar-d"
    },
    {
      "id": 264,
      "name": "Dr. Vikram Kolhari",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "apollo hospital, seshadripuram",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._vikram-min.jpg",
      "path": "/doctors/dr-vikram-kolhari"
    },
    {
      "id": 265,
      "name": "Dr. Abhijit Vilas Kulkarni",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "apollo hospital (bannerghatta road) bangalore",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._abhijit_vilas_kulkarni-min_0.jpg",
      "path": "/doctors/dr-abhijit-vilas-kulkarni"
    },
    {
      "id": 266,
      "name": "Dr. Shiv Kumar J",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "apollo hospital, secunderabad",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._shiv_kumar_j.jpg",
      "path": "/doctors/dr-shiv-kumar-j"
    },
    {
      "id": 267,
      "name": "Dr. Girish B Navasundi",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "apollo hospital (bannerghatta road) bangalore",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._girish_b_navasundi-min.jpg",
      "path": "/doctors/dr-girish-b-navasundi"
    },
    {
      "id": 268,
      "name": "Dr. Siddhartha Rout",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "apollo hospital drdo",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_siddharth-min.jpg",
      "path": "/doctors/dr-siddhartha-rout"
    },
    {
      "id": 269,
      "name": "Dr Karthigesan A M",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "apollo hospitals, greams road, chennai",
      "city": "unknown",
      "experience": "28+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_karthigesan_a_m.jpg",
      "path": "/doctors/dr-karthigesan-m-cardiologist"
    },
    {
      "id": 270,
      "name": "Dr. Sanjeevkumar Ramchandra Kalkekar",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "apollo hospitals, mumbai",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/sanjeevkumar-ramchandra-kalkekar-min.jpg",
      "path": "/doctors/dr-sanjeevkumar-ramchandra-kalkekar"
    },
    {
      "id": 271,
      "name": "Dr. Venkatesh T K",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "apollo speciality hospital, jayanagar",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_93.png",
      "path": "/doctors/dr-venkatesh-t-k"
    },
    {
      "id": 272,
      "name": "Dr. Prafulla Kerkar",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "asian heart institute, mumbai",
      "city": "unknown",
      "experience": "35+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._prafulla_kerkari-min.jpg",
      "path": "/doctors/dr-prafulla-kerkar"
    },
    {
      "id": 273,
      "name": "Dr. L.K. Jha",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "asian institute of medical sciences, faridabad",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_l.k_jha_cardiologist.jpg",
      "path": "/doctors/dr-lk-jha-cardiologist"
    },
    {
      "id": 274,
      "name": "Dr. Venkatesulu R S",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "aster cmi hospital (hebbel) bangalore",
      "city": "unknown",
      "experience": "26+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._r_s_venkatesulu.jpg",
      "path": "/doctors/dr-venkatesulu-r-s"
    },
    {
      "id": 275,
      "name": "Dr. Virag Mahorkar",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "avanti institute of cardiology pvt. ltd.",
      "city": "unknown",
      "experience": "11+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._virag_mahorkar-min.jpg",
      "path": "/doctors/dr-virag-mahorkar"
    },
    {
      "id": 276,
      "name": "Dr. Amit Pendharkar",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "blk-max super speciality hospital delhi",
      "city": "unknown",
      "experience": "26+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-amit-pendharkar-cardiologist_0.jpg",
      "path": "/doctors/dr-amit-pendharkar"
    },
    {
      "id": 277,
      "name": "Dr. B. C. Kalmath",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "bombay hospital & medical research center, mumbai",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._bc-min.jpg",
      "path": "/doctors/dr-b-c-kalmath"
    },
    {
      "id": 278,
      "name": "Dr. Manish Jha",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "charak hospital & research centre, lucknow",
      "city": "unknown",
      "experience": "11+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._manish_jha-min.jpg",
      "path": "/doctors/dr-manish-jha"
    },
    {
      "id": 279,
      "name": "Dr. Urmil Girishbhai Shah",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "cims hospital, ahmedabad",
      "city": "unknown",
      "experience": "34+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_urmil_girish_1_0.jpg",
      "path": "/doctors/dr-urmil-girishbhai-shah-cardio"
    },
    {
      "id": 280,
      "name": "Dr. Abhisekh Mohanty",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "continental hospitals, hyderabad",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._abhisekh_mohanty-min.jpg",
      "path": "/doctors/dr-abhisekh-mohanty-interventional-cardiology"
    },
    {
      "id": 281,
      "name": "Dr. Ashok Kumar",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "dr. kamakshi memorial hospital, chennai",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ashok_kumar-min.jpg",
      "path": "/doctors/dr-ashok-kumar-cardiologist"
    },
    {
      "id": 282,
      "name": "Dr. Saumitra Ray",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "manipal hospital formerly amri hospital, kolkata (dhakuria)",
      "city": "unknown",
      "experience": "31+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_1-min.png",
      "path": "/doctors/dr-saumitra-ray"
    },
    {
      "id": 283,
      "name": "Dr. Pradeep Kumar Dash",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "manipal hospital formerly amri hospitals, bhubaneswar",
      "city": "unknown",
      "experience": "7+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._pradeep_kumar_dash-min_0.jpg",
      "path": "/doctors/dr-pradeep-kumar-dash"
    },
    {
      "id": 284,
      "name": "Dr. Abhishek Singh",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "manipal hospital formerly columbia asia, ghaziabad",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._abhishek-min.jpg",
      "path": "/doctors/dr-abhishek-singh"
    },
    {
      "id": 285,
      "name": "Dr. Nityanand Tripathi",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "fortis hospital, shalimar bagh, new delhi",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._nityanand_tripathi-min.jpg",
      "path": "/doctors/dr-nityanand-tripathi"
    },
    {
      "id": 286,
      "name": "Dr. Sridhara N",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "fortis hospital, bangalore (bannerghatta road)",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._sridhara_n.jpg",
      "path": "/doctors/dr-sridhara-n"
    },
    {
      "id": 287,
      "name": "Dr. Nikhil Kumar",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "fortis memorial research institute, gurgaon",
      "city": "unknown",
      "experience": "34+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._nikhil_kumar_1.jpg",
      "path": "/doctors/dr-nikhil-kumar-cardiology"
    },
    {
      "id": 288,
      "name": "Dr. B Venkatesh",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "gleneagles hospital, lakdikapul, hyderabad",
      "city": "unknown",
      "experience": "35+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-b-venkatesh-min.png",
      "path": "/doctors/dr-b-venkatesh"
    },
    {
      "id": 289,
      "name": "Dr. Krishna Sekhar Patri",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "gleneagles hospital, lakdikapul, hyderabad",
      "city": "unknown",
      "experience": "26+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-p-krishna-sekhar-min.png",
      "path": "/doctors/dr-krishna-sekhar-patri"
    },
    {
      "id": 290,
      "name": "Dr. Bhupesh R Shah",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "hcg hospital, ahmedabad",
      "city": "unknown",
      "experience": "27+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-bhupesh-r-shah-ambawadi-ahmedabad-cardiologists-1ij01qp-min.jpg",
      "path": "/doctors/dr-bhupesh-r-shah"
    },
    {
      "id": 291,
      "name": "Dr. Vipul Narain Roy",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "indraprastha apollo hospital, new delhi",
      "city": "unknown",
      "experience": "34+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/6_6.jpg",
      "path": "/doctors/dr-vipul-narain-roy"
    },
    {
      "id": 292,
      "name": "Dr. Priya Chockalingam",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "kauvery hospital, alwarpet",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._priya_chockalingam-min.jpg",
      "path": "/doctors/dr-priya-chockalingam"
    },
    {
      "id": 293,
      "name": "Dr. Deep Chandh Raja",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "kauvery hospital, alwarpet",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._deep_chandh_raja-min.jpg",
      "path": "/doctors/dr-deep-chandh-raja"
    },
    {
      "id": 294,
      "name": "Dr. Krunal Tamakuwala",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "kd hospital ahmedabad",
      "city": "unknown",
      "experience": "9+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._krunal_tamakuwala-min.jpg",
      "path": "/doctors/dr-krunal-tamakuwala"
    },
    {
      "id": 295,
      "name": "Dr. Abhishek Rajpopat",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "kd hospital ahmedabad",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._abhishek_rajpopat-min.jpg",
      "path": "/doctors/dr-abhishek-rajpopat"
    },
    {
      "id": 296,
      "name": "Dr. V. S. Srinath",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "kims hospital, secunderabad",
      "city": "unknown",
      "experience": "25+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._srinath-min.jpg",
      "path": "/doctors/dr-v-s-srinath"
    },
    {
      "id": 297,
      "name": "Dr. Kanjerla Kiran Kumar",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "kims sunshine hospitals, begumpet",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._kanjerla_kiran_kumar-min.jpg",
      "path": "/doctors/dr-kanjerla-kiran-kumar"
    },
    {
      "id": 298,
      "name": "Dr R Sekhar",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "kokilaben dhirubhai ambani hospital, mumbai",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_r_sekhar-min.png",
      "path": "/doctors/dr-r-sekhar-vascular-surgeon"
    },
    {
      "id": 299,
      "name": "Dr. Deepesh Agarwal",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "mahatma gandhi medical college & hospital, jaipur",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._deepesh_agarwal-min.jpg",
      "path": "/doctors/dr-deepesh-agarwal"
    },
    {
      "id": 300,
      "name": "Dr. Deepak Katyal",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "manipal hospital formerly columbia asia, patiala",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._deepak_katyal-min.jpg",
      "path": "/doctors/dr-deepak-katyal"
    },
    {
      "id": 301,
      "name": "Dr. Sandeep Thakkar",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "manipal hospital formerly columbia asia, patiala",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._sandeep_thakkar-min.jpg",
      "path": "/doctors/dr-sandeep-thakkar"
    },
    {
      "id": 302,
      "name": "Dr. Girish Godbole",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "manipal hospital millers road formerly vikram hospital bangalore",
      "city": "unknown",
      "experience": "30+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_85.png",
      "path": "/doctors/dr-girish-godbole"
    },
    {
      "id": 303,
      "name": "Dr. Yeriswamy M C",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "manipal hospitals life's on, jayanagar",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-yeriswamy.jpg",
      "path": "/doctors/dr-yeriswamy-m-c"
    },
    {
      "id": 304,
      "name": "Dr. K P Srihari Das",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "manipal hospitals life's on, jayanagar",
      "city": "unknown",
      "experience": "30+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._k_p_srihari_das-min.jpg",
      "path": "/doctors/dr-k-p-srihari-das"
    },
    {
      "id": 305,
      "name": "Dr. Balaraju D",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "manipal hospitals life's on, jayanagar",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._balaraju_d-min.jpg",
      "path": "/doctors/dr-balaraju-d"
    },
    {
      "id": 306,
      "name": "Dr. Arvind Das",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "max super speciality hospital, saket, new delhi",
      "city": "unknown",
      "experience": "25+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-arvind-das-cardiology.jpg",
      "path": "/doctors/dr-arvind-das-interventional-cardiology"
    },
    {
      "id": 307,
      "name": "Dr. Sameer Gupta",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "metro hospital and heart institute, noida sector 12",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-sameer-gupta.jpg",
      "path": "/doctors/dr-sameer-gupta-cardiology"
    },
    {
      "id": 308,
      "name": "Dr. Sameer Gupta",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "metro hospital and heart institute, noida sector 13",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-sameer-gupta.jpg",
      "path": "/doctors/dr-sameer-gupta-cardiology"
    },
    {
      "id": 309,
      "name": "Dr. Abhilash Kumar Gupta",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "metro hospital, haridwar",
      "city": "unknown",
      "experience": "26+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._abhilash-min.jpg",
      "path": "/doctors/dr-abhilash-kumar-gupta"
    },
    {
      "id": 310,
      "name": "Dr. J Vijesh",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "miot international, chennai",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._j_vijesh-min.jpg",
      "path": "/doctors/dr-j-vijesh"
    },
    {
      "id": 311,
      "name": "Dr. Shyam Kumar G",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "miot international, chennai",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._shyam_kumar_g-min.jpg",
      "path": "/doctors/dr-shyam-kumar-g"
    },
    {
      "id": 312,
      "name": "Dr. Harish Mohanty",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "nanavati super specialty hospital, mumbai",
      "city": "unknown",
      "experience": "52+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_harish_mohanty.jpg",
      "path": "/doctors/dr-harish-mohanty"
    },
    {
      "id": 313,
      "name": "Dr. Sanjay G. Gidhwani",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "orange city hospital & research institute, nagpur",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._sanjay_g._gidhwani-min.jpg",
      "path": "/doctors/dr-sanjay-g-gidhwani"
    },
    {
      "id": 314,
      "name": "Dr. Saujatya Chakraborty",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "ruby general hospital, kolkata",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._saujatya_c.jpg",
      "path": "/doctors/dr-saujatya-chakraborty"
    },
    {
      "id": 315,
      "name": "Dr. Suhas Hardas",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "ruby hall clinic, pune",
      "city": "unknown",
      "experience": "29+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_-_2021-11-26t135337.458.png",
      "path": "/doctors/dr-suhas-hardas"
    },
    {
      "id": 316,
      "name": "Dr. C.N. Makhale",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "ruby hall clinic, pune",
      "city": "unknown",
      "experience": "33+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_-_2021-11-26t133923.416.png",
      "path": "/doctors/dr-cn-makhale"
    },
    {
      "id": 317,
      "name": "Dr. Nilesh Gautam",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "s. l. raheja hospital, mumbai",
      "city": "unknown",
      "experience": "26+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._nilesh_gautam-min.jpg",
      "path": "/doctors/dr-nilesh-gautam-cardiologist"
    },
    {
      "id": 318,
      "name": "Dr. Ganesh Shivnani",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "sir ganga ram hospital, new delhi",
      "city": "unknown",
      "experience": "33+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_ganesh_shivani.jpg",
      "path": "/doctors/dr-ganesh-shivnani-cardiologist"
    },
    {
      "id": 319,
      "name": "Dr. J. P. S. Sawhney",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "sir ganga ram hospital, new delhi",
      "city": "unknown",
      "experience": "36+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._j._p._s._sawhney.jpg",
      "path": "/doctors/dr-j-p-s-sawhney-cardiologist"
    },
    {
      "id": 320,
      "name": "Dr. Satish L",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "sparsh hospital (yeshwanthpur) bangalore",
      "city": "unknown",
      "experience": "11+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._satish_l-min.jpg",
      "path": "/doctors/dr-satish-l"
    },
    {
      "id": 321,
      "name": "Dr. Avinash Bansal",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "sri balaji action medical institute new delhi",
      "city": "unknown",
      "experience": "9+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._avinash_bansal-min.jpg",
      "path": "/doctors/dr-avinash-bansal"
    },
    {
      "id": 322,
      "name": "Dr. J.V.Balasubramaniyan",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "sri ramachandra medical centre, chennai",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_-_2021-10-22t142459.266-min.jpg",
      "path": "/doctors/dr-jvbalasubramaniyan"
    },
    {
      "id": 323,
      "name": "Dr. S.Nagendra Boopathy",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "sri ramachandra medical centre, chennai",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/untitled7864-min.jpg",
      "path": "/doctors/dr-snagendra-boopathy"
    },
    {
      "id": 324,
      "name": "Dr. S.Ramesh",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "sri ramachandra medical centre, chennai",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_-_2021-10-22t141804.139-min.jpg",
      "path": "/doctors/dr-sramesh"
    },
    {
      "id": 325,
      "name": "Dr. Vikranth Veeranna",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "ss sparsh hospital (mysore road) bangalore",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._vikranth_veeranna-min.jpg",
      "path": "/doctors/dr-vikranth-veeranna"
    },
    {
      "id": 326,
      "name": "Dr. Ramesh Gudapati",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "star hospitals, hyderabad",
      "city": "unknown",
      "experience": "32+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ramesh-min_0.jpg",
      "path": "/doctors/dr-ramesh-gudapati"
    },
    {
      "id": 327,
      "name": "Dr. C. Guru Chaithanya Kumar",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "sunshine hospitals, hyderabad",
      "city": "unknown",
      "experience": "12+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._guru-min_0.jpg",
      "path": "/doctors/dr-c-guru-chaithanya-kumar"
    },
    {
      "id": 328,
      "name": "Dr Umesh Khedkar",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "united ciigma hospital, aurangabad, maharashtra, india",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview25-min.png",
      "path": "/doctors/dr-umesh-khedkar"
    },
    {
      "id": 329,
      "name": "Dr. Krishna Moorthy",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "vijaya hospital, chennai",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._krishna_moorthy-min.png",
      "path": "/doctors/dr-krishna-moorthy"
    },
    {
      "id": 330,
      "name": "Dr. E. Chandrasekhar",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "vijaya hospital, chennai",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_-_2022-09-19t104456.091-min.png",
      "path": "/doctors/dr-e-chandrasekhar"
    },
    {
      "id": 331,
      "name": "Dr. P. Kamalanathan",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "vijaya hospital, chennai",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._p._kamalanathan.jpg",
      "path": "/doctors/dr-p-kamalanathan-0"
    },
    {
      "id": 332,
      "name": "Dr.P. Balasubramanian",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "vijaya hospital, chennai",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._p_balasubramaninan.jpg",
      "path": "/doctors/drp-balasubramanian"
    },
    {
      "id": 333,
      "name": "Dr G. Venkatesh",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "vijaya hospital, chennai",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/g-venkatesh-min.jpg",
      "path": "/doctors/dr-g-venkatesh"
    },
    {
      "id": 334,
      "name": "Dr. Avinash Jayachandran",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "vinita hospital",
      "city": "unknown",
      "experience": "15+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._avinash_jayachandran-min.jpg",
      "path": "/doctors/dr-avinash-jayachandran"
    },
    {
      "id": 335,
      "name": "Dr. Amey Beedkar",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "wockhardt super speciality hospital, nagpur",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.amey-min.png",
      "path": "/doctors/dr-amey-beedkar"
    },
    {
      "id": 336,
      "name": "Dr. Ashish Mishra",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "wockhardt super speciality hospital, mira road",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ashish_mishra-min.jpg",
      "path": "/doctors/dr-ashish-mishra"
    },
    {
      "id": 337,
      "name": "Dr. Anup Taksande",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "wockhardt super speciality hospital, mira road",
      "city": "unknown",
      "experience": "21+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._anup_taksande-min-removebg-preview.png",
      "path": "/doctors/dr-anup-taksande"
    },
    {
      "id": 338,
      "name": "Dr. Dinesh Bhojraj Padole",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "wockhardt super speciality hospital, nagpur",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._dinesh-min.png",
      "path": "/doctors/dr-dinesh-bhojraj-padole"
    },
    {
      "id": 339,
      "name": "Dr. P. Thirumalai",
      "specialty": "non invasive cardiologist",
      "designation": "consultant",
      "hospital": "dr. kamakshi memorial hospital, chennai",
      "city": "unknown",
      "experience": "55+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._thirumalai-min.jpg",
      "path": "/doctors/dr-p-thirumalai"
    },
    {
      "id": 340,
      "name": "Dr. Sujatha G",
      "specialty": "non invasive cardiologist",
      "designation": "consultant",
      "hospital": "manipal hospital formerly columbia asia referral hospital, bangalore (yeshwanthpur)",
      "city": "unknown",
      "experience": "12+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._sujatha-min.jpg",
      "path": "/doctors/dr-sujatha-g"
    },
    {
      "id": 341,
      "name": "Dr. Rakesh Tomar",
      "specialty": "non invasive cardiologist",
      "designation": "consultant",
      "hospital": "kiran multi super speciality hospital & research center",
      "city": "unknown",
      "experience": "21+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_rakesh_tomar_1-min.jpg",
      "path": "/doctors/dr-rakesh-tomar"
    },
    {
      "id": 342,
      "name": "Dr. P. V. Ramachandra Raju",
      "specialty": "non invasive cardiologist",
      "designation": "consultant",
      "hospital": "star hospitals, hyderabad",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._p.v-min.jpg",
      "path": "/doctors/dr-p-v-ramachandra-raju"
    },
    {
      "id": 343,
      "name": "Dr. Anagha Bhagwat",
      "specialty": "paediatric neurologist",
      "designation": "consultant",
      "hospital": "apollo hospital, indore",
      "city": "unknown",
      "experience": "26+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/anagha-bhagwat-paediatric-neurologist_1-min.jpeg",
      "path": "/doctors/dr-anagha-bhagwat"
    },
    {
      "id": 344,
      "name": "Dr. Omkar Hajirnis",
      "specialty": "paediatric neurologist",
      "designation": "consultant",
      "hospital": "fortis hospital, mulund, mumbai",
      "city": "unknown",
      "experience": "12+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._omkar-min.jpg",
      "path": "/doctors/dr-omkar-hajirnis"
    },
    {
      "id": 345,
      "name": "Dr. Bidisha Banerjee",
      "specialty": "paediatric neurologist",
      "designation": "consultant",
      "hospital": "manipal hospital (old airport road) bangalore",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._bidisha-min.jpg",
      "path": "/doctors/dr-bidisha-banerjee"
    },
    {
      "id": 346,
      "name": "Dr. Usha Mallinath",
      "specialty": "paediatric neurologist",
      "designation": "consultant",
      "hospital": "manipal hospitals life's on, whitefield",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-usha_mallinath.jpg",
      "path": "/doctors/dr-usha-mallinath"
    },
    {
      "id": 347,
      "name": "Dr. Pooja Kapoor",
      "specialty": "paediatric neurologist",
      "designation": "consultant",
      "hospital": "paras hospitals, gurgaon",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_pooja_kapoor.jpg",
      "path": "/doctors/dr-pooja-kapoor"
    },
    {
      "id": 348,
      "name": "Dr. Abhishek Ravindra Jain",
      "specialty": "paediatric neurologist",
      "designation": "consultant",
      "hospital": "rainbow children's hospital and birthright by rainbow, hyderabad",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._abhishek-min_0.jpg",
      "path": "/doctors/dr-abhishek-ravindra-jain"
    },
    {
      "id": 349,
      "name": "Dr.Ramesh Konanki",
      "specialty": "paediatric neurologist",
      "designation": "consultant",
      "hospital": "rainbow children's hospital and birthright by rainbow, hyderabad",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_61.png",
      "path": "/doctors/drramesh-konanki"
    },
    {
      "id": 350,
      "name": "Dr. Kishore Kotha",
      "specialty": "paediatric neurologist",
      "designation": "consultant",
      "hospital": "sparsh hospital (yeshwanthpur) bangalore",
      "city": "unknown",
      "experience": "15+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._kishore_kotha-min.jpg",
      "path": "/doctors/dr-kishore-kotha"
    },
    {
      "id": 351,
      "name": "Dr. Bhushan Khedkar",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "aditya birla memorial hospital, pune",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_-_2021-12-01t141901.297-min.png",
      "path": "/doctors/dr-bhushan-khedkar"
    },
    {
      "id": 352,
      "name": "Dr. Ajit Swamy",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "aditya birla memorial hospital, pune",
      "city": "unknown",
      "experience": "25+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/ajit_swamy-min.jpg",
      "path": "/doctors/dr-ajit-swamy"
    },
    {
      "id": 353,
      "name": "Dr. Chintapeta Ravi",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "apollo hospital drdo",
      "city": "unknown",
      "experience": "25+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._chintapeta_ravi-min.jpg",
      "path": "/doctors/dr-chintapeta-ravi"
    },
    {
      "id": 354,
      "name": "Dr. Imtiaz Ghani",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "apollo hospitals, greams road, chennai",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._imtiaz_ghani-min.jpg",
      "path": "/doctors/dr-imtiaz-ghani"
    },
    {
      "id": 355,
      "name": "Dr Muralidharan Venkatesan",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "apollo hospitals, greams road, chennai",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/_q5a7384_1-min.jpg",
      "path": "/doctors/dr-muralidharan-venkatesan"
    },
    {
      "id": 356,
      "name": "Dr Ameet H Kulkarni",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "apollo speciality hospital, jayanagar",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-ameet-h-kulkarni-bangalore-min.jpg",
      "path": "/doctors/dr-ameet-h-kulkarni"
    },
    {
      "id": 357,
      "name": "Dr.Nishant Kumar",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "bhagwan mahavir medica superspecialty hospital, ranchi",
      "city": "unknown",
      "experience": "15+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_nishant_0.jpg",
      "path": "/doctors/drnishant-kumar"
    },
    {
      "id": 358,
      "name": "Dr. Eakpatipan Eamskoolnont",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "bnh hospital, bangkok",
      "city": "unknown",
      "experience": "29+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._eakpatipan_e.jpg",
      "path": "/doctors/dr-eakpatipan-eamskoolnont"
    },
    {
      "id": 359,
      "name": "Dr. Pradeep Singh",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "dr. l h hiranandani hospital, mumbai",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_pradeep_1-min.jpg",
      "path": "/doctors/dr-pradeep-singh"
    },
    {
      "id": 360,
      "name": "Dr. Nipun Bajaj",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "fortis escorts heart institute, new delhi",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._nipun_bajaj.jpg",
      "path": "/doctors/dr-nipun-bajaj"
    },
    {
      "id": 361,
      "name": "Dr. Gaurav Bansal",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "fortis escorts heart institute, new delhi",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._gaurav-min_0.jpg",
      "path": "/doctors/dr-gaurav-bansal-neurosurgeon"
    },
    {
      "id": 362,
      "name": "Dr. Saransh Gupta",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "indian spinal injuries center, new delhi",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._saransh_gupta-min.jpg",
      "path": "/doctors/dr-saransh-gupta"
    },
    {
      "id": 363,
      "name": "Dr. Anindya Basu",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "institute of neurosciences, kolkata",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/doctor5_-213x230-min.png",
      "path": "/doctors/dr-anindya-basu"
    },
    {
      "id": 364,
      "name": "Dr. Om Prakash Gupta",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "ipsc pain and spine hospital, delhi",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.-om-prakash-gupta1-min.jpg",
      "path": "/doctors/dr-om-prakash-gupta"
    },
    {
      "id": 365,
      "name": "Dr. Pramod Saini",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "jaypee hospital, noida",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._pramod_saini-min.jpg",
      "path": "/doctors/dr-pramod-saini"
    },
    {
      "id": 366,
      "name": "Dr. Hrutvij Bhatt",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "kd hospital ahmedabad",
      "city": "unknown",
      "experience": "12+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._hrutvij_bhatt-min.jpg",
      "path": "/doctors/dr-hrutvij-bhatt"
    },
    {
      "id": 367,
      "name": "Dr. Himanshu R. Prasad",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "kims sunshine hospitals, begumpet",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._himanshu-min.jpg",
      "path": "/doctors/dr-himanshu-r-prasad"
    },
    {
      "id": 368,
      "name": "Dr. Akhil Mohandas",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "meitra hospital, kerala",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/untitled738-min.png",
      "path": "/doctors/dr-akhil-mohandas"
    },
    {
      "id": 369,
      "name": "Dr. Sanjay Patil",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "ruby hall clinic, pune",
      "city": "unknown",
      "experience": "27+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_-_2021-12-01t140930.982-min.png",
      "path": "/doctors/dr-sanjay-patil"
    },
    {
      "id": 370,
      "name": "Dr. Hemant Alda",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "shalby divine super speciality hospital, ranchi",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._hemant_alda.jpg",
      "path": "/doctors/dr-hemant-alda"
    },
    {
      "id": 371,
      "name": "Dr. Vijay S",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "sims hospital, vadapalani, chennai",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._vijay_s.jpg",
      "path": "/doctors/dr-vijay-s"
    },
    {
      "id": 372,
      "name": "Dr. G. Sudhir",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "sri ramachandra medical centre, chennai",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/untitled1232-min.jpg",
      "path": "/doctors/dr-g-sudhir"
    },
    {
      "id": 373,
      "name": "Dr. Bala Raja Sehkar Chandra Yetkuri",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "star hospitals, hyderabad",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._bala-min_0.jpg",
      "path": "/doctors/dr-bala-raja-sehkar-chandra-yetkuri"
    },
    {
      "id": 374,
      "name": "Dr. Purav Patel",
      "specialty": "spine surgeon",
      "designation": "consultant",
      "hospital": "sterling hospital, ahmedabad",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._purav_patel-min.jpeg",
      "path": "/doctors/dr-purav-patel"
    },
    {
      "id": 375,
      "name": "Dr. Sanjay Jain",
      "specialty": "surgical gastroenterologist",
      "designation": "consultant",
      "hospital": "indraprastha apollo hospital, new delhi",
      "city": "unknown",
      "experience": "40+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._sanjay_jain-removebg-preview-min.png",
      "path": "/doctors/dr-sanjay-jain-gastroenterologist"
    },
    {
      "id": 376,
      "name": "Dr. Akshay Singh",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "wockhardt super speciality hospital, nagpur",
      "city": "unknown",
      "experience": "11+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._akshay_dingh.jpg",
      "path": "/doctors/dr-akshay-singh"
    },
    {
      "id": 377,
      "name": "Dr. Arun V",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "manipal hospital sarjapur road, bengaluru",
      "city": "unknown",
      "experience": "12+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.-arun-v-300x300.jpg",
      "path": "/doctors/dr-arun-v"
    },
    {
      "id": 378,
      "name": "Dr. Mohan R",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "mgm healthcare, chennai",
      "city": "unknown",
      "experience": "12+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._mohan-min.jpg",
      "path": "/doctors/dr-mohan-r"
    },
    {
      "id": 379,
      "name": "Dr. Pritam Sangwan",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "sri balaji action medical institute new delhi",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._pritam_sangwan-min.jpg",
      "path": "/doctors/dr-pritam-sangwan"
    },
    {
      "id": 380,
      "name": "Dr. A Suresh",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo hospital, vizag",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._a_suresh.jpg",
      "path": "/doctors/dr-suresh"
    },
    {
      "id": 381,
      "name": "Dr. Madhusudana N",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "gleneagles bgs hospital, bangalore",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._madhusudana_n-min.jpg",
      "path": "/doctors/dr-madhusudana-n"
    },
    {
      "id": 382,
      "name": "Dr. Gourav S Shetty",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "narayana multispeciality hospital, bangalore",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._gourav_s_shetty_-_cardiac_surgeon.jpg",
      "path": "/doctors/dr-gourav-s-shetty"
    },
    {
      "id": 383,
      "name": "Dr. Bipeenchandra Y. Bhamre",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "saifee hospital, mumbai",
      "city": "unknown",
      "experience": "15+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/bipeenchandra_y._bhamre-min.jpg",
      "path": "/doctors/dr-bipeenchandra-y-bhamre"
    },
    {
      "id": 384,
      "name": "Dr. Anuj Sathe",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo hospitals, mumbai",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/anuj_sathe-min.jpg",
      "path": "/doctors/dr-anuj-sathe"
    },
    {
      "id": 385,
      "name": "Dr P. Susheel Reddy",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "vijaya hospital, chennai",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_p._susheel_reddy-min.jpg",
      "path": "/doctors/dr-p-susheel-reddy"
    },
    {
      "id": 386,
      "name": "Dr. Neeraj Kale",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo hospital, nashik",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_neeraj_kale-min.jpg",
      "path": "/doctors/dr-neeraj-kale"
    },
    {
      "id": 387,
      "name": "Dr P. Mahesh Babu",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "vijaya hospital, chennai",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/mahesh-babu-min.jpg",
      "path": "/doctors/dr-p-mahesh-babu"
    },
    {
      "id": 388,
      "name": "Dr. Anil Drnamraju",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "continental hospitals, hyderabad",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.-anil-dronamraju.jpg",
      "path": "/doctors/dr-anil-drnamraju-cardio-thoracic-and-vascular-surgery"
    },
    {
      "id": 389,
      "name": "Dr. Chander Shekhar",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "saroj super speciality hospital",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._chander_shekhar.jpg",
      "path": "/doctors/dr-chander-shekhar"
    },
    {
      "id": 390,
      "name": "Dr. A. Nagesh",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "care hospitals, banjara hills, hyderabad",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._a_nagesh-min.jpg",
      "path": "/doctors/dr-nagesh"
    },
    {
      "id": 391,
      "name": "Dr. Pathakota Sudhakar Reddy",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "care hospitals, banjara hills, hyderabad",
      "city": "unknown",
      "experience": "21+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-sudhakar-reddy_1-min.png",
      "path": "/doctors/dr-pathakota-sudhakar-reddy"
    },
    {
      "id": 392,
      "name": "Dr. Dhaval Naik",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "cims hospital, ahmedabad",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/cims-dr-dhaval-naik.jpg",
      "path": "/doctors/dr-dhaval-naik"
    },
    {
      "id": 393,
      "name": "Dr. Prem Anand John",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "gleneagles global hospital, chennai",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._prem_anand_john.jpg",
      "path": "/doctors/dr-prem-anand-john"
    },
    {
      "id": 394,
      "name": "Dr. Satyendra Nath Pathuri",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "star hospitals, hyderabad",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._satyendra-min.jpg",
      "path": "/doctors/dr-satyendra-nath-pathuri"
    },
    {
      "id": 395,
      "name": "Dr. Hemant Pramod Pathare",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "jaslok hospital, mumbai",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._hemant_pramod_pathare-removebg-preview-min.png",
      "path": "/doctors/dr-hemant-pramod-pathare"
    },
    {
      "id": 396,
      "name": "Dr. Anil K Vaid",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "saroj super speciality hospital",
      "city": "unknown",
      "experience": "25+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._vaid.jpg",
      "path": "/doctors/dr-anil-k-vaid"
    },
    {
      "id": 397,
      "name": "Dr. K Raghu",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "care hospitals, banjara hills, hyderabad",
      "city": "unknown",
      "experience": "27+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.-raghu-2_1-min.png",
      "path": "/doctors/dr-k-raghu"
    },
    {
      "id": 398,
      "name": "Dr. Narasinga Rao Pantula",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "kims sunshine hospitals, begumpet",
      "city": "unknown",
      "experience": "29+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._narasinga_rao_pantula-min.jpg",
      "path": "/doctors/dr-narasinga-rao-pantula"
    },
    {
      "id": 399,
      "name": "Dr. Sanjay Kumar Agarwal",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo hospitals, jubilee hills hyderabad",
      "city": "unknown",
      "experience": "33+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._sanjay_kumar_agarwal.jpg",
      "path": "/doctors/dr-sanjay-kumar-agarwal"
    },
    {
      "id": 400,
      "name": "Dr V. Umapathy",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "vijaya hospital, chennai",
      "city": "unknown",
      "experience": "30+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/v-umapathy-min.jpg",
      "path": "/doctors/dr-v-umapathy"
    },
    {
      "id": 401,
      "name": "Dr. Arun Kumar Goyal",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "sharda hospital, greater noida",
      "city": "unknown",
      "experience": "30+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._arun_goyal_image-min.png",
      "path": "/doctors/dr-arun-kumar-goyal"
    },
    {
      "id": 402,
      "name": "Dr. C.J. Hemant Kumar",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "jaslok hospital, mumbai",
      "city": "unknown",
      "experience": "35+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_cj_hemant_kumar-min.jpg",
      "path": "/doctors/dr-cj-hemant-kumar"
    },
    {
      "id": 403,
      "name": "Dr. Mukundan Seshadri",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "manipal hospitals life's on, whitefield",
      "city": "unknown",
      "experience": "35+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/drmukundanseshadri.jpeg",
      "path": "/doctors/dr-mukundan-seshadri"
    },
    {
      "id": 404,
      "name": "Dr Dillip Kumar Mishra",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo hospitals, greams road, chennai",
      "city": "unknown",
      "experience": "39+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_dillip_kumar_mishra-min.jpg",
      "path": "/doctors/dr-dillip-kumar-mishra-cardiothoracic-surgery"
    },
    {
      "id": 405,
      "name": "Dr. Col. M Sitaram",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo hospital, secunderabad",
      "city": "unknown",
      "experience": "40+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._col._m_sitaram-min.png",
      "path": "/doctors/dr-col-m-sitaram"
    },
    {
      "id": 406,
      "name": "Dr. Senthilkumar D",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "mgm healthcare, chennai",
      "city": "unknown",
      "experience": "9+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._senthilkumar-d-min.jpg",
      "path": "/doctors/dr-senthilkumar-d"
    },
    {
      "id": 407,
      "name": "Dr. Samith Chouta",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "aditya birla memorial hospital, pune",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._samith_chouta-min.jpg",
      "path": "/doctors/dr-samith-chouta"
    },
    {
      "id": 408,
      "name": "Dr Amar Nath Ghosh",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo gleneagles hospital, kolkata",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_amar_nath_ghosh.jpg",
      "path": "/doctors/dr-amar-nath-ghosh-cardiac-surgeon"
    },
    {
      "id": 409,
      "name": "Dr. Dharma Rakshak Ayapati",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo hospital, secunderabad",
      "city": "unknown",
      "experience": "33+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ayapati.jpg",
      "path": "/doctors/dr-dharma-rakshak-ayapati"
    },
    {
      "id": 410,
      "name": "Dr. Afroz Farooqi",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo hospital, vizag",
      "city": "unknown",
      "experience": "36+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._afroz_farooqi.jpg",
      "path": "/doctors/dr-afroz-farooqi"
    },
    {
      "id": 411,
      "name": "Dr. Jaideep Kumar Trivedi",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo hospital, vizag",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-jaideep-kumar.jpg",
      "path": "/doctors/dr-jaideep-kumar-trivedi"
    },
    {
      "id": 412,
      "name": "Dr. Pramod Kumar",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo hospitals, greams road, chennai",
      "city": "unknown",
      "experience": "28+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-pramod-kumar-cardiologist.jpg",
      "path": "/doctors/dr-pramod-kumar"
    },
    {
      "id": 413,
      "name": "Dr. Utpal Shah",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo hospitals, ahmedabad",
      "city": "unknown",
      "experience": "31+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.-utpal-shah.jpg",
      "path": "/doctors/dr-utpal-shah"
    },
    {
      "id": 414,
      "name": "Dr. Nitin Jain",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo hospitals, ahmedabad",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.-nitin-jain.jpg",
      "path": "/doctors/dr-nitin-jain"
    },
    {
      "id": 415,
      "name": "Dr. Hasit Joshi",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo hospitals, ahmedabad",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.-hasit-joshi.jpg",
      "path": "/doctors/dr-hasit-joshi"
    },
    {
      "id": 416,
      "name": "Dr. Sridhar L F",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo hospitals, greams road, chennai",
      "city": "unknown",
      "experience": "33+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-sridhar-l-f-cardio-thoracic-surgeon.jpg",
      "path": "/doctors/dr-sridhar-l-f"
    },
    {
      "id": 417,
      "name": "Dr. Rajarajan Venkatesan",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo hospitals, greams road, chennai",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-raja-venka.jpg",
      "path": "/doctors/dr-rajarajan-venkatesan-cardio-thoracic-and-vascular-surgery"
    },
    {
      "id": 418,
      "name": "Dr. Muralidharan K V",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo specialty hospital, omr",
      "city": "unknown",
      "experience": "43+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._muralidharan_k_v.jpg",
      "path": "/doctors/dr-muralidharan-k-v"
    },
    {
      "id": 419,
      "name": "Dr. Siva Muthukumar",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo specialty hospital, omr",
      "city": "unknown",
      "experience": "26+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._siva_muthukumar.jpg",
      "path": "/doctors/dr-siva-muthukumar"
    },
    {
      "id": 420,
      "name": "Dr Ramakrishnan G",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo specialty hospitals, vanagaram",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ramakrisha_g.jpg",
      "path": "/doctors/dr-ramakrishnan-g"
    },
    {
      "id": 421,
      "name": "Dr. Janardhana Reddy D",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo specialty hospitals, vanagaram",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-janardhana-reddy.jpg",
      "path": "/doctors/dr-janardhana-reddy-d"
    },
    {
      "id": 422,
      "name": "Dr. Pradyot Kumar",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "asian heart institute, mumbai",
      "city": "unknown",
      "experience": "27+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_pradyot_kumar.jpg",
      "path": "/doctors/dr-pradyot-kumar-cardiothoracic-surgery"
    },
    {
      "id": 423,
      "name": "Dr. Prashanth Y M",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "aster cmi hospital (hebbel) bangalore",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._prashanth_y_m.jpg",
      "path": "/doctors/dr-prashanth-y-m"
    },
    {
      "id": 424,
      "name": "Dr. Nagesh Basavaraj",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "gleneagles bgs hospital, bangalore",
      "city": "unknown",
      "experience": "26+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._nagesh_basavaraj-min.jpg",
      "path": "/doctors/dr-nagesh-basavaraj"
    },
    {
      "id": 425,
      "name": "Dr. Satyajit Govindrao Mehetre",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "continental hospitals, hyderabad",
      "city": "unknown",
      "experience": "19+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-satyajit-govindrao-mehetre_1-min.png",
      "path": "/doctors/dr-satyajit-govindrao-mehetre"
    },
    {
      "id": 426,
      "name": "Dr. Majid Ahmed Talikoti",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "delhi heart and lung institute",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._talikoti.jpg",
      "path": "/doctors/dr-majid-ahmed-talikoti"
    },
    {
      "id": 427,
      "name": "Dr Sarajit Kumar Das",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "fortis hospital (anandapur) kolkata",
      "city": "unknown",
      "experience": "41+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_sarajit_kumar_das.jpg",
      "path": "/doctors/dr-sarajit-kumar-das-cardio-thoracic-surgeon-cardiac-surgeon"
    },
    {
      "id": 428,
      "name": "Dr K M Mandana",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "fortis hospital (anandapur) kolkata",
      "city": "unknown",
      "experience": "30+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_k_m_mandana_-min.jpg",
      "path": "/doctors/dr-k-m-mandana-cardio-thoracic-surgeon-vascular-surgeon"
    },
    {
      "id": 429,
      "name": "Dr. Nandkumar S Chonkar",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "fortis hospital, mulund, mumbai",
      "city": "unknown",
      "experience": "27+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.nandkumar-chonkar_1-min.jpg",
      "path": "/doctors/dr-nandkumar-s-chonkar"
    },
    {
      "id": 430,
      "name": "Dr. Satish Javali",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "fortis hospital, mulund, mumbai",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/drsatish_javali-min.jpg",
      "path": "/doctors/dr-satish-javali"
    },
    {
      "id": 431,
      "name": "Dr. Karthick Anjaneyan",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "gleneagles global hospital, chennai",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/drkarthickanjaneyan_1-min.jpg",
      "path": "/doctors/dr-karthick-anjaneyan"
    },
    {
      "id": 432,
      "name": "Dr. Ajeya Joshi",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "gleneagles hospital, lakdikapul, hyderabad",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-ajeya-joshi-min_1.png",
      "path": "/doctors/dr-ajeya-joshi"
    },
    {
      "id": 433,
      "name": "Dr. K K Pandey",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "indraprastha apollo hospital, new delhi",
      "city": "unknown",
      "experience": "27+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/kkpandey-min.jpg",
      "path": "/doctors/dr-k-k-pandey"
    },
    {
      "id": 434,
      "name": "Dr. Sujit. V.I",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "kauvery hospital, alwarpet",
      "city": "unknown",
      "experience": "26+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_-_2022-01-03t145204.734-min.png",
      "path": "/doctors/dr-sujit-vi"
    },
    {
      "id": 435,
      "name": "Dr. Sandeep Janardhan",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "kims sunshine hospitals, begumpet",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._sandeep-min_2.jpg",
      "path": "/doctors/dr-sandeep-janardhan"
    },
    {
      "id": 436,
      "name": "Dr. Sandip Sardar",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "manipal hospital formerly amri hospital, kolkata (mukundapur)",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.sandipsardar-1_1-min.jpg",
      "path": "/doctors/dr-sandip-sardar"
    },
    {
      "id": 437,
      "name": "Dr. Jitendra Nath Patnaik",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "manipal hospital formerly amri hospitals, bhubaneswar",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._jitendra_nath_patnaik-min.jpg",
      "path": "/doctors/dr-jitendra-nath-patnaik"
    },
    {
      "id": 438,
      "name": "Dr. Biswajeet Mohapatra",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "manipal hospital formerly amri hospitals, bhubaneswar",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._biswajeet_mohapatra.jpg",
      "path": "/doctors/dr-biswajeet-mohapatra-cardio-thoracic-and-vascular-surgery"
    },
    {
      "id": 439,
      "name": "Dr. Debmalya Saha",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "manipal hospital formerly amri hospital, kolkata (dhakuria)",
      "city": "unknown",
      "experience": "10+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._debmalya_saha-min.jpg",
      "path": "/doctors/dr-debmalya-saha"
    },
    {
      "id": 440,
      "name": "Dr. Subhabrata Banerjee",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "manipal hospital formerly amri hospital, kolkata (dhakuria)",
      "city": "unknown",
      "experience": "15+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._subhabrata_banerjee-min.jpg",
      "path": "/doctors/dr-subhabrata-banerjee"
    },
    {
      "id": 441,
      "name": "Dr. Sudipto Bhattacharya",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "manipal hospital formerly amri hospital, kolkata (mukundapur)",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview21-min.png",
      "path": "/doctors/dr-sudipto-bhattacharya"
    },
    {
      "id": 442,
      "name": "Dr. Lingaraj Nath",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "manipal hospital formerly amri hospitals, bhubaneswar",
      "city": "unknown",
      "experience": "25+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._lingaraj_nath-min.jpg",
      "path": "/doctors/dr-lingaraj-nath"
    },
    {
      "id": 443,
      "name": "Dr. Manmohan Singh Chouhan",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "manipal hospital formerly columbia asia, palam vihar, gurgaon",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._manmohan_singh_chouhan-min.jpg",
      "path": "/doctors/dr-manmohan-singh-chouhan"
    },
    {
      "id": 444,
      "name": "Dr. Sunil Dwivedi",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "manipal hospital millers road formerly vikram hospital bangalore",
      "city": "unknown",
      "experience": "24+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview_84.png",
      "path": "/doctors/dr-sunil-dwivedi"
    },
    {
      "id": 445,
      "name": "Dr. Joseph Xavier",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "manipal hospital sarjapur road, bengaluru",
      "city": "unknown",
      "experience": "28+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/joseph-xavier-4.jpg",
      "path": "/doctors/dr-joseph-xavier"
    },
    {
      "id": 446,
      "name": "Dr. Bhaskar B. V.",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "manipal hospital varthur road formerly columbia asia bangalore",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-bhaskar.jpg",
      "path": "/doctors/dr-bhaskar-b-v"
    },
    {
      "id": 447,
      "name": "Dr. Lalchand Bandagi",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "manipal hospital (old airport road) bangalore",
      "city": "unknown",
      "experience": "21+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._lalchand_bandagi-min.jpg",
      "path": "/doctors/dr-lalchand-bandagi"
    },
    {
      "id": 448,
      "name": "Dr. S.S. Iyengar",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "manipal hospital (old airport road) bangalore",
      "city": "unknown",
      "experience": "52+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._s._s._iyengar.jpg",
      "path": "/doctors/dr-ss-iyengar"
    },
    {
      "id": 449,
      "name": "Dr. Dipayan Ghosh",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "manipal hospital, saltlake",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._dipayan_ghosh-min.png",
      "path": "/doctors/dr-dipayan-ghosh"
    },
    {
      "id": 450,
      "name": "Dr. Arijit Ghosh",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "manipal hospitals broadway formerly amri hospitals, saltlake",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_arijit_ghosh-min.jpg",
      "path": "/doctors/dr-arijit-ghosh"
    },
    {
      "id": 451,
      "name": "Dr. Aditya Kumar Singh",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "max super speciality hospital, saket, new delhi",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._aditya-min.jpg",
      "path": "/doctors/dr-aditya-kumar-singh"
    },
    {
      "id": 452,
      "name": "Dr. Ganesh K. Mani",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "max super speciality hospital, saket, new delhi",
      "city": "unknown",
      "experience": "45+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-ganesh-k-mani-cardiology-1.jpg",
      "path": "/doctors/dr-ganesh-k-mani"
    },
    {
      "id": 453,
      "name": "Dr A R Krishna Prasad",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "medicover hospital, karimnagar",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-krishna-prasad_1_-removebg-preview_0.jpg",
      "path": "/doctors/dr-r-krishna-prasad"
    },
    {
      "id": 454,
      "name": "Dr Sadashiv Baburao Tamagond",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "medicover hospital, karimnagar",
      "city": "unknown",
      "experience": "12+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/untitled-removebg-preview_1.png",
      "path": "/doctors/dr-sadashiv-baburao-tamagond"
    },
    {
      "id": 455,
      "name": "Dr. Ashu Agarwal",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "metro hospital and heart institute, noida sector 12",
      "city": "unknown",
      "experience": "25+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ashu_agarwal-min_0.jpg",
      "path": "/doctors/dr-ashu-agarwal"
    },
    {
      "id": 456,
      "name": "Dr. Ashu Agarwal",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "metro hospital and heart institute, noida sector 13",
      "city": "unknown",
      "experience": "25+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ashu_agarwal-min_0.jpg",
      "path": "/doctors/dr-ashu-agarwal"
    },
    {
      "id": 457,
      "name": "Dr. Vishal Dhir",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "metro hospital & cancer institute, preet vihar, new delhi",
      "city": "unknown",
      "experience": "28+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._vishal-min_0.jpg",
      "path": "/doctors/dr-vishal-dhir"
    },
    {
      "id": 458,
      "name": "Dr. Madhur Dalela",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "metro hospital and heart institute, noida sector 12",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._madhur_dalela-min.jpg",
      "path": "/doctors/dr-madhur-dalela"
    },
    {
      "id": 459,
      "name": "Dr. Madhur Dalela",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "metro hospital and heart institute, noida sector 13",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._madhur_dalela-min.jpg",
      "path": "/doctors/dr-madhur-dalela"
    },
    {
      "id": 460,
      "name": "Dr. Suresh Rao Kg",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "mgm healthcare, chennai",
      "city": "unknown",
      "experience": "32+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._rao_kg-min.jpg",
      "path": "/doctors/dr-suresh-rao-kg"
    },
    {
      "id": 461,
      "name": "Dr. Balaraman Palaniappan",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "miot international, chennai",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._balaraman-min_1.jpg",
      "path": "/doctors/dr-balaraman-palaniappan"
    },
    {
      "id": 462,
      "name": "Dr. M. Kathiresan",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "apollo specialty hospital, omr",
      "city": "unknown",
      "experience": "26+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._m_kathiresan.jpg",
      "path": "/doctors/dr-m-kathiresan"
    },
    {
      "id": 463,
      "name": "Dr. Avijit Basu",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "n.m. wadia institute of cardiology, pune",
      "city": "unknown",
      "experience": "27+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._avijit_basu-removebg-preview-min.png",
      "path": "/doctors/dr-avijit-basu"
    },
    {
      "id": 464,
      "name": "Dr. Ashish S. Khanijo",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "n.m. wadia institute of cardiology, pune",
      "city": "unknown",
      "experience": "32+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ashish_s._khanijo-min.jpg",
      "path": "/doctors/dr-ashish-s-khanijo"
    },
    {
      "id": 465,
      "name": "Dr. Rohit Shahapurkar",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "nanavati super specialty hospital, mumbai",
      "city": "unknown",
      "experience": "28+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._rohit_shahapurkar_-_cardiovascular_thoracic_surgeon.jpg",
      "path": "/doctors/dr-rohit-shahapurkar"
    },
    {
      "id": 466,
      "name": "Dr. Dinesh Gupta",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "saroj super speciality hospital",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._dinesh_gupta.jpg",
      "path": "/doctors/dr-dinesh-gupta"
    },
    {
      "id": 467,
      "name": "Dr S.Muthukkumaran",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "prashanth multi speciality hospital, chennai",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_s_mutthukumaran_cardio_thor_vascular_sur_prashant_hospital_chennai.jpg",
      "path": "/doctors/dr-smuthukkumaran"
    },
    {
      "id": 468,
      "name": "Dr. Sunip Banerjee",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "ruby general hospital, kolkata",
      "city": "unknown",
      "experience": "31+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_sunip_banerjee_-_cardiologist_-_medica_hospital_kolkata.jpg",
      "path": "/doctors/dr-sunip-banerjee"
    },
    {
      "id": 469,
      "name": "Dr. Sankhadip Pramanik",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "ruby general hospital, kolkata",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._sankhadip_pramanik.jpg",
      "path": "/doctors/dr-sankhadip-pramanik"
    },
    {
      "id": 470,
      "name": "Dr. Pradyut K Jha",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "ruby general hospital, kolkata",
      "city": "unknown",
      "experience": "18+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._pradyot_k_jha.jpg",
      "path": "/doctors/dr-pradyut-k-jha"
    },
    {
      "id": 471,
      "name": "Dr. Manoj Pradhan",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "s. l. raheja hospital, mumbai",
      "city": "unknown",
      "experience": "37+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._manoj_pradhan-min.jpg",
      "path": "/doctors/dr-manoj-pradhan"
    },
    {
      "id": 472,
      "name": "Dr. Sanjeev Y. Vichare",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "s. l. raheja hospital, mumbai",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.-sanjeev-yashwant-vichare-min.jpg",
      "path": "/doctors/dr-sanjeev-y-vichare"
    },
    {
      "id": 473,
      "name": "Dr. Dwarkanath Kulkarni",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "s. l. raheja hospital, mumbai",
      "city": "unknown",
      "experience": "27+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._dwarkanath_kulkarni-min.png",
      "path": "/doctors/dr-dwarkanath-kulkarni"
    },
    {
      "id": 474,
      "name": "Dr. Prakash Ludhani",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "sparsh super speciality hospital, infantry road",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._prakash-min_0.jpg",
      "path": "/doctors/dr-prakash-ludhani"
    },
    {
      "id": 475,
      "name": "Dr. Dandu Satya Bhaskar Raju",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "star hospitals, hyderabad",
      "city": "unknown",
      "experience": "29+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._dandu-min.jpg",
      "path": "/doctors/dr-dandu-satya-bhaskar-raju"
    },
    {
      "id": 476,
      "name": "Dr. Anand H Subrahmanyam",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "manipal hospital varthur road formerly columbia asia bangalore",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.-anand-subrahmanyam.jpg",
      "path": "/doctors/dr-anand-h-subrahmanyam"
    },
    {
      "id": 477,
      "name": "Dr. Sanjeev S Mukherjee",
      "specialty": "cardiac surgeon",
      "designation": "consultant",
      "hospital": "medica superspecialty hospital",
      "city": "unknown",
      "experience": "23+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.sanjeev_s_mukherjee.jpg",
      "path": "/doctors/dr-sanjeev-s-mukherjee"
    },
    {
      "id": 478,
      "name": "Dr. Gagandeep Singh",
      "specialty": "non invasive cardiologist",
      "designation": "consultant",
      "hospital": "ivy hospital, khanna",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.gagandeep_singh.jpg",
      "path": "/doctors/dr-gagandeep-singh"
    },
    {
      "id": 479,
      "name": "Dr. P Kamalanathan",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "vijaya hospital, chennai",
      "city": "unknown",
      "experience": "17+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._p_kamalanathan-min.jpg",
      "path": "/doctors/dr-p-kamalanathan"
    },
    {
      "id": 480,
      "name": "Dr. T. R. Muralidharan",
      "specialty": "cardiology",
      "designation": "consultant",
      "hospital": "sri ramachandra medical centre, chennai",
      "city": "unknown",
      "experience": "25+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/untitled465443-removebg-preview-min.png",
      "path": "/doctors/dr-t-r-muralidharan"
    },
    {
      "id": 481,
      "name": "Dr. Uttam Kumar Saha",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "manipal hospital formerly amri hospital, kolkata (mukundapur)",
      "city": "unknown",
      "experience": "34+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._uttam_kumar_saha-removebg-preview-min.png",
      "path": "/doctors/dr-uttam-kumar-saha"
    },
    {
      "id": 482,
      "name": "Dr. Anupam Kumar Singh",
      "specialty": "cardiology",
      "designation": "consultant",
      "hospital": "bhagwan mahavir medica superspecialty hospital, ranchi",
      "city": "unknown",
      "experience": "14+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_anup.jpg",
      "path": "/doctors/dr-anupam-kumar-singh"
    },
    {
      "id": 483,
      "name": "Dr. Varun Bhargava",
      "specialty": "cardiology",
      "designation": "consultant",
      "hospital": "ganga care hospital limited, nagpur",
      "city": "unknown",
      "experience": "21+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._varun.png",
      "path": "/doctors/dr-varun-bhargava"
    },
    {
      "id": 484,
      "name": "Dr P Sridhar",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "medicover hospital, hitec city",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.p.sridhar-removebg-preview.png",
      "path": "/doctors/dr-p-sridhar"
    },
    {
      "id": 485,
      "name": "Dr. Avishek Saha",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "manipal hospital formerly amri hospital, kolkata (mukundapur)",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._avishek_saha-min.jpg",
      "path": "/doctors/dr-avishek-saha"
    },
    {
      "id": 486,
      "name": "Dr. Ashraful Haque",
      "specialty": "interventional cardiologist",
      "designation": "consultant",
      "hospital": "manipal hospital formerly amri hospital, kolkata (mukundapur)",
      "city": "unknown",
      "experience": "12+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._ashraful_haque-min.jpg",
      "path": "/doctors/dr-ashraful-haque"
    },
    {
      "id": 487,
      "name": "Dr. Hasmukh Gujar",
      "specialty": "cardiology",
      "designation": "consultant",
      "hospital": "sahyadri speciality hospital pune",
      "city": "unknown",
      "experience": "22+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._hasmukh_gujar-min.jpg",
      "path": "/doctors/dr-hasmukh-gujar"
    },
    {
      "id": 488,
      "name": "Dr.A. Nirmal Kumar",
      "specialty": "cardiology",
      "designation": "consultant",
      "hospital": "vijaya hospital, chennai",
      "city": "unknown",
      "experience": "13+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr.a._nirmal_kumar-removebg-preview-min.png",
      "path": "/doctors/dra-nirmal-kumar"
    },
    {
      "id": 489,
      "name": "Dr. Vivek Kumar",
      "specialty": "cardiology",
      "designation": "consultant",
      "hospital": "indraprastha apollo hospital, new delhi",
      "city": "unknown",
      "experience": "15+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._vivek_kumar-min_0.jpg",
      "path": "/doctors/dr-vivek-kumar-cardiologist"
    },
    {
      "id": 490,
      "name": "Dr. Meera R",
      "specialty": "cardiology",
      "designation": "consultant",
      "hospital": "kims global, trivandrum",
      "city": "unknown",
      "experience": "15+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-meera-r.jpeg",
      "path": "/doctors/dr-meera-r"
    },
    {
      "id": 491,
      "name": "Dr. Puneet Jandial",
      "specialty": "cardiology",
      "designation": "consultant",
      "hospital": "alexis multispeciality hospital, nagpur, maharashtra, india",
      "city": "unknown",
      "experience": "29+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._puneet_jandial-min.jpg",
      "path": "/doctors/dr-puneet-jandial"
    },
    {
      "id": 492,
      "name": "Dr. Rajeshwari Nayak",
      "specialty": "cardiology",
      "designation": "consultant",
      "hospital": "apollo hospitals, greams road, chennai",
      "city": "unknown",
      "experience": "27+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._rajeshwari-min.jpg",
      "path": "/doctors/dr-rajeshwari-nayak"
    },
    {
      "id": 493,
      "name": "Dr. Irfan Khan Hamid",
      "specialty": "cardiology",
      "designation": "consultant",
      "hospital": "dr. l h hiranandani hospital, mumbai",
      "city": "unknown",
      "experience": "12+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._irfan_khan_hamid-min.jpg",
      "path": "/doctors/dr-irfan-khan-hamid"
    },
    {
      "id": 494,
      "name": "Dr. Swarup Swaraj Pal",
      "specialty": "cardiology",
      "designation": "consultant",
      "hospital": "dr. l h hiranandani hospital, mumbai",
      "city": "unknown",
      "experience": "20+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/swarupswarajpal_1-min.jpg",
      "path": "/doctors/dr-swarup-swaraj-pal"
    },
    {
      "id": 495,
      "name": "Dr. Rushikesh Sambhaji Patil",
      "specialty": "cardiology",
      "designation": "consultant",
      "hospital": "dr. l h hiranandani hospital, mumbai",
      "city": "unknown",
      "experience": "12+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._rushikesh_sambhaji_patil-min.jpg",
      "path": "/doctors/dr-rushikesh-sambhaji-patil"
    },
    {
      "id": 496,
      "name": "Dr. Vipul Seta",
      "specialty": "cardiology",
      "designation": "consultant",
      "hospital": "ganga care hospital limited, nagpur",
      "city": "unknown",
      "experience": "21+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr_vipul.png",
      "path": "/doctors/dr-vipul-seta"
    },
    {
      "id": 497,
      "name": "Dr. Ajaypal Singh",
      "specialty": "Cardiologist",
      "designation": "consultant",
      "hospital": "ivy hospital amritsar",
      "city": "Mumbai",
      "experience": "4+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/image-removebg-preview33-min.png",
      "path": "/doctors/dr-ajaypal-singh"
    },
    {
      "id": 498,
      "name": "Dr. Hashir Kareem",
      "specialty": "Cardiology",
      "designation": "consultant",
      "hospital": "kims global, trivandrum",
      "city": "unknown",
      "experience": "16+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr-hashir-kareem.jpeg",
      "path": "/doctors/dr-hashir-kareem"
    },
    {
      "id": 499,
      "name": "Dr. Kaushik Mukherjee",
      "specialty": "cardiology",
      "designation": "consultant",
      "hospital": "manipal hospital formerly amri hospital, kolkata (dhakuria)",
      "city": "unknown",
      "experience": "15+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/drkaushik_mukherjee_1-min.png",
      "path": "/doctors/dr-kaushik-mukherjee"
    },
    {
      "id": 500,
      "name": "Dr. Shahe Zafar",
      "specialty": "cardiology",
      "designation": "consultant",
      "hospital": "marengo asia hospitals formerly qrg health city, faridabad",
      "city": "unknown",
      "experience": "21+ Yrs",
      "image": "https://www.vaidam.com/sites/default/files/dr._shahe_zafar-min.png",
      "path": "/doctors/dr-shahe-zafar"
    }
  ];

  const specialties = ["Cardiologist", "Oncologist", "Orthopedic Surgeon", "Neurologist", "Gynecologist", "Nephrologist", "Laparoscopic Surgeon", "Cosmetic Surgeon"];
  const cities = ["Delhi", "Mumbai", "Gurgaon", "Chennai", "Bangalore", "Hyderabad", "Lucknow"];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase());
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <section className="bg-medical-800 text-white py-12">
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
                    <span className="text-sm font-medium block text-center">{doctor.experience}</span>
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
                    <Button variant="outline" size="sm" className="flex-1 whitespace-nowrap text-xs py-1">
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
    </div>
  );
};

export default Doctors;