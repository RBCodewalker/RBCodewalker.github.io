import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center py-20 px-6'>
        <form method='POST' action="https://getform.io/f/b80d6a2e-75d1-4a82-9765-753e4c096214" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4 text-lg'>Submit the form below to get in contact</p>
            </div>
            {/* Honeypot field — hidden from users, bots will fill it, Getform will discard those submissions */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
            <input
              className='bg-[#ccd6f6] text-gray-900 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-600 transition-all'
              type="text"
              placeholder='Name'
              name='name'
              maxLength={100}
              required
            />
            <input
              className='my-4 p-3 bg-[#ccd6f6] text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-red-600 transition-all'
              type="email"
              placeholder='Email'
              name='email'
              maxLength={150}
              required
            />
            <textarea
              className='bg-[#ccd6f6] text-gray-900 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-600 transition-all resize-none'
              name="message"
              rows="8"
              placeholder='Message'
              maxLength={2000}
              required
            ></textarea>
            <button
              className='text-white border-2 border-gray-300 hover:bg-red-600 hover:border-red-600 px-6 py-3 my-8 mx-auto flex items-center rounded transition-all duration-300 font-semibold'
            >
              Contact Me!
            </button>
        </form>
    </div>
  )
}

export default Contact