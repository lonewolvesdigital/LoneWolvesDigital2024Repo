import React from "react";
import Navbar from "../../components/Navbar/navbar";
// import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer2 from "../../components/Footer2/footer2";
// import Team from "../../components/Team/team";
import DarkTheme from "../../layouts/Dark";
import Works3 from "../../components/Works3/works3";
// import Blogs4 from "../../components/blogs/Blogs4/blogs4";
import Intro4 from "../../components/Intro4/intro4";
import AboutUs3 from "../../components/About-us3/about-us3";
import MinimalArea2 from "../../components/Minimal-Area2/minimal-area2";
// import SkillsCircle from "../../components/Skills-circle/skills-circle";


const Homepage5 = () => {
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
      <Intro4 />
      <AboutUs3 />
      <Works3 />
      {/* <SkillsCircle theme="dark" /> */}
      <MinimalArea2 />
      {/* <FullTestimonials classText="pb-0" /> */}
      {/* <Team /> */}
      {/* <Blogs4 /> */}
      <CallToAction />
      <Footer2/>
    </DarkTheme>
  );
};

export default Homepage5;
