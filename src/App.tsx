import { IPublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useIsAuthenticated } from "@azure/msal-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, useHistory } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { logoutUser } from "./redux/actions/auth";
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
  const navigationClient = new CustomNavigationClient(history);
  pca.setNavigationClient(navigationClient);

  useEffect(() => {
    if (!isAuthenticated) {
      logoutUser(dispatch);
    }
  }, [])

  return (
    <MsalProvider instance={pca}>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </MsalProvider>
  );
}

export default App;
