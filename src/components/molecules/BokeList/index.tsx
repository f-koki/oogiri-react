import React from "react";
import { Box, Button } from "@material-ui/core";
import { Datas } from "../../../type";

type Props = {
  datas: Datas;
};

const BokeList: React.FC<Props> = (props: Props) => (
  <Box className="BokeList" m={2}>
    {Object.keys(props.datas).map(key => (
      <Button
        key={key}
        variant="outlined"
        color="secondary"
        fullWidth
        style={{ marginBottom: "16px" }}
      >
        {props.datas[key].name}
      </Button>
    ))}
  </Box>
);

export default BokeList;
