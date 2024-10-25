import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import AddComponent from './AddComponent'
import PhoneAdmin from './PhoneAdmin'
import { TiThMenu } from "react-icons/ti";
import CustomButton from '../ReusableComponent/MyButton/CustomButton';


function AdminComponent() {
    var [showMe,setShowMe]= useState('-300px')

    function HideModal() {
        if (showMe === '-300px') {
        setShowMe('0')
            
        }
        else{
        setShowMe('-300px')

        }
    }

  return (
    <div className=' min-h-[100vh] bg-[#E7F0DC] w-full md:grid md:grid-cols-[25%,75%] lg:grid-cols-[30%,70%]'>
       <PhoneAdmin
       showMe ={showMe}
       HideModal={HideModal}
       />
        <div className=" hidden md:inline-block bg-red-300 ">
            <section className=" bg-slate-200 w-full">
                <h1 className=' text-[20px] font-bold'>Main</h1>
                <Link to='/admin/profile'>
                    <div  className=' h-[60px] w-full bg-pink-600 flex items-center'>PROFILE</div>
                </Link>
                <Link to='/admin'>
                    <div  className=' h-[60px] w-full bg-pink-200 flex items-center'>DASHBOARD</div>
                </Link>
                <Link to='/admin/add'>
                    <div  className=' h-[60px] w-full bg-pink-600 flex items-center'>+ RESTUARANT </div>
                </Link>
                <Link to='/admin/addmenu'>
                    <div className=" h-[60px] w-full bg-pink-200 flex items-center">ADD MENU</div>
                </Link>
                <Link to='/admin/allrestaurant'> 
                    <div className="  h-[60px] w-full bg-pink-600 flex items-center">RESTAURANT</div>
                </Link>
                <Link to='/admin/allevent'>
                    <div  className=' h-[60px] w-full bg-pink-200 flex items-center'>ALL EVENT</div>
                </Link>

            </section>
        </div>
        <div className=" h-[100vh] bg-[red] overflow-y-scroll mb-[70px]">
            
            <div className=" bg-teal-300 ">
                <Outlet/>
            </div>
        </div>
      
    </div>
  )
}

export default AdminComponent
