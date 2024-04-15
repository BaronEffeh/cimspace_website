import Intro from "../components/home_pages/Intro";
import ArchitectEngineer from "./home_pages/ArchitectEngineer";
import Expertise from "./home_pages/Expertise";
import HomePageHowToStart from "./home_pages/HomePageHowToStart";
// import SpecializedTry from "./home_pages/SpecializedTry";
import Specialized from "./home_pages/Specialized";

const Home = () => {
   return (
      <div className="content">

         <Intro />

         <ArchitectEngineer />

         <HomePageHowToStart />

         <Expertise />

         {/* <SpecializedTry /> */}

         <Specialized />
      </div>
   );
}

export default Home;