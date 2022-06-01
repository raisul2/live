import React from 'react'
import './work.scss'
import {FaPlay} from 'react-icons/fa'
const Work = () => {
  return (
    <div className="work-wrap">
    
 
    <div data-aos="flip-down" className='work'>
      <img src={process.env.PUBLIC_URL + '/img/d2.jpg'} alt="" />
      <h1>Interested in working with me?</h1>
       <div className="work-icon">
          <span><FaPlay/></span>

          <button>hire me</button>

       </div>
    
    </div>
    </div>
  )
} 

export default Work