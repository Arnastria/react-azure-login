import React from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from "@material-ui/core";

function handleLogout(instance: any) {
    instance.logoutRedirect().catch((e: any) => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    return (
        <Button variant="outlined" className="ml-auto" onClick={() => handleLogout(instance)}>Sign out using Redirect</Button>
    );
}