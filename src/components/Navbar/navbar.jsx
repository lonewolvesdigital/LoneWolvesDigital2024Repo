import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import appData from "../../data/app.json";
import { handleMobileDropdown } from "../../common/navbar";
import styles from "./navbar.module.css";

const Navbar = ({ lr, nr, theme }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
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
        <Link href="/">
          <a ref={lr} className="logo">
            {theme === "themeL" ? (
              <Image
                src={appData.darkLogo}
                alt="logo"
                width={100}
                height={100}
              />
            ) : (
              <Image
                src={appData.lightLogo}
                alt="logo"
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
