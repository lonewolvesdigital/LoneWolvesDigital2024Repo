/* eslint-disable @next/next/no-img-element */
import React from "react";
import SkillsRequiredProgress from "../../common/SkillsRequiredProgress";
import tooltipEffect from "../../common/tooltipEffect";
import teamsDate from "../../data/sections/SkillsRequired.json";
import Image from 'next/image';


const SkillsRequired = () => {
  React.useEffect(() => {
    SkillsRequiredProgress()
    setTimeout(() => {
      tooltipEffect()
    }, 1000);
  }, []);
  return (
    <div className="team-crv section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="content wow fadeInUp md-mb30" data-wow-delay=".5s">
              <div className="sub-title">
                <h6>OUR SKILLS</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="co-tit mb-15 ">
              To go fast one must go alone, to go far we must go together!  
               </h3>
              <p>
              Through collaboration, Lone Wolves Digital has manage to diversify the digital products and services offered here. This allows you to outsource your entire workforce! Here is what Lone Wolves Digital’s team is Made of…
              </p>
              <div className="skills-box mt-40">
                {teamsDate.skills.map((skill) => (
                  <div className="skill-item" key={skill.id}>
                    <h6 className="custom-font">{skill.text}</h6>
                    <div className="skill-progress">
                      <div className="progres" data-value={skill.value}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="img-box">
              <div className="row">
                <div className="col-sm-6 toright">
                  <div className="full-width">
                    {teamsDate.teams.slice(0, 2).map((team, index) => (
                      <div key={team.id}>
                        <div
                          className={`img sizxl ${
                            index + 1 != teamsDate.teams.slice(0, 2).length
                              ? "mb-30"
                              : null
                          }`}
                          data-tooltip-tit={team.title}
                          data-tooltip-sub={team.sub}
                        >
                          <Image src={team.image} alt="" className="imago wow" 
                            width={300}
                            height={400} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-sm-6 toleft valign">
                  <div className="full-width text-left">
                    {teamsDate.teams.slice(2, 4).map((team, index) => (
                      <div key={team.id}>
                        <div
                          className={`img sizxl ${
                            index + 1 != teamsDate.teams.slice(2, 4).length
                              ? "mb-30"
                              : null
                          }`}
                          data-tooltip-tit={team.title}
                          data-tooltip-sub={team.sub}
                        >
                          <Image src={team.image} alt="" className="imago wow" 
                          width={300}
                          height={400}/>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-sm-6 toleft valign">
                  <div className="full-width text-left">
                    {teamsDate.teams.slice(4, 6).map((team, index) => (
                      <div key={team.id}>
                        <div
                          className={`img sizxl ${
                            index + 1 != teamsDate.teams.slice(2, 4).length
                              ? "mb-30"
                              : null
                          }`}
                          data-tooltip-tit={team.title}
                          data-tooltip-sub={team.sub}
                        >
                          <Image src={team.image} alt="" className="imago wow" 
                          width={300}
                          height={400}/>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-sm-6 toleft valign">
                  <div className="full-width text-left">
                    {teamsDate.teams.slice(6, 8).map((team, index) => (
                      <div key={team.id}>
                        <div
                          className={`img sizxl ${
                            index + 1 != teamsDate.teams.slice(2, 4).length
                              ? "mb-30"
                              : null
                          }`}
                          data-tooltip-tit={team.title}
                          data-tooltip-sub={team.sub}
                        >
                          <Image src={team.image} alt="" className="imago wow" 
                          width={300}
                          height={400}/>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-sm-6 toleft valign">
                  <div className="full-width text-left">
                    {teamsDate.teams.slice(8, 10).map((team, index) => (
                      <div key={team.id}>
                        <div
                          className={`img sizxl ${
                            index + 1 != teamsDate.teams.slice(2, 4).length
                              ? "mb-30"
                              : null
                          }`}
                          data-tooltip-tit={team.title}
                          data-tooltip-sub={team.sub}
                        >
                          <Image src={team.image} alt="" className="imago wow" 
                          width={300}
                          height={400}/>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                </div>
                <div className="col-sm-6 toleft valign">
                  <div className="full-width text-left">
                    {teamsDate.teams.slice(10, 12).map((team, index) => (
                      <div key={team.id}>
                        <div
                          className={`img sizxl ${
                            index + 1 != teamsDate.teams.slice(2, 4).length
                              ? "mb-30"
                              : null
                          }`}
                          data-tooltip-tit={team.title}
                          data-tooltip-sub={team.sub}
                        >
                          <Image src={team.image} alt="" className="imago wow" 
                          width={300}
                          height={400}/>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default SkillsRequired;
