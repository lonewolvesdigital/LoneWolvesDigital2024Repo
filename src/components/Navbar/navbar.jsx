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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
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

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  // Close mobile menu on route change
  React.useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = '';
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

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
    if ((searchQuery.trim() !== "" && filteredServices.length > 0) || (searchQuery.trim() === "" && isSearchOpen)) {
      setIsSearchOpen(true);
    }
  };

  // Handle dropdown icon click
  const handleDropdownClick = () => {
    if (isSearchOpen) {
      setIsSearchOpen(false);
      setFilteredServices([]);
    } else {
      if (searchQuery.trim() === "") {
        setFilteredServices(servicesData); // Show all services if search is empty
      }
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
      } ${isMobileMenuOpen ? 'menu-open' : ''}`}
    >
      <div className="container">
        <div className="navbar-content" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 0 }}>
          {/* Logo */}
          <div className="logo-wrapper" style={{ marginRight: 0, paddingRight: 0 }}>
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
          </div>

          {/* Search input with dropdown */}
          <div className="search-container" ref={searchRef} style={{ width: '230px', maxWidth: '230px', minWidth: '230px', marginLeft: 0 }}>
            <div className="search-input-wrapper" style={{ width: '100%', maxWidth: '230px', minWidth: '230px' }}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                className="search-input"
                placeholder="Search here...."
                style={{ width: '100%', maxWidth: '230px', minWidth: '230px', boxSizing: 'border-box', flex: '1 1 0%' }}
              />
              <div className="search-icons">
                {searchQuery ? (
                  <X 
                    size={16} 
                    className="search-clear-icon" 
                    onClick={clearSearch}
                  />
                ) : (
                  <>
                    <Search size={16} className="search-icon" />
                    <span className="dropdown-icon" style={{cursor: 'pointer', marginLeft: 6}} onClick={handleDropdownClick}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </>
                )}
              </div>
              {/* Move the dropdown here so it is always directly under the search bar */}
              {isSearchOpen && filteredServices.length > 0 && (
                <div className="dropdown-menu-services styled-dropdown" style={{ width: '100%', maxWidth: '230px', minWidth: '230px', left: 0 }}>
                  {filteredServices.map((service, idx) => (
                    <div key={idx} className="dropdown-service-item styled-dropdown-item" onClick={() => handleServiceSelect(service)}>
                      <div className="dropdown-service-title">{service.title}</div>
                      <div className="dropdown-service-description">{service.description.length > 40 ? service.description.substring(0, 40) + '...' : service.description}</div>
                      <div className="dropdown-service-tags">
                        {service.tags && service.tags.slice(0, 3).map((tag, tagIdx) => (
                          <span key={tagIdx} className="dropdown-service-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
            style={{ marginLeft: 0 }}
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>
        </div>

        {/* Navbar Links */}
        <div className={`navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
          {/* X icon for closing mobile menu */}
          <button
            className="mobile-menu-close"
            style={{
              position: 'absolute',
              top: 18,
              right: 18,
              background: 'none',
              border: 'none',
              zIndex: 1100,
              cursor: 'pointer',
              color: '#fff',
              fontSize: 28,
              display: isMobileMenuOpen ? 'block' : 'none',
            }}
            aria-label="Close menu"
            onClick={toggleMobileMenu}
          >
            <X size={32} />
          </button>
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
            {/* <li className="nav-item">
              <button
                className="btn-toggle-theme nav-link"
                onClick={onToggleTheme}
                aria-label="Toggle Dark/Light Mode"
              >
                {!isDark ? <Sun /> : <SunMoon />}
              </button>
            </li> */}
          </ul>
        </div>
      </div>

      {/* Scoped Styles */}
      <style jsx>{`
        .navbar {
          padding: 1rem;
        }

        .navbar-content {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 0;
        }

        .logo-wrapper {
          margin-right: 0;
          padding-right: 0;
        }

        .logo {
          max-width: 100px;
          display: block;
        }

        .search-container,
        .search-input-wrapper,
        .search-input,
        .dropdown-menu-services.styled-dropdown {
          max-width: 230px !important;
          min-width: 230px !important;
          width: 230px !important;
        }

        .search-container {
          width: 230px;
          margin: 0 8px;
          flex-shrink: 0;
        }

        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-input {
          padding: 8px 40px 8px 12px;
          background: transparent;
          border-radius: 20px;
          font-size: 0.875rem;
          width: 100%;
          transition: all 0.3s ease;
          position: relative;
          border: double 2px transparent;
          background-image: linear-gradient(white, white), 
            linear-gradient(to right, rgb(68,249,255), #fd7e14, rgba(255, 9, 243, 0.712));
          background-origin: border-box;
          background-clip: padding-box, border-box;
        }

        .search-input:focus {
          outline: none;
          border: double 2.5px transparent;
          background-image: linear-gradient(white, white), 
            linear-gradient(to right, rgb(68,249,255), #fd7e14, rgba(255, 9, 243, 0.712));
          background-origin: border-box;
          background-clip: padding-box, border-box;
          box-shadow: 0 0 15px rgba(68, 249, 255, 0.2);
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

        .navbar-collapse {
          flex: 0 0 auto;  /* Prevents nav from growing */
        }

        .search-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.5);  /* 50% transparent black */
          border-radius: 12px;
          z-index: 1000;
          max-height: 400px;
          overflow-y: auto;
          border: double 2px transparent;
          background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
            linear-gradient(to right, rgb(68, 249, 255), #fd7e14, rgba(255, 9, 243, 0.712));
          background-origin: border-box;
          background-clip: padding-box, border-box;
          padding: 1px;  /* Ensure border is visible */
        }

        .styled-dropdown {
          position: absolute;
          left: 0;
          top: 100%;
          width: 100%; /* Match the width of the search bar */
          min-width: 340px;
          max-width: 500px;
          z-index: 1000;
          max-height: 400px;
          overflow-y: auto;
          border-radius: 18px;
          margin-top: 8px;
          background: linear-gradient(120deg, rgba(68,249,255,0.85) 0%, rgba(253,126,20,0.85) 50%, rgba(255,9,243,0.7) 100%);
          box-shadow: 0 4px 32px 0 rgba(0,0,0,0.25);
          padding: 1px 0;
          border: double 2px transparent;
          background-clip: padding-box, border-box;
        }

        .search-results {
          padding: 8px;
          background: transparent;
        }

        .search-result-item {
          padding: 12px;
          cursor: pointer;
          border-radius: 8px;
          transition: background-color 0.2s ease;
          margin-bottom: 4px;
        }

        .search-result-item:hover {
          background-color: rgba(0, 0, 0, 0.3);  /* Darker on hover */
        }

        .search-result-item:last-child {
          margin-bottom: 0;
        }

        .search-result-title {
          margin: 0 0 4px 0;
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff;
        }

        .search-result-description {
          margin: 0 0 8px 0;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.3;
        }

        .search-result-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }

        .search-tag {
          font-size: 0.7rem;
          background-color: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
          padding: 2px 8px;
          border-radius: 12px;
          white-space: nowrap;
        }

        .search-footer {
          padding: 8px 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .search-footer small {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.75rem;
        }

        .search-no-results {
          padding: 16px;
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
        }

        .search-no-results p {
          margin: 0;
          font-size: 0.875rem;
        }

        /* Scrollbar styling for the dropdown */
        .search-dropdown::-webkit-scrollbar {
          width: 8px;
        }

        .search-dropdown::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 0 12px 12px 0;
        }

        .search-dropdown::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }

        .search-dropdown::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        /* Dark theme input styles */
        .navbar.light .search-input {
          background-image: linear-gradient(#333, #333), 
            linear-gradient(to right, rgb(68, 249, 255), #fd7e14, rgba(255, 9, 243, 0.712));
          color: #fff;
        }

        .navbar.light .search-input:focus {
          background-image: linear-gradient(#333, #333), 
            linear-gradient(to right, rgb(68, 249, 255), #fd7e14, rgba(255, 9, 243, 0.712));
        }

        .btn-toggle-theme {
          background: transparent !important;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          color: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.2s ease;
        }

        .btn-toggle-theme:hover {
          opacity: 0.8;
        }

        .btn-toggle-theme:focus {
          outline: none;
          box-shadow: none;
        }

        @media (max-width: 991px) {
          .navbar-content {
            flex-wrap: wrap;
          }

          .navbar-collapse {
            position: fixed;
            top: 0;
            right: -280px;
            width: 280px;
            /* Remove fixed height and use min-height for flexibility */
            min-height: 100vh;
            height: auto;
            background: rgba(0, 0, 0, 0.95);
            padding: 2rem 1rem;
            transition: all 0.3s ease-in-out;
            z-index: 1000;
            border-left: double 2px transparent;
            background-clip: padding-box, border-box;
            background-image: linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95)),
              linear-gradient(to bottom, rgb(68, 249, 255), #fd7e14, rgba(255, 9, 243, 0.712));
            transform: translateX(0);
            opacity: 0;
            visibility: hidden;
            overflow-y: visible;
          }

          .navbar-collapse.show {
            right: 0;
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
          }

          .navbar-nav {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 2rem;
            padding: 0;
          }

          .nav-item {
            opacity: 0;
            transform: translateX(20px);
          }

          .navbar-collapse.show .nav-item {
            animation: slideIn 0.3s ease forwards;
          }

          .nav-item:nth-child(1) { animation-delay: 0.1s; }
          .nav-item:nth-child(2) { animation-delay: 0.2s; }
          .nav-item:nth-child(3) { animation-delay: 0.3s; }
          .nav-item:nth-child(4) { animation-delay: 0.4s; }
          .nav-item:nth-child(5) { animation-delay: 0.5s; }
          .nav-item:nth-child(6) { animation-delay: 0.6s; }
          .nav-item:nth-child(7) { animation-delay: 0.7s; }

          @keyframes slideIn {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .nav-link {
            color: #fff !important;
            font-size: 1.1rem;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            background: rgba(255, 255, 255, 0.05);
            margin: 0;
          }

          .nav-link:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateX(5px);
          }

          /* Overlay when menu is open */
          .navbar::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            pointer-events: none;
          }

          .navbar.menu-open::after {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
          }

          .navbar-toggler {
            display: block;
            padding: 0.5rem;
            color: inherit;
            z-index: 1001;
            position: relative;
          }

          .navbar-toggler .icon-bar {
            display: flex;
            align-items: center;
            justify-content: center;
            color: inherit;
          }
        }

        @media (max-width: 230px) {
          .search-container {
            flex: 0 1 230px;
            margin: 0.5rem auto; /* Center horizontally */
            display: flex;
            justify-content: center;
          }
          .search-input-wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }

        .styled-dropdown-item {
          padding: 18px 20px 12px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          cursor: pointer;
          transition: background 0.2s;
          color: #fff;
        }
        .styled-dropdown-item:last-child {
          border-bottom: none;
        }
        .styled-dropdown-item:hover {
          background: rgba(0,0,0,0.10);
        }
        .dropdown-service-title {
          font-weight: 700;
          font-size: 1.05rem;
          margin-bottom: 2px;
          color: #fff;
        }
        .dropdown-service-description {
          font-size: 0.85rem;
          color: #e0e0e0;
          margin-bottom: 8px;
        }
        .dropdown-service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .dropdown-service-tag {
          background: rgba(255,255,255,0.18);
          color: #fff;
          font-size: 0.75rem;
          padding: 2px 10px;
          border-radius: 12px;
          margin-top: 2px;
          white-space: nowrap;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;