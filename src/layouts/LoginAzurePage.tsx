import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { loginUser, logoutUser, setRedirectUrl } from '../redux/actions/auth';
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
        background: 'linear-gradient(90deg, rgba(255,161,147,1) 0%, rgba(255,210,170,1) 100%)',
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
    const isAuthenticated = useIsAuthenticated();
    const instance = useMsal();
    const dispatch = useDispatch();
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }


    useEffect(() => {
        if (isAuthenticated) {
            const payload = callMsGraph();
            payload.then((value) => {
                loginUser(value.token, value.dataMSGraph, dispatch);
            }).catch((error) => {
                logoutUser(dispatch)
                console.log(error)
                window.location.reload();
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
