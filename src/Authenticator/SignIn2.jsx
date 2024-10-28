import React, { useState } from "react";
import CustomInput from "../ReusableComponent/MyInput/CustomInput";
// import jwt_decode from 'jwt-decode'
import API_URL from "../Config";

function SignIn2({onLoginSuccess,setusername}) {
  let [signindata, setsignindata] = useState({
    email: "",
    password: "",
  });
  let [passwordvalidator, setPasswordvalidator] = useState(null);
  let [emailValidator, setEmailValidator] = useState(null);

  const getValues = (e) => {
    const { name, value } = e.target;
    setsignindata({
      ...signindata,
      [name]: value,
    });
    console.log({
      ...signindata,
    });
  };

  const forhandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}sign-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signindata),
      });

      const data = await response.json();

      if (data.message) {
        alert(data.message)
        onLoginSuccess(true,"-130vh")
      } 
      
      if (data.emailMessage) {
        setEmailValidator(data.emailMessage);
      } else if (data.passwordMessage) {
        setPasswordvalidator(data.passwordMessage);
      }
      console.log(data); // Here you will get the JWT token if login is successful
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);

      // const decodedToken = jwt_decode(data.token);
      // console.log(decodedToken)

    } catch (err) {
      console.error("Login failed:", err.message);
    }
  };

  return (
    <div class="form-wrapper is-active">
      <button type="button" class="switcher switcher-login">
        Login
        <span class="underlinee"></span>
      </button>
      <form
        class="form form-login"
        onSubmit={forhandleSubmit}
        encType="multipart/form-data"
      >
        <fieldset>
          <legend>Please, enter your email and password for login.</legend>
          <div class="input-block">
            <label for="login-email" className=" text-black font-bold">
              E-mail
            </label>
            <CustomInput
              type="email"
              name="email"
              required
              onChange={getValues}
              className="bb h-[50px] w-[80%]  bg-[transparent] rounded-[5px]"
            />
            <p className=" text-red-600 text-[12px]">{emailValidator}</p>
          </div>
          <div class="input-block">
            <label for="login-password">Password</label>
            <CustomInput
              type="password"
              name="password"
              required
              onChange={getValues}
              className="bb h-[50px] w-[80%]  bg-[transparent] rounded-[5px]"
            />
            <p className=" text-red-600 text-[12px]">{passwordvalidator}</p>

          </div>
        </fieldset>
        <button type="submit" class="btn-login">
          Login
        </button>
      </form>
    </div>
  );
}

export default SignIn2;
