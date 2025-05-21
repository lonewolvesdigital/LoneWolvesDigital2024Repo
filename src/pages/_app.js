import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/main.scss";

// Add custom global styles
const globalStyles = `
  .swiper-slide-active {
    opacity: 1 !important;
    transform: scale(1.15) !important;
    filter: grayscale(0) !important;
    z-index: 10 !important;
  }

  .swiper-slide-prev, .swiper-slide-next {
    opacity: 0.4 !important;
    transform: scale(0.8) !important;
    filter: grayscale(0.9) !important;
    pointer-events: none !important;
  }

  .swiper-slide-prev {
    transform: translateX(20%) scale(0.8) !important;
  }

  .swiper-slide-next {
    transform: translateX(-20%) scale(0.8) !important;
  }

  .swiper-slide:not(.swiper-slide-active):not(.swiper-slide-prev):not(.swiper-slide-next) {
    opacity: 0 !important;
    visibility: hidden !important;
  }

  .swiper-container {
    overflow: visible !important;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lone Wolves Digital</title>
        <link rel="icon" href="/img/LoneWolvesDigitalLogo.png" />
        <style>{globalStyles}</style>
      </Head>
      <Cursor />
      <LoadingScreen />
      <Component {...pageProps} />
      <ScrollToTop />
      <Script
        id="wow"
        src="/js/wow.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script
        id="simpleParallax"
        src="/js/simpleParallax.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="wowInit" strategy="afterInteractive">{`
        if (typeof window !== 'undefined') {
          window.addEventListener('load', () => {
            if (typeof WOW === 'function') {
              new WOW().init();
            }
          });
        }
      `}</Script>
    </>
  );
}

export default MyApp;
