import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from './Container';
import './index.css';
// import 'lord-icon-element';
// import lottie from 'lottie-web'; // Import lottie-web
// import { defineElement } from 'lord-icon-element';

// Define the lord-icon custom element using lottie
// defineElement(lottie.loadAnimation);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
