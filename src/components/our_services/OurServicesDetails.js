import "../our_services/our_services_details.css";
import DedicatedTeam from "../../assets/dedicated_team.png";
import StaffAugmentation from "../../assets/management.png";
import SoftwareOutsourcing from "../../assets/outsourcing.png";
import RemoteOffice from "../../assets/remote_office.png";

const OurServicesDetails = () => {
   return (
      <div className="our_services_details">
         <div className="our_services_details_desc">
            <h2>Hire Permanent and Remote Developers</h2>
            <p>From full-time remote engineering teams to hourly contractors, work with remote devs as needed</p>
         </div>
         <div className="our_services_details_options">
            <div className="our_services_details_option_list">
               <div className="our_services_details_option_list_img">
                  <img src={DedicatedTeam} alt="" />
               </div>
               <div className="our_services_details_option_list_text">
                  <h3>Dedicated Teams</h3>
                  <p>Building an extended team with Cimspace is just like opening your own remote development center, but without the hassle.</p>
               </div>
            </div>
            <div className="our_services_details_option_list">
               <div className="our_services_details_option_list_img">
                  <img src={StaffAugmentation} alt="" />
               </div>
               <div className="our_services_details_option_list_text">
                  <h3>Staff Augmentation</h3>
                  <p>IT Staff Augmentation is a service designed to add extra talent to your team on an on-demand basis. This allows businesses to immediately find the right fit for hard-to-fill or temporary positions, which boosts the scalability and efficiency of project development.</p>
               </div>
            </div>
            <div className="our_services_details_option_list">
               <div className="our_services_details_option_list_img">
                  <img src={SoftwareOutsourcing} alt="" />
               </div>
               <div className="our_services_details_option_list_text">
                  <h3>Software Outsourcing</h3>
                  <p>Today, organizations all over the world deal with software outsourcing companies to have access to experienced software engineers with a variety of tech expertise ranging from user experience design to blockchain consulting.</p>
               </div>
            </div>
            <div className="our_services_details_option_list">
               <div className="our_services_details_option_list_img">
                  <img src={RemoteOffice} alt="" />
               </div>
               <div className="our_services_details_option_list_text">
                  <h3>Remote Office</h3>
                  <p>Cimspace is a trustworthy partner that can help you open your own remote development center and grow your business from where ever it is to the world.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default OurServicesDetails;