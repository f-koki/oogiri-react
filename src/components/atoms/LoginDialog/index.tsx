import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { withStyles, createStyles, WithStyles, Link } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const styles = (theme: Theme) =>
  createStyles({
    noRegister: {
      textAlign: "right"
    }
  });

type OwnProps = {
  open: boolean;
  onCancelClick: () => void;
  onLoginClick: () => void;
  onChangeEmail: React.Dispatch<React.SetStateAction<string>>;
  onChangePassword: React.Dispatch<React.SetStateAction<string>>;
  onRegisterClick: () => void;
};

type Props = OwnProps & RouteComponentProps & WithStyles<typeof styles>;

const LoginDialog: React.FC<Props> = props => {
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
            required
            onChange={e => {
              props.onChangeEmail(e.currentTarget.value);
            }}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            required
            onChange={e => {
              props.onChangePassword(e.currentTarget.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onCancelClick} color="primary">
            キャンセル
          </Button>
          <Button onClick={props.onLoginClick} color="primary">
            ログイン
          </Button>
        </DialogActions>
        <DialogContent>
          <DialogContentText
            className={props.classes.noRegister}
            color="textSecondary"
          >
            <Link onClick={props.onRegisterClick}>登録がまだの方はこちら</Link>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(withRouter(LoginDialog));
