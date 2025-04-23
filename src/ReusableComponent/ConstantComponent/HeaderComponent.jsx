import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Cart from "../Cart";
import { Link } from "react-router-dom";
import Authenticator from "../../Authenticator/Authenticator";
import { TiThMenu } from "react-icons/ti";
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import Userprofile from "./Userprofile";
import Holdsign from "../../Authenticator/Holdsign";
import HeaderMini from "./HeaderMini";
import { LuUser2 } from "react-icons/lu";

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

  // Calculate total quantity of items in the cart
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

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
      className="head  w-full  fixed top-0 z-[20] duration-1000 text-white">
      <div className=" h-[60px] bg-[#5F8670] w-full flex gap-1 justify-between px-[2vw] duration-500 md:px-[5vw] items-center">
        <div className=" text-[2rem] font-extrabold text-[#FF5A3C] ">
          <Link to="/">
            Feed<span className="text-white">Me</span>
          </Link>
        </div>
        <div className="flex items-center ">
          <div className="hidden sm:block bg-[] text-[1rem] font-semibold  ">
            <ol className="flex gap-[30px] ">
              <li className="">
                <Link to="/">About</Link>
              </li>
              <li className="text-[]">
                <Link to="/restaurant">Restaurants</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
            </ol>
          </div>
        </div>
        <div className="bg-[] flex justify-center items-center relative gap-4 pr-3">
          {username}
          <button
            className="relative h-[30px] hidden w-[30px] bg-[#FF5A3C] text-[18px] text-white font-semibold rounded-[20px] sm:flex justify-center items-center"
            onClick={toggleCartVisibility}
          >
            <FaCartArrowDown size={13} />
            {totalQuantity > 0 && (
              <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {totalQuantity}
              </span>
            )}
          </button>
          
          {isAuthenticated ? (
            // Show user profile if logged in
            <button
              onClick={() => setShowProfile(showProfile === '0' ? '1' : '0')}
              className=" bg-[#FF5A3C] h-[30px] w-[30px] text-[18px] text-white font-semibold rounded-[20px] hidden sm:flex justify-center items-center"
            >
              <LuUser2 size={13} />
            </button>
          ) : (
            // Show login button if not authenticated
            <button
              onClick={() => setLogin("0")}
              className=" bg-[#FF5A3C] h-[30px] w-[30px] text-[18px] text-white font-semibold rounded-[20px] hidden sm:flex justify-center items-center"
            >
              <FaUser size={13} />
            </button>
          )}
          <button onClick={dropdown} className=" text-white sm:hidden ">
            <TiThMenu size={25} />
          </button>
         
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
       <div
            className="absolute transition-all duration-500 bg-red-500 right-0 top-[60px] w-[400px] border border-gray-300 shadow-lg z-10"
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