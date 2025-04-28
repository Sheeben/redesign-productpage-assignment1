import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Container from '../../../components/ui/Container';



interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border--200 py-5">
      <button
        className="flex w-full justify-between items-center text-left"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-purple-500">{question}</h3>
        <span className="ml-6 flex-shrink-0 ">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-purple-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 pr-12">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const HomeFAQ: React.FC = () => {
  const faqs = [
    {
      question: "How does GoGetWell-ai's AI technology work?",
      answer: "Our AI technology analyzes your health data from various sources, including wearable devices, manual inputs, and medical history. It uses this information to identify patterns, potential health risks, and opportunities for improvement, then provides personalized recommendations based on scientific research and medical best practices."
    },
    {
      question: "Is my health data secure on the platform?",
      answer: "Absolutely. We take data security extremely seriously. All your health information is encrypted both in transit and at rest using industry-leading encryption standards. We're fully HIPAA compliant and never share your personal health information with third parties without your explicit consent."
    },
    {
      question: "Can I integrate my existing health devices with GoGetWell-ai?",
      answer: "Yes, GoGetWell-ai integrates with over 100 popular health and fitness devices and apps, including Fitbit, Apple Health, Garmin, Withings, and more. This allows for seamless data collection and comprehensive health monitoring without manual data entry."
    },
    {
      question: "Do I need a subscription to use all features?",
      answer: "We offer both free and premium tiers. The free version provides basic health tracking and insights, while our premium subscription unlocks advanced AI analysis, personalized recommendations, unlimited history, and direct access to healthcare professionals for guidance."
    },
    {
      question: "Can healthcare providers access my GoGetWell-ai data?",
      answer: "Only if you choose to share it. We offer secure provider sharing options that allow you to grant temporary or ongoing access to specific healthcare providers. This can help them make more informed decisions about your care based on your comprehensive health data."
    },
    {
      question: "How accurate are the health insights provided?",
      answer: "Our AI-generated insights are based on established medical research and continuously improving algorithms. While very accurate for general wellness guidance, they are designed to complement, not replace, professional medical advice. Always consult with healthcare providers for medical diagnoses or treatment decisions."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about GoGetWell-ai and how it can help you on your health journey.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeFAQ;