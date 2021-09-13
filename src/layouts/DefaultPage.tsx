import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { loginUser, logoutUser } from '../redux/actions/auth';
import { Rootstate } from '../redux/reducers';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundImage: 'url(https://www.poinin.com/assets/img/prize_for_you.png)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],

        backgroundPosition: 'left bottom',
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
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const selector = useSelector((state: Rootstate) => state.auth);


    const login_click = (props: any) => {
        const { username, password } = props;
        console.log(username);
        console.log(password);
        if (username === "admin" && password === "admin123") {
            setIsError(false);
        } else {
            setIsError(true);
            return;
        }
        console.log("==")
        loginUser(props, dispatch);

        history.replace("/promodiv")
    }

    const Check = () => {
        console.log(selector)
    }

    const logout = () => {
        logoutUser(dispatch)
    }

    const searchFunction = (event: any) => {
        if (event.key === 'Enter') {
            login_click({ username: username, password: password });
        }
    }

    return (
        <Grid container justifyContent="center" alignItems="center" className={classes.root} >
            <Grid item className={classes.wrapperPapper} xs={12} sm={12} md={3} component={Paper} elevation={6} square >
                <div className={classes.paper}>
                    Hai Default Page
                    <Button onClick={logout} variant="contained" className={classes.buttonLogin}>
                        Logout
                    </Button>
                </div>

            </Grid>
        </Grid>
    );
}
