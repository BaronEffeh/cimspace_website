import { Helmet } from "react-helmet";
import CareersIntro from "./careers/CareersIntro";
import CareersPage from "./careers/CareersPage";
import ContactSection from "./global/ContactSection";

const Careers = () => {
   return (
      <div>

         <Helmet>
            <title>Careers | Cimspace Technologies</title>
         </Helmet>
         <h1 style={{ display: "flex", position: "absolute", width: "100vw", maxWidth: "65rem", margin: "8rem 10rem" }}>Careers</h1>
         <CareersIntro />
         <div className="careers" style={{ width: "100vw", maxWidth: "65rem", margin: "0 auto" }}>

            <CareersPage />

            <ContactSection />
         </div>
      </div>
   );
}

export default Careers;