import React from 'react'
import CustomInput from '../../ReusableComponent/MyInput/CustomInput'


function Register4() {
  return (
    <div>
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
                <label htmlFor="">Restaurant Name<span className=' text-[red]'>*</span></label> <br />
                <CustomInput
                     type="email"
                  name="first_name"
                     required 
                    placeholder= 'King pizza'
                     className='bb h-[50px] w-[90%] bg-[transparent] rounded-[5px]'

                />
            </div>
            <div className=" bg-[] font-bold space-y-2">
            <label htmlFor="">Website</label> <br />
                <CustomInput
                     type="text"
                     name="Phone_number"
                     required  
                    placeholder= 'http://'
                     className='bb h-[50px] w-[90%] bg-[transparent] rounded-[5px]'

                />
            </div>
        </div>

        <div className=" min-h-[100px] w-full bg-[] grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className=" bg-[] font-bold space-y-2">
                <label htmlFor="">Restaurant Address<span className=' text-[red]'>*</span></label> <br />
                <CustomInput
                     type="email"
                  name="first_name"
                     required 
                    placeholder= 'address'
                     className='bb h-[50px] w-[90%] bg-[transparent] rounded-[5px]'

                />
            </div>
            <div className=" bg-[] font-bold space-y-2">
            <label htmlFor="">City<span className=' text-[red]'>*</span></label> <br />
                <CustomInput
                     type="text"
                     name="Phone_number"
                     required  
                    placeholder= 'Lagos'
                     className='bb h-[50px] w-[90%] bg-[transparent] rounded-[5px]'

                />
            </div>
        </div>
<br />




<div className=" w-full flex justify-center">
<CustomInput
                            type="submit"
                            name=""
                            required 
                            className='bb h-[50px] w-[80%]  bg-[transparent] hover:bg-[#5F8670] rounded-[5px]'
                        />
</div>

        
       
        </form>
</div>
          
    </div>
  
    </div>
  )
}

export default Register4