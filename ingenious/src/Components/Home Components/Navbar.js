import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-black p-3'>
      {/* Brand Name and Hamburger Menu */}
      <div className='flex justify-between items-center'>
        <button 
          className='text-white text-2xl md:hidden' 
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
        <span className='text-white font-extrabold uppercase text-4xl md:text-6xl text-center mx-auto'>
          Ingenious Dealers
        </span>
        <div className="hidden md:block w-8"></div> {/* Spacer for alignment */}
      </div>

      {/* Login / Register Link */}
      <div className='hidden md:flex justify-end mb-2'>
        <Link className='text-white text-base' to='/login'>
          Login / Register
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex justify-between items-center mt-3'>
        <div className='flex gap-8'>
          <Link to='https://www.instagram.com/ingeniousdealers/' className='text-white text-xl'>
            <i className='fa-brands fa-instagram'></i>
          </Link>
          <Link to='https://www.instagram.com/ingeniousdealers/' className='text-white text-xl'>
            <i className='fa-brands fa-x-twitter'></i>
          </Link>
          <Link to='https://www.instagram.com/ingeniousdealers/' className='text-white text-xl'>
            <i className='fa-brands fa-youtube'></i>
          </Link>
        </div>
        <div className='flex justify-center gap-8'>
          <Link className='text-white text-xl font-semibold' to='/'>Home</Link>
          <Link className='text-white text-xl font-semibold' to='/shop'>Shop</Link>
          <Link className='text-white text-xl font-semibold' to='/services'>Services</Link>
          <Link className='text-white text-xl font-semibold' to='/subscriptions'>Subscriptions</Link>
        </div>
        <div className="relative"> 
          <label htmlFor="Search" className="sr-only">Search</label>
          <input
            type="text"
            id="Search"
            placeholder="Search..."
            className="rounded-md border-gray-200 py-2.5 pl-3 pr-10 shadow-sm sm:text-sm"
          />
          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-4 w-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
            </button>
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden mt-3'>
          <div className='flex flex-col gap-8'>
            <Link className='text-white text-lg font-semibold' to='/'>Home</Link>
            <Link className='text-white text-lg font-semibold' to='/shop'>Shop</Link>
            <Link className='text-white text-lg font-semibold' to='/services'>Services</Link>
            <Link className='text-white text-lg font-semibold' to='/subscriptions'>Subscriptions</Link>
            <Link className='text-white text-lg font-semibold' to='/login'>Login / Register</Link>
          </div>
          <div className='flex gap-8 mt-4'>
            <Link to='https://www.instagram.com/ingeniousdealers/' className='text-white text-xl'>
              <i className='fa-brands fa-instagram'></i>
            </Link>
            <Link to='https://www.instagram.com/ingeniousdealers/' className='text-white text-xl'>
              <i className='fa-brands fa-x-twitter'></i>
            </Link>
            <Link to='https://www.instagram.com/ingeniousdealers/' className='text-white text-xl'>
              <i className='fa-brands fa-youtube'></i>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

