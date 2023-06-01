import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#434346] px-8'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-[#ffffff] text-4xl font-bold inline border-b-4 border-[#016fff]'>Sobre</p>
                </div>
                <div></div>
                </div>
                <div className='text-[#ffffff] max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Olá, me chamo Pedro Henrique Alves, se sinta a vontade para ver os meus projetos.</p>
                    </div>
                    <div>
                        <p>
                        Meu nome é Pedro tenho 17 anos,sou um estudante de análise desenvolvimento de sistemas  prentendendo finalizar este ano e também já possuo graduação um curso na the highway de TI.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About