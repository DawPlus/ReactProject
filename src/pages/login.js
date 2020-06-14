import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../login.scss"
import { useDispatch , useSelector} from "react-redux";
import {getUser} from "../modules/auth"
const LoginPage = () => {

  const user = useSelector(state => state.auth.user);
  
  const dispatch = useDispatch();

  const getUSer = () =>{
    dispatch(getUser());
  }

useEffect(()=>{
  console.log(user)
}, [dispatch, user])

    return(<>
    <div id="login">
             <div  className="main">
                <div className="container">
                    <center>
                      <div className="middle">
                       <div id="login">
                        <form action="javascript:void(0);" method="get" href="/#">
                          <fieldset className="clearfix">
                            <p ><span className="fa fa-user"></span><input type="text"  Placeholder="Username" required /></p> 
                            <p><span className="fa fa-lock"></span><input type="password"  Placeholder="Password" required /></p>
                            <div>
                                <span style={{"width":"48%" ,"text-align":"left","display": "inline-block"}}>
                                    <a className="small-text" href="#">Forgot password?</a>
                                </span>
                                <span style={{"width":"50%","text-align":"right",  "display":"inline-block"}}>
                                  <input type="submit" value="Sign In" onClick={getUSer}/>
                                </span>
                            </div>
                          </fieldset>
                           <div className="clearfix"></div>
                        </form>
                        <div className="clearfix"></div>
                      </div> 
                      <div className="logo">LOGO
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