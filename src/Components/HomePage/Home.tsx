import React, { useState, useEffect } from "react";
import back from "../../assets/background/back.jpg";
import { Background, Infos } from "./Style";
import { Menu } from "./Style";
import About from "../About/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "../Contact/Contact";
import Register from "../Register/Register";

type Props = {};
const Home: React.FC<Props> = ({}) => {
  const roll = () => {
    window.scroll(0, 800);
  };
  return (
    <>
      <Menu>
        <div className="menu-content" data-aos="fade-up">
          <div>
            <h2>Lavanderia Brilhante</h2>
          </div>
          <div>
            {" "}
            <span onClick={() => roll()}>Contato</span>
            <span>Sobre nós</span>
            <span>Serviços</span>
          </div>
        </div>
      </Menu>
      <Background>
        <div className="background-img-container">
          <img src={back}></img>
        </div>
      </Background>{" "}
      <Infos>
        <Contact></Contact>
        <About></About>
        <Register></Register>
      </Infos>
    </>
  );
};
export default Home;
