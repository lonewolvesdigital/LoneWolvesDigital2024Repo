import React from "react";
import { Formik, Form, Field } from "formik";

const SContactForm = ({ noLine }) => {
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

  return (
    <section className="contact-sec section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Contact Lone Wolves Digital
              </h6>
              <h3 className="wow color-font">
                Help us, help you, turn your ideas into magic.
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="form wow fadeInUp" data-wow-delay=".5s">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  try {
                    const response = await fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                      },
                      body: JSON.stringify({
                        access_key: "aa414ac5-5454-4bdb-ae40-622f3ff4b5f2", // Replace with your Web3Forms access key
                        name: values.name,
                        email: values.email,
                        message: values.message,
                      }),
                    });

                    const result = await response.json();

                    if (result.success) {
                      messageRef.current.innerText =
                        "Your Message has been successfully sent. We will contact you soon.";
                      resetForm();
                    } else {
                      messageRef.current.innerText =
                        "There was an error sending your message. Please try again.";
                    }
                  } catch (error) {
                    messageRef.current.innerText =
                      "An error occurred. Please try again later.";
                    console.error("Error:", error);
                  }

                  setTimeout(() => {
                    messageRef.current.innerText = "";
                  }, 3000);

                  setSubmitting(false);
                }}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>
                    <div className="controls">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              id="form_name"
                              type="text"
                              name="name"
                              placeholder="Name"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              validate={validateEmail}
                              id="form_email"
                              type="email"
                              name="email"
                              placeholder="Email"
                              required="required"
                            />
                            {errors.email && touched.email && (
                              <div>{errors.email}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <Field
                              as="textarea"
                              id="form_message"
                              name="message"
                              placeholder="Message"
                              rows="4"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-center">
                            <button
                              type="submit"
                              className="nb butn bord curve mt-30"
                              disabled={isSubmitting}
                            >
                              <span>Send Message</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {!noLine ? <div className="line bottom left"></div> : ""}
    </section>
  );
};

export default SContactForm;