export const loginUser = (credentials: any, profileData: any, dispatch: any) => {
    console.log("login")
    dispatch({
        type: 'LOGGED_IN',
        token: credentials,
        profile: profileData,
    });
}

export const logoutUser = (dispatch: any) => {
    console.log("logout")
    dispatch({
        type: 'LOGGED_OUT'
    });
}