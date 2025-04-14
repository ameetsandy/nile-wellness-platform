
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import ContactButtons from "./ContactButtons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigationItems = [
    {
      name: "Treatments",
      path: "/treatments",
      dropdown: true,
      items: [
        { name: "Heart Bypass Surgery", path: "/treatments/heart-bypass" },
        { name: "Knee & Hip Replacement", path: "/treatments/knee-hip-replacement" },
        { name: "Cancer Treatment", path: "/treatments/cancer" },
        { name: "Kidney & Liver Transplant", path: "/treatments/kidney-liver-transplant" },
        { name: "Spine & Brain Surgery", path: "/treatments/spine-brain-surgery" },
        { name: "IVF & Fertility", path: "/treatments/ivf-fertility" },
        { name: "Bariatric Surgery", path: "/treatments/bariatric-surgery" },
        { name: "Dental & Eye Care", path: "/treatments/dental-eye-care" },
        { name: "All Treatments", path: "/treatments" },
      ],
    },
    {
      name: "Doctors",
      path: "/doctors",
      dropdown: false,
    },
    {
      name: "Hospitals",
      path: "/hospitals",
      dropdown: false,
    },
  ];

  return (
    <header
      className={cn(
        "bg-white sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled ? "shadow-md py-2" : "shadow-sm py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Nile Wellness Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-nile-600">Nile Wellness</span>
          </Link>

          <Navigation
            navigationItems={navigationItems}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            setActiveDropdown={setActiveDropdown}
          />

          <ContactButtons />

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-nile-600 focus:outline-none p-2"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <MobileMenu
          isOpen={isMenuOpen}
          navigationItems={navigationItems}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
          setActiveDropdown={setActiveDropdown}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </header>
  );
};

export default Header;
