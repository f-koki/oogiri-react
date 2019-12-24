import React, { useState } from "react";
import axios from "axios";
import { firebaseDb } from "../../../firebase/index";
import Form from "../../atoms/Form";

type Props = {};

type Datas = {
  [key: string]: {
    name: string;
  };
}

type GetHoge = {
  api: string;
};

const Top: React.FC<Props> = () => {
  const [hoge, setHoge] = useState<any>("hoge")
  const [datas, setDatas] = useState<Datas>({})
  const [boke, setBoke] = useState<string>("")

  const handleButtonClick = () => {
    const server = "/api";
    const main = async () => {
      const res = await axios.get<GetHoge>(server);
      setHoge(res.data.api)
    };
    main();
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setBoke(event.currentTarget.value)
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
  }

  if (Object.keys(datas).length === 0) {
    getFireData();
  }

  return (
    <div className="Top">
      <button onClick={handleButtonClick}>button</button>
      <div>{hoge}</div>
      <div>
        {Object.keys(datas).map(key => (
          <div>{datas[key].name}</div>
        ))}
      </div>
      <Form
        onChange={handleInputChange}
        onClick={handleSubmitClick}
        buttonMsg="ボケる"
      />
    </div>
  );
}

export default Top
