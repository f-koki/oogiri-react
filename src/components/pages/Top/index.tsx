import React from "react";
import { Typography, Box } from "@material-ui/core";

type Props = {};

const Top: React.FC<Props> = () => {
  return (
    <Box textAlign="center">
      <div className="Top">
        <Typography variant="h4">Moon Ogiriとは</Typography>
        <div>大喜利を楽しめるサイトです。</div>
      </div>
    </Box>
  );
};

export default Top;
