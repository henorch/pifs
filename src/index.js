import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { ProductProvider } from './contexts/product.context';
import { CartProvider } from './contexts/cart.context';
import { Elements } from "@stripe/react-stripe-js"
// import { stripePromise } from './utils/stripe.js/stripe.utils';
import * as serviceWorkRegistration from "./serviceWorkerRegistration"
import { ThemeProvider } from './contexts/theme.context';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider>
    <BrowserRouter>
    <UserProvider>
       <ProductProvider>
        <CartProvider>
          {/* <Elements stripe={stripePromise}> */}
            <App />
          {/* </Elements> */}
         </CartProvider>
       </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </ThemeProvider>
);

serviceWorkRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
