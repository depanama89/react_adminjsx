import React from 'react'
import "./home.scss"
import Topdeal from '../../components/topdeal/Topdeal'
import Chatbox from '../../components/chatbox/Chatbox'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data'
import BarChartBox from '../../components/barChartBox/BarChartBox'
import PieCartBox from '../../components/pieCartBox/PieCartBox'
import BigChartBox from '../../components/bigChartBox/BigChartBox'

const Home = () => {
  return (
    <div className='home'>
      <div className="box box1">
        <Topdeal/>
      </div>
      <div className="box box2"><Chatbox {...chartBoxUser}/></div>
      <div className="box box3"><Chatbox  {...chartBoxProduct}/></div>
      <div className="box box4"><PieCartBox/></div>
      <div className="box box5"><Chatbox {...chartBoxConversion}/></div>
      <div className="box box6"><Chatbox {...chartBoxRevenue}/></div>
      <div className="box box7"><BigChartBox/></div>
      <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>
    </div>
  )
}

export default Home