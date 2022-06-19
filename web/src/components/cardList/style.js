import styled from "styled-components"
import { GoChevronUp, GoChevronDown } from 'react-icons/go'
import { primaryColor, secondaryColor } from '../../constants/colors'

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 10px;
  border: 0.3px solid #efefef;
  margin: 10px;
  width: 90%;
  height: 100px;
  background-color: white;
  margin-left: 50px;
`;

export const Image = styled.img`
  width: 90px;
  position: absolute;
  left: 40px;
`;

export const Name = styled.p`
  font-size: 90%;
  position: absolute;
  left: 130px;
  top: 30px;
`;

export const ContainerPrice = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Sign = styled.p`
  font-size: 14px;
  position: absolute;
  right: 300px;
`;

export const Price = styled.p`
  color: ${primaryColor};
  font-size: 130%;
  position: absolute;
  right: 180px;
`;

export const Button = styled.button`
  position: absolute;
  top: 35px;
  right: 25px;
  width: 100px;
  height: 30px;
  border-radius: 20px;
  font-weight: bold;
  color: ${primaryColor};
  border: solid 0.9px ${primaryColor};
  background-color: ${secondaryColor};
  :hover {
    background: ${primaryColor};
    color: ${secondaryColor};
  }
`;

export const ButtonIconAdd = styled(GoChevronUp)`
  position: absolute;
  right: 140px;
  top: 25px;
  color: ${primaryColor};
  :hover {
    background: ${primaryColor};
    color: ${secondaryColor};
  }
`

export const ButtonIconRemove = styled(GoChevronDown)`
  position: absolute;
  right: 140px;
  bottom: 25px;
  color: ${primaryColor};
  :hover {
    background: ${primaryColor};
    color: ${secondaryColor};
  }
`