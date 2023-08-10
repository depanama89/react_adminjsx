import React from 'react'
import "./single.scss"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const Single = (props) => {
  
  return (
    <div className='single'>
      <div className="views">
        <div className="info">
          <div className="topInfo">
            {
              props.img && <img src={props.img}/>
            }
            <h1>{props.title}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            {
              props.info.map((item)=>(
              <div className="item" key={item}>
                <span className="itemTitle">Username : </span>
                <span className="itemValue">{item.username}</span>
                <span className="itemTitle">Email : </span>
                <span className="itemValue">{item.email}</span>
                <span className="itemTitle">Phone : </span>
                <span className="itemValue">{item.phone}</span>
                <span className="itemTitle">Status : </span>
                <span className="itemValue">{item.status}</span>
              </div>

              ))
            }
            
          </div>
          
        </div>
        <hr/>
        {
          props.chart && <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {
                  props.chart.dataKeys.map((dataKey)=>(
                    
                    <Line type="monotone" dataKey={dataKey.name} stroke={dataKey.color} activeDot={{ r: 8 }} />
                  ))
                }
                
              </LineChart>
            </ResponsiveContainer>
      </div>
      }
      </div>
     
      <div className="activities">
        <h2>Latest  Activities</h2>
        {props.activities && (
           <ul>
            { props.activities.map((activity)=>(
              <li key={activity.text}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
            </li>
            ))
              
            }          
        </ul>
        )}
      </div>
    </div>
  )
}

export default Single