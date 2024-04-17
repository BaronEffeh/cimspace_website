import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
   const [images, setImages] = useState([]);

   // Handle file upload and convert the file URLs
   const handleFileUpload = (event) => {
      const files = event.target.files;
      const imageUrls = [];
      for (let i = 0; i < files.length; i++) {
         const file = files[i];
         const imageUrl = URL.createObjectURL(file);
         imageUrls.push(imageUrl);
      }
      setImages(imageUrls);
   };

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true, // Add arrows to navigate left and right
   };

   return (
      <div className="image-carousel">
         {/* Input element for file upload */}
         <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileUpload}
            style={{ marginBottom: '20px' }}
         />

         {/* Slider component */}
         <Slider {...settings}>
            {images.map((image, index) => (
               <div key={index}>
                  <img src={image} alt={`Slide ${index}`} style={{ width: '100%' }} />
               </div>
            ))}
         </Slider>
      </div>
   );
};

export default ImageCarousel;
