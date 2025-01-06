import React , { useState }  from 'react'
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'


export default function Navbar() {
    const [isClick,setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  }
  return (
    <nav className='p-6'>
    <div className='flex item-center justify-between'>
        <div >
            <img src='./blog-logo.png' className='h-16'/>
        </div>
        <div className='hidden md:flex  space-x-6 items-center'>
            <Link to='/' className='hover:text-orange-600 decoration-transparent'>Home</Link>
            <Link to='/about' className='hover:text-orange-600 decoration-transparent'>About</Link>
            <Link to='/contact' className='hover:text-orange-600 decoration-transparent '>Contact</Link> 
        </div>
        <div className='flex space-x-6 items-center'>
        <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Profile
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to="/createblog" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Create Blog
                  </Link>
                </MenuItem>
               
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-red-500 data-[focus]:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
            <Link to="/login" className='py-2 px-4 rounded-full bg-gradient-to-tr text-white from-blue-700  to-sky-400'>Login</Link>
            <button className='md:hidden' onClick={toggleNavbar}>
                  {isClick ? (
                    
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                      ): 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  }
                </button>
        </div>
    </div>
    {isClick && (
              <div className='md:hidden p-3 mt-2 bg-gradient-to-tr rounded text-white from-blue-700  to-sky-400'>
                
                    <Link to='/' className='block decoration-transparent'>Home</Link>
                    <Link to='/about' className='block decoration-transparent'>About</Link>
                    <Link to='/contact' className='block decoration-transparent '>Contact</Link> 
                  
              </div>
            )}
    </nav>
  )
}
