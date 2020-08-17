import styled from "styled-components";

export const AboutCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  div {
    z-index: 999;
    height: 200px;
    width: 30%;
    border-radius: 8px;
    margin-bottom: 100px;
    margin-left: 40px;
    padding: 27px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    border-radius: 8px;
    margin-bottom: 100px;
    margin-left: 40px;
    padding: 27px;

    h2 {
      font-family: "Poppins", extra-light;
      font-weight: 200;
      font-size: 40px;
      margin-top: 0;
      align-self: self-end;
    }

    p {
      font-family: "Lato", regular;
      align-self: end;
      text-align: start;
    }
  }
`;
