import React, { useState } from "react";

const faqData = [
  {
    question: "What is KnowNet?",
    answer:
      "KnowNet is a knowledge sharing platform where students and learners can post articles, share ideas, and engage in discussions.",
  },
  {
    question: "How do I create an account?",
    answer:
      "You can sign up using your email and password or use Google social login for quick registration.",
  },
  {
    question: "Can I edit or delete my articles?",
    answer:
      "Yes, authenticated users have full control to edit or delete their own articles anytime.",
  },
  {
    question: "Is my data secure on KnowNet?",
    answer:
      "Absolutely! We use Firebase authentication and JWT-based security to ensure your data and privacy are protected.",
  },
  {
    question: "How can I interact with other users?",
    answer:
      "You can comment on articles, like posts, and participate in discussions to connect with the community.",
  },
  {
    question: "Are there any content guidelines?",
    answer:
      "Yes, we encourage respectful and constructive sharing. Any inappropriate content may be removed by moderators.",
  },
  {
    question: "Can I browse articles by categories?",
    answer:
      "Definitely! You can filter articles by categories or tags to find content that interests you.",
  },
  {
    question: "Is KnowNet free to use?",
    answer:
      "Yes, KnowNet is completely free for all users to read, post, and engage.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "You can reset your password via the 'Forgot Password' link on the login page using your registered email.",
  },
  {
    question: "Can I contribute anonymously?",
    answer:
      "Currently, users must be registered and logged in to post articles or comments to maintain community trust.",
  },
];

const FQA = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" mx-auto px-4 md:px-4 lg:px-0 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map(({ question, answer }, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-medium">{question}</span>
              <span className="text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 text-gray-700">{answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FQA;
