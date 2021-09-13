import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { Button } from "@material-ui/core";

async function handleLogin(instance: any) {
    instance.loginRedirect(loginRequest).catch((e: any) => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <Button color="primary" variant="outlined" onClick={() => handleLogin(instance)}>Sign in using Redirect</Button>
    );
}