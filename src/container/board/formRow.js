import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const FormRow = () => {
   
    return (<>   

            <div className="card-body">  
                <div className="form-group">
                    <TextField id="title"       label="제목을 입력해주세요" fullWidth variant="outlined"  autoComplete='off'/>
                </div>
                <div className="form-group"> 
                    <TextField  id="content"    label="내용을 입력해주세요"  rows={4} fullWidth   autoComplete='off'  multiline variant="outlined"/>
                </div>
                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </div>
        </>);

}
export default FormRow;