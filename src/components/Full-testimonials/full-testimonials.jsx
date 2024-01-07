/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';


class FullTestimonials extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div className="container">
          <div
            onClick={() => this.slider.slickNext()}
            className="next cursor-pointer"
          >
            <span className="pe-7s-angle-right"></span>
          </div>
          <div
            onClick={() => this.slider.slickPrev()}
            className="prev cursor-pointer"
          >
            <span className="pe-7s-angle-left"></span>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <section
        className={`testimonials ${
          this.props.withIMG
            ? "section-padding bg-img"
            : this.props.withCOLOR
            ? "section-padding back-color"
            : this.props.noPadding ? ""
            : "section-padding"
        } ${this.props.classText ? this.props.classText : ""}`}
        style={{
          backgroundImage: `${
            this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"
          }`,
        }}
      >
        {this.props.showHead && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head  text-center">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Testimonials
                  </h6>
                  <h3 className="wow color-font">
                  Don&apos;t take my word for it.<br/>
                   Hear it right out of the horse&apos;s mouth!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container-fluid position-re">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-lg-12">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  centerMode: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 3,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                  ],
                }}
              >
                  <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <Image src="/img/clients/unknown-person-icon-27.jpg" alt="image"
                  width={500}
                  height={500} />
                        </div>
                        <h6 className="author-name color-font">
                        Reagan Daniels
                        </h6>
                        <span className="author-details">
                          Former class-mate
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                  &quot;
                   Here are some facts about Caleb&apos;s hardworking attitude:
                   He has big dreams and he is highly motivated and ambitious.
                   &quot;
                  </p>
                </div>

                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <Image src="/img/clients/unknown-person-icon-27.jpg" alt="image"
                  width={500}
                  height={500} />
                        </div>
                        <h6 className="author-name color-font">
                        Reagan Daniels
                        </h6>
                        <span className="author-details">
                          Former class-mate
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                  &quot;
                   
                   He always finishes his tasks, even if others quit and he remains alone
                   He doesn&apos;t like very much to get free stuff and would prefer to earn those things
                   &quot;
                  </p>
                </div>

               
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <Image src="/img/clients/unknown-person-icon-27.jpg" alt="image"
                  width={500}
                  height={500} />
                        </div>
                        <h6 className="author-name color-font">
                        Reagan Daniels
                        </h6>
                        <span className="author-details">
                          Former class-mate
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                  &quot;
                   If he has a lot of work, he will do it even in his break, because he focuses on the results, and not if he is being paid.
                   &quot;
                  </p>
                </div>

                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <Image src="/img/clients/221162130_518272629758726_1584425299293407110_n.jpg" alt="image"
                  width={500}
                  height={500}/>
                        </div>
                        <h6 className="author-name color-font">
                        Jemima Jaemii Musadi
                        </h6>
                        <span className="author-details">
                          Teacher
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                  &quot;
                  Caleb is such an optimist and is not afraid to take risks. 
                  Mountains look like hills to him. 
                  I look forward to see what he will do with Lone Wolves.
                  &quot;
                  </p>
                </div>

                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <Image src="/img/clients/WhatsApp Image 2022-06-26 at 6.25.01 PM.jpeg" alt="image"
                  width={500}
                  height={500}/>
                        </div>
                        <h6 className="author-name color-font">
                        Matthew Gie
                        </h6>
                        <span className="author-details">
                          Wild Life Videographer
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                  &quot;Caleb has a fantastic drive and is ready to put in the hard work into any project, this will be evident right when you meet him and I&apos;d be happy to recommend him&quot;
                  </p>
                </div>

                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <Image src="/img/clients/1517253960871.jpg" alt="image"
                  width={500}
                  height={500}/>
                        </div>
                        <h6 className="author-name color-font">
                        Trevor Pascoe 
                        </h6>
                        <span className="author-details">
                        CEO at Old Mutual Multi-Managers
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                  &quot;I have known Caleb for four years and know him as a person with great tenacity and passion. He loves what he does and puts his heart and soul into everything he tackles. Caleb loves challenges and even more so overcoming them.&quot;
                  </p>
                </div>
               
                {/* <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <Image src="/img/clients/1.jpg" alt="image"
                  width={500}
                  height={500} />
                        </div>
                        <h6 className="author-name color-font">
                          Alex Regelman
                        </h6>
                        <span className="author-details">
                          Co-founder, Colabrio
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    I would highly recommend Vie Digital. I worked with the team
                    on an animation for our ‘Click &amp; Collect’ service.
                  </p>
                </div> */}
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default FullTestimonials;
