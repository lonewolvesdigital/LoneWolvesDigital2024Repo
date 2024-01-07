/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import { thumparallaxDown } from "../../common/thumparallax";
import Image from 'next/image';


const MinimalArea2 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
            <Image 
        width={600}
        height={400}

                className="thumparallax-down"
                src="/img/andras-vas-Bd7gNnWJBkU-unsplash (1).jpg"
                alt=""
                
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="color-font">Dream, Design & Develop.</h4>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                I trust that you have a solid understanding of our process from here on out. Our process is a bit lengthy, but that’s not your problem that’s why I am here. You can cancel at any time, please see our T&Cs. Feel free to ask any questions regarding Lone Wolves Digital.
                </p>
              </Split>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                • Hush, most things happen in the background, so you don’t need to worry.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                • You get to sit back and relax as I manage your project!
	
                </li>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                • Lone Wolves Digital will assemble all the right skills for your project.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                • No need to worry about security as everything is secured in the clouds.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                • Lone Wolves Digital, will create backups of work done.
                </li>
              </ul>
              <Link href={`/t&c-list/t&c-list-dark`}>
                <a
                  className="butn bord curve mt-40 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <span>T&C</span>
                </a>
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea2;
