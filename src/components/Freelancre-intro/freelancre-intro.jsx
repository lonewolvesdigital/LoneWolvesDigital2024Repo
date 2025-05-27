/* eslint-disable @next/next/no-img-element */
import React from "react";
import Typewriter from "typewriter-effect";
import Image from 'next/image';


const FreelancreIntro = () => {
  return (
    <header className="freelancre valign">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="img">
              <Image src="/img/team/1468708_553574004718681_345517755_n.jpg" alt="" layout='fill'/>
            </div>
          </div>
          <div className="col-lg-8 valign">
            <div className="cont">
              <h6 className="cd-headline clip">
              Hello, my name is Caleb Mutombo founder and CEO of Lone Wolves Digital. I was a freelance web and app developer based in Cape Town South Africa. When I began this company I called it Lone Wolf Codes, with no one else on my team, I called myself the Lone Wolf Coder, I might have been one Lone Wolf, but now that  I collaborate with others alike, “I” becomes “we” and “we” collaborate to bring you a variety of...<br/>
                <span
                  style={{ fontSize: "35px", lineHeight: "49px" }}
                  className="cd-words-wrapper"
                >
                  <Typewriter
                    options={{
                      wrapperClassName: "color-font fw-600",
                      strings: [
                        "Digital",
                        "Digital products",
                        "Digital products & services",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                    loop={true}
                    onInit={(typewriter) => {
                      typewriter;
                    }}
                  />
                </span>
              </h6>
            </div>
          </div>
        </div>

        <br/>
        <br/>

        <div className="states">
          <div className="container">
            <ul className="flex">
              <li className="flex">
                <div className="numb valign">
                  <h3>5</h3>
                </div>
                <div className="text valign">
                  <p>
                    Years <br />OF HANDS-ON CODING EXPERIENCE
                  </p>
                </div>
              </li>

              <li className="flex">
                <div className="numb valign">
                  <h3>37+</h3>
                </div>
                <div className="text valign">
                  <p>
                    Projects Completed <br /> Since College
                  </p>
                </div>
              </li>

              <li className="mail-us">
                 href="mailto:calebmutombo@lonewolvesdigital.com?subject= New demmand!">
                  <div className="flex">
                    <div className="text valign">
                      <div className="full-width">
                        <p>Get In Touch</p>
                        <h6>calebmutombo@lonewolvesdigital.com</h6>
                      </div>
                    </div>
                    <div className="mail-icon">
                      <div className="icon-box">
                        <span className="icon color-font pe-7s-mail"></span>
                      </div>
                    </div>
                  </div>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default FreelancreIntro;
