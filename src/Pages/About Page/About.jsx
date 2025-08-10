import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <div className="min-h-screen bg-base-200 text-base-content px-4 md:px-20 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        About KnowNet
      </motion.h1>

      {/* Content Section */}
      <motion.section
        className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          KnowNet is a modern Knowledge Sharing Platform designed to empower
          students and lifelong learners by enabling them to share articles,
          ideas, and engage in meaningful discussions. Our mission is to foster
          a community where knowledge flows freely and everyone can contribute
          and grow together.
        </p>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="max-w-5xl mx-auto mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Why Choose KnowNet?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            variants={fadeUpItem}
          >
            <h3 className="text-xl font-bold mb-2">Community Driven</h3>
            <p className="text-gray-600">
              Engage with a passionate community of students and educators
              sharing diverse perspectives.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            variants={fadeUpItem}
          >
            <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
            <p className="text-gray-600">
              User authentication and data privacy are our top priorities.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            variants={fadeUpItem}
          >
            <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
            <p className="text-gray-600">
              Intuitive UI and seamless experience for posting, reading, and
              interacting.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Help Line Section */}
      <motion.section
        className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="text-3xl font-semibold mb-4">Need Help?</h2>
        <p className="text-lg mb-4 text-gray-700">
          If you have any questions, feedback, or need assistance, feel free to
          reach out to our support team:
        </p>
        <ul className="text-gray-600 space-y-2">
          <li>
            <strong>Email:</strong>{" "}
            <Link
              href=""
              className="text-primary underline"
            >
              engsharafat23@gmail.com
            </Link>
          </li>
          <li>
            <strong>Phone:</strong> +8801822028628
          </li>
          <li>
            <strong>Live Chat:</strong>{" "}
            <span className="italic">Available Mon-Fri, 9am-5pm EST</span>
          </li>
        </ul>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="max-w-5xl mx-auto mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Team</h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[ // team members array
            {
              name: "Md Sharafat Hassain Binoy",
              role: "Full Stack Developer & Founder",
              img: "https://i.pravatar.cc/150?img=3",
            },
            {
              name: "Jane Doe",
              role: "UI/UX Designer",
              img: "https://i.pravatar.cc/150?img=12",
            },
            {
              name: "John Smith",
              role: "Backend Engineer",
              img: "https://i.pravatar.cc/150?img=5",
            },
            {
              name: "Emily Clark",
              role: "Community Manager",
              img: "https://i.pravatar.cc/150?img=8",
            },
          ].map(({ name, role, img }, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center cursor-pointer"
              variants={fadeUpItem}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={img}
                alt={name}
                className="w-28 h-28 rounded-full mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-gray-600">{role}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Footer Note */}
      <motion.footer
        className="text-center text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        &copy; {new Date().getFullYear()} KnowNet. All rights reserved.
      </motion.footer>
    </div>
  );
};

export default About;
