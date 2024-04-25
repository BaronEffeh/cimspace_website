import CareersIntro from "./careers/CareersIntro";
import ContactSection from "./global/ContactSection";

const Careers = () => {
   return (
      <div>
         <CareersIntro />
         <div className="careers" style={{ width: "100vw", maxWidth: "65rem", margin: "0 auto" }}>
            <h1>Careers</h1>

            <ContactSection />
         </div>
      </div>
   );
}

export default Careers;