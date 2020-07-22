import React from "react";

import FormRow from "../../container/board/formRow"
import doh from "../../img/doh.png"
import Switch from '@material-ui/core/Switch';
import FormControlLabel from "@material-ui/core/FormControlLabel";

const NewPage = () => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    return(<>
            <div className="row" id="regForm">
                {/* 입력 폼 */}
                <div className="col-xl-9 col-lg-9">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Question</h6>
                            <div>
                                <FormControlLabel
                                    control={
                                    <Switch
                                        checked={state.checkedB}
                                        onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                    }
                                    label="Type"
                                />
                            </div>
                        </div>                        
                        <div className="card-body" id="test">
                            <FormRow/>
                            <button type="submit" className="btn text-center btn-blue">Send Message</button>
                        </div>
                    </div>
                </div>
                {/* 입력 폼  끝*/}
                {/* 이미지 미리보기  */}
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
                {/* 이미지 미리보기  끝*/}
            </div>
    </>);

}
export default NewPage;