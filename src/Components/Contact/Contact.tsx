import React, { useState, useEffect } from "react";
import { ContactCard } from "./Style";

type Props = {};
const Contact: React.FC<Props> = ({}) => {
  return (
    <>
      <ContactCard>
        <div data-aos="fade-left">
          <h2>Contato</h2>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, ex!
            Nam beatae quis exercitationem, sapiente, quae assumenda suscipit
            fugiat, voluptates qui molestias id quidem? Accusantium aut minima
            quis blanditiis nostrum?
          </p>
        </div>
      </ContactCard>
    </>
  );
};
export default Contact;
