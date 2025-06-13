// eslint-disable-next-line @next/next/no-img-element
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import appData from "../../data/app.json";
import servicesData from "../../data/catalog-data.json"; // Import the services data
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";
import { Sun, SunMoon, Search, X } from "lucide-react";
import { useGlobalContext } from "../../context/GlobalContext";

const Navbar = ({ lr, nr, theme }) => {
  const [isDark, setIsDark] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [filteredServices, setFilteredServices] = React.useState([]);
  const { themeCSS, setThemeCSS } = useGlobalContext();
  const router = useRouter();
  const searchRef = React.useRef(null);

  const onToggleTheme = () => {
    setIsDark(!isDark);
    if (themeCSS === "/css/light.css") {
      setThemeCSS("/css/dark.css");
      localStorage.setItem("theme", "dark");
    } else {
      setThemeCSS("/css/light.css");
      localStorage.setItem("theme", "light");
    }
  };

  // Handle search input changes
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setFilteredServices([]);
      setIsSearchOpen(false);
      return;
    }

    // Filter services based on title, description, and tags
    const filtered = servicesData.filter(service => 
      service.title.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );

    setFilteredServices(filtered);
    setIsSearchOpen(true);
  };

  // Handle service selection
  const handleServiceSelect = (service) => {
    setSearchQuery("");
    setIsSearchOpen(false);
    setFilteredServices([]);
    router.push(service.link);
  };

  // Handle search input focus
  const handleSearchFocus = () => {
    if (searchQuery.trim() !== "" && filteredServices.length > 0) {
      setIsSearchOpen(true);
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    setIsSearchOpen(false);
    setFilteredServices([]);
  };

  // Close search dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo and Search Input */}
        <div className="d-flex align-items-center logo-email-wrapper">
          <Link href="/">
            <a className="logo me-2">
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

          {/* Search input with dropdown */}
          <div className="subscribe-mobile search-container" ref={searchRef}>
            <div className="search-input-wrapper">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                style={{
                  background: "none",
                  borderRadius: "20px",
                  border: "1px solid #ccc",
                  width: "200px",
                  padding: "8px 40px 8px 12px",
                  paddingRight: searchQuery ? "40px" : "12px"
                }}
                placeholder="Find services...."
              />
              <div className="search-icons">
                {searchQuery ? (
                  <X 
                    size={16} 
                    className="search-clear-icon" 
                    onClick={clearSearch}
                  />
                ) : (
                  <Search size={16} className="search-icon" />
                )}
              </div>
            </div>

            {/* Search Results Dropdown */}
            {isSearchOpen && filteredServices.length > 0 && (
              <div className="search-dropdown">
                <div className="search-results">
                  {filteredServices.slice(0, 8).map((service, index) => (
                    <div
                      key={index}
                      className="search-result-item"
                      onClick={() => handleServiceSelect(service)}
                    >
                      <div className="search-result-content">
                        <h6 className="search-result-title">{service.title}</h6>
                        <p className="search-result-description">
                          {service.description.length > 60 
                            ? `${service.description.substring(0, 60)}...` 
                            : service.description
                          }
                        </p>
                        <div className="search-result-tags">
                          {service.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span key={tagIndex} className="search-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {filteredServices.length > 8 && (
                  <div className="search-footer">
                    <small>Showing 8 of {filteredServices.length} results</small>
                  </div>
                )}
              </div>
            )}

            {/* No Results */}
            {isSearchOpen && searchQuery.trim() !== "" && filteredServices.length === 0 && (
              <div className="search-dropdown">
                <div className="search-no-results">
                  <p>No services found for "{searchQuery}"</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
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

        {/* Navbar Links */}
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
              <Link href="/portfolio/portfolio-dark">
                <a className="nav-link">Portfolio</a>
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn-toggle-theme nav-link"
                onClick={onToggleTheme}
                aria-label="Toggle Dark/Light Mode"
              >
                {!isDark ? <Sun /> : <SunMoon />}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Scoped Styles */}
      <style jsx>{`
        .navbar {
          padding: 1rem;
        }

        .logo {
          max-width: 100px;
        }

        .subscribe-mobile {
          display: none;
        }

        .search-container {
          position: relative;
        }

        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-input-wrapper input {
          padding: 0.4rem 0.6rem;
          border: 1px solid #ccc;
          border-radius: 20px;
          font-size: 0.875rem;
          width: 200px;
          transition: all 0.3s ease;
        }

        .search-input-wrapper input:focus {
          outline: none;
          border-color: #0070f3;
          box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.1);
        }

        .search-icons {
          position: absolute;
          right: 12px;
          display: flex;
          align-items: center;
          color: #666;
        }

        .search-clear-icon {
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .search-clear-icon:hover {
          color: #333;
        }

        .search-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          max-height: 400px;
          overflow-y: auto;
          margin-top: 4px;
        }

        .search-results {
          padding: 8px 0;
        }

        .search-result-item {
          padding: 12px 16px;
          cursor: pointer;
          border-bottom: 1px solid #f0f0f0;
          transition: background-color 0.2s ease;
        }

        .search-result-item:hover {
          background-color: #f8f9fa;
        }

        .search-result-item:last-child {
          border-bottom: none;
        }

        .search-result-title {
          margin: 0 0 4px 0;
          font-size: 0.9rem;
          font-weight: 600;
          color: #333;
        }

        .search-result-description {
          margin: 0 0 8px 0;
          font-size: 0.75rem;
          color: #666;
          line-height: 1.3;
        }

        .search-result-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }

        .search-tag {
          font-size: 0.7rem;
          background-color: #e9ecef;
          color: #495057;
          padding: 2px 6px;
          border-radius: 12px;
          white-space: nowrap;
        }

        .search-footer {
          padding: 8px 16px;
          background-color: #f8f9fa;
          border-top: 1px solid #e9ecef;
          text-align: center;
        }

        .search-footer small {
          color: #6c757d;
          font-size: 0.75rem;
        }

        .search-no-results {
          padding: 16px;
          text-align: center;
          color: #6c757d;
        }

        .search-no-results p {
          margin: 0;
          font-size: 0.875rem;
        }

        /* Dark theme styles */
        .navbar.light .search-dropdown {
          background: #333;
          border-color: #555;
        }

        .navbar.light .search-result-item {
          border-bottom-color: #444;
        }

        .navbar.light .search-result-item:hover {
          background-color: #404040;
        }

        .navbar.light .search-result-title {
          color: #fff;
        }

        .navbar.light .search-result-description {
          color: #ccc;
        }

        .navbar.light .search-tag {
          background-color: #555;
          color: #fff;
        }

        .navbar.light .search-footer {
          background-color: #404040;
          border-top-color: #555;
        }

        .navbar.light .search-footer small {
          color: #aaa;
        }

        .navbar.light .search-no-results {
          color: #aaa;
        }

        .navbar.light .search-input-wrapper input {
          background: #333;
          border-color: #555;
          color: #fff;
        }

        .navbar.light .search-input-wrapper input::placeholder {
          color: #aaa;
        }

        .navbar.light .search-input-wrapper input:focus {
          border-color: #0070f3;
        }

        .navbar.light .search-icons {
          color: #aaa;
        }

        .navbar.light .search-clear-icon:hover {
          color: #fff;
        }

        .subs {
          margin-left: 0.5rem;
          font-size: 1.2rem;
          color: #0070f3;
          cursor: pointer;
        }

        .navbar-toggler {
          border: none;
          background: none;
          font-size: 1.5rem;
          margin-left: auto;
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

        @media (max-width: 991px) {
          .subscribe-mobile {
            display: flex;
            align-items: center;
            margin-left: 1rem;
          }

          .logo-email-wrapper {
            flex: 1;
            display: flex;
            align-items: center;
          }

          .navbar-collapse {
            margin-top: 1rem;
          }

          .navbar-nav {
            flex-direction: column;
            align-items: flex-end;
          }

          .nav-item {
            margin-bottom: 0.5rem;
          }

          .search-input-wrapper input {
            width: 160px;
          }
        }

        @media (max-width: 768px) {
          .search-input-wrapper input {
            width: 140px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;