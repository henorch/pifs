import React, { useContext } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import Button from './button/button.components';
import { UserContext } from '../contexts/user.context';
import { CartContext } from '../contexts/cart.context';

const FlutterWave = () =>  {
    const { currentUser } = useContext(UserContext)
    const { cartTotal } = useContext(CartContext)
    const username = currentUser?.email || "guest";
  const config = {
    public_key: "FLWPUBK_TEST-43dda424fa6b4470c6d117b959afd649-X",
    tx_ref: Date.now(),
    amount: cartTotal,
    currency: 'NGN',
    payment_options: 'card, mobilemoney, ussd',
    customer: {
      email: currentUser?.email,
      phone_number: '07033407608',
      name: username,
    },
    customizations: {
      title: currentUser?.displayName,
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
        <Button>PIB</Button>

     <h1>or</h1>

      <Button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        PAY NOW
      </Button>
    </div>
  );
}

export default FlutterWave;