import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import DarkTheme from "../../layouts/Dark";
import Image from "next/image";
import Head from "next/head";

const Footer2 = () => {
  return (
    <footer className="app-footer" data-overlay-dark="0">
      {/* Main Footer Content */}
      <div className="container">
        <div className="row">
          {/* Contact Section */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="item footer-contact">
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
          </div>

          {/* Newsletter Section */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="item footer-newsletter">
              <div className="title">
                <h5>Subscribe to Lone Wolf Blogs</h5>
              </div>
              <div className="newsletter-wrapper">
                <iframe
                  className="newsletter-iframe"
                  src="https://sibforms.com/serve/MUIFAHoypKk3szmU57oO5Ro2lIrfPluMGzhuR9yd4CExKJ2ui-TVrnjT09SM-n1X5sV-I-1y72XZarFlolppu9d0Wc2DcQF5YA8iihJle1cuaNkOFyuSPHXpro3KeKXeLGFmzx1ijyxGkQ2eL0PU_romI7jfj6SSgtIEeAcFHC3tDW6qKx8xNfv1QXUpoQ9aGs_kzLXB6vUk0p"
                  frameBorder="0"
                  scrolling="auto"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="copyright-section">
                <p>
                  Made by Caleb Mutombo.
                  <br />
                  At Lone Wolves Digital.{" "}
                  <Link href="/lonewolvesdigital/team-dark">
                    <a></a>
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Blog Section */}
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="item footer-blogs">
              <div className="title">
                <h5>Lone Wolf Blogs</h5>
              </div>
              <ul className="blog-list">
                <li>
                  <div className="blog-item">
                    <div className="img">
                      <Link href="/blog/blog-dark">
                        <a>
                          <Image
                            width={80}
                            height={60}
                            src="/img/blog/pexels-andrea-piacquadio-3813341.jpg"
                            alt="Blog post thumbnail"
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
                          <span className="color-font">LONE WOLF BLOGS</span>
                          <h6>coming soon...</h6>
                        </a>
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-item">
                    <div className="img">
                      <Link href="/blog/blog-dark">
                        <a>
                          <Image
                            width={80}
                            height={60}
                            src="/img/blog/pexels-andrea-piacquadio-3791134.jpg"
                            alt="Blog post thumbnail"
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
                          <span className="color-font">LONE WOLVES BLOG</span>
                          <h6>coming soon...</h6>
                        </a>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Secondary Footer Section */}
        <div className="footer-secondary">
          <div className="row">
            {/* Resources Column */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="footer-column">
                <h6 className="column-title">Resources</h6>
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
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="footer-column">
                <h6 className="column-title">Links</h6>
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

            {/* Social Links Column */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-column">
                <h6 className="column-title">Social Links</h6>
                <div className="social-links">
                  <a href="https://www.facebook.com/lonewolvesdigital" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com/LoneWolvesDigit" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/lonewolvesdigital/" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/@LoneWolvesDigital" aria-label="YouTube">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Logo Column */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-column logo-column">
                <a href="#0" className="logo-brand">
                  <Image
                    width={120}
                    height={120}
                    src="/img/logo.png"
                    alt="Lone Wolves Digital"
                  />
                </a>
                <p className="tagline">WHAT YOU DEMAND, WE COMMAND!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="circle-blur"></div>
      <div className="circle-blur two"></div>

      {/* Copyright */}
      <div className="footer-copyright">
        <div className="container">
          <div className="text-center">
            <p>© 2024 Lone Wolves Digital. All Rights Reserved</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .app-footer {
          padding: 60px 0 0;
          position: relative;
        }

        .item {
          margin-bottom: 40px;
        }

        .title h5 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 25px;
          color: #fff;
        }

        /* Contact Section */
        .footer-contact ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-contact ul li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .footer-contact .icon {
          font-size: 18px;
          margin-right: 15px;
          margin-top: 5px;
          color: #007bff;
        }

        .footer-contact .cont h6 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 5px;
          color: #fff;
        }

        .footer-contact .cont p {
          font-size: 14px;
          line-height: 1.6;
          color: #ccc;
          margin: 0;
        }

        /* Newsletter Section */
        .footer-newsletter .newsletter-wrapper {
          margin-bottom: 30px;
        }

        .newsletter-iframe {
          width: 100%;
          height: 280px;
          border: none;
          border-radius: 8px;
        }

        .copyright-section p {
          font-size: 14px;
          color: #ccc;
          line-height: 1.6;
        }

        /* Blog Section */
        .blog-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .blog-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .blog-item .img {
          margin-right: 15px;
          flex-shrink: 0;
        }

        .blog-item .img img {
          border-radius: 6px;
          object-fit: cover;
        }

        .blog-item .sm-post p {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #fff;
          line-height: 1.4;
        }

        .blog-item .date {
          font-size: 12px;
          color: #007bff;
          text-transform: uppercase;
        }

        .blog-item h6 {
          font-size: 12px;
          color: #ccc;
          margin: 0;
        }

        /* Secondary Footer */
        .footer-secondary {
          padding: 40px 0;
          border-top: 1px solid #333;
          margin-top: 40px;
        }

        .footer-column {
          margin-bottom: 30px;
        }

        .column-title {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 20px;
          color: #fff;
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-column ul li {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .footer-column ul li .icon {
          font-size: 12px;
          margin-right: 8px;
          color: #007bff;
        }

        .footer-column ul li a {
          color: #ccc;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .footer-column ul li a:hover {
          color: #007bff;
        }

        /* Social Links */
        .social-links {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #333;
          border-radius: 50%;
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: #007bff;
          transform: translateY(-2px);
        }

        /* Logo Column */
        .logo-column {
          text-align: center;
        }

        .logo-brand {
          display: inline-block;
          margin-bottom: 15px;
        }

        .tagline {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Copyright */
        .footer-copyright {
          background: #1a1a1a;
          padding: 20px 0;
          border-top: 1px solid #333;
        }

        .footer-copyright p {
          color: #ccc;
          font-size: 14px;
          margin: 0;
        }

        /* Tablet Styles */
        @media (max-width: 991px) {
          .app-footer {
            padding: 40px 0 0;
          }

          .newsletter-iframe {
            height: 250px;
          }

          .footer-secondary {
            padding: 30px 0;
          }
        }

        /* Mobile Styles */
        @media (max-width: 767px) {
          .app-footer {
            padding: 30px 0 0;
          }

          .item {
            margin-bottom: 35px;
          }

          .title h5 {
            font-size: 18px;
            margin-bottom: 20px;
            text-align: center;
          }

          /* Contact Section Mobile */
          .footer-contact ul li {
            margin-bottom: 18px;
          }

          .footer-contact .icon {
            font-size: 16px;
            margin-right: 12px;
          }

          .footer-contact .cont h6 {
            font-size: 15px;
          }

          .footer-contact .cont p {
            font-size: 13px;
          }

          /* Newsletter Mobile */
          .newsletter-iframe {
            height: 220px;
          }

          /* Blog Section Mobile */
          .blog-item {
            flex-direction: column;
            text-align: center;
          }

          .blog-item .img {
            margin-right: 0;
            margin-bottom: 10px;
            align-self: center;
          }

          /* Secondary Footer Mobile */
          .footer-secondary {
            padding: 25px 0;
          }

          .column-title {
            font-size: 15px;
            margin-bottom: 15px;
          }

          .footer-column ul li a {
            font-size: 13px;
          }

          /* Social Links Mobile */
          .social-links {
            justify-content: center;
            gap: 12px;
          }

          .social-links a {
            width: 35px;
            height: 35px;
          }

          /* Logo Mobile */
          .logo-column {
            text-align: center;
            margin-top: 20px;
          }

          .tagline {
            font-size: 13px;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .app-footer {
            padding: 20px 0 0;
          }

          .item {
            margin-bottom: 25px;
          }

          .title h5 {
            font-size: 16px;
            margin-bottom: 15px;
          }

          .newsletter-iframe {
            height: 200px;
          }

          .footer-secondary {
            padding: 20px 0;
          }

          .column-title {
            font-size: 14px;
            margin-bottom: 12px;
          }

          .footer-column ul li {
            margin-bottom: 8px;
          }

          .footer-column ul li a {
            font-size: 12px;
          }

          .social-links a {
            width: 32px;
            height: 32px;
            font-size: 14px;
          }

          .tagline {
            font-size: 12px;
          }

          .footer-copyright p {
            font-size: 12px;
          }
        }

        /* Very Small Mobile */
        @media (max-width: 360px) {
          .newsletter-iframe {
            height: 180px;
          }

          .blog-item .img img {
            width: 60px;
            height: 45px;
          }

          .social-links {
            gap: 8px;
          }

          .social-links a {
            width: 30px;
            height: 30px;
            font-size: 12px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer2;