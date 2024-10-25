import React from 'react'
import Quote from '../../ReusableComponent/Quote/Quote'

function IndexComponent3() {
  return (
    <div className=' min-h-[600px] w-full bg-[] '>
      <div className=" h-[100px] w-full bg-[] text-[30px] text-slate-600 font-bold flex justify-center items-center">
        <h1>Healthy Eating Tips</h1>
      </div>
      <Quote/>

      {/* <div className=" h-[450px] w-full flex justify-center items-center">
        <div className=" h-[400px] w-[70%] bg-[#E7F0DC] rounded-[30px] flex flex-col justify-center items-center p-[20px]">
          <h1 className=' text-[20px] font-bold mb-6 '>Name</h1>
          <p className=' text-[20px] font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga aliquid ut tenetur impedit officia repellat ullam illo, eius nihil tempore dolorem animi incidunt quia maiores a? Aliquid, animi facilis.</p>
        </div>
      </div> */}
    </div>
  )
}

export default IndexComponent3