import React, { useEffect, useState } from 'react';
import { PaystackButton } from 'react-paystack';
import SliderComponent from '../../ReusableComponent/Slider/SliderComponent';
import CustomInput from '../../ReusableComponent/MyInput/CustomInput';

function CheckoutForm2() {
    const Delivery = 1000; // Delivery fee in Naira
    const publicKey = 'pk_test_cfd8fb2a57eefcc2ec6f89807437c147f627510f'; // Replace with your Paystack public key

    // State for cart and user details
    const [newcart, setNewcart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const [email, setEmail] = useState('');
    const [phoneNumber, setPhone] = useState('');
    const [firstName, setFirstname] = useState('');
    const [homeadd, setHome] = useState('');

    // Calculate total price
    const totalPrice = newcart.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalAmount = (totalPrice + Delivery) * 100; // Convert to kobo for Paystack

    // Simplified Paystack component props for debugging
    const componentProps = {
        email: email || 'testuser@example.com', // Default email if none provided
        amount: totalAmount || 10000, // Default to 100 NGN if amount is 0
        publicKey,
        text: 'Make Payment',
        metadata: {
            name: firstName || 'Test User',
            phone: phoneNumber || '08012345678',
            address: homeadd || 'Default Address',
        },
        onSuccess: (response) => {
            console.log('Payment successful:', response);
            alert('Thanks for ordering from us!');
        },
        onClose: () => alert('Are you sure you want to close?'),
    };

    return (
        <div className="min-h-[100vh] w-full bg-[#E7F0DC] grid grid-cols-1 lg:grid-cols-[32%,40%,24%] gap-6">
            {/* Slider Section */}
            <div className="h-[60vh] lg:h-[100vh] flex items-center p-2">
                <div className="min-h-[400px] w-full flex justify-center">
                    <SliderComponent />
                </div>
            </div>

            {/* Form Section */}
            <div>
                <div className="h-[80px] w-full bg-[#5F8670] text-[20px] md:text-[35px] flex justify-center items-center text-white font-bold">
                    <h1>Your order details</h1>
                </div>

                <div className="p-5">
                    <form className="space-y-4">
                        <div className="font-semibold">
                            <label htmlFor="name">First name <span className="text-[red]">*</span></label>
                            <CustomInput
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstname(e.target.value)}
                                placeholder="First Name"
                                className="border-[2px] border-solid border-emerald-600 h-[50px] w-full bg-[transparent] rounded-[10px]"
                            />
                        </div>
                        <div className="font-semibold">
                            <label htmlFor="email">Email <span className="text-[red]">*</span></label>
                            <CustomInput
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email"
                                className="border-[2px] border-solid border-emerald-600 h-[50px] w-full bg-[transparent] rounded-[10px]"
                            />
                        </div>
                        <div className="font-semibold">
                            <label htmlFor="telephone">Telephone <span className="text-[red]">*</span></label>
                            <CustomInput
                                type="text"
                                value={phoneNumber}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Telephone"
                                className="border-[2px] border-solid border-emerald-600 h-[50px] w-full bg-[transparent] rounded-[10px]"
                            />
                        </div>
                        <div className="font-semibold">
                            <label htmlFor="address">Your full address <span className="text-[red]">*</span></label>
                            <CustomInput
                                type="text"
                                value={homeadd}
                                onChange={(e) => setHome(e.target.value)}
                                placeholder="Your full address"
                                className="border-[2px] border-solid border-emerald-600 h-[50px] w-full bg-[transparent] rounded-[10px]"
                            />
                        </div>
                        <div className="pt-4">
                            <PaystackButton
                                {...componentProps}
                                className="border-[2px] border-solid border-emerald-600 h-[40px] w-[90%] font-semibold rounded-[10px] lg:ml-3 hover:bg-[#5F8670] cursor-pointer flex justify-center items-center"
                            />
                        </div>
                    </form>
                </div>
            </div>

            {/* Cart Section */}
            <div className="p-2">
                {newcart.map((item, index) => (
                    <li key={index} className="border-b py-2 flex items-center">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                        <div className="flex-1">
                            <p className="font-bold">{item.name}</p>
                            <p>SubTotal: ${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="font-bold">{item.quantity}</p>
                        </div>
                    </li>
                ))}
                <p className="font-bold">Total Price: ${(totalPrice).toFixed(2)}</p>
                <p className="font-bold">Delivery Fee: ${Delivery}</p>
                <p className="font-bold">Grand Total: ${(totalPrice + Delivery).toFixed(2)}</p>
            </div>
        </div>
    );
}

export default CheckoutForm2;
