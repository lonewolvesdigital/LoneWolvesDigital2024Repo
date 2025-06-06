/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import Image from 'next/image';


const WorksStyle3 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="catalog-cr section-padding pb-50">
      <div className="container">
        <div className="row">
          <div className="filtering text-center col-12">
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".brand">Branding</span>
              <span data-filter=".web">Mobile App</span>
              <span data-filter=".graphic">Creative</span>
            </div>
          </div>

          <div className="gallery-mons full-width">
            <div className="items graphic wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <Link
                  href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}
                  className="imago wow"
                >
                  <div>
                    <Image 
                      src="/img/catalog/cr/1.jpg" 
                      alt="image" 
                      width={800}
                      height={600}
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="item-img-overlay"></div>
                  </div>
                </Link>
              </div>
              <div className="cont flex">
                <h6 className="color-font">Creative Design</h6>
                <span>
                  <Link href="#0">
                    <span>Graphic</span>
                  </Link>
                </span>
              </div>
            </div>

            <div className="items web brand wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <Link
                  href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}
                  className="imago wow"
                >
                  <div>
                    <Image src="/img/catalog/cr/2.jpg" alt="image" width={800} height={600} style={{ objectFit: 'cover' }}/>
                    <div className="item-img-overlay"></div>
                  </div>
                </Link>
              </div>
              <div className="cont flex">
                <h6 className="color-font">Modern Design</h6>
                <span>
                  <Link href="#0">
                    <span>Brand</span>
                  </Link>
                  ,&nbsp;
                  <Link href="#0">
                    <span>Web</span>
                  </Link>
                </span>
              </div>
            </div>

            <div
              className="items width2 brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link
                  href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}
                  className="imago wow"
                >
                  <div>
                    <Image 
                      src="/img/catalog/cr/3.jpg" 
                      alt="image"
                      width={800}
                      height={600}
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="item-img-overlay"></div>
                  </div>
                </Link>
              </div>
              <div className="cont">
                <h6 className="color-font">Creative Design</h6>
                <span>
                  <Link href="#0">
                    <span>Website</span>
                  </Link>
                </span>
              </div>
            </div>

            <div
              className="items width2 graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link
                  href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}
                  className="imago wow"
                >
                  <div>
                    <Image 
                      src="/img/catalog/cr/4.jpg" 
                      alt="image"
                      width={800}
                      height={600}
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="item-img-overlay"></div>
                  </div>
                </Link>
              </div>
              <div className="cont">
                <h6 className="color-font">Modern Design</h6>
                <span>
                  <Link href="#0">
                    <span>Graphic</span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle3;
