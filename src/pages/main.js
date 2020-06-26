import React, {useEffect, } from "react";
import {Route ,Switch } from 'react-router-dom';

import SideMenu from "../pages/template/sidemenu";
import ToolBar from "../pages/template/toolbar";
import Footer from "../pages/template/footer";
import LogoutModal from "../pages/template/logoutmodal";
import Dashboard from "../pages/dashboard/dashboard"
import List from "../pages/dashboard/list"
import NoMatch from "../pages/template/nomatch"


const MainPage = ({match, history}) =>{
    
    const authorization = localStorage.getItem("authrization")
  
    console.log(authorization,"<== auth");
    // 항상 발생하는 UseEffect
    useEffect(()=>{
        // if(authorization !== "true") history.push("/login")
    },[history, authorization]);

    
        return (<>
            <div>
              <div id="wrapper"> 
                  <SideMenu/>
                  <div id="content-wrapper" className="d-flex flex-column">
                      <div id="content">
                          <ToolBar/>
                          <div className="container-fluid">
                          <Switch>
                              <Route path={`${match.path}/dashboard`}     component={Dashboard}  />
                              <Route path={`${match.path}/list`}          component={List} />
                           
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
          </>);
    
    
}
export default MainPage;