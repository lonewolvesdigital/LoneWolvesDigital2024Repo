import React from "react";
import { Link } from "react-scroll";

const PricePackages = ({ bgGray }) => {
  return (
    <section className={`app-price section-padding ${bgGray ? "bg-gray" : ""}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span> Quotes.
                <span className="right"></span>
              </h6>
              <h2>Popular Pricing Package for Design Mobile Application</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="pric-tables">
              <div className="row">
                {/* FREE PACKAGE */}
                <div className="col-md-6">
                  <div className="item sm-mb50">
                    <div className="type text-center mb-15">
                      <h5>Free Package</h5>
                    </div>
                    <div className="amount text-center mb-40">
                      <h3>
                        <span>R</span> 0
                      </h3>
                    </div>
                    <div className="order mb-40">
                      <Link to="contact" className="butn-gray rounded buton" smooth={true} duration={500}>
                        <span>Select</span>
                      </Link>
                    </div>
                    <FeatureList isPremium={false} />
                  </div>
                </div>

                {/* PREMIUM PACKAGE */}
                <div className="col-md-6">
                  <div className="item active">
                    <div className="type text-center mb-15">
                      <h5>Premium Package</h5>
                    </div>
                    <div className="amount text-center mb-40">
                      <h3>
                        <span>$</span> 59
                      </h3>
                    </div>
                    <div className="order mb-40">
                      <a href="#0" className="butn-gr rounded buton">
                        <span>Choose Package</span>
                      </a>
                    </div>
                    <FeatureList isPremium={true} />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 🔄 Extracted feature list for reusability
const FeatureList = ({ isPremium }) => {
  const features = [
    "Unique Design & Development",
    "Clean Code & Easy Editable",
    "Modern UI Design",
    "350 GB Hosting Free",
    "24/7 Hour Support",
    "Upload Modern Design",
  ];

  return (
    <div className="feat">
      <ul>
        {features.map((feature, index) => (
          <li key={index} className={isPremium || index < 3 ? "" : "disbl"}>
            <i className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
              </svg>
            </i>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricePackages;
