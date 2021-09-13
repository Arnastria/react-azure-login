import { IPublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { useHistory } from "react-router";
import { RouteSelector } from "./routes";
import { CustomNavigationClient } from "./utils/NavigationClient";

type AppProps = {
  pca: IPublicClientApplication
};

function App({ pca }: AppProps) {
  const history = useHistory();
  const navigationClient = new CustomNavigationClient(history);
  pca.setNavigationClient(navigationClient);

  return (
    <MsalProvider instance={pca}>
      <RouteSelector />
    </MsalProvider>
  );
}

export default App;
