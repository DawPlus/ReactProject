import React from "react"
import { useSelector } from "react-redux";


const Test = (props) =>{
    const {username} = props;
    const {board} = useSelector(state=> state);

    console.log(board);

    return(<>
            <p>
                {username || "Hello World"}
            </p>
    </>);


}
export default Test;