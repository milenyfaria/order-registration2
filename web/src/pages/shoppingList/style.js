import styled from 'styled-components'

export const Container = styled.div`
    display: flex; 
    flex-direction: column;
    position: relative;
    align-items: center;
`

export const ContainerTotal = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    margin-top: 40px;
  
`

export const Total = styled.h3`
    font-size: 100%;
    position: absolute;
    right: 280px;

`

export const Price = styled.div`
    color: rgb(45, 167, 122);
    font-size: 200%;
    position: absolute;
    right: 170px;

`


export const ButtonSave = styled.button`
  position: absolute;
  top: 80px;
  right: 170px;
  width: 250px;
  height: 30px;
  border-radius: 20px;
  font-weight: bold;
  color: rgb(45, 167, 122);
  border: solid 0.9px rgb(45, 167, 122);
  background-color: white;
  :hover {
      background: rgb(45, 167, 122);
      color: #fff;
    }
`
