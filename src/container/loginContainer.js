import React, { useEffect,useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import {login ,changeField, initializeForm} from "../modules/auth"
import Input from "../components/input";
import "../login.scss"
import {withRouter } from 'react-router-dom';
import { insertUser } from "../modules/user";
const LoginContainer = ({ history }) => {


    const dispatch = useDispatch();
  
    const [error, setError] = useState(null);
    const {loginInfo, authrization, userInfo, authError } = useSelector(state => state.auth);
    const {user} = useSelector(state => state.user);  


    useEffect(() => {
      dispatch(initializeForm('loginInfo'));
    }, [dispatch]);
  
    useEffect(() => {
    
      if (authError) {
          setError('로그인 실패');
          console.log(error);
          return;
      }
      if (authrization) {
        console.log('로그인 성공');
        dispatch(insertUser(userInfo));
    
      }
   
    }, [authrization, authError, error, userInfo, dispatch]);
  
  
    useEffect(() => {
      if (user) {
        try {
          localStorage.setItem("authrization", authrization);
          history.push("/main")
        } catch (e) {
          console.log('localStorage is not working');
        }
      }
    }, [history, user, authrization]);
  
  
    const loginAction = e =>{
      e.preventDefault();
        dispatch(login({
                userid : loginInfo.userid
            , password : loginInfo.password
        }));
    }
  
  
    // 인풋 변경 이벤트 핸들러
    const onChange = e => {
      const { value, name } = e.target;
      dispatch(
        changeField({
          form: 'loginInfo',
          key: name,
          value,
        }),
      );
    };


    return(<>
  
            <div id="loginWrap">
                <div  className="main">
                    <div className="container">
                        <center>
                            <div className="middle">
                            <div id="login">
                                <div  className="formWraps">
                                    <p>
                                        <span className="fa fa-user"></span>
                                        <Input  name="userid"
                                                placeholder = "User Id"
                                                value={loginInfo.userid}
                                                onChange={onChange}
                                                required={true}
                                                />
                                    </p> 
                                    <p>
                                        <span className="fa fa-lock"></span>
                                        <Input  type="password"
                                                name="password"
                                                placeholder = "Password"
                                                value={loginInfo.password}
                                                onChange={onChange}
                                                required={true}
                                                />
                                        
                                    </p>
                                    <div>
                                        <span style={{"width":"48%" ,"textAlign":"left","display": "inline-block"}}>
                                            <a className="small-text" href="/#">Forgot password?</a>
                                        </span>
                                        <span style={{"width":"50%","textAlign":"right",  "display":"inline-block"}}>
                                            <button onClick={loginAction} className="submitBtn" >Sign In</button>
                                        </span>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
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
export default withRouter(LoginContainer);