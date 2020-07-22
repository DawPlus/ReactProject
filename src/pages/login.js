import React  from "react";
import "../login.scss"
//import LoginContainer from "../container/main/loginContainer"

import LoginForm from "../container/main/loginForm"
import LoginSubmit from "../container/main/loginSubmit"
const LoginPage = () => {
    return(<>
        <div id="loginWrap">
            <div  className="main">
                <div className="container">
                    <center>
                        <div className="middle">
                            <div id="login">
                                <div  className="formWraps">
                                    <LoginForm/>   
                                    <LoginSubmit/>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="logo">
                                ADMIN 
                                <div className="clearfix"></div>
                            </div>
                         </div>  
                    </center>
                </div>
            </div>
        </div>
    </>);
}
export default LoginPage;