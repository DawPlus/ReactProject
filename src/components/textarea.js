import React from "react";

const TextAreaComponent = (props) => {
    const {id = "textarea",name, value, classes } =props;


    return(<>
        <textarea id={id} name={name} className={classes} >{value}</textarea>

    </>);

}
export default TextAreaComponent;