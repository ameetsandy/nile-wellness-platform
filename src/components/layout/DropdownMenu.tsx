
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface DropdownMenuProps {
  isActive: boolean;
  items: { name: string; path: string }[];
  setActiveDropdown: (dropdown: string | null) => void;
  isMobile?: boolean;
}

const DropdownMenu = ({
  isActive,
  items,
  setActiveDropdown,
  isMobile = false,
}: DropdownMenuProps) => {
  if (isMobile) {
    return isActive ? (
      <div className="pl-4 space-y-1 mt-1 border-l-2 border-nile-100">
        {items.map((subItem) => (
          <Link
            key={subItem.name}
            to={subItem.path}
            className="block py-2 text-sm text-gray-600 hover:text-nile-600"
            onClick={() => setActiveDropdown(null)}
          >
            {subItem.name}
          </Link>
        ))}
      </div>
    ) : null;
  }

  return (
    <div
      className={cn(
        "absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2 space-y-1 z-20 transition-all duration-200",
        isActive
          ? "opacity-100 visible"
          : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
      )}
    >
      {items.map((subItem) => (
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
  );
};

export default DropdownMenu;
