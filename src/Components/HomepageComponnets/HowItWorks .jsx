import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const steps = [
  {
    title: "Sign Up & Create Profile",
    description: "Join KnowNet by creating your account and setting up your profile.",
    icon: (
      <svg
        className="w-12 h-12 mx-auto mb-4 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.684 6.936L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l-6.16 3.422a12.083 12.083 0 00-.684-6.936L12 14z" />
      </svg>
    ),
  },
  {
    title: "Post & Share Articles",
    description: "Create insightful articles and share your knowledge with the community.",
    icon: (
      <svg
        className="w-12 h-12 mx-auto mb-4 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 4v16" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 20h4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4v16" />
      </svg>
    ),
  },
  {
    title: "Engage & Learn Together",
    description: "Comment, like, and participate in discussions to grow your knowledge.",
    icon: (
      <svg
        className="w-12 h-12 mx-auto mb-4 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14h.01" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 10h.01" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 5-9 9-9 9s-9-4-9-9a9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Discover Quality Content",
    description: "Browse articles by category or trending topics to find information that interests you.",
    icon: (
      <svg
        className="w-12 h-12 mx-auto mb-4 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h3m10 0h3a1 1 0 011 1v3m0 10v3a1 1 0 01-1 1h-3m-10 0H4a1 1 0 01-1-1v-3m0-4h16" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 14h.01M16 10h.01" />
      </svg>
    ),
  },
  
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HowItWorks = () => {
  return (
    <motion.section
      className=" mx-auto px-4 lg:px-0 md:px-4 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {steps.map(({ title, description, icon }, index) => (
          <motion.div
            key={index}
            className="bg-base-200 rounded-lg p-8 text-center shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div>{icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HowItWorks;
