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
                    신규
                </Button>

        <ListContainer/>
    </>);


}
export default withRouter(ListPage);