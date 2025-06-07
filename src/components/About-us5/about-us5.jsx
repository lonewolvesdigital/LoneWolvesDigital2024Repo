/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutSkillsProgress from "../../common/aboutSkillsProgress";
import Image from 'next/image';
import Link from "next/link";


const AboutUs5 = () => {
  React.useEffect(() => {
    aboutSkillsProgress(
      document.querySelector(".about-cr .skills-box"),
      document.querySelectorAll(".skill-progress .progres"),
      document.querySelector(".about-cr")
    );
  }, []);



   React.useEffect(() => {
      // Check if script is already loaded
      if (document.querySelector('script[src="https://meetings.brevo.com/assets/libs/popup.min.js"]')) {
        return;
      }
  
      const script = document.createElement('script');
      script.src = 'https://meetings.brevo.com/assets/libs/popup.min.js';
      script.type = 'text/javascript';
      script.async = true;
      
      script.onload = () => {
        console.log('Brevo script loaded successfully');
      };
      
      script.onerror = () => {
        console.error('Failed to load Brevo script');
      };
      
      document.head.appendChild(script);
      
      return () => {
        // Cleanup script on component unmount
        const existingScript = document.querySelector('script[src="https://meetings.brevo.com/assets/libs/popup.min.js"]');
        if (existingScript && document.head.contains(existingScript)) {
          document.head.removeChild(existingScript);
        }
      };
    }, []);


  const handleBookingClick = (e) => {
    e.preventDefault();
    
    // Add some debugging
    console.log('Book Now clicked');
    console.log('BrevoBookingPage available:', typeof window.BrevoBookingPage);
    
    // Wait a bit for script to load if needed
    const tryBooking = () => {
      if (window.BrevoBookingPage && typeof window.BrevoBookingPage.initStaticButton === 'function') {
        console.log('Initializing Brevo booking...');
        window.BrevoBookingPage.initStaticButton({ 
          url: 'https://meet.brevo.com/caleb-mutombo/borderless' 
        });
      } else {
        console.error('BrevoBookingPage not available or initStaticButton not a function');
        // Fallback: open the URL directly
        window.open('https://meet.brevo.com/caleb-mutombo/borderless', '_blank');
      }
    };
    
    // Try immediately, then with a small delay if needed
    if (window.BrevoBookingPage) {
      tryBooking();
    } else {
      setTimeout(tryBooking, 500);
    }
    
    return false;
  };
  return (
    
    <section className="about-cr space-me">
       <br/>
       <br/>
      <div className="container-fluid">
        <div className="row">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <br/>
    <br/>
    <br/>
    <br/>
    <br/> */}
    
          <div className="expad col-lg-4 img md-mb50">
         <div>
           <Image src="/img/intro/62659d6163b917c18eabf40c_unnamed.jpg" alt="image"
        
        width={400}
        height={500}/>
        <div>
          <h4 className="fw-700 color-font mt-30 mb-30">Book a video call here.</h4>
              
              {/* Book Now Button */}
              <div style={{display: "flex", gap: "30px"}} className="mb-50">
                <Link 
                  href="#" 
                  onClick={handleBookingClick}
                  style={{
                    cursor: 'pointer',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    backgroundColor: '#1B1B1B',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    border: '0px',
                    boxShadow: 'rgba(0, 0, 0, 0.15) 0px -2px 0px inset',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                >
                  Book Now
                </Link>
                 <Link
                  href="/contact/contact-dark" 
                  // onClick={handleBookingClick}
                  style={{
                    cursor: 'pointer',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    backgroundColor: '#1B1B1B',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    border: '0px',
                    boxShadow: 'rgba(0, 0, 0, 0.15) 0px -2px 0px inset',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                >
                  Contact Now
                </Link>
              </div>
        </div>
         </div>
          </div>
          <div className="col-lg-8 valign">
            <div className="cont full-width">
              <h3 className="color-font my-skills-pad-left">My Skills</h3>
              <h5 className="co-tit mb-15 ">
              Here&apos;s what to expect.
               </h5>
              <p className="">
              Over the past 5 years, I have learned a variety of skills and this is how far I have come to create only the most extravagant digital products and services, including but not limited to remarkable apps and cutting-edge strategies. Here are my skill levels.
              </p>
              <div className="skills-box mt-40">
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Web & Software Development</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="95%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">UI / UX Design</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="90%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Project management</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="86%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Systems Analysis and Design</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="88%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Communication</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="100%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Time management</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="95%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Business management</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="85%"></div>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs5;
