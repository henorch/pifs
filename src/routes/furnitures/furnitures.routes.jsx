import CategoriesMain from "../../components/categoriesmain/categories.component"
import HorizontalScroll from "../../components/horizontalscrol/horizontal.scroll.component"
import Search from "../../components/search/search.component"
import { DivTitle } from "../navigation/navigation.styles"
import { HomeApplianceContainer } from "../general-category.styled"
import { PRODUCTS } from "../../assets/product"
import { useContext } from "react"
import { ProductContext } from "../../contexts/product.context"





const Furnitures = () => {
    const {filteredProduct} = useContext(ProductContext)
    return (
        <>
    <h4 style={{
        width:"100%",
        padding:"2px",
        textAlign:"center"
    }}>Furnitures and Interrior Decor</h4>
    {/* <HorizontalScroll/> */}
    <CategoriesMain CATEGORIES={PRODUCTS}/>
    </>
    )
}
export default Furnitures