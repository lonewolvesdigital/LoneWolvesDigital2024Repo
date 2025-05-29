/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from 'next/image';


const ProjectGallery = () => {
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row">
          <div className="col-md-3 popimg">
            <Image alt="" src="/img/catalog/catagories/good-faces-BWMxkGvbd_Y-unsplash.jpg" width={400} height={300} style={{ objectFit: 'cover' }} />
          </div>
          <div className="col-md-3 popimg">
            <Image alt="" src="/img/catalog/catagories/good-faces-gy5SlRW9OGA-unsplash.jpg" width={400} height={300} style={{ objectFit: 'cover' }} />
          </div>
          <div className="col-md-3 popimg">
            <Image alt="" src="/img/catalog/catagories/hourglass-2910951_1920.jpg" width={400} height={300} style={{ objectFit: 'cover' }} />
          </div>
          <div className="col-md-3 popimg">
            <Image alt="" src="/img/catalog/catagories/manny-pantoja-P2-4kxFhvCQ-unsplash.jpg" width={400} height={300} style={{ objectFit: 'cover' }} />
          </div>
          <div className="col-md-12 popimg">
            <Image alt="" src="/img/catalog/catagories/woman-4702060_1920.jpg" width={1200} height={400} style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
