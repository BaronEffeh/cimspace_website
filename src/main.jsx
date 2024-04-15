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
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how_to_start" element={<HowToStart />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;