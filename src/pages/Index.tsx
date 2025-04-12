
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import TrustSection from "@/components/home/TrustSection";
import TopTreatments from "@/components/home/TopTreatments";
import WhyChooseIndia from "@/components/home/WhyChooseIndia";
import PopularDoctors from "@/components/home/PopularDoctors";
import PartneredHospitals from "@/components/home/PartneredHospitals";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustSection />
        <TopTreatments />
        <WhyChooseIndia />
        <PopularDoctors />
        <PartneredHospitals />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
