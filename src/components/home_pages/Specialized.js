import React from 'react';
import "../../components/home_pages/specialized.css"; // Make sure the path is correct
import Frontend from '../../assets/frontend.png';
import Angular from '../../assets/angular_solidBlack.png';
import AiMl from '../../assets/chip.png';
import AppSecurity from '../../assets/security.png';
import Fullstack from '../../assets/software-application 3.png';
import DevOps from '../../assets/technical-support.png';
import DataScience from '../../assets/data-science.png';
import IosAndroidDev from '../../assets/phone.png';
import UiUx from '../../assets/uiux.png';
import Php from '../../assets/php.png';
import ProjectManager from '../../assets/scrum.png';
import SolutionArchitects from '../../assets/networking.png';
import QAEngineers from '../../assets/quality.png';
import Wordpress from '../../assets/wordpress-logo.png';
import Analysis from '../../assets/analysis.png';
import TechLeads from '../../assets/team-leader.png';
import ProductDesigner from '../../assets/idea.png';
import MobileAppDev from '../../assets/phone2.png';
import InfoSecurity from '../../assets/padlock.png';
import GoLogo from '../../assets/Go-Logo_Black.png';
import Database from '../../assets/database.png';


const Specialized = () => {
   // Task list with categories and specialties
   const taskList = [
      { id: 1, category: 'Frontend', specialty: 'Frontend Engineers' },
      { id: 2, category: 'Angular', specialty: 'Angular Developers' },
      { id: 3, category: 'AiMl', specialty: 'AI and ML Engineers Deep Lerning/Machine' },
      { id: 4, category: 'AppSecurity', specialty: 'Application Security Engineers' },
      { id: 5, category: 'Fullstack', specialty: 'Fullstack Engineers' },
      { id: 6, category: 'DevOps', specialty: 'DevOps + DevSecOps Engineers' },
      { id: 7, category: 'DataScience', specialty: 'Data Scientist/Data Engineers' },
      { id: 8, category: 'IosAndroidDev', specialty: 'IOS and Android Developers' },
      { id: 9, category: 'UiUx', specialty: 'UI/UX Engineers' },
      { id: 10, category: 'Php', specialty: 'PHP Developers' },
      { id: 11, category: 'ProjectManager', specialty: 'Project Managers' },
      { id: 12, category: 'SolutionArchitects', specialty: 'Solution Architects' },
      { id: 13, category: 'QAEngineers', specialty: 'QA Engineers' },
      { id: 14, category: 'Wordpress', specialty: 'Wordpress CMS Developments' },
      { id: 15, category: 'Analysis', specialty: 'Business Analyst' },
      { id: 16, category: 'TechLeads', specialty: 'Tech Leads/Team Leads' },
      { id: 17, category: 'ProductDesigner', specialty: 'Product Designer' },
      { id: 18, category: 'MobileAppDev', specialty: 'Mobile App Developers' },
      { id: 19, category: 'InfoSecurity', specialty: 'Information Security Engineers' },
      { id: 20, category: 'GoLogo', specialty: 'Golang Dev' },
      { id: 21, category: 'Database', specialty: 'Database Admin' },
   ];

   return (
      <div className="specialized">
         <div className="specialized_description">
            <h5>Specialized</h5>
            <h2>Specialized Staff We Provide</h2>
         </div>

         <div className="specialized_items">
            {taskList.map((task) => (
               <div key={task.id} className="specialized_item_card">
                  {task.category === 'Frontend' && (
                     <img src={Frontend} alt="Frontend" className='specialized_img' />
                  )}
                  {task.category === 'Angular' && (
                     <img src={Angular} alt="Angular" className='specialized_img' />
                  )}
                  {task.category === 'AiMl' && (
                     <img src={AiMl} alt="AI/ML" className='specialized_img' />
                  )}
                  {task.category === 'AppSecurity' && (
                     <img src={AppSecurity} alt="AppSecurity" className='specialized_img' />
                  )}
                  {task.category === 'Fullstack' && (
                     <img src={Fullstack} alt="Fullstack" className='specialized_img' />
                  )}
                  {task.category === 'DevOps' && (
                     <img src={DevOps} alt="Dev Ops" className='specialized_img' />
                  )}
                  {task.category === 'DataScience' && (
                     <img src={DataScience} alt="Data Science" className='specialized_img' />
                  )}
                  {task.category === 'IosAndroidDev' && (
                     <img src={IosAndroidDev} alt="IOS Android Dev" className='specialized_img' />
                  )}
                  {task.category === 'UiUx' && (
                     <img src={UiUx} alt="UI/UX" className='specialized_img' />
                  )}
                  {task.category === 'Php' && (
                     <img src={Php} alt="PHP" className='specialized_img' />
                  )}
                  {task.category === 'ProjectManager' && (
                     <img src={ProjectManager} alt="Project Manager" className='specialized_img' />
                  )}
                  {task.category === 'SolutionArchitects' && (
                     <img src={SolutionArchitects} alt="Solution Architects" className='specialized_img' />
                  )}
                  {task.category === 'QAEngineers' && (
                     <img src={QAEngineers} alt="QAEngineers" className='specialized_img' />
                  )}
                  {task.category === 'Wordpress' && (
                     <img src={Wordpress} alt="Wordpress" className='specialized_img' />
                  )}
                  {task.category === 'Analysis' && (
                     <img src={Analysis} alt="Analysis" className='specialized_img' />
                  )}
                  {task.category === 'TechLeads' && (
                     <img src={TechLeads} alt="TechLeads" className='specialized_img' />
                  )}
                  {task.category === 'ProductDesigner' && (
                     <img src={ProductDesigner} alt="ProductDesigner" className='specialized_img' />
                  )}
                  {task.category === 'MobileAppDev' && (
                     <img src={MobileAppDev} alt="MobileAppDev" className='specialized_img' />
                  )}
                  {task.category === 'InfoSecurity' && (
                     <img src={InfoSecurity} alt="InfoSecurity" className='specialized_img' />
                  )}
                  {task.category === 'GoLogo' && (
                     <img src={GoLogo} alt="GoLogo" className='specialized_img' />
                  )}
                  {task.category === 'Database' && (
                     <img src={Database} alt="Database" className='specialized_img' />
                  )}
                  {/* Display specialty */}
                  <div className='specialized_item_card_name'>{task.specialty}</div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Specialized;
