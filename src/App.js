import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layouts/index";
import {
  StartupPage,
  ProfilePage,
  TranslationPage,
  PageNotFound,
} from "./containers";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={StartupPage} />

          <PrivateRoute path={"/profile"} exact component={ProfilePage} />
          <PrivateRoute
            path={"/translation"}
            exact
            component={TranslationPage}
          />

          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
