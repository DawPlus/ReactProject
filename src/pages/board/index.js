import React from "react";
import {Route} from 'react-router-dom';
import Board from "./list";
import New from"./new";
const BoardIndex = ({match, history}) => {
    return(<>  
        <p>보드 입니다. </p>
        <Route path={`${match.path}/`}      component={Board} exact/>
        <Route path={`${match.path}/new`}   component={New} exact/>
  
    </>);

}
export default BoardIndex;