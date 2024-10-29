import React, { useEffect, useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import API_URL from '../../Config';
import { Link } from 'react-router-dom';

function FooterComponent() {

    let [someRestaurant,setSomerestaurant] = useState([]);

  useEffect(()=>{
    fetch(`${API_URL}api/fewrestaurants`)
      .then(res=>res.json())
      .then(json=>setSomerestaurant(json))
      .catch(err=>console.log(`Error:${err}`))

  },[])
  return (
    <div className='foot min-h-[600px] w-full bg-black text-white'>
        <div className=" min-h-[400px] w-full bg-[] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[20%,20%,20%,40%]">
            <div className=" bg-[] flex flex-col gap-4 pl-5 lg:pl-0 ">
            <h1 className=' logo text-[35px] font-extrabold text-[#FF5A3C]'>Feed<span className=' text-white'>Me</span></h1>
                
                <h1>Contact</h1>
                <p><a href="">Myona1648@gmail.com</a></p>
                <p><a href="">08057320503</a></p>
            </div>

            <div className=" bg-[] flex flex-col gap-4 lg:items-center pl-5 lg:pl-0">
                <h1 className=' text-[25px] font-bold'>Company</h1>

                <span><a href="">Carrers</a></span>
                <span><a href="">FAQs</a></span>
                <span><a href="">User Policy</a></span>
                <span><a href="">Support</a></span>
            </div>
            <div className=" bg-[] flex flex-col gap-4 lg:items-center pl-5 lg:pl-0">
                <h1 className=' text-[25px] font-bold'>Locations</h1>

                <span><a href="">Lekki</a></span>
                <span><a href="">Ojo</a></span>
                <span><a href="">MaryLand</a></span>
                <span><a href="">Victoria Island</a></span>
            </div>
            <div className=" bg-[] flex flex-col gap-4 lg:items-center pl-5 lg:pl-0">
                <h1 className=' text-white text-[25px] font-bold'>Restaurants</h1>

                <div className="  grid grid-cols-2 gap-3">
                {someRestaurant
          ? someRestaurant.map((item) => (
              <>
                <Link to={`/menu/${item.name}/${item._id}`} key={item._id}>
                 
                          <h1 className=" font-bold text-[17px] mb-1">
                            {item.name}
                          </h1>
                        
                </Link>
              </>
            ))
          : null}
                </div>
                
            </div>
        </div>


        <div className=" h-[170px] w-full bg-[] text-[25px] font-bold lg:pl-[50px] flex flex-col justify-center">
            <h1 >Socials</h1>
            <div className=" h-[50px] w-[330px] mt-2 grid grid-cols-5 gap-5">
                <div className=" bg-white rounded-[50%] flex justify-center items-center"><FaInstagram /></div>
                <div className=" bg-white rounded-[50%] flex justify-center items-center"><RiFacebookFill /></div>
                <div className=" bg-white rounded-[50%] flex justify-center items-center"> <FaTwitter /></div>
                <div className=" bg-white rounded-[50%] flex justify-center items-center"><FaLinkedinIn /></div>
                <div className=" bg-white rounded-[50%] flex justify-center items-center"><SiTiktok /></div>
            </div>
        </div>

        <div className=" text-white">
            <h1>© 2024 Bitxbase Technology - All Rights Reserved.</h1>
        </div>

    </div>
  )
}

export default FooterComponent