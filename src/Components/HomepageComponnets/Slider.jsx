import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";
const sliderDatas = [
  {
    heading: "Share Your Knowledge",
    description:
      "Join a community where students empower each other by sharing insights, tutorials, and personal learning experiences. Whether it's tech, science, or arts — your story matters!",
    ctaText: "Explore Articles",
    imageUrl: "https://i.postimg.cc/Dzy9LDtF/kaleidico-Hixz-Npr-Xdb4-unsplash.jpg",
  },
  {
    heading: "Learn From Real Experiences",
    description:
      "Discover articles written by fellow students sharing what they’ve learned — from class projects to internships. Get inspired and grow smarter every day.",
    ctaText: "Start Reading",
    imageUrl: "https://i.postimg.cc/hvx6Kq78/juno-jo-RB9-Lxk-WC9t-E-unsplash.jpg",
  },
  {
    heading: "Connect. Contribute. Grow.",
    description:
      "Dive into a space where ideas meet curiosity. Write your own articles, comment on others, and grow through meaningful discussions and knowledge sharing.",
    ctaText: "Join the Community",
    imageUrl: "https://i.postimg.cc/VLqpTmwm/markus-winkler-62-P30-Uk0qw-E-unsplash.jpg",
  },
];

export default function Slider() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderDatas.map((data, index) => (
          <SwiperSlide data={data} key={index}>
            <div
              className="space-y-3  text-white my-10 flex flex-col justify-center px-10  h-[500px] bg-cover bg-center "
              style={{ backgroundImage: `url(${data.imageUrl})` }}
            >
              <h1 className="text-2xl lg:text-5xl md:text-3xl font-bold">
                {data.heading}
              </h1>
              <p className="lg:w-[50%] w-full">{data.description}</p>
              <Link className="btn btn-soft btn-primary lg:w-100">{data.ctaText}</Link>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
