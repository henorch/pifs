
import { CardCvcElement, 
     CardExpiryElement,
      CardNumberElement,
       useElements,
       useStripe} from "@stripe/react-stripe-js"
import Button from "../button/button.components"
import { FormContainer, PaymentContainer } from "./payment.styled"
import { useContext, useState } from "react"
import { UserContext } from "../../contexts/user.context"
import { CartContext } from "../../contexts/cart.context"



const Payment =  () => {
    const { currentUser } = useContext(UserContext)
    const { cartTotal } = useContext(CartContext)
    console.log(cartTotal);
    const name = currentUser?.email;
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ amount: cartTotal})
        }).then(res => res.json());
        const {
            paymentIntent: { client_secret }, 
        } =  response;

        console.log(client_secret);
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardNumberElement),
                billing_details:{
                    name
                }
            }
        });
        if(paymentResult.error){
            alert(paymentResult.error)
        }else{
            if(paymentResult.paymentIntent.status === "succeeded"){
                alert("payment successful")
            }
        }
    }
   
    return(
        <PaymentContainer onSubmit={paymentHandler}>
                <h1>Credit Card Payment</h1>
            <FormContainer>
                <b>Card Number:</b><CardNumberElement/>
            </FormContainer>
            <FormContainer>
                <b>Expiry date: </b><CardExpiryElement/>
            </FormContainer>
            <FormContainer>
            <b>CVV: </b><CardCvcElement/>
            </FormContainer>
               
                <Button type="submit">Pay now</Button>
        </PaymentContainer>
    )
}

export default Payment