import React from "react";
import fadeWhenScroll from "../../common/fadeWhenScroll";

const WorksHeader = ({ sliderRef }) => {
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .capt .parlx"));
  }, []);
  return (
    <header
      ref={sliderRef}
      className="works-header fixed-slider hfixd valign sub-bg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9 static">
            <div className="capt mt-50">
              <div className="parlx text-center">
                <h1 className="color-font">FEAST YOUR EYES</h1>
                <p>
                Welcome to the one-stop shop for all digital products and services, there is no need to go to multiple places for multiple digital products and services.  
                </p>
              </div>

              <div className="bactxt custom-font valign">
                <span className="full-width">CATALOG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WorksHeader;
