import styled from 'styled-components'

export const ContainerStock = styled.div`
    display: flex;
    flex-wrap: wrap;

`

export const Loading = styled.p`
  left: 0;
  right: 0;
  margin: 50% auto;
  animation: is-rotating 1s infinite;
  border: 6px solid rgb(45, 167, 122);
  border-radius: 50%;
  border-top-color: #51d4db;
  height: 50px;
  width: 50px;
  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`

