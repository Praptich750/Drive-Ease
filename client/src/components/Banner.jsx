import React from 'react'
import banner_car_image from '../assets/banner_car_image.png'

const Banner = () => {
  return (
    <div className='h-24 w-full bg-primary text-white flex items-center justify-center text-lg font-medium'>
      <div>
        <h2 className='text-xl font-bold'>
          DO You Own a Luxury Car?
        </h2>
        <p className='mt-1 text-sm text-gray-200'>
            Monetize your vehicle effortlessly with DriveEase. Join our platform to rent out your luxury car .
        </p>
        <p className='text-sm text-gray-200'>
          we take care of insurance, maintenance and secure payments so you can earn passive income, stree-free.
        </p>
        <button className='mt-2 bg-white text-primary hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
          List Your Car Now
        </button>
      </div>
       
       <img src={banner_car_image} alt='Banner Image' className='max-h-45 w-auto' />
    </div>
  )
}

export default Banner
