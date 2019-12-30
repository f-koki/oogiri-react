import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { withStyles, createStyles, WithStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const styles = (theme: Theme) =>
  createStyles({
    noRegister: {
      textAlign: "right"
    }
  });

type OwnProps = {
  open: boolean;
  odai: string;
  onCancelClick: () => void;
  onSubmitClick: () => void;
  onChangeBoke: React.Dispatch<React.SetStateAction<string>>;
};

type Props = OwnProps & RouteComponentProps & WithStyles<typeof styles>;

const BokeDialog: React.FC<Props> = props => {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onCancelClick}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">ボケる</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.odai}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="boke"
            label="Boke"
            type="boke"
            fullWidth
            required
            onChange={e => {
              props.onChangeBoke(e.currentTarget.value);
            }}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                props.onSubmitClick();
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onCancelClick} color="primary">
            キャンセル
          </Button>
          <Button onClick={props.onSubmitClick} color="primary">
            ボケる
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(withRouter(BokeDialog));
