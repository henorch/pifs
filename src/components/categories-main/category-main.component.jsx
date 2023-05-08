import Category from '../category-item/category-item.component';
import { CategoryContainer } from './category-main.styles';




  const CategoryMain = ({categories}) => {
    return (
        <CategoryContainer>
            {categories.map((category) => 
                <Category key={categories.id} categories={category}/>)}
        </CategoryContainer>
    )
  }

  export default CategoryMain;