import React,{forwardRef } from "react";
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import EditIcon from '@material-ui/icons/Edit';
const TableComponent = (props) => {
    
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
         
    };

    const {columns , data, title} = props;

    return (<>
    
        <MaterialTable
            icons={tableIcons}
            columns={columns}
            data={data}
            title={title}
            localization={{
                pagination: {
                    labelDisplayedRows: '{from}-{to} / {count}'
                },
                toolbar: {
                    nRowsSelected: '{0}  Rows(s) 선택되었습니다.'
                },
                header: {
                    actions: 'Action'
                },
                body: {
                    emptyDataSourceMessage: '조회된 데이터가 없습니다. ',
                    filterRow: {
                        filterTooltip: 'Filter'
                    }
                }
            }}
            actions={[
                {
                  icon: EditIcon,
                  tooltip: 'Save User',
                  onClick: (event, rowData) => window.alert("You saved " + rowData.name)
                },
                rowData => ({
                  icon: 'delete',
                  tooltip: 'Delete User',
                  onClick: (event, rowData) => window.confirm("You want to delete " + rowData.name),
                  disabled: rowData.birthYear < 2000
                })
              ]}
        />
        </>);
}
export default TableComponent;