import React from 'react';
import "../../components/home_pages/specialized.css"; // Make sure the path is correct
import Frontend from '../../assets/frontend.png';
import Angular from '../../assets/angular_solidBlack.png';
import AiMl from '../../assets/chip.png';

const Specialized = () => {
   // Task list with categories and specialties
   const taskList = [
      { id: 13, category: 'Frontend', specialty: 'Frontend Engineers' },
      { id: 15, category: 'Angular', specialty: 'Angular Developers' },
      { id: 16, category: 'AiMl', specialty: 'Machine Learning' },
      { id: 14, category: 'Frontend', specialty: 'Frontend Engineers' },
   ];

   return (
      <div className="specialized">
         <div className="specialized_items">
            {/* Iterate over task list */}
            {taskList.map((task) => (
               <div key={task.id} className="specialized_item_card">
                  {/* Render the appropriate image based on the task category */}
                  {task.category === 'Frontend' && (
                     <img src={Frontend} alt="Frontend" className='specialized_img' />
                  )}
                  {task.category === 'Angular' && (
                     <img src={Angular} alt="Angular" className='specialized_img' />
                  )}
                  {task.category === 'AiMl' && (
                     <img src={AiMl} alt="AI/ML" className='specialized_img' />
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
