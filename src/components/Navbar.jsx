import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import Logo from '../assets/logo.png'
import Curriculo from '../resources/Currículo.pdf'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-8 bg-[#161616] text-gray-200'>
      <div>
        
      </div>

      {/* menu*/}
      
        <ul className='hidden md:flex'>
          <li className='hover:text-white duration-500'>
            <Link to='home' smooth={true} duration={500}>
            Início
            </Link>
            </li>
          <li className='hover:text-white duration-500'>
          <Link to='about' smooth={true} duration={500}>
            Sobre
            </Link>
          </li>
          <li className='hover:text-white duration-500'>
          <Link to='skills' smooth={true} duration={500}>
            Habilidades
            </Link>
          </li>
          <li className='hover:text-white duration-500'> 
            <Link to='work' smooth={true} duration={500}>
            Projetos
            </Link>
            </li>
          <li className='hover:text-white duration-500'>
            <Link to='contact' smooth={true} duration={500}>
            Contato
            </Link>
            </li>
        </ul>


      {/* hamburguer*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>


      {/* Mobile menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#a7b4ba] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'> 
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Início
            </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Habilidades
            </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            Sobre
            </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Projetos
            </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contato
            </Link></li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-blue-600 duration-200 bg-[#434343]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href="https://www.linkedin.com/in/pedro-henrique-alves-15ab78247/">
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-[#333333] duration-200 bg-[#434343]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href="https://github.com/PHAM067">
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-[#07408b] duration-200 bg-[#434343]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href="/">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-[#07ad4c] duration-200 bg-[#434343]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href={Curriculo} media="print">
              Curriculo <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar