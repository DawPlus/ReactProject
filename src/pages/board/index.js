import React from "react";
import {Route} from 'react-router-dom';
import Board from "./list";
import New from"./new";
import View from "./view";
  

const BoardIndex = ({match, history}) => {
    return(<>  
 
        <Route path={`${match.path}/`}      component={Board} exact/>
        <Route path={`${match.path}/new`}   component={New} exact/>
        <Route path={`${match.path}/view`}   component={View} exact/>
    </>);

}
export default BoardIndex;