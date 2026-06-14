import React from 'react'

const Newsletter = () => {
  return (
    <div className=' flex flex-col items-center justify-center text-center space-y-2'>
      <h1 className=' md:text-3xl text-2xl font-bold'> Never Miss a Deal</h1>
      <p className=' md:text-lg text-base'> Subscribe to get the latest deals, new arrivals, and exclusive offers! </p>

      <form className=' flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
        <input className=' flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' 
        type='email' 
        placeholder='Enter your email' 
        required
         />
        <button type='submit' className=' bg-primary text-white px-4 py-2 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'> Subscribe </button>
</form>
    </div>
  )
}

export default Newsletter
