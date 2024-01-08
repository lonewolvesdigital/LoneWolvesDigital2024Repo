import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Book a video call here.</h4>
              <Formik
               
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                   
                   
              <iframe
                 src="https://zcal.co/i/wsJAsy6Y?embed=1&embedType=iframe"
                   loading="lazy"
                    style={{
                     border: 'none',
                     width: '100%',
                     height: '1000px',
                                      }}
                     id="zcal-invite"
              ></iframe> 
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
