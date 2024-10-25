import React, { useEffect, useState } from 'react'
import CustomInput from '../../ReusableComponent/MyInput/CustomInput'
import SliderComponent from '../../ReusableComponent/Slider/SliderComponent'
import { Link } from 'react-router-dom'
import { IoCheckmarkCircle } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { SlPaypal } from "react-icons/sl";
import { BsCashCoin } from "react-icons/bs";


function Payment2() {
    var Delivery = 1000;
    var [totalmoney,setTotalMoney]=useState()
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
      },[newcart])

      const totalPrice = newcart.reduce((total, item) => total + (item.price * item.quantity), 0);
  return (
    <div>
         <div className=' min-h-[100vh] w-full bg-[#E7F0DC] grid grid-cols-1 lg:grid-cols-[31%,42%,24%] gap-4 '>
        <div className="h-[60vh] md:h-[60vh] lg:h-[100vh] bg-[] flex items-center p-2">
            <div className=" min-h-[400px] w-full bg-[] flex justify-center">
                <SliderComponent/>
            </div>

        </div>

        <div className=" bg-[] ">
            <div className=" h-[80px] w-full bg-[#5F8670] text-[20px] md:text-[35px] flex justify-center items-center text-white font-bold">
                <h1>Your payment details</h1>
            </div>
            
           <div className="p-3 bg-slate-100">
            <form action="" method="post" className=' space-y-6'>
                <div className=" h-[70px] w-full bg-slate-300 rounded-xl flex justify-between items-center pr-2 pl-2">
                    <div className=" flex gap-5">
                    <IoCheckmarkCircle size={30} /> <span className=' text-[20px] font-semibold'>Credit Card</span>
                    </div>
                    <span><CiCreditCard1 size={30} /></span>
                </div>
            <div className=" font-bold">
                <label htmlFor="name">Name on card <span className=' text-[red]'>*</span></label>
                <CustomInput
                 type="text"
                 name='name'
                 required
                 placeholder='First Name and Last Name'
                 className='bb h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                
                />
            </div>

            <div className=" font-bold">
                <label htmlFor="name">Card Number<span className=' text-[red]'>*</span></label>
                <CustomInput
                 type="text"
                 name='number'
                 required
                 placeholder='Card Number'
                 className='bb h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                
                />
            </div>


            <div className=" font-bold ">
                <div className="flex justify-around">
                <label htmlFor="date">Expiration Date <span className=' text-[red]'>*</span></label> 
                <label htmlFor="">security code</label>
                </div>
                <div className=" flex justify-between items-center bb h-[60px] w-[100%]  bg-[transparent] rounded-[10px] ">
                <CustomInput
                 type="text"
                 name='month'
                 required
                 placeholder='mm'
                 className=' h-[50px] w-[20%]  bg-[transparent] rounded-[10px]'
                
                />

                <CustomInput
                 type="text"
                 name='year'
                 required
                 placeholder='yyyy'
                 className=' h-[50px] w-[20%]  bg-[transparent] rounded-[10px]'
                
                />

                <CustomInput
                 type="text"
                 name='code'
                 required
                 placeholder='Last 3 digit'
                 className=' h-[50px] w-[20%]  bg-[transparent] rounded-[10px]'
                
                />

                <div className=" h-[50px] w-[20%] font-normal">
                    <img src="https://www.ansonika.com/quickfood/img/icon_ccv.gif" alt="" />
                </div>
                </div>
                
                
            </div>

            <div className=" h-[70px] w-full bg-slate-300 rounded-xl flex justify-between items-center pr-2 pl-2">
                    <div className=" flex gap-5 items-center">
                    <span><input className='h-[25px] w-[25px]' type="radio" name='paypal' /></span> <span className=' text-[20px] font-semibold'>Pay with paypal</span>
                    </div>
                    <span><SlPaypal size={30} /></span>
                </div>

                <div className=" h-[70px] w-full bg-slate-300 rounded-xl flex justify-between items-center pr-2 pl-2">
                    <div className=" flex gap-5 items-center">
                    <span><input className='h-[25px] w-[25px]' type="radio" name='paypal' /></span> <span className=' text-[20px] font-semibold'>Pay with cash</span>
                    </div>
                    <span><BsCashCoin size={30} /></span>
                </div>

            
        {/* <Link to='/payment'  >
            <div className="bb h-[40px] w-[90%] bg-[] font-bold rounded-[10px] lg:ml-3 hover:bg-[#5F8670] cursor-pointer flex justify-center items-center">Order Now</div>
        </Link> */}
        <br />
        <CustomInput
                     type="submit"
                    //  name="/"
                    //  required  
                    // placeholder= 'Your Postal code/'
                     className='bb h-[40px] w-[90%] bg-[] rounded-[10px] lg:ml-3 hover:bg-[#5F8670] cursor-pointer'

                />

            </form>
           </div>


        </div>

        <div className=" bg-[] p-2">
        {
                newcart.map((item, index)=>(
                    <li key={index} className="border-b py-2 flex items-center">
                    <img src={`http://localhost:5000${item.image}`} alt={item.name} className="w-16 h-16 object-cover mr-4" />
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
             <p className="font-bold">Amount To Be Paid: {totalmoney}</p>

             
            {/* Display all the product in cart here */}
            {/* <Cart/> */}
        </div>
      
    </div>
      
    </div>
  )
}

export default Payment2
