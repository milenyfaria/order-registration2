import styled from 'styled-components'

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: solid 1px black;
  border-radius: 10px;
  margin: 10px;
  width: 200px;
  height: 300px;
`;

export const Name = styled.p`
  font-size: 10px;
  text-align: center;
`

export const Photo = styled.img`
  width: 150px;
`
