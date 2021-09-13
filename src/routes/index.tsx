import { useIsAuthenticated } from "@azure/msal-react";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch, useHistory } from "react-router-dom";
import DefaultPage from "../layouts/DefaultPage";
import LoginAzurePage from "../layouts/LoginAzurePage";
import ProfilePage from "../layouts/ProfilePage";
import { Rootstate } from "../redux/reducers";

// export function RouteSelector(props: any) {
//     const selector = useSelector((state: Rootstate) => state.auth);
//     const history = useHistory();
//     if (selector.tokens != null) {
//         return (
//             <BrowserRouter >
//                 <Switch>
//                     <Route path="/login">
//                         <LoginAzurePage />
//                     </Route>
//                     <Route path="/">
//                         <DefaultPage />
//                     </Route>
//                 </Switch>
//             </BrowserRouter>

//         );
//     }
//     return (<LoginAzurePage />);
// }
function LoggedInRoute(props: any) {
    const { children, path } = props;
    const isAuthenticated = useIsAuthenticated();
    const history = useHistory();
    const selector = useSelector((state: Rootstate) => state.auth);
    if (selector.tokens === null) {
        // history.push('/login')
        console.log("redirrect ke login")
        return (
            <Route
                render={(props) => (
                    <Redirect
                        to={{
                            pathname: "/login",
                        }}
                    />
                )}
            />
        );
    }
    console.log("Masuk ke logged in")
    return (
        <>
            <Route render={() => (
                <>
                    {children}
                </>
            )}
            />
        </>
    );
}

function LoggedOutRoute(props: any) {
    const { children, path } = props;
    const isAuthenticated = useIsAuthenticated();
    const history = useHistory();
    const selectorAuth = useSelector((state: Rootstate) => state.auth);
    const selectorRedirect = useSelector((state: Rootstate) => state.redirectUrl);

    if (selectorAuth.tokens !== null) {
        // history.push(selectorRedirect.url)
        console.log("redirrect logged out")
        return (
            <Route
                render={(props) => (
                    <Redirect
                        to={{
                            pathname: selectorRedirect.url,
                        }}
                    />
                )}
            />
        );
    }
    console.log("Masuk ke logged out")
    return (
        <>
            <Route render={() => (
                <>
                    {children}
                </>
            )}
            />
        </>
    );
}


export default function Pages() {
    return (
        <Switch>
            <LoggedOutRoute path="/login">
                <LoginAzurePage />
            </LoggedOutRoute>
            <LoggedInRoute path="/profile">
                <ProfilePage />
            </LoggedInRoute>
            <LoggedInRoute path="/">
                <DefaultPage />
            </LoggedInRoute>
        </Switch>
    );
}
