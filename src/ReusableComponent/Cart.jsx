import React from 'react';
import CustomButton from './MyButton/CustomButton';
import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';

function Cart({visible , cart, removeFromCart, increaseQuantity, decreaseQuantity, checkout }) {
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="cart-items h-[500px] overflow-y-scroll p-5 text-black">
      <div className="min-h-[700px]">
      <h2 className="text-xl font-bold">Cart Items:</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="border-b py-2 flex items-center">
            <img src={`http://localhost:5000${item.image}`} alt={item.name} className="w-16 h-16 object-cover mr-4" />
            <div className="flex-1">
              <p className="font-bold">{item.name}</p>
              <p>Price: $ {item.price.toFixed(2)}</p>
              <p>SubTotal: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div className="flex gap-2 items-center">
              <button
                className="bg-blue-500 text-white py-1 px-2 rounded"
                onClick={() => increaseQuantity(item)}
              >
                +
              </button>
              <p>{item.quantity}</p>
              <button
                className="bg-red-500 text-white py-1 px-2 rounded"
                onClick={() => decreaseQuantity(item)}
              >
                -
              </button>
              <button
                className="text-red-500 font-bold"
                onClick={() => removeFromCart(item)}
              >
                <MdOutlineDeleteForever size={30} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-4">
        <p className="font-bold">Total Price: ${totalPrice.toFixed(2)}</p>

        <Link to='/checkout' onClick={visible} className="bg-green-500 text-white font-bold py-2 px-4 rounded">Checkout</Link>

        {/* <Link to='/checkout' className="bg-green-500 text-white font-bold py-2 px-4 rounded">Checkout</Link> */}

        {/* <CustomButton
        label = 'Checkout'  
        height = '30px'
        
          className="bg-green-500 text-white font-bold py-2 px-4 rounded"
          onClick={checkout}
        /> */}
          
        
      </div>
      </div>
    </div>
  );
}

export default Cart;
