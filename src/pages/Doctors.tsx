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

  const doctors = [
    {
      id: 1,
      name: "Dr. Arjun Mehta",
      specialty: "Cardiologist",
      designation: "Senior Consultant",
      hospital: "Apollo Hospital",
      city: "Delhi",
      experience: "15+ Yrs",
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Mehta",
      path: "/doctors/arjun-mehta"
    },
    {
      id: 2,
      name: "Dr. Pooja Nair",
      specialty: "Oncologist",
      designation: "Director",
      hospital: "Fortis Hospital",
      city: "Mumbai",
      experience: "20+ Yrs",
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Nair",
      path: "/doctors/pooja-nair"
    },
    {
      id: 3,
      name: "Dr. Yusuf Khan",
      specialty: "Orthopedic Surgeon",
      designation: "HOD & Senior Consultant",
      hospital: "Max Hospital",
      city: "Gurgaon",
      experience: "18+ Yrs",
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Khan",
      path: "/doctors/yusuf-khan"
    },
    {
      id: 4,
      name: "Dr. Sanjay Gupta",
      specialty: "Neurologist",
      designation: "Senior Consultant",
      hospital: "Medanta Hospital",
      city: "Gurgaon",
      experience: "22+ Yrs",
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Gupta",
      path: "/doctors/sanjay-gupta"
    },
    {
      id: 5,
      name: "Dr. Ananya Sharma",
      specialty: "Gynecologist",
      designation: "Senior Consultant",
      hospital: "BLK Hospital",
      city: "Delhi",
      experience: "12+ Yrs",
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Sharma",
      path: "/doctors/ananya-sharma"
    },
    {
      id: 6,
      name: "Dr. Rajiv Malhotra",
      specialty: "Nephrologist",
      designation: "Director & HOD",
      hospital: "Apollo Hospital",
      city: "Chennai",
      experience: "25+ Yrs",
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Malhotra",
      path: "/doctors/rajiv-malhotra"
    },
    {
      id: 7,
      name: "Dr. Dheeraj Garg",
      specialty: "Interventional Cardiologist",
      designation: "Senior Consultant",
      hospital: "",
      city: "New Delhi",
      experience: "20+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._dheeraj_garg.jpg",
      path: "/doctors/dr-dheeraj-garg"
    },
    {
      id: 8,
      name: "Dr. Subodh Chandra Pande",
      specialty: "Radiation Oncologist",
      designation: "Consultant",
      hospital: "Artemis Hospital",
      city: "Gurgaon",
      experience: "10+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr-subhash-chandra-pande-radiation-oncology.jpg",
      path: "/doctors/dr-subodh-chandra-pande"
    },
    {
      id: 9,
      name: "Dr. Anmol Nagaraj",
      specialty: "Neurosurgeon",
      designation: "Consultant",
      hospital: "Sparsh Hospital",
      city: "Bangalore",
      experience: "14+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._anmol_nagaraj-min.jpg",
      path: "/doctors/dr-anmol-nagaraj"
    },
    {
      id: 10,
      name: "Dr. Mahesh Ghogare",
      specialty: "Interventional Cardiologist",
      designation: "Consultant",
      hospital: "Reliance Hospitals",
      city: "Mumbai",
      experience: "14+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr_mahesh.jpg",
      path: "/doctors/dr-mahesh-ghogare"
    },
    {
      id: 11,
      name: "Dr. Amit Sharma",
      specialty: "Spine Surgeon",
      designation: "Consultant",
      hospital: "Saifee Hospital",
      city: "Mumbai",
      experience: "14+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._amit_sharma_-_spine_surgeon.jpg",
      path: "/doctors/dr-amit-sharma"
    },
    {
      id: 12,
      name: "Dr. Arvind Prasad",
      specialty: "Interventional Cardiologist",
      designation: "Consultant",
      hospital: "",
      city: "Bangalore",
      experience: "14+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._arvind_prasad_-_cardiologist.jpg",
      path: "/doctors/dr-arvind-prasad"
    },
    {
      id: 13,
      name: "Dr. Yadhu K Lokanath",
      specialty: "Spine Surgeon",
      designation: "Consultant",
      hospital: "Aster RV Hospital",
      city: "Bangalore",
      experience: "14+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr-yadhu-k-lokanath.jpg",
      path: "/doctors/dr-yadhu-k-lokanath"
    },
    {
      id: 14,
      name: "Dr. Harsh Bhardwaj",
      specialty: "Neurologist",
      designation: "Consultant",
      hospital: "Aakash Healthcare",
      city: "New Delhi",
      experience: "13+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr-harsh-bhardwaj.jpg",
      path: "/doctors/dr-harsh-bhardwaj"
    },
    {
      id: 15,
      name: "Dr. Ankit Singh",
      specialty: "Neurologist",
      designation: "Associate Consultant",
      hospital: "Apollo Medics Super Speciality Hospital",
      city: "Lucknow",
      experience: "12+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._ankit-min.png",
      path: "/doctors/dr-ankit-singh"
    },
    {
      id: 16,
      name: "Dr. Ashok G N",
      specialty: "Laparoscopic Surgeon",
      designation: "Consultant",
      hospital: "SS SPARSH Hospital",
      city: "Bangalore",
      experience: "16+ Yrs",
      image: "https://d1ea147o02h74h.cloudfront.net/dr._ashok_g_n_-_general_and_laparoscopic_surgeon.jpg",
      path: "/doctors/dr-ashok-g-n"
    },
    {
      id: 17,
      name: "Dr. Avinash Agarwal",
      specialty: "Cosmetic Surgeon",
      designation: "Consultant",
      hospital: "Artemis Hospital",
      city: "Gurgaon",
      experience: "16+ Yrs",
      image: "https://d1ea147o02h.cloudfront.net/dr._avinash_agarwal_-_cosmetic_and_plastic_surgeon.jpg",
      path: "/doctors/dr-avinash-agarwal"
    },
    {
      id: 18,
      name: "Dr. Anurag Sihag",
      specialty: "Neurosurgeon",
      designation: "Consultant",
      hospital: "Shalby Hospital",
      city: "Jaipur",
      experience: "12+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr_anurag_sihag.png",
      path: "/doctors/dr-anurag-sihag"
    },
    {
      id: 19,
      name: "Dr. Rahul Jain",
      specialty: "Aesthetics and Plastic Surgeon",
      designation: "Consultant",
      hospital: "Fortis Hospital",
      city: "Manesar, Gurgaon",
      experience: "12+ Yrs",
      image: "https://d1ea147o02h74h.cloudfront.net/dr_rahul_jain.jpg",
      path: "/doctors/dr-rahul-jain-plastic-surgeon"
    },
    {
      id: 20,
      name: "Dr. Ashok Kumar P",
      specialty: "Interventional Cardiologist",
      designation: "Consultant",
      hospital: "",
      city: "",
      experience: "16+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._ashok_kumar_p_-_cardiologist.jpg",
      path: "/doctors/dr-ashok-kumar-p"
    },
    {
      id: 21,
      name: "Dr. Ved Prakash",
      specialty: "Interventional Cardiologist",
      designation: "Consultant",
      hospital: "Sarvodaya Hospital",
      city: "Faridabad",
      experience: "12+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._ved_prakash-removebg-preview-min_0.png",
      path: "/doctors/dr-ved-prakash"
    },
    {
      id: 22,
      name: "Dr. Avinash K M",
      specialty: "Neurosurgeon",
      designation: "Consultant",
      hospital: "Manipal Hospital",
      city: "Bangalore",
      experience: "16+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._avinash-min.jpg",
      path: "/doctors/dr-avinash-k-m"
    },
    {
      id: 23,
      name: "Dr. G Dimpu Edwin Jonathan",
      specialty: "Interventional Cardiologist",
      designation: "Consultant",
      hospital: "Aster RV Hospital",
      city: "Bangalore",
      experience: "12+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._g_dimpu_edwin_jonathan.jpg",
      path: "/doctors/dr-g-dimpu-edwin-jonathan"
    },
    {
      id: 24,
      name: "Dr. Annamaneni Ravi Chander Rao",
      specialty: "Aesthetics and Plastic Surgeon",
      designation: "Consultant",
      hospital: "Care Hospitals",
      city: "Hyderabad",
      experience: "13+ Yrs",
      image: "https://d1ea147o02h74h.cloudfront.net/dr_a_ravi_chander_rao-min.png",
      path: "/doctors/dr-annamaneni-ravi-chander-rao"
    },
    {
      id: 25,
      name: "Dr. A. M. Bharath Reddy",
      specialty: "Cardiac Surgeon",
      designation: "Consultant",
      hospital: "Apollo Spectra Hospital",
      city: "Chennai",
      experience: "17+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._a._m._bharath_reddy_-_cardiologist.jpg",
      path: "/doctors/dr-m-bharath-reddy"
    },
    
    {
      id: 26,
      name: "Dr. Abhishek Patil",
      specialty: "Rheumatologist",
      designation: "Consultant",
      hospital: "Manipal Hospital (Old Airport Road)",
      city: "Bangalore",
      experience: "14+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr.abhishek-min.png",
      path: "/doctors/dr-abhishek-patil"
    },
    {
      id: 27,
      name: "Dr. Sumana B Pallegar",
      specialty: "Neurosurgeon",
      designation: "Consultant",
      hospital: "Narayana Multispeciality Hospital",
      city: "Bangalore",
      experience: "18+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._sumana_b_pallegar_-_neurosurgeon.jpg",
      path: "/doctors/dr-sumana-b-pallegar"
    },
    {
      id: 28,
      name: "Dr Khushbu Goel",
      specialty: "Neurologist",
      designation: "Consultant",
      hospital: "Manipal Hospitals Dwarka",
      city: "Delhi",
      experience: "17+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr_khushbu_goel.jpg",
      path: "/doctors/dr-khushbu-goel"
    },
    {
      id: 29,
      name: "Dr. Gundurao Harish Joshi",
      specialty: "Interventional Cardiologist",
      designation: "Consultant",
      hospital: "",
      city: "",
      experience: "18+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._gundurao_harish_joshi_-_cardiologist_0.jpg",
      path: "/doctors/dr-gundurao-harish-joshi"
    },
    {
      id: 30,
      name: "Dr. Keval Changadiya",
      specialty: "Neurologist",
      designation: "Consultant",
      hospital: "CIMS Hospital",
      city: "Ahmedabad",
      experience: "14+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr_keval_changadiya.jpeg",
      path: "/doctors/dr-keval-changadiya"
    },
    {
      id: 31,
      name: "Dr. Ankit Gupta",
      specialty: "Cardiac Surgeon",
      designation: "Consultant",
      hospital: "Shalby Hospital",
      city: "Jaipur",
      experience: "14+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr_ankit_gupta-min.png",
      path: "/doctors/dr-ankit-gupta-cardiologist"
    },
    {
      id: 32,
      name: "Dr. Nishant Shanker Yagnick",
      specialty: "Neurosurgeon",
      designation: "Senior Consultant",
      hospital: "Fortis Hospital, Manesar",
      city: "Gurgaon",
      experience: "14+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._nishant-min.jpg",
      path: "/doctors/dr-nishant-shanker-yagnick"
    },
    {
      id: 33,
      name: "Dr. Anil Tibrewala",
      specialty: "Cosmetic Surgeon",
      designation: "Consultant",
      hospital: "Saifee Hospital",
      city: "Mumbai",
      experience: "19+ Yrs",
      image: "https://d1ea147o02h74h.cloudfront.net/dr._anil_tibrewala_-_plastic_and_cosmetic_surgeon.jpg",
      path: "/doctors/dr-anil-tibrewala"
    },
    {
      id: 34,
      name: "Dr. Anup Charles Steven",
      specialty: "Cardiac Surgeon",
      designation: "Consultant",
      hospital: "Aster CMI Hospital (Hebbel)",
      city: "Bangalore",
      experience: "15+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._anup_charles_steven_-_cardiothoracic_surgeon.jpg",
      path: "/doctors/dr-anup-charles-steven"
    },
    {
      id: 35,
      name: "Dr. Praveen Phaneendranath Sadarmin",
      specialty: "Interventional Cardiologist",
      designation: "Consultant",
      hospital: "Narayana Institute of Cardiac Sciences",
      city: "Bangalore",
      experience: "15+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._praveen_phaneendranath_sadarmin_-_cardiologist.jpg",
      path: "/doctors/dr-praveen-phaneendranath-sadarmin"
    },
    {
      id: 36,
      name: "Dr. Ashwin Borkar",
      specialty: "Neurosurgeon",
      designation: "Consultant",
      hospital: "Wockhardt Super Speciality Hospital",
      city: "Mira Road, Mumbai",
      experience: "15+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._ashwin_borkar-min.jpg",
      path: "/doctors/dr-ashwin-borkar"
    },
    {
      id: 37,
      name: "Dr. Srichandran L",
      specialty: "Interventional Cardiologist",
      designation: "Consultant",
      hospital: "MGM Healthcare",
      city: "Chennai",
      experience: "19+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._srichandran_l_-_interventional_cardiologist.jpg",
      path: "/doctors/dr-srichandran-l"
    },
    {
      id: 38,
      name: "Dr. Arvind Kulkarni",
      specialty: "Spine Surgeon",
      designation: "Consultant",
      hospital: "Saifee Hospital",
      city: "Mumbai",
      experience: "19+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._arvind_kulkarni_-_spinal_surgeon_0.jpg",
      path: "/doctors/dr-arvind-kulkarni"
    },
    {
      id: 39,
      name: "Dr. Mohamed Ibrahim B K",
      specialty: "Cosmetic Surgeon",
      designation: "Consultant",
      hospital: "SIMS Hospital",
      city: "Vadapalani, Chennai",
      experience: "15+ Yrs",
      image: "https://d1ea147o02h74h.cloudfront.net/dr._mohamed_ibrahim_b_k.png",
      path: "/doctors/dr-mohamed-ibrahim-b-k"
    },
    {
      id: 40,
      name: "Dr. Jimmy Lalkaka",
      specialty: "Neurologist",
      designation: "Consultant",
      hospital: "Saifee Hospital",
      city: "Mumbai",
      experience: "19+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._jimmy_lalkaka_-_neurologist.jpg",
      path: "/doctors/dr-jimmy-lalkaka"
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

  const resetFilters = () => {
    setSearchTerm("");
    setSpecialty("");
    setCity("");
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
            {filteredDoctors.map((doctor) => (
              <div 
                key={doctor.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-square">
                  <img 
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-1 px-3">
                    <span className="text-sm font-medium block text-center">{doctor.experience}</span>
                  </div>
                </div>
                
                <div className="p-4">
                  <Link to={doctor.path}>
                    <h3 className="text-lg font-semibold mb-1 hover:text-nile-600 transition-colors">
                      {doctor.name}
                    </h3>
                  </Link>
                  
                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-gray-700 font-medium tracking-wide">
                      {doctor.specialty}
                    </p>
                    <p className="text-xs text-gray-600 font-inter font-normal tracking-tight">
                      {doctor.designation}
                    </p>
                    <p className="text-gray-600 text-sm">
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
