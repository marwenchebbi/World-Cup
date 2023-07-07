
import React, { useState } from 'react';
import img from '../images/logo.png';
import { Link } from 'react-scroll';
import {FaBars,FaTimes} from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#f21737] text-white'>
 <div>
        <img src={img} alt='Logo Image' style={{ width: '50px' }} />
      </div>
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        
        <li>
          <Link to='Equipe' smooth={true} duration={500}>
            Equipe
          </Link>
        </li>
        <li>
          <Link to='Groupe' smooth={true} duration={500}>
            Groupe
          </Link>
        </li>
        <li>
          <Link to='Qatar' smooth={true} duration={500}>
            Qatar world cup
          </Link>
        </li>
      
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>

      </ul>
       {/* Hamburger */}
       <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*mobile icones*/}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#f21737] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='Equipe' smooth={true} duration={500}>
          equipe
          </Link>
          <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='Groupe' smooth={true} duration={500}>
          Groupe
          </Link>
        </li>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='Qatar' smooth={true} duration={500}>
          Qatar world cup

          </Link>
        </li>
      
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      
    </div>
  )
}

export default Navbar;
