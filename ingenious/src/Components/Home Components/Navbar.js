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
          <Link className='text-white text-xl font-semibold' to='/local-dealers'>Local Dealers</Link>
          <Link className='text-white text-xl font-semibold' to='/services'>Services</Link>
          <Link className='text-white text-xl font-semibold' to='/subscriptions'>Subscriptions</Link>
          <Link className='text-white text-xl font-semibold' to='/about'>About</Link>
        </div>
        <div className='flex justify-end'>
          <Link className='text-white text-xl font-semibold' to='/login'>Login / Register</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden mt-3'>
          <div className='flex flex-col gap-8'>
          <Link className='text-white text-xl font-semibold' to='/'>Home</Link>
          <Link className='text-white text-xl font-semibold' to='/local-dealers'>Local Dealers</Link>
          <Link className='text-white text-xl font-semibold' to='/services'>Services</Link>
          <Link className='text-white text-xl font-semibold' to='/subscriptions'>Subscriptions</Link>
          <Link className='text-white text-xl font-semibold' to='/about'>About</Link>
          <Link className='text-white text-xl font-semibold' to='/login'>
          Login / Register
        </Link>
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

