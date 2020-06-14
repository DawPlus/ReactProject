import React from "react";

import {Route ,Switch } from 'react-router-dom';

import SideMenu from "../pages/template/sidemenu";
import ToolBar from "../pages/template/toolbar";
import Footer from "../pages/template/footer";
import LogoutModal from "../pages/template/logoutmodal";
import Dashboard from "../pages/dashboard/dashboard"
import List from "../pages/dashboard/list"
import NoMatch from "../pages/template/nomatch"
import LolAPI from "../pages/lolApi"


const MainPage = ({match}) =>{
    return (<>
                <div id="wrapper"> 
                    <SideMenu/>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <ToolBar/>
                            <div className="container-fluid">
                            <Switch>
                                <Route path={`${match.path}/dashboard`}     component={Dashboard}  />
                                <Route path={`${match.path}/list`}          component={List} />
                                <Route path={`${match.path}/lolApi`}        component={LolAPI} />
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
    </>);
}
export default MainPage;