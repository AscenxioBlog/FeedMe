import React, { useState } from 'react'
import { LuUser2 } from "react-icons/lu";

function Userprofile({username,showProfile,setLogin,setIsAuthenticated,setShowprofile}) {
    
    const logout = () => {
      localStorage.clear()
      localStorage.setItem('isAuthenticated',false)// Set user as authenticated
      setLogin('-130vh'); 
      setIsAuthenticated(false);
      setShowprofile("0");
      alert("You logged out")
    };

  return (
    <div className=' h-[120px] w-[170px] border border-solid border-black absolute right-[80px] rounded-lg transition-all duration-100 grid grid-rows-4' style={{scale:showProfile}}>
        <section className=' flex gap-3 row-span-2 cursor-pointer p-[10px]'>
            <LuUser2 className=" bg-red-500 p-[5px] box-content rounded-[50%]" size={20}/> 
            <p>{username}</p>
        </section>
        <section className=' row-span-1 border-b border-solid cursor-pointer border-red-300 hover:bg-[#FF5A3C96] pl-[10px]'> My Orders </section>
        <section className=' row-span-1 bg-red-900 pl-[10px] cursor-pointer rounded-bl-[7px] rounded-br-[7px]' onClick={logout}><span>Logout</span> </section>
    </div>
  )
}

export default Userprofile