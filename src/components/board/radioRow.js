import React from "react";


const RadioRow = (props) =>{
    const {title, id } = props
    return(<>
            <div className="form-row">
                <div className="name">{title}</div>
                <div className="value">
                    <div className="input-group">
                        <label htmlFor={id}>주관식</label>
                        <input type="radio" name={id} value="Y"/>
                    </div>
                    
                </div>
            </div>
                                
    </>);

}
export default RadioRow;