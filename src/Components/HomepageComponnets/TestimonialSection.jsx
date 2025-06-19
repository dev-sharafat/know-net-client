import React from 'react';

const testimonials = [
  {
    name: "Sunehra Sing",
    role: "Computer Science Student",
    photo: "https://i.ibb.co/Zp6ktS7q/photorealistic-lawyer-day-celebration.jpg",
    feedback: "This platform really helped me improve my writing and get valuable feedback.",
  },
  {
    name: "Sharafat Hassain",
    role: "Software Engineering Intern",
    photo: "https://i.ibb.co/600Vv8F1/young-successful-businessman-posing-with-crossed-arms.jpg",
    feedback: "An amazing place to share my ideas and read about innovative topics from peers.",
  },
  {
    name: "Mehnaz Rahman",
    role: "AI Enthusiast",
    photo: "https://i.ibb.co/8LT8W7jN/portrait-confident-young-businessman-with-his-arms-crossed.jpg",
    feedback: "Loved how easy it is to post articles and get real comments from others.",
  },
];

const TestimonialSection = () => {
  return (
    <section className=" py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-600 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-4 border-2 border-blue-500"
                />
                <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-200 mb-4">{testimonial.role}</p>
                <p className="text-gray-600 dark:text-gray-200 italic">“{testimonial.feedback}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
