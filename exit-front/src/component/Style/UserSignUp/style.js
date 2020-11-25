import styled from "styled-components";
import { Logo } from "../../../assets/index";

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20%;
  height: 60%;
  border: 1px solid #feb201;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.16);
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
  width: 300px;
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

const Button = styled.button`
  width: 220px;
  margin: 10px;
  padding: 10px;
  outline: none;
  border: 1px solid #feb201;
  background-color: white;
  &:hover {
    background-color: #feb201;
    color: white;
    transition: all 0.5s;
  }
`;

const CounselorSignUpBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  height: 80%;
  border: 1px solid #feb201;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.16);
`;

const CalenderWrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export {
  Main,
  SignUpBox,
  Header,
  Input,
  Button,
  CounselorSignUpBox,
  CalenderWrapper,
};
