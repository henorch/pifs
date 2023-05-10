import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {

    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext)
    const { name, imgurl, quantity, price }  = cartItem;
    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img className='img' src={imgurl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            
            <span className='quantity'><span className='value' onClick={()=> addItemToCart(cartItem)}>+</span>{quantity}<span className='value' onClick={()=> removeItemFromCart(cartItem)}>-</span></span> 
            
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=> clearItemFromCart(cartItem)}>&#10005;</div>
         </div>
    )
}

export default CheckoutItem;