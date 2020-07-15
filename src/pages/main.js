import React, {useEffect}  from "react";
import {Route ,Switch } from 'react-router-dom';

import SideMenu from "../pages/template/sidemenu";
import ToolBar from "../pages/template/toolbar";
import Footer from "../pages/template/footer";
import LogoutModal from "../pages/template/logoutmodal";
import Dashboard from "../pages/dashboard/dashboard"

import NoMatch from "../pages/template/nomatch";
import Board from "../pages/board/list";
import {useSelector}   from "react-redux";
const MainPage = ({match, history}) =>{
      
    const tokken = sessionStorage.getItem("tokken");
    const {authrization} = useSelector(state=> state.auth);
   
    /*
    useEffect(()=>{
        if(tokken){
            return;
        } 
        console.log("Tokken Check");
        history.push("/login");
    },[tokken,history]);

    useEffect(()=>{
        if(authrization === false){
            console.log(authrization) ;
            history.push("/login");
        }
    },[authrization,  history])
    
*/
        return (<>
      {/*{authrization &&*/}
      {true&&
            <div>
              <div id="wrapper"> 
                  <SideMenu/>
                  <div id="content-wrapper" className="d-flex flex-column">
                      <div id="content">
                          <ToolBar/>
                          <div className="container-fluid">
                          <Switch>
                              <Route path={`${match.path}/dashboard`}      component={Dashboard}  />
                              <Route path={`${match.path}/board`}          component={Board} />
                              

                              <Route component={NoMatch}/>
                           </Switch>
                          </div>
                      </div>
                      <Footer/>
                  </div>
              </div>
              <a className="scroll-to-top rounded" href="#page-top">
                  <i className="fas fa-angle-up"></i>
              </a>
              <LogoutModal/>     
            </div> 
}</>);
    
    
}
export default MainPage;