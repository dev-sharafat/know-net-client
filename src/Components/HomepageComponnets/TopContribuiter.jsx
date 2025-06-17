import { Medal } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const contributors = [
  {
    name: "Afra Anjum Subha",
    photo: "https://i.ibb.co/ycQkh5Bg/professional-woman-stylish-suit-office-with-tablet-device.jpg",
    articles: 15,
  },
  {
    name: "Kuroo Tetsurō",
    photo: "https://i.ibb.co/84jHfHYT/law2.jpg",
    articles: 12,
  },
  {
    name: "Rafiul Hasan",
    photo: "https://i.ibb.co/TBkn2ky9/indian-businessman-with-his-white-car.jpg",
    articles: 10,
  },
];

const TopContributer = () => {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-blue-50 dark:bg-gray-600 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center text-indigo-800 mb-12 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Medal className="w-8 h-8 text-yellow-500" />
          Top Contributors
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {contributors.map((user, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-600 rounded-2xl shadow-lg p-6 text-center transition-transform hover:-translate-y-2 hover:shadow-indigo-300 duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={user.photo}
                alt={user.name}
                className="w-24 h-24 mx-auto rounded-full border-4 border-indigo-300 shadow-md object-cover"
              />
              <h3 className="mt-4 text-xl font-bold text-indigo-700">
                {user.name}
              </h3>
              <p className="text-sm text-gray-200 mt-1">
                ✍️ Articles Contributed:{" "}
                <span className="font-medium text-indigo-500">{user.articles}</span>
              </p>
              <div className="mt-4">
                <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                  🌟 Active Contributor
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopContributer;