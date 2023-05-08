import { useState } from "react";
import { SearchButton, SearchGroup, SearchInput } from "./search.styled";


const Search = () => {
    const [searchField, setSearchField] = useState();
    const [products, setProducts] = useState([])

    const OnSearchChange = (event) => {
        const searchField = event.target.value;
        setSearchField(searchField)
    }

    

    return(
        <SearchGroup>
            <SearchInput 
            name="searchField"
            onChange={OnSearchChange}
            value={searchField}
            placeholder="search"/>
            <SearchButton>GO</SearchButton>
        </SearchGroup>
    )
}
export default Search;