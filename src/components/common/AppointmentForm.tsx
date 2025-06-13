import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppointmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  doctorName?: string;
  formType: "appointment" | "second-opinion" | "reports";
}

const AppointmentForm = ({ isOpen, onClose, doctorName, formType }: AppointmentFormProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    
    if (!name?.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!phone?.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[1-9]\d{1,14}$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number with country code";
    }
    
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {formType === "appointment" ? "Book Appointment" : 
               formType === "second-opinion" ? "Get Second Opinion" : 
               "Send Reports for Opinion"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {doctorName && (
            <p className="text-gray-600 mb-6">
              {formType === "appointment" ? `Book an appointment with ${doctorName}` :
               formType === "second-opinion" ? `Get a second opinion from ${doctorName}` :
               `Send medical reports to ${doctorName}`}
            </p>
          )}

          <form 
            action="https://formsubmit.co/care@nilewellness.com" 
            method="POST"
            onSubmit={(e) => {
              if (!validateForm(new FormData(e.currentTarget))) {
                e.preventDefault();
              }
            }}
            className="space-y-4"
          >
            <input type="hidden" name="_subject" value={`New ${formType} Request from Website`} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="doctorName" value={doctorName || "N/A"} />
            <input type="hidden" name="formType" value={formType} />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                className={`w-full p-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                className={`w-full p-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="+91 9876543210"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Treatment Required
              </label>
              <input
                type="text"
                name="treatment"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Specify the treatment or issue"
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-nile-600 hover:bg-nile-700 text-white"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm; 