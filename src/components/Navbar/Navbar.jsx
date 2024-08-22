import React, { useState } from 'react'
import logo from './logo'
import Nav from './Nav'


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen (!isMenuOpen)
    }

    console.log()

  return (
    /*
    <header className='bg-white sticky top-0 z-[20] mx-auto flex w-full 
    items-center justify-between border-b border-gray-500 p-8'>
        <div className='logo w-40 '>
            <img src="logo.png" alt="logo" />
        </div>
        
        <Nav />
        
    </header>
    */

    // logo
    <div className="navbar bg-white sticky top-0 z-[20] mx-auto flex w-full 
    items-center justify-between border-b p-6 ">
  <div className="flex-1">
    <a className="btn btn-ghost ">
      <img src="logo.png" alt="logo" />
    </a>
  </div>
  
  <div className="md:hidden">
    <button className='text-black' onClick={toggleMenu}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>

  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 hidden md:flex space-x-4">
      <li>
      <a href="/about.jsx" className='text-black hover:text-indigo-500 font-body text-base'>What we do</a>
      </li>
      <li>
      <details>
          <summary className='text-black hover:text-indigo-500 font-body text-base'>Company</summary>
          <ul className="bg-white rounded-t-none p-2">
            <li><a className='text-black hover:text-indigo-500  font-body text-base'>About</a></li>
            <li><a className='text-black hover:text-indigo-500  font-body text-base'> 
              <div className='bg-lime-100 p-1 rounded-sm'><img src="legal.png" alt="legal" className='size-3' /></div>Legal</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
      <a href="/career.jsx" className='text-black hover:text-indigo-500  font-body text-base'>Career</a>
      </li>
      <li>
      <a href="/contact.jsx" className='text-black hover:text-indigo-500  font-body text-base'>Contact us</a>
      </li>
      <li>
      <a href='/talk.jsx' className="btn bg-violet-500 text-white border-transparent rounded-full w-32">Let's Talk</a>
      </li>
    </ul>
  </div>

{/* mobile view */}
  { isMenuOpen ? (

  <ul className="flex-col  md:hidden">
    <li>
      <a href="/about.jsx" className='text-black hover:text-indigo-500 font-body text-base'>What we do</a>
    </li>
    <li>
      <details>
          <summary className='text-black hover:text-indigo-500 font-body text-base'>Company</summary>
          <ul className="bg-white rounded-t-none p-2">
            <li><a className='text-black hover:text-indigo-500  font-body text-base'>About</a></li>
            <li><a className='text-black hover:text-indigo-500  font-body text-base'> 
              <div className='bg-lime-100 p-1 rounded-sm'><img src="legal.png" alt="legal" className='size-3' /></div>Legal</a>
            </li>
          </ul>
        </details>
    </li>
    <li>
      <a href="/career.jsx" className='text-black hover:text-indigo-500  font-body text-base'>Career</a>
    </li>
    <li>
      <a href="/contact.jsx" className='text-black hover:text-indigo-500  font-body text-base'>Contact us</a>
    </li>
    <li>
      <a href='/talk.jsx' className="btn btn-block bg-violet-500 text-white border-transparent rounded-full">Let's Talk</a>
    </li>
  </ul>
  
  ) :null}
  

</div>
  )
}

export default Navbar