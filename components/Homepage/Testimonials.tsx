"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Yvonne Mbabazi",
      desc: "As a student, finding reliable educational resources online can be overwhelming. Luckily, I found this website, and it's been a goldmine of knowledge. The tutorials and guides have helped me ace my exams and deepen my understanding of various subjects. Highly recommend!"
    },
    {
      title: "Yvonne Mbabazi",
      desc: "As a student, finding reliable educational resources online can be overwhelming. Luckily, I found this website, and it's been a goldmine of knowledge. The tutorials and guides have helped me ace my exams and deepen my understanding of various subjects. Highly recommend!"
    },
    {
      title: "Yvonne Mbabazi",
      desc: "As a student, finding reliable educational resources online can be overwhelming. Luckily, I found this website, and it's been a goldmine of knowledge. The tutorials and guides have helped me ace my exams and deepen my understanding of various subjects. Highly recommend!"
    },
    {
      title: "Yvonne Mbabazi",
      desc: "As a student, finding reliable educational resources online can be overwhelming. Luckily, I found this website, and it's been a goldmine of knowledge. The tutorials and guides have helped me ace my exams and deepen my understanding of various subjects. Highly recommend!"
    },
    {
      title: "Yvonne Mbabazi",
      desc: "As a student, finding reliable educational resources online can be overwhelming. Luckily, I found this website, and it's been a goldmine of knowledge. The tutorials and guides have helped me ace my exams and deepen my understanding of various subjects. Highly recommend!"
    },
    {
      title: "Yvonne Mbabazi",
      desc: "As a student, finding reliable educational resources online can be overwhelming. Luckily, I found this website, and it's been a goldmine of knowledge. The tutorials and guides have helped me ace my exams and deepen my understanding of various subjects. Highly recommend!"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  return (
    <div className="bg-white flex flex-col gap-[40px] relative w-full px-[20px] md:px-10 lg:px-20 py-10 items-center">
      <div className="flex flex-col gap-[10px] items-center">

        <span className="text-[16px] text-secondary">TESTIMONIAL</span>
        <h1 className="text-[28px] text-primary text-center font-[700] max-w-[500px] leading-8">
          Real Stories, Real Impact: Testimonials from the community
        </h1>
      </div>
      <div className="w-full">
        <Swiper
          spaceBetween={10}
          slidesPerView={slidesPerView}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-5  bg-gray-50 rounded-lg">
                <h3 className="font-bold ">{testimonial.title}</h3>
                <span className="text-[12px] text-gray-500">Student</span>
                <p className="text-[12px] text-black font-[400]">{testimonial.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-end mt-6">
          {[...Array(totalSlides)].map((_, index) => (
            <div
              key={index}
              className={`h-[6px]  mx-1 cursor-pointer rounded-[4px] ${Math.floor(activeIndex / slidesPerView) === index ? 'bg-black w-16' : 'w-10 bg-gray-300'
                }`}
              onClick={() => handleSlideChange(index * slidesPerView)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;