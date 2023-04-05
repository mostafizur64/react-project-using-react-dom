import React, { useState } from 'react';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
      <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
          <div className='flex justify-between items-center'>
            <Link to='/' className='inline-flex items-center'>
                {/* logo  */}
                <BoltIcon className='h-6 w-6 text-blue-500' />
                <div><span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>nextPage</span></div>
            </Link>
            {/* navbar  item section */}
            <ul className='items-center hidden space-x-8 lg:flex'>
                <li>
                    <NavLink to='/' title='home link' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/books' className={({ isActive }) => (isActive ? 'active' : 'default')}>Books</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'default')}>About</NavLink>
                </li>
            </ul>
            {/* mobile navbar section  */}
            <div className='lg:hidden'>
                <button onClick={() => setIsMenuOpen(true)}>
                    <Bars3BottomRightIcon className='h-6 w-6 text-blue-500' />
                </button>

                {isMenuOpen && (
                    <div className='absolute top-0 left-0 w-full z-10'>
                        <div className='p-5 bg-white border rounded shadow-sm'>
                            {/* Logo & Button section */}
                            <div className='flex items-center justify-between mb-4'>
                                <div> <Link to='/' className='inline-flex items-center'>
                                    {/* logo  */}
                                    <BoltIcon className='h-6 w-6 text-blue-500' />
                                    <div><span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>nextPage</span></div>
                                </Link>
                                </div>
                                <div>
                                    <button onClick={() => setIsMenuOpen(false)}>
                                        <XMarkIcon className='h-6 w-6 text-blue-500' />
                                    </button>
                                </div>

                            </div>
                            <nav>
                                <ul className='items-center space-y-4 '>
                                    <li>
                                        <NavLink to='/' title='home link' className={({ isActive }) => (isActive ? 'isActive' : 'default')}>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/books' className={({ isActive }) => (isActive ? 'isActive' : 'default')}>Books</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/about' className={({ isActive }) => (isActive ? 'isActive' : 'default')}>About</NavLink>
                                    </li>
                                </ul>
                            </nav>


                        </div>
                    </div>

                )}
            </div>

        </div>
      </div>
    );
};

export default Header;