import React from 'react'
import {FaFacebook, FaLinkedinIn, FaInstagram, FaTwitter} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

 import {motion} from 'framer-motion'


const Home = () => {
  return (
    <div id='home' className="home-bg">
     <motion.img
     
       initial={{z:-100, opacity:0 }}
       animate={{z:0,opacity:1}}
       transition={{delay:3, duration:2 }}
     
     
     
     src={process.env.PUBLIC_URL + '/img/d1.svg' } alt="" />
    <div className='home' >
    
    <Topbar/>
    <Text/>
    
    
    </div>
    </div>
  )
}

export default Home


function Icon() {
  
  const data = [
    {
      icon: <motion.span
       initial={{ y:-100, opacity:0}}
       animate={{y:0, opacity:1}}
       transition={{delay: 0}}
      
      >  <FaFacebook/> </motion.span> 
    },
    {
      icon:  <motion.span
      initial={{ y:-100, opacity:0}}
      animate={{y:0, opacity: 1}}
      transition={{delay: .3}}
      >  <FaInstagram/> </motion.span>
    },
    {
      icon: <motion.span
      initial={{ y:-100, opacity:0}}
      animate={{y:0, opacity: 1}}
      transition={{delay: .6}}
      
      >   <FaLinkedinIn/> </motion.span>
    },
    { 
      icon: <motion.span
      
      initial={{ y:-100, opacity:0}}
      animate={{y:0, opacity: 1}}
      transition={{delay: 1.2}}
      >  <FaTwitter/> </motion.span>
    },
  
  ]

  return(
    <div className="home-icon">

    {
      data.map((item)=>(
        
        <div>
        {item.icon}
        </div>
      ))
    }
          
       
    </div>
  )


}



function Text() {
  

  const variants1 = {
    hidden: { opacity: 0 , y:-100 },
    visible: { opacity: 1 , y: 0 ,
      
      transition:{
        delay: 1,
        x: { type: "tween", stiffness: 100 },
        default: { duration: 2} ,
   
      }
    
    },
  }
  const variants2 = {
    hidden: { opacity: 0 , x: -100  },
    visible: { opacity: 1 , x: 0 ,
      
      transition:{
        delay: 1,
        x: { type: "tween", stiffness: 100 },
        default: { duration: 1 },
        ease: "easeInOut"
      }
    
    },
  }
  const variants3 = {
    hidden: {scale: 1.03, opacity: 0 },
    visible: { scale: 1  , opacity: 1,
      
      transition:{
        delay: 1,
        x: { type: "tween", stiffness: 100 },
        default: { duration: 1 },
      }
    
    },
  }


 



   return(
     <div className="home-wrap">
     <div   className="hero-text">
     
      <motion.h1
         
      variants={variants1}
     initial="hidden"    
     animate="visible"

    
      
      >raisul <span>hasan</span></motion.h1>
        <motion.h4
        
        variants={variants2}
        initial="hidden"    
        animate="visible"
        
        >react js developer</motion.h4>

         <motion.p
         variants={variants3}
         initial="hidden"    
         animate="visible"
       
         >1 have been working since 2018. I am proficient in ui design, digital marketing & web development.</motion.p>
    
          
         <motion.button
          
         whileHover={{ scale: 1.1 }}
          initial={{x:100, opacity: 0}}
          animate={{x:0 , opacity: 1}}


         
         >download cv</motion.button>
            
       
     </div>

      <Icon/>

     </div>
   )

}



function Topbar() {
  


   return(
     <div className="home-top">
     
     
     <div className="left">
     <h2>+01 234 567 890  </h2>
     <h2>raiusl58208@gmail.com</h2>
     </div>

        
       <span>
       <MdEmail/>
       </span>   
       
     </div>
   )

}