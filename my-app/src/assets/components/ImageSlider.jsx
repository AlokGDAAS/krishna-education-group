import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Main_slider_1() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  const data = [
    {
      id:1,
      img:".Shivam_2.jpg",
      deg:"student",
      name:"Shivam Pundhir",
      alt:""

    },
    {
      id:2,
      img:"Bharat_2.jpg",
      deg:"Bharat",
      name:"Bharat gautam",
      alt:""

    },
    {
      id:3,
      img:"Manoj_2.jpg",
      deg:"student",
      name:"Manoj",
      alt:""

    },
    {
      id:4,
      img:"Pic-1.jpg",
      deg:"mentor",
      name:"Bharat gautam",
      alt:""

    },
    {
      id:5,
      img:"pic_2.jpg",
      deg:"mentor",
      name:"Shivam pundhir",
      alt:""

    },
    {
      id:6,
      img:"pic_3.jpg",
      deg:"mentor",
      name:"Bharat Gautam",
      alt:""

    },
    {
      id:7,
      img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      deg:"student",
      name:"Shivam Pundhir",
      alt:""

    },
    {
      id:8,
      img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      deg:"student",
      name:"Bharat gautam",
      alt:""

    },
    {
      id:9,
      img:"https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
      deg:"student",
      name:"Shivam pundhir",
      alt:""

    },
    {
      id:10,
      img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      deg:"mentor",
      name:"Bharat gautam",
      alt:""

    },
    {
      id:11,
      img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      deg:"mentor",
      name:"Shivam pundhir",
      alt:""

    },
    {
      id:12,
      img:"https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
      deg:"mentor",
      name:"Bharat Gautam",
      alt:""

    },
  ]

  return (
    <div className="flex flex-col items-center px-2">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        onSwiper={(swiper) => setTotalSlides(swiper.slides.length - swiper.loopedSlides * 2)}
        onSlideChange={(swiper) => {
          let realIndex = swiper.realIndex + 1;
          setCurrentSlide(realIndex);
        }}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="w-full "
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <img
              src={item.img}
              alt={`slide_${i}`}
              className="rounded-lg mx-auto w-full shadow-lg border border-gray-300  object-cover"
            />
            <div className="mt-2 text-white">
            <p className="text-center">{item.name} </p>
            <p className="text-center">({item.deg})</p>
            </div>

            
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Navigation buttons & slide indicator */}
      <div className="md:flex items-center justify-center gap-6 mt-4 hidden">
        <button className="custom-prev bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-600 transition text-sm md:text-base">
          ◀
        </button>

        <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-700">
          {/* Slide {currentSlide} / {totalSlides} */}
        </div>

        <button className="custom-next bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-600 transition text-sm md:text-base">
           ▶
        </button>
      </div>
    </div>
  );
}



