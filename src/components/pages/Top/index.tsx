import React from "react";
import { Typography, Box } from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";

type Props = {};

const Top: React.FC<Props> = () => {
  return (
    <Box textAlign="center">
      <Brightness3Icon />
      <div className="Top">
        <Typography variant="h4">Moon Ogiriとは</Typography>
      </div>
    </Box>
  );
};

export default Top;
