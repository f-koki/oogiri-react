import React from "react";
import Moon from "../../atoms/Moon";
import axios from "axios";
// TODO

type Props = {};

type State = {
  hoge: any;
};

type GetHoge = {
  api: string;
};

export default class Top extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hoge: "hoge"
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
