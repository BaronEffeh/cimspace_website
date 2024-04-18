import "./navbar.css";
import logo from "../../assets/cimspaceLogo.jpeg";
import { Link } from "react-router-dom";

const NavBar = () => {
   return (
      <div className="navbar">
         <div className="navbarcontent">
            <div className="logo">
               <Link className="navbar_logo" to="/"><img src={logo} alt="Logo" /> <h3 className="company_name">Cimspace Technologies</h3></Link>
            </div>
            <div className="desktopMenu">
               <Link className="desktopMenuListItem" to="how_to_start">How to start</Link>
               <Link className="desktopMenuListItem" to="services">Services</Link>
               <Link className="desktopMenuListItem" to="technologies">Technologies</Link>
               <Link className="desktopMenuListItem" to="careers">Careers</Link>
            </div>

            <div>
               <Link><button className="desktopMenuBtn">BUILD A TEAM</button></Link>
               <Link className="desktopMenuListItem" to="contact_us">Contact us</Link>
            </div>
         </div>

      </div>
   );
}

export default NavBar;