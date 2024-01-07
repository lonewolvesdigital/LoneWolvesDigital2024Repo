import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer2 from "../../components/Footer2/footer2";
import DarkTheme from "../../layouts/Dark";
import FreelancreIntro from "../../components/Freelancre-intro/freelancre-intro";
// import WorksStyle4 from "../../components/Works-style4/works-style4";
import AboutCaleb from "../../components/About-intro/index2";
import AboutCaleb2 from "../../components/About-intro/index3";
import AboutUs5 from "../../components/About-us5/about-us5";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
import Blogs2 from "../../components/blogs/Blogs2/blogs2";
import SContactForm from "../../components/s-contact-form/s-contact-form";

const Homepage = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

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
    <DarkTheme mobileappstyle>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <FreelancreIntro />
      <AboutCaleb/>
      {/* <WorksStyle4 /> */}
      <AboutUs5 />
      <AboutCaleb2/>
      <FullTestimonials showHead />
      <Blogs2 />
      <SContactForm noLine />
      <Footer2/>
    </DarkTheme>
  );

  // <DarkTheme mobileappstyle>
  //     {/* <NavbarMobileApp nr={navbarRef} /> */}
  //     <Navbar nr={navbarRef} />
      
  //       <Intro6 />
  //       {/* <Clients3 /> */}
  //       {/* <Services7 /> */}
  //       {/* <Services8 /> */}
  //       {/* <Screenshots /> */}
  //       {/* <Progress /> */}
  //       {/* <VideoWithTeam /> */}
  //       {/* <pricePackages /> */}
  //       <pricePackages2 />
  //       {/* <Testimonials /> */}
  //       {/* <DownloadApp /> */}
  //       {/* <Blogs2 /> */}
  //       <Footer />
  //       {/* <Footer2 /> */}

  //     </DarkTheme>
};

export default Homepage;
