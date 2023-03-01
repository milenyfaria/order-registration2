import styled from 'styled-components'
import { primaryColor, secondaryColor } from '../../constants/colors'

export const ContainerLoginPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

`;

export const Image = styled.img`
  position: absolute;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 50%;
    left: 25%;
    top: 60px;
  }

  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    width: 40%;
    left: 30%;
    top: 50px;
  
  }

  @media screen and (min-device-width : 1200px) {
    width: 20%;
    left: 40%;
    top: 30px;
  }

`;

export const ContainerBoxLogin = styled.div`
  position: absolute;
  padding: 20px;
  
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    top: 50%;
    left: 50%;
    width: 40%;
  }

  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    top: 50%;
    left: 50%;
    width: 40%;
  }

  @media screen and (min-device-width : 1200px) {
    top: 50%;
    left: 50%;
    width: 40%;
  }
`;


export const Title = styled.h2`
  margin: 5% 0 30px;
  padding: 0;
  color: ${primaryColor};
  text-align: center;
  font-family: sans-serif;
`;

export const ContainerInput = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: ${primaryColor};
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid ${primaryColor};
  outline: none;
  background: transparent;
  font-family: sans-serif;
  :focus-within {
    top: -20px;
    left: 0;
    color: ${primaryColor};
    font-size: 12px;
  }
  :valid {
    top: -20px;
    left: 0;
    color: ${primaryColor};
    font-size: 12px;
  }
`;

export const ButtonLogIn = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: ${primaryColor};
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin: 0 35%;
  letter-spacing: 4px;
  :hover {
    background: ${primaryColor};
    color: ${secondaryColor};
    border-radius: 5px;
    box-shadow: 0 0 5px ${primaryColor}, 0 0 25px ${primaryColor},
      0 0 50px ${primaryColor}, 0 0 100px ${primaryColor};
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin: 0 15%;
  }
`;
