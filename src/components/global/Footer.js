import { Link } from "react-router-dom";
import logo from "../../assets/cimspaceLogo.jpeg";
import "../global/footer.css";
import PhoneCall from "../../assets/contact_icons/phone_call_icon.png";
import EmailIcon from "../../assets/contact_icons/email_icon.png";
import LocationIcon from "../../assets/contact_icons/location_icon.png";
import LinkedIn from "../../assets/contact_icons/linkedin_icon.png";
import FacebookIcon from "../../assets/contact_icons/facebook_icon.png";
import InstagramIcon from "../../assets/contact_icons/instagram_icon.png";
import TwitterIcon from "../../assets/contact_icons/twitter_icon.png";
import YoutubeIcon from "../../assets/contact_icons/youtube_icon.png";

const Footer = () => {
   return (
      <div className="footer">
         <hr style={{ border: "1px solid #C4C4C4", width: "100vw", maxWidth: "100%" }} />
         <div className="footer_content">
            <div className="company_info">
               <div className="logo">
                  <Link className="navbar_logo" to="/"><img src={logo} alt="Logo" /> <h3 className="company_name">Cimspace Technologies</h3></Link>
               </div>
               <p>Expertly trained, battle-tested, elite software developers on demand</p>
               <p><img src={PhoneCall} alt="" /><a href="tel:+234-706-252-8242">+234 706 252 8242</a></p>
               <p><img src={EmailIcon} alt="" /> info@cimspace.com</p>
               <p><img src={LocationIcon} alt="" />#23 Yaounde Street, Wuse Zone 6, FCT - Abuja, Nigeria.</p>
               <h3>Follow us</h3>
               <div className="social_media_icons" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2rem" }}>
                  <Link><img src={LinkedIn} alt="" /></Link>
                  <Link to="https://web.facebook.com/cimspace"><img src={FacebookIcon} alt="" /></Link>
                  <Link><img src={InstagramIcon} alt="" /></Link>
                  <Link><img src={TwitterIcon} alt="" /></Link>
                  <Link><img src={YoutubeIcon} alt="" /></Link>
               </div>
            </div>
            <div className="quick_links">
               <h3>Company</h3>
               <div className="quick_links_items">
                  <Link to="about_us">About Us</Link>
                  <Link to="success_stories">Success Stories</Link>
                  <Link to="privacy_policy">Privacy Policy</Link>
                  <Link to="terms">Terms & Conditions</Link>
                  <Link to="contact_us">Contact Us</Link>
               </div>
            </div>
            <div className="services_links">
               <h3>Services</h3>
               <div className="services_links_items">
                  <Link>Hire Permanent Staff</Link>
                  <Link>Staff Augmentation</Link>
                  <Link>Software Outsourcing</Link>
                  <Link>Buil Remote Office</Link>
               </div>
            </div>
            <div className="how_to_start_links">
               <h3>How to Start</h3>
               <div className="how_to_start_links_items">
                  <Link>You Asked</Link>
                  <Link>We Proceed</Link>
                  <Link>Negotiate</Link>
                  <Link>You Get</Link>
               </div>
            </div>
         </div>
         <hr style={{ border: "1px solid #C4C4C4", width: "100vw", maxWidth: "100%" }} />
         <div className="footer_buttom" style={{ width: "100vw", maxWidth: "65rem", margin: "0 auto" }}>
            <p>&copy; cimspace technologies 2024</p>
         </div>
      </div>
   );
}

export default Footer;