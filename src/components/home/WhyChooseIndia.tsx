
import { Award, DollarSign, Plane } from "lucide-react";

const WhyChooseIndia = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">India Offers World-Class Treatment At 70% Lower Cost</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="bg-white rounded-lg p-8 shadow-md flex flex-col items-center text-center">
          <div className="bg-medical-50 p-4 rounded-full mb-6">
            <Award className="h-12 w-12 text-medical-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Global Quality</h3>
          <p className="text-gray-600">
            Our doctors are trained in top US/UK institutions and utilize the latest medical technology, ensuring international standard care.
          </p>
          <ul className="mt-4 text-left space-y-2">
            <li className="flex items-start">
              <span className="text-medical-600 mr-2">•</span>
              <span>US/UK trained specialists</span>
            </li>
            <li className="flex items-start">
              <span className="text-medical-600 mr-2">•</span>
              <span>International accreditations</span>
            </li>
            <li className="flex items-start">
              <span className="text-medical-600 mr-2">•</span>
              <span>Latest medical equipment</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-md flex flex-col items-center text-center">
          <div className="bg-nile-50 p-4 rounded-full mb-6">
            <DollarSign className="h-12 w-12 text-nile-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Affordable</h3>
          <p className="text-gray-600">
            Get the same quality treatment at up to 70% less cost compared to USA, Europe, and other developed countries.
          </p>
          <ul className="mt-4 text-left space-y-2">
            <li className="flex items-start">
              <span className="text-nile-600 mr-2">•</span>
              <span>Save up to 70% on procedures</span>
            </li>
            <li className="flex items-start">
              <span className="text-nile-600 mr-2">•</span>
              <span>No hidden costs or fees</span>
            </li>
            <li className="flex items-start">
              <span className="text-nile-600 mr-2">•</span>
              <span>Comprehensive treatment packages</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-md flex flex-col items-center text-center">
          <div className="bg-medical-50 p-4 rounded-full mb-6">
            <Plane className="h-12 w-12 text-medical-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Easy Travel</h3>
          <p className="text-gray-600">
            We simplify the entire process with fast medical visas, airport pickups, and multilingual support throughout your stay.
          </p>
          <ul className="mt-4 text-left space-y-2">
            <li className="flex items-start">
              <span className="text-medical-600 mr-2">•</span>
              <span>Fast medical visa assistance</span>
            </li>
            <li className="flex items-start">
              <span className="text-medical-600 mr-2">•</span>
              <span>Airport pickup & accommodation</span>
            </li>
            <li className="flex items-start">
              <span className="text-medical-600 mr-2">•</span>
              <span>Translators in multiple languages</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 px-4 py-5 bg-nile-50 rounded-lg text-center">
        <p className="text-lg font-medium text-gray-800">
          Experience premium healthcare without the premium price tag in India
        </p>
      </div>
    </section>
  );
};

export default WhyChooseIndia;
