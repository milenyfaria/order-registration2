import styled from 'styled-components'
import { primaryColor, secondaryColor } from '../../constants/colors'

export const ContainerCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 0.3px solid #EFEFEF;
  border-radius: 10px;
  margin: 10px;
  width: 200px;
  height: 300px;
  margin-top: 48px;
`;

export const Type = styled.div`
  position: absolute;
  left: 0;
  bottom: 100%;
  margin-bottom: 12px;
  text-align: center;
  font-weight: bold;
  color: ${primaryColor};
`

export const Photo = styled.img`
   width: 150px;
   position: absolute;
   top: 5px;
`

export const Name = styled.p`
  font-size: 10px;
  text-align: center;
  width: 140px;
  position: absolute;
  top: 150px;
`

export const ContainerPrice = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  justify-content:space-around;
  width: 80px;
  bottom: 40px;
`

export const Sign = styled.p`
  font-size: 14px;
`

export const Price = styled.p`
  color: ${primaryColor};
  font-size: 23px;
`

export const Stock = styled.p`
  position: absolute;
  font-size: 10px;
  bottom: 0;
`

export const Button = styled.button`
  position: absolute;
  bottom: 30px;
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
`
