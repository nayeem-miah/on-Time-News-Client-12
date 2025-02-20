import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is [Your Newspaper Name]?",
    answer: "[Your Newspaper Name] is a trusted online news platform providing the latest news on politics, business, sports, entertainment, technology, and more."
  },
  {
    question: "How often is the website updated?",
    answer: "We update our website 24/7 with breaking news and in-depth articles from our expert journalists."
  },
  {
    question: "How can I subscribe to the newsletter?",
    answer: "You can subscribe by entering your email in the newsletter signup form at the bottom of our homepage."
  },
  {
    question: "Can I submit a news tip or article?",
    answer: "Yes! You can send us news tips or articles through our 'Contact Us' page."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-8 text-white">
        <div className="md:w-4/12 mx-auto text-center my-8">
        <h4 className="text-3xl text-purple-500 my-6 text-center uppercase border-b-2 py-4">
        F  A  Q
        </h4>
      </div>

      <div className="space-y-4 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" rounded-lg p-4 cursor-pointer shadow-lg"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
