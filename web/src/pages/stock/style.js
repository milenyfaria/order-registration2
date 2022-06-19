import styled from 'styled-components'
import { primaryColor, secondaryColor } from '../../constants/colors'

export const ContainerStock = styled.div`
    display: flex;
    flex-wrap: wrap;

`

export const Loading = styled.p`
  left: 0;
  right: 0;
  margin: 100%;
  animation: is-rotating 1s infinite;
  border: 6px solid ${primaryColor};
  border-radius: 50%;
  border-top-color: ${primaryColor};
  height: 50px;
  width: 50px;
  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`

