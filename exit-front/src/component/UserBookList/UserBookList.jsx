import React, { useState } from "react";
import * as S from "../CounselorBookedList/style";
import BookElement from "./BookElement";
import Header from "../Main/Header";

const UserBookList = () => {
  const [bookList, bookListChange] = useState([
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
      id: 2,
      time: "11:11:11",
    },
    {
      name: "오준상",
      src:
        "https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png",
      description: "설명설명",
      id: 3,
      time: "11:11:11",
    },
    {
      name: "오준상",
      src:
        "https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png",
      description: "설명설명",
      id: 4,
      time: "11:11:11",
    },
    {
      name: "오준상",
      src:
        "https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png",
      description: "설명설명",
      id: 5,
      time: "11:11:11",
    },
    {
      name: "오준상",
      src:
        "https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png",
      description: "설명설명",
      id: 6,
      time: "11:11:11",
    },
    {
      name: "오준상",
      src:
        "https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png",
      description: "설명설명",
      id: 7,
      time: "11:11:11",
    },
  ]);
  return (
    <S.CounselorBookedList>
      <Header />
      <S.CounselorBookedListElementWrapper>
        {bookList.map((bookedElement) => (
          <BookElement
            key={`bookeList${bookedElement.id}`}
            {...bookedElement}
            bookedListChange={bookListChange}
          />
        ))}
      </S.CounselorBookedListElementWrapper>
    </S.CounselorBookedList>
  );
};

export default UserBookList;
