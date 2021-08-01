import React, { lazy, useState, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const HomePage = lazy(() => import("./pages/Home"));
const LoginPage = lazy(() => import("./pages/Auth/Login"));
const RegisterPage = lazy(() => import("./pages/Auth/Register"));

const App = () => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  return (
    <div>
      <Suspense fallback={<h1>Errorr from React</h1>}>
        <Router>
          <Switch>
            {token ? (
              <Route exact path="/" component={HomePage} />
            ) : (
              <Route exact path="/" component={LoginPage} />
            )}
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
