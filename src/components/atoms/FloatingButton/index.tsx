import React from "react";
import classnames from "classnames";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";

type Props = {
  classname?: string;
  onClick: () => void;
};

const style: React.CSSProperties = {
  position: "absolute",
  bottom: "32px",
  right: "32px"
};

const FloatingButton: React.FC<Props> = ({ classname, onClick }) => {
  return (
    <Fab
      onClick={onClick}
      className={classnames("Fab", classname)}
      aria-label="edit"
      style={style}
      color="primary"
    >
      <EditIcon />
    </Fab>
  );
};

export default FloatingButton;
