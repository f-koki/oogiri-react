import React from "react";
import axios from "axios";
import { firebaseDb } from "../../../firebase/index";
import Form from "../../atoms/Form";

type Sample = {
  ID: number;
  name: string;
};

type Props = {};

type State = {
  hoge: any;
  datas: Sample[];
};

type GetHoge = {
  api: string;
};

export default class Top extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hoge: "hoge",
      datas: []
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
    alert("sample/にデータを追加します。");
    let ref = firebaseDb.ref("sample/");
    ref.set({
      1: {
        ID: 1,
        name: "taro"
      },
      2: {
        ID: 2,
        name: "hanako"
      }
    });
    ref.child("3").set({
      ID: 3,
      name: "fusako"
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
    if (this.state.datas && this.state.datas.length === 0) {
      this.getFireData();
    }
    return (
      <div className="Top">
        <button onClick={this.handleButtonClick}>button</button>
        <div>{this.state.hoge}</div>
        {this.state.datas && this.state.datas.length !== 0 && (
          <div>
            {this.state.datas.map(data => {
              return <div>{data.name}</div>;
            })}
          </div>
        )}
        <Form onSubmit={this.handleSubmitClick} buttonMsg="ボケる" />
      </div>
    );
  }
}
