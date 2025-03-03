import React, { useState } from "react";
import API_URL from "../Config";

function Signup2({ onLoginSuccess,setusername }) {
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    tel: "",
    password: "",
  });

  const handleDataChange = async (e) => {
    const { name, value } = e.target;

    setFormdata({
      ...formdata,
      [name]: value,
    });
    console.log({
      ...formdata,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${API_URL}user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json(); // Parse the JSON response

      switch (response.status) {
        case 201:
          // If sign-up is successful
          alert(data.message); 
          onLoginSuccess(true, "-130vh");
          setusername(data.username);
          window.location.reload()
          break;
        case 400:
          alert(data.message); // Handle 400 Bad Request
          break;
        default:
          alert(data.error || "An unexpected error occurred"); 
          break;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div class="form-wrapper">
      <button type="button" class="switcher switcher-signup">
        Sign Up
        <span class="underlinee"></span>
      </button>
      <form class="form form-signup" onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            Please, enter your email, password and password confirmation for
            sign up.
          </legend>
          <div class="input-block">
            <label htmlFor="signup-username">Username</label>
            <input
              id="signup-username"
              name="username"
              type="text"
              required
              onChange={handleDataChange}
            />
          </div>
          <div class="input-block">
            <label htmlFor="signup-email">E-mail</label>
            <input
              id="signup-email"
              name="email"
              type="email"
              required
              onChange={handleDataChange}
            />
          </div>
          {/* <div class="input-block">
            <label htmlFor="signup-tel">Tel</label>
            <input
              id="signup-tel"
              name="tel"
              type="tel"
              required
              onChange={handleDataChange}
            />
          </div> */}
          <div class="input-block">
            <label htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              name="password"
              type="password"
              required
              onChange={handleDataChange}
            />
          </div>
        </fieldset>
        <button type="submit" class="btn-signup">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup2;
