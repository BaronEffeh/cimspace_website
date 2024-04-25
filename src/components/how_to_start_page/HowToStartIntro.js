import React from 'react';
import "../how_to_start_page/how_to_start_intro.css";

class HowToStartIntro extends React.Component {
   render() {
      let textContent;
      let textPara;
      switch (this.props.page) {
         case 'services':
            textContent = "Our Services";
            textPara = "We specialize in helping you build a team of expert developers."
            break;
         case 'technologies':
            textContent = "Technologies";
            textPara = "We specialize in helping you build a team of expert developers."
            break;
         case 'careers':
            textContent = "Careers";
            textPara = "Do you want to learn more about Cimspace? Our team is looking for people who want to work on interesting international projects, develop and learn new skills, and share what they've learned with others."
            break;
         case 'contact':
            textContent = "Contact Us";
            textPara = "We specialize in helping you build a team of expert developers."
            break;
         default:
            textContent = "How to Start";
            textPara = "We specialize in helping you build a team of expert developers.";
      }

      return (
         <div className="dynamic_page_text-container">
            <div className="background_image"></div>
            <div className="text_content">
               <h2 style={{ color: "#FFF" }}>{textContent}</h2>
               <p style={{ color: "#FFF" }}>{textPara}</p>
            </div>
         </div>
      );
   }
}

export default HowToStartIntro;
