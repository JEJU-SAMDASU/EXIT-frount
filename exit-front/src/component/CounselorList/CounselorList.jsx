import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";
import ListElement from "./Element";
import Modal from "../Modal";

const CounselorList = () => {
  const params = useParams();
  const [modalAble, setModalAble] = useState(false);
  const [selectedData, setSelectedData] = useState();
  const [counselorList, setCounselorList] = useState([
    {
      src:
        "https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png",
      name: "오준상",
      intro: "저는 오준상이고 테스트 중입니다.",
      score: 5,
    },
  ]);
  return (
    <S.CounselorList>
      {modalAble ? (
        <Modal
          data={selectedData}
          dataChange={setSelectedData}
          setModalAble={setModalAble}
        />
      ) : (
        ""
      )}
      <div>
        <S.CounselorListSearchTitle>
          {params.search} 검색 결과...
        </S.CounselorListSearchTitle>
        <S.CounselorListWrapper>
          {counselorList.map((element) => {
            return (
              <ListElement
                {...element}
                setSelectedData={setSelectedData}
                setModalAble={setModalAble}
              />
            );
          })}
        </S.CounselorListWrapper>
      </div>
    </S.CounselorList>
  );
};

export default CounselorList;
