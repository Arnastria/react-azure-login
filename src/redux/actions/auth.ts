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

export const setRedirectUrl = (url: string, dispatch: any) => {
    console.log("setRedirectUrl")
    dispatch({
        type: 'SET_URL',
        url: url,
    });
}

export const resetRedirectUrl = (dispatch: any) => {
    console.log("resetRedirectUrl")
    dispatch({
        type: 'RESET_URL',
    });
}
