import React from 'react'
import realestate from '../assets/realestate.jpg'
import workimg from '../assets/workImg.jpeg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#434346]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl text-[#ffffff] font-bold inline border-b-4 border-[#016fff]'>Projetos</p>
                <p className='text-[#ffffff]  py-4'>Veja alguns dos meus projetos:</p>
            </div>
                
            {/* Container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item*/}
                <div style={{backgroundImage: `url(${realestate})` }} 
                className='shadow-lg shadow-[#59b4ff] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Dispositivos de Redes
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${workimg})` }} 
                className='shadow-lg shadow-[#59b4ff] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            News Show
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item*/}
                <div style={{backgroundImage: `url(${workimg})` }} 
                className='shadow-lg shadow-[#59b4ff] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            PetShow
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                
                    </div>
                </div>
            </div>
  )
}

export default Work