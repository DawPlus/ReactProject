import React from "react";

import doh from "../../img/doh.png"

const ImageView = () => {

    return (<>
    
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Map Image View</h6>
                </div>

                <div className="card-body">
                    {doh &&
                        <img src={doh} style={{"width":"100%", "height":"150px"}} alt="map"/>
                    }
                </div>
             </div>

             <div className="card shadow mb-4">

                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Hint Image View </h6>
                </div>

                <div className="card-body">
                    ImageView
                </div>
             </div>
    
    
    
    </>);
}
export default ImageView;