import React from "react";
import Split from "../Split";
import AboutInfo1Data from "../../data/sections/about-info1.json";

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
                <br/>
                <h2 className="wow txt words chars splitting" data-splitting>What<span/> is<span/> Lone<span/> Wolves<span/> Digital?</h2>
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
                <h2 className="wow txt words chars splitting" data-splitting>What <span/>does<span/> Lone <span/>Wolves<span/> Digital<span/> do?</h2>
                <p
                  className="wow txt mb-10 words chars splitting"
                  data-splitting
                >
                  {AboutInfo1Data.paragraph3}
                </p>
                <p className="wow txt words chars splitting" data-splitting>
                  {AboutInfo1Data.paragraph4}
                </p>
                <br/>
                <h2 className="wow txt words chars splitting" data-splitting>How <span/> does <span/>Lone <span/>Wolves <span/>Digital <span/> work?</h2>
                <p
                  className="wow txt mb-10 words chars splitting"
                  data-splitting
                >
                  {AboutInfo1Data.paragraph5}
                </p>
                <p className="wow txt words chars splitting" data-splitting>
                  {AboutInfo1Data.paragraph6}
                </p>
                <br/>
                <h2 className="wow txt words chars splitting" data-splitting>Why <span/> choose <span/> Lone <span/> Wolves <span/> Digtal?</h2>
                <p
                  className="wow txt mb-10 words chars splitting"
                  data-splitting
                >
                  {AboutInfo1Data.paragraph7}
                </p>
                <p className="wow txt words chars splitting" data-splitting>
                  {AboutInfo1Data.paragraph8}
                </p>
                <br/>
                <br/>


              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
