import React, { useState } from 'react';
import "../global/contact_section.css";
import ContactImg from "../../assets/contact_img.png";
import { Link } from 'react-router-dom';

function ContactSection() {
   const [formData, setFormData] = useState({
      company: '',
      name: '',
      phone: '',
      email: '',
      projectDetails: '',
      privacyPolicy: false,
   });

   const [submissionStatus, setSubmissionStatus] = useState('');

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: type === 'checkbox' ? checked : value,
      }));
   };

   // Event handler for form submission
   const handleSubmit = (e) => {
      e.preventDefault();

      const phonePattern = /^[0-9]{11}$/;
      if (!phonePattern.test(formData.phone)) {
         setSubmissionStatus('Invalid phone number. Please use 11-digit format.');
         return;
      }

      if (!formData.privacyPolicy) {
         setSubmissionStatus('Please accept the Privacy Policy.');
         return;
      }

      console.log('Form data submitted:', formData);

      // Clear form fields if submission is successful
      setFormData({
         company: '',
         name: '',
         phone: '',
         email: '',
         projectDetails: '',
         privacyPolicy: false,
      });

      // Submission status message
      setSubmissionStatus('Thank you! Your form was submitted successfully.');
   };

   return (
      <div className="contact_section">
         <div className="contact_section_content">
            <div className="contact_section_content_img">
               <img src={ContactImg} alt="Contact" />
            </div>
            <div className="contact_form">
               <div className="contact_form_content">
                  <h2 className='contact_form_heading'>Connect With Your <br /> Next Great Hire Today!</h2>

                  <form onSubmit={handleSubmit}>
                     <div className="contact_form_inputs">
                        <div>
                           <label htmlFor="company">Company:</label>
                           <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              required
                           />
                        </div>

                        <div>
                           <label htmlFor="name">Your Name:</label>
                           <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                           />
                        </div>

                        <div>
                           <label htmlFor="phone">Phone Number:</label>
                           <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              pattern="[0-9]{11}"
                              required
                           />
                        </div>

                        <div>
                           <label htmlFor="email">Email:</label>
                           <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                           />
                        </div>
                     </div>

                     <div className='contact_textarea'>
                        <label htmlFor="projectDetails">Project Details:</label>
                        <textarea
                           className='contact_message'
                           id="projectDetails"
                           name="projectDetails"
                           rows="4"
                           value={formData.projectDetails}
                           onChange={handleChange}
                           required
                        />
                     </div>


                     <div>
                        <label>
                           <input
                              type="checkbox"
                              id="privacyPolicy"
                              name="privacyPolicy"
                              checked={formData.privacyPolicy}
                              onChange={handleChange}
                              required
                           />
                           <span className='privacy_policy'>By sending this form, I confirm that I have read and accept the <Link><b>Privacy Policy.</b></Link></span>
                        </label>
                     </div>

                     {/* Display submission status message */}
                     {submissionStatus && (
                        <p style={{ display: "flex", position: "absolute", color: "rgb(57, 190, 4)" }}>{submissionStatus}</p>
                     )}

                     <button type="submit" className='contact_form_btn'>GET CONSULTATION</button>
                  </form>


               </div>
            </div>
         </div>
      </div>
   );
}

export default ContactSection;