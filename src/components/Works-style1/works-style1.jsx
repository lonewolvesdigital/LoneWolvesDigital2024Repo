/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import tooltipEffect from "../../common/tooltipEffect";
import Image from 'next/image';


const WorksStyle1 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      tooltipEffect();
    }, 1000);
  }, []);
  return (
    <section className="works section-padding pb-70">
      <h2 style={{display: 'none'}}>&nbsp;</h2>
      <div className="container">
        <div className="row lg-space">
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <Image src="/img/catalog/catalog/1/1.jpg" alt="" layout='fill'/>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <Image src="/img/catalog/catalog/2/1.jpg" alt="" layout='fill'/>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <Image src="/img/catalog/catalog/1/2.jpg" alt="" layout='fill'/>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <Image src="/img/catalog/catalog/2/3.jpg" alt="" layout='fill'/>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <Image src="/img/catalog/catalog/1/3.jpg" alt="" layout='fill'/>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <Image src="/img/catalog/catalog/2/4.jpg" alt="" layout='fill'/>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <Image src="/img/catalog/catalog/1/4.jpg" alt="" layout='fill'/>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <Image src="/img/catalog/catalog/2/5.jpg" alt="" layout='fill'/>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <Image src="/img/catalog/catalog/1/5.jpg" alt="" layout='fill'/>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle1;
