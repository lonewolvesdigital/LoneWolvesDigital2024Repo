/* eslint-disable @next/next/no-img-element */
import React from "react";
import ClientsData from "../../data/sections/clients.json";
import Split from "../Split";
import Image from 'next/image';


const Clients2 = ({ theme }) => {
  return (
    <section className="clients sub-bg pt-50 pb-50">
      <h2 style={{ display: "none" }}>&nbsp;</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="row">
              {ClientsData.slice(0, 4).map((item) => (
                <div key={item.id} className="col-lg-3 brands">
                  <div className="item no-bord wow fadeIn" data-wow-delay=".3s">
                    <div className="img">
                      {theme === "light" ? (
                        <Image src={item.lightImage} alt="" layout='fill' />
                      ) : (
                        <Image src={item.darkImage} alt="" layout='fill' />
                      )}
                      <Split>
                        
                          href="#0"
                          className="link words chars splitting"
                          data-splitting
                        >
                          {item.url}
                        
                      </Split>
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

export default Clients2;
