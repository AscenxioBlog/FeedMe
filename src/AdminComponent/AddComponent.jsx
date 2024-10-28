import React, { useState } from 'react';
import CustomInput from '../ReusableComponent/MyInput/CustomInput';
import { TbHomePlus } from "react-icons/tb";
// import MyDropzone from '../ReusableComponent/Dropzone/MyDropzone'; // Updated import
import MyDropzone from '../ReusableComponent/Dropzone/Dropzone';
import API_URL from '../Config';

function AddComponent() {
    let [divdown, setDivdown] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null); // Store the uploaded file

    let box = divdown ? { top: "0%" } : { top: "-10%" };

    function move() {
        setDivdown(true);
        setTimeout(() => {
            setDivdown(false);
        }, 2000);
    }

    // Handle file drop from Dropzone
    // const handleFileDrop = (files) => {
    //     setSelectedFile(files[0]); // Assuming single file upload, so take the first file
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Append the image file to formData with correct key as expected by backend
        if (selectedFile) {
            formData.append('restaurantImage', selectedFile);
        }

        try {
            const response = await fetch(`${API_URL}add`, { // Corrected template literal syntax
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
        <div className='w-full min-h-[100vh] flex justify-center items-center'>
            <div className="min-h-[90vh] w-full grid grid-cols-1 md:grid-cols-[15%,85%]">
                <div className="md:flex justify-center">
                    <span className='text-[#5F8670] text-[40px] md:text-[60px]'>
                        <TbHomePlus />
                    </span>
                </div>
                <div>
                    <div className="space-y-3 mb-6">
                        <h1 className='text-[25px]'>General restaurant description</h1>
                        <p>Lorem ipsum dolor sit amet...</p>
                    </div>
                    <form onSubmit={handleSubmit} encType="multipart/form-data" className='flex justify-center flex-col'>
                        
                        <div>
                            <label htmlFor="restaurant-name">Restaurant Name <span className='text-[red]'>*</span></label> <br />
                            <CustomInput
                                type="text"
                                name='name'
                                required
                                className='border-[2px] border-solid border-emerald-600 h-[40px] w-[80%] rounded-[10px] bg-[transparent] pl-2'
                            />
                        </div> <br />

                        <div>
                            <label htmlFor="description">Restaurant Description <span className='text-[red]'>*</span></label> <br />
                            <textarea
                                name="description"
                                className='border-[2px] border-solid border-emerald-600 h-[100px] w-[80%] rounded-[20px] bg-[transparent] pl-3 pt-2'
                            ></textarea>
                        </div> <br />

                        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 gap-3">
                            <section>
                                <label htmlFor="phone">Phone Number</label> <br />
                                <CustomInput
                                    type="text"
                                    name='phone'
                                    className='border-[2px] border-solid border-emerald-600 h-[50px] w-[100%] bg-[transparent] rounded-[10px]'
                                />
                            </section>

                            <section>
                                <label htmlFor="email">Email</label> <br />
                                <CustomInput
                                    type="email"
                                    name='email'
                                    className='border-[2px] border-solid border-emerald-600 h-[50px] w-[100%] bg-[transparent] rounded-[10px]'
                                />
                            </section>
                        </div>
                        <br />

                        <div>
                            <label htmlFor="address">Address <span className='text-[red]'>*</span></label> <br />
                            <textarea
                                name="address"
                                required
                                className='border-[2px] border-solid border-emerald-600 h-[50px] w-[80%] rounded-[10px] bg-[transparent] pl-3 pt-2'
                            ></textarea>
                        </div> <br />

                        <div>
                            <label htmlFor="restaurant-image">Restaurant Image <span className='text-[red]'>*</span></label> 
                            {/* <MyDropzone onFileDrop={handleFileDrop} /> Updated component name */}
                            <input type="file" name="restaurantImage" />
                        </div> <br />

                        <div>
                            <fieldset className='border-[2px] border-solid border-emerald-600 h-[200px] w-full lg:w-[80%] rounded-[10px]'>
                                <legend>Food Types <span className='text-[red]'>*</span></legend>
                                <div className="h-[180px] grid grid-cols-3">
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

                        <div className="w-[80%] grid grid-cols-1 md:grid-cols-[45%.10%,45%] gap-3">
                            <section>
                                <label htmlFor="opening-time">Opening Hour <span className='text-[red]'>*</span></label>
                                <CustomInput
                                    type="time"
                                    name="opening_time"
                                    required
                                    className='border-[2px] border-solid border-emerald-600 h-[50px] w-[100%] bg-[transparent] rounded-[10px]'
                                />
                            </section>
                            <span className='flex justify-center items-center'>To</span>
                            <section>
                                <label htmlFor="closing-time">Closing Hour <span className='text-[red]'>*</span></label>
                                <CustomInput
                                    type="time"
                                    name="closing_time"
                                    required
                                    className='border-[2px] border-solid border-emerald-600 h-[50px] w-[100%] bg-[transparent] rounded-[10px]'
                                />
                            </section>
                        </div>
                        <br />

                        <div>
                            <label htmlFor="rating">Rating <span className='text-[red]'>*</span></label>
                            <CustomInput
                                type="number"
                                name='rating'
                                min="1"
                                max="5"
                                required
                                className='h-[40px] w-[50%] rounded-[10px] border-[2px] border-solid border-emerald-600 bg-[transparent] pl-2'
                            />
                        </div><br />

                        <button type="submit" className='h-[40px] w-[90%] rounded-[10px] hover:bg-[#E7F0DC]' style={{border: '2px solid #5F8670'}}>Add Restaurant</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddComponent;