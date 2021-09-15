import { IPublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useIsAuthenticated } from "@azure/msal-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useHistory } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { loginRequest } from "./authConfig";
import { logoutUser } from "./redux/actions/auth";
import { Rootstate } from "./redux/reducers";
import Pages from "./routes";
// import { RouteSelector } from "./routes";
import { CustomNavigationClient } from "./utils/NavigationClient";

type AppProps = {
  pca: IPublicClientApplication
};

function App({ pca }: AppProps) {
  const isAuthenticated = useIsAuthenticated();
  const dispatch = useDispatch();
  const history = useHistory();
  const selector = useSelector((state: Rootstate) => state.auth);
  const navigationClient = new CustomNavigationClient(history);
  pca.setNavigationClient(navigationClient);

  // useEffect(() => {
  //   if (!isAuthenticated && selector.tokens) {

  //     console.log("select account lagi")
  //     logoutUser(dispatch);

  //     const loginRequestConfig = {
  //       ...loginRequest,
  //       prompt: 'select_account'
  //     }
  //     pca.loginRedirect(loginRequestConfig);
  //   }
  // }, [])

  return (
    <MsalProvider instance={pca}>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </MsalProvider>
  );
}

export default App;
