import styled from "styled-components";
import { Proflie } from "../../../assets/index";

const BodyBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Profile = styled.div`
  width: 70%;
  height: 60%;
  border: 1px solid #feb201;
  box-shadow: 0 1px 4px #feb201;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ProfileBox = styled.div`
  margin: 20px;
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
  background-image: url(${Proflie});
  background-size: 120px;
  border-radius: 50px;
`;

const Name = styled.div`
  margin: 10px;
  width: 70%;
  height: 30px;
  border-bottom: 1px solid #feb201;
  font-weight: 300;
`;

const Id = styled(Name)``;

const Mail = styled(Name)``;

const DetailBox = styled.div`
  margin: 20px;
  width: 60%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 300;
`;
const JobBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;  
`;

const JobDetail = styled.div`
  margin: 10px;
  width: 65px;
  font-size: 20px;
  border-right: 3px solid #feb201;
  font-weight: 300;
`;
const Job = styled.div`
  width: 60%;
  font-size: 20px;
  margin: 10px;
  font-weight: 300;
`;

const Introduce = styled.div`
  margin: 20px;
  padding: 10px;
  width: 90%;
  height: 250px;

  box-shadow: 0px 3px 5px #00000029;
`;

export {
  BodyBox,
  Profile,
  ProfileBox,
  Photo,
  Name,
  Id,
  Mail,
  DetailBox,
  JobBox,
  Job,
  JobDetail,
  Introduce,
};
