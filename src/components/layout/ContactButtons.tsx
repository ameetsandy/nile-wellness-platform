
import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactButtonsProps {
  isMobile?: boolean;
}

const ContactButtons = ({ isMobile = false }: ContactButtonsProps) => {
  if (isMobile) {
    return (
      <div className="flex flex-col space-y-3 pt-4 mt-2 border-t border-gray-200">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center justify-center gap-1 w-full"
        >
          <Phone className="h-4 w-4" /> +91 1234567890
        </Button>
        <Button className="bg-nile-600 hover:bg-nile-700 w-full" asChild>
          <Link to="/contact">
            <MessageCircle className="mr-2 h-4 w-4" /> Contact Us
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center space-x-4">
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-1"
      >
        <Phone className="h-4 w-4" /> +91 1234567890
      </Button>
      <Button className="bg-nile-600 hover:bg-nile-700" asChild>
        <Link to="/contact">
          <MessageCircle className="mr-2 h-4 w-4" /> Contact Us
        </Link>
      </Button>
    </div>
  );
};

export default ContactButtons;
