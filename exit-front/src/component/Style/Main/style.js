import styled from "styled-components";
import { Logo, Main1, Main2, Main3, Main4 } from "../../../assets/index";

//헤더
const Haeder = styled.div`
  top: 0;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  box-shadow: 0px 3px 10px #00000029;
  background-color: white;
  .SearchBox {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  ul {
    width: 30%;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const LogoImg = styled.div`
  margin: 0 20px;
  width: 50px;
  height: 50px;
  background-image: url(${Logo});
  background-size: 50px;
`;

const Search = styled.div`
  margin: 0 30px;
  width: 430px;
  height: 40px;
  border: 1px solid #feb201;
  border-radius: 20px;
  box-shadow: ${({ boxShadow }) => boxShadow};
  transition: all 2s;
`;

const Input = styled.input`
  padding: 7px 15px;
  outline: none;
  border: none;
  margin: 0 10px;
  width: 350px;
  height: 25px;
  font-size: 15px;
  background-color: transparent;
`;

const Title = styled.li`
  color: black;
  margin: 0 10px;

  a {
    text-decoration: none;
    color: black;
    padding: 5px 0;
  }
  a:hover {
    color: #feb201;
    transition: all 0.3s;
    border-bottom: 2px solid #feb201;
  }
`;

//메인페이지
const BodyBox = styled.div`
  width: 100%;
  height: 100vh;
`;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Baner = styled.div`
  background-repeat: no-repeat;
  margin-top: 40px;
  background-image: url(${Main1});
  width: 100%;
  height: 550px;
`;

const Silder = styled.div`
  position: absolute;
  bottom: 0;
  left: 280px;
  /* width: 100%; */
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 1s;
  .silder {
    /* width: 80%; */
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* width: 60%; */
    height: 20px;
  }
`;

const DefaultImg = styled.div`
  background-repeat: no-repeat;
  /* width: 90%; */
  width: 735px;
  height: 470px;
  background-size: 100%;
  transition: 1s all;
  transform: translateX(${(props) => (props.toggle ? "-100%" : 0)});
`;

const CallImg = styled(DefaultImg)`
  background-image: url(${Main3});
`;

const CallImg2 = styled(DefaultImg)`
  background-image: url(${Main4});
`;

const Button = styled.div`
  margin: 0 10px;
  width: 5px;
  height: 5px;
  border-radius: 50px;
  border: 1px solid black;
  background-color: ${({ button }) => button};
`;

const Chat = styled.div`
  width: 580px;
  height: 400px;
  position: absolute;
  background-image: url(${Main2});
  background-size: 580px;
  right: 100px;
  top: 300px;
`;

const Cover = styled.div`
  position: absolute;
  right: 145px;
  bottom: 25px;
  width: 760px;
  height: 470px;
  background-color: white;
`;

export {
  Haeder,
  Search,
  Input,
  LogoImg,
  Title,
  BodyBox,
  Main,
  Baner,
  Silder,
  CallImg,
  CallImg2,
  Button,
  Chat,
  Cover,
};
