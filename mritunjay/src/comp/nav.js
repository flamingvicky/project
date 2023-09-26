import React from 'react'
import './nav.css'


const Nav = () => {
  return (
    <>
      <div className='nav-container'>
        <div className='logo'>
           <h2>MD</h2>

        </div>
<div className='links'>
    <ul>
        <li>
        <a href='/' className='link'>Home</a>
          <a href ='/about' className='link'>About</a>
          <a href ='/work' className='link'>Work</a> 
            <a href ='/contact' className='link'>Contact</a> 
        </li>
    </ul>
</div>
<div className='btn'>
<a href='contact' className='btnlink'>Let's Talk</a>
</div>

      </div>
    </>
  )
}

export default Nav;
