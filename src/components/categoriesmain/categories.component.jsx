import { useContext } from "react";
import { CategoryContainer, 
    TitleHolder,
} from "./categories.styled"
import CategoryItems from "./categoryitem.component";
import { ProductContext } from "../../contexts/product.context";
import { CartContext } from "../../contexts/cart.context";


const CategoriesMain = ({title, CATEGORIES}) => {
    const { products, filteredProduct } = useContext(ProductContext)
    return (
        <>
        <TitleHolder>{title}</TitleHolder>
        <CategoryContainer>
            {filteredProduct?.map((categories) => <CategoryItems key={categories.id}  categories={categories}/>)}
        </CategoryContainer>
        </>
    )
}

export default CategoriesMain