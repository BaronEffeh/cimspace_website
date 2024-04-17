import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../components/home_pages/technologies.css";
import ReactLogoWordmark from "../../assets/React_logo_wordmark_1.png";
import AngularLogo from "../../assets/angular-logo-icon-png-svg_1.png";
import NextJsLogo from "../../assets/next_js_logo.png";
import NodeJsLogo from "../../assets/node_js_logo.png";
import PythonLogo from "../../assets/Python-Symbol.png";
import PhpLogo from "../../assets/php-logo.png";
import OracleLogo from "../../assets/Oracle-Logo 1.png";
import ArrowRight from "../../assets/arrow_right1.png";

const Technologies = () => {
   const sliderRef = useRef(null);

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
   };

   const images = [
      ReactLogoWordmark,
      AngularLogo,
      NextJsLogo,
      NodeJsLogo,
      PythonLogo,
      PhpLogo,
      OracleLogo,
   ];

   const handleNextSlide = () => {
      sliderRef.current.slickNext();
   };

   return (
      <div className="technologies">
         <div className="technologies_description">
            <h5>Specialized</h5>
            <h2>Technologies</h2>
         </div>
         <div className="technologies_carousel">
            <Slider ref={sliderRef} {...settings}>
               {images.map((imageUrl, index) => (
                  <div key={index}>
                     <img src={imageUrl} alt={`Slide ${index}`} style={{ width: '85px', height: '30px' }} />
                  </div>
               ))}
            </Slider>
            <button onClick={handleNextSlide} style={{}} className='technologies_carousel_button'>
               <img src={ArrowRight} alt="Arrow Right" style={{ border: 'white', width: '15px', height: '25px' }} />
            </button>
         </div>
      </div>
   );
};

export default Technologies;
