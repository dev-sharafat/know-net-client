import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const FeatureArticle = ({ knewNet }) => {
    const { title, content, author_name, date_posted } = knewNet;
  return (
    <div className=" my-10">    
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-2xl shadow-md p-5 border  border-gray-100 hover:shadow-lg dark:bg-black ">
            <h3 className="text-xl font-semibold dark:text-white text-gray-800 mb-2">{title}</h3>
            <p className="text-sm dark:text-gray-400 text-gray-600 mb-4 line-clamp-3">{content}</p>
            <div className="text-xs dark:text-white text-gray-500 flex justify-between">
              <span>By {author_name}</span>
              <span>{date_posted}</span>
            </div>
          </motion.div>
    </div>
  );
};

export default FeatureArticle;
