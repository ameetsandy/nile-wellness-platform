
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Doctors from "./pages/Doctors";
import Hospitals from "./pages/Hospitals";
import DoctorDetail from "./pages/DoctorDetail";
import HospitalDetail from "./pages/HospitalDetail";
import Treatments from "./pages/Treatments";
import FreeOpinion from "./pages/FreeOpinion";
import FreeServices from "./pages/FreeServices";
import PatientStories from "./pages/PatientStories";
import PlanYourTrip from "./pages/PlanYourTrip";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/hospitals/:id" element={<HospitalDetail />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/free-opinion" element={<FreeOpinion />} />
          <Route path="/free-services" element={<FreeServices />} />
          <Route path="/patient-stories" element={<PatientStories />} />
          <Route path="/plan-your-trip" element={<PlanYourTrip />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
