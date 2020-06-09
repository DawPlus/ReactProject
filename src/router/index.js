// Components/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom';
import Admin from "../pages/admin";
import NoMatch from "../pages/main/nomatch"

export default () => (

  <Router>
    <Switch>
          <Route path="/" component={Admin} />
          <Route component={NoMatch}/>
    </Switch>
  </Router>

)