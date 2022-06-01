import React, { useRef, useState } from 'react';
import './texto2.scss'
import {FaQuoteRight} from 'react-icons/fa'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";


const Testo2 = () => {


  return (
    <div className='testo2'>
       
       <div className="text">
         <h1>testomonial</h1>
         <h3>people what are saying</h3>
       
       </div>


       <div className="bos"> 
  
     <Testobox/>
     <Testobox/>
     <Testobox/>
     <Testobox/>
</div>
         
       
    
    </div>
  )
}

export default Testo2



function Testobox() {
    

    return(
        <div id='testimonaial' className="testo-boxsx">
          
            <span className='icons'><FaQuoteRight/></span>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore soluta illum, perferendis alias ad dolorum unde sed dolorem voluptas. Officiis explicabo, laboriosam ullam ad perferendis reiciendis amet necessitatibus deserunt veritatis.</p>


             <div className="avater">
               
               <div className="img">
                <img src={process.env.PUBLIC_URL + '/img/p1.png'} alt="" />

            

               </div>
               <span>
               <h4>set any name</h4>
                <p>bangladesh,bogra</p>
              
              </span>
             
             </div>
        
             <img className='log' src={process.env.PUBLIC_URL + '/img/d1.svg'} alt="" />

        </div>
    )
}