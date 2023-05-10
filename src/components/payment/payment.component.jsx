
import { CardCvcElement, 
     CardExpiryElement,
      CardNumberElement,
       useElements,
       useStripe} from "@stripe/react-stripe-js"
import Button from "../button/button.components"
import { FormContainer, PaymentContainer } from "./payment.styled"



const Payment =  () => {
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
            body: JSON.stringify({ amount: 100000})
        }).then(res => res.json());
        const {
            paymentIntent: { client_secret }, 
        } =  response;

        console.log(client_secret);
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardNumberElement),
                billing_details:{
                    name:"Oluwaniyi Enoch",
                    email:"henorch01@gmail.com"
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