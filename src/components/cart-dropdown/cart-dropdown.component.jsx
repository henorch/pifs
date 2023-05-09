import { useContext } from 'react';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import { CartButton, CartDropDn, CartItemed, EmptyMessage } from './cart-dropdown.styles';
import Button from '../button/button.components';


const CartDropDown = ({ ToggleCart }) => {
    const { cartItems, cartCount } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheck = () => {
        navigate('/checkout')
        ToggleCart()
    }
    
    return (
        <CartDropDn>
            {!cartCount && <EmptyMessage as="span">You Cart is currently empty</EmptyMessage>}
            <CartItemed>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
                 </CartItemed>
            <Button onClick={goToCheck}>CHECKOUT</Button>
        </CartDropDn>
    )
}

export default CartDropDown;