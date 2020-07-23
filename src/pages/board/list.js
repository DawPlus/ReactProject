import React from "react";
import ListContainer from "../../container/board/listContainer"
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
const ListPage = ({match, history}) =>{

    const onClick= ()=>{

        history.push(`${match.path}new`)

    }
    return (<>
            <Button variant="contained" color="primary" onClick={onClick}>
                 <i className="fas fa-download fa-sm text-white-50"></i>신규
            </Button>

        <ListContainer/>
    </>);


}
export default withRouter(ListPage);