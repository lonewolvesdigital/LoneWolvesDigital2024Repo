import React from "react";
import Link from "next/link";

const Services6 = () => {
  return (
    <section className="serv-arch">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/pexels-vedanti-242494-min.jpg)" }}
          >
            <h6 className="numb"> Step 01</h6>
            <h5 className="color-font">GOAL IDENTIFICATION</h5>
            <p>
            Clarity is key so, show us where you want to take your project and we will show you how to get there.
            </p>
            <Link href="/lonewolvesdigital/process-dark">
               className="custom-font more main-color">Read More
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/glenn-carstens-peters-RLw-UC03Gwc-unsplash-min.jpg)" }}
          >
            <h6 className="numb">Step 02</h6>
            <h5 className="color-font">SCOPE DEFINITION</h5>
            <p>
            Like a chef preparing the ingredients for a five star meal, I prepare the components  for your new world class website.
            </p>
            <Link href="/lonewolvesdigital/process-dark">
               className="custom-font more main-color">Read More
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/faizur-rehman-dJpupM4LiS4-unsplash-min.jpg)" }}
          >
            <h6 className="numb">Step 03</h6>
            <h5 className="color-font">Plan</h5>
            <p>
            Once you know the purpose of your request and it&apos;s components, this can only mean it&apos;s time to plan the construction.
            </p>
            <Link href="/lonewolvesdigital/process-dark">
               className="custom-font more main-color">Read More
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/peter-stumpf-FhZEpxtTI_Y-unsplash-min.jpg)" }}
          >
            <h6 className="numb">Step 04</h6>
            <h5 className="color-font">Manifest</h5>
            <p>
            It&apos;s magic time, we will make sure that no matter the task we will ensure that the images, video, text and animation are the correct combination, just for you. 
            </p>
            <Link href="/lonewolvesdigital/process-dark">
               className="custom-font more main-color">Read More
            </Link>
          </div>
        </div>

        <div className="row justify-content-center">
        <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/kevin-nalty-BPQzHsFD9ng-unsplash-min.jpg)" }}
          >
            <h6 className="numb">Step 05</h6>
            <h5 className="color-font">Deliver</h5>
            <p>
            We give you what you asked for, and you will find it delivered right in your inbox, either by a link or the actual file!
            </p>
            <Link href="/lonewolvesdigital/process-dark">
               className="custom-font more main-color">Read More
            </Link>
          </div>
          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/luke-chesser-JKUTrJ4vK00-unsplash-min.jpg)" }}
          >
            <h6 className="numb">Step 06</h6>
            <h5 className="color-font">SUPPORT</h5>
            <p>
            Some projects are bigger than other, that&apos;s why we stay with you for the long run. Feel free to come back for some TLC if needed.
            </p>
            <Link href="/lonewolvesdigital/process-dark">
               className="custom-font more main-color">Read More
            </Link>
          </div>
          {/* <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/nasa-JkaKy_77wF8-unsplash-min.jpg)" }}
          >
            <h6 className="numb">Step 07</h6>
            <h5 className="color-font">LAUNCH</h5>
            <p>
            5, 4, ,3 ,2 ,1 we got lift off. We are receiving live satellite images of a fully functional website. At this point its all systems go!
            </p>
            <Link href="/about/about-dark">
               className="custom-font more main-color">Read More
            </Link>
          </div>
          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/ken-suarez-4IxPVkFGJGI-unsplash-min.jpg)" }}
          >
            <h6 className="numb">Step 08</h6>
            <h5 className="color-font">MAINTAINS</h5>
            <p>
            No the job is not yet complete, believe it all not, sites like people need a little TLC and a place to call home.
            </p>
            <Link href="/about/about-dark">
               className="custom-font more main-color">Read More
            </Link>
          </div> */}
          
        </div>
        
      </div>
    </section>
  );
};

export default Services6;
