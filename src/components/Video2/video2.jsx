import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Video2 = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  return (
    <section
      className="video bg-img parallaxie"
      style={{ backgroundImage: "url(/img/bg-vid.jpg)" }}
    >
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="vimeo"
          autoplay
          isOpen={isOpen}
          videoId="127203262"
          onClose={() => setOpen(false)}
        />
      )}
      
        className="vid valign"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <div className="vid-butn">
          <span className="icon">
            <i className="pe-7s-play"></i>
          </span>
        </div>
      
      <div className="container">
        <div className="stauts">
          <div className="item">
            <h4>
              3<span>Years</span> +
            </h4>
            <h6>experiance</h6>
          </div>
          <div className="item">
            <h4>
              8<span>Step</span> 
            </h4>
            <h6>Process</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video2;
