import { Link } from "react-router-dom";
import { MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PopularDoctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Dheeraj Garg",
      specialty: "Interventional Cardiologist",
      designation: "Senior Consultant",
      hospital: "",
      location: "New Delhi",
      experience: "20+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._dheeraj_garg.jpg",
      path: "/doctors/dr-dheeraj-garg"
    },
    {
      id: 2,
      name: "Dr. Subodh Chandra Pande",
      specialty: "Radiation Oncologist",
      designation: "Consultant",
      hospital: "Artemis Hospital",
      location: "Gurgaon",
      experience: "10+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr-subhash-chandra-pande-radiation-oncology.jpg",
      path: "/doctors/dr-subodh-chandra-pande"
    },
    {
      id: 3,
      name: "Dr. Anmol Nagaraj",
      specialty: "Neurosurgeon",
      designation: "Consultant",
      hospital: "Sparsh Hospital",
      location: "Bangalore",
      experience: "14+ Yrs",
      image: "https://www.vaidam.com/sites/default/files/dr._anmol_nagaraj-min.jpg",
      path: "/doctors/dr-anmol-nagaraj"
    }
  ];

  const openWhatsApp = (doctorName: string) => {
    const phoneNumber = "911234567890"; // Replace with actual WhatsApp number
    const message = `I'd like to consult with ${doctorName} for my treatment.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="section-container bg-gray-50">
      <h2 className="section-title">Top-Rated Specialists at Your Service</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {doctors.map((doctor) => (
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
              <div className="absolute bottom-0 right-0 bg-nile-600 text-white py-1 px-3 rounded-tl-md">
                <span className="text-sm font-medium">{doctor.experience}</span>
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
                  {doctor.hospital}, {doctor.location}
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
      
      <div className="mt-12 text-center">
        <Link 
          to="/doctors"
          className="cta-secondary"
        >
          View More Doctors <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default PopularDoctors;
