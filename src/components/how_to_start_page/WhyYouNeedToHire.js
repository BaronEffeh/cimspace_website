import "../how_to_start_page/why_you_need_to_hire.css";
import Developers from "../../assets/developers.png";

const WhyYouNeedToHire = () => {
   return (
      <div className="why_you_need_to_hire_container">
         <div className="why_you_need_to_hire_head">
            <h1>Why You Need To Hire
               Remote Developers</h1>
         </div>
         <div className="why_you_need_to_hire_points">
            <h4>>Talent shortage</h4>
            <h4>>Lack of Expertise</h4>
            <h4>>Quick Kick-Off</h4>
            <h4>>Cost Optimization</h4>
            <h4>>Talent Accessibility</h4>
            <h4>>Administrative Hassle</h4>
         </div>
         <div className="developers_img">
            <div className="developers_background_image"></div>
            <div className="text_content">
               {/* <h4 className="no_of_developers" style={{ color: "#FFF" }}>1000+ <br />Developers</h4> */}
            </div>

            <img src={Developers} alt="" />
            {/* <h4 className="no_of_developers">1000+ <br />Developers</h4> */}
         </div>
      </div>
   );
}

export default WhyYouNeedToHire;