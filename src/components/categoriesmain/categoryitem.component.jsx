import { useContext } from "react";
import Button from "../button/button.components";
import { ItemInfo, ItemsHolder } from "./categories.styled";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CategoryItems = ({ categories }) => {
    const { name, price, id, imgurl } = categories;
    const { addItemToCart, cartItems} = useContext(CartContext);
    const navigate  = useNavigate();

    const addProductToCart = () => addItemToCart(categories)
    
    const handleOnClick = (categories) => {
        navigate('/detail', {state: categories})
    }

    return(
        <ItemsHolder onClick={() => handleOnClick(categories)} key={id}>
            <img src={`${imgurl}`} style={{
                width:"120px",
                height:"120px"
            }}/>
            <ItemInfo>
                
                 <b>{name}</b>
                <span>{price}</span>
                
                <Button onClick={
                        addProductToCart
                }>ADD TO CART</Button>
            </ItemInfo>
           
    </ItemsHolder>
    )
}

export default CategoryItems;