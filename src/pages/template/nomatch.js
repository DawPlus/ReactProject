import React from "react";
import Doh from "../../img/doh.png";
// 404 Page 
const NoMatch = () => {
    return (<>
          <div className="text-center">
            <div className="error mx-auto" data-text="404">404</div>
            <p className="lead text-gray-800 mb-5">Page Not Found</p>
            <img src={Doh} style={{width:"420px"}} alt="PageNotFount"/>
          </div>
    </>);
}
export default NoMatch;