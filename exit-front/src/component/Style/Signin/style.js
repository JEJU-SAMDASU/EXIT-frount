import styled from "styled-components";
import { Logo } from "../../../assets/index";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SigninBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20%;
  height: 40%;
  border: 1px solid #feb201;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.16);
  //background-color: #fff0ff;
`;

const Header = styled.div`
  margin: 15px;
  background-image: url(${Logo});
  background-size: 70px;
  width: 70px;
  height: 70px;
`;

const Input = styled.div`
  margin: 15px;
  width: 220px;
  height: 30px;
  border-bottom: 1px solid #feb201;
  input {
    outline: none;
    border: none;
    padding: 0 10px;
    font-size: 15px;
    background-color: none;
  }
`;

const ButtonBox = styled.div`
  margin: 20px;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 100px;
  margin: 10px;
  padding: 5px;
  outline: none;
  border: 1px solid #feb201;
  background-color: white;
  a {
    color: black;
    text-decoration: none;
  }
  &:hover, a:hover {
    background-color: #feb201;
    color: white;
    transition: all 0.5s;
  }
`;

export { SigninBox, Header, Input, Main, ButtonBox, Button };
