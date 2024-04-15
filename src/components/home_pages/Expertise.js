import "../../components/home_pages/expertise.css";
import Team from "../../assets/dedicated_team.png";
import Management from "../../assets/management.png";
import Outsource from "../../assets/outsourcing.png";
import RemoteOffice from "../../assets/remote_office.png";

const Expertise = () => {
   return (
      <div className="expertise">
         <div className="expertise_content">
            <div className="expertise_description">
               <h5 className="expertise_title">Expertise</h5>
               <h3 className="expertise_subtitle">Hire Permanent and Remote <br /> Developers</h3>
               <p className="expertise">From full-time remote engineering teams to hourly contractors, work with remote devs as needed</p>
            </div>
            <div className="expertise_imgs">
               <div className="expertise_img_list">
                  <img src={Team} alt="" className="expertise_img_item" />
                  <h3>Dedicated Teams</h3>
                  <p>Find your next team member</p>
               </div>
               <div className="expertise_img_list">
                  <img src={Management} alt="" className="expertise_img_item" />
                  <h3>Staff Augmentation</h3>
                  <p>Build a distributed development team</p>
               </div>
               <div className="expertise_img_list">
                  <img src={Outsource} alt="" className="expertise_img_item" />
                  <h3>Software Outsourcing</h3>
                  <p>End-to-End Software Development Outsourcing Solutions</p>
               </div>
               <div className="expertise_img_list">
                  <img src={RemoteOffice} alt="" className="expertise_img_item" />
                  <h3>Remote Office</h3>
                  <p>Open your own remote development center and grow your business</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Expertise;