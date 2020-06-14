// Components/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom';

import NoMatch from "../pages/template/nomatch"
import Main from "../pages/main";
import Login from "../pages/login";


export default () => (<>
        <Router>
                <Switch>
                    <Route path={`/login`} component={Login}  />
                    <Route path={`/main`} component={Main} />
                    <Route component={Login}/>
                </Switch>
        </Router>
</>)