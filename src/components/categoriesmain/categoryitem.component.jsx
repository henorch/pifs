import { ItemsHolder } from "./categories.styled";

const CategoryItems = ({categories}) => {
    const { name, description } = categories;
    return(
        <ItemsHolder>
            <h3>{name}</h3>
            <p>{description}</p>
    </ItemsHolder>
    )
}

export default CategoryItems;