import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#434346]'>
      
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-xl text-[#ffffff]'>Olá, meu nome é</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#542eff]'>Pedro Henrique Alves de Mendonça</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>Eu sou um desenvolvedor Full Stack.</h2>
        <p className='text-[#ffffff] py-4 max-w-[700px]'>Eu sou um desenvolvedor Full Stack focado em desenvolver e criar o design de experiências digitais.
        Atualmente estou focado em desenvolver sites responsivos.
        </p>
        <div>
          <button className='text-[#ffffff] group border-2 border-[#000000] px-6 py-3 my-2 flex items-center hover:bg-[#0821ff] hover:border-[#0821ff] duration-150'>
          <Link to='work' smooth={true} duration={500}>
            Ver projetos
            </Link>
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
          </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home