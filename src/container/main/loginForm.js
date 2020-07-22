import React, { useEffect} from "react";
import { useDispatch , useSelector}         from "react-redux";
import {withRouter }                        from 'react-router-dom';
import {login ,changeField, initializeForm} from "../../modules/auth"
import TextField from '@material-ui/core/TextField';

const LoginForm = ({ history }) => {

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
        </>);
      }
export default withRouter(LoginForm);