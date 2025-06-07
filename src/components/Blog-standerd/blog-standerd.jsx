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
                    <Link href={`#0`}>
                      <a>
                        <Image src={blogItem.image} alt="" 
                        width={1000}
                        height={600} />
                        
                      </a>
                    </Link>
                  </div>
                  <div className="content">
                    <div className="row justify-content-center">
                      <div className="col-10">
                        <Link href={`#0`}>
                          <a className="date">
                            <span className="num">{blogItem.date.day}</span>
                            <span>{blogItem.date.month}</span>
                          </a>
                        </Link>
                        <div className="tags">
                          {blogItem.tags.map((tag, index) => (
                            <Link key={index} href="#0">
                              {tag}
                            </Link>
                          ))}
                        </div>
                        <h4 className="title">
                          <Link href={`#0`}>
                            {blogItem.title}
                          </Link>
                        </h4>
                        <p>{blogItem.content}</p>
                        <Link href={`#0`}>
                          <a className="butn bord curve mt-30">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStanderd;
