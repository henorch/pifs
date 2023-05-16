
import './cart-item.styles.scss'


const CartItem = ({ cartItem }) => {

    const { name, imgurl, quantity, price }  = cartItem;
    return(
        <div className='cart-item-container'>
            <img src={imgurl}  alt={`${name}`}/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='qty'>{quantity}</span>
                <span className='price'>&#8358;{price}</span>
            </div>
        </div>
    )
}
export default CartItem