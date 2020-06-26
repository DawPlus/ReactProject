import React from "react";
import {useSelector } from "react-redux";


const List = () => {
   
    const {test} = useSelector(state => state.test);
    console.log(test)
    
    const helloWorld = () => {
    
    }
 
    return (<>
        <button onClick={helloWorld}>눌러보아욥</button>
        List Page ;
    </>);



}
export default List;