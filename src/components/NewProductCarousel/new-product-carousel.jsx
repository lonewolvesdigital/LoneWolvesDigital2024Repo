import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import required modules
import { Autoplay, Pagination } from "swiper";
import Link from "next/link";
import featuresData from "../../data/sections/features.json";
import styles from "./new-product-carousel.module.css";

const NewProductCarousel = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);

  // Function to map item IDs to appropriate catalog pages
  const getCatalogLink = (id) => {
    const catalogMap = {
      1: "/catalog/admin-customer-support",
      2: "/catalog/business-finance",
      3: "/catalog/data-ai-services",
      4: "/catalog/engineering-architecture",
      5: "/catalog/graphics-design-photography",
      6: "/catalog/hr-training",
      7: "/catalog/legal",
      8: "/catalog/lifestyle",
      9: "/catalog/sales-digital-marketing",
      10: "/catalog/software-development-it",
      11: "/catalog/video-audio-animation",
      12: "/catalog/writing-translation"
    };

    return catalogMap[id] || "/";
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle window resize to ensure carousel stays centered
  useEffect(() => {
    const handleResize = () => {
      // Force a re-render on window resize
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track touch positions
  const [touchStartX, setTouchStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  // Custom navigation handlers
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className={styles.productCarousel}>
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

        <div className="row justify-content-center">
          <div className="col-12">
            <div className={styles.carouselWrapper}>
              {isLoaded && (
                <>
                  <div
                    onClick={handlePrev}
                    className={`${styles.navButton} ${styles.prevButton}`}
                  >
                    <i className="fas fa-chevron-left" style={{ fontSize: '20px' }}></i>
                  </div>

                  <Swiper
                    ref={swiperRef}
                    className={styles.swiper}
                    modules={[Pagination, Autoplay]}
                    slidesPerView={3}
                    spaceBetween={40}
                    centeredSlides={true}
                    loop={true}
                    grabCursor={true}
                    speed={800}
                    simulateTouch={false}
                    touchRatio={0}
                    preventInteractionOnTransition={true}
                    slideToClickedSlide={true}
                    followFinger={false}
                    threshold={5}
                    resistance={true}
                    resistanceRatio={0.85}
                    shortSwipes={false}
                    longSwipes={false}
                    slidesPerGroup={1}
                    touchMoveStopPropagation={true}
                    touchStartPreventDefault={true}
                    touchStartForcePreventDefault={false}
                    allowTouchMove={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                      el: paginationRef.current,
                      clickable: true,
                      type: 'bullets',
                    }}
                    autoplay={{
                      delay: 60000, // 60 seconds
                      disableOnInteraction: false,
                    }}
                    effect={null}
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
                        spaceBetween: 40,
                      },
                      1440: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                      },
                    }}
                    onInit={(swiper) => {
                      // Set pagination element
                      if (paginationRef.current) {
                        swiper.params.pagination.el = paginationRef.current;
                        swiper.pagination.init();
                        swiper.pagination.update();
                      }

                      // Force update after initialization
                      setTimeout(() => {
                        swiper.update();
                      }, 100);
                    }}
                    onSlideChangeTransitionStart={() => {
                      // Ensure smooth transition
                      if (swiperRef.current && swiperRef.current.swiper) {
                        swiperRef.current.swiper.update();
                      }
                    }}
                    onSlideChangeTransitionEnd={() => {
                      // Update after transition
                      if (swiperRef.current && swiperRef.current.swiper) {
                        swiperRef.current.swiper.update();
                      }
                    }}
                    onClick={(swiper, event) => {
                      // Determine which side of the slide was clicked
                      if (event.clientX) {
                        const slideRect = event.target.closest('.swiper-slide').getBoundingClientRect();
                        const slideCenter = slideRect.left + slideRect.width / 2;

                        if (event.clientX < slideCenter) {
                          // Clicked on left side, go to previous slide
                          handlePrev();
                        } else {
                          // Clicked on right side, go to next slide
                          handleNext();
                        }
                      }
                    }}
                    onTouchStart={(swiper, event) => {
                      // Store the touch start position
                      if (event.touches && event.touches[0]) {
                        setTouchStartX(event.touches[0].clientX);
                        setIsSwiping(true);
                      } else if (event.clientX) {
                        setTouchStartX(event.clientX);
                        setIsSwiping(true);
                      }

                      // Disable Swiper's built-in touch handling
                      swiper.allowSlideNext = false;
                      swiper.allowSlidePrev = false;
                    }}
                    onTouchMove={(swiper, event) => {
                      // Prevent default behavior to avoid page scrolling
                      if (isSwiping && event.cancelable) {
                        event.preventDefault();
                      }
                    }}
                    onTouchEnd={(swiper, event) => {
                      if (!isSwiping) return;

                      // Get the touch end position
                      let touchEndX = 0;
                      if (event.changedTouches && event.changedTouches[0]) {
                        touchEndX = event.changedTouches[0].clientX;
                      } else if (event.clientX) {
                        touchEndX = event.clientX;
                      }

                      // Calculate the swipe distance
                      const swipeDistance = touchEndX - touchStartX;

                      // Determine swipe direction and navigate accordingly
                      if (Math.abs(swipeDistance) > 20) {
                        if (swipeDistance > 0) {
                          // Swiped right, go to previous slide
                          handlePrev();
                        } else {
                          // Swiped left, go to next slide
                          handleNext();
                        }
                      }

                      // Reset swiping state
                      setIsSwiping(false);

                      // Re-enable Swiper's built-in touch handling after a delay
                      setTimeout(() => {
                        if (swiperRef.current && swiperRef.current.swiper) {
                          swiperRef.current.swiper.allowSlideNext = true;
                          swiperRef.current.swiper.allowSlidePrev = true;
                        }
                      }, 500);
                    }}
                  >
                    {featuresData.map((item) => (
                      <SwiperSlide key={item.id} className={styles.slide}>
                        <div className={styles.card}>
                          <div className={styles.cardContent}>
                            <span className={`${styles.icon} ${item.icon}`}></span>
                            <h6 className={styles.title}>{item.title}</h6>
                            <p className={styles.description}>{item.content}</p>
                            <Link href={getCatalogLink(item.id)} legacyBehavior>
                               className={styles.learnMoreBtn}>Learn More
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div
                    onClick={handleNext}
                    className={`${styles.navButton} ${styles.nextButton}`}
                  >
                    <i className="fas fa-chevron-right" style={{ fontSize: '20px' }}></i>
                  </div>
                </>
              )}

              <div ref={paginationRef} className={styles.pagination}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProductCarousel;
