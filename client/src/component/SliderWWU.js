import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

import "swiper/css/effect-cards";

function SliderWWU() {

 
  return (
    <>
    <div className="SliderWWU">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="ff34"
      >
        <SwiperSlide className="Y87">Slide 1</SwiperSlide>
        <SwiperSlide  className="Y87">Slide 2</SwiperSlide>
        <SwiperSlide  className="Y87">Slide 3</SwiperSlide>
        <SwiperSlide  className="Y87">Slide 4</SwiperSlide>
        <SwiperSlide  className="Y87">Slide 5</SwiperSlide>
        <SwiperSlide  className="Y87">Slide 6</SwiperSlide>
        <SwiperSlide  className="Y87">Slide 7</SwiperSlide>
        <SwiperSlide  className="Y87">Slide 8</SwiperSlide>
        <SwiperSlide  className="Y87">Slide 9</SwiperSlide>
      </Swiper>
    </div>
     
    </>
  );
}
export default SliderWWU;