import CategoriesMain from "../../components/categoriesmain/categories.component"
import HorizontalScroll from "../../components/horizontalscrol/horizontal.scroll.component"
import Search from "../../components/search/search.component"
import { DivTitle } from "../navigation/navigation.styles"
import { HomeApplianceContainer } from "../general-category.styled"

const FURNITURES = [
    {
        "id": 1,
        "name": "LG 42inches smart tv set",
        "description": "A smart tv with netflix and miracast equipments"
    },
    {
        "id": 2,
        "name": "Samsung 42inches smart tv set",
        "description": "A smart tv with netflix and miracast equipments"
    },
    {
        "id": 3,
        "name": "Polaroid 42inches smart tv set",
        "description": "A smart tv with netflix and miracast equipments"
    },
    {
        "id": 4,
        "name": "Home Theatre Samsung",
        "description": "A smart tv with netflix and miracast equipments"
    }
]



const Wares = () => {
    return (
        <>
    <h4 style={{
        width:"100%",
        padding:"20px",
        textAlign:"center"
    }}>Home Apppliances</h4>
    <HorizontalScroll/>
    <CategoriesMain CATEGORIES={FURNITURES}/>
    </>
    )
}
export default Wares