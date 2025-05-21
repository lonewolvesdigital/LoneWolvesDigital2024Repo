import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import DarkTheme from "../../layouts/Dark";
import Image from 'next/image';
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
                    <p># 1127 201 - 1065 Canadian Place Mississauga, ON L4W 0C2 Canada</p>
                    

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
                <div className="subscribe">
                  <input type="text" placeholder="Type Your Email" />
                  <span className="subs pe-7s-paper-plane"></span>
                </div>
              </li>
              <br />
              <br />
              <div className="title Copy-right">
                <p>
                  Made by Caleb Mutombo. <span />
                  <br />
                  <span /> At Lone Wolves Digital. <span /> <span />
                  <Link href="/lonewolvesdigital/team-dark">
                    <span />
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
                      <Image width={900} height={700} src="/img/blog/pexels-andrea-piacquadio-3813341.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog/blog-dark">
                      <p>Why you should become a freelancer.</p>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <span className="date">LONE WOLF BLOGS</span> <h6>coming soon...</h6>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/blog/blog-dark">
                      <Image width={900} height={700} src="/img/blog/pexels-andrea-piacquadio-3791134.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog/blog-dark">
                      <p>Why you should not become a freelancer.</p>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <span className="date">LONE WOLVES BLOG</span> <h6>coming soon...</h6>
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
                      <Link href="/lonewolvesdigital/home-dark" className="link">Home</Link>
                    </li>
                    <li>
                      <span className="icon pe-7s-angle-right"></span>
                      <Link href="/lonewolvesdigital/team-dark" className="link">Team</Link>
                    </li>
                    <li>
                      <span className="icon pe-7s-angle-right"></span>
                      <Link href="/catalog/catalog-dark" className="link">Catalog</Link>
                    </li>
                    <li>
                      <span className="icon pe-7s-angle-right"></span>
                      <Link href="/lonewolvesdigital/process-dark" className="link">Process</Link>
                    </li>
                    <li>
                      <span className="icon pe-7s-angle-right"></span>
                      <Link href="/about/about-dark" className="link">About</Link>
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
                      <Link href="/contact/contact-dark" className="link">Contact</Link>
                    </li>
                    <li>
                      <span className="icon pe-7s-angle-right"></span>
                      <Link href="/blog/blog-dark" className="link">Blog</Link>
                    </li>
                    <li>
                      <span className="icon pe-7s-angle-right"></span>
                      <Link href="/lonewolvesdigital/faq" className="link">FAQ</Link>
                    </li>
                    <li>
                      <span className="icon pe-7s-angle-right"></span>
                      <Link href="/t&c-list/t&c-list-dark" className="link">T&C</Link>
                    </li>
                    <li>
                      <span className="icon pe-7s-angle-right"></span>
                      <Link href="/price/price-details-dark" className="link">Quotes</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="item-clumn links">
                <h5 className="title mb-30">Social Links</h5>
                <div className="item">
                  <div className="social">
                    <a href="https://www.facebook.com/lonewolvesdigital" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/LoneWolvesDigit" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/lonewolvesdigital/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/@LoneWolvesDigital" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="item-clumn our md-mb50">
                  <a href="#0" className="logo-brand mb-50">
                    <Image width={1000} height={1000} src="/img/logo.png" alt="" />
                  </a>
                </div>
                <p>WHAT YOU DEMAND, WE COMMAND!</p>
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
    </footer>
  );
};

export default Footer2;
