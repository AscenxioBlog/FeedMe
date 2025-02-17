import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../../Config";
import { BsStarFill } from "react-icons/bs";

function IndexComponent2() {
  const [someRestaurant, setSomerestaurant] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}restaurants/few`)
      .then((res) => res.json())
      .then((json) => setSomerestaurant(json))
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  // Duplicate list to make scrolling seamless
  const duplicatedRestaurants = [...someRestaurant, ...someRestaurant];

  return (
    <div className="min-h-[50vh] w-full flex flex-col items-center mb-6 mt-[50px]">
      <div className="  flex flex-col items-center">
        <h1 className=" text-3xl font-semibold w-[80%] text-center"> Your favourite restaurants in one spot</h1>
        <h3 className=" text-center font-semibold italic mt-2 text-orange-500">Click. Order. Feast.</h3>
      </div>
      <div className="overflow-hidden w-full relative">
        <div className="w-full flex gap-[40px] py-4 group">
          <div className="flex w-max whitespace-nowrap gap-3 animate-scroll group-hover:[animation-play-state:paused]">
            {duplicatedRestaurants.map((item, index) => (
              <Link to={`/menu/${item.name}/${item._id}`} key={index}>
                <div className="w-[50vw] md:w-[22vw] bg-white rounded-[10px] shadow-subtle-all p-3">
                  <div className="border h-[200px] border-gray-300 w-full overflow-hidden rounded-[5px]">
                    <img
                      src={`${item.image}`}
                      alt={item.name}
                      className="h-[100%] w-full object-cover rounded-[10px]"
                    />
                  </div>
                  <div>
                    <section className="font-semibold text-[0.8rem] md:text-[0.9rem] mt-2 flex justify-between items-center">
                      <span>{item.name}</span>
                      <span>
                        <BsStarFill className="inline text-orange-500" /> {item.rating}
                      </span>
                    </section>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className=" mt-2 border-2 border-gray-400 rounded-[30px] bg-orange-500 px-7 cursor-pointer py-2 text-[0.8rem] text-white font-bold">
        <Link to="/restaurant">Explore all</Link>
      </div>
    </div>
  );
}

export default IndexComponent2;
