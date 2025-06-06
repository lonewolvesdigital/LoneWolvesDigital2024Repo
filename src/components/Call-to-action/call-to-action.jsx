import React from 'react'
import Split from '../Split'
import Link from 'next/link'

const CallToAction = ({ img }) => {
  return (
    <section
      className="call-action section-padding sub-bg bg-img"
      style={{ backgroundImage: `url(${img || "/img/patrn.svg"})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
              <Split>
                <h6 className="wow words chars splitting" data-splitting>
                  Here at Lone Wolves Digital
                </h6>
                <h2 className="wow words chars splitting" data-splitting>
                  WHAT YOU DEMAND
                  <br />
                  <b className="back-color">WE COMMAND!</b>
                </h2>
              </Split>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 valign">
            <Link href="/contact/contact-dark">
              <span
                className="butn bord curve wow fadeInUp"
                data-wow-delay=".5s"
              >
                Get In Touch
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
