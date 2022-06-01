import React from 'react'
import './service.scss'
import {AiOutlineArrowRight} from'react-icons/ai'
import {GrDxc} from'react-icons/gr'
import {GiTripleBeak} from'react-icons/gi'
import {FaWordpressSimple} from'react-icons/fa'
import {SiSourcegraph} from'react-icons/si'
import {AiTwotoneLock} from'react-icons/ai'
import {CgWebsite} from'react-icons/cg'
const Service = () => {


const data =[
  {
    icon:<GrDxc/>,
    name:"branding"
  },
  {
    icon:<GiTripleBeak/>,
    name:"print design"
  },
  {
    icon:<FaWordpressSimple/>,
    name:"wordpress ninja"
  },
  {
    icon:<SiSourcegraph/>,
    name:"graphic design"
  },
  {
    icon:<AiTwotoneLock/>,
    name:"cyber seceurity"
  },
  {
    icon:<CgWebsite/>,
    name:"web development"
  },
]


  return (
    <div id='service' data-aos="zoom-in-down"  className='service'>

       
         <div className="text">
          <h1>my services</h1>
          <h3>A brief of Offerting Services</h3>
          </div> 
          <div className="service-box">
            
          
          {
            data.map((item)=>(
              <Box name={item.name} icon={item.icon} />

            ))
          }
          

            </div>
         
         
     
    
    </div>
  )
}

export default Service


function Box( {name , icon}) {
    

     return(
         <div  className="s-box">
         <img src={ process.env.PUBLIC_URL + '/img/d1.svg' } alt="" />
            
           <span>{icon}</span>

           <h2>
           {name}</h2>
           <div className="p">
           <p><AiOutlineArrowRight/> Lorem ipsum dolor sit </p>
           <p><AiOutlineArrowRight/> Lorem ipsum dolor sit </p>
           <p><AiOutlineArrowRight/> Lorem ipsum dolor sit </p>
           </div>
           
         </div>
     )

}