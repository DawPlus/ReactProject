import React from "react";
import { useDispatch , useSelector}         from "react-redux";
import {login} from "../../modules/auth"
import Button from '@material-ui/core/Button';
const LoginForm = () => {

    const dispatch = useDispatch();
    const {loginInfo} = useSelector(state => state.auth);
    const loginAction = e =>{
      e.preventDefault();
        dispatch(login(loginInfo));
    }
  
    return(<>
        <span style={{"display":"inline-block"}}>
            <Button variant="contained" color="primary"  onClick={loginAction}>
                Sign In
            </Button>
        </span>
        </>);
      }
export default LoginForm;