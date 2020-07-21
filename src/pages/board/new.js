import React from "react";
import "../../form.scss"
import FormRow from "../../container/board/formRow"
import doh from "../../img/doh.png"
const NewPage = () => {


    return(<>
            
            <div className="row">


                    <div className="col-xl-9 col-lg-9">
                        <div className="card shadow mb-4">

                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Question</h6>
                        </div>
                        
                        <div className="card-body" id="newForm">
                         
                            
                               
                              <FormRow/>

                         
                        </div>
                        </div>
                    </div>


                    <div className="col-xl-3 col-lg-3">
                        <div className="card shadow mb-4">

                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Map Image View</h6>
                            </div>

                            <div className="card-body">
                                <img src={doh} style={{"width":"100%", "height":"150px"}}/>
                            </div>
                        </div>
                        <div className="card shadow mb-4">

                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Hint Image View </h6>
                            </div>

                            <div className="card-body">
                                imageViewer
                            </div>
                        </div>
                    </div>
                </div>
    </>);

}
export default NewPage;