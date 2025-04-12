
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default
  
  const faqs = [
    {
      question: "How do I send my reports?",
      answer: "You can send your medical reports via WhatsApp or secure upload form. All reports are reviewed by our medical team within 24 hours."
    },
    {
      question: "Is the consultation really free?",
      answer: "Yes, we provide 100% free consultation. No hidden fees. Our goal is to help you make an informed decision about your treatment options in India."
    },
    {
      question: "How fast can I get a visa?",
      answer: "Usually within 3–5 working days. We assist with hospital invitation letter and all necessary documentation required for a medical visa to India."
    },
    {
      question: "What is the cost of top treatments?",
      answer: (
        <div className="space-y-2">
          <p>Here are approximate costs for common procedures:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Heart Bypass Surgery – $3,000 to $5,000</li>
            <li>Knee Replacement – $4,000 per knee</li>
            <li>Cancer Treatment – From $2,500</li>
            <li>Kidney Transplant – $12,000</li>
            <li>IVF – $3,000 to $4,500</li>
          </ul>
          <p className="text-sm italic text-gray-500 mt-2">
            *Costs may vary based on hospital, doctor, and specific patient requirements
          </p>
        </div>
      )
    },
    {
      question: "Can I bring a family member with me?",
      answer: "Yes, hospitals allow one attendant. We help with accommodation arrangements for both patients and accompanying family members."
    }
  ];

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <section className="section-container bg-gray-50">
      <h2 className="section-title">Common Questions, Clear Answers</h2>
      
      <div className="max-w-3xl mx-auto mt-10">
        <div className="divide-y divide-gray-200 rounded-xl overflow-hidden shadow-md bg-white">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white">
              <button
                className="flex justify-between items-center w-full text-left p-6"
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.includes(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-4">
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-nile-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-nile-600" />
                  )}
                </div>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.includes(index) 
                    ? 'max-h-96 pb-6' 
                    : 'max-h-0'
                }`}
              >
                <div className="text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Have more questions? We're here to help.
        </p>
        <button 
          className="mt-4 cta-primary"
          onClick={() => {
            const phoneNumber = "911234567890";
            const message = "I have questions about medical treatment in India.";
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
          }}
        >
          Ask Us Anything
        </button>
      </div>
    </section>
  );
};

export default FAQ;
