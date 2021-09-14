import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { loginUser, logoutUser } from '../redux/actions/auth';
import { Rootstate } from '../redux/reducers';
import { Grid, Paper, TextField, Button, Typography, Container, Box } from '@material-ui/core';
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

export default function ProfilePage() {
    const classes = useStyles();
    const selector = useSelector((state: Rootstate) => state.auth);
    const isAuthenticated = useIsAuthenticated();
    console.log(selector.profile)
    return (
        <Grid container justifyContent="center" alignItems="center" className={classes.root} >
            <Grid item className={classes.wrapperPapper} xs={12} sm={12} md={3} component={Paper} elevation={6} square >
                <Container className={classes.paper}>
                    <h2>Profile Page !</h2>
                    <Typography style={{ wordWrap: "break-word" }}><strong>Display Name: </strong> {selector.profile.displayName}</Typography>
                    <Typography style={{ wordWrap: "break-word" }}><strong>First Name: </strong> {selector.profile.givenName}</Typography>
                    <Typography style={{ wordWrap: "break-word" }}><strong>Last Name: </strong> {selector.profile.surname}</Typography>
                    <Typography style={{ wordWrap: "break-word" }}><strong>Email: </strong> {selector.profile.mail}</Typography>
                    <Typography style={{ wordWrap: "break-word" }}><strong>Id: </strong> {selector.profile.id}</Typography>
                    <Box style={{ margin: '12px 0px' }}>
                        {isAuthenticated ? <SignOutButton /> : <></>}
                    </Box>
                </Container>
            </Grid>
        </Grid>
    );
}
