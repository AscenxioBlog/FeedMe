import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const imageBaseUrl = "http://localhost:5000"; // Base URL of your server

import CustomButton from "../../ReusableComponent/MyButton/CustomButton";
import RestuarantComponentPic from "./RestuarantComponentPic";
import CustomInput from "../../ReusableComponent/MyInput/CustomInput";
import API_URL from "../../Config";

function RestaurantLayout() {
  let [holddata, setHolddata] = useState([]);
  let [foodtypes, setFoodtypes] = useState([]);
  let [selectedfoodtypes, setSelected] = useState("");
  const [searchQuery, setSearchquery] = useState("");

  const forFoodtypes = (foodchoice) => {
    setSelected((prev) => (prev === foodchoice ? "" : foodchoice));
  };

  useEffect(() => {
    fetch(`${API_URL}restaurants/food-types`)
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

    fetch(`${API_URL}restaurants/filter?${query.toString()}`)
      .then((response) => response.json())
      .then((json) => setHolddata(json))
      .catch((err) => console.log(err));
  }, [selectedfoodtypes, searchQuery]);

  return (
    <div className="mt-[60px]">
      <RestuarantComponentPic />

      <div className="bg-[#E7F0DC] min-h-screen w-full grid grid-cols-1 md:grid-cols-[250px,1fr] gap-5 p-5">
        {/* Sidebar */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h1 className="text-xl font-bold text-center mb-4">Explore Categories</h1>
          <div className="flex flex-col gap-3">
            {foodtypes.length > 0 ? (
              foodtypes.map((foodtype, index) => (
                <CustomButton
                  key={index}
                  height="40px"
                  width="100%"
                  borderRadius="10px"
                  label={foodtype.charAt(0).toUpperCase() + foodtype.slice(1)}
                  className={`w-full rounded-lg transition-all duration-300 ${
                    selectedfoodtypes === foodtype ? "bg-green-600 text-white" : "bg-gray-200"
                  } hover:bg-green-500 hover:text-white`}
                  onClick={() => forFoodtypes(foodtype)}
                />
              ))
            ) : (
              <p className="text-gray-500 text-center">Loading categories...</p>
            )}
          </div>
        </div>

        {/* Main Section */}
        <div>
          {/* Search Bar */}
          <div className="w-full flex justify-center mb-5">
            <CustomInput
              type="text"
              name="search"
              className="h-[50px] w-full md:w-[70%] lg:w-[50%] bg-white border border-gray-300 rounded-full pl-4 shadow-sm focus:outline-none"
              placeholder="What are you craving?"
              value={searchQuery}
              onInput={(e) => setSearchquery(e.target.value)}
            />
          </div>

          {/* Restaurant Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {holddata.length > 0 ? (
              holddata.map((item) => (
                <Link to={`/menu/${item.name}/${item._id}`} key={item._id} className="transition-transform transform hover:scale-105">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Image */}
                    <img
                      src={`${item.image}`}
                      alt={item.name}
                      className="h-[200px] w-full object-cover"
                    />
                    {/* Info */}
                    <div className="p-4">
                      <h1 className="font-bold text-lg">{item.name}</h1>
                      <p className="text-gray-500 text-sm">{item.address}</p>
                      <div className="mt-3 text-right">
                        <span className="text-[#FF5A3C] font-semibold underline">View More</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">No restaurants found...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantLayout;
