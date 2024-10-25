import React from 'react'
import CustomInput from '../../ReusableComponent/MyInput/CustomInput'

function Catering3() {
  return (
    <div className=' min-h-[80vh] w-full bg-[] pb-5 flex justify-center'>
        <div className=" min-h-[80vh] w-full md:w-[80%] bg-slate-200 p-2 md:p-5">
            <div className=" min-h-[100px] w-full  text-[20px] font-semibold text-center">
                <h1>Make your event special with <span className='text-[#FF5A3C] font-bold'>FEED</span><span className='font-bold'>ME</span> Catering! Order now and experience exquisite catering that will make your event unforgettable. Contact us today to learn more!</h1>
            </div>

            <div className="  mt-6">
                <form action="" method="post">
                <div className=" font-bold mt-3">
                <label htmlFor="name">Client's Name <span className=' text-[red]'>*</span></label>
                <CustomInput
                 type="text"
                 name='first_name'
                 required
                 placeholder='First Name'
                 className='border-[2px] border-solid border-emerald-600 h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                
                />
            </div>

            <div className=" font-bold mt-3">
                <label htmlFor="address">Client's Address <span className=' text-[red]'>*</span></label>
                <CustomInput
                 type="text"
                 name='client_address'
                 required
                 placeholder='Your Address'
                 className='border-[2px] border-solid border-emerald-600 h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                
                />
            </div>

            <div className=" font-bold mt-3">
                <label htmlFor="">Client's Address <span className=' text-[red]'>*</span></label>
               <section className=' flex justify-between'>
               <CustomInput
                 type="text"
                 name='client_city'
                 required
                 placeholder='Your City'
                 className='border-[2px] border-solid border-emerald-600 h-[50px] w-[48%]  bg-[transparent] rounded-[10px]'
                
                />

                <CustomInput
                 type="text"
                 name='client_state'
                 required
                 placeholder='Your State'
                 className='border-[2px] border-solid border-emerald-600 h-[50px] w-[48%]  bg-[transparent] rounded-[10px]'
                
                />
               </section>
            </div>


            <div className=" font-bold mt-3">
                <label htmlFor="contact">Client's Contact <span className=' text-[red]'>*</span></label>
               <section className=' flex justify-between'>
               <CustomInput
                 type="text"
                 name='phone'
                 required
                 placeholder='Your Phone Number'
                 className='border-[2px] border-solid border-emerald-600 h-[50px] w-[48%]  bg-[transparent] rounded-[10px]'
                
                />

                <CustomInput
                 type="email"
                 name='email'
                 required
                 placeholder='Your Email'
                 className='border-[2px] border-solid border-emerald-600 h-[50px] w-[48%]  bg-[transparent] rounded-[10px]'
                
                />
               </section>
            </div>


            <div className=" font-bold mt-3">
                <label htmlFor="name">Event Name <span className=' text-[red]'>*</span></label>
                <CustomInput
                 type="text"
                 name='event_name'
                 required
                 placeholder='Event Name'
                 className='border-[2px] border-solid border-emerald-600 h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                
                />
            </div>

            <div className=" font-bold mt-3">
                <label htmlFor="name">Event Date <span className=' text-[red]'>*</span></label>
                <CustomInput
                 type="date"
                 name='event_date'
                 required
                 placeholder='First Name'
                 className='border-[2px] border-solid border-emerald-600 h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                
                />
            </div>

            <div className=" font-bold mt-3">
                <label htmlFor="name">Event Venue <span className=' text-[red]'>*</span></label>
                <CustomInput
                 type="text"
                 name='event_venue'
                 required
                 placeholder='Please Enter the address of the event here'
                 className='border-[2px] border-solid border-emerald-600 h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                
                />
            </div>

            <div className=" w-full flex justify-center mt-4">
            <button type="submit" className=' h-[40px] w-[90%] bg-[] rounded-[10px] hover:bg-[#E7F0DC]' style={{border: '2px solid #5F8670',}}>Book Us Now</button>

            </div>

            
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Catering3

