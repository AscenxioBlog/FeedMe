import React, { useEffect } from 'react'
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GiMokaPot } from "react-icons/gi";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { CiClock2 } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";

import { motion, useAnimation } from 'framer-motion';

function Register2() {
      // const FadeEffect = () => {
        const controls = useAnimation();
      
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          const fadeThreshold = 300; // Adjust as needed
      
          if (scrollTop > fadeThreshold) {
            controls.start({ opacity: 1, x: 0 , y: 0 });
          } else {
            controls.start({ opacity: 0, x: -100, y: 100 });
          }
        };

        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
        
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, [controls]);
  return (
    <div>
        <div className=' min-h-[100vh] w-full bg-[] flex flex-col items-center'>
        <section className=' h-[100px] w-full bg-[] flex flex-col justify-center items-center'>
            <h1 className=' text-[25px] md:text-[30px]'>Increase your customers</h1>
            <p className='md:text-[18px]'>Lorem ipsum dolor sit, amet consectetur adipisicing .</p>
        </section>

        <section className=" w-[80%]  flex justify-center">

       
        <motion.div animate={controls} transition={{ duration: 0.7 }} >
        <section className=" min-h-[250px] w-[100%] md:w-[100%] lg:w-[100%] mt-5 bg-[] grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="min-h-[200px] bg-white grid grid-cols-[20%,80%]">
                <div className="bg-[] text-[25px] md:text-[50px] flex justify-center  pt-3">
                <RiMoneyDollarCircleLine />
                </div>
                <div className="bg-[]">
                    <h1 className=' text-[25px] md:text-[30px]'>Increase your sales</h1>
                    <p>Empowering our team with competitive fees that reflect the
                         excellence they bring to every task. At Great Fees, we 
                         invest in your growth, ensuring that your dedication is
                          rewarded and your value recognized."</p>
                </div>
            </div>

            
            <div className="min-h-[200px] bg-white grid grid-cols-[20%,80%]">
                <div className="bg-[] text-[25px] md:text-[50px] flex justify-center  pt-3">
                <GiMokaPot />
                </div>
                <div className="bg-[]">
                    <h1 className=' text-[25px] md:text-[30px]'>H24 chat support</h1>
                    <p>Unlocking potential and expanding horizons—at Growing Possibility,
                         we believe in your power to achieve more. Together, we cultivate
                          an environment where your skills thrive, and opportunities are endless."</p>
                </div>
            </div>           
            
            
            
            <div className="min-h-[200px] bg-white grid grid-cols-[20%,80%]">
                <div className="bg-[] text-[25px] md:text-[50px] flex justify-center  pt-3">
                <HiDevicePhoneMobile />
                </div>
                <div className="bg-[]">
                    <h1 className=' text-[25px] md:text-[30px]'>Delivery or Takeaway</h1>
                    <p>Take control of your shopping experience—easily manage your orders anytime,
                         anywhere, with our user-friendly app. Your orders, your way, in just a few taps!"</p>
                </div>
            </div> 


 <div className="min-h-[200px] bg-white grid grid-cols-[20%,80%]">
                <div className="bg-[] text-[25px] md:text-[50px] flex justify-center  pt-3">
                <HiDevicePhoneMobile />
                </div>
                <div className="bg-[]">
                    <h1 className=' text-[25px] md:text-[30px]'>Mobile support</h1>
                    <p>"Maximize your impact in a small space—where every detail counts,
                         and your creativity shines. Work smarter, not harder, in an 
                         environment designed for efficiency and innovation."</p>
                </div>
            </div>          
            
            
            
            <div className="min-h-[200px] bg-white grid grid-cols-[20%,80%]">
                <div className="bg-[] text-[25px] md:text-[50px] flex justify-center  pt-3">
                <CiClock2 />
                </div>
                <div className="bg-[]">
                    <h1 className=' text-[25px] md:text-[30px]'>Cash payment</h1>
                    <p>"Your time, your terms—embrace flexibility that fits your 
                        lifestyle. With flexible hours, you have the freedom
                         to balance work and life, ensuring productivity and
                          personal well-being go hand in hand."</p>
                </div>
            </div>          
            
 
            <div className="min-h-[200px] bg-white grid grid-cols-[20%,80%]">
                <div className="bg-[] text-[25px] md:text-[50px] flex justify-center  pt-3">
                <CiCalendarDate />
                </div>
                <div className="bg-[]">
                    <h1 className=' text-[25px] md:text-[30px]'>Secure card payment</h1>
                    <p>"Tailor your schedule to your life—enjoy the freedom of flexible
                         days, where you choose when to work. Achieve the perfect 
                         balance between your career and personal time."</p>
                </div>
            </div>    
            
        </section>
    </motion.div>
    </section>
       
    </div>
    </div>
  )
}

export default Register2