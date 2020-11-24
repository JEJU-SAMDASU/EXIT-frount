import styled from "styled-components";

export const VideoCall = styled.div`
  width: 100%;
  height: 100vh;
`;

export const MyVideo = styled.video`
  width: 300px;
  height: 300px;
  bottom: 40px;
  right: 40px;
  position: absolute;
`;

export const YourVideo = styled.video`
  width: 100%;
  height: 100%;
`;

export const ShutDown = styled.div`
  width: 70px;
  height: 70px;
  background-color: #e11f1f;
  border-radius: 35px;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
