import React from "react";
import {useSelector, useDispatch } from "react-redux";
import {testAPi} from "../../modules/test";

const List = () => {
   
    const {test} = useSelector(state => state.test);
    console.log(test)
    const dispatch = useDispatch();
    const helloWorld = () => {
        dispatch(testAPi());
        console.log("hello world");
    }
 
    return (<>
        <button onClick={helloWorld}>눌러보아욥</button>
        List Page ;
    </>);



}
export default List;