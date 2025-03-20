import React, { useRef } from 'react'

const NavBar = () => {
 
    const navContainer = useRef(null);
 
 
    return (
    <div ref={navContainer} className='fixed inste-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-full-x-6'>

    </div>
  )
}

export default NavBar