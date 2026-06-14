import React, { useState } from 'react'
import main_car from '../assets/main_car.png'
import{cityList} from '../assets/assets'
import search_icon from '../assets/search_icon.svg'

const Hero = () => {

  const [pickupLocation, setPickupLocation] = useState('')

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>

       <h1 className='text-4xl md:text-5xl font-semibold'> Luxuary cars on Rent </h1>

       <form className= 'flex flex-col md:flex-row items-start md:items-center gap-6 rounded-lg md:rounded-full bg-white p-6 shadow-[0px_8px_20px_rgba(0, 0, 0, 0.1)] max-w-fit'>

<div className='flex flex-col md:flex-row items-start md:items-center gap-6 '>
   
    <div className='flex flex-col items-start gap-2'>
     
      <select required value={pickupLocation} onChange={(e)=> setPickupLocation(e.target.value)}>
       
        <option value=""> Pickup Location </option>
        {cityList.map((city)=><option key={city} value={city}>{city}</option>)}

      </select>

      <p className='px-1 text-sm text-gray-500'>{pickupLocation ? pickupLocation: 'Please select location'} </p>
   
    </div>

    <div className='flex flex-col items-start gap-2'>
      
     <label htmlFor='pickup-date'> Pick-up Date </label>
     <input type='date' id='pickup-date' min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' required/>
     
    </div>

    <div className='flex flex-col items-start gap-2'>

     <label htmlFor='return-date'> Return Date </label>
     <input type='date' id='return-date' className='text-sm text-gray-500' required/>
     
    </div>

</div>

      <button className='flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer'>
      Search
      <img src={search_icon} alt='search' className='brightness-300'/>
     </button>


       </form>
      
       <img src={main_car} alt='car' className='max-h-96 mx-auto'/>
    </div>
  )
}

export default Hero