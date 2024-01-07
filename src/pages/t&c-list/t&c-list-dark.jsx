import React from "react";
import blog2Data from "../../data/blog2.json";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogListed from "../../components/Blog-list/blog-list";
import PageHeader from "../../components/Page-header/page-header";
import Footer2 from "../../components/Footer2/footer2";

const BlogListDark = () => {
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
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <PageHeader
        className="sub-bg"
        title="Lone Wolves Digital T&C."
        paragraph="Let’s make sure we understand each other crystal clear."
      />
      <BlogListed blogs={blog2Data} />
      <Footer2 />
    </DarkTheme>
  );
};

export default BlogListDark;
