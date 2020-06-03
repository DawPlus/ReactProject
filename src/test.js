import React from "react"


const Test = (props) =>{
    const {username} = props;
    return(<>
            <p>
                {username || "Hello World"}
            </p>
    </>);


}
export default Test;