/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import Image from 'next/image';


const WorksStyle4 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="catalog-frl section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Lone Wolves Digital catalog
              </h6>
              <h3 className="wow color-font">
              The home of  <br /> all things digital.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".ACS">1.Admin & Customer Support</span>
              <span data-filter=".BF"> 2.Business & Finance </span>
              <span data-filter=".DA">3.Data & AI services</span>
              <span data-filter=".EA">4.Engineering & Architecture</span>
              <span data-filter=".GDP">5.Graphics Design & Photography</span>
              <span data-filter=".HRT">6.HR & Training</span>
              <span data-filter=".L">7.Legal</span>
              <span data-filter=".LS">8.Lifestyle</span>
              <span data-filter=".SDM">9.Sales & Digital Marketing</span>
              <span data-filter=".SDIT">10.Software development & IT </span>
              <span data-filter=".VAA">11.Video, Audio & Animation</span>
              <span data-filter=".WT">12.Writing & Translation</span>

            </div>
          </div>

          <div className="filter wow fadeIn gallery full-width">
            <div
              className="col-md-6 items ACS lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>OFFICE ADMIN</h6>
                  <p>Unlock the Power of OFFICE ADMIN with our Expert Team!</p>
                </div>
                <Link href={`/catalog/admin-customer-support`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-luana-freitas-15490322.jpg" alt=""
                  width={1000}
                  height={1500}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Editing</Link>
                  </span>
                  <span>
                    <Link href="#0">Data entry</Link>
                  </span>
                  <span>
                    <Link href="#0">Typing</Link>
                  </span>
                  <span>
                    <Link href="#0">Slide presentation</Link>
                  </span>
                  <span>
                    <Link href="#0">Virtual Assistance</Link>
                  </span>
                  <span>
                    <Link href="#0">Flyer Distribution</Link>
                  </span><span>
                    <Link href="#0">Project Management</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items ACS wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Customer Support</h6>
                  <p>The Best Customer Care Around: Let us take care of them!</p>
                </div>
                <Link href={`/catalog/admin-customer-support`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-yan-krukau-8866790.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Customer Care</Link>
                  </span>
               
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items BF wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Business</h6>
                  <p>Discover the revolutionary benefits of business today!</p>
                </div>
                <Link href={`/catalog/business-finance`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-christina-morillo-1181395.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/works4/works4-dark">Business Plans</Link>
                  </span>
                  <span>
                    <Link href="/works4/works4-dark">Market Research</Link>
                  </span>
                  <span>
                    <Link href="/works4/works4-dark">Business Consulting</Link>
                  </span>
                  <span>
                    <Link href="/works4/works4-dark">Project Management</Link>
                  </span>
                  <span>
                    <Link href="/works4/works4-dark">CRM Management</Link>
                  </span>
                  <span>
                    <Link href="/works4/works4-dark">ERP Management</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items BF graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Finance.</h6>
                  <p>Money talks all else walks and that&apos;s why money matters!</p>
                </div>
                <Link href={`/catalog/business-finance`} className="rota">
                  <Image src="/img/catalog/freelancer/savings-2789112_1920.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Financial Consulting</Link>
                  </span>
                  <span>
                    <Link href="#0">Accounting</Link>
                  </span>
                  
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items DA wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Data</h6>
                  <p>Unlock the power of data and harness the potential to achieve your personal and business goals, with Lone Wolves Digital!</p>
                </div>
                <Link href={`/catalog/data-ai-services`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-karolina-grabowska-7681097.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Data Entry</Link>
                  </span>
                  <span>
                    <Link href="#0">Data Processing</Link>
                  </span>
                  <span>
                    <Link href="#0">Data Analytics</Link>
                  </span>
                  <span>
                    <Link href="#0">Data Visualization</Link>
                  </span>
                  <span>
                    <Link href="#0">Data Science</Link>
                  </span>
                  <span>
                    <Link href="#0">Databases</Link>
                  </span>
                  <span>
                    <Link href="#0">Data Engineering</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items DA wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>AI</h6>
                  <p>With the power of AI Lone Wolves Digital will take your business to the next level!</p>
                </div>
                <Link href={`/catalog/data-ai-services`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-kindel-media-8566469.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                {/* <Link href={`/project-details2-dark-dark/project-details2-dark-dark-dark`}>
                   className="rota">
                    <Image src="/img/catalog/freelancer/d847951e-d8e6-4f7c-8dac-3cdad6321a99.webp" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                  
                </Link> */}
                <div className="tags">
                  <span>
                    <Link href="#0">Mid-journey Artists</Link>
                  </span>
                  <span>
                    <Link href="#0">DALL-E Artists</Link>
                  </span>
                  <span>
                    <Link href="#0">Stable Diffusion Artists</Link>
                  </span>
                  <span>
                    <Link href="#0">AI Models</Link>
                  </span><span>
                    <Link href="#0">AI Music Videos</Link>
                  </span><span>
                    <Link href="#0">AI Content Editing</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items EA wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Architecture</h6>
                  <p>Design the future with Lone Wolves Digital, explore the world&apos;s most innovative architecture!</p>
                </div>
                <Link href={`/catalog/engineering-architecture`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-mihai-vlasceanu-1400249.jpg" alt=""
                  width={1000}
                  height={1500} />
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Building Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Interior Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Building Information Modeling</Link>
                  </span>
                  <span>
                    <Link href="#0">Landscape Design</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items EA wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Electronics Engineering</h6>
                  <p>Innovations and breakthroughs that will shape our world!</p>
                </div>
                <Link href={`/catalog/engineering-architecture`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-rfstudio-3825580.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">CAD</Link>
                  </span>
        
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items GDP wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Packaging & Merchandise Design </h6>
                  <p>Unwrap your brand&apos;s potential and elevate your packaging and merchandise design with the help of Lone Wolves Digital today!</p>
                </div>
                <Link href={`/catalog/graphics-design-photography`} className="rota">
                  <Image src="/img/catalog/freelancer/magic-mind-GnD_TOrbWh4-unsplash.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">T-Shirts & Merchandise Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Book Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Packaging Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Album Cover Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Car Wraps</Link>
                  </span>
                  <span>
                    <Link href="#0">Podcast Cover Art</Link>
                  </span>
                 
                </div>

                
              </div>
            </div>

            <div
              className="col-md-6 items GDP wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Drawing & Illustration</h6>
                  <p>Draw your imagination and bring your ideas to life with Lone Wolves Digital Illustration Services!</p>
                </div>
                <Link href={`/catalog/graphics-design-photography`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-ekrulila-3246665.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Illustration</Link>
                  </span>
                  <span>
                    <Link href="#0">Vector Tracing</Link>
                  </span>
                  <span>
                    <Link href="#0">Portraits </Link>
                  </span>
                  <span>
                    <Link href="#0">Caricatures</Link>
                  </span><span>
                    <Link href="#0">Cartoons</Link>
                  </span><span>
                    <Link href="#0">Comics</Link>
                  </span>
                  <span>
                    <Link href="#0">Fashion Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Pattern Design</Link>
                  </span><span>
                    <Link href="#0">Storyboards</Link>
                  </span>
                </div>

                
              </div>
            </div>

            <div
              className="col-md-6 items GDP wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Visual Design</h6>
                  <p>Unleash creativity and bring your vision to life with Lone Wolves Digital Art & Illustration services!</p>
                </div>
                <Link href={`/catalog/graphics-design-photography`} className="rota">
                  <Image src="/img/catalog/freelancer/krisztian-tabori-IyaNci0CyRk-unsplash.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Presentation Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Image Editing</Link>
                  </span>
                  <span>
                    <Link href="#0">Infographic Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Vector Tracing</Link>
                  </span>
                </div> 
              </div>
            </div>

            <div
              className="col-md-6 items GDP wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Packaging & Covers</h6>
                  <p>Stand out in the crowd and get noticed with expert packaging & covers services from Lone Wolves Digital!</p>
                </div>
                <Link href={`/catalog/graphics-design-photography`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-drew-williams-2608495.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Packaging</Link>
                  </span>
                  <span>
                    <Link href="#0">Label Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Book Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Album Cover Design</Link>
                  </span><span>
                    <Link href="#0">Podcast Cover Art</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items GDP wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Fashion & Merchandise</h6>
                  <p> With Lone Wolves Digital Fashion & Merchandise services, you can make a statement that elevates your style!</p>
                </div>
                <Link href={`/catalog/graphics-design-photography`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-gustavo-fring-4127636.jpg" alt=""
                  width={1000}
                  height={1500}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Fashion Design</Link>
                  </span>
                  <span>
                    <Link href="#0">T-Shirts</Link>
                  </span>
                  <span>
                    <Link href="#0">Merchandise</Link>
                  </span>
                  <span>
                    <Link href="#0">Jewelry Design</Link>
                  </span>
                  </div> 
              </div>
            </div>

            <div
              className="col-md-6 items GDP wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Product & Characters Design</h6>
                  <p>From concept to creation we will bring your products and characters to life with Our Lone Wolves Digital Designers!!</p>
                </div>
                <Link href={`/catalog/graphics-design-photography`} className="rota">
                  <Image src="/img/catalog/freelancer/man-3130952_1920.png" alt=""
                  width={1000}
                  height={1500}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Industrial Product Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Character Modeling</Link>
                  </span>
                  <span>
                    <Link href="#0">Trade Booth Design</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items GDP wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Print Design</h6>
                  <p>For the print that packs a punch choose Lone Wolves Digital and make your message stand out with our professional design services</p>
                </div>
                <Link href={`/catalog/graphics-design-photography`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-leeloo-thefirst-7598012.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Flyer Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Brochure Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Portraits </Link>
                  </span>
                  <span>
                    <Link href="#0">Poster Design</Link>
                  </span><span>
                    <Link href="#0">Catalog Design</Link>
                  </span><span>
                    <Link href="#0">Invitation Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Menu Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Postcard Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Signage Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Product Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Graphics for Streamers</Link>
                  </span>
                  <span>
                    <Link href="#0">Character Modeling</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items GDP wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Infographics & Presentation Design</h6>
                  <p>Visualize your ideas and communicate with clarity that Impacts your customers/cliens with Lone Wolves Digital Infographics and Presentation Designers!!</p>
                </div>
                <Link href={`/catalog/graphics-design-photography`} className="rota">
                  <Image src="/img/catalog/freelancer/infographics-1005174_1280.png" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Presentation Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Infographic Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Trade Show Booth Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Resume Design</Link>
                  </span>
                </div> 
              </div>
            </div>


            <div
              className="col-md-6 items GDP wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Photography</h6>
                  <p>Capture Life&apos;s Moments and experience the magic of photography with Lone Wolves Digital expert Photographers!</p>
                </div>
                <Link href={`/catalog/graphics-design-photography`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-kaique-rocha-598917.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                <span>
                    <Link href="#0">Portrait Photographers</Link>
                  </span>
                  <span>
                    <Link href="#0">Lifestyle & Fashion Photographers</Link>
                  </span>
                  <span>
                    <Link href="#0">Real Estate Photographers</Link>
                  </span>
                  <span>
                    <Link href="#0">Event Photographers</Link>
                  </span><span>
                    <Link href="#0">Food Photographers</Link>
                  </span><span>
                    <Link href="#0">Aerial Photographers</Link>
                  </span>
                  <span>
                    <Link href="#0">Image Editing</Link>
                  </span>
                  <span>
                    <Link href="#0">Photography Advice</Link>
                  </span>
                  <span>
                    <Link href="#0">Local Photography</Link>
                  </span>
                  <span>
                    <Link href="#0">Product Photography</Link>
                  </span>
                </div> 
              </div>
            </div>



            <div
              className="col-md-6 items HRT wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>HR & Training</h6>
                  <p>Boost Performance your team&apos;s potential with Lone Wolves Digital&apos;s HR and Training Solutions!!</p>
                </div>
                <Link href={`/catalog/hr-training`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-cottonbro-studio-5989930.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">HR Consulting</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items L wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Legal</h6>
                  <p>Trust our expertise to protect your rights and navigate the legal landscape!</p>
                </div>
                <Link href={`/catalog/legal`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-august-de-richelieu-4427622.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Legal Consulting</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items LS wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Lifestyle</h6>
                  <p>Embrace a vibrant lifestyle and live your best life with Lone Wolves Digital Lifestyle digital products and services!</p>
                </div>
                <Link href={`/catalog/lifestyle`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-marlene-leppänen-1019771.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Arts & Crafts</Link>
                  </span>
                  <span>
                    <Link href="#0">Career Counseling</Link>
                  </span>
                  <span>
                    <Link href="#0">Cooking Lessons</Link>
                  </span>
                  <span>
                    <Link href="#0">Family</Link>
                  </span><span>
                    <Link href="#0">Genealogy</Link>
                  </span><span>
                    <Link href="#0">Online Tutoring</Link>
                  </span>
                  <span>
                    <Link href="#0">Other Lifestyle</Link>
                  </span>
                  <span>
                    <Link href="#0">Personal Styling</Link>
                  </span><span>
                    <Link href="#0">Personal Training</Link>
                  </span>
                  <span>
                    <Link href="#0">Traveling</Link>
                  </span>
                  <span>
                    <Link href="#0">Wellness</Link>
                  </span>
                  <span>
                    <Link href="#0">Online Language Lessons</Link>
                  </span>
                </div>  
              </div>
            </div>

            <div
              className="col-md-6 items SDM wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Branding</h6>
                  <p> Build a Strong Brand Identity with Lone Wolves Digital and let us help you stand out in a crowded market!</p>
                </div>
                <Link href={`/catalog/sales-digital-marketing`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-daniel-adesina-1445454.jpg" alt=""
                    width={1000}
                    height={1500}/>
                  <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Brand Identity Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Brand Style Guides</Link>
                  </span>
                  <span>
                    <Link href="#0">Branding Services </Link>
                  </span>
                  <span>
                    <Link href="#0">Branding Services</Link>
                  </span><span>
                    <Link href="#0">Brand Voice & Tone</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items SDM wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Logo & Brand Identity</h6>
                  <p> Make your mark with an identity that speaks volumes. Lone Wolves Digital brings your brand to life with professional logo and identity design services.!</p>
                </div>
                <Link href={`/catalog/sales-digital-marketing`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-tetyana-kovyrina-11138259.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Logo Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Brand Style Guides</Link>
                  </span>
                  <span>
                    <Link href="#0">Business Cards</Link>
                  </span>
                  <span>
                    <Link href="#0">Stationery</Link>
                  </span>
                </div>
              </div>
            </div>


             <div
              className="col-md-6 items SDM wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Websites</h6>
                  <p> We build more than just websites. We create online experiences. So, Why not let us at Lone Wolves Digital Craft your digital presence with our expert web developers!</p>
                </div>
                <Link href={`/catalog/sales-digital-marketing`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-ketut-subiyanto-4132331.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Website Development</Link>
                  </span>
                  <span>
                    <Link href="#0">Website Maintenance</Link>
                  </span>
                  <span>
                    <Link href="#0">Business Websites</Link>
                  </span>
                  <span>
                    <Link href="#0">E-Commerce Development</Link>
                  </span>
                  <span>
                    <Link href="#0">E-commerce Management</Link>
                  </span>
                  <span>
                    <Link href="#0">Landing Pages</Link>
                  </span>
                  <span>
                    <Link href="#0">Website Content</Link>
                  </span>
                </div>
              </div>
            </div>

             <div
              className="col-md-6 items SDM wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Website Platforms</h6>
                  <p>Join the digital revolution and choose Lone Wolves Digital website platform services to elevate your brand!</p>
                </div>
                <Link href={`/catalog/sales-digital-marketing`} className="rota">
                  <Image src="/img/catalog/freelancer/wordpress-2171594_1920.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">WordPress</Link>
                  </span>
                  <span>
                    <Link href="#0">Shopify</Link>
                  </span>
                  <span>
                    <Link href="#0">Wix</Link>
                  </span>
                  <span>
                    <Link href="#0">Webflow</Link>
                  </span><span>
                    <Link href="#0">Figma</Link>
                  </span>
                </div>
              </div>
            </div>

             <div
              className="col-md-6 items SDM wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Social Media Marketing</h6>
                  <p>Let us help you reach your target audience and increase your social media engagement. Lone Wolves Digital will elevate your social media game with our proven marketing tactics!</p>
                </div>
                <Link href={`/catalog/sales-digital-marketing`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-dalila-dalprat-2055500.jpg" alt=""
                  width={1000}
                  height={1500}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Social Media Marketing</Link>
                  </span>
                  <span>
                    <Link href="#0">Social Media Advertising</Link>
                  </span>
                  <span>
                    <Link href="#0">Marketing Strategy</Link>
                  </span>
                  <span>
                    <Link href="#0">Search Engine Optimization (SEO)</Link>
                  </span>
                  <span>
                    <Link href="#0">Social Media Marketing Videos</Link>
                  </span>
                  <span>
                    <Link href="#0">Video Ads & Commercials</Link>
                  </span>
                  <span>
                    <Link href="#0">Spokesperson Videos</Link>
                  </span>
                  <span>
                    <Link href="#0">Social Media Videos</Link>
                  </span>
                  <span>
                    <Link href="#0">Influencer Marketing</Link>
                  </span>
                </div>
              </div>
            </div>

             <div
              className="col-md-6 items SDM wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Search engines</h6>
                  <p> Rank higher and bee seen. Lone Wolves Digital search engine optimization services gets results!</p>
                </div>
                <Link href={`/catalog/sales-digital-marketing`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-cottonbro-studio-7350905.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Search Engine Marketing (SEM)</Link>
                  </span>
                  <span>
                    <Link href="#0">Local SEO</Link>
                  </span>
                  <span>
                    <Link href="#0">Marketing Advice</Link>
                  </span>
                  <span>
                    <Link href="#0">E-Commerce Marketing</Link>
                  </span>
                  <span>
                    <Link href="#0">Video Marketing</Link>
                  </span>
                  <span>
                    <Link href="#0">Guest Posting</Link>
                  </span>
                  <span>
                    <Link href="#0">Email Marketing</Link>
                  </span>
                  <span>
                    <Link href="#0">Web Analytics</Link>
                  </span>
                  <span>
                    <Link href="#0">Mobile App Marketing</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items SDM wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Analytics & Strategy</h6>
                  <p>With our customized  analytics strategy solutions you get data-driven insights to maximize your ROI with Lone Wolves Digital! 
                  !</p>
                </div>
                <Link href={`/catalog/sales-digital-marketing`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-cottonbro-studio-5083397.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Market Research</Link>
                  </span>
                  <span>
                    <Link href="#0">Marketing Strategy</Link>
                  </span>
                  <span>
                    <Link href="#0">Web Analytics</Link>
                  </span>
                  <span>
                    <Link href="#0">Surveys</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items SDIT wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Application Development</h6>
                  <p>From concept to launch. We bring your ideas to life with innovative, user-friendly apps that enhance your business!</p>
                </div>
                <Link href={`/catalog/software-development-it`} className="rota">
                  <Image src="/img/catalog/freelancer/procreator-ux-design-studio-VzJjPuk53sk-unsplash.jpg" alt=""
                  width={1000}
                  height={1500}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Mobile Apps</Link>
                  </span>
                  <span>
                    <Link href="#0">Web Programming</Link>
                  </span>
                  <span>
                    <Link href="#0">Desktop Applications</Link>
                  </span>
                  <span>
                    <Link href="#0">Game Development</Link>
                  </span>
                  <span>
                    <Link href="#0">Desktop Apps</Link>
                  </span>
                  <span>
                    <Link href="#0">Development for Streamers</Link>
                  </span>
                  <span>
                    <Link href="#0">Online Coding Lessons</Link>
                  </span>
                                  
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items SDIT wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Support & Cybersecurity</h6>
                  <p>Don&apos;t leave your security to chance! Let our experts protect your business today. Our support and cybersecurity services offer complete peace of mind for your business!</p>
                </div>
                <Link href={`/catalog/software-development-it`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-saksham-choudhary-2036656.jpg" alt=""
                  width={1000}
                  height={1500}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">DevOps & Cloud</Link>
                  </span>
                  <span>
                    <Link href="#0">Support</Link>
                  </span>
                  <span>
                    <Link href="#0">Cybersecurity</Link>
                  </span>
                  <span>
                    <Link href="#0">Intormation technology</Link>
                  </span>
                  <span>
                    <Link href="#0">Data Protection</Link>
                  </span>
                  <span>
                    <Link href="#0">QA & Review</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items VAA wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Editing & Post-Production</h6>
                  <p>From raw footage to polished final product, we&apos;re your one stop shop for all your post-production needs! Let Lone Wolves Digital transform your basic edits into a masterpiece with our expert editing and post-production services!</p>
                </div>
                <Link href={`/catalog/video-audio-animation`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-cytonn-photography-955405.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Video Editing</Link>
                  </span>
                  <span>
                    <Link href="#0">Visual Effects</Link>
                  </span>
                  <span>
                    <Link href="#0">Subtitles & Captions</Link>
                  </span>
                  <span>
                    <Link href="#0">Intro & Outro Videos</Link>
                  </span><span>
                    <Link href="#0">Screen casting Videos</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items VAA wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Animation</h6>
                  <p>Our animation services help you communicate your message in a creative and engaging way. Our skilled animators bring a touch of magic to your content, making it truly unforgettable.</p>
                </div>
                <Link href={`/catalog/video-audio-animation`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-merlin-lightpainting-11137997.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Character Animation</Link>
                  </span>
                  <span>
                    <Link href="#0">Animated Explainers</Link>
                  </span>
                  <span>
                    <Link href="#0">Logo Animation</Link>
                  </span>
                  <span>
                    <Link href="#0">Animated GIFs</Link>
                  </span><span>
                    <Link href="#0">Lottie</Link>
                  </span>
                  <span>
                    <Link href="#0">Web Animation</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items VAA wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Product Explainer Videos</h6>
                  <p>Show, don&apos;t tell. Let our product and explainer videos do the talking for you!</p>
                </div>
                <Link href={`/catalog/video-audio-animation`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-mart-production-7335420.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">3D Product Animation</Link>
                  </span>
                  <span>
                    <Link href="#0">E-Commerce Product Videos</Link>
                  </span>
                  <span>
                    <Link href="#0">Live Action Explainers</Link>
                  </span>
                  <span>
                    <Link href="#0">App & Website Previews</Link>
                  </span>
                  <span>
                    <Link href="#0">Corporate Videos</Link>
                  </span>
                  <span>
                    <Link href="#0">Unboxing Videos</Link>
                  </span>

                </div>
              </div>
            </div>

            <div
              className="col-md-6 items VAA wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Voice Over</h6>
                  <p>Make your message heard professional voice over services for any project</p>
                </div>
                <Link href={`/catalog/video-audio-animation`} className="rota">
                  <Image src="/img/catalog/freelancer/emmanuel-ikwuegbu-Wc-vrrwxts0-unsplash.jpg" alt=""
                  width={1000}
                  height={1500}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Female Voice Over</Link>
                  </span>
                  <span>
                    <Link href="#0">Male Voice Over</Link>
                  </span>
                  <span>
                    <Link href="#0">German Voice Over</Link>
                  </span>
                  <span>
                    <Link href="#0">French Voice Over</Link>
                  </span><span>
                    <Link href="#0">Video Narration</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items VAA wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Audio Streaming</h6>
                  <p>Listen to your heart&apos;s content with our top-rated audio streaming services!</p>
                </div>
                <Link href={`/catalog/video-audio-animation`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-george-milton-6953865.jpg" alt=""
                  width={1000}
                  height={1500}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Podcast Production</Link>
                  </span>
                  <span>
                    <Link href="#0">Audiobook Production</Link>
                  </span>
                  <span>
                    <Link href="#0">Sound Design</Link>
                  </span>
                  <span>
                    <Link href="#0">Audio Editing</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items VAA wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Music</h6>
                  <p>Feel the beat, hear the magic and let the sound of your dreams from, classical to hip hop, we have it all!</p>
                </div>
                <Link href={`/catalog/video-audio-animation`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-los-muertos-crew-7586652.jpg" alt=""
                  width={1000}
                  height={1500}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Producers & Composers</Link>
                  </span>
                  <span>
                    <Link href="#0">Singers & Vocalists</Link>
                  </span>
                  <span>
                    <Link href="#0">Mixing</Link>
                  </span>
                  <span>
                    <Link href="#0">Mastering</Link>
                  </span><span>
                    <Link href="#0">Songwriters</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items WT wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Articles & Blog Posts</h6>
                  <p>Make your website stand out with expertly crafted articles and blog posts. Lone Wolves Digital creatives, compelling content that engages and inspires your audience through engaging and shareable content!</p>
                </div>
                <Link href={`/catalog/writing-translation`} className="rota">
                  <Image src="/img/catalog/freelancer/karthik-sridasyam-BmjLE77gz0E-unsplash.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Translation</Link>
                  </span>
                  <span>
                    <Link href="#0">Social Media Writing</Link>
                  </span>
                  <span>
                    <Link href="#0">Product Descriptions</Link>
                  </span>
                  <span>
                    <Link href="#0">Sales Writing</Link>
                  </span>
                  <span>
                    <Link href="#0">Book </Link>
                  </span>
                  <span>
                    <Link href="#0">Press Releases</Link>
                  </span> <span>
                    <Link href="#0">eBook</Link>
                  </span> <span>
                    <Link href="#0">Email Writing</Link>
                  </span> <span>
                    <Link href="#0">Ad Writing</Link>
                  </span> <span>
                    <Link href="#0">Technical Writing</Link>
                  </span> <span>
                    <Link href="#0">Scriptwriting</Link>
                  </span> 
                  <span>
                    <Link href="#0">Proofreading </Link>
                  </span>
                  <span>
                    <Link href="#0">Editing</Link>
                  </span>
                  <span>
                    <Link href="#0">Content Writing</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items WT wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Book & Ebook Writing</h6>
                  <p>If Knowledge is power then it&apos;s time to unleash your potential with books and e-books that allow you to explore new worlds!</p>
                </div>
                <Link href={`/catalog/writing-translation`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-thought-catalog-904620.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Creative Writing</Link>
                  </span>
                  <span>
                    <Link href="#0">Podcast Writing</Link>
                  </span>
                               
                  <span>
                    <Link href="#0">Book </Link>
                  </span>
                 
                  </div>
              </div>
            </div>

            <div
              className="col-md-6 items WT wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Professional & Business Writing</h6>
                  <p>Whether you need to convey complex technical information to a lay audience, craft a compelling sales pitch, or create a business proposal that sets you apart from your competitors, professional and business writing can help you achieve your goals!</p>
                </div>
                <Link href={`/catalog/writing-translation`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-ketut-subiyanto-4350108.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Resume Writing</Link>
                  </span>
                  <span>
                    <Link href="#0">Cover Letters</Link>
                  </span>
                  <span>
                    <Link href="#0">Business Names </Link>
                  </span>
                  <span>
                    <Link href="#0">Slogans</Link>
                  </span>
                  <span>
                    <Link href="#0">LinkedIn Profiles</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items WT wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Research & Summaries</h6>
                  <p>Research and summaries can help businesses, students, and professionals to make informed decisions, present findings in a clear and compelling manner, and ultimately achieve their goals. Whether you need assistance with market research, data analysis, or report writing, professional research and summary services can provide you with the support and expertise you need to succeed!</p>
                </div>
                <Link href={`/catalog/writing-translation`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-christina-morillo-1181569.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Case Studies</Link>
                  </span>
                  <span>
                    <Link href="#0">Grant Writing</Link>
                  </span>
                  <span>
                    <Link href="#0">Legal Writing</Link>
                  </span>
                  <span>
                    <Link href="#0">Technical Writing</Link>
                  </span>
                  <span>
                    <Link href="#0">White Papers</Link>
                  </span>
                  <span>
                    <Link href="#0">Fact-Checking</Link>
                  </span> 
                  </div>
              </div>
            </div>

            <div
              className="col-md-6 items WT wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Editing & Beta Reading</h6>
                  <p>By using Lone Wolves Digtial&apos;s professional Editing & Beta Reading services, you can ensure that your written content is polished, error-free, and ready to impress your readers. Whether you are a writer looking to improve your work, a business looking to produce high-quality content, or a student looking to ace your assignments, Editing & Beta Reading can help you achieve your goals. With a keen eye for detail and a commitment to excellence, professional editors and beta readers can help you take your writing to the next level!</p>
                </div>
                <Link href={`/catalog/writing-translation`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-vlada-karpovich-4050287.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Proofreading</Link>
                  </span>
                  <span>
                    <Link href="#0">Editing</Link>
                  </span>
                  <span>
                    <Link href="#0">Beta Reading</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items WT wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Copywriting</h6>
                  <p>Are you worried about protecting your intellectual property and ensuring that your creative works are not misused or plagiarized? Look no further than our comprehensive copyright services. Our team of experts can guide you through the process of registering your works and provide ongoing support to safeguard your rights. With our help, you can rest assured that your hard work is protected and that you can reap the rewards of your creativity for years to come. Contact us today to learn more about our copyright services and how we can help you secure your valuable intellectual property.</p>
                </div>
                <Link href={`/catalog/writing-translation`} className="rota">
                  <Image src="/img/catalog/freelancer/pexels-august-de-richelieu-4427547.jpg" alt=""
                  width={1000}
                  height={1000}/>
                    <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#0">Email Copy</Link>
                  </span>
                  <span>
                    <Link href="#0">Sales Copy</Link>
                  </span>
                  <span>
                    <Link href="#0">Product Descriptions</Link>
                  </span>
                  <span>
                    <Link href="#0">Social Media Copy</Link>
                  </span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle4;
