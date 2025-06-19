import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/main.scss";
import { GlobalProvider } from "../context/GlobalContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lone Wolves Digital</title>
        <link rel="icon" href="/img/LoneWolvesDigitalLogo.png" />
      </Head>
      <Cursor />
      <LoadingScreen />
     <GlobalProvider>
       <Component {...pageProps} />
     </GlobalProvider>
      <ScrollToTop />
      <Script id="wow" src="/js/wow.min.js" onLoad={() => { if (window.WOW) { new window.WOW().init(); } }} />
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        id="bootstrap-bundle"
        strategy="beforeInteractive"
        src="/js/bootstrap.bundle.min.js"
      />
    </>
  );
}

export default MyApp;
