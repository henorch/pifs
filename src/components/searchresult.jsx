const SearchReturn = ({filteredItems}) => {
    return(
        <div>{filteredItems.map((product) => <p>{product.name}</p>)}</div>
    )
}

export default SearchReturn;