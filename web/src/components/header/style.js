import styled from "styled-components"
import { primaryColor, secondaryColor } from '../../constants/colors'

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
  color: ${secondaryColor};
  border: solid 0.9px ${primaryColor};
  background-color: ${primaryColor};
  :hover {
    background: ${secondaryColor};
    color: ${primaryColor};
  }
`;

export const ButtonList = styled.button`
  position: absolute;
  right: 150px;
  width: 200px;
  height: 30px;
  border-radius: 20px;
  font-weight: bold;
  color: ${secondaryColor};
  border: solid 0.9px ${primaryColor};
  background-color: ${primaryColor};
  :hover {
    background: ${secondaryColor};
    color: ${primaryColor};
  }
`;
