import React from "react";
import {withRouter} from 'react-router-dom';
import Confirm from "../../components/confirm";

import {logout} from "../../modules/auth";
import { useDispatch } from "react-redux";

const LogoutContainer = ({history}) => {

    const dispatch = useDispatch();

    
    const onAccept = () => {
        sessionStorage.clear();
        window.$('#logout_modal').modal("hide");
        // 로그아웃 
        dispatch(logout());
        console.log("logout");   
    }



    return(<>
        <Confirm 
            id="logout"
            title ="Logout"
            content ="로그아웃 하시겠습니까?"
            acceptTitle="확인"  
            onAccept ={onAccept}
        />
    </>);



}
export default withRouter(LogoutContainer);