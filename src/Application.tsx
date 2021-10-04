import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";

import * as ROUTES from "./constants/routes";

import "./sass/styles.scss";

function Application() {
  return (
    <div className="Application">
      <NavBar />
      <main>
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomePage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default Application;
