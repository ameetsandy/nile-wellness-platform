import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Search, Filter, Star, MapPin, Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Utility function to generate random star rating between 4 and 5
const generateStarRating = () => {
  return 4 + Math.random(); // Returns a number between 4 and 5
};

const Hospitals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");

  const hospitals = [
    {
      id: 1,
      name: "Aakash Healthcare Super Speciality Hospital, Dwarka, New Delhi",
      location: "New Delhi",
      category: "Multi Specialty",
      accreditation: "NABH",
      founded: 2011,
      beds: 200,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/main_image-min_14.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Aakash",
      path: "/hospitals/aakash-healthcare-super-speciality-hospital-dwarka-new-delhi-new-delhi"
    },
    {
      id: 2,
      name: "Aditya Birla Memorial Hospital, Pune",
      location: "Pune",
      category: "Multi Specialty",
      accreditation: "JCI, NABH",
      founded: 2006,
      beds: 500,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/aditya_birla_memorial_hospital_pune_building-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Aditya+Birla",
      path: "/hospitals/aditya-birla-memorial-hospital-pune-pune"
    },
    {
      id: 3,
      name: "Advance Fertility and Gynaecology Centre, New Delhi",
      location: "New Delhi",
      category: "Single Specialty",
      accreditation: "nan",
      founded: 2011,
      beds: 0,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/advanced_fertility_center_-dr_kaberi_banerjee-_new_delhi.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Advance",
      path: "/hospitals/advance-fertility-and-gynaecology-centre-new-delhi-new-delhi"
    },
    {
      id: 4,
      name: "Ahalia Ayurveda Hospital, Kerala , Palakkad",
      location: "Palakkad",
      category: "Multi Specialty",
      accreditation: "JCI, NABH",
      founded: 1984,
      beds: 100,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/ahalia_ayurveda_hospital_kerala.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Ahalia",
      path: "/hospitals/ahalia-ayurveda-hospital-kerala--palakkad-palakkad"
    },
    {
      id: 5,
      name: "Ajanta Hospital & IVF Centre Pvt. Ltd. , Lucknow",
      location: "Lucknow",
      category: "Multi Specialty",
      accreditation: "NABH",
      founded: 2004,
      beds: 141,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/ajanta_hospital_building-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Ajanta",
      path: "/hospitals/ajanta-hospital--ivf-centre-pvt-ltd--lucknow-lucknow"
    },
    {
      id: 6,
      name: "Alexis Multispeciality Hospital, Nagpur",
      location: "Nagpur",
      category: "Multi Specialty",
      accreditation: "JCI",
      founded: 2016,
      beds: 200,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/alexis_profile-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Alexis",
      path: "/hospitals/alexis-multispeciality-hospital-nagpur-nagpur"
    },
    {
      id: 7,
      name: "Alive Wellness Clinics, New Delhi",
      location: "New Delhi",
      category: "Single Specialty",
      accreditation: "nan",
      founded: 1997,
      beds: 0,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/alive-wellness-list-image-min.png",
      logo: "https://placehold.co/200x100/white/gray/?text=Alive",
      path: "/hospitals/alive-wellness-clinics-new-delhi-new-delhi"
    },
    {
      id: 8,
      name: "Amandeep Hospital, Amritsar",
      location: "Amritsar",
      category: "Multi Specialty",
      accreditation: "NABH",
      founded: 1990,
      beds: 500,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/amandeep_hospital_amritsar_0.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Amandeep",
      path: "/hospitals/amandeep-hospital-amritsar-amritsar"
    },
    {
      id: 9,
      name: "Amandeep Hospital, Pathankot",
      location: "Pathankot",
      category: "Multi Specialty",
      accreditation: "NABH",
      founded: 2015,
      beds: 200,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/amandeep_hospital_pathankot_building-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Amandeep",
      path: "/hospitals/amandeep-hospital-pathankot-pathankot"
    },
    {
      id: 10,
      name: "Amandeep Medicity Hospital Amritsar",
      location: "Amritsar",
      category: "Multi Specialty",
      accreditation: "NABH",
      founded: 1990,
      beds: 500,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/amandeep_medicity_building1-min.png",
      logo: "https://placehold.co/200x100/white/gray/?text=Amandeep",
      path: "/hospitals/amandeep-medicity-hospital-amritsar-amritsar"
    },
    {
      id: 11,
      name: "AMRI Hospitals, Southern Avenue , Kolkata",
      location: "Kolkata",
      category: "Multi Specialty",
      accreditation: "NABH",
      founded: 2002,
      beds: 0,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/southern_avenue.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=AMRI",
      path: "/hospitals/amri-hospitals-southern-avenue--kolkata-kolkata"
    },
    {
      id: 12,
      name: "Amrita Hospital, Faridabad",
      location: "Faridabad",
      category: "Multi Specialty",
      accreditation: "nan",
      founded: 2022,
      beds: 2600,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/amrita_hospital_building_1.png",
      logo: "https://placehold.co/200x100/white/gray/?text=Amrita",
      path: "/hospitals/amrita-hospital-faridabad-faridabad"
    },
    {
      id: 13,
      name: "Amrita Institute of Medical Sciences and Research Centre, Kochi",
      location: "Kochi",
      category: "Super Specialty",
      accreditation: "NABH, NABL",
      founded: 1998,
      beds: 1450,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/amrita_institute_of_medical_sciences_and_research_centre_kochi-home.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Amrita",
      path: "/hospitals/amrita-institute-of-medical-sciences-and-research-centre-kochi-kochi"
    },
    {
      id: 14,
      name: "Apex Super Specialty Hospital, Varanasi",
      location: "Varanasi",
      category: "Super Specialty",
      accreditation: "NABH",
      founded: 1988,
      beds: 200,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/apex-hospital-varanasi-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Apex",
      path: "/hospitals/apex-super-specialty-hospital-varanasi-varanasi"
    },
    {
      id: 15,
      name: "Apollo Adlux Hospital, Angamaly",
      location: "Angamaly",
      category: "Multi Specialty",
      accreditation: "JCI",
      founded: 1983,
      beds: 300,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/apollo_adlux_hospital-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
      path: "/hospitals/apollo-adlux-hospital-angamaly-angamaly"
    },
    {
      id: 16,
      name: "Apollo Cancer Hospital, Chennai",
      location: "Chennai",
      category: "Single Specialty",
      accreditation: "NABH",
      founded: 1970,
      beds: 300,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/apollo_cancer_hospital_chennai_list_image-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
      path: "/hospitals/apollo-cancer-hospital-chennai-chennai"
    },
    {
      id: 17,
      name: "Apollo Children's Hospital, Chennai  , Chennai",
      location: "Chennai",
      category: "Multi Specialty",
      accreditation: "NABH",
      founded: 2009,
      beds: 70,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/anyconv.com_apollo_list_image-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
      path: "/hospitals/apollo-childrens-hospital-chennai---chennai-chennai"
    },
    {
      id: 18,
      name: "Apollo Cosmetic Clinic, MRC Nagar , Chennai",
      location: "Chennai",
      category: "Single Specialty",
      accreditation: "nan",
      founded: 1970,
      beds: 47,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/apollo_cosmetic_clinic_mrc_nagar_list_image-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
      path: "/hospitals/apollo-cosmetic-clinic-mrc-nagar--chennai-chennai"
    },
    {
      id: 19,
      name: "Apollo Cradle & Children's Hospital, Jayanagar , Bangalore",
      location: "Bangalore",
      category: "Single Specialty",
      accreditation: "nan",
      founded: 2013,
      beds: 28,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_jayanagar_reception-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
      path: "/hospitals/apollo-cradle--childrens-hospital-jayanagar--bangalore-bangalore"
    },
    {
      id: 20,
      name: "Apollo Cradle & Children's Hospital, Koramangala , Bangalore",
      location: "Bangalore",
      category: "Single Specialty",
      accreditation: "nan",
      founded: 1970,
      beds: 31,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_koramangala_building1-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
      path: "/hospitals/apollo-cradle--childrens-hospital-koramangala--bangalore-bangalore"
    },
    {
      id: 21,
      name: "Apollo Cradle & Children's Hospital, Moti Nagar , New Delhi",
      location: "New Delhi",
      category: "Single Specialty",
      accreditation: "nan",
      founded: 2015,
      beds: 59,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_koramangala_building1-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
      path: "/hospitals/apollo-cradle--childrens-hospital-moti-nagar--new-delhi-new-delhi"
    },
    {
      id: 22,
      name: "Apollo Cradle and Apollo Women's Hospitals, Chennai",
      location: "Chennai",
      category: "Single Specialty",
      accreditation: "nan",
      founded: 1970,
      beds: 50,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/apollo_cradle_childrens_hospital_moti_nagar_building-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
      path: "/hospitals/apollo-cradle-and-apollo-womens-hospitals-chennai-chennai"
    },
    {
      id: 23,
      name: "Apollo Cradle Maternity & Children's Hospital, Nehru Place , New Delhi",
      location: "New Delhi",
      category: "Multi Specialty",
      accreditation: "nan",
      founded: 1970,
      beds: 42,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/anyconv.com_apollo_cradle_and_apollo_womens_hospitals_thousand_lights_list_image-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
      path: "/hospitals/apollo-cradle-maternity--childrens-hospital-jubilee-hills--hyderabad-hyderabad"
    },
    {
      id: 24,
      name: "Apollo Cradle Maternity & Children's Hospital Jubilee Hills , Hyderabad",
      location: "Hyderabad",
      category: "Multi Specialty",
      accreditation: "nan",
      founded: 1970,
      beds: 0,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/apollo_cradle_maternity_childrens_hospital_nehru_place_outside-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
      path: "/hospitals/apollo-cradle-maternity-hospital-kondapur--hyderabad-hyderabad"
    },
    {
      id: 25,
      name: "Apollo Cradle Maternity Hospital, Kondapur , Hyderabad",
      location: "Hyderabad",
      category: "Multi Specialty",
      accreditation: "nan",
      founded: 1970,
      beds: 0,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/building_apollo_cradle_jubilee_hills_hyderabad.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
      path: "/hospitals/apollo-fertility-banjara-hills--hyderabad-hyderabad"
    },
    {
      id: 26,
      name: "Apollo Fertility Banjara Hills , Hyderabad",
      location: "Hyderabad",
      category: "Single Specialty",
      accreditation: "nan",
      founded: 1970,
      beds: 0,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/main_building_apollo_cradle_maternity_hospital_kondapur.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
      path: "/hospitals/apollo-fertility-banjara-hills--hyderabad-hyderabad"
    },
    {
      id: 27,
      name: "Apollo Fertility Center, Lajpat Nagar , New Delhi",
      location: "New Delhi",
      category: "Super Specialty",
      accreditation: "nan",
      founded: 2015,
      beds: 0,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/main_building_apollo_fertility_banjara_hills_hyderabad.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
      path: "/hospitals/apollo-fertility-center-lajpat-nagar--new-delhi-new-delhi"
    },
    {
      id: 28,
      name: "Apollo Fertility Centre, Anna Nagar, Chennai",
      location: "Chennai",
      category: "Single Specialty",
      accreditation: "nan",
      founded: 2016,
      beds: 75,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/apollo_profile-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
      path: "/hospitals/apollo-fertility-centre-anna-nagar-chennai-chennai"
    },
    {
      id: 29,
      name: "Apollo Fertility Centre, Kolkata (Gobra) , Kolkata",
      location: "Kolkata",
      category: "Single Specialty",
      accreditation: "JCI, NABH",
      founded: 2018,
      beds: 0,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/apollo_fertility_anna_nagar_list_image-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
      path: "/hospitals/apollo-fertility-centre-kolkata-gobra--kolkata-kolkata"
    },
    {
      id: 30,
      name: "Apollo Fertility, Borivali , Mumbai",
      location: "Mumbai",
      category: "Single Specialty",
      accreditation: "nan",
      founded: 2021,
      beds: 0,
      rating: generateStarRating(),
      image: "https://www.vaidam.com/sites/default/files/apollo_kolkoata_image_view-min.jpg",
      logo: "https://placehold.co/200x100/white/gray/?text=Apollo",
      path: "/hospitals/apollo-fertility-borivali--mumbai-mumbai"
    }
  ];

  const categories = ["Multi Speciality", "Super Speciality", "Single Speciality"];
  const cities = ["Delhi", "Mumbai", "Gurgaon", "Chennai", "Bangalore", "Hyderabad"];

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hospital.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = category 
      ? hospital.category === category
      : true;
      
    const matchesCity = city 
      ? hospital.location.toLowerCase() === city.toLowerCase()
      : true;
    
    return matchesSearch && matchesCategory && matchesCity;
  });

  // Function to render star rating
  const renderStarRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const partialFill = (rating % 1) * 100;
    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      );
    }

    // Add partial star if needed
    if (partialFill > 0) {
      stars.push(
        <div key="partial" className="relative">
          <Star className="h-4 w-4 text-yellow-400" />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${partialFill}%` }}
          >
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    // Add remaining empty stars
    for (let i = Math.ceil(rating); i < 5; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
      );
    }

    return (
      <div className="flex items-center gap-0.5">
        {stars}
        <span className="ml-1 text-sm text-gray-600">({rating.toFixed(1)})</span>
      </div>
    );
  };

  const resetFilters = () => {
    setSearchTerm("");
    setCategory("");
    setCity("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <section className="bg-medical-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Top Hospitals in India</h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Our network includes JCI and NABH accredited hospitals equipped with cutting-edge technology and world-class infrastructure for comprehensive medical care.
            </p>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-8">
          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search hospitals by name or location..."
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nile-600 focus:border-nile-600"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="min-w-[200px]">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nile-600 focus:border-nile-600 appearance-none bg-white"
                  >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
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
          
          {/* Hospitals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHospitals.map((hospital) => (
              <div 
                key={hospital.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={hospital.image}
                    alt={hospital.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 w-full p-4 flex justify-between items-end">
                    <div className="flex items-center text-white">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{hospital.location}</span>
                    </div>
                    <div className="bg-white text-nile-600 py-1 px-3 rounded-md text-xs font-semibold">
                      {hospital.accreditation}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <img 
                      src={hospital.logo}
                      alt={`${hospital.name} logo`}
                      className="h-10"
                    />
                    {renderStarRating(hospital.rating)}
                  </div>
                  
                  <Link to={hospital.path}>
                    <h3 className="text-xl font-semibold mb-2 hover:text-nile-600 transition-colors flex items-center">
                      <Building className="h-5 w-5 mr-2 text-nile-600" />
                      {hospital.name}
                    </h3>
                  </Link>
                  
                  <div className="text-sm text-gray-500 mb-3">
                    Est. {hospital.founded} • {hospital.beds} Beds
                  </div>
                  
                  <div className="mb-6">
                    <span className="inline-block bg-nile-50 text-nile-600 px-3 py-1 rounded-full text-sm font-medium">
                      {hospital.category}
                    </span>
                  </div>
                  
                  <div className="mt-auto">
                    <Button className="w-full cta-primary">
                      Send Reports for Opinion
                    </Button>
                    <Link 
                      to={hospital.path}
                      className="mt-3 flex items-center justify-center text-nile-600 hover:text-nile-700 font-medium text-sm"
                    >
                      View Hospital Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredHospitals.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No hospitals found</h3>
              <p className="text-gray-500 mb-4">Try changing your search criteria</p>
              <Button onClick={resetFilters}>
                Reset Filters
              </Button>
            </div>
          )}
          
          {/* More Information */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Indian Hospitals: Global Standards, Local Expertise</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Indian hospitals featured in our network represent the pinnacle of healthcare excellence in the region. Many have achieved prestigious international accreditations such as Joint Commission International (JCI) and National Accreditation Board for Hospitals & Healthcare Providers (NABH), ensuring they meet rigorous global standards.
              </p>
              <p className="mb-4">
                These facilities are equipped with the latest medical technology and infrastructure, comparable to leading institutions in the US and Europe. From advanced robotic surgery systems to state-of-the-art imaging equipment and specialized care units, Indian hospitals offer comprehensive healthcare solutions under one roof.
              </p>
              <p>
                What sets Indian hospitals apart is their ability to deliver this world-class care at a fraction of Western costs while maintaining exceptional clinical outcomes and patient satisfaction rates. This combination of quality, affordability, and patient-centered care has established India as a premier destination for medical tourism.
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

export default Hospitals;
