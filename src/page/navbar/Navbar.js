import React, { useState } from 'react'
import './navbar.scss'
import {FaHome,FaShapes,FaReceipt } from 'react-icons/fa'
import { MdOutlineDocumentScanner, MdOutlineContactMail} from 'react-icons/md'
import { RiCustomerService2Line} from 'react-icons/ri'
import { FiCodesandbox} from 'react-icons/fi'
import { GiHamburgerMenu} from 'react-icons/gi'
import { ImCross} from 'react-icons/im'
import {motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className="main-navbar">
  
    <Movilenav/>
    <Mobilenav/>

    </div>
  )
}

export default Navbar




function Movilenav() {
   

  return(
    <div className='navbar '>
    
       <Img/>

         <div className="nav-link">
               <Navlink/>
         </div>

          

         
          <Title/>


    </div>
    

  )
}





function Mobilenav() {
  

   const [navTg, setNavTg] = useState(false)



   function click() {
    
     
       setNavTg(true)

   }
   const list = {
     visible: { opacity: 1 , x:  0,
    
    
    },
    hidden: { opacity: 0 , x: 150 },

    transition :{
       type: "tween",
       
       
    }
  }
  
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }


   return(

    <div className="wrap">
    <GiHamburgerMenu    onMouseOver={click}  className='gi1'/>
    
    {
      navTg && 
      <motion.div 
      
      initial="hidden"
      animate="visible"
      variants={list}
      transition="transition" 
     

      className="movile-nav">
      <ImCross onClick={()=> setNavTg(false)}  className='im1'/>
      
      
        <Img/>
        <Navlink/>
        <Title/>



           

                     
      <div  onMouseOver={()=> setNavTg(false)} className="overlay">
      
        
      </div>
              
      </motion.div>


    }

    </div>

   )

}


function Navlink() {

  


  const navdata = [

  {
     icon: <FaHome/>,
     
     name:"home",
     link:"#home"
  },
  {
     icon: <MdOutlineDocumentScanner/>,
     
     name:"about",
     link:"#about"
  },
  {
     icon: <RiCustomerService2Line/>,
     
     name:"service",
     link:"#service"
  },
  { 
     icon: <FiCodesandbox/>,
     
     name:"protfolio",
     link:"#protfolio"
  },
  {
     icon: <FaShapes/>,
     
     name:"testimonaial",
     link:"#testimonaial"
  },
  {
     icon: <FaReceipt/>,
     
     name:"blog",
     link:"#blog"
  },
  {
     icon: <MdOutlineContactMail/>,
     
     name:"contact",
     link:"#contact"
  },
     

  ]

     return(

 
       <ul className='main-link' >
    
            {
     
              navdata.map((item)=>(
                  
                  
                    <li> <span>{item.icon}</span> <a href={item.link}></a> {item.name}</li>
                    
                    
                    ))
                    
                  }
        
           </ul>


     )

  
}



function Img() {
  

  return(
    <div className="nav-img">
           <div className="img">
             <img src={process.env.PUBLIC_URL + '/img/p1.png'} alt="" />
           </div>
            <h3 className='ptitle'>raisul hasan</h3>
       </div>

  )

}



function Title() {
  

  return(
    <h4 className='nav-cp'>@copy--right</h4>
       

  )

}