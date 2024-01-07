import React from "react";

const Progress = () => {
  return (
    <section className="app-process section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span> Request a quote!
                <span className="right"></span>
              </h6>
              <h2>It&apos;s easy as 1,2,3</h2>
            </div>
          </div>
        </div>

        <div className="row">

          

          <div className="col-lg-4">
            <div className="item text-center">
              <span className="icon pe-7s-cart"></span>
              <h5>Choose your digital products and or services/s</h5>
              <span className="step-number">Step 1</span>
              <p>
              Here at Lone Wolves Digital, we got a deal for everyone. Yes, that means you too. No matter your budget, we can work something out today!
              </p>
            </div>
          </div>

         <div className="col-lg-4">
            <div className="item text-center md-mb50">
              <span className="icon pe-7s-note"></span>
              <h5>Fill out the questionnaire.</h5>
              <span className="step-number">Step 2</span>
              <p>
              Tell us what your project is all about, and we will show it to you in no time. I want to know it all. So, you can get it all.
 
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item text-center md-mb50">
              <span className="icon pe-7s-cloud-download"></span>
              <h5>Download the quotation</h5>
              <span className="step-number">Step 3</span>
              <p>
              We will send you the quote or contract if, you are comfortable with it let, us know and we will seal our end of the deal and send you a copy of the agreement.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
