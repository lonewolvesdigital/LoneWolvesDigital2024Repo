import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import DarkTheme from "../../layouts/Dark";
import Image from "next/image";

import Head from "next/head";
const Footer2 = () => {
  return (
    <footer className="app-footer" data-overlay-dark="0">

      {/* 1st container  */}
      <div className="container">
        <div className="row">
          {/* <div className="circle-blur1"></div> */}
          {/* <div className="circle-blur2"></div> */}

          <div className="item md-mb50">
            <div className="title">
              <h5>Contact Us</h5>
            </div>
            <ul>
              <li>
                <span className="icon pe-7s-map-marker"></span>
                <div className="cont">
                  <h6>Official Address</h6>
                  <p>
                    # 1127 201 - 1065 Canadian Place Mississauga, ON L4W 0C2
                    Canada
                  </p>
                </div>
              </li>
              <li>
                <span className="icon pe-7s-mail"></span>
                <div className="cont">
                  <h6>Email me</h6>
                  <p>contact@lonewolvesdigital.com</p>
                </div>
              </li>
              <li>
                <span className="icon pe-7s-call"></span>
                <div className="cont">
                  <h6>Howl at us</h6>
                  <p>+1(709) 909-5955</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <h5>Subscribe to Lone Wolf Blogs </h5>
              </div>

              <li>
                {/* <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div> */}
                <iframe
                  width="540"
                  height="305"
                  src="https://sibforms.com/serve/MUIFAHoypKk3szmU57oO5Ro2lIrfPluMGzhuR9yd4CExKJ2ui-TVrnjT09SM-n1X5sV-I-1y72XZarFlolppu9d0Wc2DcQF5YA8iihJle1cuaNkOFyuSPHXpro3KeKXeLGFmzx1ijyxGkQ2eL0PU_romI7jfj6SSgtIEeAcFHC3tDW6qKx8xNfv1QXUpoQ9aGs_kzLXB6vUk0p"
                  frameBorder="0"
                  scrolling="auto"
                  allowFullScreen
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    maxWidth: "100%",
                  }}
                ></iframe>
              </li>
              <br />
              <br />

              <div className="title  Copy-right">
                <p>
                  Made by Caleb Mutombo. <span />
                  <br />
                  <span /> At Lone Wolves Digital. <span /> <span />
                  <Link href="/lonewolvesdigital/team-dark">
                    <a>
                      {" "}
                      <span />
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Lone Wolf Bolgs</h5>
              </div>

              <ul>
                <li>
                  <div className="img">
                    <Link href="/blog/blog-dark">
                      <a>
                        <Image
                          width={900}
                          height={700}
                          src="/img/blog/pexels-andrea-piacquadio-3813341.jpg"
                          alt=""
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog/blog-dark">
                      <a>
                        <p>Why you should become a freelancer.</p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">LONE WOLF BLOGS</span>{" "}
                        <h6>coming soon...</h6>
                      </a>
                    </Link>
                  </div>
                </li>

                <li>
                  <div className="img">
                    <Link href="/blog/blog-dark">
                      <a>
                        <Image
                          width={900}
                          height={700}
                          src="/img/blog/pexels-andrea-piacquadio-3791134.jpg"
                          alt=""
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog/blog-dark">
                      <a>
                        <p>Why you should not become a freelancer.</p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">LONE WOLVES BLOG</span>{" "}
                        <h6>coming soon...</h6>
                      </a>
                    </Link>
                  </div>
                </li>

                <br />
                <br />
                <br />
              </ul>
            </div>
          </div>

          {/* 2nd container */}
           <div className="footer-responsive-section">
        <div className="container">
          <div className="row">
            {/* Resources Column */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-clumn links md-mb50">
                <h5 className="title">Resources</h5>
                <ul>
                  <li>
                    <span className="icon pe-7s-angle-right"></span>
                    <Link href="/lonewolvesdigital/home-dark">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <span className="icon pe-7s-angle-right"></span>
                    <Link href="/lonewolvesdigital/team-dark">
                      <a>Team</a>
                    </Link>
                  </li>
                  <li>
                    <span className="icon pe-7s-angle-right"></span>
                    <Link href="/catalog/catalog-dark">
                      <a>Catalog</a>
                    </Link>
                  </li>
                  <li>
                    <span className="icon pe-7s-angle-right"></span>
                    <Link href="/lonewolvesdigital/process-dark">
                      <a>Process</a>
                    </Link>
                  </li>
                  <li>
                    <span className="icon pe-7s-angle-right"></span>
                    <Link href="/about/about-dark">
                      <a>About</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Links Column */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="item-clumn links sm-mb50">
                <h5 className="title">Links</h5>
                <ul>
                  <li>
                    <span className="icon pe-7s-angle-right"></span>
                    <Link href="/contact/contact-dark">
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <span className="icon pe-7s-angle-right"></span>
                    <Link href="/blog/blog-dark">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <span className="icon pe-7s-angle-right"></span>
                    <Link href="/lonewolvesdigital/faq">
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <span className="icon pe-7s-angle-right"></span>
                    <Link href="/t&c-list/t&c-list-dark">
                      <a>T&C</a>
                    </Link>
                  </li>
                  <li>
                    <span className="icon pe-7s-angle-right"></span>
                    <Link href="/price/price-details-dark">
                      <a>Quotes</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Links Column - Fixed with proper Bootstrap classes */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="item-clumn links">
                <h5 className="title mb-30">Social Links</h5>
                <div className="item">
                  <div className="social">
                    <a href="https://www.facebook.com/lonewolvesdigital">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/LoneWolvesDigit">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/lonewolvesdigital/">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/@LoneWolvesDigital">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo Column - Fixed with responsive image sizing */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="item-clumn our md-mb50">
                <a href="#0" className="logo-brand">
                  <Image
                    width={150}
                    height={150}
                    src="/img/logo.png"
                    alt="Lone Wolves Digital"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </a>
                <p className="tagline">WHAT YOU DEMAND, WE COMMAND!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      <div className="circle-blur"></div>
      <div className="circle-blur two"></div>

      <br />
      <div className="text-center">
        <p>© 2024 Lone Wolves Digital. All Rights Reserved</p>
      </div>
       <style jsx>{`
        .footer-responsive-section {
          padding: 40px 0;
        }

        .item-clumn {
          margin-bottom: 30px;
        }

        .item-clumn .title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .item-clumn ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .item-clumn ul li {
          margin-bottom: 12px;
          display: flex;
          align-items: center;
        }

        .item-clumn ul li .icon {
          margin-right: 8px;
          font-size: 12px;
        }

        .item-clumn ul li a {
          text-decoration: none;
          transition: opacity 0.3s ease;
        }

        .item-clumn ul li a:hover {
          opacity: 0.8;
        }

        .social {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social a:hover {
          transform: translateY(-2px);
        }

        .logo-brand {
          display: inline-block;
          margin-bottom: 15px;
        }

        .tagline {
          font-size: 14px;
          font-weight: 500;
          margin: 0;
        }

        /* Mobile Responsive Styles - Parallel Layout */
        @media (max-width: 768px) {
          .footer-responsive-section {
            padding: 30px 0;
          }

          .item-clumn {
            margin-bottom: 25px;
            text-align: left;
          }

          .item-clumn .title {
            font-size: 16px;
            margin-bottom: 15px;
          }

          .item-clumn ul li {
            justify-content: flex-start;
            margin-bottom: 8px;
          }

          .social {
            justify-content: flex-start;
            gap: 12px;
          }

          .social a {
            width: 35px;
            height: 35px;
          }

          .logo-brand {
            text-align: left;
            display: block;
          }

          .tagline {
            text-align: left;
            font-size: 13px;
          }

          .md-mb50 {
            margin-bottom: 20px !important;
          }
          
          .sm-mb50 {
            margin-bottom: 20px !important;
          }
        }

        @media (max-width: 480px) {
          .footer-responsive-section {
            padding: 20px 0;
          }

          .item-clumn {
            margin-bottom: 18px;
          }

          .item-clumn .title {
            font-size: 15px;
            margin-bottom: 12px;
          }

          .item-clumn ul li {
            font-size: 14px;
            margin-bottom: 6px;
          }

          .social {
            gap: 10px;
          }

          .social a {
            width: 32px;
            height: 32px;
            font-size: 14px;
          }

          .tagline {
            font-size: 12px;
          }
        }

        .mb-30 {
          margin-bottom: 30px !important;
        }
      `}</style>
    </footer>
  );
};

<DarkTheme mobileappstyle />;

export default Footer2;