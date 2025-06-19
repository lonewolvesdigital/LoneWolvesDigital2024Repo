/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Image from 'next/image';


const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    
    // Initialize parallax only after images are loaded
    const initParallax = () => {
      try {
        thumparallaxDown();
      } catch (error) {
        console.warn("Parallax initialization delayed, retrying...");
        setTimeout(initParallax, 500);
      }
    };

    // Wait for DOM to be ready
    if (document.readyState === 'complete') {
      initParallax();
    } else {
      window.addEventListener('load', initParallax);
      return () => window.removeEventListener('load', initParallax);
    }
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <Image
                className="thumparallax-down"
                src="/img/cut-in-a-moment-QzcynTZmOcw-unsplash-min-min.jpg"
                alt=""
                  width={400}
                  height={500}
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              

              <h4 className="wow color-font">About Lone Wolves Digital.</h4>
              <p className="wow txt" data-splitting>
              In a nutshell, Lone Wolves Digital is the one-stop shop all things digital. Like a supermarket for digital products and services. More than twenty years ago Jeff Bezos started Amazon by selling books, today Amazon sells everything retail and consumer goods related. Lone Wolves Digital began selling websites. Today Lone Wolves Digital sells any and every digital product and services. Our entire workforce is made up of a global network of digital nomads, that offer digital services by collaborating with other Freelancing Digital Nomads, to cultivate smart ideas and turn them into digital products and services for start-ups and seasoned players. 
              </p>
              <ul className="feat">
              <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>1</span> The Lone Wolves Vision
                  </h6>
                  <p>
                  In the not-so-distant 3 years from 2023. Lone Wolves Digital seeks to expand collaborations amongst freelance Digital Nomads to 5000. In 5 years from 2023, we aim to provide short online courses, and in a decade from 2023, we will offer university-accredited courses to our global workforce members. 
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>2</span> The Lone Wolves Mission
                  </h6>
                  <p>
                  To become the biggest one-stop destination for all digital products and services for business and personal needs. Our biggest goal the largest employer of freelance Digital Nomads. We will achieve this by keeping things simple and removing a lot of lengthy processes and unnecessary expenses, like overheads of renting large buildings, buying office equipment, company cars, and cleaning or security services. Each collaborator of Lone Wolves Digital is an independent contractor working on a freelance basis.                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Why Lone Wolves Digital?
                  </h6>
                  <p>
                  We offer all the best digital products and services, at the lowest cost at the fastest time with no compromise on quality, all in one place. In the same way, you don’t drive to a chicken farm for meat and then to a wine farm for wine, you get it all in one supermarket. When you choose Lone Wolves Digital. You choose the supermarket of digital products and services. You are not only getting more bang for your buck but also creating opportunities for those who need it most. So, if you are looking for digital products and services at the lowest price with the highest quality and fastest delivery, choose us to save you time and money. Look no further than Lone Wolves Digital.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </section>
  );
};

export default MinimalArea;
