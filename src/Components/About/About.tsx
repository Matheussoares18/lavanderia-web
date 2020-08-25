import React, { useState, useEffect } from "react";
import { AboutCard } from "./Style";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {};
const About: React.FC<Props> = ({}) => {
  return (
    <>
      <AboutCard>
        <div data-aos="fade-right" data-aos-delay="500" data-aos-once="false">
          <h2>Sobre nós</h2>

          <p>
            Nós da Lavanderia Brilhante temos mais de 35 anos de experiência.
            Especializada na limpeza de roupas, cortinas, tapetes, cama, mesa e
            banho além de ofertar reparos (costura e tinturaria). Contamos com
            uma equipe de profissionais qualificados e experientes para garantir
            a satisfação, fidelidade, qualidade e agilidade para nossos
            clientes.
          </p>
        </div>
      </AboutCard>
    </>
  );
};
export default About;
