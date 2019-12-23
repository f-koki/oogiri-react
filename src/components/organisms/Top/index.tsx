import React from "react";
import axios from "axios";
import { firebaseDb } from "../../../firebase/index";
import Form from "../../atoms/Form";

type Props = {};

type State = {
  hoge: any;
  datas: {
    [key: string]: {
      name: string;
    };
  };
};

type GetHoge = {
  api: string;
};

export default class Top extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hoge: "hoge",
      datas: {}
    };
  }

  handleButtonClick = () => {
    const server = "/api";
    const main = async () => {
      const res = await axios.get<GetHoge>(server);
      this.setState({
        hoge: res.data.api
      });
    };
    main();
  };

  handleSubmitClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let ref = firebaseDb.ref("sample/");
    ref.push({
      name: "hisashi"
    });
  };

  getFireData() {
    let ref = firebaseDb.ref("sample/");
    let self = this;
    ref
      .orderByKey()
      .limitToFirst(10)
      .on("value", snapshot => {
        self.setState({
          datas: snapshot.val()
        });
      });
  }

  render() {
    const datas = this.state.datas;
    if (Object.keys(datas).length === 0) {
      this.getFireData();
    }
    return (
      <div className="Top">
        {console.log("dataはこんなかんじ")}
        {console.log(datas)}
        <button onClick={this.handleButtonClick}>button</button>
        <div>{this.state.hoge}</div>
        <div>
          {Object.keys(datas).map(key => (
            <div>{datas[key].name}</div>
          ))}
        </div>
        <Form onSubmit={this.handleSubmitClick} buttonMsg="ボケる" />
      </div>
    );
  }
}
