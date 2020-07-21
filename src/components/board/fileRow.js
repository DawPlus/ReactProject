import React from "react";


const InputRow = (props) =>{
    const {title, id, desc, fileSelect } = props
    return(<>
            <div className="form-row">
                <div className="name">{title}</div>
                <div className="value">
                    <div className="input-group js-input-file">
                        <input className="input-file" type="file" name={id} id={id} onChange={fileSelect}/>
                        <label className="label--file" htmlFor={id}>Choose file</label>
                        <span className="input-file__info">No file chosen</span>
                    </div>
                </div>
            </div>
                                
    </>);

}
export default InputRow;