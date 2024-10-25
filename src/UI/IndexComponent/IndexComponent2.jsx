import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import React from "react";
import Slider from "react-slick";
const imageBaseUrl = "http://localhost:5000"; // Base URL of your server
import API_URL from '../../Config'


function IndexComponent2() {
  let [someRestaurant,setSomerestaurant] = useState([]);

  useEffect(()=>{
    fetch('https://online-food-backend-jbyy.onrender.com/api/fewrestaurants')
      .then(res=>res.json())
      .then(json=>setSomerestaurant(json))
      .catch(err=>console.log(`Error:${err}`))

  },[])

  return (
    <div className=" min-h-[100vh] w-full bg-[] flex flex-col items-center mb-8 mt-[80px]">
      <div className=" h-[80px] w-full flex justify-center">
        <h1 className=" text-[30px] font-bold">Meet The Restaurants</h1>
      </div>
      <div className=" min-h-[500px] w-[100%] bg-[] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-3">
        {someRestaurant
          ? someRestaurant.map((item) => (
              <>
                <Link to={`/menu/${item.name}/${item._id}`} key={item._id}>
                  <div className=" template h-[300px]  bg-[white] flex flex-col items-center rounded-[20px] " style={{boxShadow:' 0 0 25px #5F8670'}}>
                    <div className=" border-[1px] border-[gray] rounded-[25px] bg-[] w-full ">
                      <div className=" h-[200px] w-full  bg-[] ">
                        <img style={{borderTopLeftRadius:'20px', borderTopRightRadius:'20px'}}
                          src={`${imageBaseUrl}${item.image}`}
                          alt={item.name}
                          height="100%"
                          width="100%"
                        />
                      </div>
                      <div className=" h-[90px]  bg-[] grid grid-cols-[70%,30%]">
                        <div className=" bg-[] flex flex-col justify-center pl-2">
                          <h1 className=" font-bold text-[17px] mb-1">
                            {item.name}
                          </h1>
                          <p>{item.address}</p>
                        </div>
                        <div className=" bg-[] flex justify-center items-center text-[15px]">
                          <span className=" text-[#FF5A3C]">
                            <a href="" className=" underline">
                              View More
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            ))
          : null}
      </div>
      {/* <div className=" mt-8 min-h-[500px] w-[95%] bg-[] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className=" h-[350px]  bg-white flex flex-col items-center ">
          <a href="">
            <div className=" border-[1px] border-[gray] rounded-[25px] overflow-hidden">
              <div className=" h-[250px] w-[350px] md:w-[320px] lg:w-[380px] bg-red-800 ">
                <img src="" alt="" />
              </div>
              <div className=" h-[90px]  bg-[] grid grid-cols-[70%,30%]">
                <div className=" bg-[] flex flex-col justify-center pl-2">
                  <h1 className=" font-bold text-[17px] mb-1">Jollof & Co</h1>
                  <p>Everyday Naija favourites</p>
                </div>
                <div className=" bg-[] flex justify-center items-center text-[18px]">
                  <span className=" text-[#FF5A3C]">
                    <u>
                      <a href="">View More</a>
                    </u>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div> */}
      <div className="explore h-[45px] w-[260px] bg-[] rounded-[30px] flex justify-center items-center text-[gray] text-[18px] font-bold mt-6 border-[2px] border-[gray]">
        <h1>
          <Link to="/restaurant">Explore all restaurants</Link>{" "}
        </h1>
      </div>
    </div>
  );
}

export default IndexComponent2;
