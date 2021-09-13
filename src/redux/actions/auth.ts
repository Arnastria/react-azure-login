export const loginUser = (credentials: any, dispatch: any) => {
    console.log("login")
    const { username, password } = credentials;
    console.log("username in actions : " + username);
    console.log("password in actions : " + password);

    dispatch({
        type: 'LOGGED_IN'
    });
}

export const logoutUser = (dispatch: any) => {
    console.log("logout")
    dispatch({
        type: 'LOGGED_OUT'
    });
}