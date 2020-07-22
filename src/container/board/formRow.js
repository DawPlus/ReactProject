import React from "react";
import TextField from '@material-ui/core/TextField';
import File from "../../components/file";
import Button from '@material-ui/core/Button';
const FormRow = () => {

    const onFileChange = e=> {
         console.log(e);
    
    }
    return (<>   

            <div className="card-body" id="test">
                           
                <div className="form-group">
                    <TextField id="title"       label="제목을 입력해주세요" fullWidth variant="outlined"  autoComplete='off'/>
                </div>
                <div className="form-group"> 
                    <TextField  id="content"    label="내용을 입력해주세요"  rows={4} fullWidth   autoComplete='off'  multiline variant="outlined"/>
                </div>
                <div className="form-group"> 
                    <File id="map" title="UpLoad Map File" onChange={(e)=>{console.log(e);}} onUpload={()=>{}} />
                </div>
                <div className="form-group"> 
                    <File id="hint" title="UpLoad Hint File" onChange={()=>{}} onUpload={()=>{}} />
                </div> 

                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </div>
        </>);

}
export default FormRow;