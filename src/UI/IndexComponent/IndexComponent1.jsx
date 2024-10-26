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
    <div className=' min-h-[450px] w-full bg-[#5F8670] lg:mt-4'>
        <div className=" h-[80px] w-full bg-[] grid grid-cols-[35%,20%,30%] md:grid-cols-[20%,60%,18%] lg:grid-cols-[20%,60%,18%] gap-1 justify-between ">
            {/* <div className=" bg-[] text-[35px] font-extrabold text-[#FF5A3C] flex justify-center items-center">
                <h1 className=' logo'><a href="/">Feed<span className=' text-white'>Me</span></a></h1>
            </div>
           <div className="flex items-center ">
           <div className="hidden md:inline-block lg:inline-block  bg-[] text-[21px] font-bold  pl-[80px] ">
                <ol className=' flex gap-[30px] '>
                    <li className='text-[#FF5A3C]'><a href="">Restaurants</a></li>
                    <li><a href="">FAQs</a></li>
                    <li><a href="">Support</a></li>
                </ol>
            </div>
           </div>
            <div className=" bg-[] flex justify-center items-center">
                <button className=' h-[40px] w-[150px] bg-[#FF5A3C] text-[18px] text-white font-semibold rounded-[20px]'>Cart</button>
            </div> */}

        </div>

        <div className=" h-[500px] md:h-[450px]  lg:h-[300px] w-full bg-[] flex flex-col justify-center items-center pb-[140px] md:pb-[130px] lg:pb-[20px]">
            <div className=" h-[50px] w-full  flex justify-center items-center text-[25px] font-bold text-white mb-3"> OUR SERVICES</div>
            <div className=" h-[150px] text-white w-[90%] md:w-[60%] lg:w-[60%] bg- grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
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


        <div className="custom-shape-divider-bottom-1722971748 top-[500px] md:top-[450px] lg:top-[379px] hidden md:inline-block">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
    </svg>
</div>
    </div>
  )
}

export default IndexComponent1