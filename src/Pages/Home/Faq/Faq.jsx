import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is onTimeNews?",
    answer: "onTimeNews is a reliable and up-to-date online news platform committed to delivering breaking news, in-depth analysis, and expert opinions across various categories such as politics, business, sports, entertainment, technology, health, and international affairs. Our goal is to keep you informed with factual and timely news coverage from around the world."
  },
  {
    question: "How often is the website updated?",
    answer: "We operate 24/7 to ensure that our readers have access to the latest news as events unfold. Our dedicated team of journalists and contributors work around the clock to provide real-time updates, detailed reports, and well-researched articles that help you stay ahead of the news cycle."
  },
  {
    question: "How can I subscribe to the newsletter?",
    answer: "Subscribing to our newsletter is easy! Simply scroll to the bottom of our homepage, enter your email address in the newsletter signup form, and click the subscribe button. Once subscribed, you'll receive daily or weekly email updates featuring top news, special reports, and exclusive content curated by our editorial team."
  },
  {
    question: "Can I submit a news tip or article?",
    answer: "Absolutely! We welcome contributions from our readers and independent journalists. If you have a news tip, eyewitness report, or an article you'd like to share, visit our 'Contact Us' page and fill out the submission form. Alternatively, you can email our editorial team with relevant details, supporting evidence, and your contact information for further verification."
  },
  {
    question: "Does onTimeNews have a mobile app?",
    answer: "Yes! We offer a mobile app for both iOS and Android devices, allowing users to access breaking news and personalized updates on the go. You can download our app from the App Store or Google Play Store to stay connected with the latest news anytime, anywhere."
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
          Frequently Asked Questions
        </h4>
      </div>

      <div className="space-y-4 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-4 cursor-pointer shadow-lg hover:bg-gray-700 transition duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
