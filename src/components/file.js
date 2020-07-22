import React from "react";

const FileComponent = (props) => {
    const {id, onChange , title, onUpload} = props;
    return(<>
        <div className="input-group">
            <div className="custom-file">
                <input type="file" className="custom-file-input" id={id} onChange={onChange}/>
                <label className="custom-file-label" htmlFor={id}>{title}</label>
            </div>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={onUpload}>업로드</button>
            </div>
        </div>
    </>);
}
export default FileComponent;