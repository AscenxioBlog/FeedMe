import React from 'react'

function Payment1() {
  return (
    <div>
       <div className='checkout h-[500px] w-full bg-purple-700 flex justify-center items-center'>
        <div className=" h-[200px] w-[80%] bg-[] flex flex-col items-center">
            <h1 className=' text-[25px] md:text-[30px] lg:text-[50px] font-medium  text-white'>Place your order</h1>

            <div className="h-[40px] w-full md:w-[95%] lg:w-[65%] bg-[] mb-3 flex justify-between text-[15px] md:text-[20px] text-white font-semibold">
                <span>1. Your details</span>
                <span>2. Payment</span>
                <span>3. Finish!</span>
            </div>
            <div className=" h-[10px] w-full md:w-[90%] lg:w-[60%] bg-slate-100 grid grid-cols-2 rounded-xl">
                <div className=" bg-[gold] rounded-xl relative">
                <div className="h-[30px] w-[30px] rounded-[50%] bg-[gold] flex justify-center items-center absolute top-[-10px]">
                    <div className=" h-[15px] w-[15px] rounded-[50%] bg-[orangered]"></div>
                </div>
                <div className="h-[30px] w-[30px] rounded-[50%] bg-[gold] flex justify-center items-center absolute right-0 top-[-10px]">
                    <div className=" h-[15px] w-[15px] rounded-[50%] bg-[orangered]"></div>
                </div>
                </div>
                <div className=" bg-[] rounded-xl relative">
                <div className="h-[30px] w-[30px] rounded-[50%] bg-white absolute top-[-10px] right-0"></div>

                </div>
            </div>
        </div>

      
    </div>
    </div>
  )
}

export default Payment1
