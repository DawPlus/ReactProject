import React from "react";


const InputComponent = props => {
        const {type = "text", value , id, onChange, classes , name, placeholder, isRequired = false} = props;
    return(<>

        {isRequired ? 
            <input  type={type} 
                    id={id}
                    placeholder={placeholder||""}
                    name={name}
                    value={value} 
                    onChange={onChange}
                    required
                    className={classes}
                    />
           :
            <input  type={type} 
                    id={id}
                    placeholder={placeholder||""}
                    name={name}
                    value={value} 
                    onChange={onChange}
                    className={classes}
                    />
           }
    </>);


}
export default InputComponent;