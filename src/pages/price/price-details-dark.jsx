/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import DarkTheme from "../../layouts/Dark";
import PageHeader2 from "../../components/Page-header2/page-header2";

import Navbar from "../../components/Navbar/navbar";
import Intro6 from "../../components/Intro6/intro6";
import Progress from "../../components/Progress/progress";
import VideoWithTeam from "../../components/Video-with-team/video-with-team";
// import Questionair from "../../components/price-packages/price-packages";
import Questionair2 from "../../components/price-packages2/price-packages2";

import Footer2 from "../../components/Footer2/footer2";


const MobileAppDark = () => {
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <PageHeader2
          title="Quotes."
          links={[
            // { id: 1, name: "Home", url: "/" },
            // { id: 2, name: "Quotes. ", url: "/mobile-app/pricing-plan-dark" },
          ]}
        />

      <DarkTheme mobileappstyle>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      {/* <NavbarMobileApp nr={navbarRef} /> */}
      <Navbar nr={navbarRef} />

        <Intro6 />
        {/* <Clients3 /> */}
        {/* <Services7 /> */}
        {/* <Services8 /> */}
        {/* <Screenshots /> */}
        <Progress />
        {/* <VideoWithTeam /> */}
        {/* <Questionair /> */}
        <Questionair2 />
        {/* <MobileAppPricingPlanDark/> */}
        {/* <Testimonials /> */}
        {/* <DownloadApp /> */}
        {/* <Blogs2 /> */}
      
        <Footer2 />

      </DarkTheme>
    </>
  );
};

export default MobileAppDark;
