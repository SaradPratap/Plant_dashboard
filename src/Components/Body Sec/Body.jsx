import React from 'react'
import './body.css'
import Top from '../Body Sec/Top Section/Top'
import Activity from '../Body Sec/Activity Section/Activity'
import Listing from '../Body Sec/Listing Section/Listing'



const Body = () => {
  return (
    <div className='mainContent'>
      <Top/>
      <div className='middle flex'>
      <Activity/>
      </div>
      <div className='bottom flex'>
        <Listing/>
      </div>
    </div>
  )
}

export default Body