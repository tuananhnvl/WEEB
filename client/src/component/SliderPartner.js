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
            <div className="SLIDERPARTNER">
                <div className="swiper03">
                    <div className="swiper-wrapper slider03">
                        <div className="swiper-slide"><img src="https://img.icons8.com/color/55/000000/ruby-programming-language.png"/></div>
                        <div className="swiper-slide"><img src="https://img.icons8.com/color/55/000000/c-programming.png"/></div>
                        <div className="swiper-slide"><img src="https://img.icons8.com/color/55/000000/sql.png"/></div>
                        <div className="swiper-slide"><img src="https://img.icons8.com/color/55/000000/kotlin.png"/></div>
                        <div className="swiper-slide"><img src="https://img.icons8.com/color/55/000000/perl.png"/></div>
                        <div className="swiper-slide"><img src="https://img.icons8.com/color/55/000000/python--v1.png"/></div>
                        <div className="swiper-slide"><img src="https://img.icons8.com/color/55/000000/java-coffee-cup-logo--v2.png"/></div>
                        <div className="swiper-slide"><img src="https://img.icons8.com/color/55/000000/javascript--v1.png"/></div>
                        <div className="swiper-slide"><img src="https://img.icons8.com/color/55/000000/typescript.png"/></div>
                    </div>
                </div>
            </div>
            
        </>

    );
};
export default SliderPartner;