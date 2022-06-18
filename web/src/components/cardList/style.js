import styled from "styled-components";

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
  color: rgb(45, 167, 122);
  font-size: 130%;
  position: absolute;
  right: 180px;
`;

export const Button = styled.button`
  position: absolute;
  top: 35px;
  right: 50px;
  width: 100px;
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
`;
