import React, { useState } from "react";

const FileComponent = (props) => {
    const {id, onChange , title, onUpload} = props;
    const [titles, setTitle] = useState(title);
    // 파일 체인지 Event 
    const onChangeHandler = e => {
        setTitle(e.target.files[0].name);
        onChange(e);        
    }

    return(<>
        <div className="input-group">
            <div className="custom-file">
                <input type="file" className="custom-file-input" id={id} onChange={onChangeHandler}/>
                <label className="custom-file-label" htmlFor={id}>{titles}</label>
            </div>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={onUpload}>업로드</button>
            </div>
        </div>
    </>);
}
export default FileComponent;