/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
// import worksData from "../../data/sections/works.json";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from 'next/image';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Works3 = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/ionicons.min.css" />
      </Head>
      <section className="work-carousel2 metro section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                Frequently Asked Questions
                </h6>
                <h3 className="wow color-font center">
                Our most common questions. <br /> &amp; <br /> Our most common answers.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 no-padding">
              <div className="swiper-container">
                <Swiper
                  className="swiper-wrapper"
                  slidesPerView={2}
                  centeredSlides={true}
                  autoplay={{
                    delay: 25000,
                    disableOnInteraction: true,
                  }}
                  loop={true}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                  }}
                  onSwiper={(swiper) => {
                    setTimeout(() => {
                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;

                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();
                    });
                  }}
                  speed={1000}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    767: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                      centeredSlides: false,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="content">
                      <div className="img">
                        <span className="imgio">
                          <span className="wow cimgio" data-delay="500"></span>
                          <Image 
                          width={600}
                          height={400}src="/img/catalog/pexels-monstera-9487623.jpg" alt="" />
                        </span>
                      </div>
                      <div className="cont ">
                        <h3>
                          <Link
                            href={`/works3/works3-dark`}
                          >
                            What does Lone Wolves Digital do? (1/10)
                          </Link>
                        </h3>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>                                                                                  
                        <h5>
                          <Link
                            href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}
                          >
                            Lone Wolves Digital provides digital products and services for personal and business use at, a low cost to the consumer. 
                            </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="content">
                      <div className="img">
                        <span className="imgio">
                          <span className="wow cimgio" data-delay="500"></span>
                          <Image 
                        width={600}
                        height={400}src="/img/catalog/pikwizard-smiling-senior-man-paying-bills-online-on-laptop-in-kitchen.jpg" alt=""/>
                        </span>
                      </div>
                      <div className="cont">
                        <h3>
                          <Link
                            href={`/works3/works3-dark`}
                          >
                           How does Lone Wolves Digital cut costs without, cutting quality? (2/10)
                          </Link>
                        </h3>
                        <br/>
                        <br/>
                        <br/>
                        <br/>                                                                                                        
                        <h5>
                          <Link
                            href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}
                          >
                            By cutting down on costs such as large office buildings and supplies, Lone Wolves Digital can offer and negotiate a much better deal without compromising on costs.
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="content">
                      <div className="img">
                        <span className="imgio">
                          <span className="wow cimgio" data-delay="500"></span>
                          <Image 
                         width={600}
                         height={400}src="/img/catalog/pikwizard-hand-using-smartphone-with-graphics.jpg" alt=""/>
                        </span>
                      </div>
                      <div className="cont grey-font">
                        <h3>
                          <Link
                            href={`/works3/works3-dark`}
                          >
                            How do I start a project? (3/10)
                          </Link>
                        </h3>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>   
                        <br/>     
                             
                         <h5>
                          <Link
                            href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}
                          >
                            Check out the &quot;Prices&quot; pages that will lead you to a form, once filled out, we will send you the contract and send it back signed.
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="content">
                      <div className="img">
                        <span className="imgio">
                          <span className="wow cimgio" data-delay="500"></span>
                          <Image 
                          width={600}
                          height={400}src="/img/catalog/pikwizard-city-urban-landscape.jpg" alt=""/>
                        </span>
                      </div>
                      <div className="cont ">
                        <h3>
                          <Link
                            href={`/works3/works3-dark`}
                          >
                            Where is the Lone Wolf Digital&aposs office?(4/10)
                          </Link>
                        </h3>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>     
                        <br/>     
                        <h5>
                          <Link
                            href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}
                          >
                            Being a freelancer, I work from home, you can book a video call meeting or, I can come to see you in person if needs be. There is no head office.
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="content">
                      <div className="img">
                        <span className="imgio">
                          <span className="wow cimgio" data-delay="500"></span>
                          <Image 
                         width={600}
                         height={400}src="/img/catalog/pikwizard-happy-diverse-female-creative-colleagues-holding-documents,-cup-of-coffee-and-talking-in-elevator.jpg" alt=""/>
                        </span>
                      </div>
                      <div className="cont">
                        <h3>
                          <Link
                            href={`/works3/works3-dark`}
                          >
                            How do I manage my project? (5/10)
                          </Link>
                        </h3>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                     
                        <h5>
                          <Link
                            href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}
                          >
                           You don&apos;t, but I do! If you need or want any changes made, please kindly communicate them in writing via email.
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="content">
                      <div className="img">
                        <span className="imgio">
                          <span className="wow cimgio" data-delay="500"></span>
                          <Image 
                          width={600}
                          height={400}src="/img/catalog/pikwizard-customer-service-executive-working.jpg" alt=""/>
                        </span>
                      </div>
                      <div className="cont">
                        <h3>
                          <Link
                            href={`/works3/works3-dark`}
                          >
                            Who can I talk to once my project is underway? (6/10)
                          </Link>
                        </h3>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h5>
                          <Link
                            href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}
                          >
                            Please feel free to contact me directly by email or by phone. See all contact info in the footer.
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="content">
                      <div className="img">
                        <span className="imgio">
                          <span className="wow cimgio" data-delay="500"></span>
                          <Image 
                          width={600}
                          height={400}src="/img/catalog/pikwizard-alarm-clock.jpeg" alt=""/>
                        </span>
                      </div>
                      <div className="cont">
                        <h3>
                          <Link
                            href={`/works3/works3-dark`}
                          >
                            How long does it take to complete a project? (7/10)
                          </Link>
                        </h3>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h5>
                          <Link
                            href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}
                          >
                             Depending on your project. It can take 1 hour or 1 year to complete. We do ask for at least 24 hours.
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="content">
                      <div className="img">
                        <span className="imgio">
                          <span className="wow cimgio" data-delay="500"></span>
                          <Image 
                        width={600}
                        height={400}src="/img/catalog/pikwizard-businessman-showing-project-plan-on-laptop-to-multiracial-male-and-female-colleagues-in-office.jpg" alt=""/>
                        </span>
                      </div>
                      <div className="cont">
                        <h3>
                          <Link
                            href={`/works3/works3-dark`}
                          >
                            What happens once I&apos;ve submitted my request project? (8/10)
                          </Link>
                        </h3>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h5>
                          <Link
                            href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}
                          >
                            Lone Wolves Digital will receive an email request, from which we will check to see if you downloaded and signed the contract. From there I will sign and begin the project.
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="content">
                      <div className="img">
                        <span className="imgio">
                          <span className="wow cimgio" data-delay="500"></span>
                          <Image 
                          width={600}
                          height={400}src="/img/catalog/pikwizard-man-using-smart-watch-for-express-pay.jpg" alt=""/>
                        </span>
                      </div>
                      <div className="cont">
                        <h3>
                          <Link
                            href={`/works3/works3-dark`}
                          >
                            How often will I be charged? (9/10)
                          </Link>
                        </h3>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>               
                        <br/>               
                        <h5>
                          <Link
                            href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}
                          >
                           Depending on the nature of our contract, you will be charged a once-off or a monthly fee for digital products and or services thereafter.
                           </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="content">
                      <div className="img">
                        <span className="imgio">
                          <span className="wow cimgio" data-delay="500"></span>
                          <Image 
                          width={600}
                          height={400}src="/img/catalog/6048119cc.jpg" alt=""/>
                        </span>
                      </div> 
                      <div className="cont">
                        <h3>
                          <Link
                            href={`/works3/works3-dark`}
                          >
                            What methods of payment do you accept? 
                             (10/10)
                          </Link>
                        </h3>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>     
                        <br/>                                         

                        <h5>
                          <Link
                            href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}
                          >
                            At the moment bank transfers, we are looking into other payment options.
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div
                  ref={navigationNextRef}
                  className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
                >
                  <i className="ion-ios-arrow-right"></i>
                </div>
                <div
                  ref={navigationPrevRef}
                  className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
                >
                  <i className="ion-ios-arrow-left"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works3;
