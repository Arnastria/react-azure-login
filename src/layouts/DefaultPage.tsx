import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { loginUser, logoutUser } from '../redux/actions/auth';
import { Rootstate } from '../redux/reducers';
import { Grid, Paper, TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SignOutButton } from '../components/SignOutButton';
import { useIsAuthenticated } from '@azure/msal-react';



const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        background: 'linear-gradient(90deg, rgba(255,161,147,1) 0%, rgba(255,210,170,1) 100%)',
    },
    logo: {
        maxWidth: 150
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
        backgroundColor: '#ff9900',
        color: 'white',
    },
    error: {
        color: "red",
        height: 20,
    },
}));

export default function DefaultPage() {
    const classes = useStyles();
    const isAuthenticated = useIsAuthenticated();
    const history = useHistory();

    const changePage = (route: string) => {
        history.push(route);
    }

    return (
        <Grid container justifyContent="center" alignItems="center" className={classes.root} >
            <Grid item className={classes.wrapperPapper} xs={12} sm={12} md={3} component={Paper} elevation={6} square >
                <div className={classes.paper}>
                    <h2>Default Page</h2>
                    <Box style={{ margin: '12px 0px' }}>
                        <Button variant="outlined" color="primary" onClick={() => { changePage("/profile") }}>Profile</Button>
                    </Box>
                    <Box style={{ margin: '12px 0px' }}>
                        {isAuthenticated ? <SignOutButton /> : <></>}
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}
