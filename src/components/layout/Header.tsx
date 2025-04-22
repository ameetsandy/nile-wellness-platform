import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);

  const treatments = [
    { name: "Heart Bypass Surgery", path: "/treatments/heart-bypass" },
    { name: "Knee Replacement", path: "/treatments/knee-replacement" },
    { name: "Hip Replacement", path: "/treatments/hip-replacement" },
    { name: "Knee & Hip Replacement", path: "/treatments/knee-hip-replacement" },
    { name: "Cancer Treatment", path: "/treatments/cancer-treatment" },
    { name: "Kidney Transplant", path: "/treatments/kidney-transplant" },
    { name: "Liver Transplant", path: "/treatments/liver-transplant" },
    { name: "Kidney & Liver Transplant", path: "/treatments/kidney-liver-transplant" },
    { name: "Spine Surgery", path: "/treatments/spine-surgery" },
    { name: "Brain Surgery", path: "/treatments/brain-surgery" },
    { name: "Spine & Brain Surgery", path: "/treatments/spine-brain-surgery" },
    { name: "IVF & Fertility", path: "/treatments/ivf-fertility" },
    { name: "Bariatric Surgery", path: "/treatments/bariatric-surgery" },
    { name: "Dental Implants", path: "/treatments/dental-implants" },
    { name: "Eye Care", path: "/treatments/eye-care" },
    { name: "Dental & Eye Care", path: "/treatments/dental-eye-care" },
    { name: "All Treatments", path: "/treatments/all" },
  ];

  return (
    <header className="bg-white shadow-sm">
      {/* Top Row - Header Area */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center transition-transform hover:scale-105">
            <img 
              src="https://i.ibb.co/ZRb7k2jp/Screenshot-2025-04-21-143211.png" 
              alt="Nile Wellness Logo" 
              className="h-14 w-auto"
            />
          </Link>
        </div>

        {/* Right side - Contact Information */}
        <div className="flex items-center gap-6">
          <div className="flex items-center text-nile-700 hover:text-nile-800 transition-colors">
            <Phone className="h-5 w-5 mr-2" />
            <span className="font-semibold">+91 12345 67890</span>
          </div>
          <Link 
            to="/contact" 
            className="bg-nile-600 text-white px-4 py-2 rounded-md hover:bg-nile-700 transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-nile-50 border-t border-nile-100">
        <div className="container mx-auto px-6 py-3">
          <nav className="flex justify-between items-center">
            {/* Left-aligned Menu Items */}
            <div className="flex items-center gap-8">
              <div className="relative group">
                <button
                  onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                  className="flex items-center text-nile-700 hover:text-nile-900 font-medium transition-colors"
                >
                  Treatments
                  <ChevronDown className={cn(
                    "ml-1 h-4 w-4 transition-transform duration-200",
                    isTreatmentsOpen && "rotate-180"
                  )} />
                </button>
                {isTreatmentsOpen && (
                  <div className="absolute left-0 mt-2 w-64 rounded-lg shadow-lg bg-white ring-1 ring-nile-100 p-2 space-y-1 z-20">
                    {treatments.map((treatment) => (
                      <Link
                        key={treatment.name}
                        to={treatment.path}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-nile-50 hover:text-nile-600 rounded-md transition-colors"
                        onClick={() => setIsTreatmentsOpen(false)}
                      >
                        {treatment.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link 
                to="/doctors" 
                className="text-nile-700 hover:text-nile-900 font-medium transition-colors"
              >
                Top Doctors
              </Link>
              <Link 
                to="/hospitals" 
                className="text-nile-700 hover:text-nile-900 font-medium transition-colors"
              >
                Best Hospitals
              </Link>
            </div>

            {/* Right-aligned Menu Items */}
            <div className="flex items-center gap-8">
              <Link 
                to="/free-services" 
                className="text-nile-700 hover:text-nile-900 font-medium transition-colors"
              >
                Free Services
              </Link>
              <Link 
                to="/patient-stories" 
                className="text-nile-700 hover:text-nile-900 font-medium transition-colors"
              >
                Patient Stories
              </Link>
              <Link 
                to="/plan-your-trip" 
                className="text-nile-700 hover:text-nile-900 font-medium transition-colors"
              >
                Plan Your Trip
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
