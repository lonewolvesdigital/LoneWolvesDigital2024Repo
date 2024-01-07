import React from "react";
import Link from "next/link";
import cardMouseEffect from "../../common/cardMouseEffect";

const Services3 = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);
  return (
    <section className="feat sub-bg section-padding">
      <div>
        <div className=" container center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn">
              OUR 6-STEP SOLUTION
              </h6>
              <h3 className="wow color-font ">
              PROJECT MANAGEMENT PLAN  <br/>IN DETAIL.
              </h3>
              <p>
              Whether you are an individual Digital Nomad, NGO, NPO, SME  a conglomerate, or just starting. Here at Lone Wolves Digital, we have a 6-step solution to suit your needs without compromising on quality or performance. Here is our 6-step methodology for any project.              </p>
            </div>
          </div>
        </div>
        
        <div className="row">
        <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn">
              <span className="icon wow color-font">
                <h3>Step 1</h3>
                <i className="pe-7s-target"></i>
              </span>
              <h5>GOAL IDENTIFICATION</h5>
              <p>
              In this first step, we first need to understand how we can help YOU. We need to know what your objectives are in contacting us. How soon do you need it and what are you willing to pay for it? This way we can determine exactly who and what we need to bring you the best outcome. Whether it’s 1. Admin & Customer Support, 2. Business, &   Finance, 3. Data & AI Services, 4. Engineering & Architecture, 5. Graphics Design & Photography, 6. HR & Training, 7. Legal, 8. Lifestyle, 9. Sales & Digital Marketing, 10. Software development & IT, 11. Video, Audio & Animation or 12. Writing & Translation. Every project is unique, and it all starts here.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke ">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <br/>

          <div className="col-lg-3 col-md-6 items active md-mb30 ">
            <div className="item wow fadeIn">
              <span className="icon wow color-font">
                <h3>Step 2</h3>
                <i className="ion-ios-list"></i>
              </span>
              <h5>SCOPE DEFINITION</h5>
              <p>
              Once we have classified your project, we can determine exactly what will go into it. By doing our research. These may be fonts, colors, technology, tools, pictures, video, audio, and animations, all the features and time included. The delivery time may vary depending on the project scope. Please avoid setting out with one goal in mind, but then gradually expanding and evolving. This will hinder the launch of your project. Let’s eat this elephant one bite at a time.              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <br/>

          <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" >
              <span className="icon wow color-font">
                <h3>Step 3</h3>
                <i className="ion-map"></i>
              </span>
              <h5>Plan</h5>
              <p>
              With the scope at hand and clearly defined. We begin plotting, we will work together to evaluate the terms of the project. Think of this as the floor plan of the building, here is where we define and place all the elements and features from the scope. Depending on the client, this may already be well-defined. If not, we will create tailor-made questions to clarify the idea based on the information provided, and to create relationships between the various component and elements involved in your project.               </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <br/>


          <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn">
              <span className="icon wow color-font">
                <h3>Step 4</h3>
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>Manifest</h5>
              <p>
              With the plan complete we can start creating your project. From the scope, we will begin placing the right elements into place. With skills ranging from 1. Admin & Customer Support, 2. Business, &   Finance, 3. Data & AI Services, 4. Engineering & Architecture, 5. Graphics Design & Photography, 6. HR & Training, 7. Legal, 8. Lifestyle, 9. Sales & Digital Marketing, 10. Software development & IT, 11. Video, Audio & Animation or 12. Writing & Translation.   No matter the task our team will do it, step by step you can count on us.               </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>          
        </div>

        <br/>
        <br/>
        


        <div className="row">
        <div className="col-lg-5 col-md-3 items md-mb30">
            <div className="item wow fadeIn">
              <span className="icon wow color-font">
                <h3>Step 5</h3>
                <i className="ion-android-bus"></i>
              </span>
              <h5>Deliver </h5>
              <p>
              Starting with quality assurance we ensure that your project is up to standards. No matter your location all you need is a stable internet connection and a working powered desktop, laptop, tablet, or phone. We will deliver it however, you want it. You can have it your way. Signed sealed and delivered right to your electronic device. 
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke ">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <br/>

          <div className="col-lg-5 col-md-3 items active md-mb30 ">
            <div className="item wow fadeIn">
              <span className="icon wow color-font">
                <h3>Step 6</h3>
                <i className="ion-chatbox-working"></i>
              </span>
              <h5>SUPPORT </h5>
              <p>
              There may still be some elements of your project that need change. For example, websites and apps are a fluid and ongoing process that requires constant maintenance.  Depending on your project, you may or may not need support. Either way, never fear we’re always here.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <br/>

          {/* <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" >
              <span className="icon wow color-font">
                <h3>Step 7</h3>
                <i className="pe-7s-rocket"></i>
              </span>
              <h5>LAUNCH</h5>
              <p>
              It includes planning both launch timing and communication strategies — i.e., when will the site launch and how will you let the world know? When everything has been thought through and thoroughly tested to my satisfaction, it’s time to lunch. Finally, it is done. The moment we have been working for.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div> */}
          <br/>


          {/* <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn">
              <span className="icon wow color-font">
                <h3>Step 8</h3>
                <i className="ion-hammer"></i>
              </span>
              <h5>MAINTAINS</h5>
              <p>
              There may be still some elements that need change. Websites are a fluid and ongoing process that requires constant maintenance. Web development is all about finding the right balance between form and function. Once the site goes live, please bear in mind that I continually run user testing on new content and features, monitor analytics, and refining your messaging.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>           */}
        </div>
      </div>
    </section>
  );
};

export default Services3;
