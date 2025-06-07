// import React from "react";
// import ContactFromDate from "../../data/sections/form-info.json";
// import { Formik, Form, Field } from "formik";

// const ContactForm = () => {
//   const messageRef = React.useRef(null);
//   function validateEmail(value) {
//     let error;
//     if (!value) {
//       error = "Required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//       error = "Invalid email address";
//     }
//     return error;
//   }
//   const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
//   return (
//     <section className="contact section-padding">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6">
//             <div className="form md-mb50">
//               <h4 className="fw-700 color-font mb-50">Book a video call here.</h4>
//               <Formik
               
//               >
//                 {({ errors, touched }) => (
//                   <Form id="contact-form">
                   
                   
//               <iframe
//                  src="https://zcal.co/i/wsJAsy6Y?embed=1&embedType=iframe"
//                    loading="lazy"
//                     style={{
//                      border: 'none',
//                      width: '100%',
//                      height: '1000px',
//                                       }}
//                      id="zcal-invite"
//               ></iframe> 
//                   </Form>
//                 )}
//               </Formik>
//             </div>
//           </div>
//           <div className="col-lg-5 offset-lg-1">
//             <div className="cont-info">
//               <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
//               <h3 className="wow" data-splitting>
//                 {ContactFromDate.title}
//               </h3>
//               <div className="item mb-40">
//                 <h5>
//                   <a href="#0">{ContactFromDate.email}</a>
//                 </h5>
//                 <h5>{ContactFromDate.phone}</h5>
//               </div>
//               <h3 className="wow" data-splitting>
//                 Address.
//               </h3>
//               <div className="item">
//                 <h6>
//                   {ContactFromDate.location.first}
//                   <br />
//                   {ContactFromDate.location.second}
//                 </h6>
//               </div>
//               <div className="social mt-50">
//                 <a href="https://www.facebook.com/lonewolvesdigital" className="icon">
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a href="https://www.instagram.com/lonewolvesdigital/" className="icon">
//                   <i className="fab fa-instagram"></i>
//                 </a>
//                 <a href="https://twitter.com/LoneWolvesDigit">
//                 <i className="fab fa-twitter"></i>
//                </a>
                
//                 <a href="https://www.linkedin.com/company/lone-wolves-digital/" className="icon">
//                   <i className="fab fa-linkedin"></i>
//                 </a>
//                 <a href="https://www.youtube.com/@LoneWolvesDigital">
//                   <i className="fab fa-youtube"></i>
//                 </a>
//                 <a href="https://github.com/lonewolvesdigital" className="icon">
//                   <i className="fab fa-github"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;



import React, { useEffect, useState } from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  const messageRef = React.useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  
  // Load Brevo booking script
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src="https://meetings.brevo.com/assets/libs/popup.min.js"]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://meetings.brevo.com/assets/libs/popup.min.js';
    script.type = 'text/javascript';
    script.async = true;
    
    script.onload = () => {
      console.log('Brevo script loaded successfully');
    };
    
    script.onerror = () => {
      console.error('Failed to load Brevo script');
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://meetings.brevo.com/assets/libs/popup.min.js"]');
      if (existingScript && document.head.contains(existingScript)) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  function validateRequired(value) {
    let error;
    if (!value) {
      error = "Required";
    }
    return error;
  }

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2edd3a90-0587-4f9c-9ef8-3eb6e882925b",
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage("Message sent successfully! We'll get back to you soon.");
        resetForm();
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };
  
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  
  const handleBookingClick = (e) => {
    e.preventDefault();
    
    // Add some debugging
    console.log('Book Now clicked');
    console.log('BrevoBookingPage available:', typeof window.BrevoBookingPage);
    
    // Wait a bit for script to load if needed
    const tryBooking = () => {
      if (window.BrevoBookingPage && typeof window.BrevoBookingPage.initStaticButton === 'function') {
        console.log('Initializing Brevo booking...');
        window.BrevoBookingPage.initStaticButton({ 
          url: 'https://meet.brevo.com/caleb-mutombo/borderless' 
        });
      } else {
        console.error('BrevoBookingPage not available or initStaticButton not a function');
        // Fallback: open the URL directly
        window.open('https://meet.brevo.com/caleb-mutombo/borderless', '_blank');
      }
    };
    
    // Try immediately, then with a small delay if needed
    if (window.BrevoBookingPage) {
      tryBooking();
    } else {
      setTimeout(tryBooking, 500);
    }
    
    return false;
  };

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Book a video call here.</h4>
              
              {/* Book Now Button */}
              <div className="mb-50">
                <a 
                  href="#" 
                  onClick={handleBookingClick}
                  style={{
                    cursor: 'pointer',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    backgroundColor: '#1B1B1B',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    border: '0px',
                    boxShadow: 'rgba(0, 0, 0, 0.15) 0px -2px 0px inset',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                >
                  Book Now
                </a>
              </div>

              {/* Contact Form */}
              <h4 className="fw-700 color-font mb-30">Or send us a message.</h4>
              
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  subject: "",
                  message: ""
                }}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, isSubmitting: formikSubmitting }) => (
                  <Form id="contact-form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <Field
                            id="form_name"
                            name="name"
                            placeholder="Name *"
                            className="form-control"
                            validate={validateRequired}
                          />
                          {errors.name && touched.name && (
                            <div className="error-message" style={{color: 'red', fontSize: '14px', marginTop: '5px'}}>
                              {errors.name}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <Field
                            id="form_email"
                            name="email"
                            placeholder="Email *"
                            className="form-control"
                            validate={validateEmail}
                          />
                          {errors.email && touched.email && (
                            <div className="error-message" style={{color: 'red', fontSize: '14px', marginTop: '5px'}}>
                              {errors.email}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <Field
                            id="form_subject"
                            name="subject"
                            placeholder="Subject *"
                            className="form-control"
                            validate={validateRequired}
                          />
                          {errors.subject && touched.subject && (
                            <div className="error-message" style={{color: 'red', fontSize: '14px', marginTop: '5px'}}>
                              {errors.subject}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <Field
                            as="textarea"
                            id="form_message"
                            name="message"
                            placeholder="Message *"
                            className="form-control"
                            rows="4"
                            validate={validateRequired}
                          />
                          {errors.message && touched.message && (
                            <div className="error-message" style={{color: 'red', fontSize: '14px', marginTop: '5px'}}>
                              {errors.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <button
                            id="submit"
                            type="submit"
                            className="btn-curve btn-color btn-lg"
                            disabled={isSubmitting || formikSubmitting}
                          >
                            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                          </button>
                        </div>
                        {submitMessage && (
                          <div 
                            className={`alert mt-3 ${submitMessage.includes('successfully') ? 'alert-success' : 'alert-danger'}`}
                            style={{
                              padding: '10px 15px',
                              borderRadius: '5px',
                              backgroundColor: submitMessage.includes('successfully') ? '#d4edda' : '#f8d7da',
                              color: submitMessage.includes('successfully') ? '#155724' : '#721c24',
                              border: `1px solid ${submitMessage.includes('successfully') ? '#c3e6cb' : '#f5c6cb'}`
                            }}
                          >
                            {submitMessage}
                          </div>
                        )}
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              <h3 className="wow" data-splitting>
                {ContactFromDate.title}
              </h3>
              <div className="item mb-40">
                <h5>
                  <a href="#0">{ContactFromDate.email}</a>
                </h5>
                <h5>{ContactFromDate.phone}</h5>
              </div>
              <h3 className="wow" data-splitting>
                Address.
              </h3>
              <div className="item">
                <h6>
                  {ContactFromDate.location.first}
                  <br />
                  {ContactFromDate.location.second}
                </h6>
              </div>
              <div className="social mt-50">
                <a href="https://www.facebook.com/lonewolvesdigital" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/lonewolvesdigital/" className="icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/LoneWolvesDigit">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/company/lone-wolves-digital/" className="icon">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.youtube.com/@LoneWolvesDigital">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://github.com/lonewolvesdigital" className="icon">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
