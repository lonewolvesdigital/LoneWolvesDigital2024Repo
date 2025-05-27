/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from 'next/image';


const BlogStanderd = ({ blogs }) => {
  return (
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              {blogs.map((blogItem, index) => (
                <div
                  className={`item ${
                    index === blogs.length - 1 ? "" : "mb-80"
                  }`}
                  key={blogItem.id}
                >
                  <div className="img justify-content-center">
                    <Link href={`#0`} className="img-link">
                      <Image src={blogItem.image} alt="" 
                        width={1000}
                        height={600} />
                    </Link>
                  </div>
                  <div className="content">
                    <div className="row justify-content-center">
                      <div className="col-10">
                        <Link href={`#0`} className="date">
                          <span className="num">{blogItem.date.day}</span>
                          <span>{blogItem.date.month}</span>
                        </Link>
                        <div className="tags">
                          {blogItem.tags.map((tag, index) => (
                            <Link key={index} href="#0">
                              {tag}
                            </Link>
                          ))}
                        </div>
                        <h4 className="title">
                          <Link href={`#0`} className="title-link">
                            {blogItem.title}
                          </Link>
                        </h4>
                        <p>{blogItem.content}</p>
                        <Link href={`#0`} className="butn bord curve mt-30">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="pagination">
                <span className="active">
                  <Link href={`/blog/blog-dark`}>1</Link>
                </span>
                <span>
                  <Link href={`/blog/blog-dark`}>2</Link>
                </span>
                <span>
                  <Link href={`/blog/blog-dark`}>
                    
                      <i className="fas fa-angle-right"></i>
                    
                  </Link>
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStanderd;
