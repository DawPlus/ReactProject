import React from "react";


const TextareaRow = (props) =>{
    const {title, id, placeholder} = props
    return(<>
            <div className="form-row">
                <div className="name">{title}</div>
                <div className="value">
                    <div className="input-group">
                        <textarea className="textarea--style-6" name={id} placeholder={placeholder}></textarea>
                    </div>
                </div>
            </div>
                
    </>);

}
export default TextareaRow;