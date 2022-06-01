import React from 'react'
import './textomonial.scss'
import {FaFacebook} from 'react-icons/fa'
import {GiContract} from 'react-icons/gi'
import {MdChromeReaderMode} from 'react-icons/md'
import {SiMaterialdesign} from 'react-icons/si'
import {FaPython , FaUserGraduate , FaGraduationCap} from 'react-icons/fa'
import {SiWebmoney} from 'react-icons/si'
import Skill from '../skill/Skill'


const Testomonial = () => {

  const data = [

    {
      icon:<SiMaterialdesign/>,
      name:"ux/ui designer"
    },
    {
      icon:<FaPython/>,
      name:"python developer"
    },
    {
      icon:<SiWebmoney/>,
      name:"web Developer"
    },
   
  
  ]
  const data2 = [

    {
      icon:<FaUserGraduate/>,
      name:"MSC in sce"
    },
    {
      icon:<FaGraduationCap/>,
      name:"BSc in CSE"
    },
    {
      icon:<MdChromeReaderMode/>,
      name:"high school diploma"
    },
 
  
  ]


  return (
    <div    className='testomonial'>

      <div  className="t-text">
            <h1>my resume</h1>
            <h3>Education & Experience</h3>
      </div>
          
      <div data-aos="zoom-in-up"  data-aos-delay="500"  className="t-box">

      <div   className="left">
      
  
      {
        data.map((item)=>(
          <Left icon={item.icon} name={item.name} />

        ))
      }
  
       
       </div>
       
      <div className="right">
      
    
      {
        data2.map((item)=>(
          <Left icon={item.icon} name={item.name} />

        ))
      }
  
       
       </div>
       
      
     
      </div>
    

       <Skill/>

       <button>download cv</button>

    </div>
  )
}

export default Testomonial



const  Left = ({icon, name}) => {
  
  return(
   
        
         <div  className="t-box-m">
              <span>
                {icon}
              </span>
         
              <div  className="text">
                 <h1>{name}</h1>
                  <h3>Apple Inc (2017 - 2020)</h3>
                  <p>Contrary the on way yollis pellentesque pellentesque feugiat risus met.</p>
              </div>

         </div>
         
      
  
  )


}