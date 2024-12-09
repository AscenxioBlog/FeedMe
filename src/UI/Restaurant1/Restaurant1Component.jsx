import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const imageBaseUrl = "http://localhost:5000"; // Base URL of your server

import CustomButton from "../../ReusableComponent/MyButton/CustomButton";
import RestuarantComponentPic from "./RestuarantComponentPic";
import CustomInput from "../../ReusableComponent/MyInput/CustomInput";
import API_URL from "../../Config";

function Restaurant1Component() {


  let [holddata, setHolddata] = useState("");
  let [foodtypes, setFoodtypes] = useState([]);
  let [selectedfoodtypes, setSelected] = useState([]);
  const [searchQuery, setSearchquery] = useState("");

  const forFoodtypes = (foodchoice) => {
    setSelected((prev) => (prev === foodchoice ? "" : foodchoice));
    console.log("Selected Food Type:", selectedfoodtypes);
  };

  useEffect(() => {
    fetch(`${API_URL}api/food-types`)
      .then((res) => res.json())
      .then((data) => setFoodtypes(data))
      .catch((err) => console.log(`Error:${err}`));
  }, []);

  useEffect(() => {

    let query = new URLSearchParams();

    if (selectedfoodtypes) {
      query.append("foodtype", selectedfoodtypes);
    }

    if (searchQuery) {
      query.append("search", searchQuery);
    }
    console.log("Query String:", query.toString());

    fetch(`${API_URL}api/restaurants?${query.toString()}`) //fetched from my server
      .then((response) => response.json()) //convert the response to json. (the response can be anything)
      .then((json) => setHolddata(json)) //(then pass the converted data into a useState)
      .catch((err) => console.log(err)); // if there is any error
  }, [selectedfoodtypes, searchQuery]); //Array of dependecies because we need the data to  be fetched only once.

  return (
    <div className=" mt-[60px]">
      <RestuarantComponentPic />

      <div className=" bg-[#E7F0DC] min-h-[100vh] w-full grid grid-cols-1 md:grid-cols-[20%,79%] gap-1 ">
        <div className="min-h-[40vh] md:h-full bg-[]  md:flex flex-col items-center">
          <h1 className=" text-[25px] font-bold text-center">
            EXPLORE CATEGORIES
          </h1>

          <div className="min-h-[40vh] md:h-[60vh] lg:min-h-[80vh] md:w-[80%] lg:w-[60%] bg-[] grid grid-cols-1 gap-5 md:grid-cols-1 mt-5">
            <section className=" leading-[45px] grid grid-cols-2 md:grid-cols-1 ">

          {foodtypes ? (
            foodtypes.map((foodtype, index) => (
              <div
                key={index}
                className=" hover:ml-1 transition-all duration-300 hover:font-bold "
              >
                 <CustomButton
                    height="40px"
                    width="150px"
                    // backgroundColor="lime"
                    borderRadius="35%"
                    label={foodtype.charAt(0).toUpperCase() + foodtype.slice(1)}
                    className="md:rounded-[20px]" // Optional className for additional styling
                    onClick={() => forFoodtypes(foodtype)}
                  />
              </div>
            ))
          ) : (
            <p>Food types loading...</p>
          )}
            </section>
          </div>

          
        </div>
        {/* <div className="h-[100vh] bg-red-800 "></div> */}
        <div className=" bg-[]">
          <div className=" h-[70px] w-full bg-[] flex justify-center items-center">
            <CustomInput
              type="text"
              name="search"
              id=""
              className="bb h-[50px] w-[80%] bg-[transparent] rounded-[40px]  pl-2"
              placeholder="What did you need??"
              value={searchQuery}
              onInput={(e) => setSearchquery(e.target.value)}
              // className=' h-[40px] w-[80%] rounded-[10px] bg-[transparent] pl-2'
            />
          </div>
          <div className=" min-h-[500px] w-[100%] bg-[] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-3">
            {holddata
              ? holddata.map((item) => (
                  <>
                    <Link to={`/menu/${item.name}/${item._id}`} key={item._id}>
                      <div className="template h-[300px]  bg-[white] flex flex-col items-center rounded-[20px] " style={{boxShadow:' 0 0 25px #5F8670'}}>
                        <div className=" border-[1px] border-[gray]  w-full rounded-[25px] overflow-">
                          <div className=" h-[200px] w-full md:w-full lg:w-full bg-[] ">
                            <img style={{borderTopLeftRadius:'20px', borderTopRightRadius:'20px'}}
                              src={`${item.image}`}
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
        </div>
      </div>
    </div>
  );
}

export default Restaurant1Component;

{
  /*     `

{holddata ? (
   holddata.map((item) => (
     <>

       <div className=" h-[500px]  bg-white flex flex-col items-center " >
         <div className=" border-[1px] border-[gray] rounded-[25px] overflow-hidden">
           <div className=" h-[350px] w-[350px] md:w-[320px] lg:w-[380px] bg-red-800 ">
             <img src={item.image} />
             {console.log(item.image)}
           </div>
           <div className=" h-[90px]  bg-[] grid grid-cols-[70%,30%]">
             <div className=" bg-[] flex flex-col justify-center pl-2">
               <h1 className=" font-bold text-[17px] mb-1">
                 {item.name}
               </h1>
               <p>{item.address}</p>
             </div>
             <div className=" bg-[] flex justify-center items-center text-[18px]">
               <span className=" text-[#FF5A3C]">
                 <a href="" className=" underline">
                   View More
                 </a>
               </span>
             </div>
           </div>
         </div>
       </div>
     </>
   ))
 ) : (
   <p>Poor network...loading</p>
 )}` */
}
