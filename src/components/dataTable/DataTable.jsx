import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import "./dataTable.scss"
import { Link } from 'react-router-dom';

const DataTable = (props) => {

  const handleDelete=(id)=>{
    //delletethe    item
    console.log(id+ "has  been deleted!")





  }


    // const columns = [
    //     { field: 'id', headerName: 'ID', width: 90 },
    //     {
    //       field:'avatar',
    //       headerName:"Avatar",
    //       width:150,
    //       renderCell:(params)=>{
    //         return <img src={params.row.img || "/noavatar.png"} alt=""  />
      
    //       }
    //     },
        
    //     {
    //       field:'status',
    //       headerName:'Status',
    //       width:100,
    //       type:"boolean",

    //     }    
    //     ,
    //     {
    //       field: 'firstName',
    //       headerName: 'First name',
    //       width: 150,
    //       editable: true,
    //     },
    //     {
    //       field: 'lastName',
    //       headerName: 'Last name',
    //       width: 150,
    //       editable: true,
    //     },
    //     {
    //       field: 'age',
    //       headerName: 'Age',
    //       type: 'number',
    //       width: 110,
    //       editable: true,
    //     },
    //     {
    //       field: 'fullName',
    //       headerName: 'Full name',
    //       description: 'This column has a value getter and is not sortable.',
    //       sortable: false,
    //       width: 160,
    //       valueGetter: (params) =>
    //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    //     },{
    //       field:'action',
    //       headerName:"Actions",
    //       width:150,
    //       renderCell:(params)=>{
    //         return <div className="action">
    //           <Link to={`${props.slug}/${params.row.id}`} className="view"><img src="/view.svg" alt="" className='action' /></Link>
    //           <Link className="delete"><img src="/delete.svg" alt="" className='action'  onClick={()=>handleDelete(params.row.id)}/></Link>
    //         </div>
      
    //       }
    //     },
    //   ];
    //   const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35,status:true },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //   ];
  return (
    <div className='dataTable'>
         <DataGrid
            className="dataGrid"
            rows={props.rows}
            columns={props.columns}
            initialState={{
            pagination: {
                paginationModel: {
                pageSize: 10,
                },
            },
            }}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
               toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
          },
        }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            disableColumnFilter
            disableDensitySelector
            disableColumnSelector



      />
    </div>
  )
}

export default DataTable