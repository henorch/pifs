import './check-out.styles.jsx'
import { useContext } from 'react';
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CheckOutContainer, CheckOutHeader, EmptyCart, Total } from './check-out.styles.jsx';
import Payment from '../../components/payment/payment.component.jsx';
import Button from '../../components/button/button.components.jsx';
import FlutterWave from '../../components/FlutterWave.jsx';
import emailjs from '@emailjs/browser';
import { UserContext } from '../../contexts/user.context.jsx';
import { useNavigate } from 'react-router-dom';

const CheckOutPage = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    const { currentUser } = useContext(UserContext);
    
    const navigate = useNavigate();

   const items = JSON.stringify(cartItems);
    const sendEmail = () => {
        var templateParams = {
            name: 'PIFS',
            message: items,
        };
         
        emailjs.send('service_cwbp5bl', 'template_5cfyt2h', 
        templateParams,
        'kWHmNrwAR1miSNO_B')
            .then(function(response) {
               alert("We have recieve your order, we will get back to you as soon as possible")
            }, function(error) {
               console.log('FAILED...', error);
            });
        }

    return (
        <CheckOutContainer>
            <h1 style={{
                fontSize:"3em",
                width:"100%",
                textAlign:"left",
                padding:"10px"
            }}> Check Out</h1>
            <CheckOutHeader>
                <div className='header-block'><span>Product</span></div>
                <div className='header-block'><span>Description</span></div>
                <div className='header-block'><span>Quantity</span></div>
                <div className='header-block'><span>Price</span></div>
                <div className='header-block'><span>Remove</span></div>
            </CheckOutHeader>
                {cartItems.map((cartItem) => <CheckoutItem id={cartItem.id} cartItem={cartItem}/>
                    )
                }
                {cartTotal == 0 && <EmptyCart>You Cart is currently empty
                    <Button onClick={()=> navigate("/")}>START SHOPPING</Button></EmptyCart>}
            
                {!cartTotal == 0 && <Total>Total = &#8358;{ cartTotal }</Total> }
                {!cartTotal == 0 &&  <> <Button style={{
                margin:"20px"
               }}
              onClick={sendEmail}>Submit Order</Button>
              
                <FlutterWave />
                </>
              }
        </CheckOutContainer>
    )   
}
export default CheckOutPage;