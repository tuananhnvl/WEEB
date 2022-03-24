import React, {useEffect} from 'react';
import '../styles/SliderPartner.css';
import Swiper from "swiper";
// Import Swiper styles


function SliderPartner() {
    useEffect(() => {

    const swiper03 = new Swiper('.swiper03', {
        // Optional parameters
        slidesPerView: 5,
        spaceBetween: 10,
      
    });
   
  
    swiper03.init();
});
    return (
        <>
            <div class="SLIDERPARTNER">
                <div class="swiper03">
                    <div class="swiper-wrapper slider03">
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/ruby-programming-language.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/c-programming.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/sql.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/kotlin.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/perl.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/python--v1.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/java-coffee-cup-logo--v2.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/javascript--v1.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/typescript.png"/></div>
                    </div>
                </div>
            </div>
            
        </>

    );
};
export default SliderPartner;