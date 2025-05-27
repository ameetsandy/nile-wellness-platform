import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TopTreatments = () => {
  const treatments = [
    {
      title: "Heart Bypass Surgery (CABG)",
      image: "https://i.postimg.cc/BbFJWnxB/Heart-Bypass-Surgery-CABG.png",
      path: "/treatments/heart-bypass",
      description: "Restore blood flow to your heart"
    },
    {
      title: "Knee Replacement",
      image: "	https://i.postimg.cc/tR6b47xh/Knee-Replacement-Surgery.png",
      path: "/treatments/knee-replacement",
      description: "Regain mobility and relieve pain"
    },
    {
      title: "Spine Surgery",
      image: "https://i.postimg.cc/8zPxMCjX/spine-surgery.png",
      path: "/treatments/spine-surgery",
      description: "Advanced spine treatments & rehabilitation"
    },
    {
      title: "Liver Transplant",
      image: "https://i.postimg.cc/MGX22Gwf/liver-transplant.png",
      path: "/treatments/liver-transplant",
      description: "Life-saving liver transplant procedures"
    },
    {
      title: "Kidney Transplant",
      image: "	https://i.postimg.cc/qvw4HYCS/kidney-transplant.png",
      path: "/treatments/kidney-transplant",
      description: "Expert care for end-stage renal disease"
    },
    {
      title: "Dental Implants",
      image: "	https://i.postimg.cc/fRNRNmqt/Dental-Implants.png",
      path: "/treatments/dental-implants",
      description: "Restore your smile with quality implants"
    },
    {
      title: "Bariatric Surgery",
      image: "https://i.postimg.cc/TPKSNHjr/Weight-Loss-Surgery-Bariatric.png",
      path: "/treatments/bariatric-surgery",
      description: "Sustainable weight loss solutions"
    },
    {
      title: "Hip Replacement",
      image: "https://i.postimg.cc/Vs0f0D30/hip-replacement.png",
      path: "/treatments/hip-replacement",
      description: "Advanced joint care for better mobility"
    }
  ];

  return (
    <section className="section-container bg-gray-50">
      <h2 className="section-title">Affordable & Advanced Treatments Across Specialties in India</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {treatments.map((treatment, index) => (
          <Link 
            key={index}
            to={treatment.path}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
          >
            <div className="overflow-hidden bg-white aspect-[4/3]">
              <img 
                src={treatment.image}
                alt={treatment.title}
                className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-base mb-1 group-hover:text-nile-600 transition-colors">
                {treatment.title}
              </h3>
              <p className="text-gray-600 text-xs mb-3">{treatment.description}</p>
              <div className="mt-auto flex items-center text-nile-600 font-medium text-xs">
                <span>Learn more</span>
                <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          to="/treatments/all"
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
