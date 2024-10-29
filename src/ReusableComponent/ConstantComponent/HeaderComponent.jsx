import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import Cart from "../Cart";
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
  const [login, setLogin] = useState("-130vh");
  const [showProfile, setShowProfile] = useState("0");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem("username") || "");

  useEffect(() => {
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(storedAuthStatus === 'true');
  }, []);

  const [view, setView] = useState('-300px');
  const [opacity, setOpacity] = useState(0);

  // Calculate total quantity of items in the cart
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  function dropdown() {
    if (opacity === 0 && view === '-300px') {
      setOpacity(1);
      setView('70px');
    } else {
      setOpacity(0);
      setView('-300px');
    }
  }

  return (
    <div
      className="head h-[70px] w-full bg-[#5F8670] text-white fixed top-0 z-20 transition duration-1000"
    >
      <div className="h-[80px] w-full grid grid-cols-[35%,20%,30%] md:grid-cols-[20%,60%,18%] lg:grid-cols-[20%,60%,18%] gap-1 justify-between ">
        {/* Logo */}
        <div className="text-[35px] font-extrabold text-[#FF5A3C] flex justify-center items-center">
          <h1 className="logo">
            <Link to="/">Feed<span className="text-white">Me</span></Link>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center ">
          <div className="hidden md:hidden lg:inline-block text-[21px] font-bold pl-[80px] ">
            <ol className="flex gap-[30px] ">
              <li className="text-[#FF5A3C]"><Link to="/">Home</Link></li>
              <li><Link to="/restaurant">Restaurants</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              {/* Additional links as needed */}
            </ol>
          </div>
        </div>

        {/* Cart & User Profile */}
        <div className="flex justify-center items-center relative gap-4 pr-3">
          {username}
          <button
            className="relative h-[40px] w-[70px] md:h-[40px] md:w-[40px] bg-[#FF5A3C] text-[18px] text-white font-semibold rounded-[20px] flex justify-center items-center"
            onClick={toggleCartVisibility}
          >
            <FaCartArrowDown size={18} />
            {totalQuantity > 0 && (
              <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {totalQuantity}
              </span>
            )}
          </button>

          {/* User Profile or Login */}
          {isAuthenticated ? (
            <button
              onClick={() => setShowProfile(showProfile === '0' ? '1' : '0')}
              className="h-[40px] w-[40px] bg-[#FF5A3C] text-[18px] text-white font-semibold rounded-[20px] flex justify-center items-center"
            >
              <LuUser2 size={20} />
            </button>
          ) : (
            <button
              onClick={() => setLogin("0")}
              className="h-[40px] w-[70px] md:h-[40px] md:w-[40px] bg-[#FF5A3C] text-[18px] text-white font-semibold rounded-[20px] flex justify-center items-center"
            >
              <LuUser2 size={20} />
            </button>
          )}

          {/* Other Icons */}
          {/* Dropdown and other elements */}
        </div>
      </div>

      {/* User Profile, Cart Component, etc. */}
      <Userprofile showProfile={showProfile} username={username} setShowprofile={setShowProfile} setLogin={setLogin} setIsAuthenticated={setIsAuthenticated}/>
      <Holdsign login={login} setLogin={setLogin} setIsAuthenticated={setIsAuthenticated}/>
      <HeaderMini setOpacity={opacity} setView={view} dropdown={dropdown}/>
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
