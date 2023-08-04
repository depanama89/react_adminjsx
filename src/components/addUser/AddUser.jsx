import React from 'react'
import "./adduser.scss"

const AddUser = (props) => {
    const handleSubmit =(e)=>{
        e.preventDefault()
    }
  return (
    <div className='adduser'>
        <div className="modalUser">
            <span onClick={()=>props.setOpen(false)} className='close'>X</span>
            <h1>Add new {props.slug}</h1>
            <form onSubmit={()=>handleSubmit}>
                { //on est entrain de filtre le id et image 
                    props.columns
                    .filter(item=>item.field !=="id" && item.field !=="img")
                    .map((column)=>(
                        <dv className="item">
                            <label>{column.headerName}</label>
                            <input type={column.type}  placeholder={column.field}/>
                        </dv>

                    ))
                }
                
            </form>
            <button>Send</button>

        </div>
    </div>
  )
}

export default AddUser