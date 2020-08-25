import styled from "styled-components";

export const ContactCard = styled.div`
  border-bottom: solid 1px #c9c9c9;
  height: 550px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .contact-container {
    position: relative;
    z-index: 999;
    height: 200px;
    width: 50%;

    border-radius: 8px;

    margin-left: 40px;
    padding: 27px;

    h2 {
      font-family: "Poppins", extra-light;
      font-weight: 200;
      font-size: 40px;
      margin-top: 0;
    }

    p {
      font-family: "Lato", regular;
    }
  }
  .img-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 50%;
    justify-content: center;

    img {
      height: 90px;
      width: 90px;
    }
  }
`;
