import { Helmet } from "react-helmet";
import ContactSection from "./global/ContactSection";
import HowToStartDesc from "./how_to_start_page/HowToStartDesc";
import HowToStartIntro from "./how_to_start_page/HowToStartIntro";
import WhyYouNeedToHire from "./how_to_start_page/WhyYouNeedToHire";

const HowToStart = () => {
   return (
      <div>
         <Helmet>
            <title>How To Start | Cimspace Technologies</title>
         </Helmet>

         <HowToStartIntro />

         <div className="content" style={{ width: "100vw", maxWidth: "65rem", margin: "0 auto" }}>
            <h1>How to Start</h1>

            <HowToStartDesc />

            <WhyYouNeedToHire />

            <ContactSection />
         </div>
      </div>
   );
}

export default HowToStart;