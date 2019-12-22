import React from "react";
import Moon from "../../atoms/Moon";
import axios from "axios";
import firebase from "firebase";

type Props = {};

type State = {
  hoge: any;
  data: [];
};

type GetHoge = {
  api: string;
};

export default class Top extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hoge: "hoge",
      data: []
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
    let db = firebase.database();
    let ref = db.ref("sample/");
    let self = this;
    ref
      .orderByKey()
      .limitToFirst(10)
      .on("value", snapshot => {
        alert("hoge");
        self.setState({
          data: snapshot.val()
        });
      });
  }

  render() {
    if (this.state.data.length === 0) {
      this.getFireData();
    }

    alert(this.state.data);

    return (
      <div className="Top">
        <button onClick={this.handleButtonClick}>button</button>
        <Moon />
        <div>ボケ</div>
        <div>{this.state.hoge}</div>
      </div>
    );
  }
}
