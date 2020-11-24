import React, { useState } from "react";
import * as S from "./style";
import CounselorBookedListElement from "./element";

const CounselorBookedList = () => {
  const [bookedList, bookedListChange] = useState([
    {
      name: "오준상",
      src:
        "https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png",
      description: "설명설명",
      id: 1,
      time: "11:11:11",
    },
    {
      name: "오준상",
      src:
        "https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png",
      description: "설명설명",
      id: 1,
      time: "11:11:11",
    },
    {
      name: "오준상",
      src:
        "https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png",
      description: "설명설명",
      id: 1,
      time: "11:11:11",
    },
    {
      name: "오준상",
      src:
        "https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png",
      description: "설명설명",
      id: 1,
      time: "11:11:11",
    },
    {
      name: "오준상",
      src:
        "https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png",
      description: "설명설명",
      id: 1,
      time: "11:11:11",
    },
    {
      name: "오준상",
      src:
        "https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png",
      description: "설명설명",
      id: 1,
      time: "11:11:11",
    },
    {
      name: "오준상",
      src:
        "https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png",
      description: "설명설명",
      id: 1,
      time: "11:11:11",
    },
  ]);
  return (
    <S.CounselorBookedList>
      <S.CounselorBookedListElementWrapper>
        {bookedList.map((bookedElement) => (
          <CounselorBookedListElement
            key={`bookeList${bookedElement.id}`}
            {...bookedElement}
          />
        ))}
      </S.CounselorBookedListElementWrapper>
    </S.CounselorBookedList>
  );
};

export default CounselorBookedList;
