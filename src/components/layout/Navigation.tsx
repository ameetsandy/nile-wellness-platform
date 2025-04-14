
import NavigationItem from "./NavigationItem";

interface NavigationProps {
  navigationItems: {
    name: string;
    path: string;
    dropdown: boolean;
    items?: { name: string; path: string }[];
  }[];
  activeDropdown: string | null;
  toggleDropdown: (dropdown: string) => void;
  setActiveDropdown: (dropdown: string | null) => void;
}

const Navigation = ({
  navigationItems,
  activeDropdown,
  toggleDropdown,
  setActiveDropdown,
}: NavigationProps) => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navigationItems.map((item) => (
        <div key={item.name} className="relative group">
          <NavigationItem
            item={item}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            setActiveDropdown={setActiveDropdown}
          />
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
