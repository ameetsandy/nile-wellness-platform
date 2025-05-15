import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Quote, X } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  
  const testimonials = [
    {
      id: 1,
      name: "Tatiana Nazarbekova",
      country: "Uzbekistan",
      text: "Got back on feet fast with Fortis' expert spine team. Affordable & safe.",
      image: "https://i.postimg.cc/sfLnzFfn/Tatiana-Nazarbekova-Uzbekistan.png",
      flag: "https://flagcdn.com/w40/uz.png",
      headline: "Quick Spine Surgery in India",
      summary: "Got back on feet fast with Fortis' expert spine team. Affordable & safe.",
      treatment: "Spinal Fusion Surgery",
      treatmentHead: "Spinal Surgery",
      hospital: "Fortis Hospital",
      date: "August 16, 2023"
    },
    {
      id: 2,
      name: "Abdul Juma",
      country: "Tanzania",
      text: "Great staff & low cost. Best decision for mobility & health.",
      image: "https://i.postimg.cc/BvNgwkwB/Abdul-Juma-Knee-Replacement-patient-from-Tanzania.png",
      flag: "https://flagcdn.com/w40/tz.png",
      headline: "Tanzania to Max for Knee Fix",
      summary: "Great staff & low cost. Best decision for mobility & health.",
      treatment: "Knee Replacement",
      treatmentHead: "Knee Replacement",
      hospital: "Max Hospital",
      date: "October 27, 2023"
    },
    {
      id: 3,
      name: "Sunieta Patel",
      country: "United Kingdom",
      text: "Delighted with speedy recovery & excellent care at Fortis Hospital.",
      image: "https://i.postimg.cc/x8N38Cj6/Sunieta-Patel.png",
      flag: "https://flagcdn.com/w40/gb.png",
      headline: "Knee Surgery in 7 Days, UK to India",
      summary: "Delighted with speedy recovery & excellent care at Fortis Hospital.",
      treatment: "Total Knee Replacement",
      treatmentHead: "Knee Replacement",
      hospital: "Fortis Hospital",
      date: "January 14, 2024"
    },
    {
      id: 4,
      name: "Amina Osman",
      country: "Kenya",
      text: "Fast, safe & cost-effective care at Medanta. Trusted team!",
      image: "https://i.postimg.cc/tCP8mRdd/Amina-Osman-Kenya.png",
      flag: "https://flagcdn.com/w40/ke.png",
      headline: "Life-Saving Liver Transplant in 8 Days",
      summary: "Fast, safe & cost-effective care at Medanta. Trusted team!",
      treatment: "Liver Transplant",
      treatmentHead: "Liver Transplant",
      hospital: "Medanta Hospital",
      date: "July 19, 2023"
    },
    {
      id: 5,
      name: "Lensa Tadesse",
      country: "Ethiopia",
      text: "Affordable, expert-led transplant saved my life. Smooth & quick process.",
      image: "https://i.postimg.cc/T307ZKKb/Lensa-Tadesse.png",
      flag: "https://flagcdn.com/w40/et.png",
      headline: "Liver Transplant Done in 10 Days",
      summary: "Affordable, expert-led transplant saved my life. Smooth & quick process.",
      treatment: "Liver Transplant",
      treatmentHead: "Liver Transplant",
      hospital: "Apollo Hospital",
      date: "March 27, 2025"
    },
    {
      id: 6,
      name: "Ivan Kabuye",
      country: "Uganda",
      text: "I walk pain-free now. Quick, professional care at Max Hospital.",
      image: "https://i.postimg.cc/gJXgX4Ny/Ivan-Kabuye.png",
      flag: "https://flagcdn.com/w40/ug.png",
      headline: "Hip Surgery That Changed My Life",
      summary: "I walk pain-free now. Quick, professional care at Max Hospital.",
      treatment: "Orthopedic Surgery - Hip Replacement",
      treatmentHead: "Orthopedic Surgery",
      hospital: "Max Hospital",
      date: "June 24, 2023"
    },
    {
      id: 7,
      name: "Tinashe Moyo",
      country: "Zimbabwe",
      text: "Excellent cancer care at Apollo. Very thankful for their expert help.",
      image: "https://i.postimg.cc/t4BkB8ct/Tinashe-Moyo-Zimbabwe.png",
      flag: "https://flagcdn.com/w40/zw.png",
      headline: "BMT in India Changed My Future",
      summary: "Excellent cancer care at Apollo. Very thankful for their expert help.",
      treatment: "Bone Marrow Transplant",
      treatmentHead: "Cancer Treatment",
      hospital: "Apollo Hospital",
      date: "July 20, 2023"
    },
    {
      id: 8,
      name: "Mwansa Phiri",
      country: "Zambia",
      text: "Fast recovery, expert oncology care, and compassionate team.",
      image: "https://i.postimg.cc/WzcwDVDj/Mwansa-Phiri.png",
      flag: "https://flagcdn.com/w40/zm.png",
      headline: "Lung Cancer Treated in Budget",
      summary: "Fast recovery, expert oncology care, and compassionate team.",
      treatment: "Lung Cancer Treatment",
      treatmentHead: "Cancer Treatment",
      hospital: "Max Hospital",
      date: "September 02, 2024"
    },
    {
      id: 9,
      name: "Ahmed Al-Shamsi",
      country: "Maldives",
      text: "Quick diagnosis, cost saved & expert team made it stress-free.",
      image: "https://i.postimg.cc/wBtX0MLg/Ahmed-Al-Shamsi-Oman.png",
      flag: "https://flagcdn.com/w40/mv.png",
      headline: "Maldives to India for Heart Surgery",
      summary: "Quick diagnosis, cost saved & expert team made it stress-free.",
      treatment: "Heart Valve Replacement",
      treatmentHead: "Cardiology Treatments",
      hospital: "Fortis Hospital",
      date: "October 04, 2024"
    },
    {
      id: 10,
      name: "Abena Osei",
      country: "Ghana",
      text: "Painless & professional treatment at Fortis. Truly grateful!",
      image: "https://i.postimg.cc/RZHyyScQ/Abena-Osei.png",
      flag: "https://flagcdn.com/w40/gh.png",
      headline: "Prostate Cancer Cured Affordably",
      summary: "Painless & professional treatment at Fortis. Truly grateful!",
      treatment: "Prostate Cancer Treatment",
      treatmentHead: "Cancer Treatment",
      hospital: "Fortis Hospital",
      date: "November 19, 2024"
    },
    {
      id: 11,
      name: "Tanvir Rahman",
      country: "Bangladesh",
      text: "Amazing support, fast surgery & affordable costs at Max.",
      image: "https://i.postimg.cc/vZK9gyjj/Tanvir-Rahman.png",
      flag: "https://flagcdn.com/w40/bd.png",
      headline: "Liver Cancer Surgery: Smooth & Safe",
      summary: "Amazing support, fast surgery & affordable costs at Max.",
      treatment: "Liver Cancer Treatment",
      treatmentHead: "Cancer Treatment",
      hospital: "Max Hospital",
      date: "May 25, 2023"
    },
    {
      id: 12,
      name: "Eric Nshimiyimana",
      country: "Rwanda",
      text: "Thankful to Fortis for great care & comfort. Back to work fast!",
      image: "https://i.postimg.cc/t4snHfTz/Eric-Nshimiyimana.png",
      flag: "https://flagcdn.com/w40/rw.png",
      headline: "Disc Replacement, 6-Day Recovery",
      summary: "Thankful to Fortis for great care & comfort. Back to work fast!",
      treatment: "Spinal Disc Replacement",
      treatmentHead: "Spinal Surgery",
      hospital: "Fortis Hospital",
      date: "March 01, 2024"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleReadFullStory = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <section className="section-container">
      <h2 className="section-title">What Our Patients Say About Nile Wellness</h2>
      
      <div className="mt-10 relative">
        <div className="max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-nile-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-nile-600" />
          </button>
          
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl shadow-md p-6 md:p-8 text-center relative">
                    <p className="text-gray-600 text-lg mt-6 mb-6 min-h-[4.5rem] flex items-center justify-center">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-center">
                      <div className="mr-4 relative">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <img 
                          src={testimonial.flag}
                          alt={`${testimonial.country} flag`}
                          className="absolute -bottom-1 -right-1 w-6 h-4 border border-white rounded-sm"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">from {testimonial.country}</p>
                      </div>
                    </div>
                    <button 
                      className="mt-6 inline-flex items-center text-nile-600 hover:text-nile-700 text-sm font-medium"
                      onClick={() => handleReadFullStory(testimonial)}
                    >
                      <MessageCircle className="mr-1 h-4 w-4" />
                      Read Full Story
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6 md:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? 'bg-nile-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Modal for Full Story */}
      {modalOpen && selectedTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={closeModal}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col items-center">
              <img
                src={selectedTestimonial.image}
                alt={selectedTestimonial.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-1">{selectedTestimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{selectedTestimonial.country}</p>
              {selectedTestimonial.headline && (
                <h4 className="text-lg font-semibold text-nile-600 mb-2">{selectedTestimonial.headline}</h4>
              )}
              {selectedTestimonial.summary && (
                <p className="text-gray-700 mb-2">{selectedTestimonial.summary}</p>
              )}
              {selectedTestimonial.treatment && (
                <p className="text-gray-600 mb-1"><span className="font-semibold">Treatment:</span> {selectedTestimonial.treatment}</p>
              )}
              {selectedTestimonial.treatmentHead && (
                <p className="text-gray-600 mb-1"><span className="font-semibold">Treatment Head:</span> {selectedTestimonial.treatmentHead}</p>
              )}
              {selectedTestimonial.hospital && (
                <p className="text-gray-600 mb-1"><span className="font-semibold">Hospital:</span> {selectedTestimonial.hospital}</p>
              )}
              {selectedTestimonial.date && (
                <p className="text-gray-500 mb-2"><span className="font-semibold">Date:</span> {selectedTestimonial.date}</p>
              )}
              <div className="mt-4">
                <Quote className="h-8 w-8 text-gray-200 mb-2 mx-auto" />
                <p className="text-gray-700 italic">"{selectedTestimonial.text}"</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
