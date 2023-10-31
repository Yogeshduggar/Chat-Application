import React from 'react'
import IMG from "../../img/img.png"
import ATTACH from "../../img/attach.png"
export const Input = () => {
  return (
    <div className="input">
        <input type="text" placeholder='Type Something...' />
        <div className="send">
            <img src={IMG} alt="" />
            <input type="file" id="file" style={{display:'none'}} />
            <label htmlFor="file">
                <img src={ATTACH} alt="" />
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}
