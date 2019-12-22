import React from "react";
import Moon from "../../atoms/Moon";
import axios from "axios";
import { firebaseDb } from "../../../firebase/index";

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
    if (this.state.datas.length === 0) {
      this.getFireData();
    }
    return (
      <div className="Top">
        <button onClick={this.handleButtonClick}>button</button>
        <Moon />
        <div>ボケ</div>
        <div>{this.state.hoge}</div>
        {this.state.datas && this.state.datas.length !== 0 && (
          <div>
            {this.state.datas.map(data => {
              return <div>{data.name}</div>;
            })}
          </div>
        )}
      </div>
    );
  }
}
