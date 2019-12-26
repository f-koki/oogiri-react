import React, { useState } from "react";
import { firebaseDb } from "../../../firebase/index";
import Form from "../../atoms/Form";
import { Datas } from "../../../type";
import { Button, Box } from "@material-ui/core";
import FloatingButton from "../../atoms/FloatingButton";

type Props = {};

const Top: React.FC<Props> = () => {
  const [datas, setDatas] = useState<Datas>({});
  const [boke, setBoke] = useState<string>("");

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
      {/* <Form
        onChange={handleInputChange}
        onClick={handleSubmitClick}
        buttonMsg="boke"
      /> */}
      <FloatingButton onClick={handleSubmitClick}></FloatingButton>
    </div>
  );
};

export default Top;
