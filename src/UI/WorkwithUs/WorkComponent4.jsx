import React from 'react'
import CustomInput from '../../ReusableComponent/MyInput/CustomInput'

function WorkComponent4() {
  return (
    <div className=' min-h-[100vh] w-full bg-[] flex flex-col items-center pb-5'>
        <div className=" h-[150px] w-full bg-[] flex justify-center items-center text-[25px] md:text-[30px] lg:text-[40px] font-bold">
            <h1>Please submit the form below</h1>
        </div>

<div className=" w-[80%]">
        <form action="" method="post">
        <div className=" min-h-[100px] w-full bg-[] grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className=" bg-[] font-bold space-y-2">
                <label htmlFor="">Firstname<span className=' text-[red]'>*</span></label> <br />
                <CustomInput
                     type="text"
                  name="first_name"
                     required 
                    placeholder= 'First Name'
                     className='bb h-[50px] w-[90%] bg-[transparent] rounded-[5px]'

                />
            </div>
            <div className=" bg-[] font-bold space-y-2">
            <label htmlFor="">Last Name<span className=' text-[red]'>*</span></label> <br />
                <CustomInput
                     type="text"
                     name="Last_name"
                     required  
                    placeholder= 'First Name'
                     className='bb h-[50px] w-[90%] bg-[transparent] rounded-[5px]'

                />
            </div>
        </div>


        <div className=" min-h-[100px] w-full bg-[] grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className=" bg-[] font-bold space-y-2">
                <label htmlFor="">Email<span className=' text-[red]'>*</span></label> <br />
                <CustomInput
                     type="email"
                  name="first_name"
                     required 
                    placeholder= 'Email'
                     className='bb h-[50px] w-[90%] bg-[transparent] rounded-[5px]'

                />
            </div>
            <div className=" bg-[] font-bold space-y-2">
            <label htmlFor="">Phone Number<span className=' text-[red]'>*</span></label> <br />
                <CustomInput
                     type="text"
                     name="Phone_number"
                     required  
                    placeholder= 'Phone Number'
                     className='bb h-[50px] w-[90%] bg-[transparent] rounded-[5px]'

                />
            </div>
        </div>



        <div className=" min-h-[100px] w-full bg-[] grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className=" bg-[] font-bold space-y-2">

                <span>Do you have a motorbike or scooter?<span className=' text-[red]'>*</span></span> <br />
               <div className=" flex space-x-8">
               <span className=' flex items-center space-x-2'>
               
               <CustomInput
                    type="radio"
                 name="bike"
                    required 
                //    placeholder= 'First Name'
                    className='bb h-[20px] w-[20px] bg-[transparent] rounded-[5px]'

               />
               <label htmlFor="yes">Yes</label>
              </span>

              <span className=' flex items-center space-x-2'>
              
              <CustomInput
                   type="radio"
                name="bike"
                   required 
                //   placeholder= 'First Name'
                   className='bb h-[20px] w-[20px] bg-[transparent] rounded-[5px]'

              />
              <label htmlFor="no">No</label>
             </span>
               </div>
            </div>
            <div className=" bg-[] font-bold space-y-2">
            <span>Are you a student?<span className=' text-[red]'>*</span></span> <br />
               <div className=" flex space-x-8">
               <span className=' flex items-center space-x-2'>
               
               <CustomInput
                    type="radio"
                 name="bike"
                    required 
                //    placeholder= 'First Name'
                    className='bb h-[20px] w-[20px] bg-[transparent] rounded-[5px]'

               />
               <label htmlFor="yes">Yes</label>
              </span>

              <span className=' flex items-center space-x-2'>
              
              <CustomInput
                   type="radio"
                name="bike"
                   required 
                //   placeholder= 'First Name'
                   className='bb h-[20px] w-[20px] bg-[transparent] rounded-[5px]'

              />
              <label htmlFor="no">No</label>
             </span>
               </div>
            </div>
        </div>


        <div className=" min-h-[100px] w-full bg-[] grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className=" bg-[] font-bold space-y-2">

                <span>Do you have a driving license?<span className=' text-[red]'>*</span></span> <br />
               <div className=" flex space-x-8">
               <span className=' flex items-center space-x-2'>
               
               <CustomInput
                    type="radio"
                 name="bike"
                    required 
                //    placeholder= 'First Name'
                    className='bb h-[20px] w-[20px] bg-[transparent] rounded-[5px]'

               />
               <label htmlFor="yes">Yes</label>
              </span>

              <span className=' flex items-center space-x-2'>
              
              <CustomInput
                   type="radio"
                name="bike"
                   required 
                //   placeholder= 'First Name'
                   className='bb h-[20px] w-[20px] bg-[transparent] rounded-[5px]'

              />
              <label htmlFor="no">No</label>
             </span>
               </div>
            </div>
            <div className=" bg-[] font-bold space-y-2">
            <span>Do you have an iPhone or Android mobile?<span className=' text-[red]'>*</span></span> <br />
               <div className=" flex space-x-8">
               <span className=' flex items-center space-x-2'>
               
               <CustomInput
                    type="radio"
                 name="bike"
                    required 
                //    placeholder= 'First Name'
                    className='bb h-[20px] w-[20px] bg-[transparent] rounded-[5px]'

               />
               <label htmlFor="yes">Yes</label>
              </span>

              <span className=' flex items-center space-x-2'>
              
              <CustomInput
                   type="radio"
                name="bike"
                   required 
                //   placeholder= 'First Name'
                   className='bb h-[20px] w-[20px] bg-[transparent] rounded-[5px]'

              />
              <label htmlFor="no">No</label>
             </span>
               </div>
            </div>
            
        </div>
        <CustomInput
                            type="submit"
                            name=""
                            required 
                            className='bb h-[50px] w-[80%]  bg-[transparent] hover:bg-[#5F8670] rounded-[5px]'
                        />
        </form>
</div>
          
    </div>
  )
}

export default WorkComponent4