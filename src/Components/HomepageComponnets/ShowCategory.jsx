import React from 'react';
import { Link, useNavigate } from 'react-router';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ShowCategory = ({ article, index }) => {
  const navigate = useNavigate();
  const { title, author_photo, content, date_posted, author_name, _id } = article;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -8 }} // 🔼 Lift the card up slightly
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="max-w-md mx-auto bg-white dark:bg-gray-700 dark:text-white rounded-2xl shadow-lg overflow-hidden border border-blue-500 my-6"
    >
      {/* Image with Zoom-Out on Hover */}
      <motion.img
        src={author_photo}
        alt={title}
        className="w-full h-52 object-cover"
        whileHover={{ scale: 0.95 }} // 🔍 Zoom out image
        transition={{ duration: 0.3 }}
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-200 text-sm mb-4 line-clamp-4">
          {content}
        </p>

        <div className="text-sm text-gray-500 dark:text-gray-300 mb-4">
          <span>
            By <strong>{author_name}</strong>
          </span>{" "}
          | <span>{new Date(date_posted).toDateString()}</span>
        </div>

        <Link
          onClick={() => navigate(`/articles/${_id}`)}
          className="text-lg text-blue-500 hover:underline"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
};

export default ShowCategory;
