/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import DarkTheme from "../../layouts/Dark";
import Image from 'next/image';

const BlogList = ({ blogs }) => {
  return (
    <section className="blog-pg blog-list section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts mt-80">
              {blogs.map((blogItem) => (
                <div
                  className="item mb-80 wow fadeInUp"
                  key={blogItem.id}
                  data-wow-delay=".3s"
                >
                  <div className="row">
                    <div className="col-lg-6 valign">
                      <div className="img md-mb50">
                        <Image 
                          width={600}
                          height={400}
                          src={blogItem.image}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 valign">
                      <div className="cont">
                        <div>
                          <div className="info">
                            <Link href="/contact/contact-dark">
                              <span className="date">
                                <span className="date-content">
                                  <i>{blogItem.date.day}</i>
                                  {blogItem.date.month}
                                </span>
                              </span>
                            </Link>
                            <span>/</span>
                            {blogItem.tags.map((tag, idx) => (
                              <Link key={idx} href="/contact/contact-dark">
                                <span className="tag">{tag}</span>
                              </Link>
                            ))}
                          </div>
                          <h5>
                            <Link href="/contact/contact-dark">
                              <span className="link">{blogItem.title}</span>
                            </Link>
                          </h5>
                          <p className="mt-10">
                            {blogItem.content.substring(0, 5000)}
                          </p>
                          <div className="btn-more mt-30">
                            <Link href="/contact/contact-dark">
                              <span className="simple-btn">ASK ABOUT IT</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/*
              <div className="pagination">
                <span className="active">
                  <Link href="/blog/blog-dark">1</Link>
                </span>
                <span>
                  <Link href="/blog/blog-dark">2</Link>
                </span>
                <span>
                  <Link href="/blog/blog-dark">
                    <i className="fas fa-angle-right"></i>
                  </Link>
                </span>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
      <DarkTheme mobileappstyle />
    </section>
  );
};

export default BlogList;
