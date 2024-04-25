import ContactSection from "./global/ContactSection";
import HowToStartDesc from "./how_to_start_page/HowToStartDesc";
import HowToStartIntro from "./how_to_start_page/HowToStartIntro";
import WhyYouNeedToHire from "./how_to_start_page/WhyYouNeedToHire";

const HowToStart = () => {
   return (
      <div>
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