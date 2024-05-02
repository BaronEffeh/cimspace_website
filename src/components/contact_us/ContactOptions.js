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
import BaronEffeh from "../../assets/baroneffeh.jpg"

const ContactOptions = () => {
   return (
      <div className="footer">
         <hr style={{ border: "1px solid #C4C4C4", width: "100vw", maxWidth: "100%" }} />
         <div className="footer_content">
            <div className="company_info">
               <div className="logo">
                  <Link className="navbar_logo" to="/"><img src={logo} alt="Logo" /> <h3 className="company_name">Cimspace Technologies</h3></Link>
               </div>
               <p>Office</p>
               <p>info@cimspace.com</p>
               <p><a href="tel:+234-706-252-8242">+234 706 252 8242</a></p>

               <h3>Follow us</h3>
               <div className="social_media_icons" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2rem" }}>
                  <Link><img src={LinkedIn} alt="" /></Link>
                  <Link to="https://web.facebook.com/cimspace" target="_blank"><img src={FacebookIcon} alt="" /></Link>
                  <Link><img src={InstagramIcon} alt="" /></Link>
                  <Link><img src={TwitterIcon} alt="" /></Link>
                  <Link><img src={YoutubeIcon} alt="" /></Link>
               </div>
            </div>
            <div className="quick_links">
               <img src={BaronEffeh} alt="" style={{ objectFit: "cover", height: "80px", width: "70px", borderRadius: "10px" }} />
               <div className="quick_links_items">
                  <Link to="">Effeh Baron</Link>
                  <p>Human Resources</p>
                  {/* <Link to="success_stories">Position</Link> */}
                  <Link to="">effehbaron@cimspace.com</Link>
                  <p><a href="tel:+234-701-292-8822">+234 701 292 8822</a></p>
                  {/* <Link to="terms">Phone Number</Link> */}

               </div>
            </div>
            <div className="services_links">
               <img src={BaronEffeh} alt="" style={{ objectFit: "cover", height: "80px", width: "70px", borderRadius: "10px" }} />
               <div className="services_links_items">
                  <Link>Name</Link>
                  <Link>Position</Link>
                  <Link>Email</Link>
                  <Link>Phone Number</Link>
               </div>
            </div>
            {/* <div className="how_to_start_links">
               <h3>How to Start</h3>
               <div className="how_to_start_links_items">
                  <Link>You Asked</Link>
                  <Link>We Proceed</Link>
                  <Link>Negotiate</Link>
                  <Link>You Get</Link>
               </div>
            </div> */}
         </div>
         {/* <hr style={{ border: "1px solid #C4C4C4", width: "100vw", maxWidth: "100%" }} />
         <div className="footer_buttom" style={{ width: "100vw", maxWidth: "65rem", margin: "0 auto" }}>
            <p>&copy; cimspace technologies 2024</p>
         </div> */}
      </div>
   );
}

export default ContactOptions;