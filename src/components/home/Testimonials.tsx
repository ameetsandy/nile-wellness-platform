
import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Quote } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Amina",
      country: "Kenya",
      text: "Got my mother's cancer treatment at 1/4th the cost. The quality of care was excellent and the support team made everything so easy for us.",
      image: "https://placehold.co/150x150/medical-600/white/?text=Amina",
      flag: "https://placehold.co/30x20/black/white/?text=KE"
    },
    {
      id: 2,
      name: "Ahmed",
      country: "Oman",
      text: "Heart surgery in India was smooth, safe & affordable. From airport pickup to the surgery and recovery, everything was well organized.",
      image: "https://placehold.co/150x150/medical-600/white/?text=Ahmed",
      flag: "https://placehold.co/30x20/black/white/?text=OM"
    },
    {
      id: 3,
      name: "Tatiana",
      country: "Uzbekistan",
      text: "I never felt alone thanks to translator and 24x7 support. The doctors were very experienced and I recovered much faster than expected.",
      image: "https://placehold.co/150x150/medical-600/white/?text=Tatiana",
      flag: "https://placehold.co/30x20/black/white/?text=UZ"
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
                    
                    <button className="mt-6 inline-flex items-center text-nile-600 hover:text-nile-700 text-sm font-medium">
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
    </section>
  );
};

export default Testimonials;
