import React from "react";
import Split from "../Split";
import AboutInfo1Data from "../../data/sections/about-Caleb.json";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h1>{AboutInfo1Data.title}</h1>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>

                <h2 className="wow txt mb-10 words chars splitting">
                Please <span/> allow <span/>me<span/> to<span/> introduce<span/> myself.
                </h2>
                <p
                  className="wow txt mb-10 words chars splitting"
                  data-splitting
                >
                  {AboutInfo1Data.paragraph1}
                </p>
                <p className="wow txt words chars splitting" data-splitting>
                  {AboutInfo1Data.paragraph2}
                </p>
                  <br/>
                <p className="wow txt words chars splitting" data-splitting>
                  {AboutInfo1Data.paragraph3}
                </p>
                <p className="wow txt words chars splitting" data-splitting>
                  {AboutInfo1Data.paragraph4}
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
