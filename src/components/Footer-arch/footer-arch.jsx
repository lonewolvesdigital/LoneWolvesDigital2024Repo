/* eslint-disable @next/next/no-img-element */
import React from "react";
import appData from '../../data/app.json';
import Image from 'next/image';


const FooterArch = () => {
  return (
    <footer className="sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>504 White St . Dawsonville, GA 30534 , New York</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>support@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+87986451666</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Image src="/img/blog/1.jpg" alt="" layout='fill'/>
                  </div>
                  <div className="sm-post">
                    <p>
                      The Start-Up Ultimate Guide to Make Your WordPress
                      Journal.
                    </p>
                    <span className="date main-color">14 sep 2022</span>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Image src="/img/blog/2.jpg" alt="" layout='fill' />
                  </div>
                  <div className="sm-post">
                    <p>
                      The Start-Up Ultimate Guide to Make Your WordPress
                      Journal.
                    </p>
                    <span className="date main-color">14 sep 2022</span>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane back-color"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <Image src={appData.lightLogo} alt="" layout='fill'/>
              </div>
              <div className="social">
                 href="#0">
                  <i className="fab fa-facebook-f"></i>
                
                 href="#0">
                  <i className="fab fa-twitter"></i>
                
                 href="#0">
                  <i className="fab fa-instagram"></i>
                
                 href="#0">
                  <i className="fab fa-youtube"></i>
                
              </div>
              <div className="copy-right">
                <p>
                  © 2022, Vie Template. Made with passion by
                   href="#0" className="main-color">
                    ThemesCamp
                  
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterArch;
