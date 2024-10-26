import React, { useEffect, useState } from 'react'
import { FaUserAstronaut } from "react-icons/fa6";
import { ImHome } from "react-icons/im";
import { FaCcMastercard } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

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
    <div className='min-h-[110vh] w-full bg-[#E7F0DC] flex flex-col items-center pb-[50px] md:pb-1 relative mb-[100px]'>
        <section className=" h-[100px] bg-[] w-full text-center">
            <h1 className=' text-[35px] font-bold'>How It Works</h1>
            <p className=' text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, a.</p>
        </section>

        <section className=" min-h-[300px] w-[90%] bg-[] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-[50px]">
            <div className="h-[300px] bg-white flex flex-col justify-center relative">
                <div className="how h-[40px] w-[40px] bg-white rounded-[50%] absolute top-[-15px] right-[40%] text-[25px] text-center">1</div>
                <div className=" h-[150px] w-full bg-[] flex justify-center items-center">
                <FaUserAstronaut size={100} color='#E7F0DC' />
                </div>
                <div className=" text-center">
                    <h1 className=' text-[20px] font-bold'>Search by address</h1>
                    <p className=' text-[16px]'>Find all restaurants <br />available in your zone.</p>
                </div>
            </div>

            <div className="h-[300px] bg-white flex flex-col justify-center relative">
            <div className="how h-[40px] w-[40px] bg-white rounded-[50%] absolute top-[-15px] right-[40%] text-[25px] text-center">2</div>

            <div className=" h-[150px] w-full bg-[] flex justify-center items-center">
            <ImHome size={100} color='#E7F0DC' />
                </div>
                <div className=" text-center">
                    <h1 className=' text-[20px] font-bold'>Choose a restaurant</h1>
                    <p className=' text-[16px]'>We have more than <br />1000s of menus online.</p>
                </div>
            </div>


            <div className="h-[300px] bg-[white] flex flex-col justify-center relative">
            <div className="how h-[40px] w-[40px] bg-white rounded-[50%] absolute top-[-15px] right-[40%] text-[25px] text-center">3</div>
 
            <div className=" h-[150px] w-full bg-[] flex justify-center items-center">
            <FaCcMastercard size={100} color='#E7F0DC' />
                </div>
                <div className=" text-center">
                    <h1 className=' text-[20px] font-bold'>Pay by card or cash</h1>
                    <p className=' text-[16px]'>It's quick, easy and <br />totally secure.</p>
                </div>
            </div>

            <div className="h-[300px] bg-white flex flex-col justify-center relative">
            <div className="how h-[40px] w-[40px] bg-white rounded-[50%] absolute top-[-15px] right-[40%] text-[25px] text-center">4</div>

            <div className=" h-[150px] w-full bg-[] flex justify-center items-center">
            <FaTruck  size={100} color='#E7F0DC'/>
                </div>
                <div className=" text-center">
                    <h1 className=' text-[20px] font-bold'>Delivery - Takeaway</h1>
                    <p className=' text-[16px]'>You are lazy? Are you <br />backing home?</p>
                </div>
            </div>
        </section>
 
        <div className=" min-h-[60px] md:min-h-[100px] w-[95%] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-3 bg-[#5F8670] absolute mb-[100px] mt-10 md:mb-0 bottom-[-150px] md:bottom-[-50px] rounded-[10px]">
            <div className="h-[40px] md:h-[100px] bg-[] text-white  flex justify-center items-center">
                <span className='text-[1rem] md:text-[1rem] lg:text-[1.5rem]'>Restaurant:</span> <span className='text-[1rem] md:text-[1rem] lg:text-[1.5rem]'>{restaurant}+</span>
            </div>
            <div className="h-[40px] md:h-[100px] bg-[] text-white flex justify-center items-center">
                <span className='text-[1rem] md:text-[1rem] lg:text-[1.5rem]'>People Served:</span> <span className='text-[1rem] md:text-[1rem] lg:text-[1.5rem]'>{people}+</span>
            </div>
            <div className="h-[40px] md:h-[100px] bg-[] text-white  flex justify-center items-center">
               <span className='text-[1rem] md:text-[1rem] lg:text-[1.5rem]'>Registered Users:</span>  <span className='text-[1rem] md:text-[1rem] lg:text-[1.5rem]'>{user}+</span>
            </div>
            <div className="h-[40px] md:h-[100px] bg-[] text-white  flex justify-center items-center">
                <span className='text-[1rem] md:text-[1rem] lg:text-[1.5rem]'>Total User</span><span className='text-[1rem] md:text-[1rem] lg:text-[1.5rem]'>{menu}+</span>
            </div>
        </div>

    </div>
  )
}

export default IndexComponent4