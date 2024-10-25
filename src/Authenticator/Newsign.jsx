import React, { useState } from "react";
import { Link } from "react-router-dom";
// import bobo from '../images/kicon1.jpg'

function Signup() {
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    password: "",
  });

  const handleDataChange = (e) => {
    const { name, value } = e.target;

    setFormdata({
      ...formdata,
      [name]: value,
    });
    console.log({
      ...formdata,
    })
  };


  const handleSubmit = async (e) => {
    e.preventDefault(); 
    

    try {
      const response = await fetch('http://localhost:5000/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata), 
      });

      const data = await response.json(); // Parse the JSON response

      if (response.ok) {
        // If sign-up is successful
        alert(data.message); // Display success message
      } else {
        alert('Sign-up failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className=" h-[100vh] grid place-items-center">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className=" h-[max-content] bg-[#0002] w-[40%] flex flex-col justify-center items-center gap-8 p-[20px]"
      >
        <h1 className=' font-bold font-[arial] text-2xl'>Sign Up</h1>

        <label htmlFor="text" className="flex flex-col">
          Firstname
          <input
            type="text"
            name="firstname"
            value={formdata.firstname}
            required
            placeholder="firstname"
            onChange={handleDataChange}
            className=" placeholder:text-black border-[2px] border-black"
          />
        </label>
        <label htmlFor="text" className="flex flex-col">
          Lastname
          <input
            type="text"
            name="lastname"
            value={formdata.lastname}
            required
            placeholder="lastname"
            onChange={handleDataChange}
            className=" placeholder:text-black border-[2px] border-black"
          />
        </label>
        <label htmlFor="email" className="flex flex-col">
          Email
          <input
            type="email"
            name="email"
            value={formdata.email}
            required
            placeholder="email"
            onChange={handleDataChange}
            className=" placeholder:text-black border-[2px] border-black"
          />
        </label>
        <label htmlFor="tel" className="flex flex-col">
          Phone
          <input
            type="tel"
            name="tel"
            value={formdata.tel}
            required
            placeholder="tel"
            onChange={handleDataChange}
            className=" placeholder:text-black border-[2px] border-black"
          />
        </label>
        <label htmlFor="password" className="flex flex-col">
          Password
          <input
            type="password"
            name="password"
            value={formdata.password}
            required
            placeholder="password"
            onChange={handleDataChange}
            className=" placeholder:text-black border-[2px] border-black"
          />
        </label>
        <button
          type="submit"
          className=" w-[180px] bg-black text-white p-1 rounded-md"
        >
          submit
        </button>
        <p>Already have an account? <Link to="/signin" className=" underline text-[blue]">signin</Link></p>
      </form>
    </div>
  );
}

export default Signup;
