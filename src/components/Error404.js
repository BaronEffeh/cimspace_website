import { Link } from "react-router-dom";

const Error404 = () => {
   return (
      <div className="error404" style={{ alignItems: "center", justifyContent: "center", textAlign: "center", margin: "5rem" }}>
         <h1>Oops! Page Not Found</h1>
         <h2>Error 404!</h2>
         <p>Sorry, the page you are looking for has either been removed or does not exist.</p>
         <p>Go back to  </p><p><Link to='/'><br /><button className="home_intro_btn" style={{ display: "flex", position: "relative", margin: "auto" }}>Home page</button></Link></p>
      </div>
   );
}

export default Error404;