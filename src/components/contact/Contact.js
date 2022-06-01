import React from 'react'
import './contact.scss'
import {FaWhatsapp , FaSearchLocation, FaMale} from 'react-icons/fa'
import {ImLocation} from 'react-icons/im'
import {MdOutgoingMail} from 'react-icons/md'

const Contact = () => {
  return (
    <div  id='contact'  className='contact'>

      <img src={ process.env.PUBLIC_URL + '/img/d3.svg'} alt="" />

      <div className="text">
        <h1>contact us</h1>
        <h3>get in touch</h3>
      
      </div>
    <div className="box">
    
    

      <div className="input">
       
       <input placeholder='Subject' type="text" />
       <input placeholder='Your name' type="text" />
       <input placeholder='Your Email' type="text" />
       <input placeholder='Drop Message' type="text" />
        
      
       <button>Send Me</button>

      </div>

      <div className="icons">
       
      <span><MdOutgoingMail/> raiusl@gmail.com</span>
      <span><FaWhatsapp/>+32-1849320</span>
      <span><ImLocation/>bangladesh , rajshahi, bogra</span>
      
      
      </div>
      
      </div>
    
    </div>
  )
}

export default Contact