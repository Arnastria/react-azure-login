import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import DefaultPage from "../layouts/DefaultPage";
import LoginAzurePage from "../layouts/LoginAzurePage";
import { Rootstate } from "../redux/reducers";

export function RouteSelector(props: any) {
    const selector = useSelector((state: Rootstate) => state.auth);
    const history = useHistory();
    if (selector.tokens != null) {
        return (
            <BrowserRouter >
                <Switch>
                    <Route path="/login">
                        <LoginAzurePage />
                    </Route>
                    <Route path="/">
                        <DefaultPage />
                    </Route>
                </Switch>
            </BrowserRouter>

        );
    }
    return (<LoginAzurePage />);
}