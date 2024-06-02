import { Helmet } from "react-helmet";
import ContactSection from "./global/ContactSection";
import TechTools from "./technologies/TechTools";
import TechnologiesIntro from "./technologies/TechnologiesIntro";

const Technologies = () => {
   return (
      <div>
         <Helmet>
            <title>Technologies | Cimspace Technologies</title>
         </Helmet>
         <TechnologiesIntro />
         <h1 style={{ maxWidth: "65rem", margin: "0 auto" }}>Technologies</h1>
         <div className="technologies" style={{ width: "100vw", maxWidth: "65rem", margin: "0 auto" }}>
            {/* <h1>Technologies</h1> */}

            <TechTools />

            <ContactSection />
         </div>
      </div>
   );
}

export default Technologies;