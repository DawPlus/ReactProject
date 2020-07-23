import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const ViewPage = () => {
    
    const [cnt , setCnt] = useState(1);
    const addInput = () => {
         setCnt(cnt+ 1);
    }

    return(<>
        
        <Button variant="contained" onClick={addInput}>Default</Button>
        <form noValidate autoComplete="off">
        {[...Array(cnt)].map((u, i) => 
                <TextField id={`input_${i+1}`} label={`보기${i+1}`} size="small"/>
        )}     
            
        </form>


    </>);

}
export default ViewPage;