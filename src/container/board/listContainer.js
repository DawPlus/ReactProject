import React, {useEffect}  from "react";
import { withRouter, Link } from 'react-router-dom';
import {useSelector, useDispatch}   from "react-redux";
import Table from "../../components/table";
import {list as listAction,
        initializeForm
        

} from "../../modules/board";
const ListContainer = () => {

    const dispatch = useDispatch();
    const {list, status} = useSelector(state => state.board)
    

    const getList = () =>{ 
        dispatch(listAction());
    }

    // Page loading Effect 
    useEffect(()=>{
        dispatch(listAction());
    },[dispatch]);


    // Status Handler 
    useEffect(()=>{
        if(status === null) return ;


        switch(status){

                case "LIST_SUCCESS": 
                        console.log("rest")
                        dispatch(initializeForm("status"));
                        break;

                default : break;
        }



    },[dispatch, status]);


    const columns = [
            { title: "seq", field: "SEQ" },
            { title: "제목  ", field: "TITLE"
            ,render: rowData => <Link to={`./list/${rowData.SEQ}`}>{rowData.TITLE}</Link>},

            { title: "내용", field: "CONTENT"},
            {
                title: "ISSUBJECTIVE",
                field: "ISSUBJECTIVE",
              },
              {
                title: "UPDATE_USER",
                field: "UPDATE_USER",
              },
              {
                title: "UPDATE_DATE",
                field: "UPDATE_DATE",
              },
            ];


    return (<>
  
        <Table 
             columns={columns}
              data={list}
              title="임시 게시판 "
        />
    </>);


}
export default withRouter(ListContainer);