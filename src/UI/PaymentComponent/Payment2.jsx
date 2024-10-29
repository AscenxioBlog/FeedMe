import React, { useEffect, useState } from 'react'
import CustomInput from '../../ReusableComponent/MyInput/CustomInput'
import SliderComponent from '../../ReusableComponent/Slider/SliderComponent'
import { IoCheckmarkCircle } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { SlPaypal } from "react-icons/sl";
import { BsCashCoin } from "react-icons/bs";
import API_URL from '../../Config';

function Payment2() {
  var Delivery = 1000;
  const [totalmoney, setTotalMoney] = useState();
  const [newcart, setNewcart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    const storenewcart = localStorage.getItem('cart');
    setNewcart(storenewcart ? JSON.parse(storenewcart) : []);

    const handleStorageChange = () => {
      const updateCart = localStorage.getItem('cart');
      setNewcart(updateCart ? JSON.parse(updateCart) : []);
    };

    window.addEventListener('storageUpdate', handleStorageChange);

    return () => {
      window.removeEventListener('storageUpdate', handleStorageChange);
    };
  }, []); // Empty dependency array to ensure this only runs once on mount

  const totalPrice = newcart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Flutterwave payment handler
  const handleFlutterwavePayment = () => {
    window.FlutterwaveCheckout({
      public_key: "YOUR_FLUTTERWAVE_PUBLIC_KEY", // Replace with your actual public key
      tx_ref: Date.now(),
      amount: totalPrice + Delivery, // Add delivery cost to total
      currency: "USD",
      payment_options: "card, mobilemoney, ussd",
      customer: {
        email: "user@example.com", // Use actual user email if available
        phone_number: "07012345678", // Use actual user phone number if available
        name: "John Doe", // Use actual user name if available
      },
      customizations: {
        title: "Diadem Shopping Mall",
        description: "Payment for items in cart",
        logo: "https://example.com/logo.png", // Optional: your logo URL
      },
      callback: (response) => {
        console.log(response);
        if (response.status === "successful") {
          alert("Payment successful");
          setTotalMoney(totalPrice + Delivery);
          // You may also want to clear the cart here
        }
      },
      onclose: () => {
        console.log("Payment modal closed");
      },
    });
  };

  return (
    <div>
      <div className="min-h-[100vh] w-full bg-[#E7F0DC] grid grid-cols-1 lg:grid-cols-[31%,42%,24%] gap-4">
        <div className="h-[60vh] md:h-[60vh] lg:h-[100vh] flex items-center p-2">
          <div className="min-h-[400px] w-full flex justify-center">
            <SliderComponent />
          </div>
        </div>

        <div className="bg-[]">
          <div className="h-[80px] w-full bg-[#5F8670] text-[20px] md:text-[35px] flex justify-center items-center text-white font-bold">
            <h1>Your payment details</h1>
          </div>

          <div className="p-3 bg-slate-100">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleFlutterwavePayment(); // Trigger Flutterwave payment on form submit
              }}
              className="space-y-6"
            >
              <div className="h-[70px] w-full bg-slate-300 rounded-xl flex justify-between items-center pr-2 pl-2">
                <div className="flex gap-5">
                  <IoCheckmarkCircle size={30} /> <span className="text-[20px] font-semibold">Credit Card</span>
                </div>
                <span><CiCreditCard1 size={30} /></span>
              </div>

              {/* Card details form */}
              {/* These fields are not functional with Flutterwave but are included for user input UI */}
              <div className="font-bold">
                <label htmlFor="name">Name on card <span className="text-[red]">*</span></label>
                <CustomInput
                  type="text"
                  name="name"
                  required
                  placeholder="First Name and Last Name"
                  className="bb h-[50px] w-[100%] bg-[transparent] rounded-[10px]"
                />
              </div>

              <div className="font-bold">
                <label htmlFor="name">Card Number<span className="text-[red]">*</span></label>
                <CustomInput
                  type="text"
                  name="number"
                  required
                  placeholder="Card Number"
                  className="bb h-[50px] w-[100%] bg-[transparent] rounded-[10px]"
                />
              </div>

              <CustomInput
                type="submit"
                required  
                value="Pay Now"
                className="bb h-[40px] w-[90%] bg-[#5F8670] text-white rounded-[10px] cursor-pointer lg:ml-3"
              />
            </form> 
          </div>
        </div>

        <div className="bg-[] p-2">
          {newcart.map((item, index) => (
            <li key={index} className="border-b py-2 flex items-center">
              <img src={`${item.image}`} alt={item.name} className="w-16 h-16 object-cover mr-4" />
              <div className="flex-1">
                <p className="font-bold">{item.name}</p>
                <p>SubTotal: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="font-bold">{item.quantity}</p>
              </div>
            </li>
          ))}
          <p className="font-bold">Total Price: ${totalPrice.toFixed(2)}</p>
          <p className="font-bold">Amount To Be Paid: {totalmoney}</p>
        </div>
      </div>
    </div>
  );
}

export default Payment2;
