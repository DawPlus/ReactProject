import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      //width: '42%',
    },
  },
}));

const InputFileds = (props) => {
    const classes = useStyles();
    const {max, name} = props;
    const [cnt , setCnt] = useState(1);
    const addInput = () => {
        if(cnt >= max) return;
         setCnt(cnt+ 1);
    }

return(<>
        <Button variant="contained" onClick={addInput}>+Add</Button>
        
        <form  className={classes.root}  noValidate autoComplete="off">
            {[...Array(cnt)].map((u, i) => 
              <TextField key={i} id={`${name}_${i+1}`} label={`보기${i+1}`} size="small" />
            )}
        </form>
</>);

}
export default InputFileds;