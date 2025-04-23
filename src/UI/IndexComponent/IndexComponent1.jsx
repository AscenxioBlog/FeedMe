import React from 'react'
import { SlArrowDown } from "react-icons/sl";
// import food from '../Files/food.png'
import food from '../../Files/food.png'
import cola from '../../Files/cola.png'
import pharmacy from '../../Files/pharmacy.png'
import pack from '../../Files/package.png'
import place from '../../Files/place.png'


function IndexComponent1() {
    
  return (
    <div className=' min-h-[60vh] sm:min-h-[75vh] lg:min-h-[55vh] duration-500  w-full bg-[#5F8670] curved-div relative mt-[60px]'>
        <div className="   w-full bg-[] flex flex-col justify-center items-center pt-4">
            <div className=" h-[50px] w-full  flex justify-center items-center text-[25px] font-bold text-white mb-3"> OUR SERVICES</div>
            <div className=" h-[150px] text-white w-[90%] md:w-[60%] lg:w-[60%] grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
                <div className="child bg-[] flex  justify-center flex-col items-center">
                    <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] bg-[wheat] rounded-[50%]">
                        <img src={food} alt=""  />
                    </div>
                    <h1 className=' font-bold mt-2'>Food</h1>
                </div>
                <div className="child bg-[] flex justify-center flex-col items-center">
                <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] bg-[wheat] rounded-[50%]">
                        <img src={pharmacy} alt="" />
                    </div>
                    <h1 className=' font-bold mt-2 text-center'>Catering services</h1>

                </div>

                <div className="child bg-[] flex justify-center flex-col items-center">
                <div className=" h-[80px] w-[80px] md:h-[100px] md:w-[100px] bg-[wheat] rounded-[50%]">
                        <img src={pack} alt="" />
                    </div>
                    <h1 className=' font-bold mt-2 text-center'>Package Delivery</h1>

                </div>


                <div className="child bg-[] flex justify-center flex-col items-center">
                <div className="  h-[80px] w-[80px] md:h-[100px] md:w-[100px] bg-[wheat] rounded-[50%]">
                        <img src={place} alt="" />
                    </div>
                    <h1 className=' font-bold mt-2 text-center'>Surprise Delivery</h1>

                </div>


                <div className="child bg-[] flex justify-center flex-col items-center">
                <div className="  h-[80px] w-[80px] md:h-[100px] md:w-[100px] bg-[wheat] rounded-[50%]  ">
                        <img src={cola} alt="" />
                    </div>
                    <h1 className=' font-bold mt-2 text-center'>Suprise Package </h1>

                </div>
            </div>
        </div>


     
    </div>
  )
}

export default IndexComponent1