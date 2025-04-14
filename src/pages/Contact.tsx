
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MessageCircle, MapPin, Phone, Mail, Clock, Send, Building, Users, Languages, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Your message has been sent! Our team will contact you within 24 hours.");
    }, 1500);
  };
  
  const openWhatsApp = () => {
    const phoneNumber = "911234567890";
    const message = "Hello, I'd like to inquire about medical tourism services in India.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8 text-nile-600" />,
      title: "Call Us",
      details: [
        "+91 1234567890 (International)",
        "1800-123-4567 (Toll Free)"
      ],
      action: {
        text: "Call Now",
        onClick: () => window.open("tel:+911234567890"),
        variant: "default"
      }
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-nile-600" />,
      title: "WhatsApp",
      details: [
        "+91 1234567890",
        "Available 24/7"
      ],
      action: {
        text: "Message Us",
        onClick: openWhatsApp,
        variant: "green"
      }
    },
    {
      icon: <Mail className="h-8 w-8 text-nile-600" />,
      title: "Email",
      details: [
        "info@nilewellness.com",
        "support@nilewellness.com"
      ],
      action: {
        text: "Email Us",
        onClick: () => window.open("mailto:info@nilewellness.com"),
        variant: "outline"
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-medical-50 to-nile-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Get In Touch With Our Team
                <span className="block text-nile-600 mt-2">We're Here to Help</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about medical treatment in India? Our experienced team is ready to assist you 24/7 with personalized support.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="flex justify-center mb-4">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                    <div className="space-y-1 mb-4">
                      {method.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                    <Button 
                      className={method.action.variant === "green" ? "bg-green-600 hover:bg-green-700 w-full" : 
                              method.action.variant === "outline" ? "border-nile-600 text-nile-600 hover:bg-nile-50 w-full" : 
                              "bg-nile-600 hover:bg-nile-700 w-full"}
                      variant={method.action.variant === "outline" ? "outline" : "default"}
                      onClick={method.action.onClick}
                    >
                      {method.action.text}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="lg:w-1/2 p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and our team will get back to you within 24 hours. For urgent inquiries, please contact us directly via phone or WhatsApp.
                  </p>
                  
                  <form onSubmit={submitForm}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 mb-2 block">Full Name</Label>
                        <Input id="name" placeholder="Enter your full name" required />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700 mb-2 block">Email Address</Label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 mb-2 block">Phone/WhatsApp</Label>
                        <Input id="phone" placeholder="With country code" required />
                      </div>
                      <div>
                        <Label htmlFor="country" className="text-gray-700 mb-2 block">Country</Label>
                        <Input id="country" placeholder="Your country" required />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <Label htmlFor="inquiry-type" className="text-gray-700 mb-2 block">Inquiry Type</Label>
                      <Select defaultValue="select">
                        <SelectTrigger>
                          <SelectValue placeholder="Select type of inquiry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="select" disabled>Select type of inquiry</SelectItem>
                          <SelectItem value="medical-opinion">Request Medical Opinion</SelectItem>
                          <SelectItem value="treatment-info">Treatment Information</SelectItem>
                          <SelectItem value="cost-estimate">Cost Estimate</SelectItem>
                          <SelectItem value="visa-assistance">Visa & Travel Assistance</SelectItem>
                          <SelectItem value="doctor-appointment">Doctor Appointment</SelectItem>
                          <SelectItem value="other">Other Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="mb-6">
                      <Label htmlFor="message" className="text-gray-700 mb-2 block">Your Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Please describe your inquiry in detail. If medical related, briefly mention your condition."
                        className="min-h-[150px]"
                        required
                      />
                    </div>
                    
                    <div className="flex items-start mb-6">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                          required
                        />
                      </div>
                      <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                        I consent to Nile Wellness processing my data to respond to my inquiry. I understand my data will be handled as described in the privacy policy.
                      </label>
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-nile-600 hover:bg-nile-700 py-6 h-auto text-base"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>Send Message <Send className="ml-2 h-4 w-4" /></>
                      )}
                    </Button>
                  </form>
                </div>
                
                <div className="lg:w-1/2 bg-gradient-to-br from-nile-600 to-medical-700 p-8 md:p-10 text-white">
                  <h3 className="text-2xl font-semibold mb-6">Visit Our Office</h3>
                  
                  <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm mb-8">
                    <div className="flex items-start mb-4">
                      <MapPin className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium mb-1">Our Address</h4>
                        <p className="text-white/80">
                          Nile Wellness International<br />
                          123 Healthcare Avenue<br />
                          Connaught Place, New Delhi<br />
                          India - 110001
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start mb-4">
                      <Clock className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium mb-1">Office Hours</h4>
                        <div className="text-white/80">
                          <div className="grid grid-cols-2 gap-2">
                            <span>Monday - Friday:</span>
                            <span>9:00 AM - 8:00 PM IST</span>
                            <span>Saturday:</span>
                            <span>9:00 AM - 6:00 PM IST</span>
                            <span>Sunday:</span>
                            <span>10:00 AM - 4:00 PM IST</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden shadow-lg mb-8">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.852804247793!2d77.2139149!3d28.631481999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1649795612974!5m2!1sen!2sus" 
                      width="100%" 
                      height="250" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Nile Wellness Office Location"
                    ></iframe>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">International Support</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center bg-white/10 p-3 rounded-lg">
                      <Globe className="h-5 w-5 mr-2 text-white/80" />
                      <span className="text-sm">UAE: +971 5X XXX XXXX</span>
                    </div>
                    <div className="flex items-center bg-white/10 p-3 rounded-lg">
                      <Globe className="h-5 w-5 mr-2 text-white/80" />
                      <span className="text-sm">USA: +1 XXX XXX XXXX</span>
                    </div>
                    <div className="flex items-center bg-white/10 p-3 rounded-lg">
                      <Languages className="h-5 w-5 mr-2 text-white/80" />
                      <span className="text-sm">Arabic Support</span>
                    </div>
                    <div className="flex items-center bg-white/10 p-3 rounded-lg">
                      <Languages className="h-5 w-5 mr-2 text-white/80" />
                      <span className="text-sm">French Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Global Presence</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                With teams and partners in multiple countries, we provide localized support to patients worldwide.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <Building className="h-8 w-8 text-nile-600 mr-3" />
                    <h3 className="text-xl font-semibold">Head Office</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    <strong>New Delhi, India</strong>
                  </p>
                  <p className="text-gray-600 mb-4">
                    Our headquarters coordinates all international operations, hospital partnerships, and treatment planning.
                  </p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-nile-600" />
                      <span>50+ team members</span>
                    </div>
                    <div className="flex items-center">
                      <Languages className="h-4 w-4 mr-2 text-nile-600" />
                      <span>Multiple language support</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-nile-600" />
                      <span>24/7 operations</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <Building className="h-8 w-8 text-nile-600 mr-3" />
                    <h3 className="text-xl font-semibold">Regional Office</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    <strong>Dubai, UAE</strong>
                  </p>
                  <p className="text-gray-600 mb-4">
                    Our Middle East hub serves patients from UAE, Saudi Arabia, Oman, Qatar, Kuwait, and Bahrain.
                  </p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-nile-600" />
                      <span>12+ team members</span>
                    </div>
                    <div className="flex items-center">
                      <Languages className="h-4 w-4 mr-2 text-nile-600" />
                      <span>Arabic, English support</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-nile-600" />
                      <span>In-person consultations</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <Globe className="h-8 w-8 text-nile-600 mr-3" />
                    <h3 className="text-xl font-semibold">Partner Offices</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    <strong>Multiple Locations</strong>
                  </p>
                  <p className="text-gray-600 mb-4">
                    We have partner representation in Nigeria, Kenya, UK, USA, and Australia to provide local assistance.
                  </p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-nile-600" />
                      <span>5+ country presence</span>
                    </div>
                    <div className="flex items-center">
                      <Languages className="h-4 w-4 mr-2 text-nile-600" />
                      <span>Multiple languages</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-nile-600" />
                      <span>Local contact numbers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-nile-600 to-medical-700 rounded-xl overflow-hidden shadow-lg">
                <div className="p-8 md:p-10 text-white text-center">
                  <h2 className="text-3xl font-bold mb-6">Have Urgent Medical Needs?</h2>
                  <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                    Our international patient response team is available 24/7 for emergency medical consultations and urgent treatment planning.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <Phone className="h-12 w-12 mx-auto mb-3 text-white/90" />
                      <h3 className="font-semibold text-xl mb-1">Call Hotline</h3>
                      <p className="text-white/80">+91 9876543210</p>
                      <p className="text-sm text-white/70">24/7 Emergency Line</p>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <MessageCircle className="h-12 w-12 mx-auto mb-3 text-white/90" />
                      <h3 className="font-semibold text-xl mb-1">WhatsApp</h3>
                      <p className="text-white/80">+91 1234567890</p>
                      <p className="text-sm text-white/70">Immediate Response</p>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <Mail className="h-12 w-12 mx-auto mb-3 text-white/90" />
                      <h3 className="font-semibold text-xl mb-1">Email</h3>
                      <p className="text-white/80">urgent@nilewellness.com</p>
                      <p className="text-sm text-white/70">Priority Handling</p>
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-white text-nile-600 hover:bg-gray-100 py-6 px-8 h-auto text-lg"
                    onClick={openWhatsApp}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" /> Contact Our Emergency Team
                  </Button>
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

export default Contact;
