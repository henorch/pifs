import { useContext } from "react";
import Button from "../button/button.components";
import { ItemInfo, ItemsHolder } from "./categories.styled";
import { CartContext } from "../../contexts/cart.context";

const CategoryItems = ({ categories }) => {
    const { name, price, id, imgurl } = categories;
    const { addItemToCart, cartItems} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(categories)
    return(
        <ItemsHolder key={id}>
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