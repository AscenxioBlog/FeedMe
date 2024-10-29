import React, { useEffect, useRef, useState } from 'react'
import Cart from '../../ReusableComponent/Cart'
import CustomInput from '../../ReusableComponent/MyInput/CustomInput'
import SliderComponent from '../../ReusableComponent/Slider/SliderComponent'
import { Link } from 'react-router-dom'

function CheckoutForm2() {
    var Delivery = 1000;
    let [newcart,setNewcart]=useState(()=>{
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart):[]
      })

      useEffect(()=>{
        const storenewcart = localStorage.getItem('cart');
        setNewcart(storenewcart? JSON.parse(storenewcart) : []);

        const handleStorageChange = ()=>{
            const updateCart = localStorage.getItem('cart');
            setNewcart(updateCart? JSON.parse(updateCart) : []);

        }

        window.addEventListener('storageUpdate',handleStorageChange );
        return ()=> {
            window.removeEventListener('storageUpdate',handleStorageChange );
        };
      },[])

      const totalPrice = newcart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className=' min-h-[100vh] w-full bg-[#E7F0DC] grid grid-cols-1 lg:grid-cols-[32%,40%,24%] gap-6 '>
        <div className="h-[60vh] md:h-[60vh] lg:h-[100vh] bg-[] flex items-center p-2">
            <div className=" min-h-[400px] w-full bg-[] flex justify-center">
                <SliderComponent/>
            </div>

        </div>

        <div className=" bg-[] ">
            <div className=" h-[80px] w-full bg-[#5F8670] text-[20px] md:text-[35px] flex justify-center items-center text-white font-bold">
                <h1>Your order details</h1>
            </div>
            
           <div className=" p-5">
            <form action="" method="post">
            <div className=" font-bold">
                <label htmlFor="name">First name <span className=' text-[red]'>*</span></label>
                <CustomInput
                 type="text"
                 name='first_name'
                 required
                 placeholder='First Name'
                 className='border-[2px] border-solid border-emerald-600 h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                
                />
            </div>

            <div className=" font-bold">
                <label htmlFor="name">Last name <span className=' text-[red]'>*</span></label>
                <CustomInput
                 type="text"
                 name='last_name'
                 required
                 placeholder='Last Name'
                 className='border-[2px] border-solid border-emerald-600 h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                
                />
            </div>


            <div className=" font-bold">
                <label htmlFor="telephone/mobile">Telephone/mobile <span className=' text-[red]'>*</span></label>
                <CustomInput
                 type="text"
                 name='Telephone/mobile'
                 required
                 placeholder='Telephone/mobile'
                 className='border-[2px] border-solid border-emerald-600 h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                
                />
            </div>

            <div className=" font-bold">
                <label htmlFor="email">Email <span className=' text-[red]'>*</span></label>
                <CustomInput
                 type="Email"
                 name='Telephone/mobile'
                 required
                 placeholder='Your Email'
                 className='border-[2px] border-solid border-emerald-600 h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                
                />
            </div>


            <div className=" font-bold">
            <label htmlFor="email">Your full address <span className=' text-[red]'>*</span></label>
                <CustomInput
                 type="text"
                 name='address'
                 required
                 placeholder='Your full address'
                 className='border-[2px] border-solid border-emerald-600 h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                
                />
            </div>


           



        <div className=" min-h-[100px] w-full bg-[] grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className=" bg-[] font-bold space-y-2">
                <label htmlFor="">City<span className=' text-[red]'>*</span></label> <br />
                <CustomInput
                     type="text"
                    name="city"
                     required 
                    placeholder= 'Your City'
                     className='border-[2px] border-solid border-emerald-600 h-[50px] w-[90%] bg-[transparent] rounded-[5px]'

                />
            </div>
            <div className=" bg-[] font-bold space-y-2">
            <label htmlFor="">Postal code</label> <br />
                <CustomInput
                     type="text"
                     name="Postal_code"
                     required  
                    placeholder= 'Your Postal code'
                     className='border-[2px] border-solid border-emerald-600 h-[50px] w-[90%] bg-[transparent] rounded-[5px]'

                />
            </div>
        </div>

        <div className=" min-h-[100px] w-full bg-[] grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className=" bg-[] font-bold space-y-2">
                <label htmlFor="">Delivery Day<span className=' text-[red]'>*</span></label> <br />
                <select className='border-[2px] border-solid border-emerald-600 h-[50px] w-[90%] bg-[transparent] rounded-[5px]' required  name="" id="">
                    <option value="">Select Day</option>
                    <option value="">Today</option>
                    <option value="">Tomorrow</option>
                </select>
                {/* <CustomInput
                     type="text"
                    name="city"
                     required 
                    placeholder= 'Your City'
                     className='bb h-[50px] w-[90%] bg-[transparent] rounded-[5px]'

                /> */}
            </div>
            <div className=" bg-[] font-bold space-y-2">
            <label htmlFor="">Delivery Time<span className=' text-[red]'>*</span></label> <br />
                <CustomInput
                     type="time"
                     name="time"
                    //  required  
                    // placeholder= 'Your Postal code/'
                     className='border-[2px] border-solid border-emerald-600 h-[50px] w-[90%] bg-[transparent] rounded-[5px]'

                />
            </div>
        </div>
        <Link to='/payment'  >
            <div className="border-[2px] border-solid border-emerald-600 h-[40px] w-[90%] bg-[] font-bold rounded-[10px] lg:ml-3 hover:bg-[#5F8670] cursor-pointer flex justify-center items-center">Order Now</div>
        </Link>

        {/* <CustomInput
                     type="submit"
                    //  name="/"
                    //  required  
                    // placeholder= 'Your Postal code/'
                     className='bb h-[40px] w-[90%] bg-[] rounded-[10px] lg:ml-3 hover:bg-[#5F8670] cursor-pointer'

                /> */}

            </form>
           </div>


        </div>

        <div className=" bg-[] p-2">
            {
                newcart.map((item, index)=>(
                    <li key={index} className="border-b py-2 flex items-center">
                    <img src={`${item.image}`} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                    <div className="flex-1">
                      <p className="font-bold">{item.name}</p>
                     
                      <p>SubTotal: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                     
                      <p className=' font-bold'>{item.quantity}</p>
                     
                    </div>
                   
                  </li>
                ))
            }
             <p className="font-bold">Total Price: ${totalPrice.toFixed(2)}</p>
             <p className="font-bold">Delivery Fee: {Delivery} </p>
            
            {/* <Cart/> */}
        </div>
      
    </div>
  )
}

export default CheckoutForm2
