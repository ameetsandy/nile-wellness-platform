
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TopTreatments = () => {
  const treatments = [
    {
      title: "Heart Bypass Surgery (CABG)",
      image: "https://placehold.co/300x300/nile-600/white/?text=Heart",
      path: "/treatments/heart-bypass",
      description: "Restore blood flow to your heart"
    },
    {
      title: "Knee & Hip Replacement",
      image: "https://placehold.co/300x300/nile-600/white/?text=Knee",
      path: "/treatments/knee-hip-replacement",
      description: "Regain mobility and relieve pain"
    },
    {
      title: "Spine Surgery",
      image: "https://placehold.co/300x300/nile-600/white/?text=Spine",
      path: "/treatments/spine-surgery",
      description: "Advanced spine treatments & rehabilitation"
    },
    {
      title: "Liver Transplant",
      image: "https://placehold.co/300x300/nile-600/white/?text=Liver",
      path: "/treatments/liver-transplant",
      description: "Life-saving liver transplant procedures"
    },
    {
      title: "Cancer Treatment",
      image: "https://placehold.co/300x300/nile-600/white/?text=Cancer",
      path: "/treatments/cancer",
      description: "Comprehensive oncology care"
    },
    {
      title: "IVF & Fertility",
      image: "https://placehold.co/300x300/nile-600/white/?text=IVF",
      path: "/treatments/ivf-fertility",
      description: "Fulfill your dreams of parenthood"
    },
    {
      title: "Bariatric Surgery",
      image: "https://placehold.co/300x300/nile-600/white/?text=Bariatric",
      path: "/treatments/bariatric-surgery",
      description: "Sustainable weight loss solutions"
    },
    {
      title: "Dental & Eye Care",
      image: "https://placehold.co/300x300/nile-600/white/?text=Dental",
      path: "/treatments/dental-eye-care",
      description: "Specialized dental and vision care"
    }
  ];

  return (
    <section className="section-container bg-gray-50">
      <h2 className="section-title">Most Searched Treatments in India</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {treatments.map((treatment, index) => (
          <Link 
            key={index}
            to={treatment.path}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
          >
            <div className="overflow-hidden">
              <img 
                src={treatment.image}
                alt={treatment.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-nile-600 transition-colors">
                {treatment.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{treatment.description}</p>
              <div className="mt-auto flex items-center text-nile-600 font-medium text-sm">
                <span>Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          to="/treatments"
          className="inline-flex items-center gap-2 text-nile-600 hover:text-nile-700 font-medium"
        >
          View all treatments
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default TopTreatments;
