import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function PhoneAdmin(props) {
    // var [showus,setShowus]= useState('0')

    // function HideModall() {
    //     setShowus('-300px')
    // }
  return (
    <div className=' absolute top-0 bottom-0 w-[300px] md:hidden bg-gray-900 z-10 mt-[100px]' style={{left:props.showMe, transition:'1s'}}>
        
      <div className="  bg-red-300 overflow-y-scroll">
            <section className=" bg-slate-200 w-full">
                <h1 className=' text-[20px] font-bold'>Main</h1>
                <Link onClick={props.HideModal} to='/admin/profile'>
                    <div  className=' h-[60px] w-full bg-pink-600 flex items-center'>PROFILE</div>
                </Link>
                <Link onClick={props.HideModal}  to='/admin'>
                    <div  className=' h-[60px] w-full bg-pink-200 flex items-center'>DASHBOARD</div>
                </Link>
                <Link onClick={props.HideModal}   to='/admin/add'>
                    <div  className=' h-[60px] w-full bg-pink-600 flex items-center'>+ RESTUARANT </div>
                </Link>
                <Link onClick={props.HideModal}   to='/admin/addmenu'>
                    <div className=" h-[60px] w-full bg-pink-200 flex items-center">ADD MENU</div>
                </Link>
                <Link onClick={props.HideModal}   to='/admin/allrestaurant'> 
                    <div className="  h-[60px] w-full bg-pink-600 flex items-center">RESTAURANT</div>
                </Link>
                <Link onClick={props.HideModal}   to='/admin/allevent'>
                    <div  className=' h-[60px] w-full bg-pink-200 flex items-center'>ALL EVENT</div>
                </Link>

            </section>
        </div>
    </div>
  )
}

export default PhoneAdmin
