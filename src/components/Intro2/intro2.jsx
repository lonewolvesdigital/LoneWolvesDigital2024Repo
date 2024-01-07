/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';


const Intro2 = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className="slider-st valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="cont md-mb50">
              <div className="sub-title mb-5">
                <h6>Lone Wolves Digital 6-step solution.</h6>
              </div>
              <h1 className="mb-10 fw-600">OUR PROJECT MANAGEMENT PROCESS.</h1>
              <p>
              Here at Lone Wolves Digital, there’s always a plan  if not. Then we automatically plan to fail! Thankfully you don’t have to worry about that. We have a 6-step solution to bring you the best quality digital products and services. Without you lifting a finger.
              </p>
              <Link
                href={`/about/about-dark`}
              >
                <a className="butn bord curve mt-30">
                  <span>About Us</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <Image src="/img/slid/pikwizard-businessman-holding-an-umbrella-against-business-plan-sketch-on-blackboard.jpg" alt="image"
                  width={700}
                  height={500}/>
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro2