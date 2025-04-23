import React, { useEffect, useState } from "react";
import API_URL from "../Config";

function EditRestaurant({
  RestaurantId,
  showModal,
  setShowModal,
  AllRestaurants
}) {
  const [RestaurantData, setRestaurantData] = useState({
    name: "",
    address: "",
    opening_time: "",
    closing_time: "",
    description: "",
    rating: 1,
    food_types: [],
  });

  useEffect(() => {
    async function fetchRestaurant() {
      try {
        const response = await fetch(`${API_URL}restaurant/${RestaurantId}`);

        if (!response.ok) {
            throw new Error('Failed to fetch restaurant data');
        }
        const data = await response.json();
        setRestaurantData(data);
        console.log(data)
      } catch (error) {
        console.error("Failed to fetch restaurant data:", error);
      }
    }

    if (RestaurantId) fetchRestaurant();
  }, [RestaurantId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurantData((prevData) => ({ ...prevData, [name]: value }));
  };

  const closeModal = () => {
    setRestaurantData({
      name: "",
      address: "",
      opening_time: "",
      closing_time: "",
      description: "",
      rating: 1,
      food_types: [],
    });
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert("works")

    // Create FormData to include image and array of food types
    const formData = new FormData();
    formData.append('name', RestaurantData.name);
    formData.append('address', RestaurantData.address);
    formData.append('opening_time', RestaurantData.opening_time);
    formData.append('closing_time', RestaurantData.closing_time);
    formData.append('description', RestaurantData.description);
    formData.append('rating', RestaurantData.rating);

    // Append image if one is selected
    const imageFile = e.target.image.files[0];
    if (imageFile) {
      formData.append('image', imageFile);
    }

    // Append selected food types
    const selectedFoodTypes = Array.from(e.target.food_types)
      .filter(input => input.checked)
      .map(input => input.value);
    selectedFoodTypes.forEach(type => formData.append('food_types', type));

    try {
      const response = await fetch(
        `${API_URL}/editrestaurant/${RestaurantId}`,  
        {
          method: "PUT",
          body: formData
        }
      );

      if (response.ok) {
        const jsonResponse = await response.json(); 
        alert(jsonResponse.message);
        closeModal();
      } else {
        console.error("Error updating restaurant:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className={` h-[100vh] bg-[#0f0f0f34] transition-all duration-300 ${showModal ? " opacity-100 translate-y-0" : "opacity-0 translate-y-[-100vh]"} absolute top-0 w-full left-0 grid place-items-center `}
    >
      <div className={` min-h-[75vh] duration-500 ${showModal ? " translate-y-0" : " translate-y-[-85vh]"} w-[80%] md:w-[500px] bg-[#fff] rounded-lg p-7 relative`}>
        <button
          className=" p-2 bg-[#000000b6] absolute top-0 right-0 rounded-se-lg"
          onClick={closeModal}
        >
          ❌
        </button>
        <h1 className=" font-bold text-2xl mt-3">Edit Restaurant</h1>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className=" grid grid-cols-2 gap-y-2 sm:gap-y-8 mt-3"
        >
          <label htmlFor="image" className=" col-span-2 flex flex-col gap-2">
            Restaurant Image
            <input
              type="file"
              name="image"
              className=" border border-black border-solid"
              src={RestaurantData?.image || ""}
            />
          </label>
          <label htmlFor="name">
            Restaurant Name
            <input
              type="text"
              name="name"
              value={RestaurantData?.name || ""}
              onChange={handleChange}
              className=" border border-black border-solid"
            />
          </label>
          <label htmlFor="rating">
            Restaurant Rating
            <input
              type="number"
              name="rating"
              value={RestaurantData?.rating || ""}
              onChange={handleChange}
              className=" border border-black border-solid"
            />
          </label>
          <fieldset className="border border-solid border-black col-span-2">
            <legend>Food Types:</legend>
            <div className="grid grid-cols-3 ml-3">
              {[
                "pizza",
                "ice-cream",
                "pastries",
                "local-food",
                "chinese",
                "burgers",
                "jollof-rice",
                "fried-rice",
                "pasta",
              ].map((type,idx) => (
                <span key={idx}>
                  <input
                    type="checkbox"
                    name="food_types"
                    value={type}
                    defaultChecked={RestaurantData.food_types?.includes(type)}
                  />{" "}
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
              ))}
            </div>
          </fieldset>
          <label className=" col-span-2 flex gap-2">
            Opening Hours:
            <input
              type="time"
              className=" border border-solid border-black"
              name="opening_time"
              value={RestaurantData.opening_time}
              onChange={handleChange}
              required
            />
            to
            <input
              type="time"
              name="closing_time"
              className=" border border-solid border-black"
              value={RestaurantData.closing_time}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="address" className=" col-span-2 sm:col-span-1">
            Restaurant Address
            <textarea
              name="address"
              value={RestaurantData?.address || ""}
              onChange={handleChange}
              className=" border border-black border-solid w-[90%]"
            ></textarea>
          </label>
          <label className=" col-span-2 sm:col-span-1">
            Description:
            <textarea
              name="description"
              value={RestaurantData.description}
              onChange={handleChange}
              required
              className=" border border-black w-[90%] border-solid"
            ></textarea>
          </label>
          <button
            className=" p-2 bg-[#FF5A3C] col-span-2 font-medium"
            type="submit"
          >
            Update Restaurant
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditRestaurant;