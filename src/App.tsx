import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/common/ScrollToTop";
import GoogleTranslate from "@/components/common/GoogleTranslate";
import GoogleAnalytics from "@/components/common/GoogleAnalytics";
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
import BariatricSurgery from "./pages/treatments/BariatricSurgery";
import SpineSurgery from "./pages/treatments/SpineSurgery";
import BrainSurgery from "./pages/treatments/BrainSurgery";
import LiverTransplant from "./pages/treatments/LiverTransplant";
import KneeReplacement from "./pages/treatments/KneeReplacement";
import HeartBypassSurgery from "./pages/treatments/HeartBypassSurgery";
import KidneyTransplant from "./pages/treatments/KidneyTransplant";
import DentalImplants from "./pages/treatments/DentalImplants";
import HipReplacement from "./pages/treatments/HipReplacement";
import CancerTreatment from "./pages/treatments/CancerTreatment";
import IVFFertility from "./pages/treatments/IVFFertility";
import EyeCare from "./pages/treatments/EyeCare";
import AllTreatments from "./pages/treatments/AllTreatments";
import OrthopedicSurgery from "./pages/treatments/OrthopedicSurgery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <ScrollToTop />
        <GoogleTranslate />
        <GoogleAnalytics />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/hospitals/:id" element={<HospitalDetail />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatments/all" element={<AllTreatments />} />
          <Route path="/treatments/bariatric-surgery" element={<BariatricSurgery />} />
          <Route path="/treatments/spine-surgery" element={<SpineSurgery />} />
          <Route path="/treatments/brain-surgery" element={<BrainSurgery />} />
          <Route path="/treatments/liver-transplant" element={<LiverTransplant />} />
          <Route path="/treatments/knee-replacement" element={<KneeReplacement />} />
          <Route path="/treatments/hip-replacement" element={<HipReplacement />} />
          <Route path="/treatments/heart-bypass" element={<HeartBypassSurgery />} />
          <Route path="/treatments/kidney-transplant" element={<KidneyTransplant />} />
          <Route path="/treatments/dental-implants" element={<DentalImplants />} />
          <Route path="/treatments/eye-care" element={<EyeCare />} />
          <Route path="/treatments/cancer-treatment" element={<CancerTreatment />} />
          <Route path="/treatments/ivf-fertility" element={<IVFFertility />} />
          <Route path="/treatments/orthopedic-surgery" element={<OrthopedicSurgery />} />
          <Route path="/free-opinion" element={<FreeOpinion />} />
          <Route path="/free-services" element={<FreeServices />} />
          <Route path="/patient-stories" element={<PatientStories />} />
          <Route path="/plan-your-trip" element={<PlanYourTrip />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
