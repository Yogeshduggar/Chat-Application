import React from 'react'
import CAM from "../../img/cam.png"
import ADD from "../../img/add.png"
import MORE from "../../img/more.png"
import { Messages } from './Messages'
import { Input } from './Input'
export const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatinfo">
        <span> Jane </span>
        <div className="chaticon">
          <img src={CAM} alt="" />
          <img src={ADD} alt="" />
          <img src={MORE} alt="" />
        </div>
        
      </div>
      <Messages/>
        <Input />
    </div> 
  )
}
