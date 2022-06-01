import React, { useState } from 'react'
import './question.scss'
import {BsPlusLg} from 'react-icons/bs'
import {FaMinus} from 'react-icons/fa'




const Question = () => {

  const data =[

     {
       name:"what service do i offer"
     },
     {
       name:"how will i complete your project"
     },
     {
       name:"how will you pay me"
     },
     {
       name:"why will you hire for your proejdct"
     },
     {
       name:"how will you get final project"
     },
     {
       name:"what is the process & my time zone"
     },
  ]

 

  return (
    <div  className='question'>
      
       <h1>FAQS</h1>
       <h3>Have any questions?</h3>

       <div className="ques-box">
      
       {
         data.map((item, index)=>(
           <Questionsbox name={item.name} index={index} />

         ))
       }
      
       
       </div>
     
    
    </div>
  )
}

export default Question


function Questionsbox({name, index}) {


    const [drop, setDrop] = useState(false)


   
    const minas =  <FaMinus   onClick={()=> setDrop(false)} />
    const pluse =  <BsPlusLg  onClick={()=> setDrop(true)} />


   

     return(

        <div style={{  border: drop ? '1px solid #d9dae7' : 'none'  }}  className="box-q">
        
        <div  className={`top ${drop ?  ' bop' : 'top'  }`}>
             <h4>{index + 1}. {name} ?</h4>
             {
                 drop ? minas : pluse
             }
        </div>

        {
            drop &&   <div className="bottom">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus reprehenderit culpa facilis. Voluptatibus, quam </p>

          
             
        
        </div>
        }
      
          
        
        </div>
         

     )

}