import CategoriesMain from "../../components/categoriesmain/categories.component"
import HorizontalScroll from "../../components/horizontalscrol/horizontal.scroll.component"
import Search from "../../components/search/search.component"
import { DivTitle } from "../navigation/navigation.styles"
import { HomeApplianceContainer } from "../general-category.styled"
import { PRODUCTS } from "../../assets/product"





const OfficeSurplies = () => {
    return (
        <>
    <h4 style={{
        width:"100%",
        padding:"20px",
        textAlign:"center"
    }}>Home Apppliances</h4>
    <HorizontalScroll/>
    <CategoriesMain CATEGORIES={PRODUCTS}/>
    </>
    )
}
export default OfficeSurplies