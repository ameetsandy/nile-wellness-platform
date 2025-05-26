import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { db } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

interface AppointmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  doctorName?: string;
  formType: "appointment" | "second-opinion" | "reports";
}

const AppointmentForm = ({ isOpen, onClose, doctorName, formType }: AppointmentFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number with country code";
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      // Prepare data for Firestore
      const appointmentData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        treatment: formData.treatment,
        doctorName: doctorName || "N/A", // Include doctorName, default to "N/A" if not provided
        formType: formType,
        timestamp: new Date(), // Add a timestamp
      };

      // Add document to Firestore
      const docRef = await addDoc(collection(db, "appointments"), appointmentData);
      console.log("Document written with ID: ", docRef.id);
      
      // Clear form and close modal on success
      setFormData({
        name: "",
        phone: "",
        email: "",
        treatment: "",
      });
      onClose();

    } catch (e) {
      console.error("Error adding document: ", e);
      // Optionally show an error message to the user
      alert("There was an error submitting your form. Please try again.");
      onClose(); // Close form even on error for now, can be adjusted
    }
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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
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
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
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
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
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
                value={formData.treatment}
                onChange={(e) => setFormData(prev => ({ ...prev, treatment: e.target.value }))}
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