import { Helmet } from "react-helmet";
import Intro from "../components/home_pages/Intro";
import ContactSection from "./global/ContactSection";
import ArchitectEngineer from "./home_pages/ArchitectEngineer";
import Clients from "./home_pages/Clients";
import Expertise from "./home_pages/Expertise";
import HomePageHowToStart from "./home_pages/HomePageHowToStart";
// import ImageCarousel from "./home_pages/ImageCarousel";
// import SpecializedTry from "./home_pages/SpecializedTry";
import Specialized from "./home_pages/Specialized";
import Technologies from "./home_pages/Technologies";

const Home = () => {
   return (
      <div className="content">
         <Helmet>
            <title>Cimspace Technologies</title>
         </Helmet>

         <Intro />

         <ArchitectEngineer />

         <HomePageHowToStart />

         <Expertise />

         {/* <SpecializedTry /> */}

         <Specialized />

         <Technologies />

         {/* <ImageCarousel /> */}

         <Clients />

         <ContactSection />
      </div>
   );
}

export default Home;