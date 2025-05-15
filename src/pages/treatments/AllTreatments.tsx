import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Bone, Brain, Microscope, Activity, Baby, Eye, Smile, Phone, MessageCircle, Clock, CircleDollarSign } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const AllTreatments = () => {
  const treatmentCategories = [
    {
      id: "cardiac",
      name: "Cardiac Procedures",
      icon: <Heart className="h-6 w-6 text-red-500" />,
      treatments: [
        { name: "Heart Bypass Surgery (CABG)", path: "/treatments/heart-bypass" },
        { name: "Valve Replacement", path: "#" },
        { name: "Angioplasty & Stenting", path: "#" },
        { name: "Pacemaker Implantation", path: "#" },
        { name: "Heart Transplant", path: "#" }
      ]
    },
    {
      id: "orthopedic",
      name: "Orthopedic Procedures",
      icon: <Bone className="h-6 w-6 text-amber-600" />,
      treatments: [
        { name: "Knee Replacement", path: "/treatments/knee-replacement" },
        { name: "Hip Replacement", path: "/treatments/hip-replacement" },
        { name: "Spine Surgery", path: "/treatments/spine-surgery" },
        { name: "Shoulder Replacement", path: "#" },
        { name: "Sports Injury Treatment", path: "#" }
      ]
    },
    {
      id: "neuro",
      name: "Neurosurgery & Neurology",
      icon: <Brain className="h-6 w-6 text-indigo-600" />,
      treatments: [
        { name: "Brain Tumor Surgery", path: "/treatments/brain-surgery" },
        { name: "Spine Surgery", path: "/treatments/spine-surgery" },
        { name: "Deep Brain Stimulation", path: "#" },
        { name: "Epilepsy Surgery", path: "#" },
        { name: "Stroke Treatment", path: "#" }
      ]
    },
    {
      id: "oncology",
      name: "Cancer Treatment",
      icon: <Microscope className="h-6 w-6 text-purple-600" />,
      treatments: [
        { name: "Cancer Surgery", path: "/treatments/cancer-treatment" },
        { name: "Chemotherapy", path: "#" },
        { name: "Radiation Therapy", path: "#" },
        { name: "Immunotherapy", path: "#" },
        { name: "Bone Marrow Transplant", path: "#" }
      ]
    },
    {
      id: "transplant",
      name: "Transplants",
      icon: <Activity className="h-6 w-6 text-green-600" />,
      treatments: [
        { name: "Kidney Transplant", path: "/treatments/kidney-transplant" },
        { name: "Liver Transplant", path: "/treatments/liver-transplant" },
        { name: "Heart Transplant", path: "#" },
        { name: "Bone Marrow Transplant", path: "#" },
        { name: "Corneal Transplant", path: "#" }
      ]
    },
    {
      id: "fertility",
      name: "Fertility & Women's Health",
      icon: <Baby className="h-6 w-6 text-pink-500" />,
      treatments: [
        { name: "IVF Treatment", path: "/treatments/ivf-fertility" },
        { name: "ICSI", path: "#" },
        { name: "Egg Freezing", path: "#" },
        { name: "Gynecological Surgery", path: "#" },
        { name: "Endometriosis Treatment", path: "#" }
      ]
    },
    {
      id: "bariatric",
      name: "Bariatric & Metabolic",
      icon: <Activity className="h-6 w-6 text-orange-500" />,
      treatments: [
        { name: "Gastric Bypass", path: "/treatments/bariatric-surgery" },
        { name: "Sleeve Gastrectomy", path: "#" },
        { name: "Gastric Banding", path: "#" },
        { name: "Mini Gastric Bypass", path: "#" },
        { name: "Metabolic Surgery", path: "#" }
      ]
    },
    {
      id: "eyecare",
      name: "Eye Care",
      icon: <Eye className="h-6 w-6 text-blue-500" />,
      treatments: [
        { name: "Cataract Surgery", path: "/treatments/eye-care" },
        { name: "LASIK", path: "#" },
        { name: "Glaucoma Treatment", path: "#" },
        { name: "Retinal Surgery", path: "#" },
        { name: "Corneal Transplant", path: "#" }
      ]
    },
    {
      id: "dental",
      name: "Dental Procedures",
      icon: <Smile className="h-6 w-6 text-cyan-500" />,
      treatments: [
        { name: "Dental Implants", path: "/treatments/dental-implants" },
        { name: "Full Mouth Rehabilitation", path: "#" },
        { name: "Cosmetic Dentistry", path: "#" },
        { name: "Root Canal Treatment", path: "#" },
        { name: "Dental Crowns & Bridges", path: "#" }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Medical Treatments in India
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                World-class healthcare at affordable prices with personalized care and support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700">
                  <MessageCircle className="mr-2 h-5 w-5" /> Get Free Medical Opinion
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:text-blue-700">
                  <Phone className="mr-2 h-5 w-5" /> Speak to Medical Expert
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Treatments */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Most Popular Medical Procedures</h2>
            <div className="relative max-w-7xl mx-auto">
              {/* Arrow Buttons (overlapping cards) */}
              <button
                type="button"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2 border border-gray-200"
                style={{ left: '-20px' }}
                aria-label="Scroll left"
                onClick={() => {
                  document.getElementById('popular-treatments-scroll')?.scrollBy({ left: -350, behavior: 'smooth' });
                }}
              >
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left text-nile-600"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button
                type="button"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2 border border-gray-200"
                style={{ right: '-20px' }}
                aria-label="Scroll right"
                onClick={() => {
                  document.getElementById('popular-treatments-scroll')?.scrollBy({ left: 350, behavior: 'smooth' });
                }}
              >
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right text-nile-600"><path d="M9 18l6-6-6-6"/></svg>
              </button>
              {/* Horizontal Scrollable Treatments */}
              <div
                id="popular-treatments-scroll"
                className="flex overflow-x-auto gap-8 scroll-smooth pb-4 hide-scrollbar"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                {/* Treatment Cards - previous style restored */}
                {[
                  {
                    name: 'Heart Bypass Surgery',
                    path: '/treatments/heart-bypass',
                    icon: <Heart className="h-5 w-5 text-red-500" />,
                    desc: 'Restore blood flow to your heart with world-class cardiac care at a fraction of Western costs.',
                    save: 'Save up to 90%'
                  },
                  {
                    name: 'Knee Replacement',
                    path: '/treatments/knee-replacement',
                    icon: <Bone className="h-5 w-5 text-amber-600" />,
                    desc: 'Regain mobility and relieve pain with advanced joint replacement surgery by top orthopedic surgeons.',
                    save: 'Save up to 85%'
                  },
                  {
                    name: 'Hip Replacement',
                    path: '/treatments/hip-replacement',
                    icon: <Bone className="h-5 w-5 text-amber-600" />,
                    desc: 'Get back to active living with minimally invasive hip replacement by leading specialists.',
                    save: 'Save up to 80%'
                  },
                  {
                    name: 'Knee & Hip Replacement',
                    path: '/treatments/knee-hip-replacement',
                    icon: <Bone className="h-5 w-5 text-amber-600" />,
                    desc: 'Comprehensive joint replacement solutions for knees and hips with rapid recovery.',
                    save: 'Save up to 80%'
                  },
                  {
                    name: 'Cancer Treatment',
                    path: '/treatments/cancer-treatment',
                    icon: <Microscope className="h-5 w-5 text-purple-600" />,
                    desc: 'Advanced cancer care including surgery, chemotherapy, and radiation at top oncology centers.',
                    save: 'Save up to 75%'
                  },
                  {
                    name: 'Kidney Transplant',
                    path: '/treatments/kidney-transplant',
                    icon: <Activity className="h-5 w-5 text-green-600" />,
                    desc: 'Expert kidney transplant programs with high success rates and affordable packages.',
                    save: 'Save up to 80%'
                  },
                  {
                    name: 'Liver Transplant',
                    path: '/treatments/liver-transplant',
                    icon: <Activity className="h-5 w-5 text-green-600" />,
                    desc: 'Life-saving liver transplants with world-class surgeons and comprehensive care.',
                    save: 'Save up to 80%'
                  },
                  {
                    name: 'Kidney & Liver Transplant',
                    path: '/treatments/kidney-liver-transplant',
                    icon: <Activity className="h-5 w-5 text-green-600" />,
                    desc: 'Combined kidney and liver transplant programs for complex cases.',
                    save: 'Save up to 80%'
                  },
                  {
                    name: 'Spine Surgery',
                    path: '/treatments/spine-surgery',
                    icon: <Bone className="h-5 w-5 text-indigo-600" />,
                    desc: 'Minimally invasive and advanced spine surgeries for pain relief and mobility.',
                    save: 'Save up to 75%'
                  },
                  {
                    name: 'Brain Surgery',
                    path: '/treatments/brain-surgery',
                    icon: <Brain className="h-5 w-5 text-indigo-600" />,
                    desc: 'Expert neurosurgeons for brain tumor, epilepsy, and other brain conditions.',
                    save: 'Save up to 75%'
                  },
                  {
                    name: 'Spine & Brain Surgery',
                    path: '/treatments/spine-brain-surgery',
                    icon: <Brain className="h-5 w-5 text-indigo-600" />,
                    desc: 'Comprehensive neuro and spine surgery care for complex cases.',
                    save: 'Save up to 75%'
                  },
                  {
                    name: 'IVF & Fertility',
                    path: '/treatments/ivf-fertility',
                    icon: <Baby className="h-5 w-5 text-pink-500" />,
                    desc: 'Build your family with high success rate IVF procedures and personalized fertility care.',
                    save: 'Save up to 80%'
                  },
                  {
                    name: 'Bariatric Surgery',
                    path: '/treatments/bariatric-surgery',
                    icon: <Activity className="h-5 w-5 text-orange-500" />,
                    desc: 'Weight loss and metabolic surgery for a healthier, more active life.',
                    save: 'Save up to 70%'
                  },
                ].map((treatment) => (
                  <div
                    key={treatment.name}
                    className="bg-white rounded-xl shadow-lg overflow-hidden min-w-[340px] max-w-xs flex-shrink-0 flex flex-col justify-between"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <div className="h-40 flex items-center justify-center bg-gray-100">
                      <span className="text-3xl font-bold text-gray-300">{treatment.name.split(' ')[0]}</span>
                    </div>
                    <div className="p-6 flex flex-col h-full justify-between">
                      <div className="flex items-center gap-2 mb-3">
                        {treatment.icon}
                        <h3 className="text-xl font-bold text-black">{treatment.name}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{treatment.desc}</p>
                      <div className="mb-4">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">{treatment.save}</span>
                        </div>
                      <Link to={treatment.path}>
                        <Button className="w-full">Learn More</Button>
                      </Link>
                    </div>
                  </div>
              ))}
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Browse Treatments by Category</h2>
            {/* Custom 2-row grid for categories */}
            <div className="w-full max-w-7xl mx-auto">
              {/* Row 1: 5 categories (excluding Neuro & Fertility) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
                {treatmentCategories.filter(cat => !['neuro', 'fertility'].includes(cat.id)).slice(0, 5).map(category => (
                  <div key={category.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4">{category.icon}<span className="font-semibold text-lg">{category.name}</span></div>
                    <div className="flex flex-col gap-3">
                      {category.treatments.map((treatment, idx) => (
                        treatment.path !== '#' ? (
                          <Link
                            key={treatment.name}
                            to={treatment.path}
                            className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition cursor-pointer text-nile-700 font-medium"
                            style={{padding: '0.75rem 1rem'}}
                          >
                            {treatment.name}
                          </Link>
                        ) : (
                          <a
                            key={treatment.name}
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-green-50 hover:bg-green-100 transition cursor-pointer text-green-700 font-medium"
                            style={{padding: '0.75rem 1rem'}}
                          >
                            {treatment.name}
                            <span className="ml-2 text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded">Know More</span>
                          </a>
                        )
                      ))}
                </div>
                  </div>
                ))}
              </div>
              {/* Row 2: 4 categories (Neuro, Fertility, and 2 others) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  ...treatmentCategories.filter(cat => ['neuro', 'fertility'].includes(cat.id)),
                  ...treatmentCategories.filter(cat => !['neuro', 'fertility'].includes(cat.id)).slice(5, 7)
                ].map(category => (
                  <div key={category.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4">{category.icon}<span className="font-semibold text-lg">{category.name}</span></div>
                    <div className="flex flex-col gap-3">
                      {category.treatments.map((treatment, idx) => (
                        treatment.path !== '#' ? (
                          <Link
                            key={treatment.name}
                            to={treatment.path}
                            className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition cursor-pointer text-nile-700 font-medium"
                            style={{padding: '0.75rem 1rem'}}
                          >
                            {treatment.name}
                  </Link>
                        ) : (
                          <a
                            key={treatment.name}
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-green-50 hover:bg-green-100 transition cursor-pointer text-green-700 font-medium"
                            style={{padding: '0.75rem 1rem'}}
                          >
                            {treatment.name}
                            <span className="ml-2 text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded">Know More</span>
                          </a>
                        )
                      ))}
                </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose India */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose India for Medical Treatment?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-nile-600 text-white p-3 rounded-full mb-4">
                    <Activity className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">World-Class Healthcare</h3>
                  <p className="text-gray-700">JCI & NABH accredited hospitals with globally trained doctors and state-of-the-art facilities.</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-nile-600 text-white p-3 rounded-full mb-4">
                    <CircleDollarSign className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Affordable Excellence</h3>
                  <p className="text-gray-700">Save 60-90% on medical procedures compared to US, UK, and European costs.</p>
                </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-nile-600 text-white p-3 rounded-full mb-4">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Personalized Care</h3>
                  <p className="text-gray-700">Dedicated medical coordinators, translators, and support staff for a seamless experience.</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-nile-600 text-white p-3 rounded-full mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">No Waiting Time</h3>
                  <p className="text-gray-700">Immediate appointments and procedures without the long waitlists common in many countries.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-nile-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Not sure which treatment you need?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Our medical experts can review your reports and recommend the best treatment options for your condition.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="bg-green-600 hover:bg-green-700 text-lg py-6">
                <MessageCircle className="mr-2 h-5 w-5" /> Share Your Medical Reports
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-nile-600 text-lg py-6">
                <Phone className="mr-2 h-5 w-5" /> Schedule a Free Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AllTreatments;
