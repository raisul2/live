import React, { useEffect } from 'react'
import './about.scss'
import {FaUserTie , FaBirthdayCake} from 'react-icons/fa'
import {AiFillSkype, AiOutlineWhatsApp, AiOutlineGlobal} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'
import {IoLocationSharp} from 'react-icons/io5'
import {BsCalendar3, BsPatchExclamationFill, BsEmojiSunglasses} from 'react-icons/bs'
import {motion} from 'framer-motion'



const About = () => {

    
  
    


   


  return (
    <div id='about' className='main-about'>
       <Leftimg/>

       <Wokrk/>
    
    </div>
  )
}

export default About



 const  Leftimg = () => {
    
  
 
    return(
        <div    className="about-box-img">

        <motion.div
           
        
        className="about-left">
        <motion.img
 
        animate={{ scale: [1, 1.05, 1] }} 
        transition= {{ duration: 3, type:'tween', repeat: Infinity,
        repeatType: "reverse", }}     
        src={ process.env.PUBLIC_URL + '/img/bg1.png' } alt="" />
        </motion.div>

        <Text/>


        
        
          
        </div>
    )

 }





 const  Text  = () => {


    const data1 = [

         {
            icon: <FaUserTie/>,
            name:"Devid William"
         },
         {
            icon: <AiFillSkype/>,
            name:"chat@devid"
         },
         {
            icon: <GrMail/>,
            name:"chat@example.com"
         },
       

    ]

    const data2 =[

        {
            icon: <IoLocationSharp/>,
            name:"205 NewYork, USA"
         },
         {
            icon: <FaBirthdayCake/>,
            name:"4 Jan, 1988"
         },
         {
            icon: <AiOutlineWhatsApp/>,
            name:"123 456 7899"
         },
          


    ]



    return(

         <div data-aos="fade-left"  data-aos-duration="15000"  data-aos-delay="500"  className="about-text">
           <div  className="about-top">
        
          <h1>about me</h1>

           <h2
         
           
           >
           Creative Designer</h2>

           <p>I am dedicated his life to learning what makes humans tick. He studies, researches and reads everything hecan, and shares his findings with his clients. His philosophy is to learn, test, analyse, improve and re-test. His motto is stay agile. I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco.
           I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
         
         </div>

         <div  className="about-bottom">
         
           <div>
           {
               data1.map((item)=>(
                   <span>{item.icon}<p>{item.name}</p> </span>
                   ))
           }
           
           </div>
         
           <div>
           {
               data2.map((item)=>(
                   <span>{item.icon}<p>{item.name}</p> </span>
                   ))
           }
           
           </div>

         
         
         </div>

            
         </div>

    )
     
 }





 const  Wokrk = () => {
     

    const data =[
        {
            icon:<BsCalendar3/>,
            name:"Working Hours",
            number:"2550"
        },
        {
            icon: <AiOutlineGlobal/>,
            name:"Total projects",
            number:"100"
        },
        {
            icon:<BsPatchExclamationFill/>,
            name:"Years Journey",
            number:"12"
        },
        {
            icon:<BsEmojiSunglasses/>,
            name:"Total Client",
            number:"70"
        },
       
     
    ]
  
 

    return(
        <div     className="work-about">
        
        {
            data.map((item)=>(
                <div  className="work-box">
                <div className="work-icon">
                    {item.icon}
                </div>
   
                <div  className="work-text">
                  <h3>{item.number}</h3>
                  <p>{item.name}</p>
                </div>
              
              </div>
            ))
        }
        

        </div>
    )
 }