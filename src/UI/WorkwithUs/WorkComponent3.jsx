import React, { useState } from 'react'
import { IoCheckmarkCircleSharp } from "react-icons/io5";

function WorkComponent3() {
    var [animal,setAnimal]=useState('100.0')
  return (
    <div className='min-h-[60vh] md:min-h-[80vh] w-full bg-[] grid grid-cols-1 lg:grid-cols-2 mt-8 gap-5 md:gap-0'>
        <div className="bike h-[60vh] md:h-[80vh] bg-amber-500"></div>
        <div className=" h-[60vh] md:h-[60vh] lg:h-[80vh] bg-[#5F8670] flex justify-center items-center">
           <div className=" h-[40vh] md:h-[60vh] w-[80%] flex flex-col justify-center space-y-4 text-white">
           <h1 className=' text-[25px] md:text-[30px] text-white font-bold'>"What you'll need"</h1>
            <section className=" flex gap-2">
                <span className=' text-white text-[25px] '><IoCheckmarkCircleSharp /></span>
                <span className=' text-[18px]'>A bicycle or scooter/motorbike with relevant safety equipment (road safety is a huge must for us!).</span>
            </section>

            <section className=" flex gap-2">
                <span className=' text-white text-[25px] '><IoCheckmarkCircleSharp /></span>
                <span className=' text-[18px]'>Smartphone - iPhone 4s or above or Android 4.3 or above.</span>
            </section>

            <section className=" flex gap-2">
                <span className=' text-white text-[25px] '><IoCheckmarkCircleSharp /></span>
                <span className=' text-[18px]'>The right to work in the USA.</span>
            </section>
           </div>
        </div>
      
    </div>
  )
}

export default WorkComponent3
