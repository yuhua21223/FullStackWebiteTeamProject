/**
 * Filename: DialogBox.js
 * Description : This file is to present the post form modal.
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import '../pages/BuyBooks.css';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

// close box when back btn is click
export default function DialogBox({ children, open, setOpen, title, button }) {
  const handleClose = () => {
    setOpen(false);
  };

  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);

  return (
    <div>
      {isLoggedIn && (
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {title}
          </DialogTitle>
          <DialogContent dividers>{children}</DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={handleClose}
              // className="post__book__button"
              color="primary"
            >
              {button}
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {!isLoggedIn && (
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            PERMISSION DENIED!
          </DialogTitle>
          <DialogContent dividers>
            <h3>You must be logged in to post a book.</h3>
            <h4>Thank You!</h4>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={handleClose}
              // className="post__book__button"
              color="primary"
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
