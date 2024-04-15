import "../home_pages/intro.css";
import IntroImg from "../../assets/home_intro_img.png";
import { Link } from "react-router-dom";

const Intro = () => {
   return (
      <div className="home_intro">

         <div className="home_intro_contents">
            <div className="home_intro_text">
               <h1 className="home_intro_text_title">Building dev team, <br /> Quickly and <br /> Affordably</h1>
               <p className="home_intro_text_para">We specialize in helping you build a team of expert developers, testers, and leaders. We are setup to deliver long term solutions, or scale to different needs quickly.
               </p>
               <Link><button className="home_intro_btn">Build a team</button></Link>
            </div>
            <div className="home_intro_img"><img src={IntroImg} alt="" /></div>
         </div>
      </div>
   );
}

export default Intro;