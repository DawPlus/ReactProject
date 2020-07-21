import React from "react";


const InputRow = (props) =>{
    const {title, id, placeholder} = props
    return(<>
            <div className="form-row">
                <div className="name">{title}</div>
                <div className="value">
                    <input className="input--style-6" type="text" name={id} id={id}  placeholder={placeholder}/>
                </div>
            </div>
    </>);

}
export default InputRow;