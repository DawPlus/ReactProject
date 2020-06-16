import React from "react";


const InputComponent = props => {
        const {type = "text", value , onChange , name, placeholder, isRequired = false} = props;
    return(<>

        {isRequired ? 
            <input  type={type} 
                    placeholder={placeholder||""}
                    name={name}
                    value={value} 
                    onChange={onChange}
                    required
                    />
           :
            <input  type={type} 
                    placeholder={placeholder||""}
                    name={name}
                    value={value} 
                    onChange={onChange}
                    />
           }
    </>);


}
export default InputComponent;