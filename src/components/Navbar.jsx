import React from 'react'
import { CgProfile } from "react-icons/cg";


function Navbar() {
  return (
    <nav className='flex flex-row items-center justify-between pl-10 py-4 text-base border border-gray-400 bottom-4 shadow-xl '>
        <h1>EduCode</h1>
        <input className='border border-gray-400 rounded-full px-3 py-2 pr-20' type="text" placeholder='Search Courses...'/>
        <ul className='flex flex-row pr-10 gap-6'>
            <li>Explore</li>
            <li> Instructor</li> 
            <li> My Courses</li>
            <li className='text-3xl'><a href="/"> <CgProfile /></a></li>
        </ul>
        

    </nav>
  )
}

export default Navbar
