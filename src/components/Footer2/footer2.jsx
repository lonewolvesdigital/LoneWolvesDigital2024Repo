import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer2 = () => {
  return (
    <footer className="app-footer" data-overlay-dark="0">
      <div className="container">
        <div className="row">
          <div className="item md-mb50">
            <div className="title">
              <h5>Contact Us</h5>
            </div>
            <ul>
              <li>
                <span className="icon pe-7s-map-marker"></span>
                <div className="cont">
                  <h6>Official Address</h6>
                  <p>#1127 201 - 1065 Canadian Place, Mississauga, ON L4W 0C2, Canada</p>
                </div>
              </li>
              <li>
                <span className="icon pe-7s-mail"></span>
                <div className="cont">
                  <h6>Email</h6>
                  <p>contact@lonewolvesdigital.com</p>
                </div>
              </li>
              <li>
                <span className="icon pe-7s-call"></span>
                <div className="cont">
                  <h6>Howl at us</h6>
                  <p>+1 (709) 909-5955</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <h5>Subscribe to Lone Wolf Blogs</h5>
              </div>
              <div className="subscribe">
                <input type="text" placeholder="Type Your Email" />
                <span className="subs pe-7s-paper-plane"></span>
              </div>
              <br />
              <br />
              <div className="title Copy-right">
                <p>
                  Made by Caleb Mutombo. <br />
                  At Lone Wolves Digital.{' '}
                  <Link href="/lonewolvesdigital/team-dark" className="link">
                    Meet the pack
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Lone Wolf Blogs</h5>
              </div>
              <ul>
                {[
                  {
                    id: 1,
                    href: "/blog/blog-dark",
                    imgSrc: "/img/blog/pexels-andrea-piacquadio-3813341.jpg",
                    alt: "Blog 1",
                    text: "Why you should become a freelancer.",
                  },
                  {
                    id: 2,
                    href: "/blog/blog-dark",
                    imgSrc: "/img/blog/pexels-andrea-piacquadio-3791134.jpg",
                    alt: "Blog 2",
                    text: "Why you should not become a freelancer.",
                  },
                ].map((post) => (
                  <li key={post.id}>
                    <div>
                      <div className="img">
                        <Link href={post.href}>
                          <Image
                            width={900}
                            height={700}
                            src={post.imgSrc}
                            alt={post.alt}
                            style={{ objectFit: "cover" }}
                          />
                        </Link>
                      </div>
                      <div className="sm-post">
                        <Link href={post.href}>
                          <p>{post.text}</p>
                        </Link>
                        <Link href={post.href}>
                          <div>
                            <span className="date">LONE WOLF BLOGS</span>
                            <h6>Coming soon...</h6>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="item-clumn links md-mb50">
                  <h5 className="title">Resources</h5>
                  <ul>
                    {[
                      { label: "Home", href: "/lonewolvesdigital/home-dark" },
                      { label: "Team", href: "/lonewolvesdigital/team-dark" },
                      { label: "Catalog", href: "/catalog/catalog-dark" },
                      { label: "Process", href: "/lonewolvesdigital/process-dark" },
                      { label: "About", href: "/about/about-dark" },
                    ].map(({ label, href }) => (
                      <li key={label}>
                        <span className="icon pe-7s-angle-right"></span>
                        <Link href={href} className="link">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-6">
                <div className="item-clumn links sm-mb50">
                  <h5 className="title">Links</h5>
                  <ul>
                    {[
                      { label: "Contact", href: "/contact/contact-dark" },
                      { label: "Blog", href: "/blog/blog-dark" },
                      { label: "FAQ", href: "/lonewolvesdigital/faq" },
                      {	label: "T&C", href: "/t&c-list/t&c-list-dark" },
                      {	label: "Quotes", href: "/price/price-details-dark" },
                    ].map(({ label, href }) => (
                      <li key={label}>
                        <span className="icon pe-7s-angle-right"></span>
                        <Link href={href} className="link">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="item-clumn links">
                <h5 className="title mb-30">Social Links</h5>
                <div className="social">
                  <a
                    href="https://www.facebook.com/lonewolvesdigital"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://twitter.com/LoneWolvesDigit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/lonewolvesdigital/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/@LoneWolvesDigital"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="item-clumn our md-mb50">
                  <a href="#0" className="logo-brand mb-50">
                    <Image width={1000} height={1000} src="/img/logo.png" alt="Lone Wolves Logo" />
                  </a>
                  <p>WHAT YOU DEMAND, WE COMMAND!</p>
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
        <p>© 2024 Lone Wolves Digital. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer2;
