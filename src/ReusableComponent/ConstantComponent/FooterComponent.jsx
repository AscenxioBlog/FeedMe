import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import API_URL from "../../Config";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

function FooterComponent() {
  let [someRestaurant, setSomerestaurant] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}api/fewrestaurants`)
      .then((res) => res.json())
      .then((json) => setSomerestaurant(json))
      .catch((err) => console.log(`Error:${err}`));
  }, []);
  return (
    <div className=" w-full  text-white grid place-items-center p-3">
      <div className=" bg-[#5F8670] w-[80%] rounded-xl p-6 box-border">
        <div className="  w-full bg-[] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[20%,20%,20%,40%]">
          <div className=" bg-[] flex flex-col gap-4 ">
            <h1 className="  text-2xl font-extrabold text-[#FF5A3C]">
              Feed<span className=" text-white">Me</span>
            </h1>
            <div>
              <h1 className=" font-bold text-[1.1rem]">Contact</h1>
              <ol className=" text-[0.9rem] leading-7">
                <li><Link to="">Myona1648@gmail.com</Link></li>
                <li><Link to="">08057320503</Link></li>
              </ol>
            </div>
          </div>

          <div className=" bg-[] flex flex-col gap-4 lg:items-center pl-5 lg:pl-0">
            <h1 className=" font-bold text-[1.1rem]">Company</h1>
            <ol className="text-[0.9rem] leading-7">
              <li><Link to="/catering">Catering</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/restaurant">Restaurant</Link></li>
              <li><Link to="/rider">Rider</Link></li>
            </ol>
          </div>
          <div className=" bg-[] flex flex-col gap-4 lg:items-center pl-5 lg:pl-0">
            <h1 className="font-bold text-[1.1rem]">Locations</h1>
            <ol className="text-[0.9rem] leading-7">
              <li><Link to="">Lekki</Link></li>
              <li><Link to="">Ojo</Link></li>
              <li><Link to="">MaryLand</Link></li>
              <li><Link to="">Victoria Island</Link></li>
            </ol>
          </div>
          <div className="  flex flex-col gap-4 lg:items-center pl-5 lg:pl-0">
            <h1 className=" text-[1.1rem] font-bold">Restaurants</h1>
            <div className="  grid grid-cols-2 gap-3">
              {someRestaurant
                ? someRestaurant.map((item) => (
                    <>
                      <Link
                        to={`/menu/${item.name}/${item._id}`}
                        key={item._id}
                      >
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

        <div className=" mt-3 flex flex-col justify-center">
          <h1 className=" text-[1.1rem] font-bold">Socials</h1>
          <div className=" h-[25px] w-[max-content]  mt-2 flex gap-5 text-black">
            <div className=" bg-white rounded-[50%] w-[25px] text-[0.9rem] flex justify-center items-center hover:bg-[#FF5A3C] hover:text-white hover:rotate-[360deg] duration-300">
              <a href=""><FaInstagram /></a>
            </div>
            <div className=" bg-white rounded-[50%] w-[25px] text-[0.9rem] flex justify-center items-center  hover:bg-[#FF5A3C] hover:text-white hover:translate-y-[6px] duration-300">
              <a href=""><SiTiktok /></a>
            </div>
            <div className=" bg-white rounded-[50%] w-[25px] text-[0.9rem] flex justify-center items-center hover:bg-[#FF5A3C] hover:text-white faceb duration-300">
              <a href=""><RiFacebookFill /></a>
            </div>
            <div className=" bg-white rounded-[50%] w-[25px] text-[0.9rem] flex justify-center items-center  hover:bg-[#FF5A3C] hover:text-white xx duration-300">
              <a href=""><FaXTwitter/></a>
            </div>
            <div className=" bg-white rounded-[50%] w-[25px] text-[0.9rem] flex justify-center items-center  hover:bg-[#FF5A3C] hover:text-white hover:-translate-y-1 duration-300">
              <a href=""><FaLinkedinIn /></a>
            </div>
            
          </div>
        </div>
      </div>
      <div className=" text-white w-[80%] mt-2">
          <h1 className=" font-semibold text-[0.9rem] text-gray-500">© 2025 FeedMe. Powered by <span className="  font-bold text-black"> BitxBase Techies</span></h1>
        </div>
    </div>
  );
}

export default FooterComponent;
