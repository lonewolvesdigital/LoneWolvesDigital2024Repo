import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Intro2 from "../../components/Intro2/intro2";
// import SkillsCircle from "../../components/Skills-circle/skills-circle";
import Services3 from "../../components/Services3/services3";
// import Services from "../../components/Services/services";
import Video2 from "../../components/Video2/video2";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer2 from "../../components/Footer2/footer2";
import DarkTheme from "../../layouts/Dark";
import catalog from "../../components/catalog/catalog";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
import Team2 from "../../components/Team2/team2";
import Blogs2 from "../../components/blogs/Blogs2/blogs2";

const Homepage2 = () => {
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
      <Intro2 />
      {/* <Services style="4item" /> */}
      {/* <SkillsCircle from="aboutPage" /> */}
      <br/>
      <Services3  />
      {/* <Video2 /> */}
      {/* <catalog grid={3} filterPosition="center" /> */}
      {/* <FullTestimonials noPadding /> */}
      {/* <Team2 /> */}
      <Blogs2 />
      <CallToAction />
      <Footer2 />
    </DarkTheme>
  );
};
export default Homepage2;
