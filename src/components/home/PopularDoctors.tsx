
import { Link } from "react-router-dom";
import { MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PopularDoctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Arjun Mehta",
      specialty: "Cardiologist",
      hospital: "Apollo Hospital",
      location: "Delhi",
      experience: "15+ Yrs",
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Mehta",
      path: "/doctors/arjun-mehta"
    },
    {
      id: 2,
      name: "Dr. Pooja Nair",
      specialty: "Oncologist",
      hospital: "Fortis Hospital",
      location: "Mumbai",
      experience: "20+ Yrs",
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Nair",
      path: "/doctors/pooja-nair"
    },
    {
      id: 3,
      name: "Dr. Yusuf Khan",
      specialty: "Orthopedic",
      hospital: "Max Hospital",
      location: "Gurgaon",
      experience: "18+ Yrs",
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Khan",
      path: "/doctors/yusuf-khan"
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {doctors.map((doctor) => (
          <div 
            key={doctor.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="relative">
              <img 
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-nile-600 text-white py-1 px-3 rounded-tl-md">
                <span className="text-sm font-medium">{doctor.experience}</span>
              </div>
            </div>
            
            <div className="p-6">
              <Link to={doctor.path}>
                <h3 className="text-xl font-semibold mb-2 hover:text-nile-600 transition-colors">
                  {doctor.name}
                </h3>
              </Link>
              <p className="text-gray-600 mb-4">
                {doctor.specialty} - {doctor.hospital}, {doctor.location}
              </p>
              
              <div className="flex gap-2 mt-6">
                <Button variant="outline" size="sm" className="flex-1">
                  <Calendar className="mr-1 h-4 w-4" /> Request Appointment
                </Button>
                <Button 
                  size="sm" 
                  className="bg-green-600 hover:bg-green-700 flex-1"
                  onClick={() => openWhatsApp(doctor.name)}
                >
                  <MessageCircle className="mr-1 h-4 w-4" /> WhatsApp
                </Button>
              </div>
              <Link 
                to={doctor.path}
                className="mt-4 flex items-center justify-center text-nile-600 hover:text-nile-700 font-medium text-sm"
              >
                View Full Profile
                <ArrowRight className="ml-1 h-4 w-4" />
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
          View All Doctors <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default PopularDoctors;
