/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer2 from "../../components/Footer2/footer2";
import DarkTheme from "../../layouts/Dark";
import ContactHeader from "../../components/Contact-header/contact-header";
import ContactForm from "../../components/Contact-form/contact-form";

const Contact = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");

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
    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
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
      <ContactHeader />
      <div className="main-content">
        <ContactForm />
        <div className="map" id="ieatmaps">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.8344934958986!2d18.415954734887695!3d-33.919658999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc67c227c54691%3A0x1054ddc64444ee9d!2sWeWork%20-%20Coworking%20%26%20Office%20Space!5e0!3m2!1sen!2sza!4v1677677039594!5m2!1sen!2sza" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </div>

        <Footer2 hideBGCOLOR />
      </div>
    </DarkTheme>
  );
};

export default Contact;
