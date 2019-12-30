import React from "react";
import { Paper } from "@material-ui/core";
import { Color } from "../../../style/theme";
import color from "@material-ui/core/colors/amber";

type Props = {
  odai: string;
};

const Odai: React.FC<Props> = (props: Props) => (
  <Paper
    style={{
      textAlign: "center",
      lineHeight: 5,
      margin: "16px",
      backgroundColor: Color.midnightBlue,
      color: Color.moonYellow
    }}
    className="Odai"
  >
    {props.odai}
  </Paper>
);

export default Odai;
