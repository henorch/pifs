import { CategoryContainer, 
    TitleHolder,
     Radio,
     ItemsHolder } from "./categories.styled"
import CategoryItems from "./categoryitem.component";


const CategoriesMain = ({title, CATEGORIES}) => {
    return (
        <>
        <TitleHolder>{title}</TitleHolder>
        <CategoryContainer>
            {CATEGORIES.map((categories) => <CategoryItems key={categories.id} categories={categories}/>)}
        </CategoryContainer>
        </>
    )
}

export default CategoriesMain