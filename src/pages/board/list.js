import React from "react";
import {useSelector } from "react-redux";

const ListPage = () => {
    const {board} = useSelector(state=> state) 
    console.log(board);
    return (<>
        List Page ;
    </>);


}
export default ListPage;