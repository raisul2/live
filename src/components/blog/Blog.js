import React from 'react'
import './blog.scss'

import {FaUser} from 'react-icons/fa'

const data  = [

  {
     img:"/img/i1.jpg"
  },
  {
     img:"/img/i2.jpg"
  },
  {
     img:"/img/i3.jpg"
  },
]
  


const Blog = () => {
  return (
    <div id='blog' className='blogpage'>

     <div className="text">
       <h1>blog posts</h1>
       <h3>newly posted articels</h3>
     
     </div>
     
    
     <div className="post">
     {

      data.map((item)=>(
        <Blogbox img={item.img} />

      ))
     }

     </div>

    
    </div>
  )
}

export default Blog




function Blogbox({img}){
    
    return(

          <div className="blog-box">
          
          <div className="img">
          <img src={process.env.PUBLIC_URL + img} alt="" />
          </div>

           <div className="text">
           <div className="title">
            <span><FaUser/>username</span>
            <span><FaUser/>07 aug, 2022</span>
           </div>     
         
            <p>
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam pariatur in, nesciunt obcaecati reiciendis dolores numquam illo provident ullam enim, a repellendus officia
            </p>
              
           </div>

          </div>

    )
}