import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const FeatureArticle = ({ knewNet }) => {
  const { title, content, author_name, date_posted } = knewNet;

  // Optionally still truncate words as before or just rely on fixed height
  const wordLimit = 30;
  const truncatedContent = content.split(' ').length > wordLimit 
    ? content.split(' ').slice(0, wordLimit).join(' ') + '...' 
    : content;

  return (
    <Link to={`/articles/${knewNet._id}` }className="my-10">    
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 hover:shadow-lg dark:bg-gray-700"
      >
        <h3 className="text-lg font-semibold dark:text-white text-gray-800 mb-2">{title}</h3>
        <p
          className="text-sm dark:text-gray-400 text-gray-600 mb-4"
          style={{
            height: '100px',       // fixed height
            overflow: 'hidden',   // hide overflow text
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 5,   // show 5 lines max (works with -webkit-box)
            WebkitBoxOrient: 'vertical',
          }}
        >
          {truncatedContent}
        </p>
        <div className="text-xs dark:text-white text-gray-500 flex justify-between">
          <span>By {author_name}</span>
          <span>{date_posted}</span>
        </div>
      </motion.div>
    </Link>
  );
};

export default FeatureArticle;
