import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Cart from "../Cart";
import { Link } from "react-router-dom";
import Authenticator from "../../Authenticator/Authenticator";
import { TiThMenu } from "react-icons/ti";
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import Userprofile from "./Userprofile";
import Holdsign from "../../Authenticator/Holdsign";
import HeaderMini from "./HeaderMini";

function HeaderComponent({
  cart,
  toggleCartVisibility,
  isCartVisible,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  checkout,
}) {
  var [login, setLogin] = useState("-130vh");
  let [showProfile, setShowProfile] = useState("0");
  // let [isLogged, setIsLogged] = useState(false);
  let [isAuthenticated, setIsAuthenticated] = useState(false);
  let [username,setusername] = useState(localStorage.getItem("username") || "");

  useEffect(() => {
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(storedAuthStatus === 'true'); // Set based on localStorage value
  }, []);


  var [view,setView]=useState('-300px')
  var [opacity,setOpacity]=useState(0)
  function dropdown() {
    if (opacity == 0 && view == '-300px') {
      setOpacity(1)
      setView('70px')
    } else {
      setOpacity(0)
      setView('-300px')
    }
   
  }

  return (
    <div
      className="head h-[70px] w-full bg-[#5F8670] text-white"
      style={{
        display: "block",
        position: "fixed",
        top: 0,
        zIndex: 20,
        transition: "1s",
      }}
    >
      <div className="h-[80px] w-full grid grid-cols-[35%,20%,30%] md:grid-cols-[20%,60%,18%] lg:grid-cols-[20%,60%,18%] gap-1 justify-between ">
        <div className="bg-[] text-[35px] font-extrabold text-[#FF5A3C] flex justify-center items-center">
          <h1 className="logo">
            <a href="/">
              Feed<span className="text-white">Me</span>
            </a>
          </h1>
        </div>
        <div className="flex items-center ">
          <div className="hidden md:hidden lg:inline-block bg-[] text-[21px] font-bold pl-[80px] ">
            <ol className="flex gap-[30px] ">
              <li className="text-[#FF5A3C]">
                <Link to="/">Home</Link>
                {/* <a href="/Restuarant">Restaurants</a> */}
              </li>
              <li className="text-[]">
                <Link to="/restaurant">Restaurants</Link>
                {/* <a href="/Restuarant">Restaurants</a> */}
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
                {/* <a href="/faqs">FAQs</a> */}
              </li>
              <li className="service relative ">
                <Link to='' className=" flex gap-2 items-center">Services <IoIosArrowDown /></Link>
                <div className="serviceDropdown h-[150px] w-[150px] bg-orange-100  grid absolute left-[-25px]" style={{border:'2px solid gray'}} > 
                  <Link to='/catering' className=" h-[50px]  flex justify-center items-center hover:bg-[#5F8670] " style={{borderBottom:'1px solid gray'}}><div className=" text-[15px] text-black ">Catering service</div></Link>
                 <Link to='/gift'  className="h-[50px] flex justify-center items-center hover:bg-[#5F8670]" style={{borderBottom:'1px solid gray'}}> <div className=" text-[15px] flex justify-center items-center  text-black">Suprise Package?</div></Link>
                 <Link  className="h-[50px] flex justify-center items-center hover:bg-[#5F8670]" style={{borderBottom:'1px solid gray'}}> <div className=" text-[15px] flex justify-center items-center text-black">Place Advert</div></Link>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="bg-[] flex justify-center items-center relative gap-4 pr-3">
          {username}
          <button
            className="h-[40px] w-[70px] md:h-[40px] md:w-[40px] bg-[#FF5A3C] text-[18px] text-white font-semibold rounded-[20px] flex justify-center items-center"
            onClick={toggleCartVisibility}
          >
            <FaCartArrowDown size={18} />
          </button>
          {/* <button
            onClick={handleUserClick}
            className="h-[40px] w-[40px] bg-[#FF5A3C] text-[18px] text-white font-semibold rounded-[20px] flex justify-center items-center"
          >
            <LuUser2 className=" font-bold" size={20}/> 
          </button> */}
          {isAuthenticated ? (
            // Show user profile if logged in
            <button
              onClick={() => setShowProfile(showProfile === '0' ? '1' : '0')}
              className="h-[40px] w-[40px]h-[40px] w-[70px] md:h-[40px] md:w-[40px] bg-[#FF5A3C] text-[18px] text-white font-semibold rounded-[20px] flex justify-center items-center"
            >
              <LuUser2 size={20} />
            </button>
          ) : (
            // Show login button if not authenticated
            <button
              onClick={() => setLogin("0")}
              className="h-[40px] w-[70px] md:h-[40px] md:w-[40px] bg-[#FF5A3C] text-[18px] text-white font-semibold rounded-[20px] flex justify-center items-center"
            >
              <LuUser2 size={20} />
            </button>
          )}
          <button onClick={dropdown} className=" text-white lg:hidden ">
            <TiThMenu size={25} />
          </button>
          <div
            className="absolute top-[100%] transition-all duration-500 right-0 mt-2 w-[400px] bg-white border border-gray-300 shadow-lg z-10"
            style={{ right: isCartVisible }}
          >
             {/* <HeaderMini setOpacity={opacity} setView={view}/> */}
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              checkout={checkout}
              visible={toggleCartVisibility}
            />
            
          </div>
        </div>
      </div>
      {/* <Authenticator 
      getheight={height}
      seemodal={view}
      passcancelFunction = {cancelfunction}
      /> */}

      <Userprofile showProfile={showProfile} username={username} setShowprofile={setShowProfile} setLogin={setLogin} setIsAuthenticated={setIsAuthenticated}/>
      <Holdsign login={login} setLogin={setLogin} setIsAuthenticated={setIsAuthenticated}/>

      <HeaderMini  setOpacity={opacity} setView={view}   dropdown={dropdown}/>

    </div>
  );
}

HeaderComponent.propTypes = {
  cart: PropTypes.array.isRequired,
  toggleCartVisibility: PropTypes.func.isRequired,
  isCartVisible: PropTypes.bool.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired,
};

export default HeaderComponent;
