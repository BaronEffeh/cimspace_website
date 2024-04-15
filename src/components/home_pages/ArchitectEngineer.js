import ArchitectImg from "../../assets/cube.png";
import Engineer from "../../assets/software_application.png";
import TechSupport from "../../assets/technical_support.png";
import "../home_pages/architect_engineer.css";

const ArchitectEngineer = () => {
   return (
      <div className="architect_engineer">
         <div className="architect_engineer_contents">
            <div className="architect_engineer_item">
               <div className="architect_engineer_img">
                  <img src={ArchitectImg} alt="" />
               </div>
               <div className="architect_engineer_describtion">
                  <h3>Architect your Solution</h3>
                  <p>Our team in on your operational, technological, and strategic challenges through an in-depth understanding of your
                     business. We design a strategic roadmap to guide your result-oriented goals.</p>
               </div>

            </div>
            <div className="architect_engineer_item">
               <div className="architect_engineer_img">
                  <img src={Engineer} alt="" />
               </div>
               <div className="architect_engineer_describtion">
                  <h3>Engineer your Solution</h3>
                  <p>We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We create
                     the most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, and
                     industry-specific experience.</p>
               </div>

            </div>
            <div className="architect_engineer_item">
               <div className="architect_engineer_img">
                  <img src={TechSupport} alt="" />
               </div>
               <div className="architect_engineer_describtion">
                  <h3>ReEngineer your Business Process</h3>
                  <p>Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This
                     process places the foundation for a more efficient and strong business that can meet demands at scale.</p>
               </div>

            </div>
         </div>
      </div>
   );
}

export default ArchitectEngineer;