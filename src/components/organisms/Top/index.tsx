import React from "react";
import Moon from "../../atoms/Moon";
import axios from "axios";
// TODO

type Props = {};

type State = {
  hoge: any;
};

export default class Top extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hoge: "hoge"
    };
  }
  handleButtonClick = () => {
    const server = "http://localhost:8080/";
    axios
      .get(server)
      .then(res => {
        alert("res:" + res);
        // this.setState({
        //   hoge: res.data
        // });
      })
      .catch(() => {
        // this.setState({
        //   hoge: "fail"
        // });
        alert("fail");
      });
  };

  render() {
    return (
      <div className="Top">
        <button onClick={this.handleButtonClick}>button</button>
        <Moon />
        <div>救急車がMAJIDE終わってる</div>
        <div>{this.state.hoge}</div>
      </div>
    );
  }
}
