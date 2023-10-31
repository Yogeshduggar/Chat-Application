import React from 'react'

export const Search = () => {
  return (
    <div className="search">
      <div className="searchform">
        <input type="text"  placeholder='Find a User'/>
      </div>
      <div className="userchat">
        <img src="https://images.pexels.com/photos/18650061/pexels-photo-18650061/free-photo-of-woman-sitting-and-working-on-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>Jane</span>
      </div>
    </div>
  )
}
