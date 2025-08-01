import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isSecondaryNavSticky, setIsSecondaryNavSticky] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const primaryHeaderRef = useRef<HTMLDivElement>(null);
  const secondaryNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsTreatmentsOpen(false);
      }
    };

    const handleScroll = () => {
      if (primaryHeaderRef.current && secondaryNavRef.current) {
        const primaryHeaderBottom = primaryHeaderRef.current.getBoundingClientRect().bottom;
        const secondaryNavHeight = secondaryNavRef.current.offsetHeight;
        setIsSecondaryNavSticky(primaryHeaderBottom <= 0);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle sheet open/close
  const handleSheetOpenChange = (open: boolean) => {
    setIsSheetOpen(open);
    if (!open) {
      setIsTreatmentsOpen(false);
    }
  };

  const treatments = [
    { name: "Heart Bypass Surgery", path: "/treatments/heart-bypass" },
    { name: "Knee Replacement", path: "/treatments/knee-replacement" },
    { name: "Hip Replacement", path: "/treatments/hip-replacement" },
    { name: "Orthopedic Surgery", path: "/treatments/orthopedic-surgery" },
    { name: "Cancer Treatment", path: "/treatments/cancer-treatment" },
    { name: "Kidney Transplant", path: "/treatments/kidney-transplant" },
    { name: "Liver Transplant", path: "/treatments/liver-transplant" },
    { name: "Spine Surgery", path: "/treatments/spine-surgery" },
    { name: "Brain Surgery", path: "/treatments/brain-surgery" },
    { name: "IVF & Fertility", path: "/treatments/ivf-fertility" },
    { name: "Bariatric Surgery", path: "/treatments/bariatric-surgery" },
    { name: "Dental Implants", path: "/treatments/dental-implants" },
    { name: "Eye Care", path: "/treatments/eye-care" },
    { name: "All Treatments", path: "/treatments/all" },
  ];

  return (
    <header className="z-50">
      {/* Primary Header - Scrolls naturally */}
      <div ref={primaryHeaderRef} className="bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left side - Logo and Mobile Menu */}
            <div className="flex items-center justify-between w-full md:w-auto">
              {/* Mobile Menu Button - Now on the left */}
              <Sheet open={isSheetOpen} onOpenChange={handleSheetOpenChange}>
                <SheetTrigger asChild className="md:hidden">
                  <button className="p-2 hover:bg-gray-100 rounded-md">
                    <Menu className="h-6 w-6 text-nile-700" />
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] p-0">
                  <nav className="flex flex-col h-full">
                    <div className="p-4 border-b">
                      <Link to="/" className="flex items-center">
                        <img 
                          src="https://i.postimg.cc/NjWKdrzT/Screenshot-2025-06-14-192528.png" 
                          alt="Nile Wellness Logo" 
                          className="h-16 w-36"
                        />
                      </Link>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                      <div className="p-4 space-y-4">
                        {/* Contact Info - Now part of the scrollable content */}
                        <div className="flex items-center text-nile-700">
                          <Phone className="h-5 w-5 mr-2" />
                          <span className="font-semibold">+91 80760 36335</span>
                        </div>
                        <Link 
                          to="/contact" 
                          className="block w-full bg-nile-600 text-white px-4 py-2 rounded-md hover:bg-nile-700 transition-colors font-medium text-center"
                          onClick={() => setIsSheetOpen(false)}
                        >
                          Contact Us
                        </Link>
                        
                        <div className="space-y-2" ref={dropdownRef}>
                          <button
                            onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                            className="flex items-center justify-between w-full text-nile-700 hover:text-nile-900 font-medium transition-colors"
                          >
                            Treatments
                            <ChevronDown className={cn(
                              "ml-1 h-4 w-4 transition-transform duration-200",
                              isTreatmentsOpen && "rotate-180"
                            )} />
                          </button>
                          {isTreatmentsOpen && (
                            <div className="pl-4 space-y-2">
                              {treatments.map((treatment) => (
                                <Link
                                  key={treatment.name}
                                  to={treatment.path}
                                  className="block text-sm text-gray-700 hover:text-nile-600 transition-colors"
                                  onClick={() => {
                                    setIsTreatmentsOpen(false);
                                    setIsSheetOpen(false);
                                  }}
                                >
                                  {treatment.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                        <Link 
                          to="/doctors" 
                          className="block text-nile-700 hover:text-nile-900 font-medium transition-colors"
                          onClick={() => setIsSheetOpen(false)}
                        >
                          Top Doctors
                        </Link>
                        <Link 
                          to="/hospitals" 
                          className="block text-nile-700 hover:text-nile-900 font-medium transition-colors"
                          onClick={() => setIsSheetOpen(false)}
                        >
                          Best Hospitals
                        </Link>
                        <Link 
                          to="/free-services" 
                          className="block text-nile-700 hover:text-nile-900 font-medium transition-colors"
                          onClick={() => setIsSheetOpen(false)}
                        >
                          Free Services
                        </Link>
                        <Link 
                          to="/patient-stories" 
                          className="block text-nile-700 hover:text-nile-900 font-medium transition-colors"
                          onClick={() => setIsSheetOpen(false)}
                        >
                          Patient Stories
                        </Link>
                        <Link 
                          to="/plan-your-trip" 
                          className="block text-nile-700 hover:text-nile-900 font-medium transition-colors"
                          onClick={() => setIsSheetOpen(false)}
                        >
                          Plan Your Trip
                        </Link>
                      </div>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>

              {/* Logo - Now on the right */}
              <Link to="/" className="flex items-center">
                <img 
                  src="https://i.postimg.cc/NjWKdrzT/Screenshot-2025-06-14-192528.png" 
                  alt="Nile Wellness Logo" 
                  className="h-10 w-36 md:h-14 md:w-52"
                />
              </Link>
            </div>

            {/* Right side - Contact Information (Desktop only) */}
            <div className="hidden md:flex flex-row items-center gap-6 md:mr-32">
              <div className="flex items-center text-nile-700 hover:text-nile-800 transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                <span className="font-semibold">+91 80760 36335</span>
              </div>
              <Link 
                to="/contact" 
                className="bg-nile-600 text-white px-4 py-2 rounded-md hover:bg-nile-700 transition-colors font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation Container */}
      <div className="relative">
        {/* Placeholder to prevent layout shift */}
        <div 
          className={cn(
            "hidden md:block",
            isSecondaryNavSticky ? "h-14" : "h-0"
          )}
        />
        
        {/* Secondary Navigation Bar */}
        <div 
          ref={secondaryNavRef}
          className={cn(
            "hidden md:block border-y border-gray-100 bg-white transition-all duration-200",
            isSecondaryNavSticky ? "fixed top-0 left-0 right-0 shadow-sm" : ""
          )}
        >
          <div className="container mx-auto px-4">
            <nav className="flex justify-between items-center h-14">
              {/* Left-aligned Menu Items */}
              <div className="flex items-center gap-8">
                <div className="relative group" ref={dropdownRef}>
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
                    <div className="absolute left-0 mt-2 w-64 rounded-lg shadow-lg bg-white ring-1 ring-nile-100 p-2 space-y-1 z-50">
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
      </div>
    </header>
  );
};

export default Header;
