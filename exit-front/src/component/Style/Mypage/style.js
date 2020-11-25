import styled from "styled-components";
import { Proflie, User } from "../../../assets/index";

const BodyBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Profile = styled.div`
  width: 60%;
  height: 60%;
  box-shadow: 0 1px 4px #c3c7c7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .introduce {
    h1{
      font-size: 20px;
      font-weight: 300;
      margin : 20px 0 20px 0 ;
    }
  }
`;

const ProfileBox = styled.div`
  margin: 20px 50px 20px 20px;
  border-radius: 5px;
  box-shadow: 0 1px 4px #c3c7c7;
  width: 30%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Photo = styled.div`
  margin: 20px;
  width: 120px;
  height: 120px;
  background-image: url(${User});
  background-size: 120px;
  border-radius: 50px;
`;

const Name = styled.div`
  padding: 5px;
  margin: 10px;
  width: 70%;
  height: 30px;
  border-bottom: 1px solid #feb201;
  font-weight: 300;
`;

const Id = styled(Name)``;

const Mail = styled(Name)``;

const Introduce = styled.div`
  margin: 20px 0 80px 0;
  border-radius: 5px;
  padding: 10px;
  width: 580px;
  height: 100px;
  box-shadow: 0 1px 4px #c3c7c7;
`;

export { BodyBox, Profile, ProfileBox, Photo, Name, Id, Mail, Introduce };
