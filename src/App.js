import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layouts/index";
import {
  StartupPage,
  ProfilePage,
  TranslationPage,
  PageNotFound,
} from "./containers";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={StartupPage} />
          <Route path="/profile" exact component={ProfilePage} />
          <Route path="/translation" exact component={TranslationPage} />

          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
