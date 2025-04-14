import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MessageCircle, Play, Calendar, MapPin, HeartPulse, User as UserIcon, Quote, Star, ArrowRight, ChevronRight, ChevronLeft, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const PatientStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Khalid",
      country: "United Arab Emirates",
      treatment: "Heart Valve Replacement",
      hospital: "Apollo Hospitals, Chennai",
      quote: "I was skeptical about medical tourism, but my experience in India exceeded all expectations. The quality of care was world-class, and the cost was 70% less than what I was quoted in my home country. The doctors explained everything clearly, and the staff made me feel comfortable throughout my stay.",
      image: "https://placehold.co/400x400/medical-600/white/?text=Ahmed+K",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      country: "United Kingdom",
      treatment: "Total Knee Replacement",
      hospital: "Fortis Hospital, Delhi",
      quote: "After being on a 2-year waiting list in the UK, I decided to explore options in India. Within 2 weeks of contacting Nile Wellness, I was in Delhi receiving treatment. The hospital facilities were impressive, and my surgeon had trained at the Royal College in London. My recovery has been remarkable.",
      image: "https://placehold.co/400x400/medical-600/white/?text=Sarah+J",
      rating: 5
    },
    {
      id: 3,
      name: "Omar Farooq",
      country: "Nigeria",
      treatment: "Liver Transplant",
      hospital: "Medanta Hospital, Gurugram",
      quote: "My liver transplant in India was a life-saving decision. The pre-operative care, surgery, and post-operative monitoring were all exceptional. What impressed me most was how the hospital handled everything - from accommodation for my family to dietary requirements. I'm eternally grateful to the medical team.",
      image: "https://placehold.co/400x400/medical-600/white/?text=Omar+F",
      rating: 5
    }
  ];
  
  const videoTestimonials = [
    {
      id: 1,
      name: "Maria Rodriguez",
      country: "Mexico",
      treatment: "IVF Treatment",
      hospital: "Cloudnine Hospital, Bangalore",
      thumbnail: "https://placehold.co/600x400/medical-600/white/?text=Maria+Video+Testimonial",
      videoUrl: "#"
    },
    {
      id: 2,
      name: "John Mwangi",
      country: "Kenya",
      treatment: "Kidney Transplant",
      hospital: "Apollo Hospitals, Delhi",
      thumbnail: "https://placehold.co/600x400/medical-600/white/?text=John+Video+Testimonial",
      videoUrl: "#"
    },
    {
      id: 3,
      name: "Fatima Al-Sayed",
      country: "Saudi Arabia",
      treatment: "Cancer Treatment",
      hospital: "Tata Memorial Hospital, Mumbai",
      thumbnail: "https://placehold.co/600x400/medical-600/white/?text=Fatima+Video+Testimonial",
      videoUrl: "#"
    },
    {
      id: 4,
      name: "Robert Chen",
      country: "Australia",
      treatment: "Spine Surgery",
      hospital: "Max Hospital, Delhi",
      thumbnail: "https://placehold.co/600x400/medical-600/white/?text=Robert+Video+Testimonial",
      videoUrl: "#"
    }
  ];
  
  const successStories = [
    {
      id: 1,
      title: "From Wheelchair to Walking: David's Journey",
      patient: "David Okonkwo",
      country: "Nigeria",
      treatment: "Spinal Fusion Surgery",
      hospital: "Fortis Hospital, Mumbai",
      doctor: "Dr. Sunil Sharma",
      excerpt: "After a severe workplace accident left him unable to walk, David found hope in India's advanced spine surgery options...",
      image: "https://placehold.co/600x400/medical-600/white/?text=David's+Story",
      date: "August 15, 2022"
    },
    {
      id: 2,
      title: "A Mother's Gift: Kidney Donation Success Story",
      patient: "Aisha and Leila Mahmoud",
      country: "Egypt",
      treatment: "Kidney Transplant",
      hospital: "Apollo Hospitals, Chennai",
      doctor: "Dr. Prathap Reddy",
      excerpt: "When Leila's kidneys began failing, her mother Aisha didn't hesitate to become a donor. Their journey to India became a story of hope...",
      image: "https://placehold.co/600x400/medical-600/white/?text=Aisha+and+Leila",
      date: "March 23, 2023"
    },
    {
      id: 3,
      title: "Beating Heart Failure: James's Second Chance",
      patient: "James Wilson",
      country: "United States",
      treatment: "CABG Surgery",
      hospital: "Medanta Hospital, Gurugram",
      doctor: "Dr. Naresh Trehan",
      excerpt: "Facing a 6-month waiting list and a $200,000 bill in the US, James found a new lease on life with heart surgery in India...",
      image: "https://placehold.co/600x400/medical-600/white/?text=James's+Story",
      date: "May 7, 2023"
    },
    {
      id: 4,
      title: "The Miracle Baby: Emma & Michael's IVF Success",
      patient: "Emma and Michael Brown",
      country: "Australia",
      treatment: "IVF Treatment",
      hospital: "Cloudnine Hospital, Bangalore",
      doctor: "Dr. Priti Gupta",
      excerpt: "After 4 failed IVF cycles in Australia, this couple's journey to India resulted in the family they had always dreamed of...",
      image: "https://placehold.co/600x400/medical-600/white/?text=Emma+and+Michael",
      date: "January 12, 2023"
    },
    {
      id: 5,
      title: "Walking Pain-Free: Ibrahim's Hip Replacement Journey",
      patient: "Ibrahim Al-Farsi",
      country: "Oman",
      treatment: "Hip Replacement",
      hospital: "Max Hospital, Delhi",
      doctor: "Dr. S.K. Rajan",
      excerpt: "Years of osteoarthritis had left Ibrahim unable to walk without severe pain. His journey to India changed everything...",
      image: "https://placehold.co/600x400/medical-600/white/?text=Ibrahim's+Story",
      date: "October 30, 2022"
    },
    {
      id: 6,
      title: "Defeating Cancer: Sophia's Immunotherapy Success",
      patient: "Sophia Mbeki",
      country: "South Africa",
      treatment: "Cancer Immunotherapy",
      hospital: "HCG Cancer Centre, Bangalore",
      doctor: "Dr. Vishal Rao",
      excerpt: "When conventional treatments failed, Sophia found hope in India's cutting-edge immunotherapy options, leading to complete remission...",
      image: "https://placehold.co/600x400/medical-600/white/?text=Sophia's+Story",
      date: "April 18, 2023"
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const openWhatsApp = () => {
    const phoneNumber = "911234567890";
    const message = "Hello, I'd like to learn more about treatments in India after reading patient stories.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-medical-50 to-nile-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Real Patient Stories & Testimonials
                <span className="block text-nile-600 mt-2">Life-Changing Medical Journeys in India</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover how patients from around the world found healing, hope, and exceptional care at a fraction of the cost.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  className="bg-nile-600 hover:bg-nile-700"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> Share Your Story With Us
                </Button>
                <Link to="/free-opinion">
                  <Button 
                    variant="outline"
                    className="border-nile-600 text-nile-600 hover:bg-nile-50 w-full sm:w-auto"
                  >
                    Get Your Free Opinion
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="relative max-w-5xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">Featured Patient Testimonials</h2>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full"
                    onClick={prevSlide}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full"
                    onClick={nextSlide}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <div className="overflow-hidden rounded-xl">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div 
                      key={testimonial.id}
                      className="w-full flex-shrink-0 bg-white shadow-lg rounded-xl overflow-hidden"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 bg-gradient-to-br from-nile-600 to-medical-700 text-white p-6">
                          <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white/30">
                              <img 
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                            <div className="flex items-center mt-1 mb-3">
                              <MapPin className="h-4 w-4 opacity-70 mr-1" />
                              <span className="text-white/80 text-sm">{testimonial.country}</span>
                            </div>
                            <div className="space-y-2 mt-2">
                              <div className="flex items-center">
                                <HeartPulse className="h-4 w-4 opacity-70 mr-2" />
                                <span className="text-white/90 text-sm">{testimonial.treatment}</span>
                              </div>
                              <div className="flex items-center">
                                <Building2 className="h-4 w-4 opacity-70 mr-2" />
                                <span className="text-white/90 text-sm">{testimonial.hospital}</span>
                              </div>
                            </div>
                            <div className="flex mt-4">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i}
                                  className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-white/30'}`}
                                  fill={i < testimonial.rating ? 'currentColor' : 'none'}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="md:w-2/3 p-8">
                          <Quote className="h-10 w-10 text-gray-200 mb-4" />
                          <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            "{testimonial.quote}"
                          </p>
                          <Button 
                            className="bg-nile-600 hover:bg-nile-700"
                            onClick={openWhatsApp}
                          >
                            <MessageCircle className="mr-2 h-4 w-4" /> Ask About Similar Treatment
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentSlide === index ? 'bg-nile-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Video Testimonials</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Watch patients share their first-hand experiences of medical treatment in India
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {videoTestimonials.map((video) => (
                <div 
                  key={video.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img 
                      src={video.thumbnail}
                      alt={`${video.name} video testimonial`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                        <Play className="h-8 w-8 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-xl mb-1">{video.name}</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{video.country}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <div className="flex items-center text-nile-600 mb-2 sm:mb-0">
                        <HeartPulse className="h-4 w-4 mr-1" />
                        <span>{video.treatment}</span>
                      </div>
                      <div className="text-gray-500 text-sm">
                        {video.hospital}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button className="bg-nile-600 hover:bg-nile-700">
                View More Video Testimonials
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Patient Success Stories</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Detailed stories of healing journeys and remarkable recoveries
              </p>
            </div>
            
            <Tabs defaultValue="all" className="w-full max-w-5xl mx-auto">
              <div className="flex justify-center mb-6">
                <TabsList className="h-auto p-1">
                  <TabsTrigger 
                    value="all"
                    className="rounded-md py-2 px-4 data-[state=active]:bg-nile-600"
                  >
                    All Stories
                  </TabsTrigger>
                  <TabsTrigger 
                    value="cardiac"
                    className="rounded-md py-2 px-4 data-[state=active]:bg-nile-600"
                  >
                    Cardiac
                  </TabsTrigger>
                  <TabsTrigger 
                    value="orthopedic"
                    className="rounded-md py-2 px-4 data-[state=active]:bg-nile-600"
                  >
                    Orthopedic
                  </TabsTrigger>
                  <TabsTrigger 
                    value="transplant"
                    className="rounded-md py-2 px-4 data-[state=active]:bg-nile-600"
                  >
                    Transplant
                  </TabsTrigger>
                  <TabsTrigger 
                    value="fertility"
                    className="rounded-md py-2 px-4 data-[state=active]:bg-nile-600"
                  >
                    Fertility
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {successStories.map((story) => (
                    <div 
                      key={story.id}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                      <img 
                        src={story.image}
                        alt={story.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{story.date}</span>
                          <span className="mx-2">•</span>
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{story.country}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{story.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{story.excerpt}</p>
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center text-gray-500 text-sm">
                            <UserIcon className="h-4 w-4 mr-1" />
                            <span>{story.patient}</span>
                          </div>
                          <div className="flex items-center text-nile-600 text-sm">
                            <HeartPulse className="h-4 w-4 mr-1" />
                            <span>{story.treatment}</span>
                          </div>
                        </div>
                        <Link to={`/patient-stories/${story.id}`} className="inline-block">
                          <Button className="w-full bg-nile-600 hover:bg-nile-700">
                            Read Full Story <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cardiac">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {successStories.filter(story => 
                    story.treatment.toLowerCase().includes('heart') || 
                    story.treatment.toLowerCase().includes('cabg') ||
                    story.treatment.toLowerCase().includes('cardiac')
                  ).map((story) => (
                    <div 
                      key={story.id}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                      <img 
                        src={story.image}
                        alt={story.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{story.date}</span>
                          <span className="mx-2">•</span>
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{story.country}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{story.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{story.excerpt}</p>
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center text-gray-500 text-sm">
                            <UserIcon className="h-4 w-4 mr-1" />
                            <span>{story.patient}</span>
                          </div>
                          <div className="flex items-center text-nile-600 text-sm">
                            <HeartPulse className="h-4 w-4 mr-1" />
                            <span>{story.treatment}</span>
                          </div>
                        </div>
                        <Link to={`/patient-stories/${story.id}`} className="inline-block">
                          <Button className="w-full bg-nile-600 hover:bg-nile-700">
                            Read Full Story <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="orthopedic">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {successStories.filter(story => 
                    story.treatment.toLowerCase().includes('hip') || 
                    story.treatment.toLowerCase().includes('knee') ||
                    story.treatment.toLowerCase().includes('spine') ||
                    story.treatment.toLowerCase().includes('orthopedic')
                  ).map((story) => (
                    <div 
                      key={story.id}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                      <img 
                        src={story.image}
                        alt={story.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{story.date}</span>
                          <span className="mx-2">•</span>
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{story.country}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{story.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{story.excerpt}</p>
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center text-gray-500 text-sm">
                            <UserIcon className="h-4 w-4 mr-1" />
                            <span>{story.patient}</span>
                          </div>
                          <div className="flex items-center text-nile-600 text-sm">
                            <HeartPulse className="h-4 w-4 mr-1" />
                            <span>{story.treatment}</span>
                          </div>
                        </div>
                        <Link to={`/patient-stories/${story.id}`} className="inline-block">
                          <Button className="w-full bg-nile-600 hover:bg-nile-700">
                            Read Full Story <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="py-12 bg-nile-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Share Your Medical Journey</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Your story can inspire and help others who are considering medical treatment in India.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Why Share Your Story?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-nile-100 flex items-center justify-center text-nile-600 mr-3 flex-shrink-0 mt-0.5">
                          <span className="text-sm font-medium">1</span>
                        </div>
                        <span className="text-gray-700">Inspire others facing similar health challenges</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-nile-100 flex items-center justify-center text-nile-600 mr-3 flex-shrink-0 mt-0.5">
                          <span className="text-sm font-medium">2</span>
                        </div>
                        <span className="text-gray-700">Help patients make informed decisions about medical tourism</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-nile-100 flex items-center justify-center text-nile-600 mr-3 flex-shrink-0 mt-0.5">
                          <span className="text-sm font-medium">3</span>
                        </div>
                        <span className="text-gray-700">Provide authentic feedback that improves care for future patients</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-nile-100 flex items-center justify-center text-nile-600 mr-3 flex-shrink-0 mt-0.5">
                          <span className="text-sm font-medium">4</span>
                        </div>
                        <span className="text-gray-700">Celebrate your healing journey and medical success</span>
                      </li>
                    </ul>
                    
                    <div className="mt-8">
                      <Button 
                        className="bg-nile-600 hover:bg-nile-700"
                        onClick={openWhatsApp}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" /> Contact Us to Share Your Story
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">How to Participate</h3>
                    <p className="text-gray-600 mb-4">
                      We offer multiple ways to share your experience:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-md shadow-sm">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Quote className="h-5 w-5 text-nile-600 mr-2" />
                          Written Testimonial
                        </h4>
                        <p className="text-sm text-gray-600">
                          Send us your written account of your treatment experience in India.
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md shadow-sm">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Play className="h-5 w-5 text-nile-600 mr-2" />
                          Video Testimonial
                        </h4>
                        <p className="text-sm text-gray-600">
                          Record a short video sharing your journey and results. We can help with the recording.
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md shadow-sm">
                        <h4 className="font-medium mb-2 flex items-center">
                          <UserIcon className="h-5 w-5 text-nile-600 mr-2" />
                          Feature Story
                        </h4>
                        <p className="text-sm text-gray-600">
                          Allow us to create a detailed feature about your medical journey from diagnosis to recovery.
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-500 mt-6">
                      Note: Your privacy is our priority. We only share your story with your explicit permission.
                    </p>
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

export default PatientStories;
