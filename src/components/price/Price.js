import React from 'react'
import './price.scss'
import {GiCheckMark} from 'react-icons/gi'
import {RiFolder2Fill} from 'react-icons/ri'
import {FaRegNewspaper} from 'react-icons/fa'
import {MdMarkunreadMailbox} from 'react-icons/md'
const Price = () => {

  const data =[

    {
      icon: <RiFolder2Fill/>,
      name:"design package"
    },
    {
      icon: <FaRegNewspaper/>,
      name:"advance"
    },
    {
      icon: <MdMarkunreadMailbox/>,
      name:"ecommerce solution"
    },
  ]

  return (
    <div className='price'>
     
    <div className="text">
      <h1>my price</h1>
      <h3>how much i charge?</h3>
    
    </div>

    <div className="price-box">

    {
      data.map((item)=>(
        <Pricebox icon={item.icon} name={item.name} />

      ))
    }
   
 
    </div>
    </div>
  )
}

export default Price



function Pricebox({icon, name}) {
    

    return(
        
        <div className="pp-box">
         
         <span className='icons'>{icon}</span>
         <h4>{name}</h4>
         <h1>$99</h1>

          <div  className=' title-bo'>
           
           <span><GiCheckMark/><p>buisnes hostion</p></span>
           <span><GiCheckMark/><p>buisnes hostion</p></span>
           <span><GiCheckMark/><p>buisnes hostion</p></span>
           <span><GiCheckMark/><p>buisnes hostion</p></span>
           <span><GiCheckMark/><p>buisnes hostion</p></span>
          

          </div>

          
            
           
<button>buy now</button> 
 


        </div>

    )

}