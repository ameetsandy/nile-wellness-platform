
import { Link } from "react-router-dom";
import { MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const PopularDoctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Arjun Mehta",
      specialty: "Cardiologist",
      hospital: "Apollo Hospital",
      experience: "15+ Yrs",
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Mehta",
      path: "/doctors/arjun-mehta"
    },
    {
      id: 2,
      name: "Dr. Pooja Nair",
      specialty: "Oncologist",
      hospital: "Apollo Hospital",
      experience: "20+ Yrs", 
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Nair",
      path: "/doctors/pooja-nair"
    },
    {
      id: 3,
      name: "Dr. Yusuf Khan",
      specialty: "Orthopedic",
      hospital: "Apollo Hospital",
      experience: "18+ Yrs",
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Khan",
      path: "/doctors/yusuf-khan"
    },
    {
      id: 4,
      name: "Dr. Sarah Patel",
      specialty: "Neurologist",
      hospital: "Apollo Hospital",
      experience: "12+ Yrs",
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Patel",
      path: "/doctors/sarah-patel"
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
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
                {doctor.specialty} - {doctor.hospital}
              </p>
              
              <div className="flex gap-2 mt-6">
                <Button variant="outline" size="sm" className="flex-1">
                  <Calendar className="mr-1 h-4 w-4" /> Schedule Visit
                </Button>
                <Button 
                  size="sm" 
                  className="bg-green-600 hover:bg-green-700 flex-1"
                  onClick={() => openWhatsApp(doctor.name)}
                >
                  <MessageCircle className="mr-1 h-4 w-4" /> Contact Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          to="/doctors"
          className="cta-secondary"
        >
          View More Doctors
        </Link>
      </div>
    </section>
  );
};

export default PopularDoctors;
