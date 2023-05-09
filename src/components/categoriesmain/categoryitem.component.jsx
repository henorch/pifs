import Button from "../button/button.components";
import { ItemInfo, ItemsHolder } from "./categories.styled";

const CategoryItems = ({categories}) => {
    const { name, price, description, imgurl } = categories; 
    return(
        <ItemsHolder>
            <img src={`${imgurl}`} style={{
                width:"120px",
                height:"120px"
            }}/>
            <ItemInfo>
                
                 <b>{name}</b>
                <span>{price}</span>
                
                <Button>ADD TO CART</Button>
            </ItemInfo>
           
    </ItemsHolder>
    )
}

export default CategoryItems;