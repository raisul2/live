import React, { useState } from 'react'
import './protfolio.scss'
const Protfolio = () => {


   const data = [
    {
      img:'/img/i1.jpg',
      cate:'all'
    },
    {
      img:'/img/i2.jpg',
      cate:'ui/ux'
    },
    {
      img:'/img/i3.jpg',
      cate:'branding'
    },
    {
      img:'/img/i4.jpg',
      cate:'design'
    } ,
    {
      img:'/img/i5.jpg',
      cate:'all'
    },
    {
      img:'/img/i6.jpg',
      cate:'design'
    } ,
    {
      img:'/img/i7.jpg',
      cate:'all'
    },
    {
      img:'/img/i8.jpg',
      cate:'design'
    } ,
    {
      img:'/img/i6.jpg',
      cate:'design'
    } ,
 
   ]

 

  return (
    <div id='protfolio'  className='project'>

      <div className="ptoject-top">
       
         <div className="text">
           <h1>my protfolio</h1>
           <h3>awesome works</h3>
         </div>

   
         <Category />
    
      
      </div>


     

      <div className="project-bottom">
      
       {
         data.map((item)=>(
           <Showproject img={item.img}  />

         ))
       }
        
      
      </div>
    
    
    </div>
  )
}

export default Protfolio





function Category() {
  

const data = [
  {
    name:'all'
  },
  {
    name:'ux'
  },
  {
    name:'branding'
  },
  {
    name:'design'
  } 
]

 
  return(
    <ul className="cate-box">
    
    {
      data.map((item)=>(
     <button >{item.name}</button>
      ))
    }
       
    
    </ul> 
  )


}




function Showproject({img}) {
  
  return(

    
       
        <div className="box">
        
            <img src={process.env.PUBLIC_URL + img } alt="" />     
    
             <div className="hover">
                 
              <h1>proceje name</h1>
              <h3>about project</h3>
                  
             </div>
        </div>
    
    
    

  )
}