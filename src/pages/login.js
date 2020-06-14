import React, { useEffect,useState } from "react";

import "../login.scss"
import { useDispatch , useSelector} from "react-redux";
import {login, changeField, initializeForm} from "../modules/auth"
import { insertUser } from '../modules/user';




const LoginPage = ({ history }) => {
  const [error, setError] = useState(null);
  const { form, auth, userInfo, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    userInfo : auth.userInfo,
    authError: auth.authError,
    user: user.user,
  }));
    console.log(error);
  const dispatch = useDispatch();
  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      setError('로그인 실패');
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      dispatch(insertUser(userInfo));
    }
  }, [auth,userInfo, authError, dispatch]);



  const getUser = e =>{
    e.preventDefault();
    dispatch(login({
            userid : form.userid
        , password : form.password
    }));
  }

  useEffect(() => {
    if (user) {
      history.push('/main');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, user]);

    return(<>
    <div id="login">
             <div  className="main">
                <div className="container">
                    <center>
                      <div className="middle">
                       <div id="login">
                        <div  className="formWraps">
                      
                            <p>
                                <span className="fa fa-user"></span>
                                <input type="text" placeholder="Username" name="userid" value={form.userid} onChange={onChange} required />
                            </p> 
                            <p>
                                <span className="fa fa-lock"></span>
                                <input type="password" placeholder="Password" name="password" value={form.password}  onChange={onChange} required />
                            </p>
                            <div>
                                <span style={{"width":"48%" ,"textAlign":"left","display": "inline-block"}}>
                                    <a className="small-text" href="/#">Forgot password?</a>
                                </span>
                                <span style={{"width":"50%","textAlign":"right",  "display":"inline-block"}}>
                                  <button onClick={getUser} className="submitBtn" >Sign In</button>
                                  
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
export default LoginPage;