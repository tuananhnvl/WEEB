import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow,Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";


function SliderFeedback() {

 
  return (
    <>  
    <div className="SliderFeedbackCustomer">
    <Swiper
       effect={"coverflow"}
       grabCursor={true}
       centeredSlides={true}
       slidesPerView={"auto"}
       coverflowEffect={{
         rotate: 0,
         stretch: 100,
         depth: 300,
         modifier: 1,
         slideShadows: true,
       }}
       pagination={true}
       modules={[EffectCoverflow, Pagination]}
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