
import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = "911234567890"; // Replace with actual WhatsApp number
  const defaultMessage = "Hi, I'm looking for medical treatment in India. Please assist me.";
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-72 mb-4 border border-gray-200 transform transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-center mb-4 pb-2 border-b">
            <h3 className="text-green-600 font-medium">Send us a message</h3>
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Get a free consultation from our medical experts via WhatsApp.
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 bg-green-600 hover:bg-green-700 text-white text-center rounded-lg transition-colors duration-300 font-medium"
          >
            Start Chat
          </a>
        </div>
      )}
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center justify-center p-4 rounded-full ${
          isExpanded ? 'bg-red-500 hover:bg-red-600' : 'bg-green-600 hover:bg-green-700'
        } text-white shadow-xl transition-all duration-300 hover:scale-105 animate-float`}
        aria-label={isExpanded ? "Close WhatsApp chat" : "Open WhatsApp chat"}
      >
        {isExpanded ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default WhatsAppButton;
