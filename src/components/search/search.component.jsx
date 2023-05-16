import { useContext, useState } from "react";
import { SearchButton, SearchGroup, SearchInput } from "./search.styled";
import { ProductContext } from "../../contexts/product.context";
import SearchReturn from "../searchresult";


const Search = ({setIsFocus}) => {
    const { products, filteredProduct,
        setProductFiltred } = useContext(ProductContext)
    const [searchField, setSearchField] = useState('');

    const OnSearchChange = ({target: {value}}) => {
        setSearchField(value);
        setProductFiltred(products.filter((iten) => iten.name.includes(value)));
    }

  
    return(
        <>
        <SearchGroup>
        <SearchInput 
            onFocus={()=> setIsFocus(true)}
            name="searchField"
            onChange={OnSearchChange}
            value={searchField}
            placeholder="search"/>
            <SearchButton>GO</SearchButton>
        </SearchGroup>
        </>
    )
}
export default Search;