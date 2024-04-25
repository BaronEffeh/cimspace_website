import "../../components/how_to_start_page/how_to_start_desc.css";
import Request from "../../assets/request.png";
import Interview from "../../assets/online-conference.png";
import Hire from "../../assets/hire.png";

const HowToStartDesc = () => {
   return (
      <div className="container" style={{}}>
         <div className="how_to_start_desc" style={{ width: "25rem", marginTop: "5rem" }}>
            <h2>How to Get Started with Cimspace</h2>
            <p>From full-time remote engineering teams to hourly contractors, work with remote devs as needed</p>
         </div>
         <div className="how_to_start_steps" style={{ marginTop: "5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            <div className="how_to_start_process">
               <div>
                  <img src={Request} alt="" />
               </div>
               <div className="how_to_start_process_disc">
                  <h3>01. Request</h3>
                  <p>Tell us more about your requirements and technical needs</p>
               </div>
            </div>
            <div className="how_to_start_process">
               <div>
                  <img src={Interview} alt="" />
               </div>
               <div className="how_to_start_process_disc">
                  <h3>02. Interview</h3>
                  <p>You interview candidates. Average 2 interviews to hire.</p>
               </div>
            </div>
            <div className="how_to_start_process">
               <div>
                  <img src={Hire} alt="" />
               </div>
               <div className="how_to_start_process_disc">
                  <h3>03. Hire</h3>
                  <p>You choose who to hire, and we handle all the paperwork.</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default HowToStartDesc;