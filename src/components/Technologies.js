import ContactSection from "./global/ContactSection";
import TechTools from "./technologies/TechTools";
import TechnologiesIntro from "./technologies/TechnologiesIntro";

const Technologies = () => {
   return (
      <div>
         <TechnologiesIntro />
         <h1>Technologies</h1>
         <div className="technologies" style={{ width: "100vw", maxWidth: "65rem", margin: "0 auto" }}>
            {/* <h1>Technologies</h1> */}

            <TechTools />

            <ContactSection />
         </div>
      </div>
   );
}

export default Technologies;