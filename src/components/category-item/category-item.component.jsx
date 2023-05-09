import { Link } from "react-router-dom";
import Button from "../button/button.components";
import { CategoryBody, CategoryContainer } from "./category-item.styled";


const Category = ({categories}) => {
     const { title, imageUrl, url} = categories; 
    return (
        <CategoryContainer to={`${url}`}>
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