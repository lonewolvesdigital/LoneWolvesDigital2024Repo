import React, { useState } from "react";

const pricepackages2 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="app-price section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="s-head text-center mb-80">
              <h1 className="stit mb-30">
                <span className="left"></span>Admin & Customer Support
                <span className="right"></span>
              </h1>
              <p> - Virtual assistance and customer service solutions </p>
            </div>
          </div>
        </div>
        <div className="pric-tables">
          <div className="row">
            <div className="col-lg-4">
              <div className="item sm-padding md-mb50">
                <div className="type text-center mb-15">
                  <h3>Beta<br/>Package</h3>
                </div>
                <div className="amount text-center mb-40">
                  <h3>
                    <span>$</span>2500
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                  <p>🏷️ Deal Summary: Ideal for startups and small businesses needing foundational administrative and customer support to keep operations running smoothly.</p>
                </div>
                <div className="beta-features mb-20">
                  <strong>Features</strong>
                  <ul>
                    <li>📧 Email and Chat Support</li>
                    <li>📅 Calendar Management</li>
                    <li>🗂️ Data Entry and Management</li>
                    <li>📞 Basic Customer Service</li>
                    <li>📋 Administrative Tasks</li>
                  </ul>
                  <strong>Option A – 12‑Month Plan</strong>
                  <ul>
                    <li>💵 Monthly Cost: $2,500</li>
                    <li>📅 Annual Cost: $30,000</li>
                    <li>💰 Live Call Deposit: $1,500</li>
                    <li>🎁 Discount Amount: $1,500</li>
                    <li>🧾 Monthly After Discount: $2,375</li>
                    <li>💸 Pre Discount Total : $30,000</li>
                    <li>🏦 Post Discount Total : $28,500</li>
                    <li>🎉 Total Savings: $1,500</li>
                    <li>📉 Savings Percentage: 5%</li>
                  </ul>
                  <strong>Option B – Accelerated 6‑Month Plan</strong>
                  <ul>
                    <li>💵 Monthly Cost: $3,000</li>
                    <li>📅 Semiannual Cost: $18,000</li>
                    <li>💰 Live Call Deposit: $900</li>
                    <li>🎁 Discount Amount: $900</li>
                    <li>🧾 Monthly After Discount: $2,850</li>
                    <li>💸 Pre Discount Total : $18,000</li>
                    <li>🏦 Post Discount Total : $17,100</li>
                    <li>🎉 Total Savings: $900</li>
                    <li>📉 Savings Percentage: 5%</li>
                  </ul>
                </div>
                <div className="custom-dropdown" style={{ position: 'relative' }}>
                  <button 
                    onClick={toggleDropdown}
                    className="butn-gr rounded buton"
                    style={{ width: '100%' }}
                  >
                    <span>Select Plan</span>
                  </button>
                  {isDropdownOpen && (
                    <div 
                      className="dropdown-content"
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 8px)',
                        left: 0,
                        right: 0,
                        background: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '12px',
                        marginTop: '5px',
                        zIndex: 1000,
                        maxHeight: '400px',
                        overflowY: 'auto',
                        border: 'double 2px transparent',
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(to right, rgb(68, 249, 255), #fd7e14, rgba(255, 9, 243, 0.712))',
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'padding-box, border-box',
                        padding: '1px'
                      }}
                    >
                      <a 
                        href="https://form.jotform.com/230592802711552"
                        className="dropdown-link"
                        style={{
                          display: 'block',
                          padding: '10px 15px',
                          color: '#fff',
                          textDecoration: 'none',
                          transition: 'background-color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        Option A
                      </a>
                      <a 
                        href="https://form.jotform.com/241234567890123"
                        className="dropdown-link"
                        style={{
                          display: 'block',
                          padding: '10px 15px',
                          color: '#fff',
                          textDecoration: 'none',
                          transition: 'background-color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        Option B
                      </a>
                      <a 
                        href="https://form.jotform.com/241234567890124"
                        className="dropdown-link"
                        style={{
                          display: 'block',
                          padding: '10px 15px',
                          color: '#fff',
                          textDecoration: 'none',
                          transition: 'background-color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        Custom Plan
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="item active sm-padding md-mb50">
                <div className="type text-center mb-15">
                  <h3>Sigma <br/>Packages</h3>
                </div>
                <div className="amount text-center mb-40">
                  <h3>
                    <span></span>FREE
                  </h3>
                  <h6>
                    <span>Quote</span> today!
                  </h6>
                  
                </div>
                
                <div className="feat">
                  <ul>
                    <li>
                      <i className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>
                      Know what you want!  
                      </li>

                      <li>
                      <i className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>
                      Describe it in details!<br/>
                      
                      </li>
                    <li>
                      <i className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>
                      Be resonable with your budget!
                    </li>

                    <li>
                      <i className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>
                      Submit your form!
                    </li>

                    <li>
                      <i className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>
                      It can take upto 24h.
                    </li>

                    <li className="">
                      <i className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>
                      	We will take it from here!  
                    </li>
                  </ul>
                </div>
                <div className="custom-dropdown" style={{ position: 'relative', marginTop: '20px' }}>
                  <button 
                    onClick={toggleDropdown}
                    className="butn-gr rounded buton"
                    style={{ width: '100%' }}
                  >
                    <span>Select Plan</span>
                  </button>
                  {isDropdownOpen && (
                    <div 
                      className="dropdown-content"
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 8px)',
                        left: 0,
                        right: 0,
                        background: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '12px',
                        marginTop: '5px',
                        zIndex: 1000,
                        maxHeight: '400px',
                        overflowY: 'auto',
                        border: 'double 2px transparent',
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(to right, rgb(68, 249, 255), #fd7e14, rgba(255, 9, 243, 0.712))',
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'padding-box, border-box',
                        padding: '1px'
                      }}
                    >
                      <a 
                        href="https://form.jotform.com/230592802711552"
                        className="dropdown-link"
                        style={{
                          display: 'block',
                          padding: '10px 15px',
                          color: '#fff',
                          textDecoration: 'none',
                          transition: 'background-color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        Option A
                      </a>
                      <a 
                        href="https://form.jotform.com/241234567890123"
                        className="dropdown-link"
                        style={{
                          display: 'block',
                          padding: '10px 15px',
                          color: '#fff',
                          textDecoration: 'none',
                          transition: 'background-color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        Option B
                      </a>
                      <a 
                        href="https://form.jotform.com/241234567890124"
                        className="dropdown-link"
                        style={{
                          display: 'block',
                          padding: '10px 15px',
                          color: '#fff',
                          textDecoration: 'none',
                          transition: 'background-color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        Custom Plan
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="item sm-padding">
                <div className="type text-center mb-15">
                  <h3>Alpha<br/>Packages</h3>
                </div>
                <div className="amount text-center mb-40">
                  <h3>
                    <span>$</span> 249,99
                  </h3>
                  <h6>
                    <span>per</span> website
                  </h6>
                </div>
                
                {/* Alpha Dropdown Button (copied from Beta) */}
                <div className="custom-dropdown" style={{ position: 'relative' }}>
                  <button 
                    onClick={toggleDropdown}
                    className="butn-gr rounded buton"
                    style={{ width: '100%' }}
                  >
                    <span>Select Plan</span>
                  </button>
                  {isDropdownOpen && (
                    <div 
                      className="dropdown-content"
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 8px)',
                        left: 0,
                        right: 0,
                        background: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '12px',
                        marginTop: '5px',
                        zIndex: 1000,
                        maxHeight: '400px',
                        overflowY: 'auto',
                        border: 'double 2px transparent',
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(to right, rgb(68, 249, 255), #fd7e14, rgba(255, 9, 243, 0.712))',
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'padding-box, border-box',
                        padding: '1px'
                      }}
                    >
                      <a 
                        href="https://form.jotform.com/230592802711552"
                        className="dropdown-link"
                        style={{
                          display: 'block',
                          padding: '10px 15px',
                          color: '#fff',
                          textDecoration: 'none',
                          transition: 'background-color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        Option A
                      </a>
                      <a 
                        href="https://form.jotform.com/241234567890123"
                        className="dropdown-link"
                        style={{
                          display: 'block',
                          padding: '10px 15px',
                          color: '#fff',
                          textDecoration: 'none',
                          transition: 'background-color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        Option B
                      </a>
                      <a 
                        href="https://form.jotform.com/241234567890124"
                        className="dropdown-link"
                        style={{
                          display: 'block',
                          padding: '10px 15px',
                          color: '#fff',
                          textDecoration: 'none',
                          transition: 'background-color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        Custom Plan
                      </a>
                    </div>
                  )}
                </div>
                <div className="feat">
                  <ul>

                  <li>
                      <i className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>
                      $37,26 pm Hosting & Services
                    </li>

                    <li>
                      <i className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>
                      Design & Development<br/> 
                      </li>

                    <li>
                      <i className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>
                      Clean Code
                    </li>

                    <li>
                      <i className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>
                      Time lapse (3 month period) 
                    </li>

                    <li>
                      <i className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>
                      Modern UI Design
                    </li>

                    <li>
                      <i className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>
                      	Technical Support
                       </li>

                    <li>
                      <i className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>
                      Maintenance 30 changes pm
                    </li>

                    <li>
                      <i className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>
                      Secure payment systems 
                    </li>

                    <li>
                      <i className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>
                      Inventory management 
                    </li>

                    <li>
                      <i className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>
                      	User accounts management
                    </li>
                  </ul>
                </div>
                <div className="custom-dropdown" style={{ position: 'relative' }}>
                  <button 
                    onClick={toggleDropdown}
                    className="butn-gr rounded buton"
                    style={{ width: '100%' }}
                  >
                    <span>Select Plan</span>
                  </button>
                  {isDropdownOpen && (
                    <div 
                      className="dropdown-content"
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 8px)',
                        left: 0,
                        right: 0,
                        background: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '12px',
                        marginTop: '5px',
                        zIndex: 1000,
                        maxHeight: '400px',
                        overflowY: 'auto',
                        border: 'double 2px transparent',
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(to right, rgb(68, 249, 255), #fd7e14, rgba(255, 9, 243, 0.712))',
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'padding-box, border-box',
                        padding: '1px'
                      }}
                    >
                      <a 
                        href="https://form.jotform.com/230592802711552"
                        className="dropdown-link"
                        style={{
                          display: 'block',
                          padding: '10px 15px',
                          color: '#fff',
                          textDecoration: 'none',
                          transition: 'background-color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        Option A
                      </a>
                      <a 
                        href="https://form.jotform.com/241234567890123"
                        className="dropdown-link"
                        style={{
                          display: 'block',
                          padding: '10px 15px',
                          color: '#fff',
                          textDecoration: 'none',
                          transition: 'background-color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        Option B
                      </a>
                      <a 
                        href="https://form.jotform.com/241234567890124"
                        className="dropdown-link"
                        style={{
                          display: 'block',
                          padding: '10px 15px',
                          color: '#fff',
                          textDecoration: 'none',
                          transition: 'background-color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        Custom Plan
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default pricepackages2;
