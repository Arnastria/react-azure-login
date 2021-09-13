import React from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from "@material-ui/core";
import { logoutUser } from "../redux/actions/auth";
import { useDispatch } from "react-redux";

function handleLogout(instance: any, dispatch: any) {
    logoutUser(dispatch);
    instance.logoutRedirect().catch((e: any) => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const SignOutButton = () => {
    const { instance } = useMsal();
    const dispatch = useDispatch();
    return (
        <Button color="secondary" variant="outlined" className="ml-auto" onClick={() => handleLogout(instance, dispatch)}>Sign out using Redirect</Button>
    );
}