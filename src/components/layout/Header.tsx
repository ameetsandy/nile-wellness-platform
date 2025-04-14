import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, MessageCircle, MapPin, Users, Headphones, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    {
      name: "Free Services",
      path: "/free-services",
      icon: Headphones,
      dropdown: false,
    },
    {
      name: "Patient Stories",
      path: "/patient-stories",
      icon: Users,
      dropdown: false,
    },
    {
      name: "Plan Your Trip",
      path: "/plan-your-trip",
      icon: MapPin,
      dropdown: false,
    },
    {
      name: "About Us",
      path: "/about",
      icon: Info,
      dropdown: false,
    },
  ];

  return (
    <header className={cn(
      "bg-white sticky top-0 z-40 w-full transition-all duration-300",
      isScrolled ? "shadow-md py-2" : "shadow-sm py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Nile Wellness Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-nile-600">Nile Wellness</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center text-gray-700 hover:text-nile-600 font-medium py-2"
                  >
                    {item.name}
                    <ChevronDown className={cn(
                      "ml-1 h-4 w-4 transition-transform duration-200",
                      activeDropdown === item.name && "rotate-180"
                    )} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center text-gray-700 hover:text-nile-600 font-medium py-2"
                  >
                    {item.icon && <item.icon className="mr-1 h-4 w-4" />}
                    {item.name}
                  </Link>
                )}

                {item.dropdown && (
                  <div
                    className={cn(
                      "absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2 space-y-1 z-20 transition-all duration-200",
                      activeDropdown === item.name
                        ? "opacity-100 visible"
                        : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                    )}
                  >
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-nile-50 hover:text-nile-600 rounded-md"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Phone className="h-4 w-4" /> +91 1234567890
            </Button>
            <Button className="bg-nile-600 hover:bg-nile-700" asChild>
              <Link to="/contact">
                <MessageCircle className="mr-2 h-4 w-4" /> Contact Us
              </Link>
            </Button>
          </div>

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

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 max-h-[80vh] overflow-y-auto">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-nile-600 font-medium"
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          "ml-1 h-4 w-4 transition-transform duration-200",
                          activeDropdown === item.name && "rotate-180"
                        )}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 space-y-1 mt-1 border-l-2 border-nile-100">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-2 text-sm text-gray-600 hover:text-nile-600"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center py-3 text-gray-700 hover:text-nile-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="flex flex-col space-y-3 pt-4 mt-2 border-t border-gray-200">
              <Button variant="outline" size="sm" className="flex items-center justify-center gap-1 w-full">
                <Phone className="h-4 w-4" /> +91 1234567890
              </Button>
              <Button className="bg-nile-600 hover:bg-nile-700 w-full" asChild>
                <Link to="/contact">
                  <MessageCircle className="mr-2 h-4 w-4" /> Contact Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
