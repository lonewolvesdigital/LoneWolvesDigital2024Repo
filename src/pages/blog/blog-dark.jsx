import React from "react";
import blog1Data from "../../data/blog1.json";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogStanderd from "../../components/Blog-standerd/blog-standerd";
import PageHeader from "../../components/Page-header/page-header";
import Footer2 from "../../components/Footer2/footer2";

const BlogDark = () => {
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
      <Navbar nr={navbarRef} lr={logoRef} />
      <PageHeader
        title="LONE WOLVES  BLOG."
        paragraph="Stay right here and Lone Wolves Digital will keep you in the loop about everything freelance-related.
        My blogs are still in the making so, here is what to expect from my upcoming blogs."

        paragraph2="Until then the “READ MORE” buttons won’t work."
      />
      <BlogStanderd blogs={blog1Data} />
      <Footer2 />
    </DarkTheme>
  );
};

export default BlogDark;
