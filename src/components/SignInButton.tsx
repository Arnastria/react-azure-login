import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { Button } from "@material-ui/core";
import { setRedirectUrl } from "../redux/actions/auth";
import { useDispatch } from "react-redux";

async function handleLogin(instance: any, param: any) {
    const { loginHint, redirect, prompt, dispatch } = param;
    if (redirect) {
        setRedirectUrl(redirect, dispatch);
    }
    const loginRequestConfig = {
        ...loginRequest,
        loginHint: loginHint ? loginHint : null,
    }

    instance.loginRedirect(loginRequestConfig).catch((e: any) => {
        console.error(e);
    });
}



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
        <Button color="primary" variant="outlined" style={{ width: '100%' }} onClick={() => handleLogin(instance, { redirect: '/promo', dispatch: dispatch })}>Sign in with Navigate</Button>
    );
}
