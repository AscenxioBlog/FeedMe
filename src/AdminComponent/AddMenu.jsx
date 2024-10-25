import React, { useEffect, useState } from 'react';
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Dropzone from '../ReusableComponent/Dropzone/Dropzone';
import CustomInput from '../ReusableComponent/MyInput/CustomInput';

function AddMenu() {
  const [allRestaurant, setAllRestaurant] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);  // Store the uploaded file

  useEffect(() => {
    fetch("http://localhost:5000/api/restaurants")
      .then((res) => res.json())
      .then((json) => setAllRestaurant(json));
  }, []);

  // Function to handle file drop from the Dropzone
  const handleFileDrop = (files) => {
    setSelectedFile(files[0]);  // Assuming single file upload, so take the first file
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    if (selectedFile) {
      formData.append('image', selectedFile);  // Append the image file to the form data
    }

    try {
      const response = await fetch("http://localhost:5000/add-menu", {
        method: 'POST',
        body: formData,
      }); 
      if (response.ok) {
        alert('Menu added successfully!');
      } else {
        console.error('Error submitting the form');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div>
      <div className="w-full min-h-[100vh]">
        <div className="min-h-[90vh] w-full lg:w-full pl-[2px] md-pl-[0px]  grid grid-cols-1 md:grid-cols-[15%,85%]">
          <div className=" md:flex justify-center">
            <span className='text-[#5F8670] text-[40px] md:text-[60px]'>
              <MdOutlineRestaurantMenu />
            </span>
          </div>
          <div className="">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="space-y-3 ml-[2px] md-ml-[0px] lg:ml-[0px]">
                <h1 className='text-[25px]'>Edit Menu List</h1>
                <p>Partem diceret praesent mel et...</p>
              </div>

              <br />
              <div className="">
                <select name="restaurant" className='border-[2px] border-solid border-emerald-600 h-[40px] w-[80%] rounded-[10px] bg-[transparent] pl-2'>
                  <option value="">Select Restaurant</option>
                  {allRestaurant ? (
                    allRestaurant.map((restaurant) => (
                      <option key={restaurant._id} value={restaurant._id}>
                        {restaurant.name.charAt(0).toUpperCase() + restaurant.name.slice(1)}
                      </option>
                    ))
                  ) : (
                    <option>Loading</option>
                  )}
                </select>
              </div>
              <br />

              <div className="">
                <label htmlFor="food-name">Food Name<span className=' text-[red]'>*</span></label>
                <br />
                <CustomInput
                  type="text"
                  name="name"
                  required
                  id="food-name"
                  className='border-[2px] border-solid border-emerald-600 h-[40px] w-[80%] rounded-[10px] bg-[transparent] pl-2'
                />
              </div>
              <br />

              <div className="">
                <label htmlFor="restaurant-image">Food Image<span className=' text-[red]'>*</span></label>
                <br />
                <Dropzone onFileDrop={handleFileDrop} />  {/* Pass the handler to Dropzone */}
              </div>
              <br />

              <div className="">
                <label htmlFor="description">Description<span className=' text-[red]'>*</span></label>
                <br />
                <textarea
                  name="food_description"
                  className='border-[2px] border-solid border-emerald-600 h-[100px] w-[80%] rounded-[20px] bg-[transparent] pl-3 pt-2'
                ></textarea>
              </div>
              <br />

              <div className="">
                <label htmlFor="foodprice">Food Price<span className=' text-[red]'>*</span></label>
                <br />
                <CustomInput
                  type="number"
                  name="price"
                  required
                  className='border-[2px] border-solid border-emerald-600 h-[40px] w-[80%] rounded-[10px] bg-[transparent] pl-2'
                />
              </div>
              <br />

              <button type="submit" className='h-[40px] w-[90%] bg-[] rounded-[10px] hover:bg-[#E7F0DC]' style={{ border: '2px solid #5F8670' }}>
                Add Menu
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMenu;
















// import React, { useEffect, useState } from 'react'
// import { json } from 'react-router-dom'
// import CustomInput from '../ReusableComponent/MyInput/CustomInput'
// import { MdOutlineRestaurantMenu } from "react-icons/md";
// import Dropzone from '../ReusableComponent/Dropzone/Dropzone'

// function AddMenu() {
//     var [allRestaurant, setAllrestuarant]= useState('')

//     useEffect(()=>{
//         fetch("http://localhost:5000/api/restaurants")
//         .then((res) => res.json())
//         .then((json) => setAllrestuarant(json));
//     }, [])
//   return (
//     <div>
//      <div className='  w-full min-h-[100vh]'>
//             {/* <div className=" w-[max-content] bg-[#f3f9d2] p-3 absolute rounded-lg left-[50%] right-[50%] transition-[1s]" >
//                 <h2>Added Successfully</h2>
//             </div> */}

//             <div className=" min-h-[90vh] w-full lg:w-[80%] pl-[2px] md-pl-[0px] lg:pl-[120px] grid grid-cols-1 md:grid-cols-[15%,85%]">
//                <div className=" bg-slate-200 md:flex justify-center ">
//                 <span className=' text-[#5F8670] text-[40px] md:text-[60px]'> <MdOutlineRestaurantMenu /></span>
               
//                </div>
//                <div className=" bg-slate-200">
//                <form action="http://localhost:5000/add-menu" method='post' encType="multipart/form-data">
//                <div className="space-y-3  ml-[2px] md-ml-[0px] lg:ml-[0px] bg-slate-200">
//                     <h1 className=' text-[25px]'>Edit menu list</h1>
//                     <p>Partem diceret praesent mel et, vis facilis alienum antiopam ea, vim in sumo diam sonet. Illud ignota cum te, decore elaboraret nec ea. Quo ei graeci repudiare definitionem. Vim et malorum ornatus assentior, exerci elaboraret eum ut, diam meliore no mel.</p>
//                 </div>
//                     <br />


//                     <div className="">
//                         <select name="restaurant" id=""  className='bb h-[40px] w-[80%] rounded-[10px] bg-[transparent] pl-2'>
//                             <option value="">Select Restaurant</option>
//                             {
//                                 allRestaurant? (
//                                     allRestaurant.map((restaurant) => (
//                                         <option key={restaurant._id} value={restaurant._id} >
//                                             {restaurant.name.charAt(0).toUpperCase() + 
//                                             restaurant.name.slice(1)}
//                                         </option>
//                                     ))
//                                 ): (
//                                     <option >Loading</option>
//                                 )
//                             }
//                         </select>
//                     </div> <br />

//                     <div className="">
//                         <label htmlFor="food-name">Food Name</label> <br />
//                         <CustomInput
//                             type="text"
//                             name='name'
//                             required
//                             id="food-name"
//                              className='bb h-[40px] w-[80%] rounded-[10px] bg-[transparent] pl-2'
//                         />
//                     </div> <br />

                    
                    
//                     <div className="">
//                         <label htmlFor="restaurant-image">Food Image</label> <br />
//                         <Dropzone
//                             // stomInput
//                             type="file"
//                             name='image'
//                             required
//                         />
//                         {/* <CustomInput
//                             type="file"
//                             name='image'
//                             required
//                             className=' h-[40px] w-[80%]'
//                         /> */}
//                     </div> <br />

         


//                     <div className="">
//                         <label htmlFor="description">Description</label> <br />
//                         <textarea
//                             name="food_description"
//                             className='bb h-[100px] w-[80%] rounded-[20px]  bg-[transparent] pl-3 pt-2'
//                         ></textarea>
//                         {/* <textarea
//                             name="food_description"
//                             required
//                             className=' h-[150px] w-[80%] rounded-[20px] bg-[#80808060] pl-3 pt-2'
//                         ></textarea> */}
//                     </div> <br />

//                     <div className="">
//                         <label htmlFor="foodprice">Food Price</label> <br />
//                         <CustomInput
//                             type="number"
//                             name='price'
//                             required
//                              className='bb h-[40px] w-[80%] rounded-[10px] bg-[transparent] pl-2'
//                         />
//                     </div><br />

                   

//                     <button type="submit" className=' h-[40px] w-[90%] bg-[] rounded-[10px] hover:bg-[#E7F0DC]' style={{border: '2px solid #5F8670',}}>Add menu</button>
//                 </form>
//                </div>
//             </div>
//         </div>      
//     </div>
//   )
// }

// export default AddMenu
