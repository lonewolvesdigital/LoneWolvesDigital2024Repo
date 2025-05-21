/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from 'next/image';


const Blogs2 = () => {
  return (
    <section className="blog-list section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="head md-mb50">
              <h6 className="back-color">What can we command?</h6>
              <h3>Whatever you demand!</h3>
              <p>
              Here are just some of the 12 different types of digital products and services we provide…  
              From 1. Admin & Customer Support, 2. Business, & Finance, 3. Data & AI services, 4. Engineering & Architecture and so on...
 
              </p>
              <Link href="/catalog/catalog-dark">
                <span>SEE OUR FULL CATALOG HERE! </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <Image src="/img/blog/pexels-photomix-company-230544-min.jpg" alt="image"
                  width={700}
                  height={500} />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/catalog/catalog-dark" className="date">
                      <span>
                        <i>Legal</i>
                      </span>
                    </Link>
                    <span>/</span>
                    <Link href="/catalog/catalog-dark" className="tag">
                      <span>Lone WOlVES Catalog</span>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/catalog/catalog-dark" className="link">
                      Regardless of whether you need legal advice, help negotiating, or getting out of trouble, let us get you out of trouble and keep it that way.
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".5s">
              <div className="img valign">
                <Image src="/img/blog/pexels-ekaterina-bolovtsova-7658988-min.jpg" alt="image"
                  width={700}
                  height={500}/>
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/catalog/catalog-dark" className="date">
                      <span>
                        <i>Lifestyle</i>
                      </span>
                    </Link>
                    <span>/</span>
                    <Link href="/catalog/catalog-dark" className="tag">
                      <span>Lone WOlVES catalog</span>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/catalog/catalog-dark" className="link">
                      We have some expert advice on personal development, health, wellness, and even therapist! 
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <Image src="/img/blog/pexels-pixabay-262508-min.jpg" alt="image"
                  width={700}
                  height={500}/>
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/catalog/catalog-dark" className="date">
                      <span>
                        <i>Sales &</i> Digital Marketing.
                      </span>
                    </Link>
                    <span>/</span>
                    <Link href="/catalog/catalog-dark" className="tag">
                      <span>Lone WOLVES catalog</span>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/catalog/catalog-dark" className="link">
                      Your brand needs to be heard and seen all over, that’s why you trust Lone Wolves Digital to convey your message.                       </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs2;
