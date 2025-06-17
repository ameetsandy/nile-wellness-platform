import { Link } from "react-router-dom";
import { MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AppointmentForm from "@/components/common/AppointmentForm";

const doctors = [
  {
    id: 1,
    name: "Dr. Devi Prasad Shetty",
    specialty: "Cardiac Surgeon",
    designation: "Senior Consultant",
    hospital: "Narayana Institute of Cardiac Sciences, Bangalore",
    city: "Bangalore, India",
    experience: "45+",
    image: "https://www.vaidam.com/sites/default/webp/50/files/dr._devi_prasad_shetty.webp",
    path: "/doctors/dr-devi-prasad-shetty"
  },
  {
    id: 2,
    name: "Dr. Adarsh Choudhary",
    specialty: "Surgical Gastroenterologist",
    designation: "Consultant",
    hospital: "Medanta - The Medicity, Gurgaon",
    city: "Gurgaon, India",
    experience: "46+",
    image: "https://d1ea147o02h74h.cloudfront.net/dr-adarsh-choudhary-bariatric-medanta.jpeg",
    path: "/doctors/dr-adarsh-choudhary"
  },
  {
    id: 3,
    name: "Dr. Arun Saroha",
    specialty: "Neurosurgeon",
    designation: "Director",
    hospital: "Max Super Specialty Hospital, Gurgaon",
    city: "Gurgaon, India",
    experience: "29+",
    image: "https://www.vaidam.com/sites/default/files/image-removebg-preview45-min.png",
    path: "/doctors/dr-arun-saroha"
  },
  {
    id: 4,
    name: "Dr. Arup Ratan Dutta",
    specialty: "Nephrologist",
    designation: "Director",
    hospital: "Fortis Hospital and Kidney Institute (Rash Behari Ave), Kolkata",
    city: "Kolkata, India",
    experience: "35+",
    image: "https://d1ea147o02h74h.cloudfront.net/dr._dutta-min.jpg",
    path: "/doctors/dr-arup-ratan-dutta"
  }
];

const openWhatsApp = () => {
  const phoneNumber = "918076036335"; // WhatsApp number
  const message = "I'd like to book an appointment with one of your doctors.";
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
};

const PopularDoctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<{name: string, formType: "appointment" | "second-opinion" | "reports"} | null>(null);

  const handleAppointmentClick = (doctorName: string, formType: "appointment" | "second-opinion" | "reports") => {
    setSelectedDoctor({ name: doctorName, formType });
  };

  const closeForm = () => {
    setSelectedDoctor(null);
  };

  return (
    <section className="section-container bg-gray-50">
      <h2 className="section-title">Top-Rated Specialists at Your Service</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col h-full"
          >
            {/* Image and Experience Stripe */}
            <div className="relative flex flex-col items-center pb-0 px-4 bg-white">
              <div className="w-[200px] h-[200px] rounded-lg overflow-hidden flex items-center justify-center bg-gray-100 mt-0">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                <span className="text-sm font-medium block text-center">{doctor.experience} Years of Experience</span>
              </div>
            </div>
            {/* Doctor Info */}
            <div className="p-4 flex flex-col flex-grow">
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
              <div className="flex gap-2 mt-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 whitespace-nowrap text-xs py-1"
                  onClick={() => handleAppointmentClick(doctor.name, "appointment")}
                >
                  <Calendar className="mr-1 h-3 w-3" /> Request Appointment
                </Button>
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 flex-1 whitespace-nowrap text-xs py-1"
                  onClick={() => openWhatsApp()}
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
      <div className="mt-20 text-center">
        <Link to="/doctors" className="cta-secondary">
          View More Doctors <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      {selectedDoctor && (
        <AppointmentForm
          isOpen={true}
          onClose={closeForm}
          doctorName={selectedDoctor.name}
          formType={selectedDoctor.formType}
        />
      )}
    </section>
  );
};

export default PopularDoctors;
