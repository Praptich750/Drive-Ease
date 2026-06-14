import React from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { dummyCarData } from '../assets/assets'
import arrow_icon from '../assets/arrow_icon.svg'
import check_icon from '../assets/check_icon.svg'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'
import Loader from '../components/Loader'

const CarDetails = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const [car, setCar] = useState(null)
  const currency = import.meta.env.VITE_CURRENCY
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
    

  useEffect(()=>{
    setCar(dummyCarData.find(car => car._id === id))
  },[id])

  return car ? (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>
      <button 
         onClick={()=> navigate(-1)}
         className='flex items-center gap-2 mb-6 text-gray-500 cursor-pointer' >
       
        <img src={arrow_icon} alt="" className='rotate-180 opacity-65'/>
        Back to all cars
         </button>

         <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
         {/* left : car image and details */}
          <div className='lg:col-span-2'>
            <img src={car.image} alt="" className='w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md'/>
            <div className= 'space-x-6'>
              <div>
                <h1 className='text-3xl font-bold'>
                 {car.brand} {car.model}
                </h1>
                <p className='text-gray-600 text-lg'>
                 {car.category}. {car.year}
                </p>
              </div>
                  <hr className='border border-color my-6' />

                  <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                    {[
                      {icon: assets.users_icon,  text: `${car.seating_capacity} seats`},
                      {icon: assets.fuel_icon,  text: `${car.fuel_type}`}, 
                      {icon: assets.car_icon,  text: `${car.transmission}`}, 
                      {icon: assets.location_icon,  text: `${car.location}`}, 
                    ].map(({icon, text})=>(
                      <div key={text} className='flex flex-col items-center bg-light p-4 rounded-lg'>
                        <img src={icon} alt="" className='h-5 mb-2'/>
                        {text}
                      </div>
                    ))}
                  </div>
                  {/* car description */}
                  <div>
                    <h1 className='text-xl font-medium mb-3'>Description</h1>
                    <p className='text-gray-500'>{car.description}</p>
                  </div>

                  {/*Features*/}
                  <div>
                    <h1 className='text-xl font-medium mb-3'>Features</h1>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                      {[
                        "360 Camera", "Bluetooth", "GPS", "Heated Seats", "Rear View Mirror"
                      ].map((item, index)=>(
                        <li key={index} className='flex items-center text-gray-500'>
                          <img src={check_icon} alt="" className='h-4 mr-2' />
                          {item}</li>
                      ))}
                    </ul>
                  </div>
            </div>
          </div>
          {/* right : booking form */}
          <form onSubmit={handleSubmit}
          className='shadow-lg h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500'>
            <p className='flex items-center justify-between text-2xl text-gray-800 font-semibold'>{currency}{car.pricePerDay} <span className='text-base text-gray-400 font-normal'> per day</span></p>

            <hr className='border-borderColor my-6' />
          
            <div className='flex flex-col gap-2'>
              <label htmlFor="PickupDate" className='text-gray-600 mb-2 block'>Pickup Date</label>
              <input type="date" name="PickupDate" required id="PickupDate" className=' border border-borderColor px-3 py-2rounded-lg' min={new Date().toISOString().split('T')[0]} />

            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="ReturnDate" className='text-gray-600 mb-2 block'>Return Date</label>
              <input type="date" name="ReturnDate" required id="ReturnDate" className=' border border-borderColor px-3 py-2rounded-lg'/>
            </div>

            <button className='bg-primary text-white py-3 rounded-xl cursor-pointer w-full hover:bg-primaryDark transition-all font-medium'>Book Now</button>

            <p className='text-sm text-gray-500 text-center'>No credit card required to reserve</p>

          </form>
         </div>

    </div>
  ) : <Loader />
}

export default CarDetails
