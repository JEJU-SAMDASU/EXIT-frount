import styled from "styled-components";
import { Aa, Send } from "../../../assets/index";

const MainBox = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #707070;
  box-shadow: 0px 3px 22px #00000069;
  border-radius: 10px;
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Button = styled.div`
  padding-top: 3px;
  float: right;
  width: 120px;
  height: 30px;
  border-radius: 50px;
  background-color: red;
  color: white;
  text-align: center;
  margin: 10px;
`;

const InputBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: white;
  box-shadow: 0px -5px 9px #00000047;
`;

const Input = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #e9e9e9;
  border-radius: 20px;
  input {
    background: transparent;
    margin: 5px;
    width: 380px;
    height: 30px;
    outline: none;
    border: none;
  }
  .Aimg {
    margin: 0 3px;
    width: 30px;
    height: 30px;
    background-image: url(${Aa});
    background-size: 30px;
  }
  .sendimg {
    margin: 3px;
    width: 30px;
    height: 30px;
    background-image: url(${Send});
    background-size: 30px;
  }
`;

const Title = styled.div`
  margin-bottom: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .boxcover {
    width: 100%;
    height: auto;

  }
`;

const My = styled.div`
  border-radius: 10px;
  padding: 10px;
  float: right;
  margin: 10px;
  width: 200px;
  height: auto;
  background-color: #feb201;
  box-shadow: 0px 3px 22px #00000069;
`;

const You = styled(My)`
  background-color: white;
`;

export { MainBox, Header, Button, InputBox, Input, Title, My, You };
