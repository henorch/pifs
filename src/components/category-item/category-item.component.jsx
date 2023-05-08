import { CategoryBody, CategoryContainer } from "./category-item.styled";

const Category = ({categories}) => {
     const { title, imageUrl } = categories; 
    return (
        <CategoryContainer>
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
              }}/>
              <CategoryBody>
                <h2>{title}</h2>
                <p>SHOP NOW</p>
              </CategoryBody>
            </CategoryContainer>
            )
          }
    

export default Category;