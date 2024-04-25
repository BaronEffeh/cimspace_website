import ContactSection from "./global/ContactSection";
import OurServicesDetails from "./our_services/OurServicesDetails";
import OurServicesIntro from "./our_services/OurServicesIntro";

const OurServices = () => {
   return (
      <div>
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