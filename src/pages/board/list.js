import React from "react";
import Table from "../../components/table";
const ListPage = () => {
    const columns = [
        { title: "Adı", field: "name" },
    { title: "Soyadı", field: "surname" 
    ,render: rowData => <span style={{background:"tomato"}}>{rowData.surname}</span>},
        { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
        {
          title: "Doğum Yeri",
          field: "birthCity",
          lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
        },
      ];

    const data = [
        {
          name: "Mehmet",
          surname: "Baran",
          birthYear: 1987,
          birthCity: 63,
        },
      ]


    return (<>
        <Table 
             columns={columns}
              data={data}
              title="Demo Title"
        />
    </>);


}
export default ListPage;