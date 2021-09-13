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
function LoggedInRouteX(props: any) {
    const { children, path } = props;
    const isAuthenticated = useIsAuthenticated();
    const history = useHistory();
    const selector = useSelector((state: Rootstate) => state.auth);
    if (selector.tokens === null || !isAuthenticated) {
        history.push('/login')
    }
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

function LoggedOutRouteX(props: any) {
    const { children, path } = props;
    const isAuthenticated = useIsAuthenticated();
    const history = useHistory();
    const selector = useSelector((state: Rootstate) => state.auth);
    if (selector.tokens !== null && isAuthenticated) {
        history.push('/')
    }
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
            <LoggedOutRouteX path="/login">
                <LoginAzurePage />
            </LoggedOutRouteX>
            <LoggedInRouteX path="/profile">
                <ProfilePage />
            </LoggedInRouteX>
            <LoggedInRouteX path="/">
                <DefaultPage />
            </LoggedInRouteX>
        </Switch>
    );
}
