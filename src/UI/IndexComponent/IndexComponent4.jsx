import React, { useEffect, useState } from 'react'
import Work from "./Work"
import { BsPeople } from 'react-icons/bs'
import { RiRestaurantLine } from 'react-icons/ri'
import { FaUserPlus } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa6'
// import { FaUserAstronaut } from "react-icons/fa6";
// import { ImHome } from "react-icons/im";
// import { FaCcMastercard } from "react-icons/fa";
// import { FaTruck } from "react-icons/fa";

function IndexComponent4() {
    var [restaurant,setRestuarant]=useState(0)
    var [people,setPeople]=useState(0)
    var [user,setUser]=useState(0)
    var [menu,setMenu]=useState(0)
    var targetRestuarant = 50;
    var targetPeople = 2000;
    var targetmenu = 1500;
    useEffect(() => {
        const bb = setInterval(() => {
          setRestuarant((prev) => {
            if (prev >= targetRestuarant) {
              clearInterval(bb);
              return prev;
            } else {
              return prev + 1;
            }
          });
        }, 500);
    
        return () => clearInterval(bb);
      }, [targetRestuarant]); // Ensure effect runs only when `targetRestaurant` changes
    
      useEffect(() => {
        const cc = setInterval(() => {
          setPeople((prev2) => {
            if (prev2 >= targetPeople) {
              clearInterval(cc);
              return prev2;
            } else {
              return prev2 + 1;
            }
          });
        }, 10);
    
        return () => clearInterval(cc);
      }, [targetPeople]); // Ensure effect runs only when `targetPeople` changes
    


      useEffect(() => {
        const dd = setInterval(() => {
          setMenu((prev3) => {
            if (prev3 >= targetmenu) {
              clearInterval(dd);
              return prev3;
            } else {
              return prev3 + 1;
            }
          });
        }, 10);
    
        return () => clearInterval(dd);
      }, [targetmenu]); // Ensure effect runs only when `targetPeople` changes
    

  return (
    <div className='min-h-[75vh] pb-[120px] sm:pb-[100px] w-full bg-[#E7F0DC] flex flex-col items-center relative mb-[100px]'>
        {/* <section className=" h-[100px] bg-[] w-full text-center">
            <h1 className=' text-[35px] font-bold'>How It Works</h1>
            <p className=' text-[20px] mt-2'>Ordering your favorite meals is easy! Just follow these simple steps</p>
        </section> */}

        <Work/>

        {/* <section className=" min-h-[300px] w-[90%] bg-[] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-5">
            <div className="h-[300px] bg-white flex flex-col justify-center relative">
                <div className="how h-[40px] w-[40px] bg-white rounded-[50%] absolute top-[-15px] right-[45%] md:right-[40%] text-[25px] text-center">1</div>
                <div className=" h-[150px] w-full bg-[] flex justify-center items-center">
                 <FaUserAstronaut size={100} color='#5F8670' />
                </div>
                <div className=" text-center">
                    <h1 className=' text-[20px] font-bold'>Search by address</h1>
                    <p className=' text-[16px]'>Find all restaurants <br />available in your zone.</p>
                </div>
            </div>

            <div className="h-[300px] bg-white flex flex-col justify-center relative">
            <div className="how h-[40px] w-[40px] bg-white rounded-[50%] absolute top-[-15px] right-[45%] md:right-[40%] text-[25px] text-center">2</div>

            <div className=" h-[150px] w-full bg-[] flex justify-center items-center">
            <ImHome size={100} color='#5F8670' />
                </div>
                <div className=" text-center">
                    <h1 className=' text-[20px] font-bold'>Choose a restaurant</h1>
                    <p className=' text-[16px]'>We have more than <br />1000s of menus online.</p>
                </div>
            </div>


            <div className="h-[300px] bg-[white] flex flex-col justify-center relative">
            <div className="how h-[40px] w-[40px] bg-white rounded-[50%] absolute top-[-15px] right-[45%] md:right-[40%] text-[25px] text-center">3</div>
 
            <div className=" h-[150px] w-full bg-[] flex justify-center items-center">
            <FaCcMastercard size={100} color='#5F8670' />
                </div>
                <div className=" text-center">
                    <h1 className=' text-[20px] font-bold'>Pay by card or cash</h1>
                    <p className=' text-[16px]'>It's quick, easy and <br />totally secure.</p>
                </div>
            </div>

            <div className="h-[300px] bg-white flex flex-col justify-center relative">
            <div className="how h-[40px] w-[40px] bg-white rounded-[50%] absolute top-[-15px] right-[45%] md:right-[40%] text-[25px] text-center">4</div>

            <div className=" h-[150px] w-full bg-[] flex justify-center items-center">
            <FaTruck  size={100} color='#5F8670'/>
                </div>
                <div className=" text-center">
                    <h1 className=' text-[20px] font-bold'>Delivery - Takeaway</h1>
                    <p className=' text-[16px]'>You are lazy? Are you <br />backing home?</p>
                </div>
            </div>
        </section> */}
 
        <div className='bg-[#5F8670] text-white py-6 px-4 absolute -bottom-10 rounded-lg w-[80%]'>
          <div className="max-w-6xl mx-auto flex flex-wrap justify-around gap-6">
            <div className="flex items-center space-x-2 text-lg">
              <span className="text-2xl"><RiRestaurantLine/></span>
              <p>
                <span className="font-bold">{restaurant}+</span> Restaurants
              </p>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <span className="text-2xl"><BsPeople/></span>
              <p>
                <span className="font-bold">{people}+</span> People Served
              </p>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <span className="text-2xl"><FaUserPlus/></span>
              <p>
                <span className="font-bold">{user}+</span> Registered Users
              </p>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <span className="text-2xl"><FaUsers/></span>
              <p>
                <span className="font-bold">{menu}+</span> Total User
              </p>
            </div>
          </div>
                {/* <span className='text-[1rem] md:text-[1rem] lg:text-[1.5rem]'>Restaurant:</span> <span className='text-[1rem] md:text-[1rem] lg:text-[1.5rem]'>{restaurant}+</span> */}
            
            {/* <div className="h-[40px] bg-[] text-white flex justify-center items-center">
                <span className='text-[1rem] md:text-[1rem] lg:text-[1.5rem]'>People Served:</span> <span className='text-[1rem] md:text-[1rem] lg:text-[1.5rem]'>{people}+</span>
            </div>
            <div className="h-[40px] bg-[] text-white  flex justify-center items-center">
               <span className='text-[1rem] md:text-[1rem] lg:text-[1.5rem]'>Registered Users:</span>  <span className='text-[1rem] md:text-[1rem] lg:text-[1.5rem]'>{user}+</span>
            </div>
            <div className="h-[40px] bg-[] text-white  flex justify-center items-center">
                <span className='text-[1rem] md:text-[1rem] lg:text-[1.5rem]'>Total User</span><span className='text-[1rem] md:text-[1rem] lg:text-[1.5rem]'>{menu}+</span>
            </div> */}
        </div>

    </div>
  )
}

export default IndexComponent4