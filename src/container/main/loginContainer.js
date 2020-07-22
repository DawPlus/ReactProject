import React, { useEffect}       from "react";
import "../../login.scss"
import { useDispatch , useSelector}         from "react-redux";
import {withRouter }                        from 'react-router-dom';
import {login ,changeField, initializeForm} from "../../modules/auth"
import TextField from '@material-ui/core/TextField';

const LoginContainer = ({ history }) => {

    const dispatch = useDispatch();
    const {loginInfo, authrization, tokken, userInfo, authError } = useSelector(state => state.auth);
    
    useEffect(() => {
      dispatch(initializeForm('loginInfo'));
    }, [dispatch]);
  
    useEffect(() => {
    
      if (authError) {
          console.log(authError);
          return;
      }
      if (authrization) {
          sessionStorage.setItem("tokken",tokken);
          console.log('로그인 성공');
          history.push("/main");
      }
   
    }, [authrization, authError, userInfo, history, tokken, dispatch]);
  
  
    // useEffect(() => {
    //   if (user) {
    //     try {
    //       sessionStorage.setItem("authrization", authrization);
    //       sessionStorage.setItem("tokken",tokken);
    //       history.push("/main")
    //     } catch (e) {
    //       console.log('localStorage is not working');
    //     }
    //   }
    // }, [history, user, authrization, tokken]);
  
  
    const loginAction = e =>{
      e.preventDefault();
        dispatch(login({
                id : loginInfo.id
            , password : loginInfo.password
        }));
    }
  
  
    // 인풋 변경 이벤트 핸들러
    const onChange = e => {
      const { value, name } = e.target;
      console.log(e.target.value);
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
                                  
                                    <div style={{"marginBottom":"25px"}}>
                                        <TextField
                                            name="id"
                                            label="USER ID"
                                            value={loginInfo.id}
                                            onChange={onChange}
                                            autoComplete='off'
                                        />
                                    </div>
                                    <div style={{"marginBottom":"25px"}}>
                                        <TextField
                                        type="password"
                                        label="PassWord"
                                        name="password"
                                        value={loginInfo.password}
                                        onChange={onChange}
                                        />
                                    </div>
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