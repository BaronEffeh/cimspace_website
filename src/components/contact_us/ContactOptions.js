import { Link } from "react-router-dom";
import logo from "../../assets/cimspaceLogo.jpeg";
import "../global/footer.css";
// import PhoneCall from "../../assets/contact_icons/phone_call_icon.png";
// import EmailIcon from "../../assets/contact_icons/email_icon.png";
// import LocationIcon from "../../assets/contact_icons/location_icon.png";
import LinkedIn from "../../assets/contact_icons/linkedin_icon.png";
import FacebookIcon from "../../assets/contact_icons/facebook_icon.png";
import InstagramIcon from "../../assets/contact_icons/instagram_icon.png";
import TwitterIcon from "../../assets/contact_icons/twitter_icon.png";
import YoutubeIcon from "../../assets/contact_icons/youtube_icon.png";
import BaronEffeh from "../../assets/baroneffeh.jpg";
import Director from "../../assets/director.jpg";

const ContactOptions = () => {
   return (
      <div className="footer" style={{ marginBottom: "10rem" }}>
         {/* <hr style={{ border: "1px solid #C4C4C4", width: "100vw", maxWidth: "100%" }} /> */}
         <div className="footer_content" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginLeft: "0" }}>
            <div className="company_info">
               <div className="logo" style={{ marginBottom: "4rem" }}>
                  <Link className="navbar_logo" to="/"><img src={logo} alt="Logo" /> <h3 className="company_name">Cimspace Technologies</h3></Link>
               </div>
               <p>Office</p>
               <p>info@cimspace.com</p>
               <p><a href="tel:+234-706-252-8242">+234 706 252 8242</a></p>

               <h3 style={{ marginTop: "7rem" }}>Follow us</h3>
               <div className="social_media_icons" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2rem" }}>
                  <Link><img src={LinkedIn} alt="" /></Link>
                  <Link to="https://web.facebook.com/cimspace" target="_blank"><img src={FacebookIcon} alt="" /></Link>
                  <Link><img src={InstagramIcon} alt="" /></Link>
                  <Link><img src={TwitterIcon} alt="" /></Link>
                  <Link><img src={YoutubeIcon} alt="" /></Link>
               </div>
            </div>
            <div>
               <img src={BaronEffeh} alt="" style={{ objectFit: "cover", height: "80px", width: "70px", borderRadius: "10px" }} />
               <div>
                  <p>Effeh Baron <br />
                     Human Resources</p>
                  <p> effehbaron@cimspace.com <br />
                     <a href="tel:+234-701-292-8822">+234 701 292 8822</a></p>

               </div>
            </div>
            <div className="services_links">
               <img src={Director} alt="" style={{ objectFit: "cover", height: "80px", width: "70px", borderRadius: "10px" }} />
               <div>
                  <p>Ikechukwu Chukwu <br />
                     Founder/CEO</p>
                  <p> imchukwu@cimspace.com <br />
                     <a href="tel:+234-706-252-8242">+234 706 252 8242</a></p>

               </div>
            </div>

         </div>

      </div >
   );
}

export default ContactOptions;