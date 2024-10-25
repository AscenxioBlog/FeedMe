import React from 'react'
import { TbCurrencyNaira } from "react-icons/tb";

function Register3() {
  return (
    <div className=' min-h-[100vh] w-full bg-[] flex flex-col gap-5  items-center'>
        <div className=" h-[100px] w-full bg-[] text-[25px] md:text-[30px] lg:text-[45px] font-bold flex flex-col justify-center items-center ">
            <h1>Our Plans</h1>
        </div>
        <div className="min-h-[60vh] md:h-[65vh] w-full p-3 lg:p-0 lg:w-[85%] bg-[] grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="h-[60vh] md:h-[65vh] bg-white flex flex-col items-center gap-5 justify-center" style={{border:'1px solid gray'}}>
                <div className=" h-[90px] w-[90%] bg text-[25px] uppercase font-semibold flex items-center justify-center" style={{borderBottom:'1px solid gray'}}>
                    <h1>1 Month Plan</h1>
                </div>

                <div className=" h-[170px] w-[160px] bg-slate-500 rounded-[100%] flex justify-center items-center text-[20px] font-bold text-white ">
                    <p className=' flex'><TbCurrencyNaira />70,000</p>
                </div>

                <div className=" h-[200px] w-full text-[18px] flex flex-col justify-center items-center gap-5 ">
                    <p><span className=' font-bold'>Check and go</span> included</p>
                    <p><span className=' font-bold'>1 month </span> valid</p>
                    <p><span className=' font-bold'>Unsubscribe  </span> anytime</p>
                </div>
            </div>


            <div className="h-[60vh] md:h-[70vh] md:translate-y-[-20px] bg-white flex flex-col items-center gap-5 justify-center rounded-[20px] " style={{boxShadow:'0px 5px 25px black' , border:'3px solid green'}}>
            <div className=" h-[90px] w-[90%] bg text-[25px] uppercase font-semibold flex items-center justify-center" style={{borderBottom:'1px solid gray'}}>
                    <h1>3 Month Plan</h1>
                </div>

                <div className=" h-[170px] w-[160px] bg-slate-500 rounded-[100%] flex justify-center items-center text-[20px] font-bold text-white ">
                    <p className=' flex'><TbCurrencyNaira />180,000</p>
                </div>

                <div className=" h-[200px] w-full  text-[18px] flex flex-col justify-center items-center gap-5 ">
                    <p><span className=' font-bold'>Premium </span> support</p>
                    <p><span className=' font-bold'>Check and go  </span>included</p>
                    <p><span className=' font-bold'>6 month  </span>valid</p>
                    <p><span className=' font-bold'>Unsubscribe  </span> anytime</p>
                </div>
            </div>
            <div className="h-[60vh] md:h-[65vh] bg-white flex flex-col items-center gap-5 justify-center" style={{border:'1px solid gray'}}>
            <div className=" h-[90px] w-[90%] bg text-[25px] uppercase font-semibold flex items-center justify-center" style={{borderBottom:'1px solid gray'}}>
                    <h1>6 Month Plan</h1>
                </div>

                <div className=" h-[170px] w-[160px] bg-slate-500 rounded-[100%] flex justify-center items-center text-[20px] font-bold text-white ">
                    <p className=' flex'><TbCurrencyNaira />400,000</p>
                </div>

                <div className=" h-[200px] w-full  text-[18px] flex flex-col justify-center items-center gap-5 ">
                    <p><span className=' font-bold'>Premium </span> support</p>
                    <p><span className=' font-bold'>Check and go  </span>included</p>
                    <p><span className=' font-bold'>3 month  </span>valid</p>
                    <p><span className=' font-bold'>Unsubscribe  </span> anytime</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register3