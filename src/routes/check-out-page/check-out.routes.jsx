import './check-out.styles.jsx'
import { useContext } from 'react';
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CheckOutContainer, CheckOutHeader, Total } from './check-out.styles.jsx';
import Payment from '../../components/payment/payment.component.jsx';
import Button from '../../components/button/button.components.jsx';

const CheckOutPage = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <CheckOutContainer>
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
                <Total>Total = ${ cartTotal }</Total>
                <Button>PIB</Button>
                <p> or </p>
                <Payment/>
        </CheckOutContainer>
    )   
}
export default CheckOutPage;