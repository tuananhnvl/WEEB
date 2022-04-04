import React from "react";
// Import Swiper React components
import '../styles/Slider2Bar.css';
import { Swiper, SwiperSlide } from "swiper/react";
/* import {Autoplay} from "swiper"; */
import "swiper/css";

function Slider2Bar() {

 
    return (
        <>
       
        <Swiper
        dir="rtl"
        slidesPerView={"auto"}

        className="Slider2Bar01"
        >
        <SwiperSlide><img src="https://img.icons8.com/color/80/000000/ruby-programming-language.png"/></SwiperSlide>
        <SwiperSlide><img src="https://img.icons8.com/color/80/000000/sql.png"/></SwiperSlide>
        <SwiperSlide><img src="https://img.icons8.com/color/80/000000/kotlin.png"/></SwiperSlide>  
        <SwiperSlide><img src="https://img.icons8.com/color/80/000000/perl.png"/></SwiperSlide>
        <SwiperSlide><img src="https://img.icons8.com/color/80/000000/python--v1.png"/></SwiperSlide>
        <SwiperSlide><img src="https://img.icons8.com/color/80/000000/java-coffee-cup-logo--v2.png"/></SwiperSlide>
        <SwiperSlide><img src="https://img.icons8.com/color/80/000000/javascript--v1.png"/></SwiperSlide>
        <SwiperSlide><img src="https://img.icons8.com/color/80/000000/typescript.png"/></SwiperSlide>

      </Swiper>
      <Swiper
        dir="ltr"
        slidesPerView={"auto"}
        /* loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]} */
        className="Slider2Bar02"
        >
        <SwiperSlide><img src="https://img.icons8.com/color/80/000000/webpack.png"/></SwiperSlide>
        <SwiperSlide><img src="https://img.icons8.com/color/80/000000/golang.png"/></SwiperSlide>
        <SwiperSlide><img src="https://img.icons8.com/ios-filled/80/000000/php-server.png"/></SwiperSlide>  
        <SwiperSlide><img src="https://img.icons8.com/ios-filled/80/000000/jquery.png"/></SwiperSlide>
        <SwiperSlide><img src="https://img.icons8.com/color/80/000000/css3.png"/></SwiperSlide>
        <SwiperSlide><img src="https://img.icons8.com/cute-clipart/80/000000/react-native.png"/></SwiperSlide>
        <SwiperSlide><img src="https://img.icons8.com/color/80/000000/javascript--v1.png"/></SwiperSlide>
        <SwiperSlide><img src="https://img.icons8.com/color/80/000000/firebase.png"/></SwiperSlide>

      </Swiper>
      
    </>
     

    );
};
export default Slider2Bar;