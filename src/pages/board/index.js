import React from "react";
import {Route} from 'react-router-dom';
import Board from "./list";
import Regist from "./regist";
const BoardIndex = ({match, history}) => {
    console.log(match);
    return(<>  
        <p>보드 입니다. </p>
        <Route path={`${match.path}/`}  component={Board} exact/>
        <Route path={`${match.path}/new`}  component={Regist} exact/>
  
    </>);

}
export default BoardIndex;