import CategoriesMain from "../../components/categoriesmain/categories.component"
import HorizontalScroll from "../../components/horizontalscrol/horizontal.scroll.component"
import { DivTitle } from "../navigation/navigation.styles"
import { HomeApplianceContainer } from "../general-category.styled"
import { useContext } from "react"
import { ProductContext } from "../../contexts/product.context"
import SearchReturn from "../../components/searchresult"




const Equipments = () => {
   const {products} = useContext(ProductContext)
    return (
        <>
    <h4 style={{
        width:"100%",
        padding:"2px",
        textAlign:"center"
    }}>Equipments</h4>
     <CategoriesMain CATEGORIES={products}/>
    </>
    )
}
export default Equipments