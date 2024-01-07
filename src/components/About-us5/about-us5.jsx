/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutSkillsProgress from "../../common/aboutSkillsProgress";
import Image from 'next/image';


const AboutUs5 = () => {
  React.useEffect(() => {
    aboutSkillsProgress(
      document.querySelector(".about-cr .skills-box"),
      document.querySelectorAll(".skill-progress .progres"),
      document.querySelector(".about-cr")
    );
  }, []);
  return (
    
    <section className="about-cr space-me">
       <br/>
       <br/>
      <div className="container-fluid">
        <div className="row">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <br/>
    <br/>
    <br/>
    <br/>
    <br/> */}
    
          <div className="expad col-lg-6 img md-mb50">
          <Image src="/img/intro/62659d6163b917c18eabf40c_unnamed.jpg" alt="image"
        
        width={400}
        height={500}/>
          </div>
          <div className="col-lg-5 valign">
            <div className="cont full-width">
              <h3 className="color-font my-skills-pad-left">My Skills</h3>
              <h5 className="co-tit mb-15 ">
              Here&apos;s what to expect.
               </h5>
              <p className="">
              Over the past 5 years, I have learned a variety of skills and this is how far I have come to create only the most extravagant digital products and services, including but not limited to remarkable apps and cutting-edge strategies. Here are my skill levels.
              </p>
              <div className="skills-box mt-40">
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Web & Software Development</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="95%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">UI / UX Design</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="90%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Project management</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="86%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Systems Analysis and Design</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="88%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Communication</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="100%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Time management</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="95%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Business management</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="85%"></div>
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

export default AboutUs5;
