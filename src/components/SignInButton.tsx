import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { Button, ButtonBase, Icon, makeStyles, Paper, SvgIcon } from "@material-ui/core";
import { setRedirectUrl } from "../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import MSLogo from "../data/MSSymbolLockup";
import { Rootstate } from "../redux/reducers";

async function handleLogin(instance: any, param: any) {
    const { loginHint, redirect, prompt, dispatch } = param;
    if (redirect) {
        setRedirectUrl(redirect, dispatch);
    }
    const loginRequestConfig = {
        ...loginRequest,
        loginHint: loginHint ? loginHint : null,
        prompt: prompt ? prompt : null,
    }

    instance.loginRedirect(loginRequestConfig).catch((e: any) => {
        console.error(e);
    });
}

export { handleLogin };

/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <Button color="primary" variant="outlined" style={{ width: '100%' }} onClick={() => handleLogin(instance, {})}>Sign in</Button>
    );
}

export const SignInButtonHint = () => {
    const { instance } = useMsal();

    return (
        <Button color="primary" variant="outlined" style={{ width: '100%' }} onClick={() => handleLogin(instance, { loginHint: 'arnastria@gmail.com' })}>Sign in with Login Hint</Button>
    );
}

export const SignInButtonNavigate = () => {
    const { instance } = useMsal();
    const dispatch = useDispatch();
    return (
        <Button color="primary" variant="contained" style={{ width: '100%' }} onClick={() => handleLogin(instance, { redirect: '/promo', dispatch: dispatch })}>Sign in to Second App    </Button>
    );
}

const useStyles = makeStyles((theme) => ({
    buttonDiv: {
        backgroundColor: 'black'
    },
    buttonMS: {
        opacity: 1,
        "&:hover": {
            opacity: 0.9
        }
    },
}));

export const SignInSecondApp = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state: Rootstate) => state.auth);

    return (
        <Button color="primary" variant="contained" style={{ width: '100%' }} onClick={() => { window.location.assign('http://localhost:3030/loginRedirect?loginHint=' + selector.mail) }}> Sign in to Second App </Button>
    );
}

export const SignInButtonFix = () => {
    const { instance } = useMsal();
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <div className={classes.buttonDiv}>
            <ButtonBase className={classes.buttonMS} onClick={() => handleLogin(instance, { prompt: 'select_account', dispatch: dispatch })}>
                <MSLogo />
            </ButtonBase>
        </div>

    );
}
