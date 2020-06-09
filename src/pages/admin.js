import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import SideMenu from "./main/sidemenu";
import ToolBar from "./main/toolbar";
import Footer from "./main/footer";
import LogoutModal from "./main/logoutmodal";
import Dashboard from "./dashboard/dashboard"
import List from "./dashboard/list"
import NoMatch from "./main/nomatch"



const Admin = ({match}) =>{
        return (<>
                <div id="wrapper"> 
                    <SideMenu/>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <ToolBar/>
                            <div className="container-fluid">
                                
                                <Route path="/" component={Dashboard} exact />
                                <Route path="/list" component={List} exact/>
                            
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
export default Admin;