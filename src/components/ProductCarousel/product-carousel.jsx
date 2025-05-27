import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import featuresData from "../../data/sections/features.json";
import styles from "./product-carousel.module.css";

SwiperCore.use([Autoplay, Pagination, Navigation, EffectCoverflow]);

const ProductCarousel = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [pageLoaded, setPageLoaded] = React.useState(false);

  React.useEffect(() => {
    setPageLoaded(true);
  }, [pageLoaded]);

  return (
    <section className={`${styles.productCarousel} section-padding position-re`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h3 className="wow color-font">
                WHAT YOU DEMAND, WE COMMAND!
              </h3>
              <br />
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Here are our digital products and services. So, what do you demand?
              </h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className={styles.swiperContainer}>
              <Swiper
                className="swiper-wrapper"
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                initialSlide={0}
                centeredSlides={true}
                loopFillGroupWithBlank={true}
                slideToClickedSlide={true}
                grabCursor={true}
                speed={800}
                effect={"coverflow"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 200,
                  modifier: 2.5,
                  slideShadows: false,
                }}
                autoplay={{
                  delay: 60000, // 60 seconds
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
              >
                {pageLoaded &&
                  featuresData.map((item, index) => (
                    <SwiperSlide key={item.id} className={styles.swiperSlide}>
                      <div className={`${styles.productCard} wow fadeInUp`} data-wow-delay={`${0.2 + index * 0.1}s`}>
                        <div className={styles.cardContent}>
                          <span
                            className={`${styles.icon} ${item.icon}`}
                          ></span>
                          <h6 className={styles.title}>{item.title}</h6>
                          <p className={styles.description}>{item.content}</p>
                          <Link href={`/catalog/catalog-dark`}>
                             className={styles.moreBtn}>Learn More
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div
                className={`swiper-button-next ${styles.navigationButton} ${styles.next}`}
                ref={navigationNextRef}
              ></div>
              <div
                className={`swiper-button-prev ${styles.navigationButton} ${styles.prev}`}
                ref={navigationPrevRef}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default ProductCarousel;
