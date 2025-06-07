// eslint-disable-next-line @next/next/no-img-element
import React from "react";
import Image from "next/image";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";
import { Sun, SunMoon } from "lucide-react";
import { useGlobalContext } from "../../context/GlobalContext";

const Navbar = ({ lr, nr, theme }) => {
  const [isDark, setIsDark] = React.useState(true);
  const {themeCSS, setThemeCSS} = useGlobalContext();

  const onToggleTheme = () => {
    setIsDark(!isDark);
  if(themeCSS==="/css/light.css"){
    setThemeCSS("/css/dark.css")
    localStorage.setItem("theme", "dark")
  }else {
    setThemeCSS("/css/light.css")
    localStorage.setItem("theme", "light")
  }
  }
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${theme === "themeL" ? "light" : ""}`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <Image
                  ref={lr}
                  src={appData.darkLogo}
                  alt="logo"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              ) : (
                <Image
                  ref={lr}
                  src={appData.lightLogo}
                  alt="logo"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              )
            ) : (
              <Image
                ref={lr}
                src={appData.lightLogo}
                alt="logo"
                layout="responsive"
                width={100}
                height={100}
              />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/lonewolvesdigital/home-dark">
                <a className="nav-link">Home</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/catalog/catalog-dark">
                <a className="nav-link">Catalog</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/about/about-dark">
                <a className="nav-link">About</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/contact/contact-dark">
                <a className="nav-link">Contact</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/price/price-details-dark">
                <a className="nav-link">Quotes</a>
              </Link>
            </li>

            <li className="nav-item">
              <button
                className="btn-toggle-theme nav-link"
                onClick={onToggleTheme}
                aria-label="Toggle Dark/Light Mode"
              >
                {!isDark ? <Sun/> : <SunMoon/>}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* SCOPED CSS */}
      <style jsx>{`
        .navbar {
          padding: 1rem;
        }

        .navbar-toggler {
          margin-left: auto;
          border: none;
          background: none;
          font-size: 1.5rem;
        }

        .navbar-toggler .icon-bar {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-toggle-theme {
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.5rem 1rem;
          color: inherit;
          font-family: inherit;
        }

        .btn-toggle-theme:hover {
          text-decoration: underline;
        }

        @media (max-width: 991px) {
          .navbar-collapse {
            width: 100%;
            text-align: right;
            padding-right: 1rem;
          }

          .navbar-nav {
            flex-direction: column;
            align-items: flex-end;
          }

          .nav-item {
            margin-bottom: 0.5rem;
          }

          .nav-link {
            display: inline-block;
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
