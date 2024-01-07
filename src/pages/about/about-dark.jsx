import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Services from "../../components/Services/services";
import VideoWithTestimonials from "../../components/Video-with-testimonials/video-with-testimonials";
import Clients from "../../components/Clients/clients";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer2 from "../../components/Footer2/footer2";
import PagesHeader from "../../components/Pages-header";
import AboutIntro from "../../components/About-intro/index";
import DarkTheme from "../../layouts/Dark";
import Services6 from "../../components/Services6/services6";
import SkillsRequired from "../../components/Team/SkillsRequired";
import MinimalArea from "../../components/Minimal-Area/minimal-area";
// import Services3 from "../../components/Services3/services3";



const About = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
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
      <Navbar nr={navbarRef} lr={logoRef} from="about-dark" />
      <PagesHeader />
      <AboutIntro />
      {/* <Services3/> */}
      <Services6 />
      <Services style="4item" />
      <VideoWithTestimonials />
      <SkillsRequired/>
      <MinimalArea />
      <Clients theme="dark" />
      <CallToAction />
      <Footer2 />
    </DarkTheme>
  );
};

export default About;
