import styled from 'styled-components'

export const ContainerCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: solid 1px black;
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
`

export const Name = styled.p`
  font-size: 10px;
  text-align: center;
`

export const Photo = styled.img`
  width: 150px;
`
