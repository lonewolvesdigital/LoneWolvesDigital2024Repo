// eslint-disable @next/next/no-img-element
import React from "react";
import Image from 'next/image';
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";
import styles from "./navbar.module.css";

const Navbar = ({ lr, nr, theme }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality here
      console.log("Searching for:", searchQuery);
      // You can redirect to a search results page or filter content
      // window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/" className="logo">
          {theme ? (
            theme === "themeL" ? (
              <Image ref={lr} src={appData.darkLogo} alt="logo" layout="responsive" width={100} height={100} />
            ) : (
              <Image ref={lr} src={appData.lightLogo} alt="logo" layout="responsive" width={100} height={100} />
            )
          ) : (
            <Image ref={lr} src={appData.lightLogo} alt="logo" layout="responsive" width={100} height={100} />
          )}
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
          <div className={styles.navbarSearch}>
            <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="submit" className={styles.searchButton}>
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/lonewolvesdigital/home-dark" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/catalog/catalog-dark" className="nav-link">
                Catalog
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/about/about-dark" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/contact/contact-dark" className="nav-link">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/price/price-details-dark" className="nav-link">
                Quotes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
