import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

// Install modules
SwiperCore.use([Navigation, Pagination, Autoplay]);
import featuresData from "../../data/sections/features.json";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Services5 = () => {
  const swiperRef = useRef(null);

  // Update orange dots on slide change
  useEffect(() => {
    const swiperInstance = swiperRef.current && swiperRef.current.swiper;
    if (!swiperInstance) return;
    const updateDots = () => {
      const activeIdx = swiperInstance.realIndex;
      featuresData.forEach((item, idx) => {
        const dot = document.getElementById(`orange-dot-${idx}`);
        if (dot) {
          if (idx === activeIdx) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        }
      });
    };
    swiperInstance.on('slideChange', updateDots);
    // Initial update
    updateDots();
    return () => {
      swiperInstance.off('slideChange', updateDots);
    };
  }, []);

  return (
    <section className="services box lficon section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="text-center">
              <h3 className="wow color-font">
                WHAT YOU DEMAND, WE COMMAND!
              </h3>
              <br/>
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Here are our digital products and services. So, what do you demand?
              </h6>
              <br/>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12 position-relative">
            {/* Orange Dots Pagination at the Top */}
            <div className="custom-orange-dots">
              {featuresData.map((item, idx) => (
                <span
                  key={item.id}
                  className={`orange-dot${idx === 0 ? ' active' : ''}`}
                  id={`orange-dot-${idx}`}
                ></span>
              ))}
            </div>
            {/* Custom Navigation Buttons - now positioned left/right of the card */}
            <div className="swiper-button-prev-custom gradient-outline-btn nav-circle-btn left-btn">
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="swiper-button-next-custom gradient-outline-btn nav-circle-btn right-btn">
              <i className="fas fa-chevron-right"></i>
            </div>
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              loop={true}
              spaceBetween={0}
              slidesPerView={1}
              centeredSlides={true}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination-custom',
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: true,
              }}
              className="features-swiper"
            >
              {featuresData.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div
                    className="col-lg-12 wow fadeInLeft"
                    data-wow-delay={
                      index == 0
                        ? ".5s"
                        : index == 1
                        ? ".7s"
                        : index === 2
                        ? ".9s"
                        : ".5s"
                    }
                  >
                    <div className="item-box no-curve service-card-gradient">
                      <div>
                        <span className={`icon color-font ${item.icon}`}></span>
                      </div>
                      <div className="cont">
                        <h6>{item.title}</h6>
                        <p>{item.content}</p>
                        <a
                          className="learn-more-btn"
                          style={{
                            marginTop: '1rem',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '25px',
                            border: 'none',
                            background: 'linear-gradient(to right, rgb(68, 249, 255), #fd7e14, rgba(255, 9, 243, 0.712))',
                            color: '#fff',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            boxShadow: '0 2px 8px rgba(68, 249, 255, 0.15)',
                            display: 'inline-block',
                            textDecoration: 'none'
                          }}
                          href={
                            item.id === 1 ? '/catalog/business-finance' :
                            item.id === 2 ? '/catalog/business-finance' :
                            item.id === 3 ? '/catalog/data-ai-services' :
                            item.id === 4 ? '/catalog/engineering-architecture' :
                            item.id === 5 ? '/catalog/graphics-design-photography' :
                            item.id === 6 ? '/catalog/hr-training' :
                            item.id === 7 ? '/catalog/legal' :
                            item.id === 8 ? '/catalog/lifestyle' :
                            item.id === 9 ? '/catalog/sales-digital-marketing' :
                            item.id === 10 ? '/catalog/software-development-it' :
                            item.id === 11 ? '/catalog/video-audio-animation' :
                            item.id === 12 ? '/catalog/writing-translation' :
                            '#'
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Pagination */}
            {/* <div className="swiper-pagination-custom"></div> */}
          </div>
        </div>
      </div>
      <div className="line bottom right"></div>
      
      {/* Custom Swiper Styles */}
      <style jsx>{`
        .features-swiper {
          padding: 60px 0;
          overflow: visible;
        }
        .features-swiper :global(.swiper-slide) {
          transition: all 0.5s cubic-bezier(.77,0,.18,1);
          opacity: 0.15;
          filter: grayscale(1) blur(2px);
          transform: scale(0.8);
          pointer-events: none;
        }
        .features-swiper :global(.swiper-slide-active) {
          opacity: 1;
          filter: none;
          transform: scale(1);
          pointer-events: auto;
          z-index: 2;
          position: relative;
        }
        .features-swiper :global(.swiper-slide-next),
        .features-swiper :global(.swiper-slide-prev) {
          opacity: 0.3;
          filter: grayscale(0.7) blur(1.5px);
          transform: scale(0.9);
        }
        .features-swiper :global(.item-box.service-card-gradient) {
          position: relative;
          background: rgba(0, 0, 0, 0.95);
          padding: 2rem;
          border-radius: 18px;
          border: 4px solid transparent;
          background-clip: padding-box, border-box;
          box-shadow: 0 0 30px rgba(68, 249, 255, 0.15);
        }
        .features-swiper :global(.swiper-slide-active .item-box.service-card-gradient) {
          border-image: linear-gradient(to right, rgb(68, 249, 255), #fd7e14, rgba(255, 9, 243, 0.712)) 1;
          box-shadow: 0 0 40px 0 rgba(68, 249, 255, 0.3), 0 0 0 8px rgba(68, 249, 255, 0.08);
          animation: borderGlow 2s infinite alternate;
        }
        .features-swiper :global(.swiper-slide-next .item-box.service-card-gradient),
        .features-swiper :global(.swiper-slide-prev .item-box.service-card-gradient) {
          border-image: linear-gradient(to right, rgb(68, 249, 255), #fd7e14, rgba(255, 9, 243, 0.712)) 1;
          opacity: 0.7;
        }
        @keyframes borderGlow {
          0% { box-shadow: 0 0 20px rgba(68, 249, 255, 0.5); }
          50% { box-shadow: 0 0 30px rgba(253, 126, 20, 0.5); }
          100% { box-shadow: 0 0 20px rgba(255, 9, 243, 0.5); }
        }
        .gradient-outline-btn {
          width: 56px;
          height: 56px;
          background: transparent;
          border: 3px solid transparent;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(.77,0,.18,1);
          color: #fff;
          font-size: 22px;
          background-clip: padding-box, border-box;
          border-image: linear-gradient(to right, rgb(68, 249, 255), #fd7e14, rgba(255, 9, 243, 0.712)) 1;
          box-shadow: 0 0 0 0 rgba(68, 249, 255, 0.0);
        }
        .gradient-outline-btn:hover {
          background: rgba(68, 249, 255, 0.08);
          box-shadow: 0 0 18px 0 rgba(68, 249, 255, 0.25);
          transform: scale(1.08);
        }
        .swiper-navigation-custom {
          position: relative;
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 30px;
        }
        .swiper-pagination-custom {
          text-align: center;
          margin-top: 20px;
        }
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(0, 0, 0, 0.3);
          border: double 2px transparent;
          background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), 
            linear-gradient(to right, rgb(68, 249, 255), #fd7e14, rgba(255, 9, 243, 0.712));
          background-origin: border-box;
          background-clip: padding-box, border-box;
          border-radius: 50%;
          display: inline-block;
          margin: 0 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background-image: linear-gradient(to right, rgb(68, 249, 255), #fd7e14, rgba(255, 9, 243, 0.712));
          transform: scale(1.2);
        }
        .nav-circle-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 3px solid transparent;
          background-clip: padding-box, border-box;
          border-image: linear-gradient(to right, rgb(68, 249, 255), #fd7e14, rgba(255, 9, 243, 0.712)) 1;
          color: #fff;
          font-size: 22px;
          transition: all 0.3s cubic-bezier(.77,0,.18,1);
          box-shadow: 0 0 0 0 rgba(68, 249, 255, 0.0);
          cursor: pointer;
        }
        .left-btn {
          left: -70px;
        }
        .right-btn {
          right: -70px;
        }
        @media (max-width: 991px) {
          .left-btn {
            left: 0;
          }
          .right-btn {
            right: 0;
          }
        }
        .nav-circle-btn:hover {
          background: rgba(68, 249, 255, 0.08);
          box-shadow: 0 0 18px 0 rgba(68, 249, 255, 0.25);
          transform: translateY(-50%) scale(1.08);
        }
        @media (max-width: 991px) {
          .features-swiper :global(.swiper-slide) {
            padding: 0 10px;
          }
        }
        .custom-orange-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-bottom: 1px;
          margin-top: 0;
        }
        .orange-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #fd7e14;
          opacity: 0.5;
          transition: opacity 0.3s, box-shadow 0.3s;
          box-shadow: 0 0 0 0 rgba(253, 126, 20, 0.2);
        }
        .orange-dot.active {
          opacity: 1;
          box-shadow: 0 0 8px 2px rgba(253, 126, 20, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Services5;