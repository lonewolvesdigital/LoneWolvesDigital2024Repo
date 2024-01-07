import React from "react";
import Split from "../Split";
import AboutInfo1Data from "../../data/sections/about-Caleb2.json";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30 wow txt mb-10 words chars splitting">
              <h1>{AboutInfo1Data.title}</h1>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <h2 className="wow txt mb-10 words chars splitting">
                Discipline
                </h2>
                <p
                  className="wow txt mb-10 words chars splitting"
                  data-splitting
                >
                  {AboutInfo1Data.paragraph5}
                </p>
                  
                <h2 className="wow txt mb-10 words chars splitting">
                Hard-working
                </h2>
                <p className="wow txt mb-10 words chars splitting" data-splitting>
                  {AboutInfo1Data.paragraph6}
                </p>
                <br/>
                <h2 className="">
                Passion <span/> & <span/>Vision
                </h2>
                <p className="" data-splitting>
                  {AboutInfo1Data.paragraph7}
                </p>
                <br/>
                <h2 className="">
                Good <span/> grades
                </h2>
                <p className="" data-splitting>
                  {AboutInfo1Data.paragraph8}
                </p>
                <br/>
                <h2 className="">
                My <span/> Life <span/> challenges
                </h2>
                <p className="" data-splitting>
                  {AboutInfo1Data.paragraph9}
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
