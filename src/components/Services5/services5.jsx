import React from "react";
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
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
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
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 2,
                },
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
                    <div className="item-box no-curve" style={{height: "600px"}}>
                      <div>
                        <span className={`icon color-font ${item.icon}`}></span>
                      </div>
                      <div className="cont">
                        <h6>{item.title}</h6>
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation Buttons */}
            <div className="swiper-navigation-custom">
              <div className="swiper-button-prev-custom">
                <i className="fas fa-chevron-left"></i>
              </div>
              <div className="swiper-button-next-custom">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
            
            {/* Custom Pagination */}
            <div className="swiper-pagination-custom"></div>
          </div>
        </div>
      </div>
      <div className="line bottom right"></div>
      
      {/* Custom Swiper Styles */}
      <style jsx>{`
        .features-swiper {
          padding: 40px 0;
        }
        
        .swiper-navigation-custom {
          position: relative;
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 30px;
        }
        
        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          width: 50px;
          height: 50px;
          background: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: white;
          font-size: 18px;
        }
        
        .swiper-button-prev-custom:hover,
        .swiper-button-next-custom:hover {
          // background: var(--main-color-dark, #0056b3);
          border: 1px solid gray;
          transform: scale(1.1);
        }
        
        .swiper-pagination-custom {
          text-align: center;
          margin-top: 20px;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #ccc;
          border-radius: 50%;
          display: inline-block;
          margin: 0 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: var(--main-color, #007bff);
          transform: scale(1.2);
        }
        
        @media (max-width: 991px) {
          .features-swiper .swiper-slide {
            padding: 0 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services5;