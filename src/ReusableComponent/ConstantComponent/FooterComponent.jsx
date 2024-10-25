import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

function FooterComponent() {
  return (
    <div className='foot min-h-[600px] w-full bg-black'>
        <div className=" min-h-[400px] w-full bg-[] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[20%,20%,20%,40%]">
            <div className=" bg-[] flex flex-col gap-4 pl-5 lg:pl-0 ">
            <h1 className=' logo text-[35px] font-extrabold text-[#FF5A3C]'>Feed<span className=' text-white'>Me</span></h1>
                
                <h1>Contact</h1>
                <p><a href="">hello@feedmedelivery.com</a></p>
                <p><a href="">+234 12345678</a></p>
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
                <h1 className=' text-[25px] font-bold'>Restaurants</h1>

                <table>
                    <tbody>
                        <tr>
                        <td><a href="">Wing Kings</a></td>
                        <td><a href="">Good Greens</a></td>
                        </tr>

                        <tr>
                        <td><a href="">Jollof & Co</a></td>
                        <td><a href="">Suya Central</a></td>
                        </tr>

                        <tr>
                        <td><a href="">Sweet Treats</a></td>
                        <td><a href="">Pastry Corner</a></td>
                        </tr>

                        <tr>
                        <td><a href="">Sunny Side Club</a></td>
                        <td><a href="">Fresh Press</a></td>
                        </tr>


                        <tr>
                        <td><a href="">Mama's Kitchen</a></td>
                        <td><a href="">Lagos Breakfast Club</a></td>
                        </tr>

                        <tr>
                        <td><a href="">Frankies</a></td>
                        <td><a href="">The Night Train</a></td>
                        </tr>


                        <tr>
                        <td><a href="">CHoW Asian</a></td>
                        <td><a href="">Red Pepper</a></td>
                        </tr>

                        <tr>
                        <td><a href="">Wrap City</a></td>
                        <td><a href="">Iya Lati Kitchen</a></td>
                        </tr>
                    </tbody>
                </table>
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