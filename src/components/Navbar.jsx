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
    <div className='fixed h-[100px] flex items-center bg-[#0a192f] text-gray-300 z-10'>
      {/* <div>
        <img src={Photo} alt='My Photo' style={{ width: '100px' }} />
      </div> */}

      {/* menu */}
      {/* <div className=''> */}
        <ul className='fixed top-0 left-1/2 z-20 transform -translate-x-1/2 w-screen px-4 h-20 bg-[#0a192f] text-gray-300 flex items-center justify-center hidden md:inline-flex'>
          <li className='text-2xl transition duration-300 transform hover:scale-110'>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='text-2xl transition duration-300 transform hover:scale-110'>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='text-2xl transition duration-300 transform hover:scale-110'>
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='text-2xl transition duration-300 transform hover:scale-110'>
            <Link to='work' smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className='text-2xl transition duration-300 transform hover:scale-110'>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      {/* </div> */}

      {/* Hamburger */}
      <div onClick={handleClick} className='fixed right-0 md:hidden pr-10 text-3xl z-100'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'fixed top-0 right:0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-3 text-xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-3 text-xl'>
          {/* {' '} */}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-3 text-xl'>
          {/* {' '} */}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-3 text-xl'>
          {/* {' '} */}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-3 text-xl'>
          {/* {' '} */}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
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
      <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/rajdeep-bastakoti-816a7121b/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/RBCodewalker'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:bastakotirajdeep60@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={resume}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
        <div>
      </div>
      {/* <div>
        <img src={Photo} alt='Me' style={{ width: '500px' , marginLeft:'100px', marginTop:'-300px'}} />
      </div> */}
      </div>
    </div>
  );
};

export default Navbar;
