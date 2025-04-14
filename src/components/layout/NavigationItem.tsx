
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import DropdownMenu from "./DropdownMenu";

interface NavigationItemProps {
  item: {
    name: string;
    path: string;
    dropdown: boolean;
    items?: { name: string; path: string }[];
  };
  activeDropdown: string | null;
  toggleDropdown: (dropdown: string) => void;
  setActiveDropdown: (dropdown: string | null) => void;
  isMobile?: boolean;
}

const NavigationItem = ({
  item,
  activeDropdown,
  toggleDropdown,
  setActiveDropdown,
  isMobile = false,
}: NavigationItemProps) => {
  if (item.dropdown) {
    return (
      <div className={isMobile ? "" : "relative group"}>
        <button
          onClick={() => toggleDropdown(item.name)}
          className={`flex items-center ${
            isMobile
              ? "justify-between w-full py-3 text-gray-700 hover:text-nile-600 font-medium"
              : "text-gray-700 hover:text-nile-600 font-medium py-2"
          }`}
        >
          {item.name}
          <ChevronDown
            className={cn(
              "ml-1 h-4 w-4 transition-transform duration-200",
              activeDropdown === item.name && "rotate-180"
            )}
          />
        </button>

        {item.dropdown && (
          <DropdownMenu
            isActive={activeDropdown === item.name}
            items={item.items || []}
            setActiveDropdown={setActiveDropdown}
            isMobile={isMobile}
          />
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.path}
      className={`flex items-center ${
        isMobile
          ? "py-3 text-gray-700 hover:text-nile-600 font-medium"
          : "text-gray-700 hover:text-nile-600 font-medium py-2"
      }`}
      onClick={() => {
        if (isMobile) {
          setActiveDropdown(null);
        }
      }}
    >
      {item.name}
    </Link>
  );
};

export default NavigationItem;
