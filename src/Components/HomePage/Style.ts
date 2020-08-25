import styled from "styled-components";

export const Background = styled.div`
  position: relative;
  z-index: 998;

  .background-img-container {
    img {
      width: 100%;
    }
  }
`;
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f4f4f4;
  margin-top: 135px;
  border-bottom: solid 1px #c9c9c9;
`;
export const Menu = styled.div`
  height: 82px;
  z-index: 999;

  width: 100%;
  position: fixed;

  .menu-content {
    display: flex;
    flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0px 30px 0px 30px;

    span {
      margin-right: 30px;
      font-family: "Poppins", extra-light;
      font-weight: 200;

      color: #ffffff;
      font-size: 21px;
      margin-right: 57px;
    }
    span:hover {
      cursor: pointer;
    }
    h2 {
      font-family: "Dancing Script", cursive;
      font-size: 39px;
    }
  }
`;
