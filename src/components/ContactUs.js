import ContactUsIntro from "./contact_us/ContactUsIntro";
import ContactPage from "./contact_us/ContactPage";
import ContactPageDesc from "./contact_us/ContactPageDesc";
import ContactOptions from "./contact_us/ContactOptions";

const ContactUs = () => {
   return (
      <div>
         <ContactUsIntro />
         <div className="contact_us" style={{ width: "100vw", maxWidth: "65rem", margin: "0 auto" }}>
            <h1>Contact Us</h1>

            <ContactPageDesc />

            <ContactPage />

            <ContactOptions />
         </div>
      </div>
   );
}

export default ContactUs;