import React, { useState, useEffect } from "react";
import { ContactCard } from "./Style";
import whatsAppicon from "../../assets/icons/wpp.svg";
import instagramIcon from "../../assets/icons/insta.svg";
import { Link } from "react-router-dom";

type Props = {};
const Contact: React.FC<Props> = ({}) => {
  return (
    <>
      <ContactCard
        data-aos="fade-left"
        data-aos-delay="500"
        data-aos-once="false"
      >
        <div className="contact-container">
          <h2>Contato</h2>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, ex!
            Nam beatae quis exercitationem, sapientcontact-containere, quae
            assumenda suscipit fugiat, voluptates qui molestias id quidem?
            Accusantium aut minima quis blanditiis nostrum?
          </p>
        </div>
        <div
          className="img-container"
          data-aos="fade-right"
          data-aos-delay="750"
          data-aos-once="false"
        >
          <img src={whatsAppicon} style={{ marginRight: "50px" }}></img>
          <a href="https://www.instagram.com/brilhante_lavanderia/">
            {" "}
            <img src={instagramIcon}></img>
          </a>
        </div>
      </ContactCard>
    </>
  );
};
export default Contact;
