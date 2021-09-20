import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { loginUser, logoutUser } from '../redux/actions/auth';
import { Rootstate } from '../redux/reducers';
import { Grid, Paper, TextField, Button, Box, Dialog } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SignOutButton } from '../components/SignOutButton';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import DialogSessionExpired from '../components/DialogSessionExpired';
import { SignInSecondApp } from '../components/SignInButton';
import PoininAppBar from '../components/Appbar';



const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundImage: 'url(https://www.poinin.com/assets/img/prize_for_you.png)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],

        backgroundPosition: 'left bottom',
    },
    borderAppBar: {
        border: '1px solid #eeecea'
    },
    logo: {
        maxWidth: 150
    },
    wrapperPapper: {
        marginRight: '10%',
        marginLeft: '10%',
        maxWidth: '300px',
        borderRadius: '15px'
    },
    paper: {
        margin: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttonLogin: {
        backgroundColor: '#ff9900',
        color: 'white',
    },
    error: {
        color: "red",
        height: 20,
    },
}));

export default function DefaultPage(props: any) {
    const { isSessionExpired } = props;
    const classes = useStyles();
    const isAuthenticated = useIsAuthenticated();
    const instance = useMsal();
    const history = useHistory();

    const changePage = (route: string) => {
        history.push(route);
    }

    return (
        <div>
            <div className={classes.borderAppBar}>
                <PoininAppBar searchFunction={() => { }} searchFunctionTimeout={() => { }} />
            </div>
            <Grid container justifyContent="center" alignItems="center" className={classes.root} >
                <Grid item className={classes.wrapperPapper} xs={12} sm={12} md={3} component={Paper} elevation={6} square >
                    <div className={classes.paper}>
                        <h2>Home Page</h2>
                        <Box style={{ margin: '12px 0px', width: '100%' }}>
                            <Button variant="outlined" color="primary" style={{ width: '100%' }} onClick={() => { changePage("/profile") }}>Profile Page</Button>
                        </Box>
                        <Box style={{ margin: '6px 0px', width: '100%' }}>
                            <Button variant="outlined" color="primary" style={{ width: '100%' }} onClick={() => { changePage("/promo") }}>Promo Page</Button>
                        </Box>
                        <Box style={{ margin: '12px 0px', width: '100%' }}>
                            {isAuthenticated ? <SignInSecondApp /> : <></>}
                        </Box>
                    </div>
                </Grid>
            </Grid>
            {isSessionExpired ?
                <DialogSessionExpired />
                :
                <></>
            }
        </div>
    );
}
