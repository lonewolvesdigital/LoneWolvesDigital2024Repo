/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from 'next/image';


const ProjectGallery = () => {
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row">
          <a href="#" className="col-md-3 popimg">
            <Image alt="" src="/img/catalog/catagories/good-faces-BWMxkGvbd_Y-unsplash.jpg" layout='fill' />
          </a>
          <a href="#" className="col-md-3 popimg">
            <Image alt="" src="/img/catalog/catagories/good-faces-gy5SlRW9OGA-unsplash.jpg" layout='fill' />
          </a>
          <a href="#" className="col-md-3 popimg">
            <Image alt="" src="/img/catalog/catagories/hourglass-2910951_1920.jpg"  layout='fill'/>
          </a>
          <a href="#" className="col-md-3 popimg">
            <Image alt="" src="/img/catalog/catagories/manny-pantoja-P2-4kxFhvCQ-unsplash.jpg" layout='fill'/>
          </a>
          <a href="#" className="col-md-12 popimg">
            <Image alt="" src="/img/catalog/catagories/woman-4702060_1920.jpg" layout='fill'/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
