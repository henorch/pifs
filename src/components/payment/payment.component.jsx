
import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement} from "@stripe/react-stripe-js"
import Button from "../button/button.components"
import { FormContainer, PaymentContainer } from "./payment.styled"



const Payment =  () => {
    return(
        <PaymentContainer>
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
               
                <Button>Pay now</Button>
        </PaymentContainer>
    )
}

export default Payment