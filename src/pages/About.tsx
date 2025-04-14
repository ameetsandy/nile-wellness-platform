
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MessageCircle, Shield, Trophy, Heart, Users, CheckCircle, Globe, Building, HeartHandshake, FileCheck, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const About = () => {
  const team = [
    {
      name: "Dr. Rajiv Sharma",
      role: "Founder & Medical Director",
      bio: "Cardiothoracic surgeon with 25+ years of experience and a vision to make quality healthcare accessible globally.",
      image: "https://placehold.co/300x300/medical-700/white/?text=Dr.+Sharma"
    },
    {
      name: "Priya Mehta",
      role: "Head of Patient Services",
      bio: "Former hospital administrator with expertise in international patient care and medical tourism logistics.",
      image: "https://placehold.co/300x300/medical-700/white/?text=Priya+M"
    },
    {
      name: "Vikram Singh",
      role: "Medical Tourism Specialist",
      bio: "Certified healthcare consultant with 15+ years of experience helping international patients navigate medical journeys.",
      image: "https://placehold.co/300x300/medical-700/white/?text=Vikram+S"
    },
    {
      name: "Sarah Johnson",
      role: "International Relations",
      bio: "Multilingual professional focused on creating seamless experiences for patients from over 30 countries.",
      image: "https://placehold.co/300x300/medical-700/white/?text=Sarah+J"
    }
  ];
  
  const partners = [
    {
      name: "Apollo Hospitals Group",
      type: "Hospital Network",
      logo: "https://placehold.co/200x100/white/gray/?text=Apollo"
    },
    {
      name: "Fortis Healthcare",
      type: "Hospital Network",
      logo: "https://placehold.co/200x100/white/gray/?text=Fortis"
    },
    {
      name: "Medanta",
      type: "Multi-Specialty Hospital",
      logo: "https://placehold.co/200x100/white/gray/?text=Medanta"
    },
    {
      name: "Max Healthcare",
      type: "Hospital Chain",
      logo: "https://placehold.co/200x100/white/gray/?text=Max"
    },
    {
      name: "Indian Medical Association",
      type: "Medical Organization",
      logo: "https://placehold.co/200x100/white/gray/?text=IMA"
    },
    {
      name: "Ministry of Tourism",
      type: "Government",
      logo: "https://placehold.co/200x100/white/gray/?text=Tourism+Ministry"
    }
  ];
  
  const achievements = [
    {
      number: "10,000+",
      text: "International Patients Served",
      icon: <Users className="h-10 w-10 text-nile-600" />
    },
    {
      number: "96%",
      text: "Patient Satisfaction Rate",
      icon: <Heart className="h-10 w-10 text-nile-600" />
    },
    {
      number: "30+",
      text: "Countries Worldwide",
      icon: <Globe className="h-10 w-10 text-nile-600" />
    },
    {
      number: "100+",
      text: "Partner Hospitals",
      icon: <Building className="h-10 w-10 text-nile-600" />
    }
  ];
  
  const openWhatsApp = () => {
    const phoneNumber = "911234567890";
    const message = "Hello, I'd like to learn more about Nile Wellness and your medical tourism services.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-medical-50 to-nile-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                  Our Mission: Making Quality Healthcare Accessible Globally
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Nile Wellness bridges the gap between international patients and India's world-class medical facilities, creating seamless healthcare journeys with compassion and excellence.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Button 
                    className="bg-nile-600 hover:bg-nile-700"
                    onClick={openWhatsApp}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> Connect with Our Team
                  </Button>
                  <Link to="/patient-stories">
                    <Button 
                      variant="outline"
                      className="border-nile-600 text-nile-600 hover:bg-nile-50 w-full sm:w-auto"
                    >
                      Read Patient Stories
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <img 
                  src="https://placehold.co/600x400/medical-600/white/?text=The+Nile+Wellness+Team"
                  alt="Nile Wellness Team"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Story & Values</h2>
              <p className="text-lg text-gray-600">
                Founded in 2015 by Dr. Rajiv Sharma, Nile Wellness was born from a vision to make India's exceptional medical care accessible to patients worldwide at affordable costs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-5">How We Started</h3>
                <p className="text-gray-700 mb-4">
                  After witnessing international patients struggling to navigate India's healthcare system, Dr. Sharma assembled a team of medical and hospitality professionals to create a seamless healthcare journey for patients from abroad.
                </p>
                <p className="text-gray-700 mb-4">
                  What began as a small team helping patients from neighboring countries has grown into a comprehensive medical tourism organization serving patients from over 30 countries across Africa, the Middle East, Europe, and North America.
                </p>
                <p className="text-gray-700 mb-4">
                  Our name "Nile" represents the life-giving river that nurtures civilizations, symbolizing our commitment to nurturing health and well-being for all who seek medical care in India.
                </p>
                
                <div className="mt-8">
                  <h4 className="font-medium text-lg mb-4">Recognition & Accreditations</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <Trophy className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Best Medical Tourism Facilitator 2022</span>
                    </div>
                    <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <Trophy className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Healthcare Excellence Award 2021</span>
                    </div>
                    <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <Shield className="h-6 w-6 text-nile-600 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">NABH Accredited Facilitator</span>
                    </div>
                    <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <Shield className="h-6 w-6 text-nile-600 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Ministry of Tourism Certified</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-5">Our Core Values</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-nile-50 flex items-center justify-center mr-4 flex-shrink-0">
                      <Heart className="h-6 w-6 text-nile-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Patient-Centered Care</h4>
                      <p className="text-gray-700">
                        Every decision we make puts patients' needs, comfort, and outcomes first. We understand that each patient's journey is unique.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-nile-50 flex items-center justify-center mr-4 flex-shrink-0">
                      <Shield className="h-6 w-6 text-nile-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Integrity & Transparency</h4>
                      <p className="text-gray-700">
                        We provide honest information, clear costs, and realistic expectations throughout the medical journey. No hidden fees or surprises.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-nile-50 flex items-center justify-center mr-4 flex-shrink-0">
                      <Globe className="h-6 w-6 text-nile-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Cultural Sensitivity</h4>
                      <p className="text-gray-700">
                        We respect and accommodate diverse cultural backgrounds, religious practices, and personal preferences of our international patients.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-nile-50 flex items-center justify-center mr-4 flex-shrink-0">
                      <HeartHandshake className="h-6 w-6 text-nile-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Compassionate Support</h4>
                      <p className="text-gray-700">
                        Beyond logistics, we provide emotional support and personal attention to patients and families during what can be a challenging time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-nile-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact & Achievements</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Over the years, we've helped thousands of patients access quality healthcare in India, creating life-changing outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {achievements.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{item.number}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="bg-gradient-to-br from-nile-600 to-medical-700 p-6 text-white md:col-span-1">
                    <h3 className="text-xl font-semibold mb-4">Why Patients Choose Us</h3>
                    <p className="text-white/90 mb-4">
                      Discover the Nile Wellness difference that has made us a trusted name in medical tourism.
                    </p>
                    <Link to="/free-opinion">
                      <Button className="bg-white text-nile-600 hover:bg-gray-100">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="p-6 md:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium mb-1">Free Medical Opinions</h4>
                          <p className="text-sm text-gray-600">No-obligation consultations with top specialists</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium mb-1">End-to-End Support</h4>
                          <p className="text-sm text-gray-600">Comprehensive assistance from first contact to return home</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium mb-1">Verified Partners</h4>
                          <p className="text-sm text-gray-600">Only JCI/NABH accredited hospitals and verified doctors</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium mb-1">Transparent Pricing</h4>
                          <p className="text-sm text-gray-600">Clear cost estimates with no hidden fees</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium mb-1">Cultural Sensitivity</h4>
                          <p className="text-sm text-gray-600">Respect for diverse backgrounds and requirements</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium mb-1">24/7 Assistance</h4>
                          <p className="text-sm text-gray-600">Round-the-clock support throughout your stay</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dedicated professionals who bring together medical expertise and hospitality excellence to create exceptional patient experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-nile-600 text-sm mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Partners & Affiliations</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We collaborate with India's finest healthcare institutions and organizations to deliver exceptional care.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
                >
                  <img 
                    src={partner.logo}
                    alt={partner.name}
                    className="h-14 mb-3"
                  />
                  <h3 className="font-medium text-center text-sm">{partner.name}</h3>
                  <p className="text-xs text-gray-500 text-center">{partner.type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-3 p-8 md:p-10">
                    <h2 className="text-3xl font-bold mb-6">How We Can Help You</h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-nile-50 flex items-center justify-center mr-4 flex-shrink-0">
                          <FileCheck className="h-5 w-5 text-nile-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-1">Free Medical Opinions</h4>
                          <p className="text-gray-600">
                            Upload your reports and receive expert opinions from India's leading specialists at no cost.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-nile-50 flex items-center justify-center mr-4 flex-shrink-0">
                          <Clock className="h-5 w-5 text-nile-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-1">End-to-End Planning</h4>
                          <p className="text-gray-600">
                            Complete assistance with hospital selection, appointments, visa, accommodation, and more.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-nile-50 flex items-center justify-center mr-4 flex-shrink-0">
                          <Globe className="h-5 w-5 text-nile-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-1">In-Country Support</h4>
                          <p className="text-gray-600">
                            Dedicated coordinators, airport pickup, language assistance, and 24/7 help during your stay.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-nile-50 flex items-center justify-center mr-4 flex-shrink-0">
                          <HeartHandshake className="h-5 w-5 text-nile-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-1">Post-Treatment Care</h4>
                          <p className="text-gray-600">
                            Follow-up coordination, virtual consultations, and continuing support after you return home.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <Link to="/free-opinion">
                        <Button 
                          className="bg-nile-600 hover:bg-nile-700 w-full sm:w-auto"
                        >
                          Get a Free Medical Opinion
                        </Button>
                      </Link>
                      <Button 
                        variant="outline"
                        className="border-nile-600 text-nile-600 hover:bg-nile-50 w-full sm:w-auto"
                        onClick={openWhatsApp}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" /> Ask Us Anything
                      </Button>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 bg-gradient-to-br from-nile-600 to-medical-700 p-8 md:p-10 text-white">
                    <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Building className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium mb-1">Our Office</h4>
                          <p className="text-white/80">
                            123 Healthcare Avenue<br />
                            Connaught Place, New Delhi<br />
                            India - 110001
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium mb-1">Call Us</h4>
                          <p className="text-white/80">
                            +91 1234567890 (International)<br />
                            1800-123-4567 (Toll Free)
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <MessageCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium mb-1">WhatsApp</h4>
                          <p className="text-white/80">
                            +91 1234567890
                          </p>
                          <Button 
                            className="mt-2 bg-green-600 hover:bg-green-700"
                            onClick={openWhatsApp}
                          >
                            <MessageCircle className="mr-2 h-4 w-4" /> Message Us
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium mb-1">Hours</h4>
                          <p className="text-white/80">
                            Monday - Saturday: 9 AM - 8 PM IST<br />
                            Sunday: 10 AM - 4 PM IST
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default About;
