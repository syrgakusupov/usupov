import React from 'react'
import './About'
import lok from '../img/1647338888_1.jpg'
const About = () => {
  return (
        <header className='navbar'>
            
     <ul>
       <li>
       <input type="text" placeholder='name'/>
         <a href=''>about</a>
         <a href=''>service</a>
         <a href=''>contacts</a>
         <a href=''>home</a>
       </li>
     </ul>
     <img src={lok}/>
   </header>
  )
}

export default About