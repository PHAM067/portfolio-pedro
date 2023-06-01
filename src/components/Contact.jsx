import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#434343] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/cde5a69a-496b-49e7-a8bd-7e5fe46f27df" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4  text-white'>Contact</p>
                <p className='text-white py-4'>// Submit the form below or shoot me an email - pedrohenriquealvescsp@gmail.com</p>
            </div>
            <input className='bg-[#ffffff] p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ffffff]' type='email' placeholder='Email' name='email'/>
            <textarea className='bg-[#ffffff] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}
 
export default Contact