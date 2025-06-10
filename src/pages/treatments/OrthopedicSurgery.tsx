import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Bone, User, Hospital, Calendar, MessageCircle, Phone, CheckCircle, ArrowRight, Shield, DollarSign } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const doctors = [
  {
    name: "Dr Ashok Rajgopal",
    hospital: "Medanta - The Medicity, Gurgaon",
    specialty: "Orthopaedic and Joint Replacement Surgeon",
    designation: "Senior Consultant",
    experience: "50+ Years",
    city: "Gurgaon, India",
    image: "https://www.vaidam.com/sites/default/files/dr_ashok_rajgopal-min.png",
    url: "/doctors/dr-ashok-rajgopal",
    hospitalUrl: "/hospitals/medanta-medicity-gurgaon"
  },
  {
    name: "Dr. IPS Oberoi",
    hospital: "Artemis Hospital, Gurgaon",
    specialty: "Orthopaedic and Joint Replacement Surgeon",
    designation: "Chairman",
    experience: "31+ Years",
    city: "Gurgaon, India",
    image: "https://www.vaidam.com/sites/default/files/dr._ips_oberoi_-_orthopaedics-min.jpg",
    url: "/doctors/dr-ips-oberoi",
    hospitalUrl: "/hospitals/artemis-hospital-gurgaon"
  },
  {
    name: "Dr. C Vijay Bose",
    hospital: "SIMS Hospital, Vadapalani, Chennai",
    specialty: "Orthopaedic and Joint Replacement Surgeon",
    designation: "Director",
    experience: "36+ Years",
    city: "Chennai, India",
    image: "https://d1ea147o02h74h.cloudfront.net/dr._c_vijay_bose-min.jpg",
    url: "/doctors/dr-c-vijay-bose",
    hospitalUrl: "/hospitals/sims-hospital-chennai"
  }
];

const hospitals = [
  {
    name: "Indraprastha Apollo Hospital, New Delhi",
    url: "http://localhost:8081/hospitals/indraprastha-apollo-hospital-new-delhi",
    accreditation: "JCI & NABL Accredited",
    beds: 710,
    established: 1995,
    location: "Sarita Vihar, Delhi Mathura Road New Delhi, 110076",
    about: "Established in 1995, Indraprastha Apollo Hospital in Delhi is part of India's largest healthcare chain. It offers 52 specialties, including Cardiology, Oncology, and Robotic Surgery. With over 1,70,000 heart surgeries, advanced technologies like CyberKnife® and Da Vinci® Robotic Surgical System are used. The facility spans 15 acres with 710 beds.",
    highlights: ["Top consultants", "52 specialties", "Centres of Excellence", "Largest ICU beds"],
    accreditations: ["Accredited by NABH, NABL", "Winner of FICCI Healthcare", "ISO 9001:2015 certification", "Best Hospital Award"],
    image: "https://www.vaidam.com/sites/default/webp/50/files/hospitals/Apollo%20Hospital%20Delhi.webp"
  },
  {
    name: "BLK-Max Super Speciality Hospital, New Delhi",
    url: "http://localhost:8081/hospitals/blk-hospital-new-delhi",
    accreditation: "JCI & NABH Accredited",
    beds: 650,
    established: 1959,
    location: "Pusa Rd, Radha Soami Satsang, Rajendra Place New Delhi, 110005",
    about: "BLK-Max Super Speciality Hospital in New Delhi, a top 10 multi-super speciality hospital in Delhi NCR, offers world-class healthcare with state-of-the-art technology. Accredited by JCI, NABH, and NABL, it has received 45 healthcare awards. Serving 20,000+ international patients annually, it has conducted 130,000 surgeries and treated 440,000 IPD patients.",
    highlights: ["Advanced Surgical Equipment", "24/7 Dialysis Unit", "Renal Medical Emergencies", "Super Religare Laboratory"],
    accreditations: ["JCI, NABH, NABL Accredited", "45 Healthcare Sector Awards", "ET Healthworld, AHPI, HMA", "MEDCON 2016 ASSOCHAM"],
    image: "https://www.vaidam.com/sites/default/files/hospitals/blk_facade-1-min.jpg"
  },
  {
    name: "Fortis Memorial Research Institute, Gurgaon",
    url: "http://localhost:8081/hospitals/fortis-memorial-research-institute-gurgaon",
    accreditation: "JCI & NABH Accredited",
    beds: 300,
    established: 2001,
    location: "Sector - 44, Opposite HUDA City Centre Gurgaon, 122002",
    about: "Welcome to Fortis Memorial Research Institute (FMRI), a leading 310-bed hospital in Gurugram, offering advanced medical care in Neurosciences, Oncology, Cardiac Sciences, and more. With cutting-edge technology and a focus on patient comfort, FMRI ensures a seamless healthcare experience for international patients. Experience world-class treatment at FMRI, in association with Nile Wellness.",
    highlights: ["Advanced equipment", "Skilled surgeons", "High success rate", "Specialized care"],
    accreditations: ["NABH Accreditation", "NABL Accreditation", "JCI Accreditation", "NABH Nursing Excellence"],
    image: "https://www.vaidam.com/sites/default/files/hospitals/fortis-gurgaon-building1_0.jpg"
  }
];

const faqs = [
  {
    treatment: [
  {
    q: "Is robotic surgery available for knee or hip replacement?",
    a: "Yes, top Indian hospitals offer robotic and computer-assisted joint surgeries."
  },
      {
        q: "What type of implants are used in India?",
        a: "FDA/CE-approved implants from reputed brands like Zimmer, Stryker, Johnson & Johnson."
      },
      {
        q: "Do hospitals in India follow international infection protocols?",
        a: "Absolutely. All major hospitals are JCI/NABH certified with strict hygiene standards."
      }
    ],
    recovery: [
  {
    q: "Is post-surgery physiotherapy provided?",
    a: "Yes. Hospitals offer in-patient and out-patient rehab with certified physiotherapists."
  },
  {
    q: "Can I travel soon after the procedure?",
    a: "Most patients can fly within 10–14 days depending on the surgery and healing."
  },
  {
        q: "Is orthopedic surgery in India suitable for older adults?",
        a: "Yes, many elderly international patients undergo successful surgeries with excellent outcomes."
      }
    ],
    logistics: [
      {
        q: "How long do I need to stay in India for orthopedic surgery?",
        a: "Typically 2–3 weeks, including recovery and post-op physiotherapy."
      },
      {
        q: "What documents do I need to bring?",
        a: "Medical reports, X-rays, MRI scans, and a valid passport with medical visa."
      },
      {
        q: "Can I get a second opinion before surgery?",
        a: "Yes, you can share your reports for a free evaluation by our orthopedic experts."
      }
    ]
  }
];

const OrthopedicSurgery = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Orthopedic Surgery in India
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Affordable joint and spine surgery with world-class surgeons.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <Button className="bg-green-600 hover:bg-green-700 text-white text-base py-3 px-6 h-auto">
                    <MessageCircle className="mr-2 h-5 w-5" /> Share Reports for Free Evaluation
                  </Button>
                  <Button variant="outline" className="text-base py-3 px-6 h-auto border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Phone className="mr-2 h-5 w-5" /> Speak to a Coordinator
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="bg-white border border-nile-100 text-nile-700 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm">NABH Accredited</span>
                  <span className="bg-white border border-nile-100 text-nile-700 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm">JCI Certified</span>
                  <span className="bg-white border border-nile-100 text-nile-700 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm">98%+ Success Rate</span>
                </div>
              </div>
              <div className="relative flex items-end lg:justify-end mt-8 lg:mt-0">
                <div className="rounded-xl overflow-hidden shadow-2xl max-w-[500px] mx-auto">
                  <img
                    src="https://i.postimg.cc/kGN4WCd8/Orthopaedic-Surgery.png"
                    alt="Orthopedic Surgery"
                    className="w-full h-[300px] object-contain"
                  />
                </div>
                <span className="absolute -bottom-6 left-0 bg-nile-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg whitespace-nowrap">
                  85% Cost Savings vs Western Countries
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview + Why India */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <Bone className="h-6 w-6 text-nile-600 mr-3" />
                  <h2 className="text-2xl font-bold">What is Orthopedic Surgery?</h2>
                </div>
                <p className="text-gray-700">
                  Orthopedic surgery deals with conditions affecting the bones, joints, ligaments, tendons, and muscles. Common procedures include knee replacement, hip replacement, spinal surgery, arthroscopy, fracture fixation, and sports injury repairs. These surgeries aim to restore mobility, relieve pain, and improve quality of life. Orthopedic surgeons often work in teams alongside physiotherapists and rehabilitation experts for a holistic recovery approach.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <Shield className="h-6 w-6 text-nile-600 mr-3" />
                  <h2 className="text-2xl font-bold">Why Choose India?</h2>
                </div>
                <p className="text-gray-700">
                  India is a preferred destination for orthopedic surgeries due to high success rates, advanced robotic-assisted procedures, and affordable pricing. Indian hospitals are equipped with cutting-edge imaging (MRI, CT, DEXA), modular OTs, and specialized orthopedic recovery wards. Surgeons are internationally trained, with vast experience in complex and minimally invasive procedures. Additionally, India offers pre-travel assistance, multilingual support, fast-tracked medical visas, and up to 85% savings compared to Western countries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison Table */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Cost Comparison</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-lg">
                <thead className="bg-nile-600 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Procedure</th>
                    <th className="py-4 px-6 text-center">India</th>
                    <th className="py-4 px-6 text-center">USA</th>
                    <th className="py-4 px-6 text-center">UK</th>
                    <th className="py-4 px-6 text-center">Thailand</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Knee Replacement (Total)</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$4,000–$6,000</td>
                    <td className="py-4 px-6 text-center">$35,000–$55,000</td>
                    <td className="py-4 px-6 text-center">$25,000–$40,000</td>
                    <td className="py-4 px-6 text-center">$12,000–$15,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Hip Replacement (Total)</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$5,000–$7,500</td>
                    <td className="py-4 px-6 text-center">$40,000–$60,000</td>
                    <td className="py-4 px-6 text-center">$30,000–$45,000</td>
                    <td className="py-4 px-6 text-center">$13,000–$16,000</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Spinal Decompression</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$3,000–$5,000</td>
                    <td className="py-4 px-6 text-center">$30,000–$50,000</td>
                    <td className="py-4 px-6 text-center">$25,000–$40,000</td>
                    <td className="py-4 px-6 text-center">$9,000–$13,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Arthroscopy (Knee/Shoulder)</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$2,000–$3,500</td>
                    <td className="py-4 px-6 text-center">$10,000–$15,000</td>
                    <td className="py-4 px-6 text-center">$8,000–$12,000</td>
                    <td className="py-4 px-6 text-center">$4,000–$6,000</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">ACL Reconstruction</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$2,500–$4,000</td>
                    <td className="py-4 px-6 text-center">$15,000–$25,000</td>
                    <td className="py-4 px-6 text-center">$12,000–$18,000</td>
                    <td className="py-4 px-6 text-center">$5,000–$7,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Top Orthopedic Surgeons */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Orthopedic Surgeons in India</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doc, idx) => (
                <Link 
                  key={idx} 
                  to={doc.url}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 transition-all duration-300"
                >
                  <div className="relative aspect-[2.5/1] bg-white pt-0 pb-4 px-4 flex items-center justify-center">
                    <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-nile-600 text-white py-2 px-3">
                      <span className="text-sm font-medium block text-center">{doc.experience}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold mb-1">{doc.name}</h3>
                    <div className="space-y-1 mb-3">
                      <p className="text-sm text-gray-700 font-medium">{doc.specialty}</p>
                      <p className="text-xs text-gray-500">{doc.hospital}</p>
                      <p className="text-gray-600 text-xs">{doc.city}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 whitespace-nowrap text-xs py-1">
                        <Calendar className="mr-1 h-3 w-3" /> Request Appointment
                      </Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 flex-1 whitespace-nowrap text-xs py-1">
                        <MessageCircle className="mr-1 h-3 w-3" /> WhatsApp
                      </Button>
                    </div>
                    <div className="mt-2 flex items-center justify-center text-nile-600 hover:text-nile-700 font-medium text-xs">
                      View Full Profile
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Top Hospitals */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Orthopedic Hospitals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hospitals.map((hosp, idx) => (
                <Link 
                  key={idx} 
                  to={hosp.url}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 block"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={hosp.image}
                      alt={hosp.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{hosp.name}</h3>
                    <div className="flex items-center mb-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">{hosp.accreditation}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{hosp.location}</p>
                    <Button className="w-full">View Hospital</Button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="tab1">Treatment</TabsTrigger>
                  <TabsTrigger value="tab2">Recovery</TabsTrigger>
                  <TabsTrigger value="tab3">Logistics</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="space-y-4">
                  {faqs[0].treatment.map((faq, idx) => (
                    <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                      <p className="text-gray-700">{faq.a}</p>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="tab2" className="space-y-4">
                  {faqs[0].recovery.map((faq, idx) => (
                    <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                      <p className="text-gray-700">{faq.a}</p>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="tab3" className="space-y-4">
                  {faqs[0].logistics.map((faq, idx) => (
                    <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                      <p className="text-gray-700">{faq.a}</p>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default OrthopedicSurgery; 