import React, { useState } from 'react'
import CustomInput from '../ReusableComponent/MyInput/CustomInput'
import { GiCancel } from "react-icons/gi";


function SignUp({SeeSignUp,passme}) {
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    password: "",
  });

  const handleDataChange = (e) => {
    const { name, value } = e.target;

    setFormdata({
      ...formdata,
      [name]: value,
    });
    console.log({
      ...formdata,
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch('http://localhost:5000/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata), 
      });

      const data = await response.json(); // Parse the JSON response

      if (response.ok) {
        // If sign-up is successful
        alert(data.message); // Display success message
      } else {
        alert('Sign-up failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
        <div  className=" SignUp h-[600px] w-full bg-[#5F8670] rounded-[30px] flex flex-col items-center mt-6 relative">
        <button onClick={passme}  className=' absolute top-3 right-3 text-[#cf9292]'><GiCancel size={25} /></button>

          <section className=" h-[40px] w-full bg-[] flex justify-center text-[20px] text-white font-bold">
        <h1>Sign Up To Continue</h1>
          </section>
            <div className=" w-[100%] pl-[30px] md:pl-[50px] lg:pl-[80px]">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* <label htmlFor="">First Name</label> <br /> */}
                <CustomInput
                            type="text"
                            name="firstname"
                            required 
                             placeholder= 'First Name'
                             value={formdata.firstname}
                             onChange={handleDataChange}
                            className='bb h-[50px] w-[80%]  bg-[transparent] rounded-[5px]'
                        />
                        <br />
                {/* <input type="text" className='inp' placeholder='Input your first name here' /> */}

                <br />
                {/* <label htmlFor="">Last Name</label> <br /> */}
                <CustomInput
                            type="text"
                            name="lastname"
                            required 
                            placeholder='Last Name'
                            value={formdata.lastname}
                            onChange={handleDataChange}
                            className='bb h-[50px] w-[80%]  bg-[transparent] rounded-[5px]'
                        /> <br />
                {/* <input type="text" className='inp' placeholder='Write your last name here'/> */}


                <br />
                {/* <label htmlFor="">Email</label> <br /> */}
                <CustomInput
                            type="email"
                            name="email"
                            required 
                            placeholder= 'Email'
                            value={formdata.email}
                            onChange={handleDataChange}
                            className='bb h-[50px] w-[80%]  bg-[transparent] rounded-[5px]'
                        /> <br />
                {/* <input type="email" className='inp' placeholder='Write our correct email here'/> */}


                <br />
                {/* <label htmlFor="">Phone Number</label> <br /> */}
                <CustomInput
                            type="text"
                            name="tel"
                            required 
                            placeholder='telephone'
                            value={formdata.tel}
                            onChange={handleDataChange}
                            className='bb h-[50px] w-[80%]  bg-[transparent] rounded-[5px]'
                        /> <br />
                {/* <input type="text" className='inp' placeholder='Your active phoe number' /> */}


                <br />
                {/* <label htmlFor="">Password</label> <br /> */}
                <CustomInput
                            type="password"
                            name="password"
                            required 
                            placeholder= 'Password'
                            value={formdata.password}
                            onChange={handleDataChange}
                            className='bb h-[50px] w-[80%]  bg-[transparent] rounded-[5px]'
                        /> <br /> <br />

                        {/* <label htmlFor="">Comfirm Password</label> */}
                        <CustomInput
                            type="password"
                            required 
                             placeholder= 'Comfirm Password'
                            className='bb h-[50px] w-[80%]  bg-[transparent] rounded-[5px]'
                        /> <br />
                {/* <input type="text" className='inp' placeholder='Any refferal code?'/><br /> */}

                <br />
                <button type='submit'>submit</button>
                {/* <CustomInput
                            type="button"
                            value="Submit"
                            className='bb h-[50px] w-[80%] cursor-pointer text-white font-bold hover:text-black transition-all duration-500 bg-[transparent] hover:bg-[#E7F0DC] rounded-[5px]'
                        /> */}
                {/* <input type="submit" value={'Next'} className='sub' /> */}
              </form>
            </div> 

            <section className="w-full flex justify-center mt-2 space-x-2"> <span>Already have an account?</span> 
             <span className=' underline font-bold'> <button onClick={SeeSignUp}>Sign In</button></span>  <span>here</span>
            </section>
        </div>
      
    </div>
  )
}

export default SignUp
