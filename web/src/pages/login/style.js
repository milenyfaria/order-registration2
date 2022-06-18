import styled from 'styled-components'

export const ContainerLoginPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const Image = styled.img`
  position: absolute;
  width: 300px;
  left: 38%;
`;

export const ContainerBoxLogin = styled.div`
  position: absolute;
  padding: 20px;
  top: 50%;
  left: 50%;
  width: 500px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;


export const Title = styled.h2`
  margin: 5% 0 30px;
  padding: 0;
  color: rgb(63, 173, 133);
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
  color: rgb(63, 173, 133);
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid rgb(63, 173, 133);
  outline: none;
  background: transparent;
  font-family: sans-serif;
  :focus-within {
    top: -20px;
    left: 0;
    color: rgb(63, 173, 133);
    font-size: 12px;
  }
  :valid {
    top: -20px;
    left: 0;
    color: rgb(63, 173, 133);
    font-size: 12px;
  }
`;

export const ButtonLogIn = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: rgb(63, 173, 133);
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin: 0 35%;
  letter-spacing: 4px;
  :hover {
    background: rgb(63, 173, 133);
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px rgb(63, 173, 133), 0 0 25px rgb(63, 173, 133),
      0 0 50px rgb(63, 173, 133), 0 0 100px rgb(63, 173, 133);
  }
`;
