import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

interface TreatmentCTAProps {
  treatmentName: string;
  whatsappButtonText?: string;
  phoneButtonText?: string;
  className?: string;
}

const TreatmentCTA = ({
  treatmentName,
  whatsappButtonText = "Share Reports for Free Evaluation",
  phoneButtonText = "Speak to a Coordinator",
  className = "",
}: TreatmentCTAProps) => {
  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in ${treatmentName} in India. Please assist me.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918076036335?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Button 
        className="bg-green-600 hover:bg-green-700 text-white text-base py-3 px-6 h-auto"
        onClick={handleWhatsAppClick}
        aria-label={`Contact via WhatsApp about ${treatmentName}`}
      >
        <MessageCircle className="mr-2 h-5 w-5" /> {whatsappButtonText}
      </Button>
      <Button 
        variant="outline" 
        className="text-base py-3 px-6 h-auto border-blue-600 text-blue-600 hover:bg-blue-50"
        onClick={handleWhatsAppClick}
        aria-label={`Contact via WhatsApp about ${treatmentName}`}
      >
        <Phone className="mr-2 h-5 w-5" /> {phoneButtonText}
      </Button>
    </div>
  );
};

export default TreatmentCTA; 