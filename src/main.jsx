// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import HowToStart from "./components/HowToStart";
import NavBar from "./components/global/NavBar";
import Footer from "./components/global/Footer";
import OurServices from "./components/OurServices";
import Technologies from "./components/Technologies";
import Careers from "./components/Careers";
import ContactUs from "./components/ContactUs";
import { Helmet } from "react-helmet";
// import './App.css';

// function App() {
//   return (
//     <div className="App">

//       <div className="content">App Containt</div>

//     </div>
//   );
// }

// export default App;

// const main = () => {

//   const router = createBrowserRouter(
//     [
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "how_to_start",
//         element: <HowToStart />
//       }
//     ])

//   ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//       <RouterProvider router={router} />
//     </React.StrictMode>
//   );
// }

// export default main

function App() {
  return (
    <BrowserRouter>
      <div>
        <Helmet>
          <title>Cimspace Technologies | Cimspace Technologies</title>
        </Helmet>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="how_to_start" element={<HowToStart />} />
          <Route path="services" element={<OurServices />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact_us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;