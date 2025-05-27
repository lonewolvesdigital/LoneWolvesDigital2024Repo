/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from 'next/link';
import Image from 'next/image';

const Blogs1 = () => {
  return (
    <section className="blog section-padding sub-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                LONE WOLVES BLOGS
              </h6>
              <h3 className="wow color-font">For digital nomads.</h3>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Blog 1 */}
          <div className="col-lg-6">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
              <div className="img">
                <Image
                  src="/img/blog/pexels-andrea-piacquadio-3769021.jpg"
                  alt="Digital nomad"
                  width={600}
                  height={400}
                />
              </div>
              <div className="cont">
                <div className="info">
                  <Link href="/blog/blog-dark" legacyBehavior>
                    <a className="date">
                      <span><i>Coming soon...</i></span>
                    </a>
                  </Link>
                  <span>/</span>
                  <Link href="/blog/blog-dark" legacyBehavior>
                    <a className="tag">
                      <span>Lone Wolves Blog</span>
                    </a>
                  </Link>
                </div>
                <h5>
                  <Link href="/blog/blog-dark" legacyBehavior>
                    <a>What is a Digital Nomad?</a>
                  </Link>
                </h5>
                <div className="btn-more">
                  <Link href="/blog/blog-dark" legacyBehavior>
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="col-lg-6">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
              <div className="img">
                <Image
                  src="/img/blog/what.jpg"
                  alt="Freelancer life"
                  width={600}
                  height={400}
                />
              </div>
              <div className="cont">
                <div className="info">
                  <Link href="/blog/blog-dark" legacyBehavior>
                    <a className="date">
                      <span><i>Coming soon...</i></span>
                    </a>
                  </Link>
                  <span>/</span>
                  <Link href="/blog/blog-dark" legacyBehavior>
                    <a className="tag">
                      <span>Lone Wolves Blog</span>
                    </a>
                  </Link>
                </div>
                <h5>
                  <Link href="/blog/blog-dark" legacyBehavior>
                    <a>What is a freelancer?</a>
                  </Link>
                </h5>
                <div className="btn-more">
                  <Link href="/blog/blog-dark" legacyBehavior>
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs1;
