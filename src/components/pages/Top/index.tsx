import React, { useState, useEffect } from "react";
import { firebaseDb, firebaseApp } from "../../../firebase/index";
import Form from "../../atoms/Form";
import { Datas } from "../../../type";
import { Button, Box } from "@material-ui/core";
import FloatingButton from "../../atoms/FloatingButton";

type Props = {};

const Top: React.FC<Props> = () => {
  const [datas, setDatas] = useState<Datas>({});
  const [boke, setBoke] = useState<string>("");

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        alert("ログイン中");
      } else {
        alert("非ログイン");
      }
    });
  });

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setBoke(event.currentTarget.value);
  };

  const handleSubmitClick = () => {
    let ref = firebaseDb.ref("sample/");
    ref.push({ name: boke });
  };

  const getFireData = () => {
    let ref = firebaseDb.ref("sample/");
    ref
      .orderByKey()
      .limitToFirst(10)
      .on("value", snapshot => {
        snapshot.val() && setDatas(snapshot.val());
      });
  };

  if (Object.keys(datas).length === 0) {
    getFireData();
  }

  return (
    <div className="Top">
      {Object.keys(datas).map(key => (
        <Box m={1}>
          <Button variant="contained" fullWidth>
            {datas[key].name}
          </Button>
        </Box>
      ))}
      <FloatingButton onClick={handleSubmitClick}></FloatingButton>
    </div>
  );
};

export default Top;
