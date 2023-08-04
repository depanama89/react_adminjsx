import { topDealUsers } from "../../data"
import React from 'react'
import "./topdeal.scss"

const Topdeal = () => {
  return (
    <div className='topdeal'>
        <h1>Top Deal</h1>
        <div className="list">
            {
                topDealUsers.map(user=>(
                    <div className="listItem" key={user.id}>
                        <div className="user">
                            <img src={user.img} alt="" className="ImgUser" />
                            <div className="userTexts">
                                <span className="username">{user.username}</span>
                                <span className="email">{user.email}</span>
                            </div>
                        </div>
                        <span className="amount">${user.amount}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Topdeal