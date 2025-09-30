import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  // FaFacebook,
  // FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import Photo from '../assets/Me.jpeg';
import { Link } from 'react-scroll';
import resume from '../assets/resume.pdf'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-20 flex items-center bg-[#0a192f]/95 backdrop-blur-sm text-gray-300 z-50 shadow-lg'>
      {/* menu */}
        <ul className='fixed top-0 left-1/2 z-20 transform -translate-x-1/2 w-screen px-4 h-20 bg-transparent text-gray-300 flex items-center justify-center gap-8 hidden md:flex'>
          <li className='text-lg transition duration-300 hover:text-red-500 cursor-pointer'>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='text-lg transition duration-300 hover:text-red-500 cursor-pointer'>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='text-lg transition duration-300 hover:text-red-500 cursor-pointer'>
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='text-lg transition duration-300 hover:text-red-500 cursor-pointer'>
            <Link to='work' smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className='text-lg transition duration-300 hover:text-red-500 cursor-pointer'>
            <Link to='experience' smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className='text-lg transition duration-300 hover:text-red-500 cursor-pointer'>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='fixed right-6 md:hidden text-3xl z-[60] cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={`fixed top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition-transform duration-300 ${
          !nav ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <li className='py-4 text-2xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500} className='hover:text-red-500 transition-colors'>
            Home
          </Link>
        </li>
        <li className='py-4 text-2xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500} className='hover:text-red-500 transition-colors'>
            About
          </Link>
        </li>
        <li className='py-4 text-2xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500} className='hover:text-red-500 transition-colors'>
            Skills
          </Link>
        </li>
        <li className='py-4 text-2xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500} className='hover:text-red-500 transition-colors'>
            Projects
          </Link>
        </li>
        <li className='py-4 text-2xl'>
          <Link onClick={handleClick} to='experience' smooth={true} duration={500} className='hover:text-red-500 transition-colors'>
            Work
          </Link>
        </li>
        <li className='py-4 text-2xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500} className='hover:text-red-500 transition-colors'>
            Contact
          </Link>
        </li>
        <li className='py-3 text-xl'>
          {/* {' '} */}
          <a
              href='https://www.linkedin.com/in/rajdeep-bastakoti-816a7121b/'
          >
              <FaLinkedin size={30} />
          </a>  
        </li>
        <li className='py-3 text-xl'>
          {/* {' '} */}
          <a
              href='https://github.com/RBCodewalker'
          >
              <FaGithub size={30} />
          </a>
        </li>
        <li className='py-3 text-xl'>
          {/* {' '} */}
          <a
              href='mailto:bastakotirajdeep60@gmail.com'
          >
              <HiOutlineMail size={30} />
          </a>
        </li>
        <li className='py-3 text-xl'>
          {/* {' '} */}
          <a
              href={resume}
          >
              <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden md:flex fixed flex-col top-[50vh] left-0 z-40 gap-1.5' style={{ transform: 'translateY(-50%)' }}>
        <a
          href='https://www.linkedin.com/in/rajdeep-bastakoti-816a7121b/'
          target='_blank'
          rel='noopener noreferrer'
          className='group flex justify-between items-center w-[150px] h-[50px] ml-[-98px] hover:ml-0 transition-all duration-500 ease-out bg-[#0077B5]/30 hover:bg-[#0077B5]/95 backdrop-blur-md rounded-r-xl shadow-lg hover:shadow-[#0077B5]/50 border border-[#0077B5]/20'
        >
          <span className='flex-1 text-center text-white font-semibold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Linkedin</span>
          <div className='w-14 h-full flex items-center justify-center bg-blue/40 group-hover:bg-blue/95 backdrop-blur-md rounded-r-xl transition-all duration-500'>
            <FaLinkedin size={22} className='text-white drop-shadow-lg' />
          </div>
        </a>

        <a
          href='https://github.com/RBCodewalker'
          target='_blank'
          rel='noopener noreferrer'
          className='group flex justify-between items-center w-[150px] h-[50px] ml-[-98px] hover:ml-0 transition-all duration-500 ease-out bg-[#24292e]/30 hover:bg-[#24292e]/95 backdrop-blur-md rounded-r-xl shadow-lg hover:shadow-[#24292e]/95 border border-[#24292e]/20'
        >
          <span className='flex-1 text-center text-white font-semibold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Github</span>
          <div className='w-14 h-full flex items-center justify-center bg-[#24292e]/40 group-hover:bg-[#24292e]/95 backdrop-blur-md rounded-r-xl transition-all duration-500'>
            <FaGithub size={22} className='text-white drop-shadow-lg' />
          </div>
        </a>

        <a
          href='mailto:bastakotirajdeep60@gmail.com'
          className='group flex justify-between items-center w-[150px] h-[50px] ml-[-98px] hover:ml-0 transition-all duration-500 ease-out bg-[#6fc2b0]/30 hover:bg-[#6fc2b0]/95 backdrop-blur-md rounded-r-xl shadow-lg hover:shadow-teal-500/50 border border-teal-400/20'
        >
          <span className='flex-1 text-center text-white font-semibold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Email</span>
          <div className='w-14 h-full flex items-center justify-center bg-[#5fb3a0]/40 group-hover:bg-[#5fb3a0]/95 backdrop-blur-md rounded-r-xl transition-all duration-500'>
            <HiOutlineMail size={22} className='text-white drop-shadow-lg' />
          </div>
        </a>

        <a
          href={resume}
          target='_blank'
          rel='noopener noreferrer'
          className='group flex justify-between items-center w-[150px] h-[50px] ml-[-98px] hover:ml-0 transition-all duration-500 ease-out bg-[#565f69]/30 hover:bg-[#565f69]/95 backdrop-blur-md rounded-r-xl shadow-lg hover:shadow-gray-700/50 border border-gray-400/20'
        >
          <span className='flex-1 text-center text-white font-semibold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Resume</span>
          <div className='w-14 h-full flex items-center justify-center bg-[#4a5259]/40 group-hover:bg-[#4a5259]/95 backdrop-blur-md rounded-r-xl transition-all duration-500'>
            <BsFillPersonLinesFill size={22} className='text-white drop-shadow-lg' />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
