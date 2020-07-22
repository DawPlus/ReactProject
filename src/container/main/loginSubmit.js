import React from "react";
import { useDispatch , useSelector}         from "react-redux";
import {login} from "../../modules/auth"

const LoginForm = () => {

    const dispatch = useDispatch();
    const {loginInfo} = useSelector(state => state.auth);
    const loginAction = e =>{
      e.preventDefault();
        dispatch(login({
                id : loginInfo.id
            , password : loginInfo.password
        }));
    }
  
    return(<>
        <span style={{ "display":"inline-block"}}>
            <button onClick={loginAction} className="submitBtn" >Sign In</button>
        </span>
        </>);
      }
export default LoginForm;