import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { loginRequest } from '../authConfig';
import { logoutUser } from '../redux/actions/auth';
import { useDispatch } from 'react-redux';
import { useMsal } from '@azure/msal-react';

export default function DialogSessionExpired() {
    const dispatch = useDispatch();
    const { instance } = useMsal();
    const [open, setOpen] = useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        const loginRequestConfig = {
            ...loginRequest,
            prompt: 'select_account'
        }
        console.log("close dialog called")
        logoutUser(dispatch);
        instance.loginRedirect(loginRequestConfig);
        setOpen(false);
    };
    const handleClose2 = () => {
        const loginRequestConfig = {
            ...loginRequest,
            prompt: 'select_account'
        }
        console.log("close dialog called")
        logoutUser(dispatch);
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose2}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"You have been logged out"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This can happen when your login session expired. Please login again to continue further.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose2} variant="outlined" color="secondary">
                        No, I'll do it later
                    </Button>
                    <Button onClick={handleClose} variant="outlined" color="primary">
                        Yes, take me to login
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
