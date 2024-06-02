import "../home_pages/home_page_how_to_start.css";
import YouAsk from "../../assets/you_ask.png";
import WeProceed from "../../assets/we_proceed.png";
import Negotiate from "../../assets/handshake.png";
import Medal from "../../assets/medal.png";

const HomePageHowToStart = () => {
   return (
      <div className="home_page_how_to_start">
         <div className="home_page_how_to_start_content">
            <div className="home_page_how_to_start_content_description">
               <h5 className="home_page_how_to_start_title">How to Start</h5>
               <h3>Easy Process</h3>
               <p>We specialize in helping you build a team of expert developers, testers, and leaders.</p>
            </div>
            <div className="home_page_how_to_start_imgs">
               <div >
                  <img src={YouAsk} alt="" className="home_page_how_to_start_img" />
                  <div className="how_to_start_desc">
                     <h2>01</h2>
                     <p>YOU ASK</p>
                  </div>
               </div>
               <div >
                  <img src={WeProceed} alt="" className="home_page_how_to_start_img" />
                  <div className="how_to_start_desc">
                     <h2>02</h2>
                     <p>WE PROCEED</p>
                  </div>
               </div>
               <div >
                  <img src={Negotiate} alt="" className="home_page_how_to_start_img" />
                  <div className="how_to_start_desc">
                     <h2>03</h2>
                     <p>NEGOTIATE</p>
                  </div>
               </div>
               <div >
                  <img src={Medal} alt="" className="home_page_how_to_start_img" />
                  <div className="how_to_start_desc">
                     <h2>04</h2>
                     <p>YOU GET</p>
                  </div>
               </div>



            </div>
         </div>
      </div>
   );
}

export default HomePageHowToStart;