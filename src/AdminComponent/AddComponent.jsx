
import React, { useState } from 'react';
import CustomInput from '../ReusableComponent/MyInput/CustomInput';
import { TbHomePlus } from "react-icons/tb";
import Dropzone from '../ReusableComponent/Dropzone/Dropzone'
import API_URL from '../Config'

// import CustomInput from './CustomInput';

function AddComponent() {
    let [divdown, setDivdown] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);  // Store the uploaded file

    let box = divdown ? { top: "0%" } : { top: "-10%" };

    function move() {
        setDivdown(true);
        setTimeout(() => {
            setDivdown(false);
        }, 2000);
    }

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
      const response = await fetch("API_URL/add", {
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
        <div className=' bg-[] w-full min-h-[100vh] flex justify-center items-center'>
            {/* <div className=" w-[max-content] bg-[#f3f9d2] p-3 absolute rounded-lg left-[50%] right-[50%] transition-[1s]" style={box}>
                <h2>Added Successfully</h2>
            </div> */}

            <div className=" min-h-[90vh] w-full  grid grid-cols-1 md:grid-cols-[15%,85%] ">
               <div className="  md:flex justify-center">
                <span className=' text-[#5F8670] text-[40px] md:text-[60px]'>
                <TbHomePlus  />
                </span>
               </div>
               <div className="  ">
                <div className=" space-y-3 mb-6">
                    <h1 className=' text-[25px]'>General restaurant description</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem corrupti architecto aliquid beatae hic maxime voluptatum aperiam corporis a ipsam est blanditiis alias iusto ratione, tempora vitae fugiat aut placeat.</p>
                </div>
               <form  onSubmit={handleSubmit} encType="multipart/form-data" className=' flex justify-center flex-col'>
                    
                    <div className="">
                        <label htmlFor="restaurant-name">Restaurant Name <span className=' text-[red]'>*</span></label> <br />
                        <CustomInput
                            type="text"
                            name='name'
                            required
                            className='border-[2px] border-solid border-emerald-600 h-[40px] w-[80%] rounded-[10px] bg-[transparent] pl-2'
                        />
                    </div> <br />

                    <div className="">
                        <label htmlFor="description">Restaurant Description <span className=' text-[red]'>*</span></label> <br />
                        <textarea
                            name="description"
                            className='border-[2px] border-solid border-emerald-600 h-[100px] w-[80%] rounded-[20px]  bg-[transparent] pl-3 pt-2'
                        ></textarea>
                    </div> <br />

                    <div className=" w-[80%] bg-[] grid grid-cols-1 md:grid-cols-2 gap-3">
                        <section className=' bg-[]'>
                        <label htmlFor="phone">Phone Number</label> <br />
                        <CustomInput
                            type="text"
                            name='phone'
                            // required
                            className='border-[2px] border-solid border-emerald-600  h-[50px] w-[100%]   bg-[transparent] rounded-[10px]'
                        />
                        </section>

                        <section className='bg-[]'>
                        <label htmlFor="email">Email</label> <br />
                        <CustomInput
                            type="email"
                            name='email'
                            // required
                            className='border-[2px] border-solid border-emerald-600 h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                        />
                        </section>
                    </div>
                    <br />


                    <div className="">
                        <label htmlFor="address">Address <span className=' text-[red]'>*</span></label> <br />
                        <textarea
                            name="address"
                            required
                            className='border-[2px] border-solid border-emerald-600 h-[50px] w-[80%] rounded-[10px]  bg-[transparent] pl-3 pt-2'
                        ></textarea>
                    </div> <br />
                   
                    
                    <div className="">
                    <label htmlFor="restaurant-image">Restaurant Image <span className=' text-[red]'>*</span></label> 
                    <Dropzone onFileDrop={handleFileDrop} />  {/* Pass the handler to Dropzone */}

                        {/* <label htmlFor="restaurant-image">Restaurant Image</label> <br />
                        <CustomInput
                            type="file"
                            name='image'
                            required
                            className=' h-[180px] w-[80%] bg-[#80808060] rounded-[10px]'
                        /> */}
                    </div> <br />

                    <div className="">
                        <fieldset className='border-[2px] border-solid border-emerald-600 h-[200px] w-full lg:w-[80%] rounded-[10px] '>
                            <legend>Food Types <span className=' text-[red]'>*</span></legend>

                        {/* CHATGPT HELP ME WITH THE CODE BELLOW FOR THE FOOD TYPS */}
                            <div className=" h-[180px] grid grid-cols-3">
                                {/* Food Types checkboxes */} 
                                {['pizza', 'ice-cream', 'pastries', 'local-food', 'chinese', 'burgers', 'jollof-rice', 'fried-rice', 'pasta'].map(type => (
                                    <span key={type}>
                                        <CustomInput
                                            type="checkbox"
                                            name="food_types"
                                            value={type}
                                        />
                                        <label htmlFor={type}>{type.replace('-', ' ')}</label>
                                    </span>
                                ))}
                            </div>
                        </fieldset>
                    </div> <br />


                    <div className=" w-[80%] bg-[] grid grid-cols-1 md:grid-cols-[45%.10%,45%] gap-3">
                        <section className=' bg-[]'>
                        <label htmlFor="opening-time">Opening Hour <span className=' text-[red]'>*</span></label>
                    
                        <CustomInput
                            type="time" 
                            name="opening_time"
                             required 
                            className='border-[2px] border-solid border-emerald-600 h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                        />
                        </section>
                                <span className='flex justify-center items-center'>To</span>
                        <section className='bg-[]'>
                        <label htmlFor="opening-time">Closing Hour <span className=' text-[red]'>*</span></label>
                        <CustomInput
                            type="time"
                            name="closing_time"
                            required 
                            className='border-[2px] border-solid border-emerald-600 h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                        />
                        </section>
                    </div>
                    <br />

              

                   
                    <div className="">
                        <label htmlFor="rating">Rating <span className=' text-[red]'>*</span></label>
                        <CustomInput
                            type="number"
                            name='rating'
                            min="1"
                            max="5"
                            required
                            className=' h-[40px] w-[50%] rounded-[10px] border-[2px] border-solid border-emerald-600  bg-[transparent] pl-2'
                        />
                    </div><br />

                    {/* <h1>ADD FOOD MENU</h1>

                    <div className="">
                        <label htmlFor="food-name">Food Name</label> <br />
                        <CustomInput
                            type="text"
                            name='name'
                            required
                            className=' h-[40px] w-[80%] rounded-[20px] bg-[#80808060] pl-2'
                        />
                    </div> <br /> */}

                    <button type="submit" className=' h-[40px] w-[90%] bg-[] rounded-[10px] hover:bg-[#E7F0DC]' style={{border: '2px solid #5F8670',}}>Add Restaurant</button>
                </form>
               </div>
            </div>
        </div>
    );
}

export default AddComponent;



// import React , { useState }  from 'react'

// function AddComponent() {
//     let [divdown,setDivdown] = useState(false)

//     let box = divdown? {top:"0%"}:{top:"-10%"}

//     function move() {
//         setDivdown(true)
//         setTimeout(() => {
//             setDivdown(false)
//         }, 2000);
//     }

//   return (
//     <div className=' bg-[#E7F0DC] w-full min-h-[100vh] flex justify-center items-center'>
//         <div className=" w-[max-content] bg-[#f3f9d2] p-3 absolute rounded-lg left-[50%] right-[50%] transition-[1s]" style={box}>
//             <h2>Added Successfully</h2>
//         </div>

//         <div className=" min-h-[90vh] w-full lg:w-[80%] bg-[] pl-[20px] md-pl-[40px] lg:pl-[100px]">
//             <form action="http://localhost:5000/add" method='post' onSubmit={move} encType="multipart/form-data">
                
//             <div className="">
//                 <label htmlFor="">Restaurant Name</label> <br />
//                 <input type="text" name='name' required className=' h-[40px] w-[80%] rounded-[20px] bg-[#80808060] pl-2' />
//             </div> <br />

//             <div className="">
//                 <label htmlFor="">Address</label> <br />
//                 <textarea name="address" required className=' h-[150px] w-[80%] rounded-[20px] bg-[#80808060] pl-3 pt-2'></textarea>
//             </div> <br />
            

//             <div className="">
//                 <label htmlFor="">Restaurant Image</label> <br />
//                 <input type="file" name='image' required  className=' h-[40px] w-[80%]'/>
//             </div> <br />

//             <div className="">
//                 <fieldset className=' h-[200px] w-full lg:w-[80%] ' style={{border:'2px solid black'}}>
//                     <legend>Food Types</legend>

//                    <div className=" h-[180px] grid grid-cols-3">
//                    <span>
//                         <input type="checkbox" name="food_types" value="pizza"/>
//                         <label htmlFor="">Pizza</label>
//                     </span>

//                     <span>
//                         <input type="checkbox" name="food_types" value="ice-cream"/>
//                         <label htmlFor="">Ice Cream</label>
//                     </span>

//                     <span>
//                         <input type="checkbox" name="food_types" value="pastries"/>
//                         <label htmlFor="">Pastries</label>
//                     </span>
                    
//                     <span>
//                         <input type="checkbox" name="food_types" value="local-food"/>
//                         <label htmlFor="">Local Food</label>
//                     </span>

//                     <span>
//                         <input type="checkbox" name="food_types" value="chinese"/>
//                         <label htmlFor="">Chinese</label>
//                     </span>

//                     <span>
//                         <input type="checkbox" name="food_types" value="burgers"/>
//                         <label htmlFor="">Burgers</label>
//                     </span>

//                     <span>
//                         <input type="checkbox" name="food_types" value="jollof-rice"/>
//                         <label htmlFor="">Jollof Rice</label>
//                     </span>

//                     <span>
//                         <input type="checkbox" name="food_types" value="fried-rice"/>
//                         <label htmlFor="">Fried Rice</label>
//                     </span>

//                     <span>
//                         <input type="checkbox" name="food_types" value="pasta"/>
//                         <label htmlFor="">Pasta</label>
//                     </span>
//                    </div>
//                 </fieldset>

//             </div> <br />

//             <div className="">
//                 <label htmlFor="">Opening Hour</label> <br />
//                 <input type="time" name="opening_time" required/> <span>To</span> <input type="time" name="closing_time" required/>
//             </div> <br />

//             <div className="">
//                 <label htmlFor="">Description</label> <br />
//                 <textarea name="description" className=' h-[200px] w-[80%] rounded-[20px] bg-[#80808060] pl-3 pt-2'></textarea>
//             </div> <br />

//             <div className="">
//                 <label htmlFor="">Rating</label>
//                 <input type="number" name='rating' min="1" max="5" required className=' h-[40px] w-[40%] rounded-[20px] bg-[#80808060] pl-2' />
//             </div><br />

//             {/* <h1>ADD FOOD MENU</h1>

//             <div className="">
//                 <label htmlFor="">Food Name</label> <br />
//                 <input type="text" name='name' required className=' h-[40px] w-[80%] rounded-[20px] bg-[#80808060] pl-2' />
//             </div> <br /> */}

//                 <button type="submit" className=' h-[40px] w-[90%] bg-orange-500 rounded-[20px]' >Add Restaurant</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default AddComponent




// // AddComponent Form
// import React, { useState } from 'react';
// import CustomInput from '../ReusableComponent/MyInput/CustomInput';

// function AddComponent() {
//     const [formData, setFormData] = useState({
//         name: '',
//         address: '',
//         image: null,
//         food_types: [],
//         opening_time: '',
//         closing_time: '',
//         description: '',
//         rating: ''
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked, files } = e.target;

//         if (type === 'checkbox') {
//             setFormData((prevState) => ({
//                 ...prevState,
//                 food_types: checked
//                     ? [...prevState.food_types, value]
//                     : prevState.food_types.filter((item) => item !== value)
//             }));
//         } else if (type === 'file') {
//             setFormData({ ...formData, [name]: files[0] });
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const data = new FormData();
//         Object.keys(formData).forEach(key => {
//             if (key === 'food_types') {
//                 formData[key].forEach(type => data.append(key, type));
//             } else {
//                 data.append(key, formData[key]);
//             }
//         });

//         fetch('http://localhost:5000/add', {
//             method: 'POST',
//             body: data,
//         })
//         .then(response => {
//             // Check if the response status is not OK
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
            
//             // Handle different content types
//             const contentType = response.headers.get('content-type');
//             if (contentType && contentType.includes('application/json')) {
//                 return response.json();
//             } else {
//                 return response.text(); // If not JSON, return as text (likely HTML)
//             }
//         })
//         .then(data => {
//             if (typeof data === 'object') {
//                 console.log('Success:', data); // JSON response
//             } else {
//                 console.error('Error:', data); // Likely an HTML error page
//             }
//         })
//         .catch(error => {
//             console.error('Fetch error:', error);
//         });
        
//     }

//     return (
//         <div className="bg-[#E7F0DC] w-full min-h-[100vh] flex justify-center items-center">
//             {/* <div className="w-[max-content] bg-[#f3f9d2] p-3 absolute rounded-lg left-[50%] right-[50%] transition-[1s]">
//                 <h2>Added Successfully</h2>
//             </div> */}

//             <div className="min-h-[90vh] w-full lg:w-[80%] pl-[20px] md:pl-[40px] lg:pl-[100px]">
//                 <form onSubmit={handleSubmit} encType="multipart/form-data">
//                     <div>
//                         <label>Restaurant Name</label><br />
//                         <CustomInput
//                             height="40px"
//                             width="80%"
//                             borderRadius="20px"
//                             backgroundColor="#80808060"
//                             type="text"
//                             value={formData.name}
//                             onChange={handleChange}
//                             placeholder="Enter Restaurant Name"
//                             name="name"
//                             paddingLeft="10px"
//                         />
//                     </div><br />

//                     <div>
//                         <label>Address</label><br />
//                         <textarea name="address" value={formData.address} onChange={handleChange} required className="h-[150px] w-[80%] rounded-[20px] bg-[#80808060] pl-3 pt-2"></textarea>
//                     </div><br />

//                     <div>
//                         <label>Restaurant Image</label><br />
//                         <CustomInput
//                             height="40px"
//                             width="80%"
//                             type="file"
//                             onChange={handleChange}
//                             name="image"
//                         />
//                     </div><br />

//                     <div>
//                         <fieldset className="h-[200px] w-full lg:w-[80%]" style={{ border: '2px solid black' }}>
//                             <legend>Food Types</legend>
//                             <div className="h-[180px] grid grid-cols-3">
//                                 <span>
//                                     <CustomInput
//                                         type="checkbox"
//                                         name="food_types"
//                                         value="pizza"
//                                         onChange={handleChange}
//                                     />
//                                     <label>Pizza</label>
//                                 </span>

//                                 <span>
//                                     <CustomInput
//                                         type="checkbox"
//                                         name="food_types"
//                                         value="ice-cream"
//                                         onChange={handleChange}
//                                     />
//                                     <label>Ice Cream</label>
//                                 </span>

//                                 <span>
//                                     <CustomInput
//                                         type="checkbox"
//                                         name="food_types"
//                                         value="pastries"
//                                         onChange={handleChange}
//                                     />
//                                     <label>Pastries</label>
//                                 </span>

//                                 <span>
//                                     <CustomInput
//                                         type="checkbox"
//                                         name="food_types"
//                                         value="local-food"
//                                         onChange={handleChange}
//                                     />
//                                     <label>Local Food</label>
//                                 </span>

//                                 <span>
//                                     <CustomInput
//                                         type="checkbox"
//                                         name="food_types"
//                                         value="chinese"
//                                         onChange={handleChange}
//                                     />
//                                     <label>Chinese</label>
//                                 </span>

//                                 <span>
//                                     <CustomInput
//                                         type="checkbox"
//                                         name="food_types"
//                                         value="burgers"
//                                         onChange={handleChange}
//                                     />
//                                     <label>Burgers</label>
//                                 </span>

//                                 <span>
//                                     <CustomInput
//                                         type="checkbox"
//                                         name="food_types"
//                                         value="jollof-rice"
//                                         onChange={handleChange}
//                                     />
//                                     <label>Jollof Rice</label>
//                                 </span>

//                                 <span>
//                                     <CustomInput
//                                         type="checkbox"
//                                         name="food_types"
//                                         value="fried-rice"
//                                         onChange={handleChange}
//                                     />
//                                     <label>Fried Rice</label>
//                                 </span>

//                                 <span>
//                                     <CustomInput
//                                         type="checkbox"
//                                         name="food_types"
//                                         value="pasta"
//                                         onChange={handleChange}
//                                     />
//                                     <label>Pasta</label>
//                                 </span>
//                             </div>
//                         </fieldset>
//                     </div><br />

//                     <div>
//                         <label>Opening Hour</label><br />
//                         <CustomInput
//                             type="time"
//                             name="opening_time"
//                             value={formData.opening_time}
//                             onChange={handleChange}
//                             required
//                         /> <span>To</span> 
//                         <CustomInput
//                             type="time"
//                             name="closing_time"
//                             value={formData.closing_time}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div><br />

//                     <div>
//                         <label>Description</label><br />
//                         <textarea name="description" value={formData.description} onChange={handleChange} className="h-[200px] w-[80%] rounded-[20px] bg-[#80808060] pl-3 pt-2"></textarea>
//                     </div><br />

//                     <div>
//                         <label>Rating</label>
//                         <CustomInput
//                             height="40px"
//                             width="60%"
//                             borderRadius="20px"
//                             backgroundColor="#80808060"
//                             type="number"
//                             value={formData.rating}
//                             onChange={handleChange}
//                             placeholder="Enter Rating here"
//                             name="rating"
//                             paddingLeft="10px"
//                         />
//                     </div><br />

//                     <button type="submit" className="h-[40px] w-[90%] bg-orange-500 rounded-[20px]">Add Restaurant</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default AddComponent;









// import React, { useState } from 'react';
// import CustomInput from '../ReusableComponent/MyInput/CustomInput';

// function AddComponent() {
//     const [divdown, setDivdown] = useState(false);
//     const [inputValues, setInputValues] = useState({
//         name: '',
//         address: '',
//         image: null,
//         food_types: [],
//         opening_time: '',
//         closing_time: '',
//         description: '',
//         rating: ''
//     });
//     const [selectedFoodTypes, setSelectedFoodTypes] = useState([]);
//     const [file, setFile] = useState(null);

//     const box = divdown ? { top: "0%" } : { top: "-10%" };

//     function move() {
//         setDivdown(true);
//         setTimeout(() => {
//             setDivdown(false);
//         }, 2000);
//     }

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setInputValues({
//             ...inputValues,
//             [name]: value,
//         });
//         console.log(inputValues)
//     };

//     const handleFileChange = (event) => {
//         setFile(event.target.files[0]);
//     };

//     const handleCheckboxChange = (event) => {
//         const { value } = event.target;
//         setSelectedFoodTypes((prev) =>
//             prev.includes(value)
//                 ? prev.filter((item) => item !== value)
//                 : [...prev, value]
//         );
//     };

//     return (
//         <div className='bg-[#E7F0DC] w-full min-h-[100vh] flex justify-center items-center'>
//             <div className="w-[max-content] bg-[#f3f9d2] p-3 absolute rounded-lg left-[50%] right-[50%] transition-[1s]" style={box}>
//                 <h2>Added Successfully</h2>
//             </div>

//             <div className="min-h-[90vh] w-full lg:w-[80%] pl-[20px] md-pl-[40px] lg:pl-[100px]">
//                 <form action="http://localhost:5000/add" method='post' onSubmit={move} encType="multipart/form-data">
                    
//                     <div className="">
//                         <label htmlFor="name">Restaurant Name</label> <br />
//                         <CustomInput
//                             height="40px"
//                             width="80%"
//                             borderRadius="20px"
//                             backgroundColor="#80808060"
//                             type="text"
//                             value={inputValues.name}
//                             onChange={handleInputChange}
//                             placeholder="Enter Restaurant Name"
//                             name="name"
//                             paddingLeft="10px"
//                         />
//                     </div> <br />

//                     <div className="">
//                         <label htmlFor="address">Address</label> <br />
//                         <textarea name="address" required className='h-[150px] w-[80%] rounded-[20px] bg-[#80808060] pl-3 pt-2'></textarea>
//                     </div> <br />

//                     <div className="">
//                         <label htmlFor="file">Restaurant Image</label> <br />
//                         <CustomInput
//                             height="40px"
//                             width="80%"
//                             type="file"
//                             onChange={handleFileChange}
//                             name="image"
//                         />
//                     </div> <br />

//                     <div className="">
//                         <fieldset className='h-[200px] w-full lg:w-[80%]' style={{ border: '2px solid black' }}>
//                             <legend>Food Types</legend>
//                             <div className="h-[180px] grid grid-cols-3">
//                                 <span>
//                                     <CustomInput
//                                         type="checkbox"
//                                         onChange={handleCheckboxChange}
//                                         name="food_types"
//                                         value='pizza'
//                                     />
//                                     <label htmlFor="">Pizza</label>
//                                 </span>

//                                 <span>
//                                     <CustomInput
//                                         type="checkbox"
//                                         onChange={handleCheckboxChange}
//                                         name="food_types"
//                                         value='ice_cream'
//                                     />
//                                     <label htmlFor="">Ice Cream</label>
//                                 </span>

//                                 <span>
//                                     <CustomInput
//                                         type="checkbox"
//                                         onChange={handleCheckboxChange}
//                                         name="food_types"
//                                         value='pastries'
//                                     />
//                                     <label htmlFor="">Pastries</label>
//                                 </span>
                                
//                                 <span>
//                                     <CustomInput
//                                         type="checkbox"
//                                         onChange={handleCheckboxChange}
//                                         name="food_types"
//                                         value='local_food'
//                                     />
//                                     <label htmlFor="">Local Food</label>
//                                 </span>

//                                 <span>
//                                     <CustomInput
//                                         type="checkbox"
//                                         onChange={handleCheckboxChange}
//                                         name="food_types"
//                                         value='chinese'
//                                     />
//                                     <label htmlFor="">Chinese</label>
//                                 </span>

//                                 <span>
//                                     <CustomInput
//                                         type="checkbox"
//                                         onChange={handleCheckboxChange}
//                                         name="food_types"
//                                         value='burgers'
//                                     />
//                                     <label htmlFor="">Burgers</label>
//                                 </span>

//                                 <span>
//                                     <CustomInput
//                                         type="checkbox"
//                                         onChange={handleCheckboxChange}
//                                         name="food_types"
//                                         value='jollof_rice'
//                                     />
//                                     <label htmlFor="">Jollof Rice</label>
//                                 </span>

//                                 <span>
//                                     <CustomInput
//                                         type="checkbox"
//                                         onChange={handleCheckboxChange}
//                                         name="food_types"
//                                         value='fried_rice'
//                                     />
//                                     <label htmlFor="">Fried Rice</label>
//                                 </span>

//                                 <span>
//                                     <CustomInput
//                                         type="checkbox"
//                                         onChange={handleCheckboxChange}
//                                         name="food_types"
//                                         value='pasta'
//                                     />
//                                     <label htmlFor="">Pasta</label>
//                                 </span>
//                             </div>
//                         </fieldset>
//                     </div> <br />

//                     <div className="">
//                         <label htmlFor="opening_time">Opening Hour</label> <br />
//                         <span>
//                             <CustomInput
//                                 borderRadius="20px"
//                                 backgroundColor="#80808060"
//                                 type="time"
//                                 value={inputValues.opening_time}
//                                 onChange={handleInputChange}
//                                 name="opening_time"
//                             />
//                         </span>
//                     </div> <br />

//                     <div className="">
//                         <label htmlFor="description">Description</label> <br />
//                         <textarea name="description" className='h-[200px] w-[80%] rounded-[20px] bg-[#80808060] pl-3 pt-2'></textarea>
//                     </div> <br />

//                     <div className="">
//                         <label htmlFor="rating">Rating</label>
//                         <CustomInput
//                             height="40px"
//                             width="60%"
//                             borderRadius="20px"
//                             backgroundColor="#80808060"
//                             type="number"
//                             value={inputValues.rating}
//                             onChange={handleInputChange}
//                             placeholder="Enter Rating here"
//                             name="rating"
//                             paddingLeft="10px"
//                         />
//                     </div><br />

//                     <h1>ADD FOOD MENU</h1>

//                     {/* <div className="">
//                         <label htmlFor="food_name">Food Name</label> <br />
//                         <input type="text" name='food_name' required className='h-[40px] w-[80%] rounded-[20px] bg-[#80808060] pl-2' />
//                     </div> <br /> */}

//                     <button type="submit" className='h-[40px] w-[90%] bg-orange-500 rounded-[20px]'>Add Restaurant</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default AddComponent;






















// import React, { useState } from 'react';
// import CustomInput from '../ReusableComponent/MyInput/CustomInput';
// import CustomInput from './CustomInput'; // Adjust the import path as necessary
