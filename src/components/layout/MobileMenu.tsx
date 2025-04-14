
import { Link } from "react-router-dom";
import NavigationItem from "./NavigationItem";
import ContactButtons from "./ContactButtons";

interface MobileMenuProps {
  isOpen: boolean;
  navigationItems: {
    name: string;
    path: string;
    dropdown: boolean;
    items?: { name: string; path: string }[];
  }[];
  activeDropdown: string | null;
  toggleDropdown: (dropdown: string) => void;
  setActiveDropdown: (dropdown: string | null) => void;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({
  isOpen,
  navigationItems,
  activeDropdown,
  toggleDropdown,
  setActiveDropdown,
  setIsMenuOpen,
}: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden py-4 space-y-2 max-h-[80vh] overflow-y-auto">
      {navigationItems.map((item) => (
        <div key={item.name}>
          <NavigationItem
            item={item}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            setActiveDropdown={(dropdown) => {
              setActiveDropdown(dropdown);
              if (dropdown === null) {
                setIsMenuOpen(false);
              }
            }}
            isMobile={true}
          />
        </div>
      ))}

      <ContactButtons isMobile={true} />
    </div>
  );
};

export default MobileMenu;
