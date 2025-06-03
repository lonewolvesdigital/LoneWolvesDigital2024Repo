import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import DarkTheme from "../../layouts/Dark";
import Image from "next/image";

import Head from "next/head";
const Footer2 = () => {
  return (
    <footer className="app-footer" data-overlay-dark="0">
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
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
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

              <div className="col-lg-2 col-md-6">
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
                  {/* <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


            </div> */}
                </div>
                {/* <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


            </div> */}
              </div>
              {/* <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


            </div> */}

              <div className="col-lg-4 col-md-6">
                <div className="item-clumn our md-mb50">
                  <a href="#0" className="logo-brand">
                    <Image
                      width={1000}
                      height={1000}
                      src="/img/logo.png"
                      alt=""
                    />
                  </a>
                </div>
                <p>WHAT YOU DEMAND, WE COMMAND!</p>
              </div>

              <div className="item"></div>
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
    </footer>
  );
};

<DarkTheme mobileappstyle />;

export default Footer2;
