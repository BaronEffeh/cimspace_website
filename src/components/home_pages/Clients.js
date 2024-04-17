import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../components/home_pages/clients.css";
import Client1 from "../../assets/clients_logos/EMTECH FULL.jpg";
import Client2 from "../../assets/clients_logos/EMTECH LIGHT.jpg";
import Client3 from "../../assets/clients_logos/emtech-logo.jpg";
import Client4 from "../../assets/clients_logos/jpeg 1.jpg";
import Client5 from "../../assets/clients_logos/MOCKUPP copy.jpg";
import Client6 from "../../assets/clients_logos/ONLY LOGO.jpg";
import ArrowRight from "../../assets/arrow_right1.png";

const Clients = () => {
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
      Client1,
      Client2,
      Client3,
      Client4,
      Client5,
      Client6,
   ];

   const handleNextSlide = () => {
      sliderRef.current.slickNext();
   };

   return (
      <div className="clients">
         <div className="clients_contents">
            <div className="clients_description">
               <h5>Clients</h5>
               <h2>Amazing clients who trust us</h2>
            </div>
            <div className="clients_carousel">
               <Slider ref={sliderRef} {...settings}>
                  {images.map((imageUrl, index) => (
                     <div key={index}>
                        <img src={imageUrl} alt={`Slide ${index}`} style={{ width: '50px', height: '30px' }} />
                     </div>
                  ))}
               </Slider>
               <button onClick={handleNextSlide} style={{}} className='clients_carousel_button'>
                  <img src={ArrowRight} alt="Arrow Right" style={{ border: 'white', width: '15px', height: '25px' }} />
               </button>
            </div>
         </div>
      </div>
   );
};

export default Clients;
