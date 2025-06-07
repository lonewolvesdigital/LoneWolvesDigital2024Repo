/* eslint-disable @next/next/no-img-element */
import React from "react";
import SkillsRequiredProgress from "../../common/SkillsRequiredProgress";
import tooltipEffect from "../../common/tooltipEffect";
import teamsDate from "../../data/sections/SkillsRequired.json";
import Image from 'next/image';

const SkillsRequired = () => {
  React.useEffect(() => {
    SkillsRequiredProgress();
    setTimeout(() => {
      tooltipEffect();
    }, 1000);
  }, []);

  return (
    <div className="team-crv section-padding">
      <div className="container">
         <div style={{justifyContent: "center", display: "flex",}} className="content wow fadeInUp md-mb30" data-wow-delay=".5s">
              <div style={{textAlign: "center", marginBottom: "100px"}}>
                <div className="sub-title">
                <h6>OUR SKILLS</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="co-tit mb-15">
                To go fast one must go alone, to go far we must go together!
              </h3>
              <p>
                Through collaboration, Lone Wolves Digital has managed to diversify the digital products and services offered here. This allows you to outsource your entire workforce! Here is what Lone Wolves Digital’s team is made of…
              </p>
              </div>
            </div>
        {/* <div className="row"> */}
          {/* <div className="col-lg-5 valign">
           
          </div> */}
          {/* <div className="col-lg-6 offset-lg-1"> */}
            <div className="img-box">
              <div className="row">
                {teamsDate.teams.map((team, index) => (
                  <div className="col-sm-4" key={team.id}>
                    <div className="full-width text-left">
                      <div
                        className={`img sizxl ${index + 1 !== teamsDate.teams.length ? "mb-30" : ""}`}
                        data-tooltip-sub={team.sub}
                      >
                        <Image
                          src={team.image}
                          alt={team.title}
                          className="imago wow"
                          width={300}
                          height={400}
                        />
                        <h6 className="custom-font mt-10">{team.title}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default SkillsRequired;