import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { loginUser, logoutUser } from '../redux/actions/auth';
import { Rootstate } from '../redux/reducers';
import { Grid, Paper, TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SignInButton } from '../components/SignInButton';
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { SignOutButton } from '../components/SignOutButton';
import { callMsGraph } from '../utils/MsGraphApiCall';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundImage: 'url(https://www.poinin.com/assets/img/prize_for_you.png)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],

        backgroundPosition: 'left bottom',
    },
    wrapperPapper: {
        marginRight: '10%',
        marginLeft: '10%'
    },
    paper: {
        margin: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttonLogin: {
        margin: 12,
        backgroundColor: '#ff9900',
        color: 'white',
    },
    error: {
        color: "red",
        height: 20,
    },
}));

export default function LoginAzurePage() {
    const classes = useStyles();
    const selector = useSelector((state: Rootstate) => state.auth);
    const isAuthenticated = useIsAuthenticated();
    const instance = useMsal();
    const dispatch = useDispatch();
    const Check = () => {
        console.log(selector)
    }
    useEffect(() => {
        if (isAuthenticated) {
            const payload = callMsGraph();
            payload.then((value) => {
                console.log(value.dataMSGraph);
                loginUser(value.token, value.dataMSGraph, dispatch);
            })
        }

    }, [isAuthenticated]);


    return (
        <Grid container justifyContent="center" alignItems="center" className={classes.root} >
            <Grid item className={classes.wrapperPapper} xs={12} sm={12} md={3} component={Paper} elevation={6} square >
                <div className={classes.paper}>
                    <h2>Welcome !</h2>
                    <Box style={{ margin: '12px 0px' }}>
                        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}
