import React, { useState } from 'react'
import "./user.scss"
import DataTable from '../../components/dataTable/DataTable'
import AddUser from '../../components/addUser/AddUser'
import { Link } from 'react-router-dom'
import Add from '../../components/add/Add'

const Users = () => {
  const [open,setOpen]=useState(false)

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field:'img',
      headerName:"Avatar",
      width:150,
      renderCell:(params)=>{
        return <img src={params.row.img || "/noavatar.png"} alt=""  />
  
      }
    },
    
    {
      field:'status',
      headerName:'Status',
      width:100,
      type:"boolean",

    }    
    ,
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },{
      field:'action',
      headerName:"Actions",
      width:150,
      renderCell:(params)=>{
        return <div className="action">
          <Link to={`${params.row.id}`} className="view"><img src="/view.svg" alt="" className='action' /></Link>
          <Link className="delete"><img src="/delete.svg" alt="" className='action'  onClick={()=>handleDelete(params.row.id)}/></Link>
        </div>
  
      }
    },
  ];
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35,status:true },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add new user</button>
      </div>

      <DataTable slug="users"  columns={columns} rows={rows}/>
      {open && <Add slug="users" columns={columns}  setOpen={setOpen}/>}
    </div>
  )
}

export default Users