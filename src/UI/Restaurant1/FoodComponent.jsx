import { useEffect, useState } from "react";
import { MdStarBorderPurple500 } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { FaNairaSign } from "react-icons/fa6";
import API_URL from "../../Config";

function FoodComponent({ addToCart }) {
  const [holdmenu, setHoldmenu] = useState([]);
  const { restaurantname, restaurantid } = useParams();
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const selectedAddress = holdmenu.find((item,index) => index === 0);
  console.log(selectedAddress)

  useEffect(() => {
    // Fetch the menu for the restaurant
    fetch(`${API_URL}menu/${restaurantid}`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setHoldmenu(json);
      })
      .catch(err => console.log(err));

  }, []);

  return (
    <div className='mt-[70px] bg-[#E7F0DC]'>
      <div className="min-h-[75vh] w-full mt-[20px]">
        <div className="FOOD h-[500px] w-full bg-red-400">
          {/* Add restaurant's cover image here if available */}
          {/* <img src={restaurantname} alt="" /> */}
        </div>

        {/* Display restaurant details */}
        <div className="h-[150px] w-full p-4">
          <h1 className='text-[25px] font-bold'>{restaurantname}</h1>
          <p className='text-[16px] text-slate-400'>{restaurantDetails.description || "Description not available"}</p>
          <p className='text-[16px] text-slate-400 flex'>
            <MdStarBorderPurple500 className='text-[yellow] text-[20px]' /> 4.1 537+ Ratings
          </p>
          
          <p className='text-[16px] text-slate-400'>
              {selectedAddress ? (
               <p>{selectedAddress.restaurant.address}</p>
                ) : (
                "Loading address..."
              )}
          </p>
          {/* {console.log(holdmenu[0].restaurant.address)} */}
        </div>
      </div>

      <div className="h-[100px] w-full flex flex-col items-center justify-center">
        <h1 className='text-[30px] font-bold'>African special</h1>
        <p className='text-[gray] text-[20px]'>Scoop and swallows</p>
      </div>

      {/* Display menu items */}
      <div className="h-auto bg-white w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {holdmenu.map((item) => (
          <div key={item._id} className="p-4 border border-gray-200 rounded-lg shadow-md">
            <img src={`${item.image}`} alt={item.name} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-gray-600">{item.food_description}</p>
            <p className="text-lg font-bold"><FaNairaSign />{item.price.toFixed(2)}</p>
            <button
              className="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
              onClick={() => addToCart({
                  _id: item._id,
                  name: item.name,
                  price: item.price,
                  image: item.image,
                  food_description: item.food_description
              })}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodComponent;













// import React, { useState } from 'react';
// import { MdStarBorderPurple500 } from "react-icons/md";
// import eba from '../../Foods/Eba.PNG';
// import amala from '../../Foods/amala.PNG';
// import beanspotage from '../../Foods/beanspotage.PNG';
// import chickenpie from '../../Foods/chickenpie.PNG';
// import friedrice from '../../Foods/Friedrice.PNG';
// import fufu from '../../Foods/Fufu.PNG';
// import icecream from '../../Foods/icecream.PNG';
// import Jollof from '../../Foods/Jollof.PNG';
// import meatpie from '../../Foods/meatpie.PNG';
// import parfait from '../../Foods/parfait.PNG';
// import shawama from '../../Foods/shawama.PNG';
// import spag from '../../Foods/spag.PNG';
// import Yamarita from '../../Foods/Yamarita.PNG';
// import yampotage from '../../Foods/Yampotage.PNG';
// import ch from '../../Files/ch.jpg'

// // import banavegies from '../Foods/banana&veg.PNG'
// // import basmatic from '../Foods/basmatic.PNG'
// // import beefshawa from '../Foods/beefsha.PNG'
// // import chickensha from '../Foods'

// function FoodComponent({ addToCart }) {
 
//     const [cart, setCart] = useState([]);
//   const [isCartVisible, setCartVisible] = useState(false);

//     const food1 = [
//         {
//             id: 1,
//             Name: 'Eba & Vegetable',
//             Description: 'Well cooked cassava meal',
//             price: 1800,
//             image:eba
//         },

//         {
//             id: 2,
//             Name: 'semo',
//             Description: 'Lump free delicious swallow',
//             price: 1800,
//             image: fufu

//         },

//         {
//             id: 3,
//             Name: 'Amala',
//             Description: 'Lump free delicious swallow',
//             price: 2100,
//             image: amala

//         },

//         {
//             id: 4,
//             Name: 'Fried Rice',
//             Description: 'Deliciously prepared rice',
//             price: 2500,
//             image: friedrice

//         },

//         {
//             id: 5,
//             Name: 'Yamarrita',
//             Description: 'Delicious Hard boiled Yam spiced with fried eggs',
//             price: 1100,
//             image: Yamarita

//         },

//         {
//             id: 6,
//             Name: 'Beans Pottage',
//             Description: 'Well filtered and cooked beans meal',
//             price: 3000,
//             image: beanspotage

//         },

//         {
//             id: 7,
//             Name: 'Yam Pottage',
//             Description: 'Well mashed and assorted yam Pottage meal',
//             price: 800,
//             image: yampotage

//         },

//         {
//             id: 8,
//             Name: 'Parfait',
//             Description: 'Thick and creamy yogurt layered dessert',
//             price: 2000,
//             image: parfait

//         },

//         {
//             id: 9,
//             Name: 'Jollof Rice',
//             Description: 'Deliciously prepared rice',
//             price: 800,
//             image: Jollof

//         },

//         {
//             id: 10,
//             Name: 'Spaghetti',
//             Description: 'Jollof spaghetti with best seasoning',
//             price: 800,
//             image: spag

//         },

//         {
//             id: 11,
//             Name: 'Sharwama',
//             Description: 'Chunky creamy sharwama',
//             price: 2500,
//             image: shawama

//         },

//         {
//             id: 12,
//             Name: 'Meat Pie',
//             Description: 'Meaty chunks',
//             price: 700,
//             image: meatpie

//         },

//         {
//             id: 13,
//             Name: 'Chicken Pie',
//             Description: 'Chicken filled snack',
//             price: 800,
//             image: chickenpie

//         },

//         {
//             id: 14,
//             Name: 'Ice Cream',
//             Description: 'sweetened cold desert',
//             price: 2000,
//             image: icecream

//         }



//     ]
//   return (
//     <div>
//       {/* <div className="h-[80px] w-full bg-[] grid grid-cols-[35%,20%,30%] md:grid-cols-[20%,60%,18%] lg:grid-cols-[20%,60%,18%] gap-1 justify-between ">
//         <div className="bg-[] text-[35px] font-extrabold text-[#FF5A3C] flex justify-center items-center">
//           <h1 className='logo'><a href="/">Feed<span className='text-white'>Me</span></a></h1>
//         </div>
//         <div className="flex items-center ">
//           <div className="hidden md:inline-block lg:inline-block bg-[] text-[21px] font-bold pl-[80px] ">
//             <ol className='flex gap-[30px] '>
//               <li className='text-[#FF5A3C]'><a href="">Restaurants</a></li>
//               <li><a href="">FAQs</a></li>
//               <li><a href="">Support</a></li>
//             </ol>
//           </div>
//         </div>
//         <div className="bg-[] flex justify-center items-center">
//           <button className='h-[40px] w-[150px] bg-[#FF5A3C] text-[18px] text-white font-semibold rounded-[20px]'>Cart</button>
//         </div>
//       </div> */}

//       <div className="min-h-[75vh] w-full bg-[] mt-[20px]">
//         <div className="h-[500px] w-full bg-red-400">
//           <img src={ch} alt="" />
//         </div>
//         <div className="h-[150px] w-full bg-[] p-4">
//           <h1 className='text-[25px] font-bold'>Chicken & Co</h1>
//           <p className='text-[16px] text-slate-400'>African, Rice, Chicken, Snacks</p>
//           <p className='text-[16px] text-slate-400 flex'><MdStarBorderPurple500 className='text-[yellow] text-[20px]' /> 4.1 537+ Ratings</p>
//           <p className='text-[16px] text-slate-400'>Ijebu-Ode, Ogun State</p>
//         </div>
//       </div>

//       <div className="h-[100px] w-full flex flex-col items-center justify-center">
//         <h1 className='text-[30px] font-bold'>African special</h1>
//         <p className='text-[gray] text-[20px]'>Scoop and swallows</p>
//       </div>

//       <div className="h-auto bg-white w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
//         {food1.map((item) => (
//           <div key={item.id} className="p-4 border border-gray-200 rounded-lg shadow-md">
//             <img src={item.image} alt={item.Name} className="w-full h-40 object-cover mb-2" />
//             <h2 className="text-xl font-bold">{item.Name}</h2>
//             <p className="text-gray-600">{item.Description}</p>
//             <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
//             <button
//               className="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
//               onClick={() => addToCart(item)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FoodComponent;