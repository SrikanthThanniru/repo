import React from "react";
import Header from "../Header";
import {
  BsFillTelephoneOutboundFill,
  BsEnvelopeFill,
  BsGeoAltFill,
} from "react-icons/bs";

import "./index.css";

const Contact = () => {
  return (
    <>
      <Header />
      <section id="contact" className="contact">
        <div className="contact-content">
          <div className="item">
            <BsFillTelephoneOutboundFill className="image" />
            <p className="item-content">Contact</p>
            <p className="item-content">91xxxxxxxx</p>
          </div>
          <div className="item">
            <BsEnvelopeFill className="image" />
            <p className="item-content">EmailAddress</p>
            <p className="item-content">Hi-TechSol@007.com</p>
          </div>
          <div className="item">
            <BsGeoAltFill className="image" />
            <p className="item-content">Address</p>
            <p className="item-content">
              Sri Raju Colony, Main Highway 222, Uppal X Road India 506007
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
