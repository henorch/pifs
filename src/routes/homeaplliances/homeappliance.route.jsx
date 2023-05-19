import CategoriesMain from "../../components/categoriesmain/categories.component"
import HorizontalScroll from "../../components/horizontalscrol/horizontal.scroll.component"
import Search from "../../components/search/search.component"
import { DivTitle } from "../navigation/navigation.styles"
import { PRODUCTS } from "../../assets/product"
import { useContext } from "react"
import { ProductContext } from "../../contexts/product.context"
import { HomeContainer } from "../home/home.styled"





const HomeAppliance = () => {
    const {filteredProduct} = useContext(ProductContext)
    return (
        <HomeContainer>
            <div  style={{
            width:"80%"
        }}>
            <HorizontalScroll/>
    <h4 style={{
        width:"100%",
        padding:"10px",
        textAlign:"center"
    }}>Home Appliances and Gadgets</h4>
    <CategoriesMain CATEGORIES={PRODUCTS}/>
    </div>
    </HomeContainer>
    )
}
export default HomeAppliance