import React from 'react'
import About from '../../components/about/About'
import Blog from '../../components/blog/Blog'
import Contact from '../../components/contact/Contact'
import Home from '../../components/home/Home'
import Price from '../../components/price/Price'
import Protfolio from '../../components/protfolio/Protfolio'
import Question from '../../components/question/Question'
import Service from '../../components/service/Service'
import Skill from '../../components/skill/Skill'
import Testomonial from '../../components/testimonial/Testomonial'
import Testo2 from '../../components/testomoni2/Testo2'
import Work from '../../components/work/Work'
import './hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
     

    
    <Home/>
    <About/>
  <Testomonial/>
   <Service/>
<Work/>
<Question/>
<Protfolio/>
<Testo2/>
<Price/>
<Blog/>
<Contact/>


     
      
         
    
    </div>
  )
}

export default Hero


