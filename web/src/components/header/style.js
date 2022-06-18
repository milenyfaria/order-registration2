import styled from "styled-components";

export const ContainerHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-image: linear-gradient(white, white, #efefef);
  height: 70px;
  width: 100%;
`;

export const Logo = styled.img`
  width: 200px;
  position: absolute;
  left: 60px;
`;

export const ButtonLogout = styled.button`
  position: absolute;
  right: 40px;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  font-weight: bold;
  color: #fff;
  border: solid 0.9px rgb(45, 167, 122);
  background-color: rgb(45, 167, 122);
  :hover {
    background: #fff;
    color: rgb(45, 167, 122);
  }
`;

export const ButtonList = styled.button`
  position: absolute;
  right: 150px;
  width: 200px;
  height: 30px;
  border-radius: 20px;
  font-weight: bold;
  color: #fff;
  border: solid 0.9px rgb(45, 167, 122);
  background-color: rgb(45, 167, 122);
  :hover {
    background: #fff;
    color: rgb(45, 167, 122);
  }
`;
