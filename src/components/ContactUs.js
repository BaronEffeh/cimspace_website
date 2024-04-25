import ContactUsIntro from "./contact_us/ContactUsIntro";

const ContactUs = () => {
   return (
      <div>
         <ContactUsIntro />
         <div className="contact_us" style={{ width: "100vw", maxWidth: "65rem", margin: "0 auto" }}>
            <h1>Contact Us</h1>
         </div>
      </div>
   );
}

export default ContactUs;