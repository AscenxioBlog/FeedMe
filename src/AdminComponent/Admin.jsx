import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { MdAddBusiness, MdRestaurantMenu } from "react-icons/md";
import { IoRestaurantSharp } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight, FaUsers } from "react-icons/fa";

function Admin() {
  const { pathname } = useLocation();
  let [showMe, setShowMe] = useState(false);
  let [forwidth, setForwidth] = useState("220px");

  function HideModal() {
    setShowMe(!showMe)
  }

  function widthopen_close() {
    forwidth == "220px" ? setForwidth("70px") : setForwidth("220px");
  }

  return (
    <div className=" h-[100vh] relative flex bg-gray-100 p-5 text-[14px] gap-[20px]">
      <nav
        style={{ width: forwidth }}
        className={`absolute  md:relative ${showMe ? '-left-full' : 'left-0'} group transition-all duration-700 bg-foraside rounded-[15px] text-white flex flex-col gap-3 p-[20px] overflow-x-hidden   `}
      >
        <div  className="  absolute  right-[70px]  duration-300 group-hover:right-[-10px] group-hover:opacity-100 opacity-0 top-10 ">
          {forwidth == "220px" ? (
            <button
              className=" bg-gray-100 p-[3px] text-[#5F8670] rounded-[10px]"
              onClick={widthopen_close}
            >
              <FaArrowLeft />
            </button>
          ) : (
            <button
              className=" bg-gray-100 p-[3px] text-[#5F8670] rounded-[10px]"
              onClick={widthopen_close}
            >
              <FaArrowRight />
            </button>
          )}
        </div>
       <Link to='/'> <h1 className=" font-bold flex gap-2 pl-[10px]">
          <span className=" italic text-[#FF5A3C]">FM</span>ADMIN Dashboard
        </h1></Link>
        <hr className=" h-[1px] bg-custom-gradient w-[100%] border-t-0 opacity-[.25]" />
        <ul className=" leading-[47px]">
          <li
            className={
              (pathname === "/admin/view" ? "bg-[#141111]" : "") +
              " rounded-[5px] pl-[25px]"
            }
          >
            <Link to="" className="  flex gap-[6px] items-center">
              View
            </Link>
          </li>
          <li
            className={
              (pathname === "/admin/add" ? "bg-[#FF5A3C]" : "") +
              " rounded-[5px] pl-[25px]"
            }
          >
            <Link to="/admin/add" className=" flex gap-[6px] items-center">
              <MdAddBusiness className=" text-[20px]" /> Restaurant
            </Link>
          </li>
          <li
            className={
              (pathname === "/admin/addmenu" ? "bg-[#FF5A3C]" : "") +
              " rounded-[5px] pl-[25px]"
            }
          >
            <Link to="/admin/addmenu" className=" flex gap-[6px] items-center">
              <IoRestaurantSharp className=" text-[20px]" /> Menu
            </Link>
          </li>

          <li
            className={
              (pathname === "/admin/allrestaurant" ? "bg-[#FF5A3C]" : "") +
              " rounded-[5px] pl-[25px]"
            }
          >
            <Link
              to="/admin/allrestaurant"
              className=" flex gap-[6px] items-center"
            >
              <MdRestaurantMenu className=" text-[20px]" /> All Restaurants
            </Link>
          </li>

          <li
            className={
              (pathname === "/admin/users" ? "bg-[#FF5A3C]" : "") +
              " rounded-[5px] pl-[25px]"
            }
          >
            <Link to="/admin/users" className=" flex gap-[6px] items-center">
              <FaUsers className=" text-[20px]" /> All Users
            </Link>
          </li>
          <li
            className={
              (pathname === "/admin/staff" ? "bg-[#FF5A3C]" : "") +
              " rounded-[5px] pl-[25px]"
            }
          >
            <Link to="/admin/orders" className=" flex gap-[6px] items-center">
              All Orders
            </Link>
          </li>
        </ul>
        <div>
          <button className=" p-[10px] w-[100%] rounded-[10px] bg-[#FF5A3C] font-bold flex gap-2 justify-center items-center mt-[50px]">
            <BiLogOut className=" text-[20px]" /> Logout
          </button>
        </div>
      </nav>
      <div className=" flex-1 shadow-xl overflow-y-scroll scrollbar-thumb-custom-orange scrollbar-thin scrollbar-corner-black scrollbar-track-slate-200">
        <nav className=" flex justify-center">
          <button onClick={HideModal}>Ξ</button>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
