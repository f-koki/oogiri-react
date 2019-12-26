import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withRouter, RouteComponentProps } from "react-router-dom";

type Props = {
  open: boolean;
  onCancelClick: () => void;
};

const LoginDialog: React.FC<Props & RouteComponentProps> = props => {
  useEffect(() => {
    setOpen(props.open);
  });

  const [open, setOpen] = React.useState(false);

  const handleLoginClick = () => {
    props.history.push("/");
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onCancelClick}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">ログイン</DialogTitle>
        <DialogContent>
          <DialogContentText>ログインしてください。</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onCancelClick} color="primary">
            キャンセル
          </Button>
          <Button onClick={handleLoginClick} color="primary">
            ログイン
          </Button>
        </DialogActions>
        <DialogContentText>登録がまだの方はこちら</DialogContentText>
      </Dialog>
    </div>
  );
};

export default withRouter(LoginDialog);
