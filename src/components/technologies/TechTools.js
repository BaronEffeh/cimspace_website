import React, { useState } from 'react';
import "../../components/technologies/tech_tools.css";
import JavaScript from "../../assets/tech_tools/js.png";
import ReactLogo from "../../assets/tech_tools/react_logo.png";
import VueJs from "../../assets/tech_tools/logo-vuejs-min.png";
import EIcon from "../../assets/tech_tools/e-icon.png";
import Html from "../../assets/tech_tools/html.png";
import Css from "../../assets/tech_tools/css.png";
import NodeJs from "../../assets/tech_tools/NodeJs_logo.png";
import JavaIcon from "../../assets/tech_tools/Java_programming_language_logo.png";
import PythonSymbol from "../../assets/tech_tools/Python-Symbol.png";
import Php from "../../assets/tech_tools/PHP-logo.png";
import CSharp from "../../assets/tech_tools/c-sharp-logo.png";
import CPlusePluse from "../../assets/tech_tools/C++_Logo.png";
import Laravel from "../../assets/tech_tools/laravel-logo.png";
import Symfony from "../../assets/tech_tools/symfony-logo.png";
import Django from "../../assets/tech_tools/Django_logo.png";
import ExpressJs from "../../assets/tech_tools/express_js.png";
import Spring from "../../assets/tech_tools/spring.png";
import Ios from "../../assets/tech_tools/iOS-Logo-2013.png";
import ReactNative from "../../assets/tech_tools/react-native.png";
import Flutter from "../../assets/tech_tools/Google-flutter-logo.png";
import Kotlin from "../../assets/tech_tools/Kotlin_logo.png";
import Ionic from "../../assets/tech_tools/Ionic_Logo.png";
import MySQL from "../../assets/tech_tools/MySQL-Logo.png";
import SQLServer from "../../assets/tech_tools/microsoft-sql-server-logo.png";
import PostgreSql from "../../assets/tech_tools/postgresql-icon.png";
import MariaDB from "../../assets/tech_tools/mariadb-logo.png";
import MongoDB from "../../assets/tech_tools/mongodb_logo.png";
import Redis from "../../assets/tech_tools/Redis-Logo.png";
import Oracle from "../../assets/tech_tools/Oracle-Logo.png";
import Go from "../../assets/tech_tools/Go_Logo.png";
import Angular from "../../assets/tech_tools/angular-logo.png";
import Android from "../../assets/tech_tools/android_logo.png";
import RStudio from "../../assets/tech_tools/RStudio.png";
import Hadoop from "../../assets/tech_tools/hadoop.png";
import PowerBI from "../../assets/tech_tools/powerBi.png";
import OpenCV from "../../assets/tech_tools/OpenCV_logo.png";

const TechTools = () => {
   const [filter, setFilter] = useState('All');

   // Sample data containing image URLs and categories
   const cardsData = [
      { id: 1, imageUrl: JavaScript, category: 'Frontend' },
      { id: 2, imageUrl: ReactLogo, category: 'Framework' },
      { id: 3, imageUrl: VueJs, category: 'Framework' },
      { id: 4, imageUrl: EIcon, category: 'Backend' },
      { id: 5, imageUrl: Html, category: 'Frontend' },
      { id: 6, imageUrl: Css, category: 'Frontend' },
      { id: 7, imageUrl: NodeJs, category: 'Backend' },
      { id: 8, imageUrl: JavaIcon, category: 'Backend' },
      { id: 9, imageUrl: PythonSymbol, category: 'Backend' },
      { id: 10, imageUrl: Php, category: 'Backend' },
      { id: 11, imageUrl: CSharp, category: 'Backend' },
      { id: 12, imageUrl: CPlusePluse, category: 'Backend' },
      { id: 13, imageUrl: Laravel, category: 'Backend' },
      { id: 14, imageUrl: Symfony, category: 'Backend' },
      { id: 15, imageUrl: Django, category: 'Backend' },
      { id: 16, imageUrl: ExpressJs, category: 'Backend' },
      { id: 17, imageUrl: Spring, category: 'Backend' },
      { id: 18, imageUrl: Ios, category: 'Backend' },
      { id: 19, imageUrl: ReactNative, category: 'Mobile App' },
      { id: 20, imageUrl: Flutter, category: 'Mobile App' },
      { id: 21, imageUrl: Kotlin, category: 'Backend' },
      { id: 22, imageUrl: Ionic, category: 'Backend' },
      { id: 23, imageUrl: MySQL, category: 'DataBase' },
      { id: 24, imageUrl: SQLServer, category: 'DataBase' },
      { id: 25, imageUrl: PostgreSql, category: 'DataBase' },
      { id: 26, imageUrl: MariaDB, category: 'DataBase' },
      { id: 27, imageUrl: MongoDB, category: 'DataBase' },
      { id: 28, imageUrl: Redis, category: 'Backend' },
      { id: 29, imageUrl: Oracle, category: 'Backend' },
      { id: 30, imageUrl: Go, category: 'Backend' },
      { id: 31, imageUrl: Angular, category: 'Framework' },
      { id: 32, imageUrl: Android, category: 'Backend' },
      { id: 33, imageUrl: RStudio, category: 'Backend' },
      { id: 34, imageUrl: Hadoop, category: 'Backend' },
      { id: 35, imageUrl: PowerBI, category: 'Backend' },
      { id: 36, imageUrl: OpenCV, category: 'Backend' },
      // Add more card data here...
   ];

   // Function to filter cards based on category
   const filteredCards = filter === 'All' ? cardsData : cardsData.filter(card => card.category === filter);

   return (
      <div style={{ width: '100vw', maxWidth: '65rem', margin: '5rem auto' }}>
         <div className='tech_tools_categories' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button onClick={() => setFilter('All')}>All</button>
            <button onClick={() => setFilter('Frontend')}>Frontend</button>
            <button onClick={() => setFilter('Backend')}>Backend</button>
            <button onClick={() => setFilter('Framework')}>Framework</button>
            <button onClick={() => setFilter('Mobile App')}>Moblie App</button>
            <button onClick={() => setFilter('DataBase')}>DataBase</button>
            <button onClick={() => setFilter('Google')}>Google</button>
            <button onClick={() => setFilter('Data Science')}>Data Science</button>
            <button onClick={() => setFilter('Machine Learning')}>Machine Learning</button>
            <button onClick={() => setFilter('DevOps')}>DevOps</button>
            <button onClick={() => setFilter('CMS')}>CMS</button>
            <button onClick={() => setFilter('ECommerce')}>ECommerce</button>
            <button onClick={() => setFilter('Security')}>Security</button>
         </div>
         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {filteredCards.map(card => (
               <div key={card.id} style={{ width: '80px', height: '40px', margin: '0.9rem', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', }}>
                  <img src={card.imageUrl} alt={`Card ${card.id}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
               </div>
            ))}
         </div>
      </div>
   );
};

export default TechTools;
