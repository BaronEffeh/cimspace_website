import ContactSection from "./global/ContactSection";
import OurServicesDetails from "./our_services/OurServicesDetails";
import OurServicesIntro from "./our_services/OurServicesIntro";
import { Helmet } from "react-helmet";

const OurServices = () => {
   return (
      <div>
         <Helmet>
            <title>Our Services | Cimspace Technologies</title>
         </Helmet>

         <OurServicesIntro />
         <div className="our_services" style={{ width: "100vw", maxWidth: "65rem", margin: "0 auto" }}>
            <h1>Our Services</h1>

            <OurServicesDetails />

            <ContactSection />
         </div>
      </div>
   );
}

export default OurServices;