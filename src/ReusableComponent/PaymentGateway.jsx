// // PaymentGateway.jsx
// import React, { useState } from "react";
// import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

// function PaymentGateway() {
//   // Generate a stable transaction reference for the component lifecycle
//   const [txRef] = useState(`tx-${Date.now()}`);

//   const config = {
//     public_key: "FLWPUBK_TEST-322d8011706196f7f82449b5eb87211e-X",
//     tx_ref: txRef, // Use a stable transaction reference
//     amount: 100, // Amount to charge
//     currency: "USD",
//     payment_options: "card,banktransfer,ussd",
//     customer: {
//       email: "user@example.com",
//       phonenumber: "08012345678",
//       name: "Customer Name",
//     },
//     customizations: {
//       title: "Product Purchase",
//       description: "Payment for product",
//       logo: "https://your-logo-url.com", // Optional
//     },
//   };

//   const fwConfig = {
//     ...config,
//     text: "Pay Now",
//     callback: (response) => {
//       console.log(response);
//       closePaymentModal(); // Close the payment modal programmatically
//     },
//     onClose: () => {
//       console.log("Payment closed");
//     },
//   };

//   return <FlutterWaveButton {...fwConfig} />;
// }

// export default PaymentGateway;

import React from "react";

const PaymentGateway = () => {
  const handleFlutterwavePayment = () => {
    window.FlutterwaveCheckout({
      public_key: "YOUR_FLUTTERWAVE_PUBLIC_KEY", // Replace with your actual public key
      tx_ref: Date.now(),
      amount: 100,
      currency: "USD",
      payment_options: "card, mobilemoney, ussd",
      customer: {
        email: "user@example.com",
        phone_number: "07012345678",
        name: "John Doe",
      },
      customizations: {
        title: "Diadem Shopping Mall",
        description: "Payment for items in cart",
        logo: "https://example.com/logo.png", // Optional
      },
      callback: (response) => {
        console.log(response);
        if (response.status === "successful") {
          alert("Payment successful");
        }
      },
      onclose: () => {
        console.log("Payment modal closed");
      },
    });
  };

  return (
    <button
      onClick={handleFlutterwavePayment}
      className="bg-blue-500 text-white py-2 px-4 rounded"
    >
      Pay Now
    </button>
  );
};

export default PaymentGateway;

