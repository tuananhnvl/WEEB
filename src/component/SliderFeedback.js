import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";


function SliderFeedback() {

 
  return (
    <>
    <div className="SliderFeedbackCustomer">
    <Swiper
       
       slidesPerView={1}
       breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 3,
        },
      }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Pagination]}
        className="f3g4"
      >
        <SwiperSlide className="D678 r45yt">Slide 1</SwiperSlide>
        <SwiperSlide  className="D678 r45yt">Slide 2</SwiperSlide>
        <SwiperSlide  className="D678 r45yt">Slide 3</SwiperSlide>
        <SwiperSlide  className="D678 r45yt">Slide 4</SwiperSlide>
        <SwiperSlide  className="D678 r45yt">Slide 5</SwiperSlide>
        <SwiperSlide  className="D678 r45yt">Slide 6</SwiperSlide>
        <SwiperSlide  className="D678 r45yt">Slide 7</SwiperSlide>
        <SwiperSlide  className="D678 r45yt">Slide 8</SwiperSlide>
        <SwiperSlide  className="D678 r45yt">Slide 9</SwiperSlide>
      </Swiper>
    </div>
     
    </>
  );
}
export default SliderFeedback;