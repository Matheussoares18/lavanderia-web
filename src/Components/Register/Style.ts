import styled from "styled-components";

export const RegisterCard = styled.div`
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  div {
    z-index: 999;
    height: 200px;
    width: 50%;
    border-radius: 8px;
    margin-bottom: 100px;
    margin-left: 40px;
    padding: 27px;
    display: flex;
    flex-direction: column;
    align-items: center;

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
    input {
      height: 40px;
      width: 370px;
      border: solid 1px #c9c9c9;
      background-color: #f4f4f4;
      border-radius: 8px;
    }
  }
`;
