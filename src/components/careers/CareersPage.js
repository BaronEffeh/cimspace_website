import "../../components/careers/careers_page.css";

const CareersPage = () => {
   return (
      <div className="careers_page_container">
         <div className="join_us" style={{ maxWidth: "75%" }}>
            <h2>Please join us</h2>
            <p>Take a look at the open positions below.</p>

            <p>If none of them suit you, or you feel you could help us in other ways, please fill out the form below or contact us directly at carrers@cimspace.com
            </p>
         </div>
         <h3>Developers</h3>
         <div className="developers">
            <div className="developers_heading" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10rem", marginLeft: "0px" }}>
               <div className="developers_heading_desc"><h5>ROLE</h5></div>
               <div className="developers_heading_desc"><h5>SKILL</h5></div>
               <div className="developers_heading_desc"><h5>LOCATION</h5></div>
            </div>
            <hr />
            <div className="developers_text_container">
               <div className="developers_text_containt">
                  <h3>Senior Web Full Stack Developer</h3>
                  <p>Seniority in development is not just about how much time you have already spent behind the computer screen. It's the way you think, how you approach problems and their solutions, the responsibility you take on and feel.</p>
                  <button className="apply_now" style={{ border: "none", borderRadius: "5px", padding: "5px 15px", backgroundImage: "linear-gradient(to bottom right, #FF9900, #F2CB00)", color: "white" }}>APPLY NOW</button>
                  <button className="learn_more" style={{ border: "none", borderRadius: "5px", padding: "5px 15px", background: "#F3F3F3", marginLeft: "1rem" }}>LEARN MORE</button>
               </div>
               <div className="developers_text_containt">
                  <ul id="developers_skills">
                     <li>Node.js</li>
                     <li>React js</li>
                     <li>Vue js</li>
                     <li>Typescript</li>
                     <li>JavaScript</li>
                     <li>Next JS</li>
                     <li>Amplify</li>
                     <li>AWS</li>
                     <li>Terraform</li>
                     <li>C# and .NET</li>
                     <li>GraphQL</li>
                     <li>Serverless Framework</li>
                  </ul>
               </div>
               <div className="developers_text_containt">
                  <ul>
                     <li>Remote,</li>
                     <li>Ostrava - Czech Republic,</li>
                     <li>Brno - Czech Republic,</li>
                     <li>Barcelona - Spain,</li>
                     <li>Prague - Czech Republic,</li>
                     <li>Zlín - Czech Republic</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}

export default CareersPage;