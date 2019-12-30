import React, { useState } from "react";
import { firebaseDb } from "../../../firebase/index";
import { Datas } from "../../../type";
import { Box } from "@material-ui/core";
import FloatingButton from "../../atoms/FloatingButton";
import BokeDialog from "../../atoms/BokeDialog";
import BokeList from "../../molecules/BokeList";
import Odai from "../../molecules/Odai";

const Ogiri: React.FC = () => {
  const [datas, setDatas] = useState<Datas>({});
  const [boke, setBoke] = useState<string>("");
  const [isBokeDialogShow, setIsBokeDialogShow] = useState<boolean>(false);

  const handleBokeClick = () => {
    let ref = firebaseDb.ref("sample/");
    ref
      .push({ name: boke })
      .then(() => {
        setIsBokeDialogShow(false);
      })
      .catch(e => {
        alert(e);
      });
  };

  const getFireData = () => {
    let ref = firebaseDb.ref("sample/");
    ref
      .orderByKey()
      .limitToFirst(30)
      .on("value", snapshot => {
        snapshot.val() && setDatas(snapshot.val());
      });
  };

  if (Object.keys(datas).length === 0) {
    getFireData();
  }

  return (
    <Box className="Ogiri">
      {/* TODO: お題を登録できるようにする */}
      <Odai odai="こんな傘は嫌だ" />
      <BokeList datas={datas} />
      <FloatingButton
        onClick={() => setIsBokeDialogShow(true)}
      ></FloatingButton>
      <BokeDialog
        open={isBokeDialogShow}
        odai="こんな傘は嫌だ"
        onSubmitClick={handleBokeClick}
        onCancelClick={() => setIsBokeDialogShow(false)}
        onChangeBoke={setBoke}
      />
    </Box>
  );
};

export default Ogiri;
