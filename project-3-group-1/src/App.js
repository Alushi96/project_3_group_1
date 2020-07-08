import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import DrDashboard from "./pages/drdashboard";
import PtDashboard from "./pages/ptdashboard";

function App() {
  return (
  <Router>   
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/drdashboard" component={DrDashboard} />
            <Route path="/ptdashboard" component={PtDashboard} />
          </Switch>
    </Router>
  );
}

export default App;
