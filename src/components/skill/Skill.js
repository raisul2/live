import React from 'react'
import'./skill.scss'
const Skill = () => {


    const data = [
         
        {
            name:'Wordpress Ninja',
            number: 85
        },
        {
            name:'UX/UI Design',
            number: 95
        },
         
        {
            name:'react.js',
            number: 90
        },
        {
            name:'english',
            number: 70
        },
        {
            name:'french',
            number: 25
        },
        {
            name:'arabic',
            number: 55
        },
         

    ]


  return (
  
    
      
    <div className="skil-wrap">
    
    {
        data.map((item)=>(
            <Ski name={item.name} number={item.number} />
            
            ))
        } 
        
 </div>
  

    
  
  )
}

export default Skill



function Ski({name, number}) {




    
    return(
        <div className="skills-box">
           
        <div className="text">
        <h5>{name}</h5>
        <h5>{number}%</h5>
        </div>

          <div data-aos="fade-left"  className="line">
           <div 
           style={{ width:`${number}%` }}
           
           className="line-color"></div>
          </div>
        
        </div>
    )
}