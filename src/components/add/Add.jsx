import React from 'react'
import "./add.scss"

const Add = (props) => {

    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    <div className='add'>
        <div className="modal">
            <span className="close"  onClick={()=>props.setOpen(false)}>X</span>
            <h1>Add new {props.slug}</h1>
            <form onSubmit={handleSubmit}>
                {
                    props.columns
                    .filter(item=>item.field !=="id" && item.field !=="img" )
                    .map((column)=>(
                        <div className="item">
                            <label htmlFor="">{column.headerName}</label>
                            <input type={column.type} placeholder={column.field} />
                        </div>
                    ))
                }

            </form>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Add