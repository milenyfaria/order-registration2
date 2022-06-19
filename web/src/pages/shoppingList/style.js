import styled from 'styled-components'
import { primaryColor, secondaryColor } from '../../constants/colors'

export const ContainerTotal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
  
`

export const Total = styled.h3`
    font-size: 100%;
    position: absolute;
    right: 250px;
    margin: 8px;

`

export const Price = styled.div`
    color: ${primaryColor};
    font-size: 200%;
    position: absolute;
    right: 150px;

`

export const ButtonSave = styled.button`
  position: absolute;
  top: 50px;
  bottom: 15px;
  right: 100px;
  width: 250px;
  height: 30px;
  border-radius: 20px;
  font-weight: bold;
  color: ${primaryColor};
  border: solid 0.9px ${primaryColor};
  background-color: white;
  :hover {
      background: ${primaryColor};
      color: ${secondaryColor};
    }
`
