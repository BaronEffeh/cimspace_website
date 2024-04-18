import { Link } from "react-router-dom";
import logo from "../../assets/cimspaceLogo.jpeg";
import "../global/footer.css";

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
               <p>+234 701 292 8822</p>
               <p>info@cimspace.com</p>
               <p>#23 Yaounde Street, Wuse Zone 6, FCT - Abuja, Nigeria.</p>
               <p>Follow us</p>
            </div>
            <div className="quick_links">
               <h2>Company</h2>
               <div className="quick_links_items">
                  <Link>About Us</Link>
                  <Link>Success Stories</Link>
                  <Link>Privacy Policy</Link>
                  <Link>Terms & Conditions</Link>
                  <Link>Contact Us</Link>
               </div>
            </div>
            <div className="services_links">
               <h2>Services</h2>
               <div className="services_links_items">
                  <Link>Hire Permanent Staff</Link>
                  <Link>Staff Augmentation</Link>
                  <Link>Software Outsourcing</Link>
                  <Link>Buil Remote Office</Link>
               </div>
            </div>
            <div className="how_to_start_links">
               <h2>How to Start</h2>
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