import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()
  const currentPath = location.pathname

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-bold underline'
      : 'text-gray-700 hover:text-blue-600'

  return (
    <header className='max-w-6xl bg-amber-200 mx-auto px-6 py-4'>
      <nav className='flex justify-between items-center'>
        {/* Logo or image placeholder */}
        <div className='text-2xl font-bold'>Logo</div>

        {/* Navigation Links */}
        <div className='flex gap-6 text-lg'>
          {/* Hide Home link if on /admin */}
          {currentPath !== '/admin'  && currentPath!=='/adminupdate' && (
            <NavLink to="/" className={navLinkClass}>
              User
            </NavLink>
          )}
          <NavLink to="/admin" className={navLinkClass}>
            Admin
          </NavLink>
        

          { currentPath!=='/'  && ( <NavLink to="/adminupdate" className={navLinkClass}>
            Admin update
          </NavLink>)
           
          }

          { currentPath!=='/' &&( <NavLink to="/" className={navLinkClass}>
            back to user
          </NavLink>)
           
          }
        
        </div>
      </nav>
    </header>
  )
}

export default Header
