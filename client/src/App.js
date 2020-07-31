import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";
//components
import Alert from "./components/layout/alert";
import Navbar from "./components/layout/navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/routing/privateRoute";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./components/layout/landing";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <PrivateRoute exact path='/calendar' component={Landing} />
            <PrivateRoute exact path='/charts' />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
