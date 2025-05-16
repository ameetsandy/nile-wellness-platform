import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  MapPin,
  Calendar,
  Users,
  Hotel,
  Plane,
  HelpCircle,
  CreditCard,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  User as UserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format, isValid } from "date-fns";
import { DayPicker } from "react-day-picker";
import { useToast } from "@/components/ui/use-toast";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const PlanYourTrip = () => {
  const [step, setStep] = useState(1);
  const [destination, setDestination] = useState("");
  const [travelDates, setTravelDates] = useState<Date | undefined>();
  const [dateInput, setDateInput] = useState("");
  const [numTravelers, setNumTravelers] = useState("1");
  const [medicalRequirements, setMedicalRequirements] = useState("");
  const [budget, setBudget] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    toast({
      title: "Your request has been submitted!",
      description: "We will get back to you shortly with a personalized plan.",
    });

    // Reset form
    setStep(1);
    setDestination("");
    setTravelDates(undefined);
    setNumTravelers("1");
    setMedicalRequirements("");
    setBudget("");
    setAdditionalNotes("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-medical-50 to-nile-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Plan Your Medical Trip to India
                <span className="block text-nile-600 mt-2">
                  Let us handle the details for a seamless experience
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below to help us understand your needs and
                preferences. We'll create a personalized plan tailored to your
                medical requirements and travel preferences.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Trip Planning Form
              </h2>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-700 font-medium">
                    Step {step} of 5
                  </span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      onClick={prevStep}
                      disabled={step === 1}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      onClick={nextStep}
                      disabled={step === 5}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-nile-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${(step / 5) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleFormSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">
                      Destination & Dates
                    </h3>
                    <div>
                      <Label htmlFor="destination">
                        Preferred Destination (City or Region):
                      </Label>
                      <Input
                        type="text"
                        id="destination"
                        placeholder="e.g., Delhi, Mumbai, Chennai"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label>Preferred Travel Dates:</Label>
                      <Input
                        type="text"
                        placeholder="YYYY-MM-DD"
                        value={dateInput}
                        onChange={(e) => {
                          setDateInput(e.target.value);
                          const date = new Date(e.target.value);
                          if (isValid(date)) {
                            setTravelDates(date);
                          }
                        }}
                        className="w-full"
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Enter your preferred travel date in YYYY-MM-DD format
                      </p>
                    </div>
                    <Button onClick={nextStep}>Next</Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">
                      Number of Travelers
                    </h3>
                    <div>
                      <Label htmlFor="numTravelers">
                        Number of Patients & Companions:
                      </Label>
                      <Select
                        value={numTravelers}
                        onValueChange={setNumTravelers}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select number of travelers" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => i + 1).map(
                            (num) => (
                              <SelectItem key={num} value={String(num)}>
                                {num}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="ghost" onClick={prevStep}>
                        Previous
                      </Button>
                      <Button onClick={nextStep}>Next</Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">
                      Medical Requirements
                    </h3>
                    <div>
                      <Label htmlFor="medicalRequirements">
                        Briefly describe your medical condition and required
                        treatment:
                      </Label>
                      <Textarea
                        id="medicalRequirements"
                        placeholder="e.g., Heart valve replacement, Knee replacement, Cancer treatment"
                        rows={4}
                        value={medicalRequirements}
                        onChange={(e) => setMedicalRequirements(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex justify-between">
                      <Button variant="ghost" onClick={prevStep}>
                        Previous
                      </Button>
                      <Button onClick={nextStep}>Next</Button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Budget</h3>
                    <div>
                      <Label htmlFor="budget">
                        What is your estimated budget for the entire trip
                        (including treatment, travel, and accommodation)?
                      </Label>
                      <Input
                        type="text"
                        id="budget"
                        placeholder="e.g., $5000 - $10000 USD"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="additionalNotes">
                        Additional Notes or Preferences:
                      </Label>
                      <Textarea
                        id="additionalNotes"
                        placeholder="e.g., Preferred type of accommodation, dietary requirements, language assistance"
                        rows={4}
                        value={additionalNotes}
                        onChange={(e) => setAdditionalNotes(e.target.value)}
                      />
                    </div>
                    <div className="flex justify-between">
                      <Button variant="ghost" onClick={prevStep}>
                        Previous
                      </Button>
                      <Button onClick={nextStep}>Next</Button>
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Review Your Information
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-nile-600" />
                        <span className="font-semibold">Destination:</span>
                        <span>{destination}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-nile-600" />
                        <span className="font-semibold">Travel Dates:</span>
                        <span>
                          {travelDates
                            ? format(travelDates, "PPP")
                            : "Not specified"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-nile-600" />
                        <span className="font-semibold">Number of Travelers:</span>
                        <span>{numTravelers}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <HelpCircle className="h-5 w-5 text-nile-600 mt-0.5" />
                        <span className="font-semibold">Medical Requirements:</span>
                        <span>{medicalRequirements}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-nile-600" />
                        <span className="font-semibold">Budget:</span>
                        <span>{budget}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <UserIcon className="h-5 w-5 text-nile-600 mt-0.5" />
                        <span className="font-semibold">Additional Notes:</span>
                        <span>{additionalNotes || "None"}</span>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="ghost" onClick={prevStep}>
                        Previous
                      </Button>
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            Submitting...
                            <svg
                              className="animate-spin h-5 w-5 ml-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                          </>
                        ) : (
                          <>
                            Submit Request
                            <CheckCircle className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default PlanYourTrip;
