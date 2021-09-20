import { IPublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Rootstate } from "./redux/reducers";
import Pages from "./routes";
import { callMsGraph } from "./utils/MsGraphApiCall";
import { CustomNavigationClient } from "./utils/NavigationClient";

type AppProps = {
  pca: IPublicClientApplication
};

function App({ pca }: AppProps) {
  const history = useHistory();
  const selector = useSelector((state: Rootstate) => state.auth);
  const navigationClient = new CustomNavigationClient(history);
  pca.setNavigationClient(navigationClient);
  const [isSessionExpired, setIsSessionExpired] = useState(false)

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

  useEffect(() => {
    if (selector.tokens) {
      const payload = callMsGraph();
      payload.then().catch((error) => {
        console.log("token ada, tapi session hilang")
        setIsSessionExpired(true);
      });
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MsalProvider instance={pca}>
      <BrowserRouter>
        <Pages isSessionExpired={isSessionExpired} />
      </BrowserRouter>
    </MsalProvider>
  );
}

export default App;
