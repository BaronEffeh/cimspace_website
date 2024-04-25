import React from "react";
import HowToStartIntro from "../how_to_start_page/HowToStartIntro";
import "../how_to_start_page/how_to_start_intro.css";

class OurServicesIntro extends React.Component {
   render() {
      return (
         <div>

            <HowToStartIntro page="services" />
         </div>

      );
   }
}

export default OurServicesIntro;