import styled from "styled-components";
import { Logo } from "../../../assets/index";

//헤더
const Haeder = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  box-shadow: 0px 3px 10px #00000029;
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
  width: 300px;
  height: 30px;
  border: 1px solid #feb201;
  border-radius: 10px;
  box-shadow: ${({ boxShadow }) => boxShadow};
  transition: all 2s;
`;

const Input = styled.input`
  outline: none;
  border: none;
  margin: 0 10px;
  width: 200px;
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

export { Haeder, Search, Input, LogoImg, Title, BodyBox };
